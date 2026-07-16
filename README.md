# Comfort Life Ibérica

Web de Comfort Life Ibérica: curaduría del patrimonio gastronómico ibérico para la alta hostelería, tratada como una galería de arte, no como un ecommerce.

La identidad, filosofía y reglas de diseño/código de este proyecto están definidas en:

- [`../CLAUDE.md`](../CLAUDE.md) — guía operativa resumida (fuente para agentes/IA).
- [`../CLAUDE.MD.md`](../CLAUDE.MD.md) — Manual Maestro completo (fuente de verdad).
- [`AGENTS.md`](./AGENTS.md) — notas técnicas de Next.js 16 para agentes de IA (auto-generado por `create-next-app`; el `CLAUDE.md` local solo lo referencia).

Cualquier componente, página o texto que se añada a este proyecto debe respetar esas reglas antes que cualquier otra consideración.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, React Server Components)
- [TypeScript](https://www.typescriptlang.org/) en modo estricto
- [Tailwind CSS v4](https://tailwindcss.com/) (tokens de marca vía `@theme` en `src/styles/tokens.css`)
- ESLint (`eslint-config-next`) + Prettier (`prettier-plugin-tailwindcss`)

## Empezar

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Scripts

| Script                 | Descripción                           |
| ---------------------- | ------------------------------------- |
| `npm run dev`          | Servidor de desarrollo                |
| `npm run build`        | Build de producción                   |
| `npm run start`        | Sirve el build de producción          |
| `npm run lint`         | ESLint                                |
| `npm run typecheck`    | Chequeo de tipos con `tsc --noEmit`   |
| `npm run format`       | Formatea el proyecto con Prettier     |
| `npm run format:check` | Verifica formato sin escribir cambios |

## Estructura del proyecto

```
src/
├── app/                 # Rutas (App Router): layouts, páginas, globals.css
├── components/
│   ├── ui/              # Componentes de UI atómicos y reutilizables
│   ├── sections/        # Secciones de página (hero, editorial, quote...)
│   ├── layout/          # Header, footer, navegación
│   └── features/        # Funcionalidades compuestas (grid de productos, mapa...)
├── lib/
│   ├── utils/           # Utilidades (p. ej. `cn` para clases de Tailwind)
│   └── constants/       # Constantes de la app (metadatos del sitio, etc.)
├── styles/
│   ├── tokens.css       # Tokens de diseño de marca (color, tipografía, easing)
│   └── typography.css   # Reglas tipográficas globales
└── types/                # Tipos de dominio (Product, Producer, Territory...)
```

Esta organización sigue el Capítulo 44 (Organización del Código) del Manual Maestro.
