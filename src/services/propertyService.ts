import {
  collection,
  serverTimestamp,
  getDocs,
  query,
  where,
  limit,
  getDoc,
  doc,
  orderBy,
  runTransaction,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Property, PropertyData } from "@/types";

/**
 * Obtém o próximo ID incremental para um novo imóvel
 */
async function getNextPropertyId(): Promise<number> {
  try {
    const propertiesCollection = collection(db, "properties");

    // Busca todos os documentos ordenados por ID decrescente para pegar o maior
    const q = query(propertiesCollection, orderBy("id", "desc"), limit(1));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      // Se não há documentos, começa com ID 1
      return 1;
    }

    // Pega o maior ID atual e adiciona 1
    const lastDoc = querySnapshot.docs[0];
    const lastId = lastDoc.data().id as number;
    return lastId + 1;
  } catch (error) {
    console.error("Erro ao buscar próximo ID:", error);
    // Em caso de erro, retorna 1 como fallback
    return 1;
  }
}

export async function createProperty(propertyData: PropertyData) {
  try {
    // Usa uma transação para garantir que o ID seja único
    const result = await runTransaction(db, async (transaction) => {
      const nextId = await getNextPropertyId();

      // Cria referência para o documento com ID numérico como string
      const docRef = doc(db, "properties", nextId.toString());

      // Verifica se o documento já existe (proteção extra)
      const docSnapshot = await transaction.get(docRef);
      if (docSnapshot.exists()) {
        throw new Error("Conflito de ID: documento já existe");
      }

      // Cria o documento com o ID incremental
      const newProperty = {
        id: nextId, // Armazena também como campo para facilitar consultas
        ...propertyData,
        createdAt: serverTimestamp(),
      };

      transaction.set(docRef, newProperty);

      return nextId;
    });

    console.log("Imóvel criado com sucesso! ID:", result);
    return result.toString();
  } catch (error) {
    console.error("Erro ao criar imóvel:", error);
    throw new Error("Não foi possível criar o imóvel.");
  }
}

export async function getProperties(): Promise<Property[]> {
  try {
    const propertiesCollection = collection(db, "properties");
    // Ordena por ID para manter ordem incremental
    const q = query(propertiesCollection, orderBy("id", "asc"));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return [];
    }

    // Mapeia os documentos para o nosso tipo 'Property', incluindo o ID
    const properties: Property[] = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as PropertyData),
    }));

    return properties;
  } catch (error) {
    console.error("Erro ao buscar imóveis:", error);
    throw new Error("Não foi possível buscar os imóveis.");
  }
}

/**
 * Busca um único imóvel pelo seu SLUG.
 * @param slug O slug do imóvel a ser buscado.
 * @returns O objeto do imóvel ou null se não for encontrado.
 */
export async function getPropertyBySlug(slug: string): Promise<Property | null> {
  try {
    const propertiesCollection = collection(db, "properties");
    // Cria uma query para buscar o documento onde o campo 'slug' é igual ao slug fornecido
    const q = query(propertiesCollection, where("slug", "==", slug), limit(1));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.warn(`Nenhum imóvel encontrado com o slug: ${slug}`);
      return null;
    }

    const propertyDoc = querySnapshot.docs[0];

    return {
      id: propertyDoc.id,
      ...(propertyDoc.data() as PropertyData),
    };
  } catch (error) {
    console.error("Erro ao buscar imóvel por slug:", error);
    throw new Error("Não foi possível buscar o imóvel.");
  }
}

/**
 * Busca um único imóvel pelo seu ID numérico.
 * @param id O ID numérico do imóvel.
 * @returns O objeto do imóvel ou null se não for encontrado.
 */
export async function getPropertyById(id: number): Promise<Property | null> {
  try {
    const docRef = doc(db, "properties", id.toString());
    const docSnapshot = await getDoc(docRef);

    if (!docSnapshot.exists()) {
      console.warn(`Nenhum imóvel encontrado com o ID: ${id}`);
      return null;
    }

    return {
      id: docSnapshot.id,
      ...(docSnapshot.data() as PropertyData),
    };
  } catch (error) {
    console.error("Erro ao buscar imóvel por ID:", error);
    throw new Error("Não foi possível buscar o imóvel.");
  }
}
