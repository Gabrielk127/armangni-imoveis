"use client";

import { useState, useEffect } from "react";
import { Property } from "@/types";
import { getProperties, getPropertyById } from "@/services/propertyService";

export function useProperty(id?: number) {
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProperty() {
      if (!id) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const data = await getPropertyById(id);
        setProperty(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro ao buscar imóvel");
        console.error("Erro ao buscar imóvel:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchProperty();
  }, [id]);

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
        const data = await getProperties();
        setProperties(data);
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
      const data = await getProperties();
      setProperties(data);
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
