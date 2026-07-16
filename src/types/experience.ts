import type { Image } from "./image";

export type ExperienceSlug =
  | "seis-meses-de-paciencia"
  | "la-montanera"
  | "ladera-norte-por-que-la-altitud-cambia-el-vino"
  | "el-aceite-antes-del-aceite"
  | "el-aperitivo-como-ritual"
  | "un-verano-de-sal-y-vino-rosado";

/**
 * Datos estructurales de la experiencia — no traducibles. El texto
 * editorial (title/excerpt/tag/body) vive en el diccionario i18n
 * (`dict.experiences[slug]`) y se combina con esto en tiempo de render.
 */
export interface ExperienceMeta {
  id: string;
  slug: ExperienceSlug;
  image: Image;
  readingTime: string;
  publishedAt: string;
}

/** ExperienceMeta + texto editorial ya resuelto para el locale activo */
export interface Experience extends ExperienceMeta {
  title: string;
  excerpt: string;
  body: string[];
  tag: string;
}
