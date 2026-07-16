import { cn } from "@/lib/utils/cn";

export type PlaceholderVariant =
  "vino" | "aceite" | "productor" | "territorio" | "general";

interface PlaceholderArtProps {
  variant: PlaceholderVariant;
  label: string;
  note?: string;
  className?: string;
  frameless?: boolean;
}

/**
 * Placeholder editorial para fotografía aún no producida.
 * Ver EXPERIENCE.md §14 para el listado priorizado de recursos pendientes.
 */
export function PlaceholderArt({
  variant,
  label,
  note,
  className,
  frameless = false,
}: PlaceholderArtProps) {
  return (
    <div
      className={cn(
        "from-chocolate-medium to-chocolate relative flex h-full w-full flex-col items-center justify-center gap-5 overflow-hidden bg-gradient-to-br p-8 text-center",
        className,
      )}
    >
      {!frameless ? (
        <>
          <div className="border-gold-rose/20 pointer-events-none absolute inset-0 border" />
          <div className="border-gold-rose/10 pointer-events-none absolute inset-[6px] border" />
        </>
      ) : null}
      <PlaceholderIcon variant={variant} />
      <div>
        <p className="font-ui text-overline text-gold-rose tracking-[0.3em] uppercase">
          {label}
        </p>
        {note ? (
          <p className="font-ui text-caption text-ivory/40 mx-auto mt-2 max-w-[220px]">
            {note}
          </p>
        ) : null}
      </div>
    </div>
  );
}

function PlaceholderIcon({ variant }: { variant: PlaceholderVariant }) {
  const common = "h-10 w-10 text-gold-rose/50";

  switch (variant) {
    case "vino":
      return (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          className={common}
          aria-hidden
        >
          <path d="M24 5 L24 15" strokeLinecap="round" />
          <path d="M24 5 C 27 3, 30 4, 30 7" strokeLinecap="round" />
          <circle cx="19.5" cy="19.5" r="5.5" />
          <circle cx="28.5" cy="19.5" r="5.5" />
          <circle cx="24" cy="27" r="5.5" />
          <circle cx="17" cy="29.5" r="5.5" />
          <circle cx="31" cy="29.5" r="5.5" />
          <circle cx="24" cy="36.5" r="5.5" />
        </svg>
      );
    case "aceite":
      return (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          className={common}
          aria-hidden
        >
          <path d="M9 32 C 16 12, 29 10, 39 19" strokeLinecap="round" />
          <ellipse
            cx="16.5"
            cy="23.5"
            rx="5"
            ry="2.4"
            transform="rotate(-40 16.5 23.5)"
          />
          <ellipse
            cx="27"
            cy="15.5"
            rx="5"
            ry="2.4"
            transform="rotate(-18 27 15.5)"
          />
          <ellipse
            cx="36.5"
            cy="21"
            rx="5"
            ry="2.4"
            transform="rotate(12 36.5 21)"
          />
        </svg>
      );
    case "productor":
      return (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          className={common}
          aria-hidden
        >
          <circle cx="24" cy="17" r="8" />
          <path d="M8 40 C 8 27, 40 27, 40 40" strokeLinecap="round" />
        </svg>
      );
    case "territorio":
      return (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          className={common}
          aria-hidden
        >
          <path
            d="M5 32 C 13 20, 19 20, 23 26 C 27 32, 33 32, 41 22"
            strokeLinecap="round"
          />
          <path
            d="M5 24 C 13 14, 21 14, 25 20 C 29 26, 35 24, 41 16"
            strokeLinecap="round"
            opacity="0.55"
          />
          <circle cx="34" cy="14" r="1.6" fill="currentColor" stroke="none" />
        </svg>
      );
    default:
      return (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          className={common}
          aria-hidden
        >
          <rect x="10" y="8" width="28" height="32" rx="1" />
          <rect
            x="14.5"
            y="12.5"
            width="19"
            height="23"
            rx="0.5"
            opacity="0.5"
          />
        </svg>
      );
  }
}
