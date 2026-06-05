"use client";
import { useLanguage } from "@/app/context/LanguageContext";
import Link from "next/link";
import React from "react";

const navLinks = [
  { labelES: "Inicio", labelEN: "Home", path: "/" },
  { labelES: "Proyectos", labelEN: "Projects", path: "/projects" },
  { labelES: "Testimonios", labelEN: "Testimonials", path: "/testimonials" },
  { labelES: "Contacto", labelEN: "Contact", path: "/contact" },
];

function Footer() {
  const { Lang } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 mt-16 px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-2">
            <p className="text-white font-semibold tracking-wide">OKHUYSEN DEV</p>
            <p className="text-gray-500 text-sm max-w-xs">
              {Lang
                ? "Building fast, scalable digital products."
                : "Construyendo productos digitales rápidos y escalables."}
            </p>
            <a
              href="https://github.com/kevin180317"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors duration-200 text-sm mt-1"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </a>
          </div>

          {/* Nav links */}
          <nav>
            <p className="text-gray-600 text-xs uppercase tracking-widest mb-3">
              {Lang ? "Navigation" : "Navegación"}
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={Lang ? `/en${link.path}` : link.path}
                    className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-200"
                  >
                    {Lang ? link.labelEN : link.labelES}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-600 text-xs">
            © {year} Kevin Okhuysen.{" "}
            {Lang ? "All rights reserved." : "Todos los derechos reservados."}
          </p>
          <p className="text-gray-700 text-xs">
            {Lang ? "Built with" : "Hecho con"} Next.js · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
