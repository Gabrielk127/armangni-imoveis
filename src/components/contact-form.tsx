"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SectionTitle from "@/components/ui/section-title";
import CTAButton from "@/components/ui/cta-button";
import { useToast } from "@/hooks/use-toast";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve. Obrigado pelo interesse!",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contato" className="py-16 px-4 bg-[#262626] text-white">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Entre em Contato"
          subtitle="Estamos prontos para ajudá-lo a realizar o seu sonho"
          className="text-white"
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
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
                  <p className="text-[#c9ccd0]">(43) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-[#BFB4AA]" />
                <div>
                  <p className="font-semibold">E-mail</p>
                  <p className="text-[#c9ccd0]">contato@imobiliaria.com.br</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <MessageCircle className="w-6 h-6 text-[#BFB4AA]" />
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p className="text-[#c9ccd0]">(43) 99999-9999</p>
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

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-[#1C1C1C] border-[#1C1C1C] text-white placeholder-[#c9ccd0]"
                />
              </div>

              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Seu e-mail"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-[#1C1C1C] border-[#1C1C1C] text-white placeholder-[#c9ccd0]"
                />
              </div>

              <div>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Seu telefone/WhatsApp"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="bg-[#1C1C1C] border-[#1C1C1C] text-white placeholder-[#c9ccd0]"
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Sua mensagem (opcional)"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="bg-[#1C1C1C] border-[#1C1C1C] text-white placeholder-[#c9ccd0] resize-none"
                />
              </div>

              <CTAButton
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#BFB4AA] hover:bg-[#BFB4AA] text-black py-3 cursor-pointer"
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Mensagem
                  </>
                )}
              </CTAButton>

              <p className="text-xs text-[#c9ccd0] text-center">
                Ao enviar este formulário, você concorda com nossa política de privacidade e
                autoriza o contato para apresentação da proposta.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
