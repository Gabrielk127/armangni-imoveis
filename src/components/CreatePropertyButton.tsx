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
      slug: "AP0177-florais-eco-resort-londrina-pr",
      pageTitle: "Apartamento no Florais Eco Resort | Gleba Palhano, Londrina",
      whatsappMessage:
        "Olá! Tenho interesse no apartamento 1701 no Florais Eco Resort, na Gleba Palhano, que vi no site e gostaria de mais informações. https://armangniimoveis.com.br/imovel/AP0009-florais-eco-resort-londrina-pr",
      pageDescription:
        "Apartamento de 75m² na Gleba Palhano, Florais Eco Resort. 3 quartos (1 suíte), completo em móveis planejados, 2 vagas. Lazer incomparável com piscinas, boliche, quadra de tênis e mais.",
      headerImage:
        "https://res.cloudinary.com/dhptebqcq/image/upload/v1756901334/hqiwe6aupbzhcbko7jxj.jpg",
      gallery: [
        "https://res.cloudinary.com/dhptebqcq/image/upload/v1756901335/w2p4jt6zmhmkzaes2dwt.jpg",
        "https://res.cloudinary.com/dhptebqcq/image/upload/v1756901334/va2l9yunqlpnclslpuup.jpg",
        "https://res.cloudinary.com/dhptebqcq/image/upload/v1756901334/nxyelc5dgzno9ailmyr0.jpg",
        "https://res.cloudinary.com/dhptebqcq/image/upload/v1756901334/uqzxs7gvktzigjufxbxx.jpg",
        "https://res.cloudinary.com/dhptebqcq/image/upload/v1756901334/wl2ti22qwhssdzaku1t7.jpg",
        "https://res.cloudinary.com/dhptebqcq/image/upload/v1756901334/xaxnaiozfi4utab2v6sh.jpg",
      ],
      hero: {
        title: "Viva a Experiência de um Resort Urbano no Florais Eco Resort",
        subtitle:
          "Apartamento com 3 quartos, móveis planejados e a mais completa área de lazer de Londrina.",
      },
      details: {
        sectionTitle: "Conforto e Sofisticação com Móveis Planejados",
        sectionDescription:
          "Este incrível apartamento, totalmente equipado com móveis planejados de excelente qualidade, oferece o equilíbrio perfeito entre conforto e praticidade para o seu dia a dia.",
        subtitle: "Cozinha funcional e sala ampla para seus melhores momentos.",
        paragraphs: [
          "A cozinha funcional foi totalmente planejada para otimizar seu tempo, com armários modernos e design inteligente. A sala ampla é um ambiente espaçoso e aconchegante, ideal para receber amigos e familiares ou relaxar confortavelmente.",
          "A área íntima conta com 3 dormitórios, sendo 1 suíte, bem distribuídos para garantir privacidade e bem-estar para toda a família. O imóvel ainda oferece a comodidade de 2 vagas de garagem.",
        ],
        descriptionTitle: "Diferenciais do Apartamento",
        differentiators: [
          "Completo em Móveis Planejados",
          "Cozinha Funcional e Moderna",
          "2 Vagas de Garagem",
          "Andar Alto (17º andar)",
          "Localização Premium na Gleba Palhano",
        ],
      },
      video: {
        title: "Vídeo",
        subtitle: "Conheça o seu novo estilo de vida.",
        videoUrl: "https://www.youtube.com/watch?v=gAFyhlXjE4Y",
        description: "Explore todos os ambientes.",
        sectionDescription: "Assista ao vídeo e veja tudo que o imóvel e o condomínio oferecem.",
      },
      investment: {
        price: 850000,
        priceFormatted: "R$ 850.000,00",
        conditions: "Excelente investimento em um dos condomínios mais desejados de Londrina.",
      },
      condominium: {
        sectionTitle: "Florais Eco Resort: Mais de 40 Opções de Lazer",
        sectionDescription:
          "Prepare-se para um novo conceito de viver bem. O Florais é referência em lazer, esporte e qualidade de vida, com uma estrutura de clube incomparável em 8.400 m².",
        image:
          "https://res.cloudinary.com/dhptebqcq/image/upload/v1756821876/c083bc24-91b1-44b0-acaf-6e109222e6b3.jpg",
        descriptionTitle: "Infraestrutura Completa para Todas as Idades",
        descriptionParagraphs: [
          "Aqui você encontra desde uma academia de alto padrão, spa e piscinas, até espaços exclusivos na cidade, como Boliche e Autorama, além de conveniências como salão de beleza e home office.",
        ],
        amenities: [
          { icon: "shield-check", label: "Portaria 24h" },
          { icon: "barbell", label: "Academia de Alto Padrão" },
          { icon: "swatch-book", label: "Quadra de Tênis" },
          { icon: "cake", label: "4 Salões de Festa" },
          { icon: "briefcase", label: "2 Escritórios Home Office" },
          { icon: "scissors", label: "Salão de Beleza" },
          { icon: "coffee", label: "Salão de Chá" },
          { icon: "water", label: "Piscinas Externas" },
          { icon: "fire", label: "Piscina Aquecida com Raia" },
        ],
      },
      location: {
        sectionDescription:
          "Localizado no coração da Gleba Palhano, o bairro mais valorizado e desejado de Londrina, próximo a shoppings, restaurantes e serviços.",
        googleMapsUrl:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.5199556955968!2d-51.1796225!3d-23.333169800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb5cb4abebc3d9%3A0x7badf9e688bb1041!2sFlorais%20Eco%20Resort%20%26%20Residence!5e0!3m2!1spt-BR!2sbr!4v1756820995735!5m2!1spt-BR!2sbr",
        address: "Rua Eurico Hummig, 255 - Gleba Palhano, Londrina - PR",
        nearbyPoints: [
          { icon: "shopping-bag", label: "Shopping Aurora", distance: "Prox." },
          { icon: "leaf", label: "Lago Igapó", distance: "Prox." },
          { icon: "store", label: "Supermercados", distance: "Prox." },
          { icon: "utensils", label: "Restaurantes", distance: "Prox." },
        ],
        advantages: [
          "Endereço na Gleba Palhano",
          "Bairro de altíssima valorização",
          "Próximo aos principais pontos da Zona Sul",
          "Infraestrutura completa no entorno",
        ],
      },
      bedrooms: 3,
      bathrooms: 2,
      garageSpots: 2,
      suites: 1,
      totalArea: 132.23,
      builtArea: 75,
      displayFeatures: [
        {
          label: "Área Total",
          value: "132,23m²",
          iconId: "home",
        },
        {
          label: "Área Útil",
          value: "75m²",
          iconId: "maximize",
        },
        {
          label: "Quartos",
          value: "3",
          iconId: "users",
        },
        {
          label: "Suítes",
          value: "1",
          iconId: "waves",
        },
        {
          label: "Banheiros",
          value: "2",
          iconId: "bath",
        },
        {
          label: "Vagas",
          value: "2",
          iconId: "car",
        },
      ],
      amenities: ["Completo em Móveis Planejados", "Cozinha Funcional"],
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

      setStatusMessage(`Sucesso! Casa dos Sonhos criada: ${propertyJsonData.slug}`);

      setTimeout(() => {
        window.location.href = `/imovel/${propertyJsonData.slug}`;
      }, 2000);
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
        {isLoading ? "Criando Casa" : "Criar"}
      </button>

      {statusMessage && (
        <p className={`text-sm ${isError ? "text-red-500" : "text-green-500"}`}>{statusMessage}</p>
      )}
    </div>
  );
}
