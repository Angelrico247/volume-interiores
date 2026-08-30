# VOLUME — Estudio de Interiorismo (demo)

Sitio conceptual de un estudio de interiorismo ficticio, creado como pieza de
portafolio para **TWID (Two Worlds In Design)**. No es un negocio real.

## Stack

- Next.js 16 (App Router) · React 19 · TypeScript
- Tailwind CSS v4
- Fuentes self-hosted con `next/font` (DM Sans + Barlow Condensed)
- Imágenes remotas de Unsplash vía `next/image`

## Desarrollo

```bash
npm install
npm run dev
```

Abre http://localhost:3000.

```bash
npm run build   # build de producción
npm run lint    # eslint
```

## Estructura

- `src/app/` — rutas: `/`, `/estudio`, `/proyectos`, `/contacto`, más `sitemap.ts` y `robots.ts`.
- `src/components/` — componentes compartidos (`SiteHeader`, `SiteFooter`, `Button`, etc.).
- `src/data/site.ts` — todo el contenido editable: textos, cifras, servicios e IDs de fotos.

## Deploy

Pensado para Vercel. Al conectar el repo, actualiza `site.url` en
`src/data/site.ts` con el dominio final (afecta metadata, sitemap y robots).

## Notas

- El formulario de contacto es una simulación: valida en el cliente y no envía
  datos a ningún servidor.
- Si algún ID de foto de Unsplash deja de resolver, cámbialo en `photos` dentro
  de `src/data/site.ts`.
