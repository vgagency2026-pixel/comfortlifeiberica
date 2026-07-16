import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Divider } from "@/components/ui/Divider";
import type { Dictionary } from "@/lib/i18n/types";

export function SelectionProcess({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-chocolate px-6 py-32 sm:py-40 lg:px-20">
      <div className="max-w-content mx-auto">
        <Reveal className="max-w-xl">
          <Eyebrow>{dict.home.selectionEyebrow}</Eyebrow>
          <h2 className="font-editorial text-heading-xl sm:text-display-sm text-ivory mt-6">
            {dict.home.selectionTitle}
          </h2>
          <Divider className="mt-8" />
        </Reveal>

        <div className="mt-20 grid gap-14 sm:grid-cols-2 lg:grid-cols-4">
          {dict.home.selectionSteps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.1}>
              <p className="font-editorial text-gold-rose/40 text-display-sm">
                {step.number}
              </p>
              <h3 className="font-editorial text-heading-md text-ivory -mt-4">
                {step.title}
              </h3>
              <p className="font-body text-body-sm text-ivory/60 mt-4 leading-relaxed">
                {step.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
