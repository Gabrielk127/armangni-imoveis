"use client";

import { motion } from "framer-motion";
import CTAButton from "@/components/ui/cta-button";
import CreatePropertyButton from "./CreatePropertyButton";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
}

export default function HeroSection({ title, subtitle }: HeroSectionProps) {
  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  // Dados padrão se não houver props
  const heroData = {
    title: title || "Casa dos Sonhos",
    subtitle:
      subtitle ||
      "Luxo, conforto e localização privilegiada em um dos bairros mais valorizados da cidade",
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="inicio"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/house2.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-[#BFB4AA]"
        >
          {heroData.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto"
        >
          {heroData.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <CTAButton
            onClick={scrollToContact}
            size="lg"
            className="bg-[#bebebe] cursor-pointer text-black px-8 py-3 text-lg"
          >
            Entrar em Contato
          </CTAButton>
          <CreatePropertyButton />
          <CTAButton
            variant="default"
            size="lg"
            className="text-white cursor-pointer px-8 py-3 text-lg bg-[#4a4949]"
            onClick={() =>
              document.getElementById("imovel")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Saiba Mais
          </CTAButton>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-white rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
}
