"use client";

import { motion } from "framer-motion";
import { Home, Bath, Car, Maximize, Users, Waves } from "lucide-react";
import SectionTitle from "@/components/ui/section-title";

const features = [
  { icon: Home, label: "Área Total", value: "450m²" },
  { icon: Maximize, label: "Área Construída", value: "320m²" },
  { icon: Users, label: "Quartos", value: "4 quartos" },
  { icon: Bath, label: "Banheiros", value: "3 banheiros" },
  { icon: Car, label: "Garagem", value: "2 vagas" },
  { icon: Waves, label: "Suítes", value: "2 suítes" },
];

const amenities = [
  "Piscina aquecida",
  "Churrasqueira gourmet",
  "Armários planejados",
  "Jardim paisagístico",
  "Sistema de segurança",
  "Aquecimento solar",
];

export default function PropertyDetails() {
  return (
    <section id="details" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Detalhes do Imóvel"
          subtitle="Uma residência projetada para oferecer máximo conforto e sofisticação"
        />

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <feature.icon className="w-8 h-8 mx-auto mb-2 text-emerald-600" />
              <p className="font-semibold text-gray-900 text-sm">{feature.value}</p>
              <p className="text-xs text-gray-600">{feature.label}</p>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Sobre o Imóvel</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Esta magnífica residência combina elegância contemporânea com funcionalidade
              excepcional. Localizada em uma das áreas mais valorizadas de Ibiporã, oferece
              privacidade e tranquilidade sem abrir mão da proximidade com os principais pontos da
              cidade.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Cada ambiente foi cuidadosamente planejado para proporcionar conforto e bem-estar, com
              acabamentos de primeira qualidade e tecnologia integrada em todos os cômodos.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Diferenciais</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {amenities.map((amenity, index) => (
                <motion.div
                  key={amenity}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-2 text-gray-700"
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
