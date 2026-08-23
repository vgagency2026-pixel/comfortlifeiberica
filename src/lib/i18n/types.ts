import type { ProductCategory } from "@/types/product";
import type { LandscapeSlug } from "@/types/landscape";
import type { ExperienceSlug } from "@/types/experience";

export const LOCALES = ["es", "en", "pt"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "es";
export const LOCALE_COOKIE = "cli_locale";

export interface CategoryDict {
  label: string;
  /** Nombre breve para la navegación de sala a sala ("El Olivar", no "Aceites y Olivar") */
  tourLabel: string;
  concept: string;
  poeticTitle: string;
  editorial: string;
  closingLine: string[];
}

export interface SalaDict {
  narrative: string[];
  productTypes: string[];
  spotlight?: { title: string; text: string };
}

export interface Dictionary {
  nav: {
    filosofia: string;
    coleccion: string;
    productores: string;
    territorios: string;
    experiencias: string;
    contacto: string;
    discover: string;
  };
  footer: {
    description: string;
    sitemapHeading: string;
    contactHeading: string;
    rights: string;
  };
  home: {
    heroEyebrow: string;
    heroTitleLine1: string;
    heroTitleLine2: string;
    heroManifesto: string;
    identityEyebrow: string;
    identityText: string;
    collectionEyebrow: string;
    collectionTitle: string;
    collectionCta: string;
    selectionEyebrow: string;
    selectionTitle: string;
    selectionSteps: { number: string; title: string; text: string }[];
    territoryEyebrow: string;
    territoryTitle: string;
    territoryText: string;
    territoryCta: string;
    experiencesEyebrow: string;
    experiencesTitle: string;
    experiencesCta: string;
    contactEyebrow: string;
    contactTitle: string;
    contactCta: string;
  };
  coleccion: {
    heroEyebrow: string;
    heroTitle: string;
    intro: string;
    salaLabel: string;
    enterSala: string;
    /** Nota bajo el marcador de posición cuando una fotografía aún no existe */
    placeholderNote: string;
  };
  sala: {
    spotlightEyebrow: string;
    productTypesEyebrow: string;
    /** "LA COLECCIÓN CONTINÚA" — salas intermedias */
    continuesEyebrow: string;
    /** "Continuar hacia la Sala {n} · {sala}" con {n} y {sala} a interpolar */
    continueCta: string;
    /** "EL RECORRIDO CONCLUYE" — última sala */
    concludesEyebrow: string;
    concludesText: string;
    ctaBack: string;
    ctaContact: string;
  };
  /** Texto poético (2-3 líneas) que conecta cada sala con la siguiente, en el orden del recorrido */
  salaTransitions: Record<ProductCategory, string>;
  categories: Record<ProductCategory, CategoryDict>;
  salas: Record<ProductCategory, SalaDict>;
  filosofia: {
    heroEyebrow: string;
    heroTitleLine1: string;
    heroTitleLine2: string;
    dnaEyebrow: string;
    dnaTitle: string;
    pillars: { title: string; text: string }[];
    historyEyebrow: string;
    historyTitle: string;
    historyText: string;
    valuesEyebrow: string;
    values: { title: string; text: string }[];
    quoteText: string;
    quoteAttribution: string;
    /** Sustituye a la antigua sección "El manifiesto" — sin eyebrow, cierra con la firma del fundador */
    founderQuoteParagraphs: string[];
    founderName: string;
  };
  productores: {
    heroEyebrow: string;
    heroTitle: string;
    introText: string;
    criteriaEyebrow: string;
    criteriaTitle: string;
    criteria: { title: string; text: string }[];
    ctaEyebrow: string;
    ctaTitle: string;
    ctaLink: string;
  };
  territorios: {
    heroEyebrow: string;
    heroTitle: string;
    introText: string;
    landscapes: Record<
      LandscapeSlug,
      {
        name: string;
        concept: string;
        poeticTitle: string;
        editorial: string;
        closingLine: string[];
      }
    >;
  };
  experienciasPage: {
    heroEyebrow: string;
    heroTitle: string;
    /** " min de lectura" — se concatena tras el número de minutos */
    readingTimeSuffix: string;
    exploreCollectionCta: string;
  };
  experiences: Record<
    ExperienceSlug,
    { title: string; excerpt: string; tag: string; body: string[] }
  >;
  contacto: {
    heroEyebrow: string;
    heroTitle: string;
    introText: string;
    imageAlt: string;
    audienceEyebrow: string;
    audienceText: string;
    form: {
      name: string;
      establishment: string;
      type: string;
      typeOptions: string[];
      typePlaceholder: string;
      email: string;
      message: string;
      submit: string;
      submitting: string;
      note: string;
      successTitle: string;
      successText: string;
      errorText: string;
    };
  };
  languageSwitcher: {
    label: string;
  };
}
