"use client";

// Importar o useState e os ícones de navegação
import { useState } from "react";
import { motion, type PanInfo } from "framer-motion";
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
  SwatchBook,
  Sun,
  Dribbble,
  ChevronLeft,
  ChevronRight,
  Gamepad2,
  Rocket,
  Wine,
  UtensilsCrossed,
  Building,
  ArrowUp,
  Dumbbell as Barbell,
} from "lucide-react";
import SectionTitle from "@/components/ui/section-title";
import Image from "next/image";
import { PropertyData } from "@/types";

interface CondominiumInfoProps {
  condominiumData?: PropertyData["condominium"];
}

const iconMap = {
  "shield-check": ShieldCheck,
  gamepad: Gamepad2,
  barbell: Barbell,
  rocket: Rocket,
  water: Waves,
  "glass-cheers": Wine,
  utensils: UtensilsCrossed,
  building: Building,
  elevator: ArrowUp,
  dumbbell: Dumbbell,
  cake: Cake,
  car: Car,
  tree: TreePine,
  school: School,
  hospital: Hospital,
  "shopping-cart": ShoppingCart,
  store: Store,
  shield: Shield,
  users: Users,
  "swatch-book": SwatchBook,
  sun: Sun,
  dribbble: Dribbble,
} as const;

// Dados padrão caso não venham do Firebase
const defaultAmenities = [
  { icon: "shield", label: "Segurança 24h" },
  { icon: "dumbbell", label: "Academia" },
  { icon: "users", label: "Salão de Festas" },
  { icon: "car", label: "Estacionamento" },
  { icon: "water", label: "Piscina" },
  { icon: "tree", label: "Área Verde" },
];

export default function CondominiumInfo({ condominiumData }: CondominiumInfoProps) {
  // Usar dados do Firebase ou dados padrão
  const sectionTitle = condominiumData?.sectionTitle || "Condomínio Exemplo";
  const sectionDescription =
    condominiumData?.sectionDescription || "Infraestrutura completa para seu conforto e bem-estar";
  const image = condominiumData?.image || "/house2.png";
  const descriptionTitle = condominiumData?.descriptionTitle || "Sobre o Condomínio";
  const descriptionParagraphs = condominiumData?.descriptionParagraphs || [
    "Descrição padrão do condomínio, destacando seus principais atrativos e diferenciais para os moradores.",
  ];
  const amenities = condominiumData?.amenities || defaultAmenities;

  // Adicionar o estado e a lógica para o carrossel
  const [carouselIndex, setCarouselIndex] = useState(0);

  const nextCarousel = () => {
    setCarouselIndex((prev) => (prev + 1) % amenities.length);
  };

  const prevCarousel = () => {
    setCarouselIndex((prev) => (prev - 1 + amenities.length) % amenities.length);
  };

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x > threshold) {
      prevCarousel();
    } else if (info.offset.x < -threshold) {
      nextCarousel();
    }
  };

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

        {/* Carrossel de Amenities para Mobile */}
        <div className="md:hidden">
          <div className="relative overflow-hidden rounded-lg">
            <motion.div
              className="flex"
              animate={{ x: `-${carouselIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
            >
              {amenities.map((amenity, index) => {
                const IconComponent = iconMap[amenity.icon as keyof typeof iconMap] || Shield;
                return (
                  <div key={`${amenity.label}-mob-${index}`} className="w-full flex-shrink-0 px-2">
                    <div className="p-6 bg-[#262626] rounded-lg h-full flex flex-col justify-center items-center">
                      <IconComponent className="w-8 h-8 text-[#BFB4AA] mb-3" />
                      <h4 className="font-semibold text-white mb-2">{amenity.label}</h4>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* Navegação do Carrossel */}
            <button
              onClick={prevCarousel}
              aria-label="Anterior"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextCarousel}
              aria-label="Próximo"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          {/* Indicadores do Carrossel */}
          <div className="flex justify-center space-x-2 mt-4">
            {amenities.map((_, index) => (
              <button
                key={index}
                onClick={() => setCarouselIndex(index)}
                aria-label={`Ir para o item ${index + 1}`}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === carouselIndex ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Grade de Amenities para Desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((amenity, index) => {
            const IconComponent = iconMap[amenity.icon as keyof typeof iconMap] || Shield;
            return (
              <motion.div
                key={`${amenity.label}-desk-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-[#262626] rounded-lg transition-colors h-full"
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
