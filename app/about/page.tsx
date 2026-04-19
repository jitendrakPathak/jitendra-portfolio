import type { Metadata } from "next";
import { portfolioServices } from "@/src/composition/portfolio-services";
import { AboutPageView } from "@/src/presentation/portfolio/components/about-page-view";

export const metadata: Metadata = {
  title: "About | Jitendra Pathak",
  description:
    "About Jitendra Pathak: Lead Engineer at Societe Generale, based in Bengaluru, with cross-industry execution and entrepreneur mindset.",
};

export default async function AboutPage() {
  const profile = await portfolioServices.getProfile.execute();

  return <AboutPageView profile={profile} />;
}
