"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { MESSAGES, type Locale, type MessageKey } from "@/src/presentation/i18n/messages";

type Theme = "dark" | "light";

interface UiPreferencesContextValue {
  theme: Theme;
  setTheme: (value: Theme) => void;
  locale: Locale;
  setLocale: (value: Locale) => void;
  t: (key: MessageKey) => string;
}

const UiPreferencesContext = createContext<UiPreferencesContextValue | null>(null);

const THEME_KEY = "jp_theme";
const LOCALE_KEY = "jp_locale";

interface UiPreferencesProviderProps {
  children: ReactNode;
}

function getInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return "dark";
  }

  const storedTheme = window.localStorage.getItem(THEME_KEY);
  if (storedTheme === "dark" || storedTheme === "light") {
    return storedTheme;
  }

  return "dark";
}

function getInitialLocale(): Locale {
  if (typeof window === "undefined") {
    return "en";
  }

  const storedLocale = window.localStorage.getItem(LOCALE_KEY);
  if (storedLocale === "en" || storedLocale === "hi") {
    return storedLocale;
  }

  return "en";
}

export function UiPreferencesProvider({ children }: UiPreferencesProviderProps) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [locale, setLocale] = useState<Locale>(getInitialLocale);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem(LOCALE_KEY, locale);
  }, [locale]);

  const t = useCallback(
    (key: MessageKey) => {
      return MESSAGES[locale][key] ?? MESSAGES.en[key];
    },
    [locale],
  );

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      locale,
      setLocale,
      t,
    }),
    [theme, locale, t],
  );

  return <UiPreferencesContext.Provider value={value}>{children}</UiPreferencesContext.Provider>;
}

export function useUiPreferences() {
  const value = useContext(UiPreferencesContext);

  if (!value) {
    throw new Error("useUiPreferences must be used within UiPreferencesProvider");
  }

  return value;
}
