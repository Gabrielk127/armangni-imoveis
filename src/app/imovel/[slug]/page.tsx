import { notFound } from "next/navigation";
import { getPropertyBySlug } from "@/services/propertyService";
import PropertyView from "@/components/property-view";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PropertyPage({ params }: PageProps) {
  const { slug } = await params;

  try {
    const property = await getPropertyBySlug(slug);

    if (!property) {
      notFound();
    }

    return <PropertyView property={property} />;
  } catch (error) {
    console.error("Erro ao buscar imóvel:", error);
    notFound();
  }
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;

  try {
    const property = await getPropertyBySlug(slug);

    if (!property) {
      return {
        title: "Imóvel não encontrado",
      };
    }

    return {
      title: `${property.hero?.title || "Imóvel"} | Armangni Imóveis`,
      description: property.hero?.subtitle || "Imóvel disponível",
    };
  } catch (error) {
    console.log("Erro ao carregar imóvel:", error);
    return {
      title: "Erro ao carregar imóvel",
    };
  }
}
