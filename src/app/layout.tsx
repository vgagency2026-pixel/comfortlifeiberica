import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { SITE } from "@/lib/constants/site";
import { MotionProvider } from "@/components/providers/MotionProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { getLocale, getDictionary } from "@/lib/i18n";
import "./globals.css";

// Cormorant Garamond — títulos (H1/H2/H3), cuerpo editorial y descripciones.
const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-editorial",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

// Misma familia, instancia propia para el texto de cuerpo/descripción
// (--font-body), de modo que ambas variables carguen la tipografía real.
const cormorantGaramondBody = Cormorant_Garamond({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

// Jost, pesos 100/200 — navegación, labels, captions y textos en mayúsculas.
const jost = Jost({
  variable: "--font-ui",
  subsets: ["latin"],
  weight: ["100", "200"],
});

export const metadata: Metadata = {
  title: {
    default: SITE.name,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  metadataBase: new URL(SITE.url),
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const dict = getDictionary(locale);

  return (
    <html
      lang={locale}
      className={`${cormorantGaramond.variable} ${cormorantGaramondBody.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="bg-chocolate text-ivory flex min-h-full flex-col">
        <MotionProvider>
          <ScrollProgress />
          <CustomCursor />
          <Header locale={locale} dict={dict} />
          <main className="flex-1">{children}</main>
          <Footer locale={locale} dict={dict} />
        </MotionProvider>
      </body>
    </html>
  );
}
