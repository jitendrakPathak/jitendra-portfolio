"use client";

import Link from "next/link";
import type { PortfolioProfile } from "@/src/domain/portfolio/entities/profile";
import { SocialLinkList } from "@/src/presentation/portfolio/components/social-link-list";
import { useUiPreferences } from "@/src/presentation/providers/ui-preferences-provider";
import { UiPreferenceControls } from "@/src/presentation/shared/components/ui-preference-controls";

interface ProfileSidebarProps {
  profile: PortfolioProfile;
}

export function ProfileSidebar({ profile }: ProfileSidebarProps) {
  const { t } = useUiPreferences();

  return (
    <aside className="profile-sidebar">
      <div className="profile-head">
        <p className="profile-name">{profile.name}</p>
        <p className="profile-role">{t("leadEngineerRole")}</p>
        <p className="profile-location">{t("basedInBengaluru")}</p>
      </div>

      <UiPreferenceControls className="preference-panel" />

      <nav className="profile-about-nav" aria-label={t("aboutMe")}>
        <Link className="about-link" href="/about">
          {t("goToAbout")}
        </Link>
      </nav>

      <SocialLinkList links={profile.links} className="profile-links" />
    </aside>
  );
}
