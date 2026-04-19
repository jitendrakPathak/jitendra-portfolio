import Image from "next/image";
import type { PortfolioProfile } from "@/src/domain/portfolio/entities/profile";
import { SocialLinkList } from "@/src/presentation/portfolio/components/social-link-list";

interface ProfileSidebarProps {
  profile: PortfolioProfile;
}

export function ProfileSidebar({ profile }: ProfileSidebarProps) {
  return (
    <aside className="profile-sidebar">
      <div className="profile-head">
        <Image
          src="/jp-monogram.svg"
          alt="Jitendra Pathak monogram"
          width={48}
          height={48}
          className="profile-logo"
          priority
        />
        <p className="profile-name">{profile.name}</p>
        <p className="profile-role">{profile.role}</p>
        <p className="profile-location">{profile.location}</p>
      </div>

      <div className="profile-about">
        <p className="profile-section-title">About me</p>
        <p>{profile.summary}</p>
      </div>

      <SocialLinkList links={profile.links} className="profile-links" />
    </aside>
  );
}
