import type { PortfolioProfile } from "@/src/domain/portfolio/entities/profile";

interface SocialLinkListProps {
  links: PortfolioProfile["links"];
  className?: string;
}

export function SocialLinkList({ links, className }: SocialLinkListProps) {
  return (
    <ul className={className}>
      {links.map((link) => (
        <li key={link.label}>
          <a href={link.href} target="_blank" rel="noreferrer">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
