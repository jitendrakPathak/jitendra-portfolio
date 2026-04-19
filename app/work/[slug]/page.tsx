import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { portfolioServices } from "@/src/composition/portfolio-services";
import { WorkCaseDetail } from "@/src/presentation/portfolio/components/work-case-detail";

interface WorkCasePageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = await portfolioServices.listWorkCaseSlugs.execute();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: WorkCasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const workCase = await portfolioServices.getWorkCaseBySlug.execute(slug);

  if (!workCase) {
    return {
      title: "Work Case Not Found | Jitendra Pathak",
    };
  }

  return {
    title: `${workCase.title} | Jitendra Pathak`,
    description: workCase.excerpt,
  };
}

export default async function WorkCasePage({ params }: WorkCasePageProps) {
  const { slug } = await params;

  const [workCase, nextWorkCase, profile] = await Promise.all([
    portfolioServices.getWorkCaseBySlug.execute(slug),
    portfolioServices.getNextWorkCase.execute(slug),
    portfolioServices.getProfile.execute(),
  ]);

  if (!workCase) {
    notFound();
  }

  return <WorkCaseDetail workCase={workCase} nextWorkCase={nextWorkCase} profile={profile} />;
}
