"use client";

import React, { useEffect, useState } from "react";

interface StackItem {
  name: string;
  displayName: string;
  color: string;
}

function Stack() {
  const [animatedItems, setAnimatedItems] = useState<Set<number>>(new Set());

  // Todas las tecnologías organizadas como en la imagen con sus colores
  const stackItems: StackItem[] = [
    // Primera fila
    { name: "astro", displayName: "Astro", color: "FF5D01" },
    { name: "nextdotjs", displayName: "Next.js", color: "FFFFFF" },
    { name: "react", displayName: "React", color: "61DAFB" },
    { name: "tailwindcss", displayName: "Tailwind", color: "06B6D4" },
    { name: "html5", displayName: "HTML", color: "E34F26" },
    { name: "css", displayName: "CSS", color: "1572B6" },

    // Segunda fila
    { name: "nodedotjs", displayName: "Node.js", color: "339933" },
    { name: "express", displayName: "Express", color: "FFFFFF" },
    { name: "python", displayName: "Python", color: "3776AB" },
    { name: "kotlin", displayName: "Kotlin", color: "7F52FF" },

    // Tercera fila
    { name: "mysql", displayName: "MySQL", color: "4479A1" },
    { name: "firebase", displayName: "Firebase", color: "FFCA28" },
    { name: "supabase", displayName: "Supabase", color: "3ECF8E" },
    { name: "stripe", displayName: "Stripe", color: "5433FF" },
    // Cuarta fila
    { name: "github", displayName: "GitHub", color: "FFFFFF" },
    { name: "git", displayName: "Git", color: "F05032" },
    { name: "vercel", displayName: "Vercel", color: "FFFFFF" },
    { name: "netlify", displayName: "Netlify", color: "00a98f" },
    { name: "vite", displayName: "Vite", color: "646CFF" },
    { name: "androidstudio", displayName: "Android Studio", color: "3DDC84" },
  ];

  // Animación escalonada al cargar
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimatedItems((prev) => {
        if (prev.size < stackItems.length) {
          return new Set([...prev, prev.size]);
        }
        clearInterval(timer);
        return prev;
      });
    }, 80);

    return () => clearInterval(timer);
  }, [stackItems.length]);

  // Función para obtener la URL del ícono con color
  const getIconUrl = (name: string, color: string): string => {
    const iconName = name.toLowerCase();
    return `https://cdn.simpleicons.org/${iconName}/${color}?viewbox=auto`;
  };

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Grid flexible que se adapta al contenido */}
        <div className="flex flex-wrap justify-center items-center gap-4 max-w-5xl mx-auto">
          {stackItems.map((item, index) => (
            <div
              key={item.name}
              className={`group flex items-center space-x-3 px-4 py-3 border border-gray-700 rounded-xl hover:border-orange-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20 transform ${
                animatedItems.has(index)
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 80}ms`,
              }}
            >
              <img
                src={getIconUrl(item.name, item.color)}
                alt={`${item.displayName} icon`}
                className="w-6 h-6 object-contain group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  // Fallback sin color si hay error
                  target.src = `https://cdn.simpleicons.org/${item.name.toLowerCase()}?viewbox=auto`;
                }}
              />

              {/* Nombre */}
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                {item.displayName}
              </span>
            </div>
          ))}
        </div>

        {/* Línea decorativa final */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-px bg-gray-600"></div>
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <div className="w-8 h-px bg-gray-600"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stack;
