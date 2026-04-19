import Link from "next/link";
import type { PortfolioProfile } from "@/src/domain/portfolio/entities/profile";
import { SocialLinkList } from "@/src/presentation/portfolio/components/social-link-list";

interface AboutPageViewProps {
  profile: PortfolioProfile;
}

export function AboutPageView({ profile }: AboutPageViewProps) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="about-shell">
      <div className="about-topbar">
        <Link className="detail-back" href="/">
          ← Back to Home
        </Link>
      </div>

      <article className="about-article">
        <header className="about-header">
          <p>{profile.name}</p>
          <h1>About Jitendra Pathak</h1>
          <span>Lead Engineer at Societe Generale</span>
        </header>

        <section className="about-block">
          <p>
            I combine engineering depth with practical business execution to
            design systems and programs that are reliable, scalable, and outcome-driven.
          </p>
        </section>

        <section className="about-grid">
          <article>
            <h2>Leadership style</h2>
            <p>
              I lead with accountability, communication clarity, and disciplined
              execution planning so teams can move from ideas to measurable delivery.
            </p>
          </article>
          <article>
            <h2>Cross-industry execution</h2>
            <p>
              My work spans banking, transport, tours, and business development,
              with a strong focus on consistency, customer outcomes, and growth.
            </p>
          </article>
          <article>
            <h2>Entrepreneurial mindset</h2>
            <p>
              I collaborate with founders and operators to launch and scale
              businesses through practical strategy and high-ownership execution.
            </p>
          </article>
        </section>

        <section className="about-metrics">
          <p>10+ years industry experience</p>
          <p>5 years entrepreneurship</p>
          <p>Delivery + growth focus</p>
        </section>
      </article>

      <footer className="detail-footer">
        <p>
          {profile.name} · © {currentYear}
        </p>
        <SocialLinkList links={profile.links} className="detail-footer-links" />
      </footer>
    </div>
  );
}
