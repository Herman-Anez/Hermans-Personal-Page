# Bitácora de Cambios (i18n & Refactorización)

Aquí documentaremos todos los cambios estructurales implementados en el portafolio para soportar múltiples idiomas.

## 2026-05-15 - Internacionalización Completa y Soporte Next.js 15
- **Migración Estructural:** Se movieron todas las rutas a `src/app/[locale]/`.
- **Sistema de Diccionarios:** Implementación de `getDictionary` y refactorización de `src/resources/content.tsx` a una función dinámica `getContent`.
- **Selector de Idiomas:** Añadido `LanguageSwitcher` en el `Header` con soporte para preservación de rutas.
- **Soporte Next.js 15:** Refactorización de `params` a `Promise` en layouts y páginas para cumplir con el estándar asíncrono.
- **Resiliencia en MDX:** Mejora de `getPosts` con fallback automático a español si la carpeta del idioma solicitado no existe.
- **Build Exitoso:** Verificación de compilación estática exitosa para todos los idiomas.
- **Documentación:** Creación de `context.md` para persistencia de contexto en futuros chats.

## 2026-05-15 - Corrección de Errores de Hidratación y Limpieza de Layouts
- **Resolución de Hydration Mismatch:** Se eliminó el anidamiento de etiquetas `<html>` y `<body>` mediante la creación de layouts raíz independientes usando Grupos de Rutas (`(root)` y `[locale]`).
- **Refactorización de RouteGuard:** Actualizado para soportar pathnames con prefijos de idioma, evitando bloqueos y 404s internos en rutas válidas como `/es/about`.
- **Validación de Locales:** Implementada validación en `layout.tsx` para lanzar `notFound()` si el segmento de idioma no es válido (ej. `/about` ya no se interpreta como idioma).
- **Consolidación de Build:** Segunda verificación de build exitosa tras la reestructuración de archivos y corrección de variables de locale.
- **Optimización de Scripts:** Sustitución de la etiqueta `<script>` manual por el componente `<Script>` de `next/script` con la estrategia `beforeInteractive`. Esto eliminó las advertencias de React sobre scripts en componentes y asegura una ejecución segura y temprana del sistema de temas.
- **Optimización de Etiquetas Raíz:** Sustitución de componentes `Flex` y `Column` por etiquetas nativas `<html>` y `<body>` en el layout raíz. Esto resolvió las advertencias de React sobre la ejecución de scripts en el cliente y mejoró el cumplimiento de estándares HTML5, manteniendo toda la estética de Once UI mediante clases y estilos aplicados directamente.
- **Localización de Enlaces Internos:** Refactorización de todas las rutas hardcoded (blog, work, about) para incluir el prefijo de idioma. Actualización de la función `getContent` para inyectar automáticamente el locale en los paths definidos en el sistema de recursos.
