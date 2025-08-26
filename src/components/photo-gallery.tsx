"use client";

import { useState } from "react";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import SectionTitle from "@/components/ui/section-title";

interface PhotoGalleryProps {
  gallery?: string[];
}

// Fotos padrão como fallback
const defaultPhotos = [
  { id: 1, src: "/house.png", alt: "Sala de estar" },
  { id: 2, src: "/house2.png", alt: "Cozinha gourmet" },
  { id: 3, src: "/house.png", alt: "Suíte master" },
  { id: 4, src: "/house2.png", alt: "Área de lazer" },
  { id: 5, src: "/house.png", alt: "Banheiro" },
  { id: 6, src: "/house2.png", alt: "Fachada" },
];

export default function PhotoGallery({ gallery }: PhotoGalleryProps) {
  // Converte as URLs do Firebase em objetos de foto ou usa as fotos padrão
  const photos =
    gallery && gallery.length > 0
      ? gallery.map((url, index) => ({
          id: index + 1,
          src: url,
          alt: `Imagem ${index + 1} da propriedade`,
        }))
      : defaultPhotos;

  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setSelectedPhoto(photos[index].id);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  const nextPhoto = () => {
    const newIndex = (currentIndex + 1) % photos.length;
    setCurrentIndex(newIndex);
    setSelectedPhoto(photos[newIndex].id);
  };

  const prevPhoto = () => {
    const newIndex = (currentIndex - 1 + photos.length) % photos.length;
    setCurrentIndex(newIndex);
    setSelectedPhoto(photos[newIndex].id);
  };

  const nextCarousel = () => {
    setCarouselIndex((prev) => (prev + 1) % photos.length);
  };

  const prevCarousel = () => {
    setCarouselIndex((prev) => (prev - 1 + photos.length) % photos.length);
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
    <section className="py-16 px-4 bg-[#1C1C1C]" id="galeria">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Galeria de Fotos"
          className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent"
          subtitle="Conheça cada detalhe desta propriedade única"
        />

        {/* Mobile Carousel */}
        <div className="md:hidden mb-8">
          <div className="relative overflow-hidden rounded-lg">
            <motion.div
              className="flex"
              animate={{ x: `-${carouselIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
            >
              {photos.map((photo, index) => (
                <div
                  key={photo.id}
                  className="relative w-full flex-shrink-0 aspect-[4/3] cursor-pointer"
                  onClick={() => openModal(index)}
                >
                  <Image
                    src={photo.src || "/placeholder.svg"}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </motion.div>

            {/* Carousel Navigation */}
            <button
              onClick={prevCarousel}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextCarousel}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <ChevronRight size={20} />
            </button>

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {photos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCarouselIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === carouselIndex ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Photo Counter */}
          <div className="text-center mt-4">
            <span className="text-sm text-gray-600">
              {carouselIndex + 1} de {photos.length}
            </span>
          </div>
        </div>

        {/* Desktop/Tablet Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => openModal(index)}
            >
              <Image
                src={photo.src || "/placeholder.svg"}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 1024px) 33vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 sm:p-4"
              onClick={closeModal}
            >
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ type: "spring", stiffness: 260, damping: 25 }}
                className="relative w-full max-w-6xl h-[70vh] sm:h-[75vh] md:h-[80vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.div
                  className="relative w-full h-full"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(_, info) => {
                    if (info.offset.x > 80) prevPhoto();
                    else if (info.offset.x < -80) nextPhoto();
                  }}
                >
                  <Image
                    src={photos[currentIndex].src || "/placeholder.svg"}
                    alt={`${photos[currentIndex].alt} (${currentIndex + 1} de ${photos.length})`}
                    fill
                    priority
                    className="object-contain md:object-cover rounded-lg select-none"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 80vw, 100vw"
                  />
                </motion.div>

                {/* Gradient overlays para legibilidade */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/60 to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />

                {/* Fechar */}
                <button
                  aria-label="Fechar"
                  onClick={closeModal}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white/90 hover:text-white transition-colors"
                >
                  <X size={32} />
                </button>

                {/* Navegação Desktop */}
                <button
                  aria-label="Anterior"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevPhoto();
                  }}
                  className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors"
                >
                  <ChevronLeft size={56} />
                </button>
                <button
                  aria-label="Próxima"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextPhoto();
                  }}
                  className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors"
                >
                  <ChevronRight size={56} />
                </button>

                {/* Dots Mobile */}
                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 md:hidden">
                  {photos.map((p, i) => (
                    <button
                      key={p.id}
                      aria-label={`Ir para foto ${i + 1}`}
                      onClick={() => {
                        setCurrentIndex(i);
                        setSelectedPhoto(photos[i].id);
                      }}
                      className={`h-2 rounded-full transition-all ${
                        i === currentIndex ? "w-6 bg-white" : "w-2 bg-white/50"
                      }`}
                    />
                  ))}
                </div>

                {/* Contador */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs sm:text-sm tracking-wide text-white/90 bg-black/40 backdrop-blur px-4 py-1.5 rounded-full shadow-lg">
                  {currentIndex + 1} / {photos.length}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
