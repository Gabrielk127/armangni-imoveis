import Header from "@/components/header/header";
import HeroSection from "@/components/hero-section";
import PropertyDetails from "@/components/property-details";
import PhotoGallery from "@/components/photo-gallery";
import LocationSection from "@/components/location-section";
import PropertyValue from "@/components/property-value";
import CondominiumInfo from "@/components/condominium-info";
import FloatingWhatsAppButton from "@/components/floating-whatsapp-button";
import ContactSection from "@/components/contact-form";
import { PropertyData } from "@/types";

export default function PlaengePage() {
  const property: PropertyData = {
    slug: "plaenge-7239",
    whatsappMessage:
      "Olá! Gostaria de mais informações sobre o Casa Horizonte - Plaenge no Centro de Londrina.",
    headerImage: "/plaenge/imagem_principal.jpeg",
    gallery: [
      "/plaenge/imagem1.jpeg",
      "/plaenge/imagem2.jpeg",
      "/plaenge/imagem3.jpeg",
      "/plaenge/imagem4.jpeg",
      "/plaenge/imagem5.jpeg",
      "/plaenge/imagem6.jpeg",
    ],
    hero: {
      title: "Casa Horizonte - Breve lançamento Plaenge no Centro de Londrina",
      subtitle: "Apartamentos de alto padrão com 145m² e 181m² no coração de Londrina",
    },
    details: {
      subtitle: "Sofisticação e localização privilegiada",
      paragraphs: [
        "O Casa Horizonte representa o novo marco da Plaenge no Centro de Londrina, oferecendo apartamentos de alto padrão com metragens de 145m² e 181m².",
        "Localizado estrategicamente na esquina entre a Rua Belo Horizonte e Pio XII, o empreendimento proporciona a combinação perfeita entre localização privilegiada e conforto premium.",
        "Com acabamentos de primeira linha e design contemporâneo, o Casa Horizonte foi pensado para quem busca exclusividade e qualidade de vida em um dos endereços mais nobres da cidade.",
      ],
    },
    bedrooms: 3,
    bathrooms: 5,
    garageSpots: 2,
    suites: 3,
    totalArea: 181,
    builtArea: 145,
    displayFeatures: [
      {
        label: "3 quartos",
        value: "(3 suítes)",
        iconId: "home",
      },
      {
        label: "5 banheiros",
        value: "",
        iconId: "bath",
      },
      {
        label: "145 m² útil",
        value: "",
        iconId: "maximize",
      },
      {
        label: "2 vagas",
        value: "",
        iconId: "car",
      },
      {
        label: "Elevador Privativo",
        value: "",
        iconId: "building",
      },
      {
        label: "Sauna Úmida",
        value: "",
        iconId: "waves",
      },
      {
        label: "Piscina com Raia",
        value: "",
        iconId: "waves",
      },
      {
        label: "Com Guarita Blindada",
        value: "",
        iconId: "shield",
      },
      {
        label: "Sala de Academia",
        value: "",
        iconId: "users",
      },
    ],
    amenities: [
      "Elevador Privativo",
      "Sauna Úmida",
      "Piscina com Raia",
      "Guarita Blindada",
      "Sala de Academia",
      "Acabamentos Premium",
      "Design Contemporâneo",
      "Localização Central",
    ],
    location: {
      sectionDescription:
        "Localizado no coração de Londrina, na esquina da Rua Belo Horizonte com Pio XII",
      googleMapsUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2178.690952061782!2d-51.16773909088833!3d-23.311882686472767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb44a7a62b23dd%3A0x82cc87f501cd18ad!2sR.%20Pio%20XII%2C%20500%20-%20Centro%2C%20Londrina%20-%20PR%2C%2086020-380%2C%20Brasil!5e0!3m2!1spt-PT!2spt!4v1761155870663!5m2!1spt-PT!2spt",
      address: "Esquina entre Rua Belo Horizonte e Pio XII - Centro, Londrina - PR",
      nearbyPoints: [
        {
          icon: "church",
          label: "Catedral",
          distance: "700 m",
        },
        {
          icon: "shopping-cart",
          label: "Royal Plaza Shopping",
          distance: "1 km",
        },
        {
          icon: "shopping-cart",
          label: "Shopping Quintino",
          distance: "1.5 km",
        },
        {
          icon: "utensils",
          label: "Restaurantes e Cafés",
          distance: "500m",
        },
      ],
      advantages: [
        "Localização central privilegiada",
        "Próximo a comércios e serviços",
        "Fácil acesso às principais vias",
        "Região valorizada de Londrina",
      ],
    },
    condominium: {
      sectionTitle: "Áreas de Lazer Premium",
      sectionDescription: "Conforto e sofisticação em cada detalhe",
      image: "/plaenge/imagem_principal.jpeg",
      descriptionTitle: "Lazer Completo",
      descriptionParagraphs: [
        "O Casa Horizonte oferece uma infraestrutura completa de lazer e bem-estar, com piscina com raia, sauna úmida, sala de academia equipada e áreas de convivência.",
        "Com guarita blindada e elevador privativo, o empreendimento garante segurança e privacidade máximas aos seus moradores.",
      ],
      amenities: [
        {
          icon: "water",
          label: "Piscina com Raia",
        },
        {
          icon: "spa",
          label: "Sauna Úmida",
        },
        {
          icon: "dumbbell",
          label: "Sala de Academia",
        },
        {
          icon: "elevator",
          label: "Elevador Privativo",
        },
        {
          icon: "shield-check",
          label: "Guarita Blindada",
        },
        {
          icon: "users",
          label: "Áreas de Convivência",
        },
      ],
    },
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header hasCondominium={!!property.condominium} hasVideo={false} />
      <FloatingWhatsAppButton
        phoneNumber="5543991807520"
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
      {property.investment && <PropertyValue investmentData={property.investment} />}
      {property.condominium && <CondominiumInfo condominiumData={property.condominium} />}
      <ContactSection conversionIdentifier={property.slug} />
    </main>
  );
}

export async function generateMetadata() {
  return {
    title: "Casa Horizonte - Plaenge Centro Londrina | Armangni Imóveis",
    description:
      "Breve lançamento Plaenge no Centro de Londrina. Apartamentos de 145m² e 181m², localizado na esquina da Rua Belo Horizonte com Pio XII.",
  };
}
