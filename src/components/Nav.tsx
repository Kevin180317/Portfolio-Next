"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { m, useScroll, useSpring } from "framer-motion";
import Logo from "@/assets/Logo";
import { useLanguage } from "@/app/context/LanguageContext";
import { localePath } from "@/lib/i18n";
import { ArrowUpRight } from "@/components/ui/Icons";
import { EASE_OUT_EXPO } from "@/components/ui/motion";
import MobileMenu, { type MenuOrigin } from "@/components/MobileMenu";

const copy = {
  es: {
    routes: [
      { label: "Trabajo", path: "/projects" },
      { label: "Servicios", path: "/#services" },
      { label: "Experiencia", path: "/experience" },
      { label: "Testimonios", path: "/testimonials" },
    ],
    cta: "Hablemos",
    menu: "Menú",
    menuLabel: "Abrir menú",
    switchLabel: "Read in English",
  },
  en: {
    routes: [
      { label: "Work", path: "/projects" },
      { label: "Services", path: "/#services" },
      { label: "Experience", path: "/experience" },
      { label: "Testimonials", path: "/testimonials" },
    ],
    cta: "Let's talk",
    menu: "Menu",
    menuLabel: "Open menu",
    switchLabel: "Leer en español",
  },
};

function Nav() {
  const { lang } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [origin, setOrigin] = useState<MenuOrigin>({ x: 0, y: 0 });
  const triggerRef = useRef<HTMLButtonElement>(null);
  const c = copy[lang];
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 40, restDelta: 0.001 });

  const cleanPath = pathname.replace(/^\/en/, "") || "/";
  const switchHref = lang === "en" ? cleanPath : localePath("en", cleanPath);

  // Cierra el menú al navegar
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = useCallback(() => setOpen(false), []);

  const openMenu = () => {
    const rect = triggerRef.current?.getBoundingClientRect();
    if (rect) setOrigin({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
    setOpen(true);
  };

  const isActive = (path: string) =>
    !path.includes("#") && (cleanPath === path || cleanPath.startsWith(`${path}/`));

  return (
    <m.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-bg/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <m.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="absolute inset-x-0 bottom-[-1px] h-px origin-left bg-accent"
      />
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 md:h-20 md:px-12">
        <Link
          href={localePath(lang, "/")}
          className="flex items-center gap-3"
          aria-label={lang === "en" ? "Okhuysen Dev — Home" : "Okhuysen Dev — Inicio"}
        >
          <Logo className="h-9 w-9 text-fg" />
          <span className="text-sm font-medium tracking-tight">Okhuysen</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {c.routes.map((route) => (
            <li key={route.path}>
              <Link
                href={localePath(lang, route.path)}
                aria-current={isActive(route.path) ? "page" : undefined}
                className={`group relative py-2 text-sm transition-colors duration-200 hover:text-fg ${
                  isActive(route.path) ? "text-fg" : "text-muted"
                }`}
              >
                {route.label}
                <span
                  className={`absolute inset-x-0 bottom-0.5 h-px origin-left bg-accent transition-transform duration-500 ease-out-expo ${
                    isActive(route.path) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-5 md:flex">
          <Link
            href={switchHref}
            hrefLang={lang === "en" ? "es" : "en"}
            className="font-mono text-xs uppercase text-muted transition-colors hover:text-fg"
            aria-label={c.switchLabel}
          >
            <span className={lang === "es" ? "text-fg" : ""}>ES</span>
            <span className="mx-1 text-subtle">/</span>
            <span className={lang === "en" ? "text-fg" : ""}>EN</span>
          </Link>
          <Link
            href={localePath(lang, "/contact")}
            className="group inline-flex items-center gap-1.5 rounded-full bg-fg px-4 py-2 text-sm font-medium text-bg transition-colors hover:bg-accent-fill hover:text-white"
          >
            {c.cta}
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <button
          ref={triggerRef}
          type="button"
          onClick={openMenu}
          className="-mr-2 inline-flex h-11 items-center gap-3 rounded-full border border-line-strong bg-surface/60 pl-4 pr-3.5 text-sm backdrop-blur transition-colors active:bg-surface-2 md:hidden"
          aria-label={c.menuLabel}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-haspopup="dialog"
        >
          {c.menu}
          <span aria-hidden="true" className="flex w-4 flex-col gap-[5px]">
            <span className="h-px w-4 bg-fg" />
            <span className="h-px w-2.5 self-end bg-fg" />
          </span>
        </button>
      </nav>

      <MobileMenu
        open={open}
        onClose={closeMenu}
        lang={lang}
        cleanPath={cleanPath}
        origin={origin}
      />
    </m.header>
  );
}

export default Nav;
