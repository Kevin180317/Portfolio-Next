import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { M_PLUS_1_Code } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { LanguageProvider } from "@/app/context/LanguageContext";
import Footer from "@/components/Footer";

const mPlus1Code = M_PLUS_1_Code({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-m-plus-1-code",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kevin Okhuysen - Desarrollo Web y Apps Modernas",
  description:
    "Portafolio de Kevin Okhuysen, desarrollador especializado en crear sitios web y aplicaciones móviles de alto impacto. Descubre proyectos innovadores, experiencia profesional y soluciones tecnológicas para el sector salud y más.",
  keywords: [
    "desarrollo web",
    "aplicaciones móviles",
    "sector médico",
    "Tijuana",
    "tecnología",
  ],
  authors: [{ name: "Okhuysen Dev" }],
  publisher: "Okhuysen Dev",
  robots: "index, follow",
  metadataBase: new URL("https://okhuysen.dev/"),
  alternates: {
    canonical: "/",
  },
  verification: {
    google:
      "google-site-verification=D5QHoNAwE6P7AHgT5baqDZG6unYxUn8bNTq6Qwehp4I",
  },
  openGraph: {
    title: "Kevin Okhuysen - Desarrollo Web y Apps Modernas",
    description:
      "Descubre el portafolio de Kevin Okhuysen, con proyectos innovadores en desarrollo web y apps para el sector médico, startups y más.",
    url: "https://okhuysen.dev",
    siteName: "Okhuysen Dev",
    type: "website",
    images: [
      {
        url: "https://okhuysen.dev/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Vista previa del portafolio de Kevin Okhuysen",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={mPlus1Code.className}>
      <body className="max-w-3xl text-white relative h-full w-full bg-slate-950 mx-auto bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
        <LanguageProvider>
          <Nav />
          {children}
          <Analytics />
          <SpeedInsights />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
