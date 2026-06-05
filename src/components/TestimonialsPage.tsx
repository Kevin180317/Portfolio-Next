"use client";

import React from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import { testimonialsES, testimonialsEN } from "@/app/data/testimonials";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-700"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.572-.955L10 0l2.94 5.955 6.572.955-4.756 4.635 1.122 6.545z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialsPage() {
  const { Lang } = useLanguage();
  const { ref, visible } = useScrollReveal<HTMLElement>();
  const items = Lang ? testimonialsEN : testimonialsES;
  const featured = items[0];
  const rest = items.slice(1);

  return (
    <section
      ref={ref}
      className={`px-6 py-12 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-orange-500 text-sm tracking-widest uppercase mb-3">
            {Lang ? "Social proof" : "Opiniones reales"}
          </p>
          <h1 className="text-4xl font-bold text-white mb-3">
            {Lang ? "Client Testimonials" : "Testimoniales de Clientes"}
          </h1>
          <p className="text-gray-400">
            {Lang
              ? "What people who trusted my work say."
              : "Lo que dicen las personas que confiaron en mi trabajo."}
          </p>

          {/* Stats row */}
          <div className="flex gap-6 mt-6">
            <div>
              <span className="text-2xl font-bold text-orange-500">5</span>
              <span className="text-gray-500 text-sm ml-2">
                {Lang ? "reviews" : "reseñas"}
              </span>
            </div>
            <div>
              <span className="text-2xl font-bold text-yellow-400">5.0</span>
              <span className="text-gray-500 text-sm ml-2">
                {Lang ? "avg. rating" : "calificación"}
              </span>
            </div>
          </div>
        </div>

        {/* Featured testimonial */}
        <div className="mb-6 p-6 border border-orange-500/30 rounded-2xl bg-orange-500/5 relative overflow-hidden">
          <svg
            className="absolute top-4 right-5 w-20 h-20 text-orange-500/5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
              {featured.author?.charAt(0).toUpperCase()}
            </div>
            <div>
              <h3 className="text-white font-semibold">{featured.author}</h3>
              <p className="text-orange-400 text-sm">{featured.project}</p>
            </div>
            <div className="ml-auto">
              <Stars rating={featured.rating} />
            </div>
          </div>
          <p className="text-gray-200 leading-relaxed text-[15px]">
            "{featured.testimonial}"
          </p>
        </div>

        {/* Rest grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {rest.map((item, i) => (
            <div
              key={item.id}
              className="p-5 border border-gray-700 rounded-xl bg-gray-900/30 hover:border-orange-500/40 transition-all duration-300"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.6s ease ${i * 100 + 200}ms, transform 0.6s ease ${i * 100 + 200}ms, border-color 0.3s`,
              }}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-orange-400 font-bold text-sm flex-shrink-0">
                  {item.author?.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-medium text-sm">{item.author}</h3>
                    <Stars rating={item.rating} />
                  </div>
                  <p className="text-gray-500 text-xs">{item.project}</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                "{item.testimonial}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-px bg-gray-700" />
            <div className="w-2 h-2 bg-orange-500 rounded-full" />
            <div className="w-8 h-px bg-gray-700" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsPage;
