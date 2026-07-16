import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FramedImage } from "@/components/ui/FramedImage";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Divider } from "@/components/ui/Divider";
import { CTALink } from "@/components/ui/CTALink";
import { EXPERIENCES, getExperienceMetaBySlug } from "@/lib/data/experiences";
import { getLocale, getDictionary } from "@/lib/i18n";
import type { ExperienceSlug } from "@/types/experience";

interface ExperiencePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return EXPERIENCES.map((experience) => ({ slug: experience.slug }));
}

function isExperienceSlug(value: string): value is ExperienceSlug {
  return EXPERIENCES.some((e) => e.slug === value);
}

export async function generateMetadata({
  params,
}: ExperiencePageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!isExperienceSlug(slug)) return {};
  const dict = getDictionary(await getLocale());
  const t = dict.experiences[slug];

  return { title: t.title, description: t.excerpt };
}

export default async function ExperiencePage({ params }: ExperiencePageProps) {
  const { slug } = await params;
  if (!isExperienceSlug(slug)) notFound();

  const meta = getExperienceMetaBySlug(slug);
  if (!meta) notFound();

  const dict = getDictionary(await getLocale());
  const t = dict.experiences[slug];

  return (
    <article>
      <section className="relative flex min-h-[60vh] items-end">
        <FramedImage
          src={meta.image.url}
          alt={meta.image.alt}
          priority
          cursorExplore={false}
          frameless
          className="absolute inset-0"
          objectPosition={
            meta.slug === "un-verano-de-sal-y-vino-rosado"
              ? "50% 30%"
              : undefined
          }
        />
        <div className="from-chocolate via-chocolate/35 to-chocolate/5 pointer-events-none absolute inset-0 bg-gradient-to-t" />
        <div className="relative mx-auto w-full max-w-prose px-6 pb-16">
          <Eyebrow>
            {t.tag} · {meta.readingTime}
            {dict.experienciasPage.readingTimeSuffix}
          </Eyebrow>
          <h1 className="font-editorial text-heading-xl sm:text-display-sm text-ivory mt-4">
            {t.title}
          </h1>
        </div>
      </section>

      <section className="bg-chocolate px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-prose">
          <Reveal>
            <p className="font-editorial text-heading-sm text-ivory/80 italic">
              {t.excerpt}
            </p>
            <Divider className="mt-8 mb-10" />
          </Reveal>

          <div className="space-y-6">
            {t.body.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p className="font-body text-body-lg text-ivory/75 leading-[1.75]">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-16">
            <CTALink href="/coleccion">
              {dict.experienciasPage.exploreCollectionCta}
            </CTALink>
          </Reveal>
        </div>
      </section>
    </article>
  );
}
