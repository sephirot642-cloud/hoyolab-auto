# HoyoLab Auto - GitHub Actions Setup

This project is configured to run automatically every day using GitHub Actions.

## 🔧 GitHub Secrets Configuration

For GitHub Actions to work correctly, you need to configure the following secrets in your repository:

### Steps to add secrets:

1. Go to your repository on GitHub
2. Click on **Settings**
3. In the sidebar menu, click on **Secrets and variables** → **Actions**
4. Click on **New repository secret**

### 📋 Required secrets:

#### `HOYOLAB_COOKIE` (Required)
The complete HoyoLab cookie that includes all necessary tokens:
```
ltuid_v2=YOUR_LTUID; ltoken_v2=YOUR_LTOKEN_V2; ltmid_v2=YOUR_LTMID; cookie_token_v2=YOUR_COOKIE_TOKEN_V2; account_mid_v2=YOUR_ACCOUNT_MID; account_id_v2=YOUR_ACCOUNT_ID
```

#### `TELEGRAM_BOT_TOKEN` (Optional)
Your Telegram bot token:
```
1234567890:ABC-DEF1234ghIkl-zyx57W2v1u123ew11
```

#### `TELEGRAM_CHAT_ID` (Optional)  
Your Telegram chat ID:
```
123456789
```

#### `DISCORD_WEBHOOK_URL` (Optional)
Your Discord webhook URL:
```
https://discord.com/api/webhooks/YOUR_WEBHOOK_ID/YOUR_WEBHOOK_TOKEN
```

## ⏰ Execution Schedule

The workflow is configured to run daily at **14:00 UTC**:
- **You can change the schedule** by editing the line `cron: '0 14 * * *'` in `.github/workflows/daily-checkin.yml`

## 🎯 Automatic Functions

The system will automatically execute:

✅ **Daily check-in** for all active games
✅ **Code redemption** automatically for new codes  
✅ **Notifications** via Telegram and Discord
✅ **Activity logs** (available for 7 days)

## 🚀 Manual execution

You can also run the workflow manually:
1. Go to the **Actions** tab in your repository
2. Select **HoyoLab Auto Daily Check-in**
3. Click on **Run workflow**

## 📊 Monitoring

- Logs are available in the **Actions** tab of your repository
- Notifications will be sent to Telegram/Discord according to your configuration
- Log artifacts are saved for 7 days

## 🔒 Security

- ✅ Cookies and tokens are stored securely in GitHub Secrets
- ✅ They are not shown in public logs
- ✅ Only your repository has access to these secrets

## 🛠️ Local development

For local development, use:
```bash
npm run run:once
```

The system will automatically use `config.json5` for local development and `config.production.json5` for GitHub Actions.

---

**⚠️ Important:** Make sure to keep your cookies updated. If they change, you'll need to update the `HOYOLAB_COOKIE` secret on GitHub.