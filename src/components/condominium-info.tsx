"use client";

import { motion } from "framer-motion";
import { Shield, Dumbbell, Users, Car, Waves, TreePine } from "lucide-react";
import SectionTitle from "@/components/ui/section-title";
import Image from "next/image";

const amenities = [
  {
    icon: Shield,
    title: "Segurança 24h",
    description: "Portaria com controle de acesso",
  },
  {
    icon: Dumbbell,
    title: "Academia",
    description: "Equipamentos modernos e completos",
  },
  {
    icon: Users,
    title: "Salão de Festas",
    description: "Espaço para eventos e comemorações",
  },
  { icon: Car, title: "Estacionamento", description: "Vagas para visitantes" },
  { icon: Waves, title: "Piscina", description: "Área aquática com deck" },
  {
    icon: TreePine,
    title: "Área Verde",
    description: "Jardins e espaços de convivência",
  },
];

export default function CondominiumInfo() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Condomínio Residencial Jardins"
          subtitle="Infraestrutura completa para seu conforto e bem-estar"
        />

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src="/house2.png"
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Sobre o Condomínio
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              O Condomínio Residencial Jardins é reconhecido como um dos mais
              exclusivos de Ibiporã, oferecendo uma infraestrutura completa e
              serviços de alta qualidade para seus moradores.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Com apenas 24 lotes, garante privacidade e tranquilidade, além de
              uma localização estratégica próxima aos principais pontos
              comerciais e de serviços da cidade.
            </p>
          </motion.div>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <amenity.icon className="w-8 h-8 text-emerald-600 mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">
                {amenity.title}
              </h4>
              <p className="text-sm text-gray-600">{amenity.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
