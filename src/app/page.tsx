"use client";
import HeroSection from "@/components/hero-section";
import PhotoGallery from "@/components/photo-gallery";
import PropertyDetails from "@/components/property-details";
import PropertyValue from "@/components/property-value";
import CondominiumInfo from "@/components/condominium-info";
import LocationSection from "@/components/location-section";
import VideoSection from "@/components/video-section";
import ContactForm from "@/components/contact-form";
import Header from "@/components/header/header";
import { useFirstProperty } from "@/hooks/useProperty";
import FloatingWhatsAppButton from "@/components/floating-whatsapp-button";

export default function Home() {
  const { property, loading, error } = useFirstProperty();

  if (loading) {
    return (
      <main>
        <Header />
        <div className="min-h-screen bg-[#1C1C1C] flex items-center justify-center">
          <div className="text-white text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
            <p>Carregando informações do imóvel...</p>
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main>
        <Header />
        <div className="min-h-screen bg-[#1C1C1C] flex items-center justify-center">
          <div className="text-white text-center max-w-md">
            <p className="text-red-400 mb-4">Erro ao carregar dados: {error}</p>
            <p className="text-gray-400">Usando dados padrão da aplicação.</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Header />
      <FloatingWhatsAppButton
        phoneNumber="5543998377239"
        whatsappMessage={property?.whatsappMessage}
      />
      <div className="min-h-screen bg-[#1C1C1C]">
        <HeroSection title={property?.hero?.title} subtitle={property?.hero?.subtitle} />
        <PhotoGallery />
        <PropertyDetails
          subtitle={property?.details?.subtitle}
          paragraphs={property?.details?.paragraphs}
          bedrooms={property?.bedrooms}
          bathrooms={property?.bathrooms}
          garageSpots={property?.garageSpots}
          suites={property?.suites}
          totalArea={property?.totalArea}
          builtArea={property?.builtArea}
          displayFeatures={property?.displayFeatures}
          amenities={property?.amenities}
        />
        <PropertyValue investmentData={property?.investment} />
        <CondominiumInfo condominiumData={property?.condominium} />
        <LocationSection locationData={property?.location} />
        {property?.video?.videoUrl && (
          <VideoSection
            title={property.video.title}
            subtitle={property.video.subtitle}
            videoUrl={property.video.videoUrl}
            description={property.video.description}
            sectionDescription={property.video.sectionDescription}
          />
        )}
        <ContactForm />
      </div>
    </main>
  );
}
