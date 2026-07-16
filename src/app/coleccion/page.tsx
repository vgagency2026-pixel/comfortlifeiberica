import type { Metadata } from "next";
import { FramedImage } from "@/components/ui/FramedImage";
import { PlaceholderArt } from "@/components/ui/PlaceholderArt";
import { Reveal } from "@/components/ui/Reveal";
import { RevealText } from "@/components/ui/RevealText";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CuratorialBlock } from "@/components/ui/CuratorialBlock";
import { CTALink } from "@/components/ui/CTALink";
import { CATEGORIES } from "@/lib/data/categories";
import { MEDIA } from "@/lib/data/media";
import { getLocale, getDictionary } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const dict = getDictionary(await getLocale());
  return {
    title: dict.coleccion.heroEyebrow,
    description: dict.coleccion.intro,
  };
}

export default async function ColeccionPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);

  return (
    <>
      <section className="relative flex min-h-[70vh] items-end">
        <FramedImage
          src={MEDIA.tablaMixtaAbundante.url}
          alt={MEDIA.tablaMixtaAbundante.alt}
          priority
          cursorExplore={false}
          frameless
          objectPosition="50% 38%"
          className="absolute inset-0"
        />
        <div className="from-chocolate via-chocolate/35 to-chocolate/5 pointer-events-none absolute inset-0 bg-gradient-to-t" />
        <div className="max-w-content relative mx-auto w-full px-6 pb-16 lg:px-20">
          <Eyebrow>{dict.coleccion.heroEyebrow}</Eyebrow>
          <h1 className="font-editorial text-display-sm sm:text-display-md text-ivory mt-6 max-w-2xl">
            <RevealText text={dict.coleccion.heroTitle} />
          </h1>
        </div>
      </section>

      <section className="bg-chocolate px-6 py-24 sm:py-32 lg:px-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-body text-body-lg text-ivory/70 leading-relaxed">
            {dict.coleccion.intro}
          </p>
        </Reveal>
      </section>

      {CATEGORIES.map((category, index) => {
        const isDark = index % 2 === 1;
        const t = dict.categories[category.slug];

        return (
          <section
            key={category.slug}
            id={category.slug}
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
                    ? "relative aspect-[4/5] w-full lg:order-1"
                    : "relative aspect-[4/5] w-full lg:order-2"
                }
              >
                {category.coleccionImage ? (
                  <FramedImage
                    src={category.coleccionImage.url}
                    alt={category.coleccionImage.alt}
                    objectPosition={category.objectPositionColeccion}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                ) : (
                  <PlaceholderArt
                    variant={category.placeholderVariant}
                    label={dict.coleccion.salaLabel}
                    note={dict.coleccion.placeholderNote}
                  />
                )}
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
                  {dict.coleccion.salaLabel}{" "}
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div className="mt-4">
                  <CuratorialBlock
                    eyebrow={`${t.label.toUpperCase()} · ${t.concept.toUpperCase()}`}
                    poeticTitle={t.poeticTitle}
                    editorial={t.editorial}
                    closingLine={t.closingLine}
                    tone={isDark ? "ivory" : "chocolate"}
                  />
                  <CTALink
                    href={`/coleccion/${category.slug}`}
                    tone={isDark ? "ivory" : "chocolate"}
                    className="mt-8"
                  >
                    {dict.coleccion.enterSala}
                  </CTALink>
                </div>
              </Reveal>
            </div>
          </section>
        );
      })}
    </>
  );
}
