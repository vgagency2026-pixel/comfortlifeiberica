import type { Metadata } from "next";
import { FramedImage } from "@/components/ui/FramedImage";
import { Reveal } from "@/components/ui/Reveal";
import { RevealText } from "@/components/ui/RevealText";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ExperienceCard } from "@/components/features/ExperienceCard";
import { EXPERIENCES } from "@/lib/data/experiences";
import { MEDIA } from "@/lib/data/media";
import { getLocale, getDictionary } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const dict = getDictionary(await getLocale());
  return {
    title: dict.experienciasPage.heroEyebrow,
    description: dict.experienciasPage.heroTitle,
  };
}

export default async function ExperienciasPage() {
  const dict = getDictionary(await getLocale());
  const t = dict.experienciasPage;

  return (
    <>
      <section className="relative flex min-h-[70vh] items-end">
        <FramedImage
          src={MEDIA.cortezaQueso.url}
          alt={MEDIA.cortezaQueso.alt}
          priority
          cursorExplore={false}
          frameless
          objectPosition="50% 30%"
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

      <section className="bg-ivory px-6 py-28 sm:py-36 lg:px-20">
        <div className="max-w-content mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {EXPERIENCES.map((experience, i) => (
            <Reveal key={experience.id} delay={i * 0.08}>
              <ExperienceCard
                experience={{
                  ...experience,
                  ...dict.experiences[experience.slug],
                }}
              />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
