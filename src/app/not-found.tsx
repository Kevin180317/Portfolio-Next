"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  const isEN = pathname?.startsWith("/en");

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <p className="text-orange-500 text-sm tracking-widest uppercase mb-4">404</p>
      <h2 className="text-4xl font-bold text-white mb-3">
        {isEN ? "Page not found" : "Página no encontrada"}
      </h2>
      <p className="text-gray-400 mb-8 max-w-sm">
        {isEN
          ? "This page doesn't exist or has been moved."
          : "Esta página no existe o fue movida."}
      </p>
      <Link
        href={isEN ? "/en" : "/"}
        className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105"
      >
        {isEN ? "Back to home" : "Volver al inicio"}
      </Link>
    </div>
  );
}
