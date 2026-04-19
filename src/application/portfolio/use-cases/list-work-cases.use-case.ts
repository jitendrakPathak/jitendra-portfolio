import type { PortfolioWorkCase } from "@/src/domain/portfolio/entities/work-case";
import type { PortfolioRepository } from "@/src/domain/portfolio/repositories/portfolio-repository";

export class ListWorkCasesUseCase {
  constructor(private readonly repository: PortfolioRepository) {}

  async execute(): Promise<readonly PortfolioWorkCase[]> {
    return this.repository.listWorkCases();
  }
}
