"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";
import { testimonialsES, testimonialsEN } from "@/app/data/testimonials";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-600"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.572-.955L10 0l2.94 5.955 6.572.955-4.756 4.635 1.122 6.545z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialsPreview() {
  const { Lang } = useLanguage();
  const { ref, visible } = useScrollReveal<HTMLElement>();
  const items = (Lang ? testimonialsEN : testimonialsES).slice(0, 3);

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
            {Lang ? "What clients say" : "Lo que dicen mis clientes"}
          </h2>
          <Link
            href={Lang ? "/en/testimonials" : "/testimonials"}
            className="text-sm text-gray-400 hover:text-orange-400 transition-colors duration-200 flex items-center gap-1"
          >
            {Lang ? "view all" : "ver todos"}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid gap-4">
          {items.map((item, i) => (
            <div
              key={item.id}
              className="p-5 border border-gray-700 rounded-xl bg-gray-900/30 hover:border-orange-500/50 transition-all duration-300"
              style={{
                transitionDelay: `${i * 100}ms`,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.6s ease ${i * 100}ms, transform 0.6s ease ${i * 100}ms, border-color 0.3s`,
              }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 font-bold flex-shrink-0">
                  {item.author?.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <div>
                      <span className="text-white font-medium text-sm">{item.author}</span>
                      <span className="text-gray-500 text-xs ml-2">· {item.project}</span>
                    </div>
                    <Stars rating={item.rating} />
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                    &ldquo;{item.testimonial}&rdquo;
                  </p>
                </div>
              </div>
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

export default TestimonialsPreview;
