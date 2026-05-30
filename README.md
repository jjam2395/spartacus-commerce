# Spartacus Commerce — Spartacus 4.3.8 (Angular 12)

Storefront SAP Commerce Cloud con **Spartacus 4.3.8** y **Angular 12**. Proyecto de práctica y portafolio para certificación SAP Commerce Cloud + Spartacus.

## 📦 Tech Stack

| Capa | Tecnología |
|------|------------|
| **Frontend** | Angular 12, Spartacus 4.3.8 |
| **UI/Styles** | Bootstrap 4, SCSS |
| **State** | NgRx Store + Effects |
| **Backend** | SAP Commerce Cloud (OCC API) |
| **Servidor** | Nginx (proxy reverso) |
| **DNS** | DuckDNS (spartacuscommerce.duckdns.org) |
| **CI/CD** | GitHub Actions (auto-deploy en push a `main` o `development`) |

## 🌐 Acceso

| URL | Puerto |
|-----|--------|
| **Producción** | `http://spartacuscommerce.duckdns.org:8080` |
| **Local** | `http://localhost:4200` (`ng serve`) |

> ⚠️ No hay SSL configurado — solo HTTP.

## 🚀 Deploy automático

Cada `git push` a `main` o `development` dispara un workflow de GitHub Actions que:

1. **SSH** al VPS
2. **git pull** del branch
3. **Genera** `src/environments/version.ts` con el commit hash, branch y fecha
4. **npm run build** (con `--openssl-legacy-provider`)
5. **Copia** los archivos compilados a `/var/www/spartacus/`
6. **nginx -s reload**

### Verificar versión desplegada

Abrir DevTools (F12) → Consola:

```
⚡ Spartacus Commerce v a05efa3 | branch: development 2026-05-29 07:22 UTC
```

## 🧩 Personalizaciones

### Consent Templates Cache (HTTP Interceptor)

Spartacus 4.x hace peticiones constantes a `consenttemplates` (hasta 129 requests en 30s).  
Se implementó un **HTTP Interceptor** que cachea las respuestas por 5 minutos:

- **Archivo**: `src/app/interceptors/consent-templates-cache.interceptor.ts`
- **Cobertura**: Anónimo (`users/anonymous/consenttemplates`) + Autenticado (`users/{userId}/consenttemplates`)
- **TTL**: 5 minutos (configurable en `this.TTL`)
- **Logs**: Muestra `[ConsentTemplatesCache] HIT/MISS/CACHED` en consola

### Spartacus Theming (SCSS)

Personalización de estilos Spartacus 4.x con Bootstrap 4 variables:

- Uso de `$primary`, `$secondary` en vez de prefijos `$cx-color-*`
- Variables definidas ANTES del `@import` de Bootstrap
- Dark mode parcial (header oscuro + gold accents + body claro)

## 🧪 Development

```bash
npm install
ng serve                          # Dev server :4200
npm run build                     # Producción
ng generate component MiComponente
```

Para build local con la versión:

```bash
echo "export const APP_VERSION = '$(git rev-parse --short HEAD)';" > src/environments/version.ts
echo "export const APP_BRANCH = '$(git rev-parse --abbrev-ref HEAD)';" >> src/environments/version.ts
echo "export const APP_DATE = '$(date -u '+%Y-%m-%d %H:%M UTC')';" >> src/environments/version.ts
npm run build
```

## 🔧 Nginx Config

El servidor sirve desde `/var/www/spartacus/` con proxy reverso a SAP Commerce:

```
→ /occ/*   → https://composable-storefront-demo.eastus.cloudapp.azure.com:8443
→ /*       → /var/www/spartacus/index.html (SPA fallback)
```

## 📁 Estructura relevante

```
src/
├── app/
│   ├── interceptors/
│   │   └── consent-templates-cache.interceptor.ts
│   ├── spartacus/
│   │   ├── adapters/         (deprecated — ver interceptor)
│   │   ├── spartacus-configuration.module.ts
│   │   └── spartacus-features.module.ts
│   └── app.module.ts
├── environments/
│   └── version.ts            (auto-generado por CI)
```

## 📄 Licencia

Proyecto personal con fines educativos y de portafolio.
