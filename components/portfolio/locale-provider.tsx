"use client";

import {createContext, useContext, useEffect, useMemo, useState} from "react";
import type {Locale} from "@/app/content";

type LocaleContextValue = {
  locale: Locale;
  automatic: boolean;
  toggleLocale: () => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({children}: {children: React.ReactNode}) {
  const [locale, setLocale] = useState<Locale>("en");
  const [automatic, setAutomatic] = useState(true);

  useEffect(() => {
    const saved = window.localStorage.getItem("fk-language");
    if (saved === "fr" || saved === "en") {
      setLocale(saved);
      setAutomatic(false);
      return;
    }
    setLocale(navigator.language.toLowerCase().startsWith("fr") ? "fr" : "en");
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    if (!automatic) return;
    const timer = window.setInterval(() => {
      setLocale(current => current === "fr" ? "en" : "fr");
    }, 24000);
    return () => window.clearInterval(timer);
  }, [automatic]);

  const value = useMemo<LocaleContextValue>(() => ({
    locale,
    automatic,
    toggleLocale: () => {
      setLocale(current => {
        const next = current === "fr" ? "en" : "fr";
        window.localStorage.setItem("fk-language", next);
        return next;
      });
      setAutomatic(false);
    },
  }), [automatic, locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) throw new Error("useLocale must be used inside LocaleProvider");
  return context;
}
