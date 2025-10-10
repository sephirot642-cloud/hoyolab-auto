# HoyoLab Auto - GitHub Actions Setup

Este proyecto está configurado para ejecutarse automáticamente todos los días usando GitHub Actions.

## 🔧 Configuración de GitHub Secrets

Para que GitHub Actions funcione correctamente, necesitas configurar los siguientes secrets en tu repositorio:

### Pasos para añadir secrets:

1. Ve a tu repositorio en GitHub
2. Click en **Settings** (Configuración)
3. En el menú lateral, click en **Secrets and variables** → **Actions**
4. Click en **New repository secret**

### 📋 Secrets requeridos:

#### `HOYOLAB_COOKIE` (Requerido)
La cookie completa de HoyoLab que incluye todos los tokens necesarios:
```
ltuid_v2=YOUR_LTUID; ltoken_v2=YOUR_LTOKEN_V2; ltmid_v2=YOUR_LTMID; cookie_token_v2=YOUR_COOKIE_TOKEN_V2; account_mid_v2=YOUR_ACCOUNT_MID; account_id_v2=YOUR_ACCOUNT_ID
```

#### `TELEGRAM_BOT_TOKEN` (Opcional)
Tu token del bot de Telegram:
```
1234567890:ABC-DEF1234ghIkl-zyx57W2v1u123ew11
```

#### `TELEGRAM_CHAT_ID` (Opcional)  
Tu chat ID de Telegram:
```
123456789
```

#### `DISCORD_WEBHOOK_URL` (Opcional)
Tu URL de webhook de Discord:
```
https://discord.com/api/webhooks/YOUR_WEBHOOK_ID/YOUR_WEBHOOK_TOKEN
```

## ⏰ Horario de ejecución

El workflow está configurado para ejecutarse diariamente a las **14:00 UTC**:
- **España (CET):** 15:00 PM (invierno) / 16:00 PM (verano)
- **Puedes cambiar el horario** editando la línea `cron: '0 14 * * *'` en `.github/workflows/daily-checkin.yml`

## 🎯 Funciones automáticas

El sistema ejecutará automáticamente:

✅ **Check-in diario** para todos los juegos activos
✅ **Redención de códigos** nuevos automáticamente  
✅ **Notificaciones** via Telegram y Discord
✅ **Logs** de actividad (disponibles por 7 días)

## 🚀 Ejecución manual

También puedes ejecutar el workflow manualmente:
1. Ve a la pestaña **Actions** en tu repositorio
2. Selecciona **HoyoLab Auto Daily Check-in**
3. Click en **Run workflow**

## 📊 Monitoreo

- Los logs están disponibles en la pestaña **Actions** de tu repositorio
- Las notificaciones se enviarán a Telegram/Discord según tu configuración
- Los artifacts con logs se guardan por 7 días

## 🔒 Seguridad

- ✅ Las cookies y tokens están almacenados de forma segura en GitHub Secrets
- ✅ No se muestran en los logs públicos
- ✅ Solo tu repositorio tiene acceso a estos secrets

## 🛠️ Desarrollo local

Para desarrollo local, usa:
```bash
npm run run:once
```

El sistema automáticamente usará `config.json5` para desarrollo local y `config.production.json5` para GitHub Actions.

---

**⚠️ Importante:** Asegúrate de mantener tus cookies actualizadas. Si cambian, deberás actualizar el secret `HOYOLAB_COOKIE` en GitHub.