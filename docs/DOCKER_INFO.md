# 🐳 Docker Configuration - HoyoLab Auto

## 📋 Current Status: **DISABLED**

The Docker workflow (`docker-image.yaml`) is **disabled** to prevent automatic build errors, but **maintained** for future use.

## 🎯 **What is Docker used for in this project?**

### **Operation Mode: 24/7 Daemon** 
- **Continuous execution** on servers/VPS
- **Automatic crons** according to configuration
- **Ideal for:** Dedicated hosting, VPS, servers

### **vs GitHub Actions (Your current setup)**
- **Scheduled execution** (14:00 UTC daily)
- **No server** to maintain
- **Free** and reliable
- **Ideal for:** Personal use without infrastructure

## 🔧 **If you wanted to use Docker in the future:**

### **Option 1: Local Docker** 
```bash
# Run locally with Docker
docker-compose up -d
```

### **Option 2: GitHub Container Registry**
1. **Configure secrets:**
   - `GHCR_USERNAME`: Your GitHub username
   - `GHCR_TOKEN`: Token with packages permissions

2. **Enable workflow:**
   ```yaml
   # Uncomment in docker-image.yaml:
   on:
     push:
       branches:
         - main
   ```

3. **Result:** Automatic image at `ghcr.io/your-username/hoyolab-auto:latest`

### **Option 3: Deploy on VPS/Hosting**
```bash
# On your server
git clone https://github.com/your-username/hoyolab-auto.git
cd hoyolab-auto
cp config.json5.example config.json5
# Edit config.json5 with your data
docker-compose up -d
```

## 📊 **Method Comparison**

| Method | Cost | Maintenance | Execution | Ideal for |
|--------|------|-------------|-----------|-----------|
| **GitHub Actions** ⭐ | Free | None | Scheduled | Personal use |
| **Local Docker** | Free | Your PC 24/7 | Continuous | Testing/development |
| **VPS Docker** | ~$5-10/month | Server | Continuous | Intensive use |

## ✅ **Current Recommended Configuration**

Your current setup with **GitHub Actions is perfect** because:
- ✅ **Zero operational** cost
- ✅ **Zero server** maintenance
- ✅ **Reliable daily** execution
- ✅ **Automatic logs** and traceability
- ✅ **Telegram/Discord** notifications working

## 🚀 **When to consider Docker?**

### **Scenarios where Docker would be better:**
- ⚡ You want **immediate check-ins** when new codes are released
- 🔄 You need **multiple accounts** with different schedules
- ⏱️ You want **continuous stamina** monitoring
- 🎮 You manage accounts for **multiple users**

### **For your current use:** ✅ **GitHub Actions is perfect**

---

## 🔧 **Workflow Status:**
- **Docker workflow:** 🔴 Disabled (manual trigger only)
- **Daily check-in workflow:** 🟢 Active (14:00 UTC daily)

*Documentation updated: October 2025*