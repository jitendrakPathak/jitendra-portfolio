import Link from "next/link";
import type { PortfolioProfile } from "@/src/domain/portfolio/entities/profile";
import { SocialLinkList } from "@/src/presentation/portfolio/components/social-link-list";

interface ProfileSidebarProps {
  profile: PortfolioProfile;
}

export function ProfileSidebar({ profile }: ProfileSidebarProps) {
  const currentYear = new Date().getFullYear();

  return (
    <aside className="profile-sidebar">
      <div className="profile-head">
        <p className="profile-name">{profile.name}</p>
        <p className="profile-role">Lead Engineer at Societe Generale</p>
        <p className="profile-location">Based in Bengaluru, India</p>
      </div>

      <nav className="profile-about-nav" aria-label="About me">
        <Link className="about-link" href="/about">
          About me
        </Link>
      </nav>

      <SocialLinkList links={profile.links} className="profile-links" />

      <p className="sidebar-copyright">© {currentYear} Jitendra Pathak. All rights reserved.</p>
    </aside>
  );
}
