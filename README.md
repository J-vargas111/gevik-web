# GEVIK · Landing page

React + Vite + Tailwind CSS v4.

## Usar en tu computador
1. Instala Node.js 20 o superior.
2. En esta carpeta: `npm install`
3. Vista previa en vivo: `npm run dev` (abre http://localhost:5173)
4. Versión final: `npm run build` (queda en la carpeta `dist/`)

## Qué editar
- Datos de contacto: `src/config.js`
- Textos de cada sección: `src/components/`
- Colores y tipografías de marca: `src/index.css` (bloque `@theme`)
- Política de datos: `public/privacidad.html`

## Publicar
Netlify o Vercel detectan Vite solos:
- Comando de build: `npm run build`
- Carpeta de publicación: `dist`
