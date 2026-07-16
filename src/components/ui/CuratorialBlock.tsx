import { cn } from "@/lib/utils/cn";

interface CuratorialBlockProps {
  /** "CATEGORÍA · CONCEPTO" — ver CURATORIAL_GUIDE.md §14 */
  eyebrow: string;
  poeticTitle: string;
  editorial: string;
  /** Conceptos reales unidos por punto medio, nunca datos inventados */
  closingLine: string[];
  tone?: "ivory" | "chocolate";
  align?: "left" | "center";
  className?: string;
}

/**
 * El bloque curatorial de cuatro partes fijado en CURATORIAL_GUIDE.md §14:
 * categoría · concepto / título poético / texto editorial / línea de cierre.
 */
export function CuratorialBlock({
  eyebrow,
  poeticTitle,
  editorial,
  closingLine,
  tone = "ivory",
  align = "left",
  className,
}: CuratorialBlockProps) {
  return (
    <div
      className={cn(
        "max-w-xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p
        className={cn(
          "font-ui text-overline tracking-[0.35em] uppercase",
          tone === "ivory" ? "text-gold-rose" : "text-olive-light",
        )}
      >
        {eyebrow}
      </p>
      <h3
        className={cn(
          "font-editorial text-heading-lg sm:text-heading-xl mt-5",
          tone === "ivory" ? "text-ivory" : "text-chocolate",
        )}
      >
        {poeticTitle}
      </h3>
      <p
        className={cn(
          "font-body text-body mt-5 leading-relaxed",
          tone === "ivory" ? "text-ivory/70" : "text-chocolate/70",
        )}
      >
        {editorial}
      </p>
      <p
        className={cn(
          "font-ui text-caption mt-6 tracking-[0.2em] uppercase",
          tone === "ivory" ? "text-ivory/40" : "text-chocolate/40",
        )}
      >
        {closingLine.join(" · ")}
      </p>
    </div>
  );
}
