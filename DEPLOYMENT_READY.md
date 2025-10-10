# 🎮 HoyoLab Auto - GitHub Actions Configurado

¡Tu bot de HoyoLab está listo para ejecutarse automáticamente en GitHub Actions!

## ✅ Estado del Proyecto

- ✅ **Script `run_once.js`** - Funcionando correctamente
- ✅ **Configuración de producción** - Lista con variables de entorno
- ✅ **GitHub Actions Workflow** - Configurado para ejecución diaria
- ✅ **Sistema de cookies** - Configurado con placeholders seguros
- ✅ **Notificaciones** - Telegram y Discord configurados
- ✅ **Testing local** - Scripts de prueba disponibles

## 🚀 Próximos Pasos para GitHub

### 1. Subir el código a GitHub
```bash
git add .
git commit -m "Add GitHub Actions workflow for daily HoyoLab check-in"
git push origin main
```

### 2. Configurar GitHub Secrets
Ve a tu repositorio en GitHub → **Settings** → **Secrets and variables** → **Actions**

Añade estos secrets:

| Secret Name | Valor | Requerido |
|-------------|-------|-----------|
| `HOYOLAB_COOKIE` | Tu cookie completa de HoyoLab | ✅ Sí |
| `TELEGRAM_BOT_TOKEN` | `1234567890:ABC-DEF1234ghIkl-zyx57W2v1u123ew11` | ⚠️ Opcional |
| `TELEGRAM_CHAT_ID` | `123456789` | ⚠️ Opcional |
| `DISCORD_WEBHOOK_URL` | Tu URL de webhook de Discord | ⚠️ Opcional |

### 3. Activar GitHub Actions
- Ve a la pestaña **Actions** en tu repositorio
- Si está deshabilitado, actívalo
- - **Todo a las 14:00 UTC** (15:00/16:00 en España)

## 🧪 Testing Local

### Probar configuración de producción:
```bash
npm run test:production
```

### Ejecutar el bot una vez:
```bash
npm run run:once
```

### Probar con variables de entorno:
```bash
# Windows PowerShell
$env:NODE_ENV="production"; $env:HOYOLAB_COOKIE="tu_cookie_aqui"; npm run run:once

# Linux/Mac
NODE_ENV=production HOYOLAB_COOKIE="tu_cookie_aqui" npm run run:once
```

## ⏰ Horario de Ejecución

**Configuración actual:** Diariamente a las 14:00 UTC
- **España:** 15:00 (invierno) / 16:00 (verano)

Para cambiar el horario, edita `.github/workflows/daily-checkin.yml`:
```yaml
schedule:
  - cron: '0 14 * * *'  # Min Hora Día Mes DiaSemana
```

## 📊 Monitoreo

### GitHub Actions:
- **Logs:** Pestaña Actions → Workflow run
- **Artifacts:** Logs guardados por 7 días
- **Estado:** Éxito/Fallo visible en el repositorio

### Notificaciones:
- **Telegram:** Mensajes automáticos de check-in
- **Discord:** Webhooks con resultados detallados

## 🎯 Funcionalidades Automatizadas

- ✅ **Check-in diario** en todos los juegos activos
- ✅ **Redención automática** de códigos nuevos
- ✅ **Notificaciones** de resultados
- ✅ **Manejo de errores** y reintentos
- ✅ **Logs detallados** para debugging

## 🔧 Juegos Configurados

| Juego | Estado | Check-in | Códigos |
|-------|--------|----------|---------|
| Genshin Impact | ✅ Activo | ✅ Sí | ✅ Sí |
| Honkai: Star Rail | ✅ Activo | ✅ Sí | ✅ Sí |
| Zenless Zone Zero | ✅ Activo | ✅ Sí | ✅ Sí |
| Honkai Impact 3rd | ✅ Activo | ✅ Sí | ❌ No |
| Tears of Themis | ❌ Inactivo | - | - |

## 🔐 Seguridad

- ✅ **Cookies protegidas** en GitHub Secrets
- ✅ **No se muestran** en logs públicos
- ✅ **Configuración separada** para desarrollo/producción
- ✅ **Variables de entorno** seguras

## 📝 Archivos Importantes

- `run_once.js` - Script principal de ejecución única
- `config.production.json5` - Configuración para GitHub Actions
- `.github/workflows/daily-checkin.yml` - Workflow de automatización
- `GITHUB_ACTIONS_SETUP.md` - Guía detallada de configuración

---

**🎉 ¡Tu bot está listo! Sube el código a GitHub y configura los secrets para comenzar.**