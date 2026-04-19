import type { PortfolioProfile } from "@/src/domain/portfolio/entities/profile";
import type { PortfolioRepository } from "@/src/domain/portfolio/repositories/portfolio-repository";

export class GetPortfolioProfileUseCase {
  constructor(private readonly repository: PortfolioRepository) {}

  async execute(): Promise<PortfolioProfile> {
    return this.repository.getProfile();
  }
}
