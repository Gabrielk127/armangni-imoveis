import type { FC } from "react";
import { FaWhatsapp } from "react-icons/fa";

interface FloatingWhatsAppButtonProps {
  phoneNumber: string;
  whatsappMessage?: string;
  defaultMessage?: string;
  className?: string;
}

const FloatingWhatsAppButton: FC<FloatingWhatsAppButtonProps> = ({
  phoneNumber,
  whatsappMessage,
  defaultMessage = "Olá! Gostaria de mais informações sobre este imóvel.",
  className = "",
}) => {
  // Usar mensagem do Firebase ou mensagem padrão
  const message = whatsappMessage || defaultMessage;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
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
        hover:bg-green-600 transition-colors
        ${className}
      `}
    >
      {/* Ícone do WhatsApp */}
      <FaWhatsapp className="h-9 w-9" />
    </a>
  );
};

export default FloatingWhatsAppButton;
