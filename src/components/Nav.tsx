"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import Logo from "@/assets/Logo";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

function Nav() {
  const { Lang } = useLanguage();
  const pathname = usePathname();

  // Quitar /en del path para comparar
  const cleanPath = pathname.replace(/^\/en/, "") || "/";

  // Toggle entre / y /en
  const toggleLangPath = Lang ? cleanPath : `/en${pathname}`;

  // Definición de rutas
  const routes = [
    { label: Lang ? "Home" : "Inicio", path: "/" },
    { label: Lang ? "Projects" : "Proyectos", path: "/projects" },
    { label: Lang ? "Contact" : "Contacto", path: "/contact" },
  ];

  const linkClasses = (href: string) => {
    const isActive = cleanPath === href;
    return `hover:text-orange-500 hover:underline transition-transform duration-300 ${
      isActive ? "text-orange-500" : "text-white"
    }`;
  };

  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex items-center space-x-4">
        <Link href={Lang ? "/en" : "/"}>
          <Logo className="w-16 h-16 text-black bg-white rounded-xl" />
        </Link>
        {/* <h1 className="uppercase text-white">Okhuysen Dev</h1> */}
      </div>
      <div>
        <ul className="flex space-x-4">
          {routes.map((route) => (
            <li key={route.path}>
              <Link
                href={Lang ? `/en${route.path}` : route.path}
                className={linkClasses(route.path)}
              >
                {route.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href={toggleLangPath} className="hover:text-orange-500">
              {Lang ? "Change Language" : "Cambiar Idioma"}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
