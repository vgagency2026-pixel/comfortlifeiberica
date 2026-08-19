import type { LandscapeMeta } from "@/types/landscape";
import { MEDIA } from "./media";

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
    image: MEDIA.montanaVinedo,
    objectPosition: "50% 40%",
  },
  {
    id: "landscape-olivar",
    slug: "el-olivar",
    relatedCategories: ["aceites"],
    image: MEDIA.olivarCentenario,
    objectPosition: "50% 60%",
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
    image: MEDIA.costaMarAtlantico,
    objectPosition: "50% 55%",
  },
];

export function getLandscapeMetaBySlug(
  slug: string,
): LandscapeMeta | undefined {
  return LANDSCAPES.find((landscape) => landscape.slug === slug);
}
