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
  id: string;
};
