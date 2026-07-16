import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Divider } from "@/components/ui/Divider";
import { MEDIA } from "@/lib/data/media";
import type { Dictionary } from "@/lib/i18n/types";

export function IdentityStatement({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-chocolate relative overflow-hidden py-32 sm:py-40">
      <Image
        src={MEDIA.copaAbstracta.url}
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="object-cover opacity-[0.08]"
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <Eyebrow className="justify-center">
            {dict.home.identityEyebrow}
          </Eyebrow>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="font-editorial text-heading-lg sm:text-display-sm text-ivory mt-8 leading-snug">
            {dict.home.identityText}
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <Divider align="center" className="mt-10" />
        </Reveal>
      </div>
    </section>
  );
}
