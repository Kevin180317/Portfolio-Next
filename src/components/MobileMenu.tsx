"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import Logo from "@/assets/Logo";
import { CONTACT_EMAIL, GITHUB_URL, localePath, type Lang } from "@/lib/i18n";
import { ArrowRight, ArrowUpRight, FileText, GitHub, Mail } from "@/components/ui/Icons";
import { EASE_OUT_EXPO } from "@/components/ui/motion";

const copy = {
  es: {
    dialog: "Menú de navegación",
    close: "Cerrar",
    routes: [
      { label: "Inicio", path: "/" },
      { label: "Trabajo", path: "/projects" },
      { label: "Servicios", path: "/#services" },
      { label: "Experiencia", path: "/experience" },
      { label: "Testimonios", path: "/testimonials" },
    ],
    ctaEyebrow: "¿Tienes un proyecto?",
    ctaText: "Cuéntame qué necesitas y te respondo personalmente.",
    cta: "Hablemos",
    language: "Idioma",
  },
  en: {
    dialog: "Navigation menu",
    close: "Close",
    routes: [
      { label: "Home", path: "/" },
      { label: "Work", path: "/projects" },
      { label: "Services", path: "/#services" },
      { label: "Experience", path: "/experience" },
      { label: "Testimonials", path: "/testimonials" },
    ],
    ctaEyebrow: "Have a project?",
    ctaText: "Tell me what you need and I'll reply personally.",
    cta: "Let's talk",
    language: "Language",
  },
};

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export interface MenuOrigin {
  x: number;
  y: number;
}

export default function MobileMenu({
  open,
  onClose,
  lang,
  cleanPath,
  origin,
}: {
  open: boolean;
  onClose: () => void;
  lang: Lang;
  /** Ruta actual sin el prefijo /en */
  cleanPath: string;
  /** Centro del botón que abrió el menú (para la apertura circular) */
  origin: MenuOrigin;
}) {
  const c = copy[lang];
  const [mounted, setMounted] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => setMounted(true), []);

  // Bloquea el scroll, cierra con Escape y mantiene el foco dentro del menú
  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const items = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previous?.focus();
    };
  }, [open, onClose]);

  if (!mounted) return null;

  const isActive = (path: string) =>
    path === "/"
      ? cleanPath === "/"
      : !path.includes("#") && (cleanPath === path || cleanPath.startsWith(`${path}/`));

  const esHref = cleanPath;
  const enHref = localePath("en", cleanPath);
  const at = `${origin.x}px ${origin.y}px`;

  return createPortal(
    <AnimatePresence>
      {open && (
        <m.div
          ref={dialogRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label={c.dialog}
          className="fixed inset-0 z-[70] flex flex-col overflow-y-auto bg-bg md:hidden"
          initial={reduce ? { opacity: 0 } : { clipPath: `circle(0px at ${at})` }}
          animate={reduce ? { opacity: 1 } : { clipPath: `circle(150% at ${at})` }}
          exit={
            reduce
              ? { opacity: 0 }
              : { clipPath: `circle(0px at ${at})`, transition: { duration: 0.5, ease: EASE_OUT_EXPO } }
          }
          transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
        >
          {/* Fondo consistente con el hero */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="hero-grid absolute inset-0" />
            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/20 blur-[100px]" />
          </div>

          <div className="relative flex h-16 shrink-0 items-center justify-between border-b border-line px-6">
            <Link href={localePath(lang, "/")} onClick={onClose} className="flex items-center gap-3">
              <Logo className="h-9 w-9 text-fg" />
              <span className="text-sm font-medium tracking-tight">Okhuysen</span>
            </Link>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="-mr-2 inline-flex h-11 items-center gap-2.5 rounded-full border border-line-strong bg-surface/60 pl-4 pr-3 text-sm backdrop-blur transition-colors active:bg-surface-2"
            >
              {c.close}
              <span aria-hidden="true" className="relative h-4 w-4">
                <span className="absolute left-0 top-1/2 h-px w-4 rotate-45 bg-fg" />
                <span className="absolute left-0 top-1/2 h-px w-4 -rotate-45 bg-fg" />
              </span>
            </button>
          </div>

          <nav className="relative flex flex-1 flex-col px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-4">
            <m.ul
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } } }}
            >
              {c.routes.map((route, i) => {
                const active = isActive(route.path);
                return (
                  <li key={route.path} className="overflow-hidden border-b border-line">
                    <m.div
                      variants={{
                        hidden: { y: "100%", opacity: 0 },
                        visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: EASE_OUT_EXPO } },
                      }}
                    >
                      <Link
                        href={localePath(lang, route.path)}
                        onClick={onClose}
                        aria-current={active ? "page" : undefined}
                        className="group flex min-h-[4.25rem] items-center gap-4 py-3"
                      >
                        <span className="w-6 font-mono text-xs text-subtle">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={`flex-1 text-[clamp(2rem,10vw,3rem)] font-medium leading-none tracking-tight transition-colors ${
                            active ? "text-accent" : "text-fg group-active:text-accent"
                          }`}
                        >
                          {route.label}
                        </span>
                        {active ? (
                          <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                        ) : (
                          <ArrowRight className="h-5 w-5 text-subtle transition-transform duration-300 group-active:translate-x-1" />
                        )}
                      </Link>
                    </m.div>
                  </li>
                );
              })}
            </m.ul>

            <m.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE_OUT_EXPO, delay: 0.5 }}
              className="mt-8 rounded-2xl border border-line bg-surface/70 p-5 backdrop-blur"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-subtle">
                {c.ctaEyebrow}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{c.ctaText}</p>
              <Link
                href={localePath(lang, "/contact")}
                onClick={onClose}
                className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-accent-fill px-6 text-sm font-medium text-white transition-[background-color,transform] active:scale-[0.98] active:bg-accent-fill-hover"
              >
                {c.cta}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </m.div>

            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-8"
            >
              <ul className="flex items-center gap-1">
                <li>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    aria-label={CONTACT_EMAIL}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted transition-colors active:text-fg"
                  >
                    <Mail />
                  </a>
                </li>
                <li>
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted transition-colors active:text-fg"
                  >
                    <GitHub />
                  </a>
                </li>
                <li>
                  <a
                    href="/cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="CV"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted transition-colors active:text-fg"
                  >
                    <FileText />
                  </a>
                </li>
              </ul>

              <div
                role="group"
                aria-label={c.language}
                className="flex rounded-full border border-line bg-surface/60 p-1 font-mono text-xs"
              >
                {(["es", "en"] as const).map((l) => (
                  <Link
                    key={l}
                    href={l === "es" ? esHref : enHref}
                    hrefLang={l}
                    onClick={onClose}
                    aria-current={lang === l ? "true" : undefined}
                    className={`flex h-9 min-w-12 items-center justify-center rounded-full px-3 uppercase transition-colors ${
                      lang === l ? "bg-fg text-bg" : "text-muted"
                    }`}
                  >
                    {l}
                  </Link>
                ))}
              </div>
            </m.div>
          </nav>
        </m.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
