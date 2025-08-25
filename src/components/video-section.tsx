"use client";

import { Play } from "lucide-react";
import SectionTitle from "@/components/ui/section-title";
import { useEffect, useState } from "react";

interface VideoSectionProps {
  title?: string;
  subtitle?: string;
  videoUrl?: string;
  description?: string;
  sectionDescription?: string;
}

export default function VideoSection({
  title,
  subtitle,
  videoUrl,
  description,
  sectionDescription,
}: VideoSectionProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Dados padrão se não houver props
  const videoData = {
    title: title || "Tour Virtual",
    subtitle:
      subtitle ||
      sectionDescription ||
      "Conheça cada detalhe da propriedade através do nosso vídeo exclusivo",
    videoUrl: videoUrl || "https://www.youtube.com/embed/13eja_RYimU",
    description:
      description ||
      "Assista ao tour completo e descubra todos os ambientes desta propriedade única",
  };

  // Converter URL do YouTube se necessário
  const getEmbedUrl = (url: string) => {
    if (url.includes("youtube.com/watch?v=")) {
      const videoId = url.split("v=")[1]?.split("&")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    if (url.includes("youtu.be/")) {
      const videoId = url.split("youtu.be/")[1]?.split("?")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  };

  const embedUrl = getEmbedUrl(videoData.videoUrl);

  if (!isMounted) {
    return (
      <section className="py-16 px-4 bg-[#1C1C1C]" id="video">
        <div className="max-w-4xl mx-auto">
          <SectionTitle title={videoData.title} subtitle={videoData.subtitle} />
          <div className="relative aspect-video bg-[#262626] rounded-lg overflow-hidden shadow-2xl flex items-center justify-center">
            <div className="text-center text-white">
              <Play className="w-16 h-16 mx-auto mb-4 opacity-80" />
              <p className="text-lg font-medium">Carregando vídeo...</p>
            </div>
          </div>
          <div className="text-center mt-6">
            <p className="text-[#c9ccd0]">{videoData.description}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 bg-[#1C1C1C]" id="video">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title={videoData.title} subtitle={videoData.subtitle} />

        <div className="relative aspect-video bg-[#262626] rounded-lg overflow-hidden shadow-2xl">
          <iframe
            src={embedUrl}
            title={`${videoData.title} - Tour Virtual`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>

        <div className="text-center mt-6">
          <p className="text-[#c9ccd0]">{videoData.description}</p>
        </div>
      </div>
    </section>
  );
}
