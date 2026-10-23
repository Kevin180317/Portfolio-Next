import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().max(120).optional(),
  email: z.string().trim().email().max(254),
  message: z.string().trim().min(1).max(5000),
  lang: z.enum(["es", "en"]).optional(),
  // Honeypot: campo oculto que solo un bot llenaría. Si viene con contenido,
  // respondemos éxito sin enviar el correo.
  company: z.string().optional(),
  turnstileToken: z.string().max(2048).optional(),
});

async function verifyTurnstileToken(token: string, remoteip: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    console.error("TURNSTILE_SECRET_KEY no está configurada.");
    return false;
  }

  try {
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        signal: AbortSignal.timeout(10_000),
        body: new URLSearchParams({
          secret,
          response: token,
          remoteip,
        }),
      }
    );
    if (!res.ok) return false;
    const data = await res.json();
    return data.success === true;
  } catch (error) {
    console.error("Error verificando Turnstile:", error);
    return false;
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, message: "Datos de formulario inválidos." },
        { status: 400 }
      );
    }

    const { name, email, message, lang, company, turnstileToken } = parsed.data;

    // Honeypot activado: respondemos éxito silenciosamente, sin enviar correo.
    if (company) {
      return NextResponse.json({ success: true });
    }

    if (process.env.TURNSTILE_SECRET_KEY) {
      if (!turnstileToken) {
        return NextResponse.json(
          { success: false, message: "Verificación requerida." },
          { status: 400 }
        );
      }

      const remoteip = req.headers.get("x-forwarded-for") ?? "";
      const isHuman = await verifyTurnstileToken(turnstileToken, remoteip);
      if (!isHuman) {
        return NextResponse.json(
          { success: false, message: "Verificación fallida." },
          { status: 403 }
        );
      }
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY no está configurada.");
      return NextResponse.json(
        { success: false, message: "Error del servidor." },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const isEnglish = lang === "en";
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message);
    const safeName = name ? escapeHtml(name) : "";

    const data = await resend.emails.send({
      from: isEnglish
        ? "Contact <info@okhuysen.dev>"
        : "Contacto <info@okhuysen.dev>",
      to: "okhuysen.dev@gmail.com",
      replyTo: email,
      subject: isEnglish
        ? "📝 New message from your website form"
        : "📝 Nuevo mensaje del formulario de tu web",
      html: `
        <div style="font-family: Arial, sans-serif; color: #222; line-height: 1.5; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #0070f3;">
            ${
              isEnglish
                ? "New message received from your website"
                : "Nuevo mensaje recibido desde tu sitio web"
            }
          </h2>
          ${
            safeName
              ? `<p><strong>${isEnglish ? "Name:" : "Nombre:"}</strong> ${safeName}</p>`
              : ""
          }
          <p>
            <strong>${isEnglish ? "Visitor email:" : "Correo del visitante:"}</strong>
            <a href="mailto:${safeEmail}" style="color: #0070f3; text-decoration: none;">${safeEmail}</a>
          </p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p><strong>${isEnglish ? "Message:" : "Mensaje:"}</strong></p>
          <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 4px; border: 1px solid #eee;">${safeMessage}</p>
          <footer style="margin-top: 30px; font-size: 12px; color: #999;">
            ${
              isEnglish
                ? 'This message was sent from the contact form at <a href="https://okhuysen.dev" style="color: #0070f3;">okhuysen.dev</a>'
                : 'Este mensaje fue enviado desde el formulario de contacto de <a href="https://okhuysen.dev" style="color: #0070f3;">okhuysen.dev</a>'
            }
          </footer>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Error al enviar el mensaje." },
      { status: 500 }
    );
  }
}
