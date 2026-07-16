import type { Image } from "./image";

export interface Territory {
  id: string;
  slug: string;
  name: string;
  country: "spain" | "portugal";
  description: string;
  /** null cuando la fotografía real todavía no existe (ver EXPERIENCE.md §14) */
  image: Image | null;
  coordinates: {
    lat: number;
    lng: number;
  };
}
