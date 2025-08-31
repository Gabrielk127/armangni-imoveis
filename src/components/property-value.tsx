"use client";

import { CreditCard, Calendar, TrendingUp } from "lucide-react";
import SectionTitle from "@/components/ui/section-title";
import CTAButton from "@/components/ui/cta-button";
import { PropertyData } from "@/types";

interface PropertyValueProps {
  investmentData?: PropertyData["investment"];
}

export default function PropertyValue({ investmentData }: PropertyValueProps) {
  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  const priceFormatted = investmentData?.priceFormatted || "R$ 850.000";
  const conditions =
    investmentData?.conditions || "À vista. Aceita financiamento bancário e parcelamento direto.";

  return (
    <section className="py-16 px-4 bg-[#262626]">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          title="Investimento"
          subtitle="Uma oportunidade única no mercado imobiliário de Ibiporã"
        />

        <div className="text-center mb-8">
          <div className="inline-block">
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#BFB4AA]">
              {priceFormatted}
            </span>
            <p className="text-[#c9ccd0] mt-2">Valor à vista</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-[#1C1C1C] rounded-lg shadow-sm">
            <CreditCard className="w-8 h-8 mx-auto mb-3 text-[#BFB4AA]" />
            <h4 className="font-semibold text-white mb-2">Financiamento</h4>
          </div>

          <div className="text-center p-6 bg-[#1C1C1C] rounded-lg shadow-sm">
            <Calendar className="w-8 h-8 mx-auto mb-3 text-[#BFB4AA]" />
            <h4 className="font-semibold text-white mb-2">Parcelamento</h4>
          </div>

          <div className="text-center p-6 bg-[#1C1C1C] rounded-lg shadow-sm">
            <TrendingUp className="w-8 h-8 mx-auto mb-3 text-[#BFB4AA]" />
            <h4 className="font-semibold text-white mb-2">Valorização</h4>
          </div>
        </div>

        {/* Seção de condições personalizadas do Firebase */}
        {conditions &&
          conditions !== "À vista. Aceita financiamento bancário e parcelamento direto." && (
            <div className="mb-8 p-6 bg-[#1C1C1C] rounded-lg">
              <h4 className="font-semibold text-[#BFB4AA] mb-3 text-center">
                Condições de Pagamento
              </h4>
              <p className="text-[#c9ccd0] text-center">{conditions}</p>
            </div>
          )}

        <div className="text-center">
          <CTAButton
            onClick={scrollToContact}
            size="lg"
            className="bg-[#bebebe] text-black px-8 py-3 text-lg cursor-pointer hover:bg-[#a0a0a0] transition-colors"
          >
            Solicitar Proposta
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
