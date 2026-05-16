# Arquitectura del Proyecto

## Estructura de Carpetas

```mermaid
graph TD
    Root[root] --> App[src/app]
    Root --> Comp[src/components]
    Root --> Res[src/resources]
    Root --> Utils[src/utils]
    Root --> Doc[documentacion]
    
    App --> Locale["[locale]"]
    Locale --> Blog[blog]
    Locale --> Work[work]
    
    Res --> Locales[locales JSON]
    Res --> Content[content.tsx factory]
```

## Flujo de Datos i18n
1. El usuario accede a `/[locale]/ruta`.
2. `getDictionary(locale)` carga el JSON.
3. `getContent(dict)` inyecta los textos en los componentes Once UI.
4. Si es MDX, `getPosts(locale)` filtra por carpeta.

## Próximamente
- Diagramas de secuencia para procesos complejos.
- Mapa de componentes y dependencias.
