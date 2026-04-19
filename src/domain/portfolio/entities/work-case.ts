export type WorkCaseTone =
  | "teal"
  | "amber"
  | "violet"
  | "blue"
  | "rose"
  | "mint";

export interface PortfolioWorkCase {
  readonly slug: string;
  readonly title: string;
  readonly subtitle: string;
  readonly excerpt: string;
  readonly category: string;
  readonly year: string;
  readonly tone: WorkCaseTone;
  readonly challenge: string;
  readonly approach: string;
  readonly impact: string;
  readonly highlights: readonly string[];
}
