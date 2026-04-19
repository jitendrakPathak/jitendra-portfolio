"use client";

import Link from "next/link";
import type { PortfolioProfile } from "@/src/domain/portfolio/entities/profile";
import type { PortfolioWorkCase } from "@/src/domain/portfolio/entities/work-case";
import { SocialLinkList } from "@/src/presentation/portfolio/components/social-link-list";
import { useUiPreferences } from "@/src/presentation/providers/ui-preferences-provider";
import { UiPreferenceControls } from "@/src/presentation/shared/components/ui-preference-controls";

interface WorkCaseDetailProps {
  workCase: PortfolioWorkCase;
  nextWorkCase: PortfolioWorkCase | null;
  profile: PortfolioProfile;
}

export function WorkCaseDetail({ workCase, nextWorkCase, profile }: WorkCaseDetailProps) {
  const { t } = useUiPreferences();

  return (
    <div className="detail-shell">
      <div className="detail-topbar">
        <Link className="detail-back" href="/">
          ← {t("backToHome")}
        </Link>
        <UiPreferenceControls className="preference-panel detail-preferences" />
      </div>

      <article className="detail-article">
        <div className={`detail-hero tone-${workCase.tone}`}>
          <p>{workCase.category}</p>
          <h1>{workCase.title}</h1>
          <span>{workCase.year}</span>
        </div>

        <section>
          <h2>{t("overview")}</h2>
          <p>{workCase.subtitle}</p>
        </section>

        <section>
          <h2>{t("challenge")}</h2>
          <p>{workCase.challenge}</p>
        </section>

        <section>
          <h2>{t("approach")}</h2>
          <p>{workCase.approach}</p>
        </section>

        <section>
          <h2>{t("impact")}</h2>
          <p>{workCase.impact}</p>
          <ul>
            {workCase.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </section>

        {nextWorkCase ? (
          <Link className="detail-next" href={`/work/${nextWorkCase.slug}`}>
            {t("nextCase")} → {nextWorkCase.title}
          </Link>
        ) : null}
      </article>

      <footer className="detail-footer">
        <p>{profile.name}</p>
        <div className="detail-footer-nav">
          <Link className="detail-about-link" href="/about">
            {t("aboutMe")}
          </Link>
          <SocialLinkList links={profile.links} className="detail-footer-links" />
        </div>
      </footer>
    </div>
  );
}
