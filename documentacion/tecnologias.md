# Tecnologías

Este proyecto utiliza un stack moderno enfocado en la performance, escalabilidad y una experiencia de diseño premium.

## Core
- **Next.js 15+ (App Router):** Framework principal, utilizando las últimas funcionalidades de React 19 y gestión de rutas asíncronas.
- **React 19:** Biblioteca base para la interfaz de usuario.
- **TypeScript:** Tipado estático para mayor seguridad y mantenibilidad.

## Diseño y Estilo
- **Once UI (@once-ui-system/core):** Sistema de diseño basado en tokens y layouts semánticos.
- **Vanilla CSS / SASS:** Para personalizaciones que exceden las props de Once UI.
- **Lucide Icons / React Icons:** Conjunto de iconos consistentes.

## Contenido y Datos
- **MDX (next-mdx-remote):** Para el contenido del blog y proyectos, permitiendo componentes interactivos dentro de Markdown.
- **Gray-matter:** Parseo de metadatos (frontmatter) en archivos MDX.

## Internacionalización (i18n)
- **Custom i18n System:** Basado en diccionarios JSON y rutas dinámicas `[locale]`.
- **Componente <T>:** Para traducciones inline dentro de MDX.

## Herramientas de Desarrollo
- **Biome:** Formateo y linting ultra-rápido.
- **TSX:** Ejecución de scripts TypeScript en Node.js.
