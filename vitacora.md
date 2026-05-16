# Bitácora de Cambios (Changelog)

Registro histórico de cambios mayores. Para estado actual, leer `context.md`.

## [1.2.0] - 2026-05-16: Unificación de Contenido & Soporte Inline
- **Arquitectura de Contenido**:
  - Migración de posts a una estructura de archivo único en `src/app/[locale]/blog/posts/`.
  - Eliminación de subcarpetas `/es/` y `/en/` para posts.
- **i18n**:
  - Refactor de `getPosts` para soportar la carga universal de archivos MDX.
  - Implementación del componente `<T />` para traducciones inline dentro de MDX.

## [1.1.0] - 2026-05-15: DevOps, i18n Avanzado & Refactor
- **Git Hooks & CI/CD**:
  - Implementado `Husky` y `lint-staged`.
  - Script `test:i18n` para validar diccionarios pre-commit.
  - Workflow GitHub Actions (`deploy.yml`) para exportación estática a GitHub Pages.
- **MDX i18n**:
  - Componente `<T>` para traducciones inline.
  - Soporte para carpetas de posts por idioma (`/es/`, `/en/`).
- **Arquitectura & Limpieza**:
  - Separación de layouts raíz (`(root)` vs `[locale]`) para eliminar hydration mismatch.
  - Refactor de `params` a `Promise` (Next.js 15).
  - Optimización de carga de scripts y temas (`<Script beforeInteractive>`).
- **Documentación**:
  - Creada carpeta `documentacion/` (tecnologías, prácticas, DevOps 101).
  - Extraídas reglas de diseño a `AGENTS.md`.

## [1.0.0] - 2026-05-14: Base y Soporte i18n Inicial
- **Migración a Rutas Dinámicas**: Toda la app movida bajo `src/app/[locale]/`.
- **Sistema de Diccionarios**: Función dinámica `getContent(dict)`.
- **Componentes Core**: Añadido `LanguageSwitcher`.
