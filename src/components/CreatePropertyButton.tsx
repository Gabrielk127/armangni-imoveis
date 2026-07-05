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
      slug: "SO0006-sobrado-jardim-central-park-londrina-pr",
      pageTitle: "Sobrado com 3 Quartos no Jardim Universitário | Londrina, PR",
      whatsappMessage:
        "Olá! Tenho interesse no sobrado de 174m² (SO0006) no Jardim Universitário / Central Park que vi no site.",
      pageDescription:
        "Sobrado novo de 174m² em Londrina. 3 quartos (1 suíte master), 3 vagas, área gourmet com churrasqueira e hidromassagem aquecida. Entrega em Agosto/2025.",
      headerImage:
        "https://res.cloudinary.com/dhptebqcq/image/upload/v1782785228/k2mxtuw4sw6mlqdwyftp.jpg",
      gallery: [
        "https://res.cloudinary.com/dhptebqcq/image/upload/v1782785229/emxh0cswcrlsfdvsfzhm.jpg",
        "https://res.cloudinary.com/dhptebqcq/image/upload/v1782785228/mwdn8grj7df0dge3llig.jpg",
        "https://res.cloudinary.com/dhptebqcq/image/upload/v1782785229/gl7vbt0btpvjmijk8z90.jpg",
        "https://res.cloudinary.com/dhptebqcq/image/upload/v1782785228/gxivkovbc99ghz7gzyqi.jpg",
        "https://res.cloudinary.com/dhptebqcq/image/upload/v1782785228/e2r0sg5qqu7qtjobzqun.jpg",
        "https://res.cloudinary.com/dhptebqcq/image/upload/v1782785229/fyyygdbxoopymsaqvfo3.jpg",
        "https://res.cloudinary.com/dhptebqcq/image/upload/v1782785229/t867oamtyc6jolspbpxw.jpg",
        "https://res.cloudinary.com/dhptebqcq/image/upload/v1782785228/n2hvlgqgi9jtxucpn4on.jpg",
        "https://res.cloudinary.com/dhptebqcq/image/upload/v1782785228/h4zcjradzt7gxxhpxaej.jpg",
      ],
      hero: {
        title: "Sofisticação e Conforto no Jardim Universitário",
        subtitle:
          "Projeto exclusivo com 174m², ambientes integrados e área de lazer com hidromassagem aquecida.",
      },
      details: {
        sectionTitle: "Design Contemporâneo e Funcionalidade",
        sectionDescription:
          "Um imóvel com entrega para Agosto de 2025, pensado para oferecer o máximo de conforto, lazer e praticidade para a sua família.",
        subtitle: "Espaços sociais integrados e uma área gourmet dos sonhos.",
        paragraphs: [
          "Ao entrar, um elegante hall dá as boas-vindas, conduzindo a uma ampla sala de estar e a um lavabo de fino acabamento. A cozinha moderna e planejada conecta-se de forma inteligente aos ambientes, culminando no ponto alto do imóvel: uma área gourmet completa com churrasqueira.",
          "O lazer é garantido com uma hidromassagem com aquecimento já instalada, criando um verdadeiro spa no seu quintal. No piso superior, o refúgio perfeito: 3 quartos bem dimensionados, com destaque para a suíte master que conta com um espaçoso closet e sacada privativa.",
        ],
        descriptionTitle: "Destaques do Imóvel",
        differentiators: [
          "Área Gourmet com Churrasqueira",
          "Hidromassagem Aquecida",
          "Suíte Master com Closet e Sacada",
          "Espaços Sociais Integrados",
          "Garagem para 3 Carros",
          "Lavabo de Fino Acabamento",
        ],
      },
      investment: {
        price: 1195000,
        priceFormatted: "R$ 1.195.000",
        conditions: "Lançamento exclusivo. Previsão de conclusão: Agosto de 2025.",
      },
      location: {
        sectionDescription:
          "Localizado na Rua Guiomar Sophia Panza, entre o Jardim Central Park e Universitário, uma região conhecida pela tranquilidade e proximidade com a UEL.",
        googleMapsUrl:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4503.404110323146!2d-51.19094017521526!3d-23.320871579814124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb5b57f690485f%3A0xf1b0c0f592c2ffbf!2sR.%20Guiomar%20Sophia%20Panza%20-%20Londrina%2C%20PR%2C%2086061-484!5e1!3m2!1spt-BR!2sbr!4v1782785005854!5m2!1spt-BR!2sbr",
        address: "Rua Guiomar Sophia Panza - Jardim Universitário, Londrina/PR",
        nearbyPoints: [
          { icon: "school", label: "UEL (Universidade Estadual de Londrina)", distance: "Prox." },
          { icon: "shopping-bag", label: "Shoppings e Supermercados", distance: "Fácil Acesso" },
          { icon: "store", label: "Comércio e Farmácias", distance: "Prox." },
        ],
        advantages: [
          "Bairro Residencial Calmo",
          "Alta Conveniência",
          "Fácil Acesso ao Centro",
          "Segurança e Tranquilidade",
        ],
      },
      bedrooms: 3,
      bathrooms: 3,
      garageSpots: 3,
      suites: 1,
      totalArea: 180,
      builtArea: 174,
      displayFeatures: [
        {
          label: "Área Construída",
          value: "174m²",
          iconId: "maximize",
        },
        {
          label: "Área do Terreno",
          value: "180m²",
          iconId: "home",
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
          value: "3",
          iconId: "bath",
        },
        {
          label: "Vagas",
          value: "3",
          iconId: "car",
        },
      ],
      amenities: [
        "Hidromassagem Aquecida",
        "Área Gourmet",
        "Churrasqueira",
        "Closet",
        "Sacada Privativa",
        "Lavabo",
      ],
    };
    try {
      // Debug: Log dos dados antes de enviar
      console.log("Dados que serão enviados:", JSON.stringify(propertyJsonData, null, 2));

      const response = await fetch("/api/properties", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(propertyJsonData),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error("Erro da API:", result);
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
