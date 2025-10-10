# 📚 HoyoLab Auto - Documentación

Bienvenido a la documentación completa de **HoyoLab Auto**, tu sistema automatizado para check-ins y gestión de cuentas de HoyoVerse.

## 📋 Índice de Documentación

### 🚀 **Configuración y Despliegue**
- **[GitHub Actions Setup](GITHUB_ACTIONS_SETUP.md)** - Guía completa para configurar GitHub Actions
- **[Deployment Ready](DEPLOYMENT_READY.md)** - Lista de verificación antes del despliegue
- **[Testing Guide](TESTING_GUIDE.md)** - Cómo probar y verificar el funcionamiento

### 🔒 **Seguridad**
- **[Security Review](SECURITY_REVIEW.md)** - Auditoría de seguridad y buenas prácticas

## 🎮 **Características Principales**

### ✅ **Automatización Completa**
- **Check-ins diarios** automáticos para todos los juegos de HoyoVerse
- **Redención automática** de códigos promocionales
- **Monitoreo de stamina** y recordatorios
- **Notificaciones** via Telegram y Discord

### 🎯 **Juegos Soportados**
- 🗡️ **Genshin Impact** - Check-ins, códigos, stamina, expediciones
- 🚂 **Honkai: Star Rail** - Check-ins, códigos, stamina, expediciones  
- ⚡ **Zenless Zone Zero** - Check-ins, códigos, stamina
- ⚔️ **Honkai Impact 3rd** - Check-ins automáticos

### 🔔 **Notificaciones Inteligentes**
- **Telegram Bot** - Mensajes directos con resultados
- **Discord Webhook** - Embeds elegantes en tu servidor
- **Recordatorios** - Dailies, weeklies, stamina completa

## 🛠️ **Configuración Rápida**

### 1. **Configuración Local**
```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/hoyolab-auto.git
cd hoyolab-auto

# Instalar dependencias
npm install

# Configurar tu config.json5 local
cp default.config.json5 config.json5
# Editar config.json5 con tus datos
```

### 2. **Despliegue en GitHub Actions**
1. Sube tu código a GitHub
2. Configura los **GitHub Secrets** necesarios
3. ¡Disfruta de la automatización! 🎉

## 🔧 **Scripts Disponibles**

| Comando | Descripción |
|---------|-------------|
| `npm start` | Ejecutar en modo daemon (continuo) |
| `npm run run:once` | Ejecución única (ideal para GitHub Actions) |
| `npm run watch` | Modo desarrollo con auto-reload |
| `npm run migrate` | Migrar configuración antigua |
| `npm run test:production` | Probar configuración de producción |

## 📊 **Monitoreo y Logs**

- **GitHub Actions**: Logs automáticos de cada ejecución
- **Artifacts**: Historial de logs por 7 días
- **Notificaciones**: Estado en tiempo real via Telegram/Discord

## 🆘 **Soporte y Troubleshooting**

### **Problemas Comunes**
- **Error de cookie**: Verificar que la cookie esté completa y válida
- **Error de notificaciones**: Revisar tokens de Telegram/Discord
- **Builds fallidos**: Comprobar GitHub Secrets

### **Recursos Útiles**
- **Config Template**: `default.config.json5`
- **Environment Variables**: Ver archivos de configuración
- **GitHub Actions Logs**: Para debugging detallado

## 📅 **Programación Automática**

**Ejecución diaria:** 14:00 UTC (15:00/16:00 España)
- ✅ Check-ins automáticos
- ✅ Redención de códigos  
- ✅ Verificación de stamina
- ✅ Notificaciones de estado

---

## 🌟 **¡Comenzar Ahora!**

1. **Lee**: [GitHub Actions Setup](GITHUB_ACTIONS_SETUP.md)
2. **Configura**: Tus secrets y variables
3. **Prueba**: Con [Testing Guide](TESTING_GUIDE.md)
4. **Disfruta**: De tus check-ins automáticos! 🎮✨

---

*Desarrollado con ❤️ para la comunidad de HoyoVerse*