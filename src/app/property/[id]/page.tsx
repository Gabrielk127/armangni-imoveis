import { notFound } from "next/navigation";
import { getPropertyById } from "@/services/propertyService";
import HeroSection from "@/components/hero-section";
import PropertyDetails from "@/components/property-details";
import PhotoGallery from "@/components/photo-gallery";
import LocationSection from "@/components/location-section";
import PropertyValue from "@/components/property-value";
import CondominiumInfo from "@/components/condominium-info";
import VideoSection from "@/components/video-section";
import ContactForm from "@/components/contact-form";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PropertyPage({ params }: PageProps) {
  const { id } = await params;
  const propertyId = parseInt(id);

  // Verifica se o ID é um número válido
  if (isNaN(propertyId)) {
    notFound();
  }

  try {
    // Busca o imóvel pelo ID
    const property = await getPropertyById(propertyId);

    if (!property) {
      notFound();
    }

    return (
      <main className="min-h-screen bg-gray-50">
        <HeroSection title={property.hero?.title} subtitle={property.hero?.subtitle} />

        <PropertyDetails
          subtitle={property.details?.subtitle}
          paragraphs={property.details?.paragraphs}
          bedrooms={property.bedrooms}
          bathrooms={property.bathrooms}
          garageSpots={property.garageSpots}
          suites={property.suites}
          totalArea={property.totalArea}
          builtArea={property.builtArea}
          displayFeatures={property.displayFeatures}
          amenities={property.amenities}
        />

        <PhotoGallery />
        <LocationSection />
        <PropertyValue />
        <CondominiumInfo />
        {property.video?.videoUrl && (
          <VideoSection
            title={property.video.title}
            subtitle={property.video.subtitle}
            videoUrl={property.video.videoUrl}
            description={property.video.description}
          />
        )}
        <ContactForm />
      </main>
    );
  } catch (error) {
    console.error("Erro ao buscar imóvel:", error);
    notFound();
  }
}

// Função para gerar metadados dinâmicos
export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const propertyId = parseInt(id);

  if (isNaN(propertyId)) {
    return {
      title: "Imóvel não encontrado",
    };
  }

  try {
    const property = await getPropertyById(propertyId);

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
