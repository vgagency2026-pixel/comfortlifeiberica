import Link from "next/link";
import type { Experience } from "@/types/experience";
import { FramedImage } from "@/components/ui/FramedImage";

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <Link
      href={`/experiencias/${experience.slug}`}
      className="group border-gold-rose/10 bg-chocolate-medium/40 hover:border-gold-rose/30 ease-elegant block border transition-colors duration-500"
      aria-label={experience.title}
    >
      <div className="relative aspect-[4/5] w-full">
        <FramedImage
          src={experience.image.url}
          alt={experience.image.alt}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-8">
        <p className="font-ui text-overline text-gold-rose mb-4 tracking-[0.35em] uppercase">
          {experience.tag} · {experience.readingTime}
        </p>
        <h3 className="font-editorial text-heading-md text-ivory leading-snug">
          {experience.title}
        </h3>
        <p className="font-body text-body-sm text-ivory/70 mt-4 line-clamp-2 leading-relaxed">
          {experience.excerpt}
        </p>
      </div>
    </Link>
  );
}
