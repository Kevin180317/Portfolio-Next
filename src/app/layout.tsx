import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import type { Viewport } from "next";
import { headers } from "next/headers";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Nav from "@/components/Nav";
import { LanguageProvider } from "@/app/context/LanguageContext";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/ui/MotionProvider";

const TECH_STACK = [
  "Astro",
  "Next.js",
  "React",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "Python",
  "Kotlin",
  "MySQL",
  "Firebase",
  "Supabase",
  "Stripe",
  "Android Studio",
];

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kevin Okhuysen",
  url: "https://okhuysen.dev",
  jobTitle: "Full Stack Developer",
  description:
    "Full Stack Developer in Tijuana building websites, web apps, and mobile apps for healthcare, dental, industrial, and service businesses.",
  email: "okhuysen.dev@gmail.com",
  sameAs: ["https://github.com/kevin180317"],
  knowsAbout: TECH_STACK,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tijuana",
    addressRegion: "Baja California",
    addressCountry: "MX",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Okhuysen Dev",
  url: "https://okhuysen.dev",
  inLanguage: ["es-MX", "en-US"],
  author: { "@type": "Person", name: "Kevin Okhuysen" },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
};

async function getIsEnglish() {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") ?? "/";
  return pathname.startsWith("/en");
}

export async function generateMetadata(): Promise<Metadata> {
  const isEnglish = await getIsEnglish();

  const title = isEnglish
    ? "Kevin Okhuysen — Websites, Web Apps & Mobile Apps"
    : "Kevin Okhuysen — Sitios Web, Web Apps y Apps Móviles";
  const description = isEnglish
    ? "Portfolio of Kevin Okhuysen, a developer specialized in building high-impact websites and mobile apps. Discover innovative projects, professional experience, and tech solutions for the healthcare sector and more."
    : "Portafolio de Kevin Okhuysen, desarrollador especializado en crear sitios web y aplicaciones móviles de alto impacto. Descubre proyectos innovadores, experiencia profesional y soluciones tecnológicas para el sector salud y más.";

  return {
    title: {
      default: title,
      template: "%s — Kevin Okhuysen",
    },
    description,
    keywords: isEnglish
      ? ["web development", "mobile apps", "healthcare sector", "Tijuana", "technology"]
      : ["desarrollo web", "aplicaciones móviles", "sector médico", "Tijuana", "tecnología"],
    authors: [{ name: "Okhuysen Dev" }],
    publisher: "Okhuysen Dev",
    robots: "index, follow",
    metadataBase: new URL("https://okhuysen.dev/"),
    alternates: {
      canonical: isEnglish ? "/en" : "/",
      languages: {
        es: "/",
        en: "/en",
      },
    },
    verification: {
      google:
        "google-site-verification=D5QHoNAwE6P7AHgT5baqDZG6unYxUn8bNTq6Qwehp4I",
    },
    openGraph: {
      title,
      description: isEnglish
        ? "Discover Kevin Okhuysen's portfolio, with innovative web and app development projects for healthcare, startups, and more."
        : "Descubre el portafolio de Kevin Okhuysen, con proyectos innovadores en desarrollo web y apps para el sector médico, startups y más.",
      url: isEnglish ? "https://okhuysen.dev/en" : "https://okhuysen.dev",
      siteName: "Okhuysen Dev",
      type: "website",
      locale: isEnglish ? "en_US" : "es_MX",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isEnglish = await getIsEnglish();

  return (
    <html
      lang={isEnglish ? "en" : "es"}
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="min-h-screen bg-bg font-sans text-fg antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent-fill focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          {isEnglish ? "Skip to content" : "Saltar al contenido"}
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <LanguageProvider>
          <MotionProvider>
            <Nav />
            {children}
            <Footer />
          </MotionProvider>
          <Analytics />
          <SpeedInsights />
        </LanguageProvider>
      </body>
    </html>
  );
}
