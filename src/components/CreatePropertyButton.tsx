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
      slug: `casa-de-exemplo-${Date.now()}`,
      hero: {
        title: "Casa de Exemplo Criada via Botão",
        subtitle: "Um imóvel fantástico gerado automaticamente",
      },
      details: {
        subtitle: "Uma residência criada automaticamente para demonstração",
        paragraphs: [
          "Este é um imóvel de exemplo criado através do botão de teste.",
          "Todos os dados são gerados automaticamente para demonstrar a funcionalidade.",
          "Em uma aplicação real, estes dados viriam de um formulário preenchido pelo usuário.",
        ],
      },
      video: {
        title: "Tour Virtual - Casa de Exemplo",
        subtitle: "Explore cada ambiente desta propriedade única através do nosso vídeo exclusivo",
        videoUrl: "https://www.youtube.com/watch?v=13eja_RYimU", // Vídeo de exemplo sobre imóveis
        description:
          "Assista ao tour completo e conheça todos os detalhes desta propriedade excepcional",
      },
      bedrooms: 3,
      bathrooms: 2,
      garageSpots: 1,
      suites: 1,
      totalArea: 200,
      builtArea: 150,
      displayFeatures: [],
      amenities: [],
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

      setStatusMessage(`Sucesso! Imóvel criado com ID: ${result.propertyId}`);
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
        {isLoading ? "Criando Imóvel..." : "Criar Imóvel de Exemplo"}
      </button>

      {/* Área para exibir mensagens de feedback */}
      {statusMessage && (
        <p className={`text-sm ${isError ? "text-red-500" : "text-green-500"}`}>{statusMessage}</p>
      )}
    </div>
  );
}
