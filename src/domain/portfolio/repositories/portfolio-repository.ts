import type { PortfolioProfile } from "@/src/domain/portfolio/entities/profile";
import type { PortfolioWorkCase } from "@/src/domain/portfolio/entities/work-case";

export interface PortfolioRepository {
  getProfile(): Promise<PortfolioProfile>;
  listWorkCases(): Promise<readonly PortfolioWorkCase[]>;
  findWorkCaseBySlug(slug: string): Promise<PortfolioWorkCase | null>;
}
