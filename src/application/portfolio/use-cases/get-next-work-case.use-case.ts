import type { PortfolioWorkCase } from "@/src/domain/portfolio/entities/work-case";
import type { PortfolioRepository } from "@/src/domain/portfolio/repositories/portfolio-repository";

export class GetNextWorkCaseUseCase {
  constructor(private readonly repository: PortfolioRepository) {}

  async execute(slug: string): Promise<PortfolioWorkCase | null> {
    const workCases = await this.repository.listWorkCases();
    const currentIndex = workCases.findIndex((item) => item.slug === slug);

    if (currentIndex === -1) {
      return null;
    }

    const nextIndex = (currentIndex + 1) % workCases.length;
    return workCases[nextIndex] ?? null;
  }
}
