import type { PortfolioProfile } from "@/src/domain/portfolio/entities/profile";
import type { PortfolioWorkCase } from "@/src/domain/portfolio/entities/work-case";
import type { PortfolioRepository } from "@/src/domain/portfolio/repositories/portfolio-repository";
import { PROFILE_DATA } from "@/src/infrastructure/portfolio/data/profile-data";
import { WORK_CASE_DATA } from "@/src/infrastructure/portfolio/data/work-case-data";

export class StaticPortfolioRepository implements PortfolioRepository {
  async getProfile(): Promise<PortfolioProfile> {
    return PROFILE_DATA;
  }

  async listWorkCases(): Promise<readonly PortfolioWorkCase[]> {
    return WORK_CASE_DATA;
  }

  async findWorkCaseBySlug(slug: string): Promise<PortfolioWorkCase | null> {
    const found = WORK_CASE_DATA.find((item) => item.slug === slug);
    return found ?? null;
  }
}
