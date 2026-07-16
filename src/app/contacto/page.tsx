import type { Metadata } from "next";
import { FramedImage } from "@/components/ui/FramedImage";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Divider } from "@/components/ui/Divider";
import { ContactForm } from "@/components/features/ContactForm";
import { MEDIA } from "@/lib/data/media";
import { getLocale, getDictionary } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const dict = getDictionary(await getLocale());
  return {
    title: dict.contacto.heroEyebrow,
    description: dict.contacto.introText,
  };
}

export default async function ContactoPage() {
  const dict = getDictionary(await getLocale());
  const t = dict.contacto;

  return (
    <section className="max-w-content mx-auto grid gap-16 px-6 pt-32 pb-28 lg:grid-cols-2 lg:gap-20 lg:px-20 lg:pt-40">
      <div>
        <Reveal>
          <Eyebrow>{t.heroEyebrow}</Eyebrow>
          <h1 className="font-editorial text-display-sm text-ivory mt-4">
            {t.heroTitle}
          </h1>
          <Divider className="my-8" />
          <p className="font-editorial text-heading-sm text-ivory/70 max-w-md italic">
            {t.introText}
          </p>
        </Reveal>

        <Reveal
          delay={0.15}
          className="relative mt-14 hidden aspect-[4/5] w-full max-w-sm lg:block"
        >
          <FramedImage
            src={MEDIA.roseVelero.url}
            alt={t.imageAlt}
            objectPosition="50% 30%"
            sizes="400px"
          />
        </Reveal>

        <Reveal delay={0.25} className="mt-14">
          <p className="font-ui text-overline text-gold-rose tracking-[0.3em] uppercase">
            {t.audienceEyebrow}
          </p>
          <p className="font-body text-body-sm text-ivory/60 mt-3 max-w-sm leading-relaxed">
            {t.audienceText}
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <ContactForm dict={t.form} />
      </Reveal>
    </section>
  );
}
