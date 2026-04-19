import type { PortfolioWorkCase } from "@/src/domain/portfolio/entities/work-case";
import type { PortfolioRepository } from "@/src/domain/portfolio/repositories/portfolio-repository";

export class GetWorkCaseBySlugUseCase {
  constructor(private readonly repository: PortfolioRepository) {}

  async execute(slug: string): Promise<PortfolioWorkCase | null> {
    return this.repository.findWorkCaseBySlug(slug);
  }
}
