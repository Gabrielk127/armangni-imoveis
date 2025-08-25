import { NextResponse } from "next/server";
import { getPropertyBySlug } from "@/services/propertyService";

interface RouteParams {
  params: Promise<{
    slug: string;
  }>;
}

export async function GET(request: Request, { params }: RouteParams) {
  try {
    const { slug } = await params;

    if (!slug || slug.trim() === "") {
      return NextResponse.json(
        {
          message: "Slug inválido ou não fornecido.",
        },
        { status: 400 },
      );
    }

    const property = await getPropertyBySlug(slug);

    if (!property) {
      return NextResponse.json(
        {
          message: `Imóvel com slug '${slug}' não encontrado.`,
        },
        { status: 404 },
      );
    }

    return NextResponse.json({ property }, { status: 200 });
  } catch (error) {
    console.error("Erro na API GET [slug]:", error);
    return NextResponse.json(
      {
        message: "Erro ao buscar imóvel",
        error: error instanceof Error ? error.message : "Erro desconhecido",
      },
      { status: 500 },
    );
  }
}
