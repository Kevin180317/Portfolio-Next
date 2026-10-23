"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import { CONTACT_EMAIL, GITHUB_URL, localePath } from "@/lib/i18n";
import Container from "@/components/ui/Container";
import { ArrowUpRight } from "@/components/ui/Icons";
import RevealText from "@/components/ui/RevealText";
import Reveal from "@/components/ui/Reveal";

const copy = {
  es: {
    eyebrow: "¿Tienes un proyecto en mente?",
    title: "Construyamos algo que haga crecer tu negocio.",
    cta: "Iniciar proyecto",
    nav: "Navegación",
    contact: "Contacto",
    links: [
      { label: "Inicio", path: "/" },
      { label: "Trabajo", path: "/projects" },
      { label: "Servicios", path: "/#services" },
      { label: "Experiencia", path: "/experience" },
      { label: "Testimonios", path: "/testimonials" },
      { label: "Contacto", path: "/contact" },
    ],
    location: "Tijuana, Baja California, México",
    rights: "Todos los derechos reservados.",
    cv: "Descargar CV",
  },
  en: {
    eyebrow: "Have a project in mind?",
    title: "Let's build something that grows your business.",
    cta: "Start a project",
    nav: "Navigation",
    contact: "Contact",
    links: [
      { label: "Home", path: "/" },
      { label: "Work", path: "/projects" },
      { label: "Services", path: "/#services" },
      { label: "Experience", path: "/experience" },
      { label: "Testimonials", path: "/testimonials" },
      { label: "Contact", path: "/contact" },
    ],
    location: "Tijuana, Baja California, Mexico",
    rights: "All rights reserved.",
    cv: "Download CV",
  },
};

function Footer() {
  const { lang } = useLanguage();
  const pathname = usePathname();
  const c = copy[lang];
  const year = new Date().getFullYear();
  const isContact = pathname.replace(/^\/en/, "") === "/contact";

  return (
    <footer className="mt-24 border-t border-line md:mt-32">
      <Container>
        {!isContact && (
          <div className="border-b border-line py-20 md:py-28">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">
              {c.eyebrow}
            </p>
            <Link
              href={localePath(lang, "/contact")}
              className="group mt-6 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
            >
              <span className="max-w-4xl text-4xl font-medium leading-[1.02] tracking-tight text-balance transition-colors duration-500 group-hover:text-accent md:text-7xl">
                <RevealText text={c.title} />
              </span>
              <span className="relative inline-flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full bg-accent text-white transition-transform duration-700 ease-out-expo group-hover:scale-110 md:h-32 md:w-32">
                <span className="absolute inset-0 rounded-full bg-fg transition-transform duration-700 ease-out-expo [transform:scale(0)] group-hover:[transform:scale(1)]" />
                <ArrowUpRight className="relative h-8 w-8 transition-[transform,color] duration-700 ease-out-expo group-hover:rotate-45 group-hover:text-bg md:h-11 md:w-11" />
                <span className="sr-only">{c.cta}</span>
              </span>
            </Link>
          </div>
        )}

        <Reveal>
          <div className="grid gap-10 py-14 sm:grid-cols-2 md:grid-cols-4">
            <div className="md:col-span-2">
              <p className="text-lg font-medium tracking-tight">Kevin Okhuysen</p>
              <p className="mt-2 max-w-xs text-sm text-muted">{c.location}</p>
            </div>

            <nav aria-label={c.nav}>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">{c.nav}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={localePath(lang, link.path)}
                      className="text-sm text-muted transition-colors hover:text-fg"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">{c.contact}</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-muted transition-colors hover:text-fg">
                    {CONTACT_EMAIL}
                  </a>
                </li>
                <li>
                  <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted transition-colors hover:text-fg">
                    GitHub <ArrowUpRight className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted transition-colors hover:text-fg">
                    {c.cv} <ArrowUpRight className="h-3 w-3" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </Reveal>

        <div className="flex flex-col gap-2 border-t border-line py-6 text-xs text-subtle sm:flex-row sm:justify-between">
          <p>
            © {year} Kevin Okhuysen. {c.rights}
          </p>
          <p className="font-mono">okhuysen.dev</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
