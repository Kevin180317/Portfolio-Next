"use client";

import React from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import { experienceES, experienceEN, type ExperienceItem, type EducationItem } from "@/app/data/experience";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function ExperienceTimelineItem({ item, index }: { item: ExperienceItem; index: number }) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="relative pl-6 md:pl-20"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease ${index * 150}ms, transform 0.6s ease ${index * 150}ms`,
      }}
    >
      <div className="absolute left-[-1px] md:left-[27px] top-1 w-3 h-3 rounded-full bg-orange-500 border-2 border-gray-900" />

      <div className="p-6 border border-gray-700 rounded-xl bg-gray-900/30 hover:border-orange-500/50 transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-3">
          <h3 className="text-lg font-semibold text-white">{item.title}</h3>
          {item.period && (
            <span className="text-sm text-gray-500">{item.period}</span>
          )}
        </div>
        <p className="text-orange-400/80 text-sm font-medium mb-3">{item.company}</p>
        <ul className="space-y-2">
          {item.responsibilities.map((resp, i) => (
            <li key={i} className="text-gray-400 text-sm leading-relaxed flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0 mt-1.5" />
              {resp}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function EducationTimelineItem({ item, index }: { item: EducationItem; index: number }) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="relative pl-6 md:pl-20"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease ${index * 150}ms, transform 0.6s ease ${index * 150}ms`,
      }}
    >
      <div className="absolute left-[-1px] md:left-[27px] top-1 w-3 h-3 rounded-full bg-orange-500 border-2 border-gray-900" />

      <div className="p-6 border border-gray-700 rounded-xl bg-gray-900/30 hover:border-orange-500/50 transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-3">
          <h3 className="text-lg font-semibold text-white">{item.degree}</h3>
          {item.period && (
            <span className="text-sm text-gray-500">{item.period}</span>
          )}
        </div>
        <p className="text-orange-400/80 text-sm font-medium mb-3">{item.institution}</p>
        <ul className="space-y-2">
          {item.details.map((detail, i) => (
            <li key={i} className="text-gray-400 text-sm leading-relaxed flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0 mt-1.5" />
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ExperiencePage() {
  const { Lang } = useLanguage();
  const data = Lang ? experienceEN : experienceES;

  return (
    <main className="relative z-10 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-12">
          {Lang ? "Experience" : "Experiencia"}
        </h1>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-orange-400 mb-8">
            {Lang ? "Professional Experience" : "Experiencia Profesional"}
            <span className="text-gray-500 text-lg ml-2 font-normal">
              (5+ {Lang ? "years" : "años"})
            </span>
          </h2>

          <div className="relative">
            <div className="absolute left-[5px] md:left-[35px] top-0 bottom-0 w-px bg-gray-700" />
            <div className="space-y-12">
              {data.professionalExperience.map((item, index) => (
                <ExperienceTimelineItem key={index} item={item} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-orange-400 mb-8">
            {Lang ? "Education" : "Educación"}
          </h2>

          <div className="relative">
            <div className="absolute left-[5px] md:left-[35px] top-0 bottom-0 w-px bg-gray-700" />
            <div className="space-y-12">
              {data.education.map((item, index) => (
                <EducationTimelineItem key={index} item={item} index={index} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default ExperiencePage;
