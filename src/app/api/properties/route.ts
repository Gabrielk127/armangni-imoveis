// app/api/properties/route.ts

import { NextResponse } from "next/server";
import { createProperty, getProperties } from "@/services/propertyService";
import { PropertyData } from "@/types";
import { z } from "zod";

const PropertySchema = z.object({
  slug: z.string().min(3),
  pageTitle: z.string().optional(),
  whatsappMessage: z.string().optional(),
  pageDescription: z.string().optional(),
  headerImage: z.string().optional(),
  gallery: z.array(z.string()).optional(),
  hero: z.object({
    title: z.string(),
    subtitle: z.string(),
  }),
  details: z.object({
    sectionTitle: z.string().optional(),
    sectionDescription: z.string().optional(),
    subtitle: z.string(),
    paragraphs: z.array(z.string()),
    descriptionTitle: z.string().optional(),
    differentiators: z.array(z.string()).optional(),
  }),
  video: z
    .object({
      title: z.string(),
      subtitle: z.string(),
      videoUrl: z.string().url(),
      description: z.string(),
      sectionDescription: z.string().optional(),
    })
    .optional(),
  investment: z
    .object({
      price: z.number(),
      priceFormatted: z.string(),
      conditions: z.string(),
    })
    .optional(),
  condominium: z
    .object({
      sectionTitle: z.string(),
      sectionDescription: z.string(),
      image: z.string(),
      descriptionTitle: z.string(),
      descriptionParagraphs: z.array(z.string()),
      amenities: z.array(
        z.object({
          icon: z.string(),
          label: z.string(),
        }),
      ),
    })
    .optional(),
  location: z
    .object({
      sectionDescription: z.string(),
      googleMapsUrl: z.string(),
      address: z.string(),
      nearbyPoints: z.array(
        z.object({
          icon: z.string(),
          label: z.string(),
          distance: z.string(),
        }),
      ),
      advantages: z.array(z.string()),
    })
    .optional(),
  bedrooms: z.number().min(0),
  bathrooms: z.number().min(0),
  garageSpots: z.number().min(0),
  suites: z.number().min(0),
  totalArea: z.number().min(0),
  builtArea: z.number().min(0),
  displayFeatures: z
    .array(
      z.object({
        label: z.string(),
        value: z.string(),
        iconId: z.string(),
      }),
    )
    .optional(),
  amenities: z.array(z.string()),
});

// GET - Buscar todos os imóveis
export async function GET() {
  try {
    const properties = await getProperties();

    return NextResponse.json(
      {
        properties,
        total: properties.length,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Erro na API GET:", error);
    return NextResponse.json(
      {
        message: "Erro ao buscar imóveis",
        error: error instanceof Error ? error.message : "Erro desconhecido",
      },
      { status: 500 },
    );
  }
}

// POST - Criar novo imóvel
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validatedData = PropertySchema.parse(body);

    const newPropertyId = await createProperty(validatedData as PropertyData);

    // 4. Retorna uma resposta de sucesso
    return NextResponse.json(
      {
        message: "Imóvel criado com sucesso!",
        propertyId: newPropertyId,
      },
      { status: 201 },
    ); // 201 Created é o status HTTP correto
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          message: "Dados inválidos",
          errors: error.issues,
        },
        { status: 400 },
      );
    }

    console.error("Erro na API POST:", error);
    return NextResponse.json(
      {
        message: "Erro interno do servidor",
        error: error instanceof Error ? error.message : "Erro desconhecido",
      },
      { status: 500 },
    );
  }
}
