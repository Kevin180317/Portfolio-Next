"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Stat {
  value: number;
  suffix: string;
  labelES: string;
  labelEN: string;
}

const stats: Stat[] = [
  { value: 31, suffix: "+", labelES: "Proyectos", labelEN: "Projects" },
  { value: 5, suffix: "+", labelES: "Años de exp.", labelEN: "Years exp." },
  { value: 20, suffix: "+", labelES: "Tecnologías", labelEN: "Technologies" },
  { value: 5, suffix: "", labelES: "Reseñas ⭐", labelEN: "Reviews ⭐" },
];

function Counter({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 1200;
    const step = Math.ceil(duration / target);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [active, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

function Stats() {
  const { Lang } = useLanguage();
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section
      ref={ref}
      className={`px-6 py-10 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center p-5 border border-gray-700 rounded-xl hover:border-orange-500/50 transition-all duration-300 bg-gray-900/30"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <span className="text-3xl font-bold text-orange-500">
              <Counter target={stat.value} suffix={stat.suffix} active={visible} />
            </span>
            <span className="text-gray-400 text-sm mt-1 text-center">
              {Lang ? stat.labelEN : stat.labelES}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
