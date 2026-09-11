#!/usr/bin/env node

// Import configuration
const config = require('./config.js');

// Import required modules
const Command = require("./classes/command.js");
const Config = require("./classes/config.js");
const Got = require("./classes/got.js");

const Cache = require("./singleton/cache.js");
const Logger = require("./singleton/logger.js");
const Utils = require("./singleton/utils.js");

const HoyoLab = require("./hoyolab-modules/template.js");
const Platform = require("./platforms/template.js");

const Date = require("./object/date.js");
const Error = require("./object/error.js");
const RegionalTaskManager = require("./object/regional-task-manager.js");

// Import daily cron tasks to execute manually
const CheckIn = require("./crons/check-in/index.js");
const CodeRedeem = require("./crons/code-redeem/index.js");
const Mimo = require("./crons/mimo/index.js");
const Hilichurl = require("./crons/hilichurl/index.js");

// Main function to execute everything once
async function main() {
  try {
    console.log('Starting Hoyolab Auto (single run)...');

    const start = process.hrtime.bigint();

    // Validate platforms configuration
    const platformsConfig = config.platforms;
    if (!platformsConfig || platformsConfig.length === 0) {
      console.warn("No platforms configured! Exiting.");
      process.exit(0);
    }

    // Initialize global app object
    globalThis.app = {
      Date,
      Error,
      RegionalTaskManager,
      Config,
      Command,
      Got: await Got.initialize(),
      Cache: new Cache(),
      Logger: new Logger(config.loglevel),
      Utils: new Utils()
    };

    app.Logger.info("Client", "Loading configuration data");
    Config.load(config);
    app.Logger.info("Client", `Loaded ${Config.data.size} configuration entries`);

    // Load commands
    const { loadCommands } = require("./commands/index.js");
    const commands = await loadCommands();
    await Command.importData(commands.definitions);

    // Validate accounts configuration
    const accountsConfig = config.accounts;
    if (!accountsConfig || accountsConfig.length === 0) {
      app.Logger.warn("Client", "No accounts configured! Exiting.");
      process.exit(0);
    }

    // Initialize accounts
    const accounts = new Set();
    for (const definition of accountsConfig) {
      if (!definition.active) {
        app.Logger.warn("Client", `Skipping ${definition.type} account (inactive)`);
        continue;
      }

      accounts.add(HoyoLab.create(definition.type, definition));
    }

    // Import Got definitions
    const definitions = require("./gots/index.js");
    await app.Got.importData(definitions);

    // Update global app object
    globalThis.app = {
      ...app,
      Platform,
      HoyoLab
    };

    // Login to all accounts
    const hoyoPromises = [];
    for (const account of accounts) {
      hoyoPromises.push(account.login());
    }

    await Promise.all(hoyoPromises);

    // Initialize platforms
    const platforms = new Set();
    for (const definition of platformsConfig) {
      if (!definition.active) {
        app.Logger.warn("Client", `Skipping ${definition.type} platform (inactive)`);
        continue;
      }

      platforms.add(Platform.create(definition.type, definition));
    }

    // Connect to all platforms
    const promises = [];
    for (const platform of platforms) {
      promises.push(platform.connect());
    }

    await Promise.all(promises);

    const end = process.hrtime.bigint();
    app.Logger.info("Client", `Initialize completed (${Number(end - start) / 1e6}ms)`);

    // ─── DAILY TASKS ────────────────────────────────────────────────────────────

    // 1. Daily Check-in (most critical — free rewards)
    app.Logger.info("RunOnce", "━━━ [1/4] Starting daily check-in...");
    try {
      await CheckIn.code();
    }
    catch (err) {
      app.Logger.error("RunOnce", `Check-in failed: ${err.message}`);
    }

    // 2. Code Redemption (automatic gift codes)
    app.Logger.info("RunOnce", "━━━ [2/4] Starting code redemption...");
    try {
      await CodeRedeem.code();
    }
    catch (err) {
      app.Logger.error("RunOnce", `Code redeem failed: ${err.message}`);
    }

    // 3. Traveling Mimo (Star Rail / ZZZ mini-game automation)
    app.Logger.info("RunOnce", "━━━ [3/4] Starting Traveling Mimo automation...");
    try {
      await Mimo.code();
    }
    catch (err) {
      app.Logger.error("RunOnce", `Mimo automation failed: ${err.message}`);
    }

    // 4. Hilichurl Machine Workshop (Genshin Impact daily)
    app.Logger.info("RunOnce", "━━━ [4/4] Starting Hilichurl Workshop automation...");
    try {
      await Hilichurl.code();
    }
    catch (err) {
      app.Logger.error("RunOnce", `Hilichurl automation failed: ${err.message}`);
    }

    // ── DONE ──────────────────────────────────────────────────────────────────
    app.Logger.info("RunOnce", "✅ All daily tasks completed!");
    console.log('Execution completed successfully.');
    process.exit(0); // Exit when finished

  } catch (err) {
    console.error('Error during execution:', err);
    app?.Logger?.error("RunOnce", `Execution failed: ${err.message}`);
    process.exit(1); // Exit with error if it fails
  }
}

// Handle unhandled promise rejections
process.on("unhandledRejection", (reason) => {
  if (!(reason instanceof Error)) {
    return;
  }

  console.error("Unhandled promise rejection:", reason);
  process.exit(1);
});

// Execute main function
main();