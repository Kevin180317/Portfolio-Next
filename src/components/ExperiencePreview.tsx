"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";
import { experienceES, experienceEN } from "@/app/data/experience";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function ExperiencePreview() {
  const { Lang } = useLanguage();
  const { ref, visible } = useScrollReveal<HTMLElement>();
  const data = Lang ? experienceEN : experienceES;
  const items = data.professionalExperience.slice(0, 2);

  return (
    <section
      ref={ref}
      className={`py-16 px-6 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-white">
            {Lang ? "Experience" : "Experiencia"}
          </h2>
          <Link
            href={Lang ? "/en/experience" : "/experience"}
            className="text-sm text-gray-400 hover:text-orange-400 transition-colors duration-200 flex items-center gap-1"
          >
            {Lang ? "view all" : "ver todo"}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="p-5 border border-gray-700 rounded-xl bg-gray-900/30 hover:border-orange-500/50 transition-all duration-300"
              style={{
                transitionDelay: `${i * 100}ms`,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.6s ease ${i * 100}ms, transform 0.6s ease ${i * 100}ms, border-color 0.3s`,
              }}
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="text-white font-semibold">{item.title}</h3>
                {item.period && (
                  <span className="text-gray-500 text-xs whitespace-nowrap">{item.period}</span>
                )}
              </div>
              <p className="text-orange-400/80 text-sm mb-2">{item.company}</p>
              <ul className="space-y-1">
                {item.responsibilities.slice(0, 2).map((r, j) => (
                  <li key={j} className="text-gray-400 text-sm leading-relaxed flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-orange-500 flex-shrink-0 mt-1.5" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-px bg-gray-600" />
            <div className="w-2 h-2 bg-orange-500 rounded-full" />
            <div className="w-8 h-px bg-gray-600" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperiencePreview;
