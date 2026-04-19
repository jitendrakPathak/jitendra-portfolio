export type ProfileLinkKind = "social" | "coding";

export interface ProfileLink {
  readonly label: string;
  readonly href: string;
  readonly kind: ProfileLinkKind;
}

export interface PortfolioProfile {
  readonly name: string;
  readonly role: string;
  readonly location: string;
  readonly summary: string;
  readonly links: readonly ProfileLink[];
}
