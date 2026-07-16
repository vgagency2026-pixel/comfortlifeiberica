import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTALink } from "@/components/ui/CTALink";
import { FramedImage } from "@/components/ui/FramedImage";
import { LANDSCAPES } from "@/lib/data/landscapes";
import { MEDIA } from "@/lib/data/media";
import type { Dictionary } from "@/lib/i18n/types";

export function TerritoryPreview({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-chocolate-medium px-6 py-28 sm:py-36 lg:px-20">
      <div className="max-w-content mx-auto grid gap-16 lg:grid-cols-2 lg:items-center">
        <Reveal className="relative aspect-[3/4] w-full">
          <FramedImage
            src={MEDIA.copaPiano.url}
            alt={MEDIA.copaPiano.alt}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </Reveal>

        <div>
          <Reveal>
            <SectionHeading
              eyebrow={dict.home.territoryEyebrow}
              title={dict.home.territoryTitle}
            />
          </Reveal>
          <Reveal delay={0.15}>
            <p className="font-body text-body text-ivory/70 mt-6 max-w-md leading-relaxed">
              {dict.home.territoryText}
            </p>
          </Reveal>
          <Reveal delay={0.3} className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {LANDSCAPES.map((landscape) => (
              <span
                key={landscape.id}
                className="font-ui text-caption text-ivory/50 tracking-[0.2em] uppercase"
              >
                {dict.territorios.landscapes[landscape.slug].name}
              </span>
            ))}
          </Reveal>
          <Reveal delay={0.4} className="mt-10">
            <CTALink href="/territorios">{dict.home.territoryCta}</CTALink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
