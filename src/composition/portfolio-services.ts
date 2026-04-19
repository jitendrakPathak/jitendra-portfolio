import { GetNextWorkCaseUseCase } from "@/src/application/portfolio/use-cases/get-next-work-case.use-case";
import { GetPortfolioProfileUseCase } from "@/src/application/portfolio/use-cases/get-portfolio-profile.use-case";
import { GetWorkCaseBySlugUseCase } from "@/src/application/portfolio/use-cases/get-work-case-by-slug.use-case";
import { ListWorkCaseSlugsUseCase } from "@/src/application/portfolio/use-cases/list-work-case-slugs.use-case";
import { ListWorkCasesUseCase } from "@/src/application/portfolio/use-cases/list-work-cases.use-case";
import { StaticPortfolioRepository } from "@/src/infrastructure/portfolio/repositories/static-portfolio-repository";

const repository = new StaticPortfolioRepository();

export const portfolioServices = {
  getProfile: new GetPortfolioProfileUseCase(repository),
  listWorkCases: new ListWorkCasesUseCase(repository),
  getWorkCaseBySlug: new GetWorkCaseBySlugUseCase(repository),
  listWorkCaseSlugs: new ListWorkCaseSlugsUseCase(repository),
  getNextWorkCase: new GetNextWorkCaseUseCase(repository),
};
