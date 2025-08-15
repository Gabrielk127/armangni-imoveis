"use client";
import HeroSection from "@/components/hero-section";
import PhotoGallery from "@/components/photo-gallery";
import PropertyDetails from "@/components/property-details";
import PropertyValue from "@/components/property-value";
import CondominiumInfo from "@/components/condominium-info";
import LocationSection from "@/components/location-section";
import VideoSection from "@/components/video-section";
import ContactForm from "@/components/contact-form";
import Header from "@/components/header/header";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="min-h-screen bg-[#1C1C1C]">
        <HeroSection />
        <PhotoGallery />
        <PropertyDetails />
        <PropertyValue />
        <CondominiumInfo />
        <LocationSection />
        <VideoSection />
        <ContactForm />
      </div>
    </main>
  );
}
