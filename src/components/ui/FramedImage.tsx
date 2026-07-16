import Image from "next/image";
import { cn } from "@/lib/utils/cn";

interface FramedImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  imgClassName?: string;
  frameless?: boolean;
  cursorExplore?: boolean;
  objectPosition?: string;
  /** Zoom lento y continuo (heroes editoriales). Por defecto sigue a `frameless`. */
  cinematic?: boolean;
}

export function FramedImage({
  src,
  alt,
  priority,
  sizes = "(max-width: 768px) 100vw, 50vw",
  className,
  imgClassName,
  frameless = false,
  cursorExplore = true,
  objectPosition,
  cinematic,
}: FramedImageProps) {
  const isCinematic = cinematic ?? frameless;

  const photo = (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden",
        !frameless && "frame-museum-inner",
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        style={objectPosition ? { objectPosition } : undefined}
        className={cn(
          "ease-elegant object-cover transition-transform duration-700",
          isCinematic ? "animate-slow-zoom" : "group-hover:scale-[1.03]",
          imgClassName,
        )}
      />
    </div>
  );

  if (frameless) {
    return (
      <div
        className={cn(
          "group relative h-full w-full overflow-hidden",
          className,
        )}
        data-cursor={cursorExplore ? "explore" : undefined}
      >
        {photo}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "group frame-museum relative h-full w-full p-3.5",
        className,
      )}
      data-cursor={cursorExplore ? "explore" : undefined}
    >
      {photo}
    </div>
  );
}
