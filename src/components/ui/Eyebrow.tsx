import { cn } from "@/lib/utils/cn";

interface EyebrowProps {
  children: React.ReactNode;
  tone?: "champagne" | "gold-rose" | "ivory" | "olive";
  className?: string;
}

const TONE_CLASSES: Record<NonNullable<EyebrowProps["tone"]>, string> = {
  champagne: "text-champagne",
  "gold-rose": "text-gold-rose",
  ivory: "text-ivory/60",
  olive: "text-olive-light",
};

export function Eyebrow({
  children,
  tone = "gold-rose",
  className,
}: EyebrowProps) {
  return (
    <p
      className={cn(
        "font-ui text-overline tracking-[0.4em] uppercase",
        TONE_CLASSES[tone],
        className,
      )}
    >
      {children}
    </p>
  );
}
