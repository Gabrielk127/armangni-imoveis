"use client";

import { motion } from "framer-motion";
import { Home, Bath, Car, Maximize, Users, Waves } from "lucide-react";
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

export default function PropertyDetails({
  subtitle,
  paragraphs,
  bedrooms,
  bathrooms,
  garageSpots,
  suites,
  totalArea,
  builtArea,
  amenities,
}: PropertyDetailsProps) {
  // Dados padrão se não houver props
  const features = [
    { icon: Home, label: "Área Total", value: `${totalArea || 450}m²` },
    { icon: Maximize, label: "Área Construída", value: `${builtArea || 320}m²` },
    { icon: Users, label: "Quartos", value: `${bedrooms || 4} quartos` },
    { icon: Bath, label: "Banheiros", value: `${bathrooms || 3} banheiros` },
    { icon: Car, label: "Garagem", value: `${garageSpots || 2} vagas` },
    { icon: Waves, label: "Suítes", value: `${suites || 2} suítes` },
  ];

  const amenitiesList =
    amenities && amenities.length > 0
      ? amenities
      : [
          "Piscina aquecida",
          "Churrasqueira gourmet",
          "Armários planejados",
          "Jardim paisagístico",
          "Sistema de segurança",
          "Aquecimento solar",
        ];

  const detailsData = {
    subtitle: subtitle || "Uma residência projetada para oferecer máximo conforto e sofisticação",
    paragraphs: paragraphs || [
      "Esta magnífica residência combina elegância contemporânea com funcionalidade excepcional. Localizada em uma das áreas mais valorizadas de Ibiporã, oferece privacidade e tranquilidade sem abrir mão da proximidade com os principais pontos da cidade.",
      "Cada ambiente foi cuidadosamente planejado para proporcionar conforto e bem-estar, com acabamentos de primeira qualidade e tecnologia integrada em todos os cômodos.",
    ],
  };

  return (
    <section id="imovel" className="py-16 px-4 bg-[#1C1C1C]">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Detalhes do Imóvel" subtitle={detailsData.subtitle} />

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.label}
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

        {/* Description and Amenities */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[#BFB4AA] mb-4">Sobre o Imóvel</h3>
            {detailsData.paragraphs.map((paragraph: string, index: number) => (
              <p key={index} className="text-white leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[#BFB4AA] mb-4">Diferenciais</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {amenitiesList.map((amenity: string, index: number) => (
                <motion.div
                  key={amenity}
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
        </div>
      </div>
    </section>
  );
}
