import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Casa dos Sonhos - Ibiporã, PR",
  description:
    "Luxo, conforto e localização privilegiada em um dos bairros mais valorizados de Ibiporã",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <SpeedInsights />
      <head>
        <style>{`
        `}</style>
      </head>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
