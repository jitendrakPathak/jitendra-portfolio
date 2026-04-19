import Link from "next/link";
import type { PortfolioProfile } from "@/src/domain/portfolio/entities/profile";
import type { PortfolioWorkCase } from "@/src/domain/portfolio/entities/work-case";
import { SocialLinkList } from "@/src/presentation/portfolio/components/social-link-list";

interface WorkCaseDetailProps {
  workCase: PortfolioWorkCase;
  nextWorkCase: PortfolioWorkCase | null;
  profile: PortfolioProfile;
}

export function WorkCaseDetail({ workCase, nextWorkCase, profile }: WorkCaseDetailProps) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="detail-shell">
      <div className="detail-topbar">
        <Link className="detail-back" href="/">
          ← Back to Home
        </Link>
      </div>

      <article className="detail-article">
        <div className={`detail-hero tone-${workCase.tone}`}>
          <p>{workCase.category}</p>
          <h1>{workCase.title}</h1>
          <span>{workCase.year}</span>
        </div>

        <section>
          <h2>Overview</h2>
          <p>{workCase.subtitle}</p>
        </section>

        <section>
          <h2>Challenge</h2>
          <p>{workCase.challenge}</p>
        </section>

        <section>
          <h2>Approach</h2>
          <p>{workCase.approach}</p>
        </section>

        <section>
          <h2>Impact</h2>
          <p>{workCase.impact}</p>
          <ul>
            {workCase.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </section>

        {nextWorkCase ? (
          <Link className="detail-next" href={`/work/${nextWorkCase.slug}`}>
            Next Case → {nextWorkCase.title}
          </Link>
        ) : null}
      </article>

      <footer className="detail-footer">
        <p>
          {profile.name} · © {currentYear}
        </p>
        <div className="detail-footer-nav">
          <Link className="detail-about-link" href="/about">
            About me
          </Link>
          <SocialLinkList links={profile.links} className="detail-footer-links" />
        </div>
      </footer>
    </div>
  );
}
