import type { LandscapeMeta } from "@/types/landscape";
import type { Image } from "@/types/image";
import { MEDIA } from "./media";

/**
 * Fotografía editorial de banco libre (Unsplash License, uso comercial
 * libre) para los dos paisajes sin fotografía real de terreno propia —
 * ver el hallazgo de IMAGES.md §6 ("cero fotografía de territorio real").
 * Verificada manualmente: sin fondo blanco, sin tono frío dominante.
 */
const MONTANA_STOCK: Image = {
  url: "https://images.unsplash.com/photo-1642964040529-608b0c1cf8b2?q=80&w=2400&auto=format&fit=crop",
  alt: "Viñedo en terrazas entre montañas al atardecer de otoño, luz dorada lateral",
  width: 2400,
  height: 1600,
};

const OLIVAR_STOCK: Image = {
  url: "https://images.unsplash.com/photo-1770337497084-c499feb9bc2b?q=80&w=2400&auto=format&fit=crop",
  alt: "Tronco de olivo centenario, retorcido y nudoso, luz natural difusa",
  width: 2400,
  height: 1600,
};

/**
 * Cuatro arquetipos de paisaje ibérico, no denominaciones de origen
 * confirmadas. Universales y conceptuales — ver CURATORIAL_GUIDE.md §0.
 * Datos estructurales únicamente: el texto editorial vive en
 * `dict.territorios.landscapes[slug]` (ver src/lib/i18n).
 */
export const LANDSCAPES: LandscapeMeta[] = [
  {
    id: "landscape-montana",
    slug: "la-montana",
    relatedCategories: ["vinos", "quesos"],
    image: MONTANA_STOCK,
    objectPosition: "50% 50%",
  },
  {
    id: "landscape-olivar",
    slug: "el-olivar",
    relatedCategories: ["aceites"],
    image: OLIVAR_STOCK,
    objectPosition: "50% 50%",
  },
  {
    id: "landscape-dehesa",
    slug: "la-dehesa",
    relatedCategories: ["embutidos"],
    image: MEDIA.embutidoColgado,
    objectPosition: "50% 30%",
  },
  {
    id: "landscape-costa",
    slug: "la-costa",
    relatedCategories: ["conservas", "bebidas-espirituosas"],
    image: MEDIA.bodegonHigos,
    objectPosition: "50% 50%",
  },
];

export function getLandscapeMetaBySlug(
  slug: string,
): LandscapeMeta | undefined {
  return LANDSCAPES.find((landscape) => landscape.slug === slug);
}
