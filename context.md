# Contexto del Proyecto: Herman's Personal Page (Magic Portfolio)

Este documento sirve como referencia rápida para entender la arquitectura, el estado actual del desarrollo y los próximos pasos del portafolio personal.

## 🚀 Arquitectura Técnica

-   **Framework:** Next.js 15+ (App Router).
-   **Sistema de Diseño:** Once UI (@once-ui-system/core).
-   **Estilo:** Vanilla CSS / SCSS modules.
-   **Internacionalización (i18n):**
    -   Estructura de rutas dinámicas: `src/app/[locale]/`.
    -   **Independencia de Layouts:** Se utilizan Grupos de Rutas (`(root)` y `[locale]`) para proporcionar layouts raíz independientes, evitando el anidamiento de etiquetas `<html>` y errores de hidratación.
    -   Idiomas soportados: Español (`es`), Inglés (`en`).
    -   Redirección automática: La raíz `/` redirige a `/es` mediante un componente cliente en `src/app/(root)/page.tsx`.
    -   Gestión de textos: Diccionarios JSON en `src/resources/locales/`.
    -   Inyección dinámica: Fábrica `getContent(dict)` en `src/resources/content.tsx`.

## ✅ Lo que se ha desarrollado

1.  **Migración a `[locale]`:** Toda la estructura de páginas se movió bajo el segmento dinámico de idioma para permitir URLs como `/es/about` y `/en/about`.
2.  **Sistema de Diccionarios:** Implementado `getDictionary` para cargar JSONs de traducción de forma dinámica.
3.  **Refactorización de Recursos:** Se convirtió el archivo de contenido estático en una función dinámica que recibe el diccionario, permitiendo que todo el portafolio cambie de idioma instantáneamente.
4.  **Selector de Idiomas:** Integrado en el `Header` para navegar entre idiomas preservando la ruta actual.
5.  **Compatibilidad con Next.js 15+:** Se actualizaron todos los `params` de layouts y páginas para manejarlos como `Promise`, cumpliendo con los estándares asíncronos actuales.
6.  **Soporte de Fallback para MDX:** La función `getPosts` ahora soporta idiomas. Si un archivo MDX no existe en la carpeta `en/`, el sistema hace un fallback automático a `es/` para evitar errores de compilación (`404` durante el build).
7.  **Sitemaps y RSS:** Adaptados para ser multi-idioma y usar las rutas correctas con prefijo de locale.

## 🛠️ Estructura de Archivos Clave

-   `src/app/[locale]/`: Rutas de la aplicación.
-   `src/resources/locales/`: Archivos de traducción (`es.json`, `en.json`).
-   `src/resources/dictionaries.ts`: Lógica de resolución de idiomas.
-   `src/resources/content.tsx`: Definición dinámica de los datos del sitio (biografía, proyectos, etc).
-   `src/utils/utils.ts`: Utilidades para lectura de MDX (`getPosts`).

## ⏳ Pendientes / Próximos Pasos

-   [ ] **Traducción de Contenido:** El archivo `en.json` contiene actualmente copias de los textos en español. Es necesario traducirlos formalmente.
-   [ ] **MDX en Inglés:** Crear las subcarpetas `en/` dentro de `blog/posts/` y `work/projects/` para colocar las versiones traducidas de los artículos.
-   [ ] **Despliegue Estático:** Validar el comportamiento final en GitHub Pages (especialmente la redirección de `/`).
-   [ ] **Actualización de CV:** Integrar la información final del CV del usuario en los diccionarios.

---
*Última actualización: 15 de Mayo, 2026*
