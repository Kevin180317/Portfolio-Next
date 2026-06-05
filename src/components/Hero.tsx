"use client";
import { useLanguage } from "@/app/context/LanguageContext";
import React, { useEffect, useState } from "react";

const rolesES = ["Desarrollador Web", "Desarrollador Mobile", "Freelancer Full Stack"];
const rolesEN = ["Web Developer", "Mobile Developer", "Full Stack Freelancer"];

function Typewriter({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index % roles.length];
    const speed = deleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1800);
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDeleting(false);
          setIndex((i) => i + 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, index, roles]);

  return (
    <span className="text-orange-500">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}

function Hero() {
  const year = new Date().getFullYear();
  const yearExp = year - 2021;
  const { Lang } = useLanguage();

  return (
    <div className="flex items-center justify-center px-6 mb-8 pt-4">
      <div className="max-w-4xl mx-auto space-y-8 w-full">
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-gray-500 text-sm tracking-widest uppercase">
              {Lang ? "Portfolio" : "Portafolio"} — Kevin Okhuysen
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 leading-tight">
              {Lang ? "Hi, I'm" : "Hola, Soy"}{" "}
              <span className="text-white">Kevin.</span>
            </h1>

            <div className="text-xl md:text-2xl font-medium h-8">
              <Typewriter roles={Lang ? rolesEN : rolesES} />
            </div>

            <div className="flex flex-wrap gap-3 items-start pt-1">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-orange-500/10 text-orange-400 border border-orange-500/20">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse" />
                {Lang ? "Available for work" : "Disponible para trabajar"}
              </span>

              <a
                href="https://okhuysen.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20 transition"
              >
                <svg className="w-3.5 h-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M12.293 2.293a1 1 0 011.414 0L18 6.586a1 1 0 010 1.414l-8.25 8.25a1 1 0 01-.492.263l-4.5 1a1 1 0 01-1.212-1.212l1-4.5a1 1 0 01.263-.492l8.25-8.25zM15 7l-2-2-8.25 8.25-.5 2.25 2.25-.5L15 7z" />
                </svg>
                {Lang ? "View my CV" : "Ver mi CV"}
              </a>
            </div>
          </div>

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
              </>
            ) : (
              <>
                <p>
                  +{yearExp} años de experiencia profesional como{" "}
                  <span className="text-orange-500 font-medium">
                    Desarrollador Web y de Aplicaciones Móviles
                  </span>
                  , con enfoque en soluciones digitales para el sector médico y
                  dental. Radicado en Tijuana, México.
                </p>
                <p>
                  Manejo ecosistemas frontend con React, Astro y Next.js, así
                  como entornos backend con Node.js y Express. Experiencia en
                  bases de datos y despliegue de soluciones modernas y
                  escalables.
                </p>
              </>
            )}
          </div>

          <div className="flex gap-3 pt-2">
            <a
              href={Lang ? "/en/projects" : "/projects"}
              className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105"
            >
              {Lang ? "View Projects" : "Ver Proyectos"}
            </a>
            <a
              href={Lang ? "/en/contact" : "/contact"}
              className="px-5 py-2.5 border border-gray-600 hover:border-orange-500 text-gray-300 hover:text-white text-sm font-medium rounded-lg transition-all duration-200"
            >
              {Lang ? "Contact me" : "Contáctame"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
