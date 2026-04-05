#!/usr/bin/env node
/**
 * generate-config.js
 * Generates config.json5 from environment variables for CI/GitHub Actions.
 * Avoids shell escaping issues with cookie values (semicolons, base64, etc.)
 *
 * Required env vars:
 *   HOYOLAB_COOKIE         — HoyoLab cookie string (shared across all games)
 *
 * Optional env vars (at least one notification platform recommended):
 *   TELEGRAM_BOT_TOKEN     — Telegram bot token
 *   TELEGRAM_CHAT_ID       — Telegram chat ID (numeric)
 *   DISCORD_WEBHOOK_URL    — Discord webhook URL
 */

const fs = require("fs");
const path = require("path");

const cookie           = process.env.HOYOLAB_COOKIE        || "";
const telegramToken    = process.env.TELEGRAM_BOT_TOKEN    || "";
const telegramChatId   = process.env.TELEGRAM_CHAT_ID      || "0";
const discordWebhook   = process.env.DISCORD_WEBHOOK_URL   || "";

const hasCookie   = cookie.trim().length > 0;
const hasTelegram = telegramToken.trim().length > 0;
const hasDiscord  = discordWebhook.trim().length > 0;

// -- Diagnostics (secrets are masked by GH Actions in logs) --
console.log("🔧 Config generator — environment check:");
console.log(`   HOYOLAB_COOKIE     : ${hasCookie   ? `✅ set (${cookie.length} chars)` : "❌ MISSING"}`);
console.log(`   TELEGRAM_BOT_TOKEN : ${hasTelegram ? "✅ set"                           : "⚠️  not set"}`);
console.log(`   TELEGRAM_CHAT_ID   : ${telegramChatId !== "0" ? "✅ set"                : "⚠️  not set"}`);
console.log(`   DISCORD_WEBHOOK_URL: ${hasDiscord  ? "✅ set"                           : "⚠️  not set"}`);

if (!hasCookie) {
    console.error("\n❌ HOYOLAB_COOKIE is empty or not set.");
    console.error("   → Add it in: GitHub repo → Settings → Secrets → Actions → HOYOLAB_COOKIE");
    process.exit(1);
}

if (!hasTelegram && !hasDiscord) {
    console.warn("\n⚠️  No notification platform configured.");
    console.warn("   Tasks will run but you won't receive any notifications.");
}

// -- Build config object (JSON is valid JSON5) --
const config = {
    loglevel: "info",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
    platforms: [
        {
            id: 1,
            active: false,
            type: "discord",
            botId: "123",
            token: "placeholder"
        },
        {
            id: 2,
            active: hasTelegram,
            type: "telegram",
            chatId: parseInt(telegramChatId, 10) || 0,
            token: telegramToken,
            disableNotification: false
        },
        {
            id: 3,
            active: hasDiscord,
            type: "webhook",
            url: discordWebhook
        }
    ],
    crons: {
        whitelist: [],
        blacklist: [],
        checkIn: "0 0 0 * * *",
        codeRedeem: "*/15 * * * *",
        expedition: "0 */30 * * * *",
        missedCheckIn: "0 0 23 * * *",
        realmCurrency: "0 */1 * * *",
        shopStatus: "0 */1 * * *",
        stamina: "0 */30 * * * *"
    },
    accounts: [
        {
            id: 1,
            active: hasCookie,
            type: "honkai",
            data: [{ cookie }]
        },
        {
            id: 2,
            active: false,
            type: "termis",
            data: [{ cookie: "" }]
        },
        {
            id: 3,
            active: hasCookie,
            type: "genshin",
            data: [{
                cookie,
                redeemCode: true,
                dailiesCheck: true,
                weekliesCheck: true,
                realm:      { check: false, persistent: false },
                stamina:    { check: false, threshold: 150, persistent: false },
                expedition: { check: false, persistent: false },
                discord:    { userId: null }
            }]
        },
        {
            id: 4,
            active: hasCookie,
            type: "starrail",
            data: [{
                cookie,
                redeemCode: true,
                dailiesCheck: true,
                weekliesCheck: true,
                mimo: { check: true, jitter: 0, lottery: true, reservePoints: 0, redeemDraw: true },
                stamina:    { check: false, threshold: 230, persistent: false },
                expedition: { check: false, persistent: false },
                discord:    { userId: null }
            }]
        },
        {
            id: 5,
            active: hasCookie,
            type: "zenless",
            data: [{
                cookie,
                redeemCode: true,
                shopStatus: false,
                dailiesCheck: true,
                mimo: { check: true, jitter: 0, lottery: true, reservePoints: 0, redeemDraw: true },
                stamina:  { check: false, threshold: 200, persistent: false },
                discord:  { userId: null }
            }]
        }
    ]
};

const outputPath = path.join(__dirname, "..", "config.json5");
fs.writeFileSync(outputPath, JSON.stringify(config, null, 4));
console.log(`\n✅ config.json5 written to ${outputPath}`);
