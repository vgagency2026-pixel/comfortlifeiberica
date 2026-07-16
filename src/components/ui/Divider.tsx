import { cn } from "@/lib/utils/cn";

interface DividerProps {
  tone?: "gold-rose" | "champagne" | "ivory";
  width?: string;
  align?: "left" | "center";
  className?: string;
}

const TONE_CLASSES: Record<NonNullable<DividerProps["tone"]>, string> = {
  "gold-rose": "bg-gold-rose",
  champagne: "bg-champagne",
  ivory: "bg-ivory/40",
};

export function Divider({
  tone = "gold-rose",
  width = "w-16",
  align = "left",
  className,
}: DividerProps) {
  return (
    <div
      className={cn(
        "h-px",
        width,
        TONE_CLASSES[tone],
        align === "center" && "mx-auto",
        className,
      )}
    />
  );
}
