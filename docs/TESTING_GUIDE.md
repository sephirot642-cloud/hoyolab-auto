# 🚀 Guía de Verificación y Prueba Manual - GitHub Actions

## ✅ Verificación de Estado

### 1. **Confirmar que el código está en GitHub**
- ✅ **Commit realizado:** `Add secure GitHub Actions workflow for HoyoLab automation`
- ✅ **Branch:** `main`
- ✅ **Estado:** Up to date with origin/main

### 2. **Confirmar Secrets configurados**
- ✅ `HOYOLAB_COOKIE` - Cookie completa de HoyoLab
- ✅ `TELEGRAM_BOT_TOKEN` - Token del bot de Telegram  
- ✅ `TELEGRAM_CHAT_ID` - ID del chat de Telegram
- ✅ `DISCORD_WEBHOOK_URL` - URL del webhook de Discord

## 🔍 Cómo Verificar la Action en GitHub

### **Paso 1: Acceder a la sección Actions**
1. Ve a tu repositorio en GitHub
2. Haz clic en la pestaña **"Actions"** (al lado de Pull requests)
3. Deberías ver el workflow **"HoyoLab Auto Daily Check-in"**

### **Paso 2: Verificar el Workflow**
- **Nombre:** `HoyoLab Auto Daily Check-in`
- **Trigger:** Programado para las 14:00 UTC diariamente
- **Manual:** Disponible botón "Run workflow"
- **Estado:** Debería aparecer como "No workflows have run yet" (normal si es nuevo)

## 🧪 Ejecutar Prueba Manual

### **Método 1: Desde la interfaz de GitHub**

1. **Ve a Actions → HoyoLab Auto Daily Check-in**
2. **Haz clic en "Run workflow"** (botón verde)
3. **Selecciona la branch:** `main` 
4. **Haz clic en "Run workflow"** para confirmar

### **Método 2: Verificar desde línea de comandos**

```powershell
# Verificar que el workflow está presente
git ls-files .github/workflows/

# Ver el contenido del workflow
Get-Content .github/workflows/daily-checkin.yml
```

## 📊 Monitorear la Ejecución

### **Durante la ejecución verás:**
1. **Status:** "In progress" (círculo amarillo girando)
2. **Logs en tiempo real:** Click en el job para ver detalles
3. **Duración típica:** 2-5 minutos

### **Pasos que ejecutará:**
1. ✅ **Checkout repository** - Descargar código
2. ✅ **Setup Node.js** - Configurar Node.js 20
3. ✅ **Install dependencies** - `npm ci`
4. ✅ **Run HoyoLab Auto** - Ejecutar `npm run run:once`
5. ✅ **Archive logs** - Guardar logs (opcional)

## 🎯 Resultados Esperados

### **✅ Ejecución Exitosa:**
- **Status:** Green checkmark ✅
- **Logs:** "Check-in completed successfully"
- **Notificaciones:** Mensajes en Telegram y Discord
- **Duración:** ~2-5 minutos

### **⚠️ Posibles Problemas:**
- **Error de cookie:** Verificar `HOYOLAB_COOKIE` en secrets
- **Error de notificaciones:** Verificar tokens de Telegram/Discord
- **Timeout:** Red lenta, reintenta en unos minutos

## 📱 Verificar Notificaciones

### **Telegram:**
- Busca mensajes del bot en tu chat
- Formato: "✅ [Genshin Impact] Daily check-in completed!"

### **Discord:**
- Revisa el canal configurado para el webhook
- Deberías ver embeds con información de check-ins

## 🔄 Próximas Ejecuciones Automáticas

- **Horario:** Diario a las 14:00 UTC
- **Tu horario (España):** 15:00 (invierno) / 16:00 (verano)
- **Frecuencia:** Una vez al día
- **Logs:** Disponibles por 7 días en GitHub

## 🛠️ Comandos de Depuración Local (Opcional)

Si quieres probar localmente antes:

```powershell
# Verificar que funciona en local (usando config.json5)
npm run run:once

# Probar configuración de producción (usando variables de entorno)
# Solo si tienes las variables configuradas localmente
$env:NODE_ENV="production"
$env:HOYOLAB_COOKIE="tu_cookie_aqui"
npm run run:once
```

---

## 🚀 ¡Listo para la Prueba!

1. **Ve a GitHub → Actions**
2. **Busca "HoyoLab Auto Daily Check-in"**
3. **Click "Run workflow"**
4. **¡Observa la magia! ✨**