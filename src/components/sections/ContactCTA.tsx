import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Divider } from "@/components/ui/Divider";
import { CTALink } from "@/components/ui/CTALink";
import { MEDIA } from "@/lib/data/media";
import type { Dictionary } from "@/lib/i18n/types";

export function ContactCTA({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-chocolate relative overflow-hidden px-6 py-32 sm:py-40 lg:px-20">
      <Image
        src={MEDIA.embutidoColgado.url}
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="object-cover opacity-[0.06]"
      />
      <div className="relative mx-auto max-w-2xl text-center">
        <Reveal>
          <Eyebrow className="justify-center">
            {dict.home.contactEyebrow}
          </Eyebrow>
        </Reveal>
        <Reveal delay={0.15}>
          <h2 className="font-editorial text-heading-xl sm:text-display-sm text-ivory mt-6">
            {dict.home.contactTitle}
          </h2>
        </Reveal>
        <Reveal delay={0.3}>
          <Divider align="center" className="my-10" />
          <CTALink href="/contacto" className="mx-auto justify-center">
            {dict.home.contactCta}
          </CTALink>
        </Reveal>
      </div>
    </section>
  );
}
