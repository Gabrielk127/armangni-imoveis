"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Sparkles, Building2 } from "lucide-react";
import Header from "@/components/header/header";
import HeroSection from "@/components/hero-section";
import PropertyDetails from "@/components/property-details";
import PhotoGallery from "@/components/photo-gallery";
import LocationSection from "@/components/location-section";
import PropertyValue from "@/components/property-value";
import CondominiumInfo from "@/components/condominium-info";
import VideoSection from "@/components/video-section";
import VerticalVideoSection from "@/components/vertical-video-section";
import FloatingWhatsAppButton from "@/components/floating-whatsapp-button";
import ContactSection from "@/components/contact-form";
import Form from "@/components/form";
import { PHONE_NUMBER } from "@/lib/constants";
import { PropertyData } from "@/types";

interface PropertyViewProps {
  property: PropertyData;
  useVerticalVideo?: boolean;
}

export default function PropertyView({ property, useVerticalVideo = false }: PropertyViewProps) {
  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {!isUnlocked ? (
        <motion.main
          key="locked-gate"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="min-h-screen bg-[#1C1C1C] flex flex-col text-white"
        >
          <Header hasCondominium={!!property.condominium} hasVideo={!!property.video?.videoUrl} />

          <div className="flex-1 flex items-center justify-center py-12 px-4">
            <div className="max-w-2xl w-full">
              {/* Header Title Preview */}
              <div className="text-center mb-8">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#BFB4AA]/20 text-[#BFB4AA] border border-[#BFB4AA]/30 mb-4">
                  <Lock className="w-3.5 h-3.5" />
                  Acesso Restrito ao Imóvel
                </span>
                <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-3">
                  {property.hero?.title || "Imóvel Exclusivo"}
                </h1>
                <p className="text-sm md:text-base text-gray-300 max-w-lg mx-auto">
                  Para visualizar todos os detalhes, fotos em alta resolução, valores e localização,
                  por favor preencha seus dados abaixo.
                </p>
              </div>

              {/* Form Card */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="bg-[#262626] border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                  <div className="p-2.5 rounded-xl bg-[#BFB4AA]/10 text-[#BFB4AA]">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-white">Cadastre-se para continuar</h2>
                    <p className="text-xs text-gray-400">
                      Liberar acesso completo instantaneamente
                    </p>
                  </div>
                </div>

                <Form conversionIdentifier={property.slug} onSuccess={() => setIsUnlocked(true)} />
              </motion.div>

              {/* Trust Badge */}
              <div className="mt-6 text-center text-xs text-gray-400 flex items-center justify-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#BFB4AA]" />
                <span>Armangni Imóveis &bull; Atendimento exclusivo e personalizado</span>
              </div>
            </div>
          </div>
        </motion.main>
      ) : (
        <motion.main
          key="unlocked-content"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-gray-50"
        >
          <Header hasCondominium={!!property.condominium} hasVideo={!!property.video?.videoUrl} />
          <FloatingWhatsAppButton
            phoneNumber={PHONE_NUMBER}
            whatsappMessage={property.whatsappMessage}
          />
          <HeroSection
            title={property.hero?.title}
            subtitle={property.hero?.subtitle}
            headerImage={property.headerImage}
          />

          <PropertyDetails
            subtitle={property.details?.subtitle}
            paragraphs={property.details?.paragraphs}
            bedrooms={property.bedrooms}
            bathrooms={property.bathrooms}
            garageSpots={property.garageSpots}
            suites={property.suites}
            totalArea={property.totalArea}
            builtArea={property.builtArea}
            displayFeatures={property.displayFeatures}
            amenities={property.amenities}
          />

          <PhotoGallery gallery={property.gallery} />
          <LocationSection locationData={property.location} />
          {property.investment && <PropertyValue investmentData={property.investment} />}
          {property.condominium && <CondominiumInfo condominiumData={property.condominium} />}
          {property.video?.videoUrl &&
            (useVerticalVideo ? (
              <VerticalVideoSection
                title={property.video.title}
                subtitle={property.video.subtitle}
                videoUrl={property.video.videoUrl}
                description={property.video.description}
                sectionDescription={property.video.sectionDescription}
              />
            ) : (
              <VideoSection
                title={property.video.title}
                subtitle={property.video.subtitle}
                videoUrl={property.video.videoUrl}
                description={property.video.description}
                sectionDescription={property.video.sectionDescription}
              />
            ))}
          <ContactSection conversionIdentifier={property.slug} />
        </motion.main>
      )}
    </AnimatePresence>
  );
}
