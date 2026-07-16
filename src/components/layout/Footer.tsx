import Link from "next/link";
import { SITE } from "@/lib/constants/site";
import type { Dictionary, Locale } from "@/lib/i18n/types";

interface FooterProps {
  locale: Locale;
  dict: Dictionary;
}

export function Footer({ dict }: FooterProps) {
  const sitemap = [
    { href: "/", label: "Home" },
    { href: "/filosofia", label: dict.nav.filosofia },
    { href: "/coleccion", label: dict.nav.coleccion },
    { href: "/productores", label: dict.nav.productores },
    { href: "/territorios", label: dict.nav.territorios },
    { href: "/experiencias", label: dict.nav.experiencias },
    { href: "/contacto", label: dict.nav.contacto },
  ];

  return (
    <footer className="border-gold-rose/10 bg-chocolate border-t px-6 py-20 lg:px-20 lg:py-24">
      <div className="max-w-content mx-auto grid gap-16 lg:grid-cols-3">
        <div>
          <p className="font-editorial text-heading-md text-ivory">
            Comfort Life <span className="text-gold-rose italic">Ibérica</span>
          </p>
          <p className="font-body text-body-sm text-ivory/60 mt-5 max-w-xs leading-relaxed">
            {dict.footer.description}
          </p>
        </div>

        <div>
          <p className="font-ui text-overline text-gold-rose mb-5 tracking-[0.3em] uppercase">
            {dict.footer.sitemapHeading}
          </p>
          <ul className="space-y-3">
            {sitemap.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-ui text-body-sm text-ivory/70 hover:text-ivory ease-elegant transition-colors duration-500"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-ui text-overline text-gold-rose mb-5 tracking-[0.3em] uppercase">
            {dict.footer.contactHeading}
          </p>
          <a
            href="mailto:hola@comfortlifeiberica.com"
            className="font-ui text-body-sm text-ivory/70 hover:text-ivory ease-elegant transition-colors duration-500"
          >
            hola@comfortlifeiberica.com
          </a>
          <p className="font-ui text-caption text-ivory/40 mt-10 leading-relaxed">
            © {new Date().getFullYear()} {SITE.name}.
            <br />
            {dict.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
