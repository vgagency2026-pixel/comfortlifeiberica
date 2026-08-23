import Image from "next/image";
import type { Image as ImageType } from "@/types/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealText } from "@/components/ui/RevealText";
import { Reveal } from "@/components/ui/Reveal";

interface SalaGalleryHeroProps {
  eyebrow: string;
  title: string;
  images: ImageType[];
}

/**
 * Hero alternativo para la ficha de Sala: una pared de galería con piezas
 * ya enmarcadas en la propia fotografía (sin marco añadido por CSS), en
 * vez del fondo de imagen única a pantalla completa. Las piezas comparten
 * un mismo lienzo 4:5 y una misma gradación de color (ver el registro en
 * media.ts), así que aquí solo se cuida la alineación y la luz ambiental.
 * Prueba piloto en Vinos — ver `salaGalleryImages` en categories.ts.
 */
export function SalaGalleryHero({
  eyebrow,
  title,
  images,
}: SalaGalleryHeroProps) {
  return (
    <section className="bg-chocolate-medium gallery-wall relative overflow-hidden">
      <div className="max-w-content relative mx-auto w-full px-6 pt-40 pb-14 lg:px-20 lg:pt-48 lg:pb-16">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="font-editorial text-display-sm sm:text-display-lg text-ivory mt-6 max-w-2xl">
          <RevealText text={title} />
        </h1>
      </div>

      <div className="relative px-6 pb-24 sm:pb-28 lg:px-20 lg:pb-32">
        <div className="max-w-content snap-x snap-mandatory mx-auto flex items-start gap-6 overflow-x-auto pb-4 lg:grid lg:grid-cols-4 lg:gap-8 lg:overflow-visible lg:pb-0">
          {images.map((image, i) => (
            <Reveal
              key={image.url}
              delay={i * 0.1}
              className="w-[68vw] shrink-0 snap-center sm:w-[40vw] lg:w-auto lg:shrink"
            >
              <div className="gallery-wall-frame group relative aspect-[4/5] w-full ease-elegant transition-transform duration-700 hover:-translate-y-1.5">
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 1024px) 70vw, 22vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
