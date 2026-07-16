import type { Image } from "@/types/image";
import type { ProductCategory } from "@/types/product";

/**
 * Fotografía editorial complementaria de banco libre, usada solo donde
 * no existe suficiente fotografía real distinta para evitar repetición
 * (ver categories.ts). Origen: Unsplash License (uso comercial libre,
 * sin atribución obligatoria) — nunca fotografía "premium"/Getty
 * (plus.unsplash.com); nunca fondo blanco ni tono frío dominante
 * (Manual Cap. 28). Verificada manualmente antes de su incorporación.
 *
 * Conservas es la única categoría que aún la necesita: solo existen dos
 * fotografías reales de esa carpeta (anchoas en bandeja, pintxo de
 * anchoa), ya asignadas a Home y al índice de Colección.
 */
export const SALA_MEDIA: Partial<Record<ProductCategory, Image>> = {
  conservas: {
    url: "https://images.unsplash.com/photo-1498550744921-75f79806b8a7?q=80&w=2400&auto=format&fit=crop",
    alt: "Embarcadero de madera al atardecer, luz dorada sobre el agua en calma",
    width: 2400,
    height: 1600,
  },
};
