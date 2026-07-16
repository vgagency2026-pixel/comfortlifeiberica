import type { ProductCategory } from "./product";
import type { Image } from "./image";

export type LandscapeSlug =
  "la-montana" | "el-olivar" | "la-dehesa" | "la-costa";

/**
 * Datos estructurales del paisaje — no traducibles. El texto editorial
 * (name/concept/poeticTitle/editorial/closingLine) vive en el diccionario
 * i18n (`dict.territorios.landscapes[slug]`) y se combina con esto en
 * tiempo de render. Ver CURATORIAL_GUIDE.md §0.
 */
export interface LandscapeMeta {
  id: string;
  slug: LandscapeSlug;
  relatedCategories: ProductCategory[];
  image: Image;
  /** Encuadre fino para evitar recortes torpes en distintos formatos */
  objectPosition?: string;
}

/** LandscapeMeta + texto editorial ya resuelto para el locale activo */
export interface Landscape extends LandscapeMeta {
  name: string;
  concept: string;
  poeticTitle: string;
  editorial: string;
  closingLine: string[];
}
