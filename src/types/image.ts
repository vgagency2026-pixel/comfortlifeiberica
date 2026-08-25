export interface Image {
  url: string;
  alt: string;
  width: number;
  height: number;
  blurDataURL?: string;
}

/**
 * Configuración de la pared de galería usada como hero alternativo de
 * Sala (ver SalaGalleryHero). `framed`/`backgroundImage` existen para
 * fotografía real que no trae marco propio: se envuelve en el marco de
 * museo, recibe un grado de color cálido compartido, y una textura de
 * fondo muy sutil detrás de las piezas evoca la mesa/pared de la escena.
 */
export interface SalaGalleryConfig {
  images: Image[];
  framed?: boolean;
  backgroundImage?: Image;
}
