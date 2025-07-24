import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  const { email, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: "Contacto <info@okhuysen.dev>", 
      to: "okhuysen.dev@gmail.com", 
      replyTo: email, 
      subject: "📝 Nuevo mensaje del formulario de tu web",
      html: `
        <div style="font-family: Arial, sans-serif; color: #222; line-height: 1.5; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #0070f3;">Nuevo mensaje recibido desde tu sitio web</h2>
          <p><strong>Correo del visitante:</strong> <a href="mailto:${email}" style="color: #0070f3; text-decoration: none;">${email}</a></p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p><strong>Mensaje:</strong></p>
          <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 4px; border: 1px solid #eee;">${message}</p>
          <footer style="margin-top: 30px; font-size: 12px; color: #999;">
            Este mensaje fue enviado desde el formulario de contacto de <a href="https://okhuysen.dev" style="color: #0070f3;">okhuysen.dev</a>
          </footer>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(error);
    const err = error as Error;
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
