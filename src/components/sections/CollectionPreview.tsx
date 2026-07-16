import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTALink } from "@/components/ui/CTALink";
import { FramedImage } from "@/components/ui/FramedImage";
import { PlaceholderArt } from "@/components/ui/PlaceholderArt";
import { CATEGORIES } from "@/lib/data/categories";
import type { Dictionary } from "@/lib/i18n/types";

export function CollectionPreview({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-ivory px-6 py-28 sm:py-36 lg:px-20">
      <div className="max-w-content mx-auto">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal>
            <SectionHeading
              eyebrow={dict.home.collectionEyebrow}
              title={dict.home.collectionTitle}
              tone="chocolate"
            />
          </Reveal>
          <Reveal delay={0.15}>
            <CTALink href="/coleccion" tone="chocolate">
              {dict.home.collectionCta}
            </CTALink>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((category, i) => {
            const t = dict.categories[category.slug];
            return (
              <Reveal key={category.slug} delay={i * 0.08}>
                <Link
                  href={`/coleccion/${category.slug}`}
                  className="group border-gold-rose/10 bg-chocolate-medium/40 hover:border-gold-rose/30 ease-elegant block border transition-colors duration-500"
                  aria-label={`${dict.coleccion.enterSala}: ${t.label}`}
                >
                  <div className="relative aspect-[3/4] w-full">
                    {category.image ? (
                      <FramedImage
                        src={category.image.url}
                        alt={category.image.alt}
                        priority={i === 0}
                        objectPosition={category.objectPosition}
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      />
                    ) : (
                      <PlaceholderArt
                        variant={category.placeholderVariant}
                        label={dict.coleccion.salaLabel}
                      />
                    )}
                  </div>
                  <div className="p-7">
                    <p className="font-ui text-overline text-gold-rose mb-4 tracking-[0.35em] uppercase">
                      {t.label}
                    </p>
                    <h3 className="font-editorial text-heading-sm text-ivory leading-snug italic">
                      {t.poeticTitle}
                    </h3>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
