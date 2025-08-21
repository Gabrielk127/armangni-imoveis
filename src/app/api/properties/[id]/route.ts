import { NextResponse } from "next/server";
import { getPropertyById } from "@/services/propertyService";

interface RouteParams {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(request: Request, { params }: RouteParams) {
  try {
    const { id } = await params;
    const propertyId = parseInt(id);

    // Verifica se o ID é um número válido
    if (isNaN(propertyId)) {
      return NextResponse.json(
        {
          message: "ID inválido. O ID deve ser um número.",
        },
        { status: 400 },
      );
    }

    const property = await getPropertyById(propertyId);

    if (!property) {
      return NextResponse.json(
        {
          message: `Imóvel com ID ${propertyId} não encontrado.`,
        },
        { status: 404 },
      );
    }

    return NextResponse.json({ property }, { status: 200 });
  } catch (error) {
    console.error("Erro na API GET [id]:", error);
    return NextResponse.json(
      {
        message: "Erro ao buscar imóvel",
        error: error instanceof Error ? error.message : "Erro desconhecido",
      },
      { status: 500 },
    );
  }
}
