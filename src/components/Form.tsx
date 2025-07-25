"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function Form() {
  const { Lang } = useLanguage();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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
          Lang
            ? "Message sent successfully!"
            : "¡Mensaje enviado correctamente!",
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
    } catch (error) {
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
          success: {
            iconTheme: { primary: "#f97316", secondary: "#f9fafb" },
          },
          error: {
            iconTheme: { primary: "#ef4444", secondary: "#f9fafb" },
          },
          loading: {
            iconTheme: { primary: "#f97316", secondary: "#f9fafb" },
          },
        }}
      />

      <div className="flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-md">
          {/* Header Section */}
          <div className="mb-8">
            <div className="flex items-center space-x-2 text-gray-400 mb-4">
              <h2 className="text-xl font-light text-orange-500">
                {Lang ? "Contact" : "Contacto"}
              </h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {Lang
                ? "Got a project in mind? Send me a message and let's work together to make it happen."
                : "¿Tienes un proyecto en mente? Envíame un mensaje y trabajemos juntos para hacerlo realidad."}
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-gray-800/30 border border-gray-700/50 rounded-lg p-6 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email Field */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
                >
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
                  className="w-full px-3 py-2.5 bg-gray-900/50 border border-gray-600 rounded-md text-white text-sm
                           placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500
                           disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300"
                >
                  {Lang ? "Message" : "Mensaje"}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder={
                    Lang
                      ? "Tell me about your project..."
                      : "Cuéntame sobre tu proyecto..."
                  }
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="w-full px-3 py-2.5 bg-gray-900/50 border border-gray-600 rounded-md text-white text-sm
                           placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500
                           disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-500/50 
                         text-white font-medium py-2.5 px-4 rounded-md text-sm
                         transition-all duration-200 disabled:cursor-not-allowed
                         focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>{Lang ? "Sending..." : "Enviando..."}</span>
                  </div>
                ) : Lang ? (
                  "Send Message"
                ) : (
                  "Enviar mensaje"
                )}
              </button>
            </form>
          </div>

          {/* Footer Note */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              {Lang ? (
                <>
                  You can also contact me directly at{" "}
                  <a
                    href="mailto:okhuysen.dev@gmail.com"
                    className="text-orange-400 hover:text-orange-300 transition-colors duration-200"
                  >
                    okhuysen.dev@gmail.com
                  </a>
                </>
              ) : (
                <>
                  También puedes contactarme directamente en{" "}
                  <a
                    href="mailto:okhuysen.dev@gmail.com"
                    className="text-orange-400 hover:text-orange-300 transition-colors duration-200"
                  >
                    okhuysen.dev@gmail.com
                  </a>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
