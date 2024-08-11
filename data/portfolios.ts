import { PortfolioCardTypes } from "@/types/PortfolioCardTypes";
import { portfoliosWebsite } from "@/data/portfolio/portfoliosWebsite";
import { portfoliosMobile } from "@/data/portfolio/portfoliosMobile";
import { portfoliosUIUX } from "@/data/portfolio/portfoliosUIUX";
import { portfoliosDesign } from "@/data/portfolio/portfoliosDesign";
import { portfoliosVideo } from "@/data/portfolio/portfoliosVIdeo";

export const portfolios: PortfolioCardTypes[] = [
  ...portfoliosWebsite,
  ...portfoliosMobile,
  ...portfoliosUIUX,
  ...portfoliosDesign,
  ...portfoliosVideo,
];
