import type { ProductCategory } from "@/types/product";
import type { Image, SalaGalleryConfig } from "@/types/image";
import type { PlaceholderVariant } from "@/components/ui/PlaceholderArt";
import { MEDIA } from "./media";
import { SALA_MEDIA } from "./sala-media";

export interface CategoryMeta {
  slug: ProductCategory;
  label: string;
  /** El concepto que sigue a "CATEGORÍA ·" en el bloque curatorial */
  concept: string;
  poeticTitle: string;
  editorial: string;
  closingLine: string[];
  placeholderVariant: PlaceholderVariant;
  /** Miniatura en la vista previa de Home (CollectionPreview) */
  image: Image | null;
  /** Encuadre fino de `image` */
  objectPosition?: string;
  /** Imagen del bloque de esta categoría en el índice de Colección — distinta de `image` */
  coleccionImage: Image | null;
  objectPositionColeccion?: string;
  /** Imagen de cabecera de la propia Sala — distinta de `image` y `coleccionImage` */
  salaImage: Image | null;
  objectPositionSala?: string;
  /**
   * Pared de galería de piezas para el hero de la Sala, en sustitución de
   * `salaImage`. Piloto en Vinos y Aceites — el resto de salas sigue
   * usando el hero de imagen única (ver CATEGORIES abajo).
   */
  salaGallery?: SalaGalleryConfig;
}

/**
 * Contenido puramente conceptual — ver CURATORIAL_GUIDE.md §0 y §16.
 * Ningún nombre de productor, bodega, denominación o cifra concreta:
 * el cliente todavía está construyendo su red real de proveedores.
 *
 * El ORDEN de este array es el recorrido oficial de la exposición
 * (Sala I → VI, ver la navegación al final de cada página de sala):
 * Vinos → El Olivar → El Mar → Los Quesos → Los Ibéricos → Los Destilados.
 */
export const CATEGORIES: CategoryMeta[] = [
  {
    slug: "vinos",
    label: "Vinos",
    concept: "Altitud y paciencia",
    poeticTitle: "La ladera decide el tiempo.",
    editorial:
      "En la montaña, el día calienta y la noche enfría. Esa diferencia, más que cualquier técnica, es la que templa un vino de altura.",
    closingLine: [
      "Crianza lenta",
      "Territorio de montaña",
      "Selección limitada",
    ],
    placeholderVariant: "vino",
    image: MEDIA.garnachaIlustrada,
    coleccionImage: MEDIA.hojaRocioVinedo,
    salaImage: MEDIA.broteCepaVinedo,
    salaGallery: {
      images: [
        MEDIA.vinosGaleriaUva,
        MEDIA.vinosGaleriaVinedo,
        MEDIA.vinosGaleriaVino,
        MEDIA.vinosGaleriaExperiencia,
      ],
    },
  },
  {
    slug: "aceites",
    label: "Aceites y Olivar",
    concept: "La carrera contra el tiempo",
    poeticTitle: "Antes de que se apague el aroma.",
    editorial:
      "Entre el árbol y la muela hay solo unas horas. Todo lo que un aceite puede llegar a ser se decide en ese margen breve.",
    closingLine: ["Molturación en frío", "Cosecha temprana", "Origen ibérico"],
    placeholderVariant: "aceite",
    image: MEDIA.aceitunasAtardecer,
    objectPosition: "50% 58%",
    coleccionImage: MEDIA.cucharasAceitunas,
    salaImage: MEDIA.aceiteGotaPiedra,
    salaGallery: {
      images: [
        MEDIA.aceiteOlivarPiezaUno,
        MEDIA.aceiteOlivarPiezaDos,
        MEDIA.aceiteOlivarPiezaTres,
        MEDIA.aceiteOlivarPiezaCuatro,
      ],
      framed: true,
      backgroundImage: MEDIA.mesaVintageMaderaDorada,
    },
  },
  {
    slug: "conservas",
    label: "Conservas del Mar",
    concept: "El instante conservado",
    poeticTitle: "Un gesto que detiene la marea.",
    editorial:
      "Entre la pesca y el envasado pasan solo horas. Conservar bien es, sobre todo, no dejar que el tiempo estropee lo que el mar ya hizo perfecto.",
    closingLine: ["Salazón artesanal", "Pesca de temporada", "Costa ibérica"],
    placeholderVariant: "general",
    image: MEDIA.anchoasBandejaPlata,
    coleccionImage: MEDIA.anchoasPintxo,
    salaImage: SALA_MEDIA.conservas ?? null,
    salaGallery: {
      images: [
        MEDIA.conservasAnchoasPlata,
        MEDIA.conservasPulpoBrasa,
        MEDIA.conservasMejillones,
        MEDIA.conservasCaviar,
      ],
      framed: true,
      backgroundImage: MEDIA.piedraMarOscura,
    },
  },
  {
    slug: "quesos",
    label: "Quesos",
    concept: "Lo que decide la cueva",
    poeticTitle: "Ninguna receta apresura una espera.",
    editorial:
      "Solo el tiempo, la piedra y la humedad correcta saben cuándo una pieza está lista. El calendario de producción no tiene voto aquí.",
    closingLine: ["Maduración natural", "Leche cruda", "Oficio artesano"],
    placeholderVariant: "general",
    image: MEDIA.quesosMarcoBarroco,
    coleccionImage: MEDIA.cunasQueso,
    salaImage: MEDIA.tablaQuesosOscura,
    salaGallery: {
      images: [
        MEDIA.quesosGaleriaTorre,
        MEDIA.quesosGaleriaTabla,
        MEDIA.quesosGaleriaVino,
        MEDIA.quesosGaleriaCorteza,
      ],
      framed: true,
      backgroundImage: MEDIA.cuevaPiedraCaliza,
    },
  },
  {
    slug: "embutidos",
    label: "Ibéricos",
    concept: "El paso lento del secadero",
    poeticTitle: "Cada loncha guarda una estación.",
    editorial:
      "La curación no se negocia con un calendario. Se negocia con el aire, la humedad y la paciencia de quien no tiene prisa.",
    closingLine: ["Curación natural", "Cerdo ibérico", "Tradición de dehesa"],
    placeholderVariant: "general",
    image: MEDIA.jamonMarcoCobre,
    coleccionImage: MEDIA.jamonLoncheado,
    salaImage: MEDIA.jamonMano,
    salaGallery: {
      images: [
        MEDIA.ibericosGaleriaTabla,
        MEDIA.ibericosGaleriaJamon,
        MEDIA.ibericosGaleriaChorizo,
        MEDIA.ibericosGaleriaBrochetas,
      ],
    },
  },
  {
    slug: "bebidas-espirituosas",
    label: "Destilados",
    concept: "El ritual del aperitivo",
    poeticTitle: "Antes de la mesa, un instante propio.",
    editorial:
      "Un buen aperitivo no adelanta la comida: la retrasa un poco, a propósito. Ese gesto, más que la receta, es lo que de verdad se sirve.",
    closingLine: [
      "Maceración artesanal",
      "Ritual de sobremesa",
      "Tradición ibérica",
    ],
    placeholderVariant: "general",
    image: MEDIA.coctelNegroni,
    coleccionImage: MEDIA.coctelTerciopelo,
    salaImage: MEDIA.condensacionCopa,
  },
];

export function getCategoryMeta(slug: ProductCategory): CategoryMeta {
  const category = CATEGORIES.find((c) => c.slug === slug);
  if (!category) {
    throw new Error(`Categoría desconocida: ${slug}`);
  }
  return category;
}
