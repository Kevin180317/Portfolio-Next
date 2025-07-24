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
      <body className="max-w-3xl text-white relative h-full w-full bg-slate-950 mx-auto bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
        {children}
        <footer className="text-center py-4 text-gray-400 text-sm">
          <span>
            Desarrollado por{" "}
            <a
              href="https://github.com/kevin180317"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:underline"
            >
              Kevin Okhuysen
            </a>
          </span>
        </footer>
      </body>
    </html>
  );
}
