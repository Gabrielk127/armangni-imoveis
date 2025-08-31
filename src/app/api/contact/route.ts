import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, conversionIdentifier } = body;

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

    const rdStationData = {
      event_type: "CONVERSION",
      event_family: "CDP",
      payload: {
        conversion_identifier: conversionIdentifier,
        name: sanitizedData.name,
        email: sanitizedData.email,
        mobile_phone: sanitizedData.phone,
      },
    };

    // Make request to RD Station API
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const response = await fetch(
      `https://api.rd.services/platform/conversions?api_key=${process.env.RD_STATION_TOKEN}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(rdStationData),
        signal: controller.signal,
      },
    );

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("RD Station API Error:", errorData);

      return NextResponse.json(
        { error: "Erro ao processar solicitação. Tente novamente." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);

    if (error instanceof Error && error.name === "AbortError") {
      return NextResponse.json(
        { error: "Tempo limite excedido. Tente novamente." },
        { status: 408 },
      );
    }

    return NextResponse.json(
      { error: "Erro interno do servidor. Tente novamente mais tarde." },
      { status: 500 },
    );
  }
}
