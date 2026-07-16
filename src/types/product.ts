import type { Image } from "./image";
import type { Producer } from "./producer";
import type { Region } from "./region";
import type { Territory } from "./territory";

export type ProductCategory =
  | "vinos"
  | "aceites"
  | "quesos"
  | "embutidos"
  | "conservas"
  | "bebidas-espirituosas";

export interface ProductAttribute {
  key: string;
  value: string;
  unit?: string;
}

export interface Pairing {
  type: "food" | "beverage";
  name: string;
  description: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  category: ProductCategory;
  subcategory?: string;
  producer: Producer;
  region: Region;
  territory: Territory;
  /** null cuando la fotografía real todavía no existe (ver EXPERIENCE.md §14) */
  image: Image | null;
  gallery: Image[];
  attributes: ProductAttribute[];
  pairings: Pairing[];
  relatedProducts: Product[];
  publishedAt: string;
  updatedAt: string;
}
