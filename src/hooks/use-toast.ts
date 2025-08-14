"use client";

// Hook de toast unificado: expõe API simples (toast({...})) usando 'sonner'.
// Facilita futura migração ou extensão (ex: variantes, ações, etc.).
import { useCallback } from "react";
import { toast as sonner } from "sonner";

export interface ToastOptions {
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  duration?: number; // ms
  icon?: React.ReactNode;
}

export function useToast() {
  const toast = useCallback((opts: ToastOptions) => {
    const { title, description, actionLabel, onAction, duration, icon } = opts;
    sonner(title, {
      description,
      duration: duration ?? 4000,
      icon,
      action:
        actionLabel && onAction
          ? {
              label: actionLabel,
              onClick: onAction,
            }
          : undefined,
    });
  }, []);

  return { toast };
}

export type { ToastOptions as UseToastOptions };
