"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Dumbbell,
  Users,
  Car,
  Waves,
  TreePine,
  ShieldCheck,
  Cake,
  School,
  Hospital,
  ShoppingCart,
  Store,
} from "lucide-react";
import SectionTitle from "@/components/ui/section-title";
import Image from "next/image";
import { PropertyData } from "@/types";

interface CondominiumInfoProps {
  condominiumData?: PropertyData["condominium"];
}

const iconMap = {
  "shield-check": ShieldCheck,
  dumbbell: Dumbbell,
  cake: Cake,
  car: Car,
  water: Waves,
  tree: TreePine,
  school: School,
  hospital: Hospital,
  "shopping-cart": ShoppingCart,
  store: Store,
  shield: Shield,
  users: Users,
} as const;

// Dados padrão caso não venham do Firebase
const defaultAmenities = [
  {
    icon: "shield",
    label: "Segurança 24h",
  },
  {
    icon: "dumbbell",
    label: "Academia",
  },
  {
    icon: "users",
    label: "Salão de Festas",
  },
  { icon: "car", label: "Estacionamento" },
  { icon: "water", label: "Piscina" },
  {
    icon: "tree",
    label: "Área aa",
  },
];

export default function CondominiumInfo({ condominiumData }: CondominiumInfoProps) {
  // Usar dados do Firebase ou dados padrão
  const sectionTitle = condominiumData?.sectionTitle || "Condomínio Residencial Jardins";
  const sectionDescription =
    condominiumData?.sectionDescription || "Infraestrutura completa para seu conforto e bem-estar";
  const image = condominiumData?.image || "/house2.png";
  const descriptionTitle = condominiumData?.descriptionTitle || "Sobre o Condomínio";
  const descriptionParagraphs = condominiumData?.descriptionParagraphs || [
    "O Condomínio Residencial Jardins é reconhecido como um dos mais exclusivos de Ibiporã, oferecendo uma infraestrutura completa e serviços de alta qualidade para seus moradores.",
    "Com apenas 24 lotes, garante privacidade e tranquilidade, além de uma localização estratégica próxima aos principais pontos comerciais e de serviços da cidade.",
  ];
  const amenities = condominiumData?.amenities || defaultAmenities;

  return (
    <section className="py-16 px-4 bg-[#1C1C1C]" id="condominio">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title={sectionTitle} subtitle={sectionDescription} />

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src={image}
              alt="Entrada do condomínio"
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
              width={600}
              height={400}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-[#BFB4AA] mb-4">{descriptionTitle}</h3>
            {descriptionParagraphs.map((paragraph, index) => (
              <p key={index} className="text-white leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((amenity, index) => {
            const IconComponent = iconMap[amenity.icon as keyof typeof iconMap] || Shield;
            return (
              <motion.div
                key={`${amenity.label}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-[#262626] rounded-lg transition-colors"
              >
                <IconComponent className="w-8 h-8 text-[#BFB4AA] mb-3" />
                <h4 className="font-semibold text-white mb-2">{amenity.label}</h4>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
