"use client"; // ESSENCIAL: Marca este como um Componente de Cliente

import { useState } from "react";

// Opcional: Importar o tipo para garantir a consistência dos dados
import { PropertyData } from "@/types";

export default function CreatePropertyButton() {
  // Estados para controlar o carregamento e as mensagens de feedback
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleCreateProperty = async () => {
    // 1. Inicia o estado de carregamento e limpa mensagens antigas
    setIsLoading(true);
    setStatusMessage("");
    setIsError(false);

    // 2. Os dados do imóvel que queremos enviar (hardcoded para este exemplo)
    // Em uma aplicação real, isso viria de um formulário.
    const propertyJsonData: PropertyData = {
      slug: `casa-de-exemplo-${Date.now()}`, // Slug dinâmico para evitar duplicatas
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
      // 3. Faz a chamada 'fetch' para a nossa API Route
      const response = await fetch("/api/properties", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(propertyJsonData),
      });

      // Transforma a resposta em JSON
      const result = await response.json();

      // 4. Verifica se a resposta da API foi um erro (status 4xx ou 5xx)
      if (!response.ok) {
        // Se a API retornou um erro, joga um erro para ser pego pelo 'catch'
        throw new Error(result.message || "Ocorreu um erro na API.");
      }

      // 5. Se tudo deu certo, atualiza a mensagem de status com sucesso
      setStatusMessage(`Sucesso! Imóvel criado com ID: ${result.propertyId}`);
    } catch (error: unknown) {
      // 6. Se ocorrer qualquer erro (rede, API, etc.), atualiza a mensagem
      setIsError(true);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Falha ao conectar com o servidor. Tente novamente.";
      setStatusMessage(errorMessage);
      console.error("Erro ao criar imóvel:", error);
    } finally {
      // 7. SEMPRE executa isso, independente de sucesso ou erro
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
