"use client";

import React, { useEffect, useState } from "react";
import type { Lang } from "@/lib/i18n";
import { Eyebrow } from "@/components/ui/SectionHeader";
import { ArrowUpRight } from "@/components/ui/Icons";

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

const copy = {
  es: { label: "Certificaciones", preview: "Vista previa", download: "Descargar", close: "Cerrar" },
  en: { label: "Certifications", preview: "Preview", download: "Download", close: "Close" },
};

function CertModal({
  cert,
  onClose,
  lang,
}: {
  cert: Certification;
  onClose: () => void;
  lang: Lang;
}) {
  const c = copy[lang];

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
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={cert.title}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="pointer-events-none absolute inset-0 bg-black/80 backdrop-blur-sm" />

      <div className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-xl border border-line bg-surface">
        <div className="flex items-center justify-between gap-4 border-b border-line px-6 py-4">
          <div>
            <h3 className="text-sm font-medium">{cert.title}</h3>
            <p className="text-xs text-muted">
              {cert.issuer} · {cert.date}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={cert.pdfUrl}
              download
              className="rounded-full border border-line-strong px-4 py-1.5 text-sm transition-colors hover:border-fg"
            >
              {c.download}
            </a>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full px-3 py-1.5 text-sm text-muted transition-colors hover:text-fg"
            >
              {c.close}
            </button>
          </div>
        </div>
        <iframe src={cert.pdfUrl} className="h-[70vh] w-full bg-bg" title={cert.title} />
      </div>
    </div>
  );
}

function Certifications({ lang }: { lang: Lang }) {
  const c = copy[lang];
  const [activeCert, setActiveCert] = useState<Certification | null>(null);

  return (
    <section className="mt-20">
      <Eyebrow>{c.label}</Eyebrow>
      <ul className="mt-6 border-b border-line">
        {certifications.map((cert) => (
          <li
            key={cert.title}
            className="grid gap-4 border-t border-line py-10 md:grid-cols-12 md:items-center md:gap-8"
          >
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-subtle md:col-span-3">
              {cert.date}
            </p>
            <div className="md:col-span-5">
              <h3 className="text-xl font-medium tracking-tight md:text-2xl">{cert.title}</h3>
              <p className="mt-1 text-accent">{cert.issuer}</p>
            </div>
            <div className="flex gap-3 md:col-span-4 md:justify-end">
              <button
                type="button"
                onClick={() => setActiveCert(cert)}
                className="rounded-full border border-line-strong px-4 py-2 text-sm transition-colors hover:border-fg"
              >
                {c.preview}
              </button>
              <a
                href={cert.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm text-muted transition-colors hover:text-fg"
              >
                PDF <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </li>
        ))}
      </ul>

      {activeCert && (
        <CertModal cert={activeCert} onClose={() => setActiveCert(null)} lang={lang} />
      )}
    </section>
  );
}

export default Certifications;
