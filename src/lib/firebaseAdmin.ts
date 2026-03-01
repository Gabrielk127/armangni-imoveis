// src/lib/firebaseAdmin.ts

import { initializeApp, getApps, cert, App } from "firebase-admin/app";
import { getFirestore, Firestore } from "firebase-admin/firestore";

let adminApp: App | null = null;
let dbAdmin: Firestore | null = null;

function initializeFirebaseAdmin(): App {
  if (adminApp) {
    return adminApp;
  }

  try {
    // // Log das variáveis de ambiente para debug
    // console.log("🔍 Verificando variáveis de ambiente do Firebase:");
    // console.log(
    //   "- FIREBASE_PROJECT_ID:",
    //   process.env.FIREBASE_PROJECT_ID ? "✅ Definida" : "❌ Não encontrada",
    // );
    // console.log(
    //   "- FIREBASE_CLIENT_EMAIL:",
    //   process.env.FIREBASE_CLIENT_EMAIL ? "✅ Definida" : "❌ Não encontrada",
    // );
    // console.log(
    //   "- FIREBASE_PRIVATE_KEY:",
    //   process.env.FIREBASE_PRIVATE_KEY ? "✅ Definida" : "❌ Não encontrada",
    // );

    // Verifica se as variáveis de ambiente necessárias estão presentes
    if (!process.env.FIREBASE_PROJECT_ID) {
      throw new Error("FIREBASE_PROJECT_ID não está definido nas variáveis de ambiente");
    }

    if (!process.env.FIREBASE_CLIENT_EMAIL) {
      throw new Error("FIREBASE_CLIENT_EMAIL não está definido nas variáveis de ambiente");
    }

    if (!process.env.FIREBASE_PRIVATE_KEY) {
      throw new Error("FIREBASE_PRIVATE_KEY não está definido nas variáveis de ambiente");
    }

    // Processa a private key (corrige as quebras de linha caso venham do .env)
    const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n") || "";
    //   "- Private Key processada:",
    //   privateKey.includes("-----BEGIN PRIVATE KEY-----") ? "✅ Válida" : "❌ Inválida",
    // );

    // Verifica se já existe uma instância do Firebase Admin
    const existingApps = getApps();
    if (existingApps.length > 0) {
      adminApp = existingApps[0];
      return adminApp;
    }

    // Configuração do Firebase Admin SDK usando as variáveis de ambiente
    adminApp = initializeApp({
      credential: cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: privateKey,
      }),
      projectId: process.env.FIREBASE_PROJECT_ID,
    });

    console.log("✅ Firebase Admin SDK inicializado com sucesso!");
    return adminApp;
  } catch (error) {
    console.error("❌ Erro ao inicializar Firebase Admin SDK:", error);
    throw error;
  }
}

function getFirestoreAdmin(): Firestore {
  if (!dbAdmin) {
    const app = initializeFirebaseAdmin();
    dbAdmin = getFirestore(app);
  }
  return dbAdmin;
}

// Exporta a função que retorna a instância do Firestore Admin
export { getFirestoreAdmin as dbAdmin };
