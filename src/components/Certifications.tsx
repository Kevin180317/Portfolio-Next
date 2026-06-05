"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  pdfUrl: string;
}

const certifications: Certification[] = [
  {
    title: "Claude AI Developer Certification",
    issuer: "Anthropic",
    date: "2025",
    pdfUrl: "/claude-certification.pdf",
  },
];

function CertModal({
  cert,
  onClose,
  lang,
}: {
  cert: Certification;
  onClose: () => void;
  lang: boolean;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-4xl flex flex-col rounded-2xl border border-gray-700 bg-[#0f0f0f] shadow-2xl shadow-black/60 overflow-hidden max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-500/10 rounded-lg border border-orange-500/20">
              <svg
                className="w-4 h-4 text-orange-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm">{cert.title}</h3>
              <p className="text-gray-500 text-xs">
                {cert.issuer} · {cert.date}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={cert.pdfUrl}
              download
              className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg bg-orange-500/10 text-orange-400 border border-orange-500/20 hover:bg-orange-500/20 transition-all duration-200"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              {lang ? "Download" : "Descargar"}
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-200"
              aria-label="Close"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* PDF */}
        <div className="flex-1 bg-gray-950 min-h-0">
          <iframe
            src={cert.pdfUrl}
            className="w-full h-[70vh]"
            title={cert.title}
          />
        </div>
      </div>
    </div>
  );
}

function Certifications() {
  const { Lang } = useLanguage();
  const [activeCert, setActiveCert] = useState<Certification | null>(null);
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className={`py-16 px-6 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">
          {Lang ? "Certifications" : "Certificaciones"}
        </h2>
        <p className="text-gray-400 mb-10">
          {Lang
            ? "Verified credentials and professional certifications."
            : "Credenciales verificadas y certificaciones profesionales."}
        </p>

        <div className="grid gap-4">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 border border-gray-700 rounded-xl hover:border-orange-500 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-orange-500/10 rounded-lg border border-orange-500/20">
                  <svg
                    className="w-5 h-5 text-orange-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold">{cert.title}</h3>
                  <p className="text-gray-400 text-sm">
                    {cert.issuer} · {cert.date}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 flex-shrink-0">
                <button
                  onClick={() => setActiveCert(cert)}
                  className="text-sm px-4 py-2 rounded-lg border border-gray-600 text-gray-300 hover:border-orange-500 hover:text-white transition-all duration-200"
                >
                  {Lang ? "Preview" : "Vista previa"}
                </button>
                <a
                  href={cert.pdfUrl}
                  download
                  className="text-sm px-4 py-2 rounded-lg bg-orange-500/10 text-orange-400 border border-orange-500/20 hover:bg-orange-500/20 transition-all duration-200"
                >
                  {Lang ? "Download" : "Descargar"}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-px bg-gray-600"></div>
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <div className="w-8 h-px bg-gray-600"></div>
          </div>
        </div>
      </div>

      {activeCert && (
        <CertModal
          cert={activeCert}
          onClose={() => setActiveCert(null)}
          lang={Lang}
        />
      )}
    </section>
  );
}

export default Certifications;
