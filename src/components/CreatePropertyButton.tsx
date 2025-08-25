"use client";

import { useState } from "react";

// Opcional: Importar o tipo para garantir a consistência dos dados
import { PropertyData } from "@/types";

export default function CreatePropertyButton() {
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleCreateProperty = async () => {
    setIsLoading(true);
    setStatusMessage("");
    setIsError(false);

    const propertyJsonData: PropertyData = {
      slug: `casa-dos-sonhos-condominio-jardins-ibipora-${Date.now()}`,
      pageTitle: "Casa dos Sonhos à Venda em Ibiporã | Condomínio Jardins",
      whatsappMessage:
        "Olá! Tenho interesse na 'Casa dos Sonhos em Ibiporã' que vi no site e gostaria de agendar uma visita ou obter mais informações.",
      pageDescription:
        "Luxo, conforto e uma localização privilegiada. Conheça esta incrível casa de alto padrão no Condomínio Residencial Jardins, um dos bairros mais valorizados de Ibiporã.",
      headerImage: "/images/casa-fachada.jpg",
      gallery: [
        "/images/gallery/piscina.jpg",
        "/images/gallery/area-gourmet.jpg",
        "/images/gallery/sala-de-estar.jpg",
        "/images/gallery/suite-master.jpg",
        "/images/gallery/cozinha-planejada.jpg",
      ],
      hero: {
        title: "Casa dos Sonhos à Venda em Ibiporã | Condomínio Jardins",
        subtitle:
          "Luxo, conforto e uma localização privilegiada. Conheça esta incrível casa de alto padrão no Condomínio Residencial Jardins, um dos bairros mais valorizados de Ibiporã.",
      },
      details: {
        sectionTitle: "Detalhes que Fazem a Diferença",
        sectionDescription:
          "Cada metro quadrado foi pensado para oferecer o máximo de conforto e sofisticação para você e sua família.",
        subtitle:
          "Cada metro quadrado foi pensado para oferecer o máximo de conforto e sofisticação para você e sua família.",
        paragraphs: [
          "Esta residência de alto padrão é a definição de morar bem. Com um design moderno e acabamentos de primeira linha, ela oferece ambientes amplos e integrados, ideais para receber amigos e familiares.",
          "A área externa é um convite ao lazer, com uma piscina aquecida e uma churrasqueira gourmet completa. A casa já conta com armários planejados em todos os cômodos, sistema de segurança e aquecimento solar, unindo praticidade e sustentabilidade.",
        ],
        descriptionTitle: "Sobre o Imóvel",
        differentiators: [
          "Piscina aquecida",
          "Churrasqueira gourmet",
          "Armários planejados",
          "Jardim com paisagismo",
          "Sistema de segurança",
          "Aquecimento solar",
        ],
      },
      video: {
        title: "Tour Virtual - Casa dos Sonhos",
        subtitle: "Faça um tour virtual e apaixone-se por cada detalhe desta casa espetacular.",
        videoUrl: "https://www.youtube.com/embed/13eja_RYimU",
        description:
          "Explore cada ambiente desta propriedade única através do nosso tour virtual em alta definição",
        sectionDescription:
          "Faça um tour virtual e apaixone-se por cada detalhe desta casa espetacular.",
      },
      investment: {
        price: 850000,
        priceFormatted: "R$ 850.000,00",
        conditions: "À vista. Aceita financiamento bancário e parcelamento direto.",
      },
      condominium: {
        sectionTitle: "O Condomínio Residencial Jardins",
        sectionDescription:
          "Viva com segurança e qualidade de vida em um dos melhores condomínios da região.",
        image: "/images/condominio-entrada.jpg",
        descriptionTitle: "Infraestrutura Completa para Sua Família",
        descriptionParagraphs: [
          "O Condomínio Jardins é reconhecido por sua segurança impecável e sua completa estrutura de lazer. Aqui, você encontra tudo o que precisa para viver momentos inesquecíveis.",
        ],
        amenities: [
          { icon: "shield-check", label: "Segurança 24h" },
          { icon: "dumbbell", label: "Academia" },
          { icon: "cake", label: "Salão de Festas" },
          { icon: "car", label: "Estacionamento para Visitantes" },
          { icon: "water", label: "Piscina" },
          { icon: "tree", label: "Área Verde" },
        ],
      },
      // Dados de localização para uso no LocationSection
      location: {
        sectionDescription:
          "Localizado em uma área nobre de Ibiporã, com fácil acesso aos principais pontos da cidade.",
        googleMapsUrl:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14697.123456789!2d-51.0423456!3d-23.2654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eced0b135c6ea1%3A0xc123456789abcdef!2sIbipor%C3%A3%2C%20PR%2C%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1706123456789",
        address: "Condomínio Residencial Jardins\nIbiporã - PR, 86200-000",
        nearbyPoints: [
          { icon: "school", label: "Colégio Estadual de Ibiporã", distance: "5 min" },
          { icon: "hospital", label: "Hospital Municipal", distance: "7 min" },
          { icon: "shopping-cart", label: "Supermercado Condor", distance: "3 min" },
          { icon: "store", label: "Centro Comercial", distance: "10 min" },
        ],
        advantages: [
          "Bairro mais valorizado da cidade",
          "Acesso rápido à BR-369 e PR-445",
          "Rua tranquila e completamente arborizada",
          "Proximidade com Londrina (15 min)",
        ],
      },
      bedrooms: 10,
      bathrooms: 3,
      garageSpots: 2,
      suites: 2,
      totalArea: 450,
      builtArea: 320,
      displayFeatures: [
        {
          label: "Área Total",
          value: "450m²",
          iconId: "home",
        },
        {
          label: "Área Construída",
          value: "320m²",
          iconId: "maximize",
        },
        {
          label: "Quartos",
          value: "10",
          iconId: "users",
        },
        {
          label: "Suítes",
          value: "2",
          iconId: "waves",
        },
        {
          label: "Banheiros",
          value: "3",
          iconId: "bath",
        },
        {
          label: "Vagas",
          value: "2",
          iconId: "car",
        },
      ],
      amenities: [
        "Piscina aquecida",
        "Churrasqueira gourmet",
        "Armários planejados",
        "Jardim com paisagismo",
        "Sistema de segurança",
        "Aquecimento solar",
      ],
    };

    try {
      const response = await fetch("/api/properties", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(propertyJsonData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Ocorreu um erro na API.");
      }

      // 5. Se tudo deu certo, atualiza a mensagem de status com sucesso
      setStatusMessage(`Sucesso! Casa dos Sonhos criada: ${propertyJsonData.slug}`);

      // Opcional: Redirecionar para a página do imóvel criado
      setTimeout(() => {
        window.location.href = `/imovel/${propertyJsonData.slug}`;
      }, 2000); // Aguarda 2 segundos para o usuário ver a mensagem
    } catch (error: unknown) {
      setIsError(true);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Falha ao conectar com o servidor. Tente novamente.";
      setStatusMessage(errorMessage);
      console.error("Erro ao criar imóvel:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <button
        onClick={handleCreateProperty}
        disabled={isLoading}
        className="px-6 py-3 font-bold text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {isLoading ? "Criando Casa dos Sonhos..." : "Criar Casa dos Sonhos"}
      </button>

      {/* Área para exibir mensagens de feedback */}
      {statusMessage && (
        <p className={`text-sm ${isError ? "text-red-500" : "text-green-500"}`}>{statusMessage}</p>
      )}
    </div>
  );
}
