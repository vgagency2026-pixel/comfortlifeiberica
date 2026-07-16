"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils/cn";

interface ParallaxLayerProps {
  children: ReactNode;
  className?: string;
}

/**
 * Parallax vertical muy suave, ligado al scroll de la sección que envuelve.
 * Pensado para heroes editoriales, nunca para contenido interactivo.
 * La capa interior va sobredimensionada para que el desplazamiento nunca
 * deje ver un hueco en los bordes.
 */
export function ParallaxLayer({ children, className }: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div
      ref={ref}
      className={cn("absolute inset-0 overflow-hidden", className)}
    >
      <motion.div
        style={{ y }}
        className="absolute inset-x-0 -top-[15%] h-[130%]"
      >
        {children}
      </motion.div>
    </div>
  );
}
