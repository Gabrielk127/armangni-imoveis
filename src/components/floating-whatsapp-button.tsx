import type { FC } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

interface FloatingWhatsAppButtonProps {
  phoneNumber: string;
  defaultMessage?: string;
  className?: string;
}

const imovel = "exemplo";

const FloatingWhatsAppButton: FC<FloatingWhatsAppButtonProps> = ({
  phoneNumber,
  defaultMessage = `Olá! Gostaria de mais informações sobre o imóvel: ${imovel}`,
  className = "",
}) => {
  const encodedMessage = encodeURIComponent(defaultMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className={`
        fixed bottom-6 right-6 z-50
        flex items-center justify-center gap-3
        bg-green-500 text-white font-bold
        rounded-full shadow-lg
        cursor-pointer
        py-3 px-4
        ${className}
      `}
    >
      {/* Ícone do WhatsApp */}
      <FaWhatsapp className="h-9 w-9" />
    </motion.a>
  );
};

export default FloatingWhatsAppButton;
