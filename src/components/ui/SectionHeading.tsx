import { cn } from "@/lib/utils/cn";
import { Eyebrow } from "./Eyebrow";
import { Divider } from "./Divider";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
  tone?: "ivory" | "chocolate";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
  tone = "ivory",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl space-y-5",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2
        className={cn(
          "font-editorial text-heading-xl sm:text-display-sm",
          tone === "ivory" ? "text-ivory" : "text-chocolate",
        )}
      >
        {title}
      </h2>
      <Divider align={align === "center" ? "center" : "left"} />
    </div>
  );
}
