"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import SectionTitle from "@/components/ui/section-title";

interface VideoSectionProps {
  title?: string;
  subtitle?: string;
  videoUrl?: string;
  description?: string;
}

export default function VideoSection({
  title,
  subtitle,
  videoUrl,
  description,
}: VideoSectionProps) {
  // Dados padrão se não houver props
  const videoData = {
    title: title || "Tour Virtual",
    subtitle: subtitle || "Conheça cada detalhe da propriedade através do nosso vídeo exclusivo",
    videoUrl: videoUrl || "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description:
      description ||
      "Assista ao tour completo e descubra todos os ambientes desta propriedade única",
  };

  return (
    <section className="py-16 px-4 bg-[#1C1C1C]" id="video">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title={videoData.title} subtitle={videoData.subtitle} />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative aspect-video bg-[#262626] rounded-lg overflow-hidden shadow-2xl"
        >
          <iframe
            src={videoData.videoUrl}
            title={`${videoData.title} - Tour Virtual`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />

          {/* Fallback for when iframe is loading */}
          <div className="absolute inset-0 flex items-center justify-center bg-[#262626]">
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
          <p className="text-[#c9ccd0]">{videoData.description}</p>
        </motion.div>
      </div>
    </section>
  );
}
