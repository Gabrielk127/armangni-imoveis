"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import SectionTitle from "@/components/ui/section-title";

export default function VideoSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          title="Tour Virtual"
          subtitle="Conheça cada detalhe da propriedade através do nosso vídeo exclusivo"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-2xl"
        >
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Tour Virtual - Casa dos Sonhos em Ibiporã"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />

          {/* Fallback for when iframe is loading */}
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
            <div className="text-center text-white">
              <Play className="w-16 h-16 mx-auto mb-4 opacity-80" />
              <p className="text-lg font-medium">Carregando vídeo...</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-6"
        >
          <p className="text-gray-600">
            Assista ao tour completo e descubra todos os ambientes desta
            propriedade única
          </p>
        </motion.div>
      </div>
    </section>
  );
}
