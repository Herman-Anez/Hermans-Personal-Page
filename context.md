# Contexto del Proyecto: Herman's Personal Page

Documento maestro de arquitectura y estado. Prioridad alta al cargar contexto.

## 🚀 Stack y Arquitectura
- **Core**: Next.js 15+ (App Router), React 19, TypeScript.
- **UI**: Once UI (`@once-ui-system/core`). **Reglas estrictas en `AGENTS.md`** (cero `<div>`, uso de `<Column>`, `<Row>`, tokens).
- **Contenido**: MDX (`next-mdx-remote`) con `gray-matter`.
- **Estilos**: Vanilla CSS / SCSS modules (evitar Tailwind).

## 🌍 Internacionalización (i18n)
- **Rutas**: `src/app/[locale]/`. Idiomas: `es` (default), `en`.
- **Layouts**: Grupos `(root)` y `[locale]` separados para evitar hydration mismatch. `/(root)/page.tsx` redirige a `/es`.
- **Diccionarios**: JSONs en `src/resources/locales/`. Función `getDictionary` los carga.
- **Inyección**: `getContent(dict)` en `src/resources/content.tsx` pobla datos del sitio.
- **MDX i18n**: 
  - Posts en `src/app/[locale]/blog/posts/` (archivo único multi-idioma).
  - Componente `<T es="Hola" en="Hello" />` disponible en MDX para traducción inline.

## 🛠️ DevOps y Herramientas Locales
- **Despliegue**: GitHub Pages (Exportación estática vía `output: 'export'` en `next.config.mjs`). Action en `.github/workflows/deploy.yml`.
- **Hooks**: `Husky` + `lint-staged` configuran chequeos pre-commit.
- **Scripts vitales**:
  - `npm run test:i18n`: Valida sincronización de llaves entre `es.json` y `en.json`.
  - `npm run lint` / `npm run biome-write`: Formateo estricto.

## 📂 Directorios Clave
- `src/app/[locale]/`: Páginas.
- `src/components/`: Componentes UI reutilizables (exportados vía `index.ts`).
- `src/utils/`: Lógica (lectura MDX, validación i18n).
- `documentacion/`: Guías de tecnologías, prácticas y DevOps 101.
- `AGENTS.md`: Reglas de diseño (LEER ANTES DE TOCAR UI).

## ⏳ Pendientes Inmediatos
- [/] Unificar posts MDX usando el componente `<T />` (Migración técnica completada).
- [ ] Traducir contenido real de `en.json`.
- [ ] Validar URLs de producción en GitHub Pages (ajustar `basePath` si es necesario).
- [ ] Actualizar CV en diccionarios.
