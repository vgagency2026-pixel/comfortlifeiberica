import type { Metadata } from "next";
import { FramedImage } from "@/components/ui/FramedImage";
import { Reveal } from "@/components/ui/Reveal";
import { RevealText } from "@/components/ui/RevealText";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Divider } from "@/components/ui/Divider";
import { CTALink } from "@/components/ui/CTALink";
import { MEDIA } from "@/lib/data/media";
import { getLocale, getDictionary } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const dict = getDictionary(await getLocale());
  return {
    title: dict.productores.heroEyebrow,
    description: dict.productores.introText,
  };
}

export default async function ProductoresPage() {
  const dict = getDictionary(await getLocale());
  const t = dict.productores;

  return (
    <>
      <section className="relative flex min-h-[70vh] items-end">
        <FramedImage
          src={MEDIA.sumillerSirviendo.url}
          alt={MEDIA.sumillerSirviendo.alt}
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

      <section className="bg-ivory px-6 py-28 sm:py-36 lg:px-20">
        <div className="max-w-content mx-auto">
          <Reveal className="max-w-xl">
            <Eyebrow tone="olive">{t.criteriaEyebrow}</Eyebrow>
            <h2 className="font-editorial text-heading-xl sm:text-display-sm text-chocolate mt-6">
              {t.criteriaTitle}
            </h2>
          </Reveal>

          <div className="mt-20 grid gap-x-12 gap-y-16 sm:grid-cols-2">
            {t.criteria.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <p className="font-editorial text-chocolate/20 text-display-sm">
                  0{i + 1}
                </p>
                <h3 className="font-editorial text-heading-md text-chocolate -mt-5">
                  {item.title}
                </h3>
                <p className="font-body text-body-sm text-chocolate/70 mt-3 leading-relaxed">
                  {item.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-chocolate-medium px-6 py-28 sm:py-36 lg:px-20">
        <Reveal className="mx-auto max-w-xl text-center">
          <Eyebrow className="justify-center">{t.ctaEyebrow}</Eyebrow>
          <h2 className="font-editorial text-heading-lg sm:text-heading-xl text-ivory mt-6">
            {t.ctaTitle}
          </h2>
          <Divider align="center" className="my-8" />
          <CTALink href="/contacto" className="mx-auto justify-center">
            {t.ctaLink}
          </CTALink>
        </Reveal>
      </section>
    </>
  );
}
