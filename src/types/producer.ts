import type { Image } from "./image";
import type { Product } from "./product";
import type { Region } from "./region";

export interface Producer {
  id: string;
  slug: string;
  name: string;
  shortBio: string;
  fullBio: string;
  quote: string;
  /** null cuando la fotografía real todavía no existe (ver EXPERIENCE.md §14) */
  image: Image | null;
  region: Region;
  products: Product[];
}
