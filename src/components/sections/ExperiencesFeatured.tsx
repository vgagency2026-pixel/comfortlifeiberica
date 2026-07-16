import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTALink } from "@/components/ui/CTALink";
import { ExperienceCard } from "@/components/features/ExperienceCard";
import { EXPERIENCES } from "@/lib/data/experiences";
import type { Dictionary } from "@/lib/i18n/types";

export function ExperiencesFeatured({ dict }: { dict: Dictionary }) {
  const featured = EXPERIENCES.slice(0, 3);

  return (
    <section className="bg-ivory px-6 py-28 sm:py-36 lg:px-20">
      <div className="max-w-content mx-auto">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal>
            <SectionHeading
              eyebrow={dict.home.experiencesEyebrow}
              title={dict.home.experiencesTitle}
              tone="chocolate"
            />
          </Reveal>
          <Reveal delay={0.15}>
            <CTALink href="/experiencias" tone="chocolate">
              {dict.home.experiencesCta}
            </CTALink>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {featured.map((experience, i) => (
            <Reveal key={experience.id} delay={i * 0.1}>
              <ExperienceCard
                experience={{
                  ...experience,
                  ...dict.experiences[experience.slug],
                }}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
