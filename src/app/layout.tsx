import type { Metadata } from "next";
import { M_PLUS_1_Code } from "next/font/google";
import "./globals.css";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={mPlus1Code.className}>
      <body className="max-w-3xl mx-auto bg-black text-white">{children}</body>
    </html>
  );
}
