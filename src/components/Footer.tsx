"use client";
import { useLanguage } from "@/app/context/LanguageContext";
import React from "react";

function Footer() {
  const { Lang } = useLanguage();

  return (
    <div>
      <footer className="text-center py-4 text-gray-400 text-sm">
        <span>
          {Lang ? "Developed by " : "Desarrollado por "}
          <a
            href="https://github.com/kevin180317"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:underline"
          >
            Kevin Okhuysen
          </a>
        </span>
      </footer>
    </div>
  );
}

export default Footer;
