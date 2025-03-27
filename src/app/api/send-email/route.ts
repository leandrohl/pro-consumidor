import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, whatsapp, socialMedia, problem } = await req.json();

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "proconsumidoradv@gmail.com",
      subject: "Novo Contato do Formulário",
      html: `
        <h2>Novo contato recebido!</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Whatsapp:</strong> ${whatsapp}</p>
        <p><strong>Rede Social:</strong> ${socialMedia}</p>
        <p><strong>Mensagem:</strong> ${problem}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
