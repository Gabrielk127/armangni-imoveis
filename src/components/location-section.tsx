"use client";

import { motion } from "framer-motion";
import { MapPin, School, Hospital, ShoppingCart, Coffee, Store } from "lucide-react";
import SectionTitle from "@/components/ui/section-title";
import { PropertyData } from "@/types";

interface LocationSectionProps {
  locationData?: PropertyData["location"];
}

const iconMap = {
  school: School,
  hospital: Hospital,
  "shopping-cart": ShoppingCart,
  store: Store,
  coffee: Coffee,
} as const;

// Dados padrão caso não venham do Firebase
const defaultNearbyPlaces = [
  { icon: "school", label: "Colégio Estadual", distance: "500m" },
  { icon: "hospital", label: "Hospital Municipal", distance: "1.2km" },
  { icon: "shopping-cart", label: "Shopping Center", distance: "800m" },
  { icon: "coffee", label: "Centro Comercial", distance: "600m" },
];

const defaultAdvantages = [
  "Fácil acesso às principais vias da cidade",
  "Transporte público próximo",
  "Área residencial consolidada",
  "Proximidade com comércio e serviços",
];

export default function LocationSection({ locationData }: LocationSectionProps) {
  // Usar dados do Firebase ou dados padrão
  const sectionDescription =
    locationData?.sectionDescription || "No coração de Ibiporã, próximo a tudo que você precisa";
  const googleMapsUrl =
    locationData?.googleMapsUrl ||
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.0453060605437!2d-51.21208849999999!3d-23.3503731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb5cf268312f79%3A0xedc7a2398aa01715!2sRoyal%20Park%20Residence%2C%20Londrina%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1756302733536!5m2!1spt-BR!2sbr";
  const address =
    locationData?.address ||
    "Rua das Flores, 123 - Condomínio Residencial Jardins\nIbiporã - PR, 86200-000";
  const nearbyPlaces = locationData?.nearbyPoints || defaultNearbyPlaces;
  const advantages = locationData?.advantages || defaultAdvantages;

  return (
    <section className="py-16 px-4 bg-[#1C1C1C]">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Localização Privilegiada" subtitle={sectionDescription} />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden mt-2">
              <iframe
                src={googleMapsUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do imóvel em Ibiporã, PR"
              />
            </div>
            <div>
              <div className="flex items-center mb-3 mt-8">
                <MapPin className="w-5 h-5 text-emerald-600 mr-2" />
                <h3 className="text-xl font-semibold text-[#BFB4AA]">Endereço</h3>
              </div>
              <p className="text-[#c9ccd0]">
                {address.split("\n").map((line, index) => (
                  <span key={index}>
                    {line}
                    {index < address.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          </motion.div>

          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h4 className="text-lg font-semibold text-[#BFB4AA] mb-4">
                Pontos de Interesse Próximos
              </h4>
              <div className="space-y-3">
                {nearbyPlaces.map((place, index) => {
                  const IconComponent = iconMap[place.icon as keyof typeof iconMap] || MapPin;
                  return (
                    <motion.div
                      key={`${place.label}-${index}`}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-between p-3 bg-[#262626] rounded-lg shadow-sm"
                    >
                      <div className="flex items-center">
                        <IconComponent className="w-5 h-5 text-[#BFB4AA] mr-3" />
                        <span className="text-[#c9ccd0]">{place.label}</span>
                      </div>
                      <span className="text-sm text-[#c9ccd0] font-medium">{place.distance}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="p-4 bg-[#262626] rounded-lg">
              <h4 className="font-semibold text-[#BFB4AA] mb-2">Vantagens da Localização</h4>
              <ul className="text-sm text-[#c9ccd0] space-y-1">
                {advantages.map((advantage, index) => (
                  <li key={index}>• {advantage}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
