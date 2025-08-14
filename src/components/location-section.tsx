"use client";

import { motion } from "framer-motion";
import { MapPin, School, Hospital, ShoppingCart, Coffee } from "lucide-react";
import SectionTitle from "@/components/ui/section-title";

const nearbyPlaces = [
  { icon: School, name: "Colégio Estadual", distance: "500m" },
  { icon: Hospital, name: "Hospital Municipal", distance: "1.2km" },
  { icon: ShoppingCart, name: "Shopping Center", distance: "800m" },
  { icon: Coffee, name: "Centro Comercial", distance: "600m" },
];

export default function LocationSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Localização Privilegiada"
          subtitle="No coração de Ibiporã, próximo a tudo que você precisa"
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.123456789!2d-51.0123456!3d-23.2654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDE1JzU1LjYiUyA1McKwMDAnNDQuNCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do imóvel em Ibiporã, PR"
              />
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
              <div className="flex items-center mb-3">
                <MapPin className="w-5 h-5 text-emerald-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">Endereço</h3>
              </div>
              <p className="text-gray-600">
                Rua das Flores, 123
                <br />
                Condomínio Residencial Jardins
                <br />
                Ibiporã - PR, 86200-000
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Pontos de Interesse Próximos
              </h4>
              <div className="space-y-3">
                {nearbyPlaces.map((place, index) => (
                  <motion.div
                    key={place.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm"
                  >
                    <div className="flex items-center">
                      <place.icon className="w-5 h-5 text-emerald-600 mr-3" />
                      <span className="text-gray-700">{place.name}</span>
                    </div>
                    <span className="text-sm text-gray-500 font-medium">{place.distance}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-emerald-50 rounded-lg">
              <h4 className="font-semibold text-emerald-800 mb-2">Vantagens da Localização</h4>
              <ul className="text-sm text-emerald-700 space-y-1">
                <li>• Fácil acesso às principais vias da cidade</li>
                <li>• Transporte público próximo</li>
                <li>• Área residencial consolidada</li>
                <li>• Proximidade com comércio e serviços</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
