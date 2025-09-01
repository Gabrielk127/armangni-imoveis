"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; // Adicionado Textarea
import CTAButton from "@/components/ui/cta-button";
import { useToast } from "@/hooks/use-toast";

// O formulário agora aceita um 'conversionIdentifier' para o RD Station
interface FormProps {
  conversionIdentifier: string;
}

export default function Form({ conversionIdentifier }: FormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const rdStationData = {
      event_type: "CONVERSION",
      event_family: "CDP",
      payload: {
        conversion_identifier: conversionIdentifier,
        name: formData.name,
        email: formData.email,
        mobile_phone: formData.phone,
        cf_mensagem: formData.message,
      },
    };

    try {
      const response = await fetch(
        "https://api.rd.services/platform/conversions?api_key=" + process.env.RD_STATION_TOKEN,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(rdStationData),
        },
      );

      if (response.ok) {
        toast({
          title: "Mensagem enviada! ✅",
          description: "Entraremos em contato em breve. Obrigado!",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error("Falha ao enviar os dados.");
      }
    } catch {
      toast({
        title: "Ops! Algo deu errado.",
        description: "Não foi possível enviar sua mensagem.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
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
          className="w-full bg-[#BFB4AA] hover:bg-opacity-90 text-black py-3 cursor-pointer"
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
        <p className="text-xs text-[#c9ccd0] text-center">Seus dados estão seguros conosco.</p>
      </form>
    </motion.div>
  );
}
