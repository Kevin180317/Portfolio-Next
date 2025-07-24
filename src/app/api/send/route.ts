import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { email, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: "Contacto <info@okhuysen.dev>", 
      to: "okhuysen.dev@gmail.com", 
      replyTo: email, 
      subject: "📝 Nuevo mensaje del formulario de tu web",
      html: `
        <p><strong>Correo del visitante:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
