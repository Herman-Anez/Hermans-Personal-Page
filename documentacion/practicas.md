# Prácticas de Desarrollo

Reglas y estándares para mantener el código limpio y consistente.

## Estilo de Código
- **Semántica Once UI:** Prohibido el uso de `<div>`. Usar `<Column>`, `<Row>` y `<Grid>`.
- **Tokens de Diseño:** Nunca usar hex codes. Usar props de color como `background="neutral-medium"`.
- **Componentes Funcionales:** Usar siempre componentes funcionales y hooks de React.

## Internacionalización
- **Diccionarios:** Toda cadena de texto visible debe estar en `src/resources/locales/`.
- **Sincronización:** Ejecutar `npm run test:i18n` antes de subir cambios para asegurar que `en.json` y `es.json` coinciden.
- **MDX:** Usar el componente `<T>` para textos que necesiten traducción inline en posts compartidos.

## Gestión de Posts (MDX)
- **Estructura:** Separar por idioma en carpetas `/es/` y `/en/`.
- **Metadatos:** Mantener el frontmatter consistente entre idiomas (mismos campos, mismos tags).

## Arquitectura
- **Clean Architecture:** Mantener la lógica de negocio (recursos/utils) separada de la capa de presentación (components/app).
- **Barrel Exports:** Usar archivos `index.ts` para exportaciones limpias de componentes.
