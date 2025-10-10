# 🚀 Manual Verification and Testing Guide - GitHub Actions

## ✅ Status Verification

### 1. **Confirm code is on GitHub**
- ✅ **Commit made:** `Add secure GitHub Actions workflow for HoyoLab automation`
- ✅ **Branch:** `main`
- ✅ **Status:** Up to date with origin/main

### 2. **Confirm Secrets configured**
- ✅ `HOYOLAB_COOKIE` - Complete HoyoLab cookie
- ✅ `TELEGRAM_BOT_TOKEN` - Telegram bot token  
- ✅ `TELEGRAM_CHAT_ID` - Telegram chat ID
- ✅ `DISCORD_WEBHOOK_URL` - Discord webhook URL

## 🔍 How to Verify the Action on GitHub

### **Step 1: Access Actions section**
1. Go to your repository on GitHub
2. Click on the **"Actions"** tab (next to Pull requests)
3. You should see the workflow **"HoyoLab Auto Daily Check-in"**

### **Step 2: Verify the Workflow**
- **Name:** `HoyoLab Auto Daily Check-in`
- **Trigger:** Scheduled for 14:00 UTC daily
- **Manual:** "Run workflow" button available
- **Status:** Should appear as "No workflows have run yet" (normal if new)

## 🧪 Run Manual Test

### **Method 1: From GitHub interface**

1. **Go to Actions → HoyoLab Auto Daily Check-in**
2. **Click "Run workflow"** (green button)
3. **Select branch:** `main` 
4. **Click "Run workflow"** to confirm

### **Method 2: Verify from command line**

```powershell
# Verify workflow is present
git ls-files .github/workflows/

# View workflow content
Get-Content .github/workflows/daily-checkin.yml
```

## 📊 Monitor Execution

### **During execution you'll see:**
1. **Status:** "In progress" (yellow spinning circle)
2. **Real-time logs:** Click on the job to see details
3. **Typical duration:** 2-5 minutes

### **Steps it will execute:**
1. ✅ **Checkout repository** - Download code
2. ✅ **Setup Node.js** - Configure Node.js 20
3. ✅ **Install dependencies** - `npm ci`
4. ✅ **Run HoyoLab Auto** - Execute `npm run run:once`
5. ✅ **Archive logs** - Save logs (optional)

## 🎯 Expected Results

### **✅ Successful Execution:**
- **Status:** Green checkmark ✅
- **Logs:** "Check-in completed successfully"
- **Notifications:** Messages in Telegram and Discord
- **Duration:** ~2-5 minutes

### **⚠️ Possible Issues:**
- **Cookie error:** Verify `HOYOLAB_COOKIE` in secrets
- **Notification errors:** Check Telegram/Discord tokens
- **Timeout:** Slow network, retry in a few minutes

## 📱 Verify Notifications

### **Telegram:**
- Look for bot messages in your chat
- Format: "✅ [Genshin Impact] Daily check-in completed!"

### **Discord:**
- Check the channel configured for the webhook
- You should see embeds with check-in information

## 🔄 Future Automatic Executions

- **Schedule:** Daily at 14:00 UTC
- **Frequency:** Once per day
- **Logs:** Available for 7 days on GitHub

## 🛠️ Local Debug Commands (Optional)

If you want to test locally first:

```powershell
# Verify it works locally (using config.json5)
npm run run:once

# Test production configuration (using environment variables)
# Only if you have variables configured locally
$env:NODE_ENV="production"
$env:HOYOLAB_COOKIE="your_cookie_here"
npm run run:once
```

---

## 🚀 Ready for Testing!

1. **Go to GitHub → Actions**
2. **Find "HoyoLab Auto Daily Check-in"**
3. **Click "Run workflow"**
4. **Watch the magic! ✨**