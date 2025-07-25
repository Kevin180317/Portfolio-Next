"use client";

import React, { createContext, useContext } from "react";
import { usePathname } from "next/navigation";

interface LanguageContextType {
  Lang: boolean; // true = inglés, false = español
}

const LanguageContext = createContext<LanguageContextType>({
  Lang: false, // Valor por defecto
});

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const Lang = pathname.startsWith("/en");

  return (
    <LanguageContext.Provider value={{ Lang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
