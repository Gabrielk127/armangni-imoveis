export type PropertyData = {
  slug: string;
  pageTitle?: string;
  whatsappMessage?: string;
  pageDescription?: string;
  headerImage?: string;
  gallery?: string[];
  hero: {
    title: string;
    subtitle: string;
  };
  details: {
    sectionTitle?: string;
    sectionDescription?: string;
    subtitle: string;
    paragraphs: string[];
    descriptionTitle?: string;
    differentiators?: string[];
  };
  video?: {
    title: string;
    subtitle: string;
    videoUrl: string;
    description: string;
    sectionDescription?: string;
  };
  investment?: {
    price: number;
    priceFormatted: string;
    conditions: string;
  };
  condominium?: {
    sectionTitle: string;
    sectionDescription: string;
    image: string;
    descriptionTitle: string;
    descriptionParagraphs: string[];
    amenities: {
      icon: string;
      label: string;
    }[];
  };
  location?: {
    sectionDescription: string;
    googleMapsUrl: string;
    address: string;
    nearbyPoints: {
      icon: string;
      label: string;
      distance: string;
    }[];
    advantages: string[];
  };
  bedrooms: number;
  bathrooms: number;
  garageSpots: number;
  suites: number;
  totalArea: number;
  builtArea: number;
  displayFeatures: {
    label: string;
    value: string;
    iconId: string;
  }[];
  amenities: string[];
};

export type Property = PropertyData & {
  id: string;
};
