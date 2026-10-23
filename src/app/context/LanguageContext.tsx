"use client";

import React, { createContext, useContext } from "react";
import { usePathname } from "next/navigation";
import { langFromPath, type Lang } from "@/lib/i18n";

const LanguageContext = createContext<{ lang: Lang }>({ lang: "es" });

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const lang = langFromPath(pathname);

  return (
    <LanguageContext.Provider value={{ lang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
