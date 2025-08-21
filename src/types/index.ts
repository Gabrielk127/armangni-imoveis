export type PropertyData = {
  slug: string;
  hero: {
    title: string;
    subtitle: string;
  };
  details: {
    subtitle: string;
    paragraphs: string[];
  };
  video?: {
    title: string;
    subtitle: string;
    videoUrl: string;
    description: string;
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
  id: string; // ID do documento no Firestore (string)
  // O campo numérico 'id' será incluído automaticamente no PropertyData quando salvo no Firestore
};
