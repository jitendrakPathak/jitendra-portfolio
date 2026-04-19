import type { PortfolioWorkCase } from "@/src/domain/portfolio/entities/work-case";
import { WorkCaseCard } from "@/src/presentation/portfolio/components/work-case-card";

interface WorkCaseGridProps {
  workCases: readonly PortfolioWorkCase[];
}

export function WorkCaseGrid({ workCases }: WorkCaseGridProps) {
  return (
    <section className="work-grid" aria-label="Work cases">
      {workCases.map((workCase, index) => (
        <WorkCaseCard key={workCase.slug} workCase={workCase} index={index} />
      ))}
    </section>
  );
}
