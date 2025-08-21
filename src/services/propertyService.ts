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

async function getNextPropertyId(): Promise<number> {
  //Ainda está com id incremental, vou fazer com slug
  try {
    const propertiesCollection = collection(db, "properties");

    const q = query(propertiesCollection, orderBy("id", "desc"), limit(1));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return 1;
    }

    const lastDoc = querySnapshot.docs[0];
    const lastId = lastDoc.data().id as number;
    return lastId + 1;
  } catch (error) {
    console.error("Erro ao buscar próximo ID:", error);
    return 1;
  }
}

export async function createProperty(propertyData: PropertyData) {
  try {
    const result = await runTransaction(db, async (transaction) => {
      const nextId = await getNextPropertyId();

      const docRef = doc(db, "properties", nextId.toString());

      const docSnapshot = await transaction.get(docRef);
      if (docSnapshot.exists()) {
        throw new Error("Conflito de ID: documento já existe");
      }

      const newProperty = {
        id: nextId,
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
    const q = query(propertiesCollection, orderBy("id", "asc"));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return [];
    }

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

export async function getPropertyBySlug(slug: string): Promise<Property | null> {
  try {
    // slug para usar no futuro
    const propertiesCollection = collection(db, "properties");
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
