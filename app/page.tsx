import type { CSSProperties } from "react";
import { portfolioServices } from "@/src/composition/portfolio-services";
import { ProfileSidebar } from "@/src/presentation/portfolio/components/profile-sidebar";
import { WorkCaseGrid } from "@/src/presentation/portfolio/components/work-case-grid";

function withDelay(delayMs: number): CSSProperties {
  return { "--delay": `${delayMs}ms` } as CSSProperties;
}

export default async function HomePage() {
  const [profile, workCases] = await Promise.all([
    portfolioServices.getProfile.execute(),
    portfolioServices.listWorkCases.execute(),
  ]);

  return (
    <div className="portfolio-layout">
      <ProfileSidebar profile={profile} />

      <main className="portfolio-main">
        <header className="portfolio-header fade-card" style={withDelay(70)}>
          <p className="portfolio-kicker">Portfolio</p>
          <h1>Selected Work</h1>
          <p>
            18 curated cards showcasing multi-industry execution across banking,
            transport, tours, SEO, business development, and entrepreneurship.
          </p>
        </header>

        <WorkCaseGrid workCases={workCases} />
      </main>
    </div>
  );
}
