# DevOps y Despliegue

Aprender DevOps es aprender a automatizar el ciclo de vida del software. Aquí explicamos cómo desplegamos este proyecto.

## Conceptos Básicos

### 1. CI/CD (Integración Continua / Despliegue Continuo)
- **CI:** Cada vez que haces `push`, un servidor automático verifica que el código compile y los tests pasen.
- **CD:** Si todo está bien, ese mismo servidor sube los cambios a producción automáticamente.

### 2. GitHub Actions
Es la herramienta de CI/CD de GitHub. Funciona mediante archivos `.yml` en `.github/workflows/`.
- **Workflow:** El proceso completo.
- **Jobs:** Tareas que pueden correr en paralelo (ej: Build, Deploy).
- **Steps:** Pasos individuales (ej: instalar dependencias, correr build).

## Despliegue en GitHub Pages

### El Reto del Contenido Estático
GitHub Pages es un servidor de archivos estáticos (HTML, CSS, JS). No corre Node.js en vivo. Por eso usamos:
- **`output: 'export'`**: Le dice a Next.js que genere una carpeta `out/` con todo el sitio pre-renderizado.
- **`images.unoptimized`**: GitHub no puede procesar imágenes dinámicamente como lo hace Vercel.

### Configuración del Workflow
Nuestro archivo `deploy.yml` hace lo siguiente:
1. **Setup Node:** Prepara el entorno.
2. **Install:** Instala librerías.
3. **Build:** Genera la carpeta `out/`.
4. **Upload Artifact:** Empaqueta `out/` y lo prepara para GitHub.
5. **Deploy:** Publica el paquete en el servidor de Pages.

## El Problema del "Base Path"
Si tu URL es `usuario.github.io/mi-repo/`, los archivos en `/` fallarán porque el sitio está en una subcarpeta.
- **Solución:** Si notas que los estilos o imágenes no cargan, debemos añadir `basePath: '/mi-repo'` en `next.config.mjs`.

## Cómo Ver el Despliegue
1. Ve a la pestaña **Actions** en tu repositorio de GitHub.
2. Verás el progreso del "Deploy to GitHub Pages".
3. Al terminar, ve a **Settings > Pages** para ver tu URL oficial.

## Herramientas de Automatización Local

Para garantizar que el código que llega a GitHub Actions esté en perfecto estado, usamos herramientas locales:

### Husky
Husky es una herramienta que nos permite ejecutar scripts en momentos específicos del ciclo de vida de Git (hooks). 
- **Uso:** Está configurado para el evento `pre-commit`.
- **Ubicación:** `.husky/pre-commit`.

### Lint-staged
Ejecutar validaciones en todo el proyecto cada vez que haces commit es lento. `lint-staged` solo actúa sobre los archivos que estás a punto de subir.
- **Configuración:** Definida en `personal-page/package.json`.
- **Acciones:**
  - Archivos `.js`, `.ts`, `.tsx`, `.json`: Se formatean con Biome.
  - Archivos en `locales/*.json`: Disparan `npm run test:i18n`.

### Biome
Sustituye a Prettier y ESLint para el formateo y linting. Es extremadamente rápido y mantiene el código consistente con las reglas de Once UI.
