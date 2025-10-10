# 📚 HoyoLab Auto - Documentation

Welcome to the complete documentation for **HoyoLab Auto**, your automated system for check-ins and HoyoVerse account management.

## 📋 Documentation Index

### 🚀 **Setup and Deployment**
- **[GitHub Actions Setup](GITHUB_ACTIONS_SETUP.md)** - Complete guide for configuring GitHub Actions
- **[Deployment Ready](DEPLOYMENT_READY.md)** - Pre-deployment checklist
- **[Testing Guide](TESTING_GUIDE.md)** - How to test and verify functionality

### 🔒 **Security**
- **[Security Review](SECURITY_REVIEW.md)** - Security audit and best practices

### 🐳 **Docker**
- **[Docker Info](DOCKER_INFO.md)** - Docker configuration and usage guide

## 🎮 **Key Features**

### ✅ **Complete Automation**
- **Daily check-ins** automatic for all HoyoVerse games
- **Automatic redemption** of promotional codes
- **Stamina monitoring** and reminders
- **Notifications** via Telegram and Discord

### 🎯 **Supported Games**
- 🗡️ **Genshin Impact** - Check-ins, codes, stamina, expeditions
- 🚂 **Honkai: Star Rail** - Check-ins, codes, stamina, expeditions  
- ⚡ **Zenless Zone Zero** - Check-ins, codes, stamina
- ⚔️ **Honkai Impact 3rd** - Automatic check-ins

### 🔔 **Smart Notifications**
- **Telegram Bot** - Direct messages with results
- **Discord Webhook** - Elegant embeds in your server
- **Reminders** - Dailies, weeklies, full stamina

## 🛠️ **Quick Setup**

### 1. **Local Configuration**
```bash
# Clone the repository
git clone https://github.com/your-username/hoyolab-auto.git
cd hoyolab-auto

# Install dependencies
npm install

# Configure your local config.json5
cp default.config.json5 config.json5
# Edit config.json5 with your data
```

### 2. **GitHub Actions Deployment**
1. Push your code to GitHub
2. Configure the required **GitHub Secrets**
3. Enjoy the automation! 🎉

## 🔧 **Available Scripts**

| Command | Description |
|---------|-------------|
| `npm start` | Run in daemon mode (continuous) |
| `npm run run:once` | Single execution (ideal for GitHub Actions) |
| `npm run watch` | Development mode with auto-reload |
| `npm run migrate` | Migrate old configuration |
| `npm run test:production` | Test production configuration |

## 📊 **Monitoring and Logs**

- **GitHub Actions**: Automatic logs for each execution
- **Artifacts**: Log history for 7 days
- **Notifications**: Real-time status via Telegram/Discord

## 🆘 **Support and Troubleshooting**

### **Common Issues**
- **Cookie error**: Verify cookie is complete and valid
- **Notification errors**: Check Telegram/Discord tokens
- **Failed builds**: Verify GitHub Secrets

### **Useful Resources**
- **Config Template**: `default.config.json5`
- **Environment Variables**: See configuration files
- **GitHub Actions Logs**: For detailed debugging

## 📅 **Automatic Scheduling**

**Daily execution:** 14:00 UTC
- ✅ Automatic check-ins
- ✅ Code redemption  
- ✅ Stamina verification
- ✅ Status notifications

---

## 🌟 **Get Started Now!**

1. **Read**: [GitHub Actions Setup](GITHUB_ACTIONS_SETUP.md)
2. **Configure**: Your secrets and variables
3. **Test**: With [Testing Guide](TESTING_GUIDE.md)
4. **Enjoy**: Your automatic check-ins! 🎮✨

---

*Developed with ❤️ for the HoyoVerse community*