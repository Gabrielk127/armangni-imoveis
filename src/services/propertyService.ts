// src/services/propertyService.ts

import { FieldValue } from "firebase-admin/firestore";
import type { QueryDocumentSnapshot, DocumentData } from "firebase-admin/firestore";
import { dbAdmin } from "@/lib/firebaseAdmin"; // <-- Importa a instância do ADMIN
import { Property, PropertyData } from "@/types";

// Criar um novo imóvel usando o SLUG como ID
export async function createProperty(propertyData: PropertyData) {
  try {
    // Obtém a instância do Firestore
    const db = dbAdmin();
    const propertiesCollection = db.collection("properties");

    // Usa o slug como o ID único do documento
    const docRef = propertiesCollection.doc(propertyData.slug);

    const newProperty = {
      ...propertyData,
      createdAt: FieldValue.serverTimestamp(), // Timestamp do servidor
    };

    // 'set' cria o documento com o ID (slug) especificado
    await docRef.set(newProperty);

    console.log("Imóvel criado com sucesso! Slug:", propertyData.slug);
    return propertyData.slug;
  } catch (error) {
    console.error("Erro ao criar imóvel:", error);
    throw new Error("Não foi possível criar o imóvel.");
  }
}

// Buscar todos os imóveis
export async function getProperties(): Promise<Property[]> {
  try {
    // Obtém a instância do Firestore
    const db = dbAdmin();
    const propertiesCollection = db.collection("properties");

    const q = propertiesCollection.orderBy("createdAt", "desc"); // Ordena pelos mais recentes
    const querySnapshot = await q.get();

    if (querySnapshot.empty) {
      return [];
    }

    // Mapeia os documentos para o tipo Property
    const properties: Property[] = querySnapshot.docs.map(
      (doc: QueryDocumentSnapshot<DocumentData>) => ({
        id: doc.id, // O ID agora é o slug
        ...(doc.data() as PropertyData),
      }),
    );

    return properties;
  } catch (error) {
    console.error("Erro ao buscar imóveis:", error);
    throw new Error("Não foi possível buscar os imóveis.");
  }
}

// Buscar um imóvel pelo seu slug
export async function getPropertyBySlug(slug: string): Promise<Property | null> {
  try {
    // Obtém a instância do Firestore
    const db = dbAdmin();
    const propertiesCollection = db.collection("properties");

    const docRef = propertiesCollection.doc(slug);
    const docSnapshot = await docRef.get();

    if (!docSnapshot.exists) {
      console.warn(`Nenhum imóvel encontrado com o slug: ${slug}`);
      return null;
    }

    return {
      id: docSnapshot.id,
      ...(docSnapshot.data() as PropertyData),
    };
  } catch (error) {
    console.error("Erro ao buscar imóvel por slug:", error);
    throw new Error("Não foi possível buscar o imóvel.");
  }
}
