"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/kevin180317",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
];

function Form() {
  const { Lang } = useLanguage();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const loadingToast = toast.loading(
      Lang ? "Sending message..." : "Enviando mensaje..."
    );

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message, lang: Lang ? "en" : "es" }),
      });

      if (res.ok) {
        toast.success(
          Lang ? "Message sent successfully!" : "¡Mensaje enviado correctamente!",
          { id: loadingToast, duration: 4000 }
        );
        setEmail("");
        setMessage("");
      } else {
        const errorData = await res.json().catch(() => ({}));
        toast.error(
          errorData.message ||
            (Lang ? "Error sending message" : "Error al enviar el mensaje"),
          { id: loadingToast, duration: 5000 }
        );
      }
    } catch {
      toast.error(
        Lang
          ? "Connection error. Please try again."
          : "Error de conexión. Inténtalo de nuevo.",
        { id: loadingToast, duration: 5000 }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#1f2937",
            color: "#f9fafb",
            border: "1px solid #374151",
            borderRadius: "8px",
            fontSize: "14px",
          },
          success: { iconTheme: { primary: "#f97316", secondary: "#f9fafb" } },
          error: { iconTheme: { primary: "#ef4444", secondary: "#f9fafb" } },
          loading: { iconTheme: { primary: "#f97316", secondary: "#f9fafb" } },
        }}
      />

      <div
        ref={ref}
        className={`flex items-center justify-center px-6 py-16 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="mb-8">
            <p className="text-orange-500 text-sm tracking-widest uppercase mb-3">
              {Lang ? "Get in touch" : "Ponte en contacto"}
            </p>
            <h1 className="text-3xl font-bold text-white mb-3">
              {Lang ? "Let's work together" : "Trabajemos juntos"}
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed">
              {Lang
                ? "Got a project in mind? Send me a message and let's make it happen."
                : "¿Tienes un proyecto en mente? Envíame un mensaje y hagámoslo realidad."}
            </p>
          </div>

          {/* Form card */}
          <div className="bg-gray-900/40 border border-gray-700 rounded-xl p-6 mb-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1.5">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  {Lang ? "Email" : "Correo electrónico"}
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder={Lang ? "your@email.com" : "tu@email.com"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="w-full px-3 py-2.5 bg-gray-950/60 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-600
                           focus:outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-orange-500
                           disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  {Lang ? "Message" : "Mensaje"}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder={
                    Lang ? "Tell me about your project..." : "Cuéntame sobre tu proyecto..."
                  }
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="w-full px-3 py-2.5 bg-gray-950/60 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-600
                           focus:outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-orange-500
                           disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-500/40
                         text-white font-medium py-2.5 px-4 rounded-lg text-sm
                         transition-all duration-200 disabled:cursor-not-allowed hover:scale-[1.02]
                         focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    {Lang ? "Sending..." : "Enviando..."}
                  </span>
                ) : Lang ? (
                  "Send Message"
                ) : (
                  "Enviar mensaje"
                )}
              </button>
            </form>
          </div>

          {/* Alternative contact */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-xs text-gray-600">
              {Lang ? "or reach me directly" : "o contáctame directamente"}
            </p>
            <div className="flex items-center gap-3">
              <a
                href="mailto:okhuysen.dev@gmail.com"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-orange-400 transition-colors duration-200 px-3 py-2 border border-gray-800 rounded-lg hover:border-orange-500/40"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                okhuysen.dev@gmail.com
              </a>
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200 px-3 py-2 border border-gray-800 rounded-lg hover:border-orange-500/40"
                >
                  {s.icon}
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
