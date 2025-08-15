"use client";

import { motion } from "framer-motion";
import { CreditCard, Calendar, TrendingUp } from "lucide-react";
import SectionTitle from "@/components/ui/section-title";
import CTAButton from "@/components/ui/cta-button";

export default function PropertyValue() {
  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 px-4 bg-[#262626]">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          title="Investimento"
          subtitle="Uma oportunidade única no mercado imobiliário de Ibiporã"
        />

        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#BFB4AA]">
              R$ 850.000
            </span>
            <p className="text-[#c9ccd0] mt-2">Valor à vista</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center p-6 bg-[#1C1C1C] rounded-lg shadow-sm"
          >
            <CreditCard className="w-8 h-8 mx-auto mb-3 text-[#BFB4AA]" />
            <h4 className="font-semibold text-white mb-2">Financiamento</h4>
            <p className="text-sm text-[#c9ccd0]">
              Aceita financiamento bancário com entrada a partir de 20%
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center p-6 bg-[#1C1C1C] rounded-lg shadow-sm"
          >
            <Calendar className="w-8 h-8 mx-auto mb-3 text-[#BFB4AA]" />
            <h4 className="font-semibold text-white mb-2">Parcelamento</h4>
            <p className="text-sm text-[#c9ccd0]">
              Possibilidade de parcelamento direto com o proprietário
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center p-6 bg-[#1C1C1C] rounded-lg shadow-sm"
          >
            <TrendingUp className="w-8 h-8 mx-auto mb-3 text-[#BFB4AA]" />
            <h4 className="font-semibold text-white mb-2">Valorização</h4>
            <p className="text-sm text-[#c9ccd0]">
              Região em constante valorização com alta demanda
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <CTAButton
            onClick={scrollToContact}
            size="lg"
            className="bg-[#bebebe] text-black px-8 py-3 text-lg cursor-pointer"
          >
            Solicitar Proposta
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
}
