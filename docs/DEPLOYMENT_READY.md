# 🎮 HoyoLab Auto - GitHub Actions Configured

Your HoyoLab bot is ready to run automatically on GitHub Actions!

## ✅ Project Status

- ✅ **Script `run_once.js`** - Working correctly
- ✅ **Production configuration** - Ready with environment variables
- ✅ **GitHub Actions Workflow** - Configured for daily execution
- ✅ **Cookie system** - Configured with secure placeholders
- ✅ **Notifications** - Telegram and Discord configured
- ✅ **Local testing** - Test scripts available

## 🚀 Next Steps for GitHub

### 1. Push code to GitHub
```bash
git add .
git commit -m "Add GitHub Actions workflow for daily HoyoLab check-in"
git push origin main
```

### 2. Configure GitHub Secrets
Go to your repository on GitHub → **Settings** → **Secrets and variables** → **Actions**

Add these secrets:

| Secret Name | Value | Required |
|-------------|-------|----------|
| `HOYOLAB_COOKIE` | Your complete HoyoLab cookie | ✅ Yes |
| `TELEGRAM_BOT_TOKEN` | `1234567890:ABC-DEF1234ghIkl-zyx57W2v1u123ew11` | ⚠️ Optional |
| `TELEGRAM_CHAT_ID` | `123456789` | ⚠️ Optional |
| `DISCORD_WEBHOOK_URL` | Your Discord webhook URL | ⚠️ Optional |

### 3. Activate GitHub Actions
- Go to the **Actions** tab in your repository
- If disabled, activate it
- **Everything at 14:00 UTC**

## 🧪 Local Testing

### Test production configuration:
```bash
npm run test:production
```

### Run the bot once:
```bash
npm run run:once
```

### Test with environment variables:
```bash
# Windows PowerShell
$env:NODE_ENV="production"; $env:HOYOLAB_COOKIE="your_cookie_here"; npm run run:once

# Linux/Mac
NODE_ENV=production HOYOLAB_COOKIE="your_cookie_here" npm run run:once
```

## ⏰ Execution Schedule

**Current configuration:** Daily at 14:00 UTC

To change the schedule, edit `.github/workflows/daily-checkin.yml`:
```yaml
schedule:
  - cron: '0 14 * * *'  # Min Hour Day Month DayOfWeek
```

## 📊 Monitoring

### GitHub Actions:
- **Logs:** Actions tab → Workflow run
- **Artifacts:** Logs saved for 7 days
- **Status:** Success/Failure visible in repository

### Notifications:
- **Telegram:** Automatic check-in messages
- **Discord:** Webhooks with detailed results

## 🎯 Automated Features

- ✅ **Daily check-in** for all active games
- ✅ **Automatic redemption** of new codes
- ✅ **Result notifications**
- ✅ **Error handling** and retries
- ✅ **Detailed logs** for debugging

## 🔧 Configured Games

| Game | Status | Check-in | Codes |
|------|--------|----------|-------|
| Genshin Impact | ✅ Active | ✅ Yes | ✅ Yes |
| Honkai: Star Rail | ✅ Active | ✅ Yes | ✅ Yes |
| Zenless Zone Zero | ✅ Active | ✅ Yes | ✅ Yes |
| Honkai Impact 3rd | ✅ Active | ✅ Yes | ❌ No |
| Tears of Themis | ❌ Inactive | - | - |

## 🔐 Security

- ✅ **Protected cookies** in GitHub Secrets
- ✅ **Not shown** in public logs
- ✅ **Separate configuration** for development/production
- ✅ **Secure environment** variables

## 📝 Important Files

- `run_once.js` - Main single execution script
- `config.production.json5` - Configuration for GitHub Actions
- `.github/workflows/daily-checkin.yml` - Automation workflow
- `GITHUB_ACTIONS_SETUP.md` - Detailed configuration guide

---

**🎉 Your bot is ready! Push the code to GitHub and configure the secrets to get started.**