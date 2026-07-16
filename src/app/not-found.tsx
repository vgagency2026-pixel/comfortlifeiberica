import { PlaceholderArt } from "@/components/ui/PlaceholderArt";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Divider } from "@/components/ui/Divider";
import { CTALink } from "@/components/ui/CTALink";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center px-6 py-32 lg:px-20">
      <div className="max-w-content mx-auto grid w-full items-center gap-16 lg:grid-cols-2">
        <div className="relative mx-auto aspect-[3/4] w-full max-w-sm">
          <PlaceholderArt variant="general" label="Sala no encontrada" />
        </div>
        <div className="text-center lg:text-left">
          <Eyebrow className="justify-center lg:justify-start">
            Error 404
          </Eyebrow>
          <h1 className="font-editorial text-display-sm text-ivory mt-4">
            Esta sala todavía no existe.
          </h1>
          <Divider align="center" className="my-8 lg:hidden" />
          <Divider className="my-8 hidden lg:block" />
          <p className="font-body text-body text-ivory/70 mx-auto max-w-sm leading-relaxed lg:mx-0">
            Puede que el enlace esté roto o que la página se haya movido. La
            colección completa sigue exactamente donde la dejamos.
          </p>
          <div className="mt-10 flex justify-center lg:justify-start">
            <CTALink href="/">Volver a la entrada de la galería</CTALink>
          </div>
        </div>
      </div>
    </section>
  );
}
