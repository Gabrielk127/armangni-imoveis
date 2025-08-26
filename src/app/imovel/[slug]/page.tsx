import { notFound } from "next/navigation";
import { getPropertyBySlug } from "@/services/propertyService";
import HeroSection from "@/components/hero-section";
import PropertyDetails from "@/components/property-details";
import PhotoGallery from "@/components/photo-gallery";
import LocationSection from "@/components/location-section";
import PropertyValue from "@/components/property-value";
import CondominiumInfo from "@/components/condominium-info";
import VideoSection from "@/components/video-section";
import ContactForm from "@/components/contact-form";
import FloatingWhatsAppButton from "@/components/floating-whatsapp-button";

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

    if (!property) {
      notFound();
    }

    return (
      <main className="min-h-screen bg-gray-50">
        <FloatingWhatsAppButton
          phoneNumber="5543998377239"
          whatsappMessage={property.whatsappMessage}
        />
        <HeroSection
          title={property.hero?.title}
          subtitle={property.hero?.subtitle}
          headerImage={property.headerImage}
        />

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

        <PhotoGallery gallery={property.gallery} />
        <LocationSection locationData={property.location} />
        <PropertyValue investmentData={property.investment} />
        <CondominiumInfo condominiumData={property.condominium} />
        {property.video?.videoUrl && (
          <VideoSection
            title={property.video.title}
            subtitle={property.video.subtitle}
            videoUrl={property.video.videoUrl}
            description={property.video.description}
            sectionDescription={property.video.sectionDescription}
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
