"use client";

import React, { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import type { Lang } from "@/lib/i18n";
import { ArrowUpRight } from "@/components/ui/Icons";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
        }
      ) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId: string) => void;
    };
    onTurnstileLoad?: () => void;
  }
}

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

const copy = {
  es: {
    name: "Nombre",
    namePh: "Tu nombre",
    email: "Correo electrónico",
    emailPh: "tu@empresa.com",
    message: "Cuéntame sobre tu proyecto",
    messagePh: "Qué hace tu negocio, qué necesitas y para cuándo…",
    send: "Enviar mensaje",
    sending: "Enviando…",
    verify: "Por favor completa la verificación.",
    loading: "Enviando mensaje…",
    success: "¡Mensaje enviado! Te responderé pronto.",
    error: "Error al enviar el mensaje",
    network: "Error de conexión. Inténtalo de nuevo.",
    optional: "opcional",
  },
  en: {
    name: "Name",
    namePh: "Your name",
    email: "Email",
    emailPh: "you@company.com",
    message: "Tell me about your project",
    messagePh: "What your business does, what you need, and when…",
    send: "Send message",
    sending: "Sending…",
    verify: "Please complete the verification challenge.",
    loading: "Sending message…",
    success: "Message sent! I'll get back to you soon.",
    error: "Error sending message",
    network: "Connection error. Please try again.",
    optional: "optional",
  },
};

const fieldClass =
  "w-full border-0 border-b border-line-strong bg-transparent px-0 py-3 text-lg text-fg placeholder:text-subtle transition-colors duration-200 focus:border-accent focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50";

const labelClass = "font-mono text-xs uppercase tracking-[0.2em] text-subtle";

function Form({ lang }: { lang: Lang }) {
  const c = copy[lang];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState(""); // honeypot: debe quedar vacío
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");

  const turnstileContainerRef = useRef<HTMLDivElement>(null);
  const turnstileWidgetId = useRef<string | undefined>(undefined);

  useEffect(() => {
    if (!TURNSTILE_SITE_KEY) return;

    const renderWidget = () => {
      if (!turnstileContainerRef.current || !window.turnstile) return;
      turnstileWidgetId.current = window.turnstile.render(
        turnstileContainerRef.current,
        {
          sitekey: TURNSTILE_SITE_KEY,
          callback: (token: string) => setTurnstileToken(token),
          "expired-callback": () => setTurnstileToken(""),
          "error-callback": () => setTurnstileToken(""),
        }
      );
    };

    if (window.turnstile) {
      renderWidget();
    } else {
      window.onTurnstileLoad = renderWidget;
      const script = document.createElement("script");
      script.src =
        "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }

    return () => {
      if (turnstileWidgetId.current && window.turnstile) {
        window.turnstile.remove(turnstileWidgetId.current);
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (TURNSTILE_SITE_KEY && !turnstileToken) {
      toast.error(c.verify);
      return;
    }

    setIsSubmitting(true);
    const loadingToast = toast.loading(c.loading);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          lang,
          company,
          turnstileToken,
        }),
      });

      if (res.ok) {
        toast.success(c.success, { id: loadingToast, duration: 4000 });
        setName("");
        setEmail("");
        setMessage("");
      } else {
        const errorData = await res.json().catch(() => ({}));
        toast.error(errorData.message || c.error, { id: loadingToast, duration: 5000 });
      }
    } catch {
      toast.error(c.network, { id: loadingToast, duration: 5000 });
    } finally {
      setIsSubmitting(false);
      setTurnstileToken("");
      if (turnstileWidgetId.current && window.turnstile) {
        window.turnstile.reset(turnstileWidgetId.current);
      }
    }
  };

  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#131316",
            color: "#f4f4f5",
            border: "1px solid #26262b",
            borderRadius: "999px",
            fontSize: "14px",
          },
          success: { iconTheme: { primary: "#ff5b1f", secondary: "#ffffff" } },
          error: { iconTheme: { primary: "#ef4444", secondary: "#f4f4f5" } },
          loading: { iconTheme: { primary: "#ff5b1f", secondary: "#f4f4f5" } },
        }}
      />

      <form
        onSubmit={handleSubmit}
        className="relative space-y-10 rounded-xl border border-line bg-surface p-6 md:p-10"
      >
        {/* Honeypot anti-spam: oculto para humanos, los bots suelen rellenarlo */}
        <div className="absolute -left-[9999px]" aria-hidden="true">
          <label htmlFor="company">Company</label>
          <input
            id="company"
            name="company"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>

        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={labelClass}>
              {c.name} <span className="normal-case tracking-normal">({c.optional})</span>
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              placeholder={c.namePh}
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={120}
              disabled={isSubmitting}
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>
              {c.email}
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder={c.emailPh}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSubmitting}
              className={fieldClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className={labelClass}>
            {c.message}
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder={c.messagePh}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            maxLength={5000}
            disabled={isSubmitting}
            className={`${fieldClass} resize-none`}
          />
        </div>

        {TURNSTILE_SITE_KEY && <div ref={turnstileContainerRef} />}

        <button
          type="submit"
          disabled={isSubmitting || (!!TURNSTILE_SITE_KEY && !turnstileToken)}
          className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-fill px-6 py-4 text-base font-medium text-white transition-colors duration-300 hover:bg-accent-fill-hover disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
        >
          {isSubmitting ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              {c.sending}
            </>
          ) : (
            <>
              {c.send}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </>
          )}
        </button>
      </form>
    </>
  );
}

export default Form;
