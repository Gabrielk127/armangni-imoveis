"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle } from "lucide-react";
import SectionTitle from "@/components/ui/section-title";
import Form from "@/components/form"; // 👈 Importa o novo componente de formulário

// A seção agora também recebe o identificador para passar para o formulário
interface ContactSectionProps {
  conversionIdentifier: string;
}

export default function ContactSection({ conversionIdentifier }: ContactSectionProps) {
  return (
    <section id="contato" className="py-16 px-4 bg-[#262626] text-white">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Entre em Contato"
          subtitle="Estamos prontos para ajudá-lo a realizar o seu sonho"
          className="text-white"
        />

        <div className="grid lg:grid-cols-2 gap-12">
          <div className=" md:hidden">
            <Form conversionIdentifier={conversionIdentifier} />
          </div>

          {/* Coluna de Informações de Contato (sem alterações) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Fale Conosco</h3>
              <p className="text-[#c9ccd0] mb-8">
                Nossa equipe especializada está pronta para esclarecer todas as suas dúvidas e
                agendar uma visita personalizada ao imóvel.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-[#BFB4AA]" />
                <div>
                  <p className="font-semibold">Telefone</p>
                  <p className="text-[#c9ccd0]">(43) 99180-7520</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-[#BFB4AA]" />
                <div>
                  <p className="font-semibold">E-mail</p>
                  <p className="text-[#c9ccd0]">contato.armangni@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <MessageCircle className="w-6 h-6 text-[#BFB4AA]" />
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p className="text-[#c9ccd0]">(43) 99180-7520</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="font-semibold mb-3">Horário de Atendimento</h4>
              <div className="text-[#c9ccd0] space-y-1">
                <p>Segunda a Sexta: 8h às 18h</p>
                <p>Sábado: 8h às 12h</p>
                <p>Domingo: Plantão (WhatsApp)</p>
              </div>
            </div>
          </motion.div>

          {/* Coluna do Formulário (agora apenas renderiza o componente Form) */}
          <div className="hidden md:inline-block">
            <Form conversionIdentifier={conversionIdentifier} />
          </div>
        </div>
      </div>
    </section>
  );
}
