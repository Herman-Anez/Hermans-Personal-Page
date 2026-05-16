# DevOps 101: Guía de Independencia

Esta guía está diseñada para que puedas gestionar el ciclo de vida de tu portafolio sin depender de un asistente.

## 1. El Ciclo de Vida (Push to Deploy)
Tu flujo de trabajo debe ser:
1. **Modificar:** Haces cambios en el código.
2. **Validar:** Corres `npm run lint` o `npm run test:i18n` localmente.
3. **Commit:** `git add .` y `git commit -m "Explicación breve"`.
4. **Push:** `git push origin main`.
5. **Vigilar:** Vas a la pestaña **Actions** en GitHub para ver al "robot" trabajar.

## 1.5 Automatización Local (Husky)
Hemos configurado **Husky** y **lint-staged**. Ahora, cada vez que hagas `git commit`:
- El código se formateará automáticamente (usando Biome).
- Se validarán las traducciones i18n si cambiaste algún JSON.
- Si algo falla, el commit se cancelará para que lo arregles. Esto evita subir código "roto" a GitHub.

## 2. Comandos que DEBES conocer

### Gestión de Proyecto
- `npm run dev`: Inicia el servidor local para ver cambios en vivo (`localhost:3000`).
- `npm run build`: Intenta generar la versión de producción. Si falla aquí, fallará en GitHub.
- `npm run test:i18n`: Verifica que no te olvidaste traducciones.

### Git (Tu máquina del tiempo)
- `git status`: ¿Qué archivos cambié?
- `git log --oneline`: ¿Qué fue lo último que hice?
- `git pull`: Traer cambios desde la nube (si editas algo en la web de GitHub).

## 3. ¿Cómo leer fallos en GitHub Actions?
Si el icono en GitHub sale con una `X` roja:
1. Haz clic en la pestaña **Actions**.
2. Entra en el workflow fallido (el que tiene la `X`).
3. Haz clic en el job **build**.
4. Busca el paso con la `X`. Normalmente es "Build with Next.js".
5. Lee las últimas líneas. Suelen decir "Error: [Alguna razón]".
   - *Común:* Error de tipos en TypeScript o un archivo MDX mal formado.

## 4. Mantenimiento a Largo Plazo

### Versiones de Node
Este proyecto usa **Node 20**. Si en el futuro instalas algo y no funciona, verifica tu versión con `node -v`.

### Archivos de Configuración
- **`next.config.mjs`:** Aquí se activa/desactiva el modo estático.
- **`.github/workflows/deploy.yml`:** Aquí se configura qué comandos corre GitHub. Si cambias de carpeta el proyecto, deberás actualizar el `working-directory`.

## 5. Dónde seguir aprendiendo
- [Documentación oficial de Next.js](https://nextjs.org/docs)
- [Documentación de GitHub Actions](https://docs.github.com/es/actions)
- [Learn Git Branching](https://learngitbranching.js.org/) (Juego para dominar Git)

Recuerda: DevOps no es magia, es solo una lista de instrucciones que alguien (tú o yo) escribió para que un servidor las siga.
