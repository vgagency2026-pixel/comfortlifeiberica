"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import type { Dictionary, Locale } from "@/lib/i18n/types";

interface HeaderProps {
  locale: Locale;
  dict: Dictionary;
}

export function Header({ locale, dict }: HeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  const navItems = [
    { href: "/filosofia", label: dict.nav.filosofia },
    { href: "/coleccion", label: dict.nav.coleccion },
    { href: "/productores", label: dict.nav.productores },
    { href: "/territorios", label: dict.nav.territorios },
    { href: "/experiencias", label: dict.nav.experiencias },
    { href: "/contacto", label: dict.nav.contacto },
  ];

  // Cierra el menú móvil al navegar, ajustando el estado durante el render
  // (patrón recomendado por React para resetear estado ante un cambio de prop).
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "ease-elegant fixed inset-x-0 top-0 z-40 transition-colors duration-500",
        scrolled || open
          ? "bg-chocolate/90 backdrop-blur-md"
          : "from-chocolate/70 bg-gradient-to-b to-transparent",
      )}
    >
      <div className="max-w-content mx-auto flex items-center justify-between px-6 py-6 lg:px-20 lg:py-7">
        <Link
          href="/"
          className="font-editorial text-heading-md text-ivory shrink-0"
        >
          Comfort Life <span className="text-gold-rose italic">Ibérica</span>
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group font-ui text-caption text-ivory/80 hover:text-ivory ease-elegant flex flex-col items-center tracking-[0.15em] uppercase transition-colors duration-500"
              >
                {item.label}
                <span
                  className={cn(
                    "bg-gold-rose mt-1.5 h-1 w-1 rounded-full transition-opacity duration-500",
                    active ? "opacity-100" : "opacity-0 group-hover:opacity-50",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-8 lg:flex">
          <LanguageSwitcher locale={locale} />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="text-ivory relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={cn(
              "ease-elegant h-px w-6 bg-current transition-transform duration-500",
              open && "translate-y-[7px] rotate-45",
            )}
          />
          <span
            className={cn(
              "ease-elegant h-px w-6 bg-current transition-opacity duration-500",
              open && "opacity-0",
            )}
          />
          <span
            className={cn(
              "ease-elegant h-px w-6 bg-current transition-transform duration-500",
              open && "-translate-y-[7px] -rotate-45",
            )}
          />
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-nav"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-chocolate fixed inset-0 z-40 flex flex-col items-center justify-center gap-7 lg:hidden"
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.2 + i * 0.08,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <Link
                  href={item.href}
                  className="font-editorial text-heading-lg text-ivory hover:text-gold-rose transition-colors duration-500"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2 + navItems.length * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="mt-4"
            >
              <LanguageSwitcher locale={locale} />
            </motion.div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
