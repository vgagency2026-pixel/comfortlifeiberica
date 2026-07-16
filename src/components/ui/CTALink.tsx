import Link from "next/link";
import { cn } from "@/lib/utils/cn";

interface CTALinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  tone?: "ivory" | "chocolate";
}

export function CTALink({
  href,
  children,
  className,
  tone = "ivory",
}: CTALinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "font-ui text-overline group inline-flex items-center gap-2 tracking-[0.25em] uppercase",
        tone === "ivory" ? "text-ivory" : "text-chocolate",
        className,
      )}
    >
      <span className="relative pb-1">
        {children}
        <span
          className={cn(
            "ease-elegant absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100",
            tone === "ivory" ? "bg-gold-rose" : "bg-chocolate",
          )}
        />
      </span>
      <span
        aria-hidden
        className="ease-elegant transition-transform duration-500 group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}
