"use client";

import { useUiPreferences } from "@/src/presentation/providers/ui-preferences-provider";

interface UiPreferenceControlsProps {
  className?: string;
}

export function UiPreferenceControls({ className }: UiPreferenceControlsProps) {
  const { theme, setTheme, locale, setLocale, t } = useUiPreferences();

  return (
    <section className={className} aria-label="UI preferences">
      <div className="pref-row">
        <p>{t("theme")}</p>
        <div className="pref-buttons" role="group" aria-label={t("theme")}>
          <button
            type="button"
            className={`pref-button ${theme === "dark" ? "active" : ""}`}
            onClick={() => setTheme("dark")}
          >
            {t("dark")}
          </button>
          <button
            type="button"
            className={`pref-button ${theme === "light" ? "active" : ""}`}
            onClick={() => setTheme("light")}
          >
            {t("light")}
          </button>
        </div>
      </div>

      <div className="pref-row">
        <p>{t("language")}</p>
        <div className="pref-buttons" role="group" aria-label={t("language")}>
          <button
            type="button"
            className={`pref-button ${locale === "en" ? "active" : ""}`}
            onClick={() => setLocale("en")}
          >
            {t("english")}
          </button>
          <button
            type="button"
            className={`pref-button ${locale === "hi" ? "active" : ""}`}
            onClick={() => setLocale("hi")}
          >
            {t("hindi")}
          </button>
        </div>
      </div>
    </section>
  );
}
