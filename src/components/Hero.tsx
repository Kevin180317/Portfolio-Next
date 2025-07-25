"use client";
import { useLanguage } from "@/app/context/LanguageContext";
import React from "react";
function Hero() {
  const year = new Date().getFullYear();
  const yearExp = year - 2021;
  const { Lang } = useLanguage();
  return (
    <div className="flex items-center justify-center px-6 mb-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Contenido Principal */}
        <div className="space-y-6">
          {/* Saludo y Nombre */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-8">
              {Lang ? "Hi, I'm" : "Hola, Soy"}{" "}
              <span className="text-orange-500">Kevin.</span>
            </h1>

            {/* Etiqueta de Estado */}
            <div className="flex flex-wrap gap-3 items-start">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-orange-500/10 text-orange-400 border border-orange-500/20">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                {Lang ? "Available for work" : "Disponible para trabajar"}
              </span>

              <a
                href="https://okhuysen.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20 transition"
              >
                <svg
                  className="w-3.5 h-3.5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.293 2.293a1 1 0 011.414 0L18 6.586a1 1 0 010 1.414l-8.25 8.25a1 1 0 01-.492.263l-4.5 1a1 1 0 01-1.212-1.212l1-4.5a1 1 0 01.263-.492l8.25-8.25zM15 7l-2-2-8.25 8.25-.5 2.25 2.25-.5L15 7z" />
                </svg>
                {Lang ? "View my CV" : "Ver mi CV"}
              </a>
            </div>
          </div>

          {/* Descripción */}
          <div className="space-y-4 text-gray-300 leading-relaxed">
            {Lang ? (
              <>
                <p>
                  +{yearExp} years of professional experience as a{" "}
                  <span className="text-orange-500 font-medium">
                    Web and Mobile App Developer
                  </span>
                  , specializing in digital solutions for the medical and dental
                  sector. Based in Tijuana, Mexico.
                </p>
                <p>
                  Skilled in frontend ecosystems with React, Astro, and Next.js,
                  as well as backend environments with Node.js and Express.
                  Experienced in databases and deployment of modern, scalable
                  solutions.
                </p>
                <p>
                  Passionate about creating fast and functional web experiences,
                  focusing on accessibility, performance, and best development
                  practices.
                </p>
              </>
            ) : (
              <>
                <p>
                  +{yearExp} años de experiencia profesional como{" "}
                  <span className="text-orange-500 font-medium">
                    Desarrollador Web y de Aplicaciones Móviles
                  </span>
                  , con un enfoque especializado en soluciones digitales para el
                  sector médico y dental. Radicado en Tijuana, México.
                </p>
                <p>
                  Manejo ecosistemas frontend con React, Astro y Next.js, así
                  como entornos backend con Node.js y Express. Experiencia en
                  bases de datos y despliegue de soluciones modernas y
                  escalables.
                </p>
                <p>
                  Apasionado por crear experiencias web rápidas y funcionales,
                  con enfoque en accesibilidad, rendimiento y buenas prácticas
                  de desarrollo.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
