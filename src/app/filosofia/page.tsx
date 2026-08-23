import type { Metadata } from "next";
import Image from "next/image";
import { FramedImage } from "@/components/ui/FramedImage";
import { Reveal } from "@/components/ui/Reveal";
import { RevealText } from "@/components/ui/RevealText";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Divider } from "@/components/ui/Divider";
import { Quote } from "@/components/ui/Quote";
import { MEDIA } from "@/lib/data/media";
import { getLocale, getDictionary } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const dict = getDictionary(await getLocale());
  return {
    title: dict.filosofia.heroEyebrow,
    description: dict.filosofia.founderQuoteParagraphs[0],
  };
}

export default async function FilosofiaPage() {
  const dict = getDictionary(await getLocale());
  const t = dict.filosofia;

  return (
    <>
      <section className="relative min-h-[85vh]">
        <FramedImage
          src={MEDIA.filosofiaHeroMiradorVinedo.url}
          alt={MEDIA.filosofiaHeroMiradorVinedo.alt}
          priority
          cursorExplore={false}
          frameless
          objectPosition="60% 35%"
          className="absolute inset-0"
        />
      </section>

      <section className="bg-chocolate px-6 py-28 sm:py-36 lg:px-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>{t.heroEyebrow}</Eyebrow>
          <h1 className="font-editorial text-display-sm sm:text-display-md text-ivory mt-6 leading-[1.05]">
            <RevealText text={t.heroTitleLine1} />
            <br />
            <RevealText text={t.heroTitleLine2} delay={0.5} />
          </h1>
        </Reveal>
      </section>

      <section className="bg-chocolate-medium px-6 py-28 sm:py-36 lg:px-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <blockquote className="font-editorial text-heading-sm sm:text-heading-lg text-ivory/90 space-y-6 leading-relaxed italic">
            {t.founderQuoteParagraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </blockquote>
          <Divider
            tone="gold-rose"
            align="center"
            width="w-10"
            className="my-10"
          />
          <div className="relative mx-auto w-full max-w-[200px]">
            <Image
              src={MEDIA.firmaVictor.url}
              alt={MEDIA.firmaVictor.alt}
              width={MEDIA.firmaVictor.width}
              height={MEDIA.firmaVictor.height}
              className="mix-blend-screen h-auto w-full opacity-90"
            />
          </div>
          <p className="font-editorial text-caption text-gold-rose mt-4 italic">
            {t.founderName}
          </p>
        </Reveal>
      </section>

      <section className="bg-ivory px-6 py-28 sm:py-36 lg:px-20">
        <div className="max-w-content mx-auto">
          <Reveal className="max-w-xl">
            <Eyebrow tone="olive">{t.dnaEyebrow}</Eyebrow>
            <h2 className="font-editorial text-heading-xl sm:text-display-sm text-chocolate mt-6">
              {t.dnaTitle}
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {t.pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.08}>
                <p className="font-editorial text-chocolate/20 text-display-sm">
                  0{i + 1}
                </p>
                <h3 className="font-editorial text-heading-md text-chocolate -mt-5">
                  {pillar.title}
                </h3>
                <p className="font-body text-body-sm text-chocolate/70 mt-3 leading-relaxed">
                  {pillar.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-chocolate-medium px-6 py-28 sm:py-36 lg:px-20">
        <div className="max-w-content mx-auto grid gap-16 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>{t.historyEyebrow}</Eyebrow>
            <h2 className="font-editorial text-heading-xl text-ivory mt-6">
              {t.historyTitle}
            </h2>
            <p className="font-body text-body text-ivory/70 mt-6 leading-relaxed">
              {t.historyText}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <Eyebrow>{t.valuesEyebrow}</Eyebrow>
            <ul className="mt-6 space-y-5">
              {t.values.map((value) => (
                <li
                  key={value.title}
                  className="font-body text-body-sm text-ivory/70 border-gold-rose/20 border-l pl-5 leading-relaxed"
                >
                  <span className="text-ivory">{value.title}:</span>{" "}
                  {value.text}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-chocolate px-6 py-32 sm:py-40 lg:px-20">
        <Reveal>
          <Quote attribution={t.quoteAttribution}>{t.quoteText}</Quote>
        </Reveal>
      </section>
    </>
  );
}
