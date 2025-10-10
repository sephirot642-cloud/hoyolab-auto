const file = require("node:fs");
const JSON5 = require("json5");

// Use production config in GitHub Actions or when NODE_ENV is production
const isProduction = process.env.NODE_ENV === 'production' || process.env.GITHUB_ACTIONS === 'true';
const defaultConfigPath = isProduction ? "./config.production.json5" : "./config.json5";
const configPath = process.env.CONFIG_PATH || defaultConfigPath;
let config;
try {
	let configContent = file.readFileSync(configPath, 'utf8');
	
	// Replace placeholders with environment variables in production
	if (isProduction) {
		configContent = configContent
			.replace(/HOYOLAB_COOKIE_PLACEHOLDER/g, process.env.HOYOLAB_COOKIE || '')
			.replace(/TELEGRAM_BOT_TOKEN_PLACEHOLDER/g, process.env.TELEGRAM_BOT_TOKEN || '')
			.replace(/TELEGRAM_CHAT_ID_PLACEHOLDER/g, process.env.TELEGRAM_CHAT_ID || '0')
			.replace(/DISCORD_WEBHOOK_URL_PLACEHOLDER/g, process.env.DISCORD_WEBHOOK_URL || '');
	}
	
	config = JSON5.parse(configContent);
}
catch (e) {
	if (file.existsSync(configPath) === false) {
		throw new Error(`No config file (${configPath}) was found. Please follow the setup instructions on https://github.com/torikushiii/hoyolab-auto?tab=readme-ov-file#installation \n${e}`);
	}

	throw new Error(`An error occurred when reading your configuration file (${configPath}). Please check and fix the following error:\n${e}`);
}

module.exports = config;
