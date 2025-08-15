"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionTitle({ title, subtitle, className = "" }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`text-center mb-8 ${className}`}
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#BFB4AA] mb-2">{title}</h2>
      {subtitle && <p className="text-white text-sm md:text-base max-w-2xl mx-auto">{subtitle}</p>}
    </motion.div>
  );
}
