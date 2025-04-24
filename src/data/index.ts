import {
  ValueProposition,
  NavigationLink,
  FooterSection,
  CompanyInfo,
  HeroContent,
  SectionHeader,
  TeamMember,
  TeamSectionContent,
} from "../types/data";

export const valuePropositions: ValueProposition[] = [
  {
    title: "We are commited",
    description:
      "Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration.",
    highlight: "commited",
  },
  {
    title: "We are responsible",
    description:
      "Mass market iPhone buzz conversion analytics stock iteration responsive web design user experience business plan handshake. Return on investment seed round MVP hacking supply chain.",
    highlight: "responsible",
  },
  {
    title: "We aim for progress",
    description:
      "Bootstrapping rockstar first mover advantage business model canvas alpha deployment launch party beta facebook metrics gamification growth hacking customer focus.",
    highlight: "progress",
  },
];

export const navigationLinks: NavigationLink[] = [
  { name: "Product", href: "#product" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
];

export const footerSections: FooterSection[] = [
  {
    title: "Landings",
    links: [
      { name: "Home", href: "#" },
      { name: "Products", href: "#" },
      { name: "Services", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "Home", href: "#" },
      {
        name: "Careers",
        href: "#careers",
        badge: { text: "Hiring!", color: "green" },
      },
      { name: "Services", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "#" },
      { name: "Products", href: "#" },
      { name: "Services", href: "#" },
    ],
  },
];

export const companyInfo: CompanyInfo = {
  name: "Boldo",
  description:
    "Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.",
  copyright: "All rights reserved.",
};

export const heroContent: HeroContent = {
  subtitle: "About",
  title: "We love to make great things, things that matter.",
  description:
    "Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.",
};

export const valuePropositionHeader: SectionHeader = {
  title: "Value proposition accelerator product management venture",
  subtitle: "Our Blog",
};

export const teamSectionContent: TeamSectionContent = {
  title: "The people behind the work",
  subtitle: "Our team",
  description:
    "Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus.",
};

export const topTeamMembers: TeamMember[] = [
  {
    name: "Michael Scott",
    role: "General Manager",
    image: "/images/team/img1.png",
  },
  {
    name: "Michael Scott",
    role: "General Manager",
    image: "/images/team/img1.png",
  },
  {
    name: "Michael Scott",
    role: "General Manager",
    image: "/images/team/img1.png",
  },
];

export const bottomTeamMembers: TeamMember[] = [
  {
    name: "Dwight Schrute",
    role: "General Manager",
    image: "/images/team/img2.png",
  },
  {
    name: "Pam Beetsley",
    role: "General Manager",
    image: "/images/team/img3.png",
  },
  {
    name: "Pam Beetsley",
    role: "General Manager",
    image: "/images/team/img3.png",
  },
  {
    name: "Pam Beetsley",
    role: "General Manager",
    image: "/images/team/img3.png",
  },
];
