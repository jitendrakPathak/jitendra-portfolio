import type { PortfolioRepository } from "@/src/domain/portfolio/repositories/portfolio-repository";

export class ListWorkCaseSlugsUseCase {
  constructor(private readonly repository: PortfolioRepository) {}

  async execute(): Promise<readonly string[]> {
    const workCases = await this.repository.listWorkCases();
    return workCases.map((item) => item.slug);
  }
}
