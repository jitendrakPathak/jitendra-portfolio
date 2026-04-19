import type { PortfolioProfile } from "@/src/domain/portfolio/entities/profile";

export const PROFILE_DATA: PortfolioProfile = {
  name: "Jitendra Pathak",
  role: "Lead Engineer at Societe Generale",
  location: "Based in Bengaluru, India",
  summary:
    "Engineering leader focused on building robust, scalable systems and practical growth outcomes.",
  links: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jitendrakumarpathak",
      kind: "social",
    },
    {
      label: "X / Twitter",
      href: "https://x.com/himali_boy",
      kind: "social",
    },
    {
      label: "GitHub",
      href: "https://github.com/jitendrakPathak",
      kind: "coding",
    },
    {
      label: "LeetCode",
      href: "https://leetcode.com/u/jitendrakpathak/",
      kind: "coding",
    },
    {
      label: "HackerRank",
      href: "https://www.hackerrank.com/profile/jitendrapathako1",
      kind: "coding",
    },
    {
      label: "Stack Overflow",
      href: "https://stackoverflow.com/users/10345966/jitendra",
      kind: "coding",
    },
  ],
};
