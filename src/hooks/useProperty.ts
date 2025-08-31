"use client";

import { useState, useEffect } from "react";
import { Property } from "@/types";
// importações removidas, pois não devem ser usadas no client

export function useProperty(slug?: string) {
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProperty() {
      if (!slug) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`/api/properties/${slug}`);
        if (!response.ok) throw new Error("Erro ao buscar imóvel");
        const data = await response.json();
        setProperty(data.property);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro ao buscar imóvel");
        console.error("Erro ao buscar imóvel:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchProperty();
  }, [slug]);

  return { property, loading, error };
}

export function useProperties() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProperties() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch("/api/properties");
        if (!response.ok) throw new Error("Erro ao buscar imóveis");
        const data = await response.json();
        setProperties(data.properties || data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro ao buscar imóveis");
        console.error("Erro ao buscar imóveis:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchProperties();
  }, []);

  const refetch = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("/api/properties");
      if (!response.ok) throw new Error("Erro ao buscar imóveis");
      const data = await response.json();
      setProperties(data.properties || data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao buscar imóveis");
      console.error("Erro ao buscar imóveis:", err);
    } finally {
      setLoading(false);
    }
  };

  return { properties, loading, error, refetch };
}

export function useFirstProperty() {
  const { properties, loading, error } = useProperties();
  const firstProperty = properties.length > 0 ? properties[0] : null;

  return { property: firstProperty, loading, error };
}
