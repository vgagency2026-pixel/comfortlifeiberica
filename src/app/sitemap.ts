import type { MetadataRoute } from "next";
import { CATEGORIES } from "@/lib/data/categories";
import { EXPERIENCES } from "@/lib/data/experiences";

const BASE_URL = "https://www.comfortlifeiberica.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/filosofia`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/coleccion`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/territorios`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/productores`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/experiencias`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contacto`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = CATEGORIES.map((category) => ({
    url: `${BASE_URL}/coleccion/${category.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const experienceRoutes: MetadataRoute.Sitemap = EXPERIENCES.map(
    (experience) => ({
      url: `${BASE_URL}/experiencias/${experience.slug}`,
      lastModified: new Date(experience.publishedAt),
      changeFrequency: "monthly",
      priority: 0.6,
    }),
  );

  return [...staticRoutes, ...categoryRoutes, ...experienceRoutes];
}
