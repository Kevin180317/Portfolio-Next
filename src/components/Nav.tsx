"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import Logo from "@/assets/Logo";
import Link from "next/link";
import React, { useState, useCallback, useMemo } from "react";
import { usePathname } from "next/navigation";

function Nav() {
  const { Lang } = useLanguage();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const year = new Date().getFullYear();

  // Memoizar el path limpio para evitar recálculos
  const cleanPath = useMemo(
    () => pathname.replace(/^\/en/, "") || "/",
    [pathname]
  );

  // Memoizar el toggle path
  const toggleLangPath = useMemo(
    () => (Lang ? cleanPath : `/en${pathname}`),
    [Lang, cleanPath, pathname]
  );

  // Memoizar las rutas
  const routes = useMemo(
    () => [
      { label: Lang ? "Home" : "Inicio", path: "/" },
      { label: Lang ? "Projects" : "Proyectos", path: "/projects" },
      { label: Lang ? "Contact" : "Contacto", path: "/contact" },
      { label: Lang ? "Testimonials" : "Testimonios", path: "/testimonials" },
    ],
    [Lang]
  );

  // Función para alternar el menú
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  // Función para cerrar el menú
  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Clases para los enlaces con memoización
  const getLinkClasses = useCallback(
    (href: string) => {
      const isActive = cleanPath === href;
      return `hover:text-orange-500 hover:underline transition-all duration-300 ${
        isActive ? "text-orange-500" : "text-white"
      }`;
    },
    [cleanPath]
  );

  return (
    <nav className="relative">
      <div className="flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link href={Lang ? "/en" : "/"} onClick={closeMenu}>
            <Logo className="w-16 h-16 text-black bg-white rounded-xl hover:scale-105 transition-transform duration-300" />
          </Link>
          <p>OKHUYSEN DEV</p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex space-x-6">
            {routes.map((route) => (
              <li key={route.path}>
                <Link
                  href={Lang ? `/en${route.path}` : route.path}
                  className={getLinkClasses(route.path)}
                >
                  {route.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={toggleLangPath}
                className="hover:text-orange-500 transition-colors duration-300"
              >
                {Lang ? "ES" : "EN"}
              </Link>
            </li>
          </ul>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      />

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-gray-900 z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <button
          onClick={closeMenu}
          className="absolute top-4 right-4 text-white hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded p-2"
          aria-label="Close menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Mobile menu items */}
        <div className="pt-16 px-6 flex flex-col h-full">
          <ul className="space-y-6 flex-1">
            {routes.map((route) => (
              <li key={route.path}>
                <Link
                  href={Lang ? `/en${route.path}` : route.path}
                  className={`block text-lg ${getLinkClasses(route.path)}`}
                  onClick={closeMenu}
                >
                  {route.label}
                </Link>
              </li>
            ))}
            <li className="pt-4 border-t border-gray-700">
              <Link
                href={toggleLangPath}
                className="block text-lg hover:text-orange-500 transition-colors duration-300 text-white"
                onClick={closeMenu}
              >
                {Lang ? "Change Language" : "Cambiar Idioma"}
              </Link>
            </li>
          </ul>

          {/* Footer con marca */}
          <div className="pb-8 mt-auto">
            <div className="border-t border-gray-700 pt-6">
              <div className="flex flex-col items-start space-y-3">
                <div className="flex items-center gap-2">
                  <p className="text-sm">{year}</p>
                  <h3 className="text-white font-light text-sm">
                    OKHUYSEN DEV
                  </h3>
                </div>

                <p className="text-gray-400 text-sm">
                  {Lang ? "Full Stack Development" : "Desarrollo Full Stack"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
