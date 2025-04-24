// Type definitions for static data

export interface ValueProposition {
  title: string;
  description: string;
  highlight: string;
}

export interface NavigationLink {
  name: string;
  href: string;
}

export interface FooterLink {
  name: string;
  href: string;
  badge?: {
    text: string;
    color: string;
  };
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface CompanyInfo {
  name: string;
  description: string;
  copyright: string;
}

export interface HeroContent {
  subtitle: string;
  title: string;
  description: string;
}

export interface SectionHeader {
  title: string;
  subtitle: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface TeamSectionContent {
  title: string;
  subtitle: string;
  description: string;
}
