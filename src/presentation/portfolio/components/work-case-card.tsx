import Link from "next/link";
import type { CSSProperties } from "react";
import type { PortfolioWorkCase } from "@/src/domain/portfolio/entities/work-case";

interface WorkCaseCardProps {
  workCase: PortfolioWorkCase;
  index: number;
}

function withDelay(ms: number): CSSProperties {
  return { "--delay": `${ms}ms` } as CSSProperties;
}

export function WorkCaseCard({ workCase, index }: WorkCaseCardProps) {
  return (
    <Link
      href={`/work/${workCase.slug}`}
      className={`work-card tone-${workCase.tone} fade-card`}
      style={withDelay(90 + index * 40)}
      aria-label={`Open ${workCase.title}`}
    >
      <span className="work-card-arrow" aria-hidden>
        ↗
      </span>

      <div className="work-card-content">
        <h2>{workCase.title}</h2>
        <p>&ldquo;{workCase.excerpt}&rdquo;</p>
      </div>
    </Link>
  );
}
