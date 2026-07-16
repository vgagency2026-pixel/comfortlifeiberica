import type { ProductCategory } from "./product";

export interface SalaSpotlight {
  title: string;
  text: string;
}

/**
 * Contenido narrativo profundo de cada sala (página independiente).
 * `productTypes` son categorías reales y genéricas de producto, nunca
 * marcas, bodegas o denominaciones inventadas — ver CURATORIAL_GUIDE.md §0.
 */
export interface SalaContent {
  slug: ProductCategory;
  narrative: string[];
  productTypes: string[];
  spotlight?: SalaSpotlight;
}
