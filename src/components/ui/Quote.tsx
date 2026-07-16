interface QuoteProps {
  children: React.ReactNode;
  attribution?: string;
}

export function Quote({ children, attribution }: QuoteProps) {
  return (
    <figure className="mx-auto max-w-prose text-center">
      <span
        aria-hidden
        className="font-editorial text-gold-rose/20 block text-[96px] leading-none sm:text-[120px]"
      >
        “
      </span>
      <blockquote className="font-editorial text-heading-lg text-ivory sm:text-display-sm -mt-8 italic">
        {children}
      </blockquote>
      {attribution ? (
        <figcaption className="font-ui text-overline text-gold-rose mt-6 tracking-[0.3em] uppercase">
          {attribution}
        </figcaption>
      ) : null}
    </figure>
  );
}
