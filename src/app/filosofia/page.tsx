import type { Metadata } from "next";
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
    description: dict.filosofia.manifestoText,
  };
}

export default async function FilosofiaPage() {
  const dict = getDictionary(await getLocale());
  const t = dict.filosofia;

  return (
    <>
      <section className="relative flex min-h-[85vh] items-end">
        <FramedImage
          src={MEDIA.bodegonCiruelas.url}
          alt={MEDIA.bodegonCiruelas.alt}
          priority
          cursorExplore={false}
          frameless
          className="absolute inset-0"
          imgClassName="brightness-[0.85]"
        />
        <div className="from-chocolate via-chocolate/35 to-chocolate/5 pointer-events-none absolute inset-0 bg-gradient-to-t" />
        <div className="max-w-content relative mx-auto w-full px-6 pb-20 lg:px-20">
          <Eyebrow>{t.heroEyebrow}</Eyebrow>
          <h1 className="font-editorial text-display-sm sm:text-display-lg text-ivory mt-6 max-w-2xl leading-[1.05]">
            <RevealText text={t.heroTitleLine1} />
            <br />
            <RevealText text={t.heroTitleLine2} delay={0.5} />
          </h1>
        </div>
      </section>

      <section className="bg-chocolate px-6 py-28 sm:py-36 lg:px-20">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Eyebrow>{t.manifestoEyebrow}</Eyebrow>
            <p className="font-editorial text-heading-lg sm:text-display-sm text-ivory mt-6 leading-snug">
              {t.manifestoQuote}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <Divider className="my-10" />
            <p className="font-body text-body-lg text-ivory/70 leading-relaxed">
              {t.manifestoText}
            </p>
          </Reveal>
        </div>
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
                  <span className="text-ivory">{value.title}</span> —{" "}
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
