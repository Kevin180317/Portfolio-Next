"use client";
import React, { useState } from "react";

function Form() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message }),
      });

      if (res.ok) {
        setStatus("✅ Correo enviado");
        setIsError(false);
        setEmail("");
        setMessage("");
      } else {
        setStatus("❌ Error al enviar");
        setIsError(true);
      }
    } catch (error) {
      setStatus("❌ Error de conexión");
      setIsError(true);
    }

    // Ocultar mensaje después de 5 segundos
    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto space-y-4 text-white"
    >
      <input
        type="email"
        placeholder="Tu correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="border p-2 w-full text-black"
      />
      <textarea
        placeholder="Mensaje"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        className="border p-2 w-full text-black"
      />
      <button
        type="submit"
        className="bg-black text-white px-4 py-2 w-full hover:bg-gray-800"
      >
        Enviar
      </button>
      {status && (
        <p
          className={`text-center ${isError ? "text-red-500" : "text-green-500"}`}
        >
          {status}
        </p>
      )}
    </form>
  );
}

export default Form;
