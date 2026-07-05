import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message, conversionIdentifier } = body;

    // Validate required fields
    if (!name || !email || !phone || !conversionIdentifier) {
      return NextResponse.json({ error: "Todos os campos são obrigatórios" }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "E-mail inválido" }, { status: 400 });
    }

    // Validate phone (only numbers, 10-11 digits)
    const phoneNumbers = phone.replace(/\D/g, "");
    if (phoneNumbers.length < 10 || phoneNumbers.length > 11) {
      return NextResponse.json({ error: "Telefone deve ter 10 ou 11 dígitos" }, { status: 400 });
    }

    // Sanitize inputs
    const sanitizedData = {
      name: name.trim().replace(/[<>]/g, ""),
      email: email.trim().replace(/[<>]/g, ""),
      phone: phoneNumbers,
    };

    // Send email via Resend
    const { error } = await resend.emails.send({
      from: "Armangni Imóveis <onboarding@resend.dev>",
      to: "contato.armangni@gmail.com",
      subject: `Novo Lead: ${sanitizedData.name} — ${conversionIdentifier}`,
      html: `
        <h2>Novo lead do site</h2>
        <p><strong>Imóvel:</strong> <a href="https://armangniimoveis.com.br/imovel/${conversionIdentifier}">${conversionIdentifier}</a></p>
        <p><strong>Nome:</strong> ${sanitizedData.name}</p>
        <p><strong>E-mail:</strong> ${sanitizedData.email}</p>
        <p><strong>Telefone:</strong> ${sanitizedData.phone}</p>
        <p><strong>Mensagem:</strong> ${message || "—"}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", JSON.stringify(error, null, 2));
      return NextResponse.json(
        { error: "Erro ao processar solicitação. Tente novamente." },
        { status: 500 },
      );
    }

    // --- RD Station (desativado temporariamente) ---
    // const rdStationData = {
    //   event_type: "CONVERSION",
    //   event_family: "CDP",
    //   payload: {
    //     conversion_identifier: conversionIdentifier,
    //     name: sanitizedData.name,
    //     email: sanitizedData.email,
    //     mobile_phone: sanitizedData.phone,
    //     cf_mensagem: message || "",
    //   },
    // };
    //
    // const controller = new AbortController();
    // const timeoutId = setTimeout(() => controller.abort(), 10000);
    //
    // const response = await fetch(
    //   `https://api.rd.services/platform/conversions?api_key=${process.env.RD_STATION_TOKEN}`,
    //   {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(rdStationData),
    //     signal: controller.signal,
    //   },
    // );
    //
    // clearTimeout(timeoutId);
    //
    // if (!response.ok) {
    //   const errorData = await response.json().catch(() => ({}));
    //   console.error("RD Station API Error:", errorData);
    //   return NextResponse.json(
    //     { error: "Erro ao processar solicitação. Tente novamente." },
    //     { status: 500 },
    //   );
    // }
    // --- fim RD Station ---

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Erro interno do servidor. Tente novamente mais tarde." },
      { status: 500 },
    );
  }
}
