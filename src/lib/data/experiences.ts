import type { ExperienceMeta } from "@/types/experience";
import { MEDIA } from "./media";

/**
 * Datos estructurales de las 6 experiencias — no traducibles. El texto
 * editorial (title/excerpt/tag/body) vive en `dict.experiences[slug]`
 * (ver src/lib/i18n) y se combina con esto en tiempo de render.
 */
export const EXPERIENCES: ExperienceMeta[] = [
  {
    id: "experience-seis-meses-de-paciencia",
    slug: "seis-meses-de-paciencia",
    readingTime: "6 min",
    publishedAt: "2024-04-02",
    image: MEDIA.bodegonCiruelasMarcoNegro,
  },
  {
    id: "experience-la-montanera",
    slug: "la-montanera",
    readingTime: "7 min",
    publishedAt: "2024-03-18",
    image: MEDIA.jamonMano,
  },
  {
    id: "experience-ladera-norte-altitud",
    slug: "ladera-norte-por-que-la-altitud-cambia-el-vino",
    readingTime: "5 min",
    publishedAt: "2024-03-05",
    image: MEDIA.garnachaIlustrada,
  },
  {
    id: "experience-el-aceite-antes-del-aceite",
    slug: "el-aceite-antes-del-aceite",
    readingTime: "5 min",
    publishedAt: "2024-02-20",
    image: MEDIA.aceitunaTenedor,
  },
  {
    id: "experience-el-aperitivo-como-ritual",
    slug: "el-aperitivo-como-ritual",
    readingTime: "4 min",
    publishedAt: "2024-01-28",
    image: {
      url: "https://images.unsplash.com/photo-1641605529473-293c62b3a148?q=80&w=2400&auto=format&fit=crop",
      alt: "Copa de licor ámbar sobre una mesa de madera, luz cálida y contemplativa",
      width: 2400,
      height: 1600,
    },
  },
  {
    id: "experience-verano-de-sal-y-rosado",
    slug: "un-verano-de-sal-y-vino-rosado",
    readingTime: "4 min",
    publishedAt: "2023-07-14",
    image: {
      ...MEDIA.roseVelero,
      alt: "Vino rosado sirviéndose en copas de cristal, encuadre cercano a las manos y las copas",
    },
  },
];

export function getExperienceMetaBySlug(
  slug: string,
): ExperienceMeta | undefined {
  return EXPERIENCES.find((e) => e.slug === slug);
}
