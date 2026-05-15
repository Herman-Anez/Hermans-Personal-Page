# Sistema de Internacionalización (i18n) / Extracción de Contenido

Para facilitar la edición del contenido de la página y preparar el terreno para tener el sitio en varios idiomas en el futuro, todos los textos y datos de la plantilla se han movido a esta carpeta en formato JSON.

## 1. El Diccionario (`es.json`)
El archivo `es.json` contiene la estructura de todos los textos del portafolio.
- Si deseas cambiar el rol de tu presentación o actualizar tu experiencia profesional, simplemente debes editar el valor en `es.json`.
- En un futuro, si quieres soportar inglés, bastará con crear un archivo `en.json` con las mismas claves pero con los textos traducidos, y modificar `src/resources/content.tsx` para cargar uno u otro dinámicamente.

## 2. Textos Ricos (HTML y Componente `RenderHTML`)
En el diseño original, algunos campos (como `subline` o `description`) permitían escribir etiquetas JSX o componentes de React como `<Text as="span">`. 

Al migrar a JSON, no podemos guardar componentes de React, por lo que **ahora se usa HTML puro en el JSON** (por ejemplo, `<strong>` para negritas, o `<br />` para saltos de línea).

Para que React interprete estas etiquetas en lugar de mostrarlas como texto plano, creamos la utilidad `RenderHTML` (`src/components/RenderHTML.tsx`).

### ¿Cómo funciona `RenderHTML`?
Esta utilidad hace uso de `dangerouslySetInnerHTML`. Es segura porque los textos de origen (`es.json`) están controlados por ti, no por usuarios externos.

**Ejemplo de uso en código:**
```tsx
import { RenderHTML } from "@/components/RenderHTML";
import dict from "@/resources/locales/es.json";

// Asume que en es.json tienes: "mensaje": "Hola <strong>Mundo</strong>"
export function MiComponente() {
  return (
    <div>
      <RenderHTML html={dict.mensaje} />
    </div>
  );
}
```

### Notas adicionales
- Los textos sin etiquetas (planos) pueden referenciarse directamente: `{dict.home.title}`. Solo usa `<RenderHTML>` para aquellos textos del JSON que contengan HTML.
- Todos los componentes y textos base que estaban fijos ("hardcodeados") en las plantillas de Next.js (`page.tsx`, `about/page.tsx`, `not-found.tsx`) han sido extraídos al objeto `"ui"` del archivo JSON.
