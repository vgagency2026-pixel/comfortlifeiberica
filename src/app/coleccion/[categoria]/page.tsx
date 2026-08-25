import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FramedImage } from "@/components/ui/FramedImage";
import { SalaGalleryHero } from "@/components/ui/SalaGalleryHero";
import { PlaceholderArt } from "@/components/ui/PlaceholderArt";
import { Reveal } from "@/components/ui/Reveal";
import { RevealText } from "@/components/ui/RevealText";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Divider } from "@/components/ui/Divider";
import { CATEGORIES, getCategoryMeta } from "@/lib/data/categories";
import { getLocale, getDictionary } from "@/lib/i18n";
import type { ProductCategory } from "@/types/product";

/** Numeración de sala del recorrido — el orden es el de CATEGORIES */
const ROMAN_NUMERALS = ["I", "II", "III", "IV", "V", "VI"];

interface SalaPageProps {
  params: Promise<{ categoria: string }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map((category) => ({ categoria: category.slug }));
}

function isProductCategory(value: string): value is ProductCategory {
  return CATEGORIES.some((c) => c.slug === value);
}

export async function generateMetadata({
  params,
}: SalaPageProps): Promise<Metadata> {
  const { categoria } = await params;
  if (!isProductCategory(categoria)) return {};
  const dict = getDictionary(await getLocale());
  const t = dict.categories[categoria];

  return {
    title: t.label,
    description: t.editorial,
  };
}

export default async function SalaPage({ params }: SalaPageProps) {
  const { categoria } = await params;
  if (!isProductCategory(categoria)) notFound();

  const category = getCategoryMeta(categoria);
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const t = dict.categories[categoria];
  const sala = dict.salas[categoria];

  const currentIndex = CATEGORIES.findIndex((c) => c.slug === categoria);
  const nextCategory = CATEGORIES[currentIndex + 1];
  const transitionText = dict.salaTransitions[categoria];

  const salaImage = category.salaImage;
  const salaObjectPosition = category.objectPositionSala;

  const salaGallery = category.salaGallery;

  return (
    <>
      {salaGallery ? (
        <SalaGalleryHero
          eyebrow={t.label}
          title={t.poeticTitle}
          images={salaGallery.images}
          framed={salaGallery.framed}
          backgroundImage={salaGallery.backgroundImage}
        />
      ) : (
      <section className="relative flex min-h-[80vh] items-end">
        {salaImage ? (
          <FramedImage
            src={salaImage.url}
            alt={salaImage.alt}
            priority
            cursorExplore={false}
            frameless
            objectPosition={salaObjectPosition}
            sizes="100vw"
            className="absolute inset-0"
          />
        ) : (
          <PlaceholderArt
            variant={category.placeholderVariant}
            label={dict.coleccion.salaLabel}
            note={dict.coleccion.placeholderNote}
            frameless
            className="absolute inset-0"
          />
        )}
        <div className="from-chocolate via-chocolate/35 to-chocolate/5 pointer-events-none absolute inset-0 bg-gradient-to-t" />
        <div className="max-w-content relative mx-auto w-full px-6 pb-20 lg:px-20">
          <Eyebrow>{t.label}</Eyebrow>
          <h1 className="font-editorial text-display-sm sm:text-display-lg text-ivory mt-6 max-w-2xl">
            <RevealText text={t.poeticTitle} />
          </h1>
        </div>
      </section>
      )}

      <section className="bg-chocolate px-6 py-28 sm:py-36 lg:px-20">
        <div className="mx-auto max-w-prose space-y-6">
          {sala.narrative.map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="font-body text-body-lg text-ivory/75 leading-[1.75]">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {sala.spotlight ? (
        <section className="bg-chocolate-medium px-6 py-28 sm:py-36 lg:px-20">
          <Reveal className="max-w-content mx-auto grid gap-10 lg:grid-cols-[minmax(0,_1fr)_2fr] lg:gap-20">
            <div>
              <Eyebrow>{dict.sala.spotlightEyebrow}</Eyebrow>
              <h2 className="font-editorial text-heading-xl sm:text-display-sm text-ivory mt-4">
                {sala.spotlight.title}
              </h2>
              <Divider className="mt-8" />
            </div>
            <p className="font-editorial text-heading-sm text-ivory/80 leading-relaxed italic">
              {sala.spotlight.text}
            </p>
          </Reveal>
        </section>
      ) : null}

      <section className="bg-ivory px-6 py-28 sm:py-36 lg:px-20">
        <div className="max-w-content mx-auto">
          <Reveal className="max-w-xl">
            <Eyebrow tone="olive">{dict.sala.productTypesEyebrow}</Eyebrow>
            <Divider tone="gold-rose" className="mt-6" />
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="mt-14 grid grid-cols-2 gap-x-10 gap-y-6 sm:grid-cols-3">
              {sala.productTypes.map((type) => (
                <li
                  key={type}
                  className="font-editorial text-heading-sm border-chocolate/10 text-chocolate/85 border-b pb-4 italic"
                >
                  {type}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {nextCategory ? (
        <section className="bg-chocolate px-6 py-28 sm:py-36 lg:px-20">
          <Reveal className="mx-auto max-w-xl text-center">
            <Eyebrow className="justify-center">
              {dict.sala.continuesEyebrow}
            </Eyebrow>
            {transitionText ? (
              <p className="font-editorial text-heading-sm sm:text-heading-md text-ivory/80 mt-6 leading-relaxed italic">
                {transitionText}
              </p>
            ) : null}
            <Divider align="center" className="my-10" />
            <Link
              href={`/coleccion/${nextCategory.slug}`}
              className="group border-gold-rose/30 hover:border-gold-rose inline-flex items-center gap-4 border px-8 py-5 transition-colors duration-500 sm:px-10"
            >
              <span
                aria-hidden
                className="font-editorial text-heading-md sm:text-heading-lg text-gold-rose ease-elegant transition-transform duration-500 group-hover:translate-x-1"
              >
                →
              </span>
              <span className="font-editorial text-heading-sm sm:text-heading-md text-ivory text-left italic">
                {dict.sala.continueCta
                  .replace("{n}", ROMAN_NUMERALS[currentIndex + 1] ?? "")
                  .replace(
                    "{sala}",
                    dict.categories[nextCategory.slug].tourLabel,
                  )}
              </span>
            </Link>
            <div>
              <Link
                href="/coleccion"
                className="font-ui text-caption text-ivory/40 hover:text-ivory/70 ease-elegant mt-10 inline-block tracking-[0.2em] uppercase transition-colors duration-500"
              >
                ← {dict.sala.ctaBack}
              </Link>
            </div>
          </Reveal>
        </section>
      ) : (
        <section className="bg-chocolate px-6 py-28 sm:py-36 lg:px-20">
          <Reveal className="mx-auto max-w-xl text-center">
            <Eyebrow className="justify-center">
              {dict.sala.concludesEyebrow}
            </Eyebrow>
            <p className="font-editorial text-heading-md sm:text-heading-lg text-ivory/85 mt-6 leading-relaxed italic">
              “{dict.sala.concludesText}”
            </p>
            <Divider align="center" className="my-10" />
            <Link
              href="/contacto"
              className="group border-gold-rose/30 hover:border-gold-rose inline-flex items-center gap-4 border px-8 py-5 transition-colors duration-500 sm:px-10"
            >
              <span
                aria-hidden
                className="font-editorial text-heading-md sm:text-heading-lg text-gold-rose ease-elegant transition-transform duration-500 group-hover:translate-x-1"
              >
                →
              </span>
              <span className="font-editorial text-heading-sm sm:text-heading-md text-ivory italic">
                {dict.sala.ctaContact}
              </span>
            </Link>
          </Reveal>
        </section>
      )}
    </>
  );
}
