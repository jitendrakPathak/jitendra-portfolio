"use client";

import Link from "next/link";
import type { PortfolioProfile } from "@/src/domain/portfolio/entities/profile";
import { SocialLinkList } from "@/src/presentation/portfolio/components/social-link-list";
import { useUiPreferences } from "@/src/presentation/providers/ui-preferences-provider";
import { UiPreferenceControls } from "@/src/presentation/shared/components/ui-preference-controls";

interface AboutPageViewProps {
  profile: PortfolioProfile;
}

export function AboutPageView({ profile }: AboutPageViewProps) {
  const { t } = useUiPreferences();

  return (
    <div className="about-shell">
      <div className="about-topbar">
        <Link className="detail-back" href="/">
          ← {t("backToHome")}
        </Link>
        <UiPreferenceControls className="preference-panel detail-preferences" />
      </div>

      <article className="about-article">
        <header className="about-header">
          <p>{profile.name}</p>
          <h1>{t("aboutTitle")}</h1>
          <span>{t("leadEngineerRole")}</span>
        </header>

        <section className="about-block">
          <p>{t("aboutIntro")}</p>
        </section>

        <section className="about-grid">
          <article>
            <h2>{t("aboutVisionTitle")}</h2>
            <p>{t("aboutVisionText")}</p>
          </article>
          <article>
            <h2>{t("aboutCraftTitle")}</h2>
            <p>{t("aboutCraftText")}</p>
          </article>
          <article>
            <h2>{t("aboutBuildTitle")}</h2>
            <p>{t("aboutBuildText")}</p>
          </article>
        </section>

        <section className="about-metrics">
          <p>{t("aboutMetricA")}</p>
          <p>{t("aboutMetricB")}</p>
          <p>{t("aboutMetricC")}</p>
        </section>
      </article>

      <footer className="detail-footer">
        <p>{profile.name}</p>
        <SocialLinkList links={profile.links} className="detail-footer-links" />
      </footer>
    </div>
  );
}
