import type { Metadata } from "next";
import { FramedImage } from "@/components/ui/FramedImage";
import { Reveal } from "@/components/ui/Reveal";
import { RevealText } from "@/components/ui/RevealText";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CuratorialBlock } from "@/components/ui/CuratorialBlock";
import { LANDSCAPES } from "@/lib/data/landscapes";
import { MEDIA } from "@/lib/data/media";
import { getLocale, getDictionary } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const dict = getDictionary(await getLocale());
  return {
    title: dict.territorios.heroEyebrow,
    description: dict.territorios.introText,
  };
}

export default async function TerritoriosPage() {
  const dict = getDictionary(await getLocale());
  const t = dict.territorios;

  return (
    <>
      <section className="relative flex min-h-[70vh] items-end">
        <FramedImage
          src={MEDIA.botellaTierra.url}
          alt={MEDIA.botellaTierra.alt}
          priority
          cursorExplore={false}
          frameless
          className="absolute inset-0"
        />
        <div className="from-chocolate via-chocolate/35 to-chocolate/5 pointer-events-none absolute inset-0 bg-gradient-to-t" />
        <div className="max-w-content relative mx-auto w-full px-6 pb-16 lg:px-20">
          <Eyebrow>{t.heroEyebrow}</Eyebrow>
          <h1 className="font-editorial text-display-sm sm:text-display-md text-ivory mt-6 max-w-2xl">
            <RevealText text={t.heroTitle} />
          </h1>
        </div>
      </section>

      <section className="bg-chocolate px-6 py-24 sm:py-32 lg:px-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-body text-body-lg text-ivory/70 leading-relaxed">
            {t.introText}
          </p>
        </Reveal>
      </section>

      {LANDSCAPES.map((landscape, index) => {
        const isDark = index % 2 === 1;
        const lt = t.landscapes[landscape.slug];

        return (
          <section
            key={landscape.id}
            className={
              isDark
                ? "bg-chocolate-medium px-6 py-28 sm:py-36 lg:px-20"
                : "bg-ivory px-6 py-28 sm:py-36 lg:px-20"
            }
          >
            <div className="max-w-content mx-auto grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
              <Reveal
                className={
                  index % 2 === 0
                    ? "relative aspect-[4/3] w-full lg:order-1"
                    : "relative aspect-[4/3] w-full lg:order-2"
                }
              >
                <FramedImage
                  src={landscape.image.url}
                  alt={landscape.image.alt}
                  objectPosition={landscape.objectPosition}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </Reveal>

              <Reveal
                delay={0.1}
                className={index % 2 === 0 ? "lg:order-2" : "lg:order-1"}
              >
                <p
                  className={
                    isDark
                      ? "font-ui text-caption text-ivory/40 tracking-[0.25em] uppercase"
                      : "font-ui text-caption text-chocolate/40 tracking-[0.25em] uppercase"
                  }
                >
                  {lt.name}
                </p>
                <div className="mt-4">
                  <CuratorialBlock
                    eyebrow={`${lt.name.toUpperCase()} · ${lt.concept.toUpperCase()}`}
                    poeticTitle={lt.poeticTitle}
                    editorial={lt.editorial}
                    closingLine={lt.closingLine}
                    tone={isDark ? "ivory" : "chocolate"}
                  />
                </div>
              </Reveal>
            </div>
          </section>
        );
      })}
    </>
  );
}
