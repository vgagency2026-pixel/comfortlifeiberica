import { FramedImage } from "@/components/ui/FramedImage";
import { RevealText } from "@/components/ui/RevealText";
import { Reveal } from "@/components/ui/Reveal";
import { Divider } from "@/components/ui/Divider";
import { ParallaxLayer } from "@/components/ui/ParallaxLayer";
import { MEDIA } from "@/lib/data/media";
import type { Dictionary } from "@/lib/i18n/types";

export function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden">
      <ParallaxLayer>
        <FramedImage
          src={MEDIA.retratoClaroscuro.url}
          alt={MEDIA.retratoClaroscuro.alt}
          priority
          sizes="100vw"
          cursorExplore={false}
          frameless
          objectPosition="50% 38%"
          className="h-full"
        />
      </ParallaxLayer>
      {/* Overlay cinematográfico en dos capas: degradado vertical para anclar
          el titular, y un velo lateral suave que da profundidad sin oscurecer
          la fotografía por completo. */}
      <div className="from-chocolate via-chocolate/35 to-chocolate/5 pointer-events-none absolute inset-0 bg-gradient-to-t" />
      <div className="from-chocolate/45 pointer-events-none absolute inset-0 bg-gradient-to-r via-transparent to-transparent" />

      <div className="max-w-content relative mx-auto w-full px-6 pb-20 lg:px-20 lg:pb-28">
        <div className="max-w-lg">
          <Reveal>
            <p className="font-ui text-overline text-gold-rose tracking-[0.4em] uppercase">
              {dict.home.heroEyebrow}
            </p>
          </Reveal>

          <h1 className="font-editorial text-display-sm sm:text-display-lg text-ivory mt-6 leading-[1.05]">
            <RevealText text={dict.home.heroTitleLine1} delay={0.15} />
            <br />
            <RevealText text={dict.home.heroTitleLine2} delay={0.5} />
          </h1>

          <Reveal delay={0.9}>
            <Divider className="my-8" />
            <p className="font-editorial text-heading-sm text-ivory/70 italic">
              {dict.home.heroManifesto}
            </p>
          </Reveal>
        </div>
      </div>

      <Reveal
        delay={1.3}
        className="absolute right-6 bottom-10 hidden flex-col items-center gap-3 lg:right-20 lg:flex"
      >
        <span className="font-ui text-caption text-ivory/40 tracking-[0.3em] uppercase">
          {dict.nav.discover}
        </span>
        <span className="bg-gold-rose/60 h-10 w-px animate-pulse" />
      </Reveal>
    </section>
  );
}
