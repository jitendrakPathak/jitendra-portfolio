import { portfolioServices } from "@/src/composition/portfolio-services";
import { ProfileSidebar } from "@/src/presentation/portfolio/components/profile-sidebar";
import { WorkCaseGrid } from "@/src/presentation/portfolio/components/work-case-grid";

export default async function HomePage() {
  const [profile, workCases] = await Promise.all([
    portfolioServices.getProfile.execute(),
    portfolioServices.listWorkCases.execute(),
  ]);

  return (
    <div className="portfolio-layout">
      <ProfileSidebar profile={profile} />

      <main className="portfolio-main">
        <WorkCaseGrid workCases={workCases} />
      </main>
    </div>
  );
}
