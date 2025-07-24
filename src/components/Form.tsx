"use client";
import React, { useState } from "react";

function Form() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const res = await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify({ email, message }),
    });

    if (res.ok) {
      setStatus("✅ Correo enviado");
      setEmail("");
      setMessage("");
    } else {
      setStatus("❌ Error al enviar");
    }
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
        className="border p-2 w-full"
      />
      <textarea
        placeholder="Mensaje"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        className="border p-2 w-full text-white"
      />
      <button type="submit" className="bg-black text-white px-4 py-2">
        Enviar
      </button>
      {status && <p>{status}</p>}
    </form>
  );
}

export default Form;
