"use client";

import { motion } from "framer-motion";
import {
  Home,
  Bath,
  Car,
  Maximize,
  Users,
  ShowerHead,
  Ruler,
  Building,
  MapPin,
  Waves,
} from "lucide-react";
import SectionTitle from "@/components/ui/section-title";

interface PropertyDetailsProps {
  subtitle?: string;
  paragraphs?: string[];
  bedrooms?: number;
  bathrooms?: number;
  garageSpots?: number;
  suites?: number;
  totalArea?: number;
  builtArea?: number;
  displayFeatures?: {
    label: string;
    value: string;
    iconId: string;
  }[];
  amenities?: string[];
}

// Mapeamento de ícones por ID
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  home: Home,
  bath: Bath,
  car: Car,
  maximize: Maximize,
  users: Users,
  showerHead: ShowerHead,
  ruler: Ruler,
  building: Building,
  mapPin: MapPin,
  waves: Waves,
};

export default function PropertyDetails({
  subtitle,
  paragraphs,
  bedrooms,
  bathrooms,
  garageSpots,
  suites,
  totalArea,
  builtArea,
  displayFeatures,
  amenities,
}: PropertyDetailsProps) {
  // Se há displayFeatures, usar eles; caso contrário, usar a lógica padrão
  let features = [];

  if (displayFeatures && displayFeatures.length > 0) {
    features = displayFeatures.map((feature) => ({
      icon: iconMap[feature.iconId] || Home,
      label: feature.label,
      value: feature.value,
    }));
  } else {
    // Lógica padrão - só mostrar features que têm valores válidos
    const defaultFeatures = [
      {
        icon: Home,
        label: "Área Total",
        value: `${totalArea || 0}m²`,
        show: totalArea && totalArea > 0,
      },
      {
        icon: Maximize,
        label: "Área Construída",
        value: `${builtArea || 0}m²`,
        show: builtArea && builtArea > 0,
      },
      {
        icon: Users,
        label: "Quartos",
        value: `${bedrooms || 0} quartos`,
        show: bedrooms && bedrooms > 0,
      },
      {
        icon: ShowerHead,
        label: "Banheiros",
        value: `${bathrooms || 0} banheiros`,
        show: bathrooms && bathrooms > 0,
      },
      {
        icon: Car,
        label: "Garagem",
        value: `${garageSpots || 0} vagas`,
        show: garageSpots && garageSpots > 0,
      },
      { icon: Bath, label: "Suítes", value: `${suites || 0} suítes`, show: suites && suites > 0 },
    ];

    features = defaultFeatures.filter((feature) => feature.show);
  }

  // Subtítulo padrão baseado no contexto
  const defaultSubtitle =
    features.length === 1 && features[0]?.label.includes("Terreno")
      ? "Terreno ideal para construir o projeto dos seus sonhos"
      : "Uma propriedade projetada para oferecer máximo conforto e sofisticação";

  const detailsData = {
    subtitle: subtitle || defaultSubtitle,
    paragraphs: paragraphs || [],
  };

  return (
    <section id="imovel" className="py-16 px-4 bg-[#1C1C1C]">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title={
            features.length === 1 && features[0]?.label.includes("Terreno")
              ? "Informações do Terreno"
              : "Detalhes do Imóvel"
          }
          subtitle={detailsData.subtitle}
        />

        {/* Features Grid - Só mostra se há features */}
        {features.length > 0 && (
          <div
            className={`grid gap-6 mb-12 ${
              features.length === 1
                ? "grid-cols-1 max-w-md mx-auto"
                : features.length <= 3
                  ? "grid-cols-1 md:grid-cols-3"
                  : "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
            }`}
          >
            {features.map((feature, index) => (
              <motion.div
                key={`${feature.label}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 rounded-lg bg-[#262626] transition-colors"
              >
                <feature.icon className="w-8 h-8 mx-auto mb-2 text-[#BFB4AA]" />
                <p className="font-semibold text-white text-sm">{feature.value}</p>
                <p className="text-xs text-[#c9ccd0]">{feature.label}</p>
              </motion.div>
            ))}
          </div>
        )}

        {/* Description and Amenities - Só mostra se há conteúdo */}
        {(subtitle ||
          (paragraphs && paragraphs.length > 0 && paragraphs.some((p) => p.trim())) ||
          (amenities && amenities.length > 0 && amenities.some((a) => a.trim()))) && (
          <div className="grid md:grid-cols-2 gap-8">
            {/* Descrição - Só mostra se há subtitle ou paragraphs com conteúdo */}
            {(subtitle ||
              (paragraphs && paragraphs.length > 0 && paragraphs.some((p) => p.trim()))) && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-[#BFB4AA] mb-4">
                  {features.length === 1 && features[0]?.label.includes("Terreno")
                    ? "Sobre o Terreno"
                    : "Sobre o Imóvel"}
                </h3>
                {detailsData.paragraphs
                  .filter((paragraph) => paragraph.trim())
                  .map((paragraph: string, index: number) => (
                    <p key={index} className="text-white leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
              </motion.div>
            )}

            {/* Amenities - Só mostra se há amenities com conteúdo */}
            {amenities && amenities.length > 0 && amenities.some((a) => a.trim()) && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-[#BFB4AA] mb-4">Diferenciais</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {amenities
                    .filter((amenity) => amenity.trim())
                    .map((amenity: string, index: number) => (
                      <motion.div
                        key={`${amenity}-${index}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-2 text-white"
                      >
                        <div className="w-2 h-2 bg-emerald-600 rounded-full" />
                        <span className="text-sm">{amenity}</span>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
