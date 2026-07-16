import { cn } from "@/lib/utils/cn";

interface CedulaProps {
  eyebrow?: string;
  title: string;
  meta?: string;
  tone?: "ivory" | "chocolate";
  className?: string;
}

/**
 * Cartela museográfica: el lenguaje de "cédula de museo" que sustituye
 * la ficha técnica de e-commerce en toda la web (Manual, Cap. 39).
 */
export function Cedula({
  eyebrow,
  title,
  meta,
  tone = "ivory",
  className,
}: CedulaProps) {
  return (
    <div className={cn("space-y-2", className)}>
      {eyebrow ? (
        <p className="font-ui text-overline text-gold-rose tracking-[0.35em] uppercase">
          {eyebrow}
        </p>
      ) : null}
      <p
        className={cn(
          "font-editorial text-heading-md",
          tone === "ivory" ? "text-ivory" : "text-chocolate",
        )}
      >
        {title}
      </p>
      {meta ? (
        <p
          className={cn(
            "font-ui text-caption tracking-[0.25em] uppercase",
            tone === "ivory" ? "text-ivory/50" : "text-chocolate/50",
          )}
        >
          {meta}
        </p>
      ) : null}
    </div>
  );
}
