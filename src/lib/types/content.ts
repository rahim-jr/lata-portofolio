export type HomeSectionHref = "#projects" | "#process" | "#about" | "#contact";

export interface HomeNavItem {
  label: string;
  href: HomeSectionHref;
}

export interface SiteConfig {
  name: string;
  role: string;
  title: string;
  description: string;
  navItems: HomeNavItem[];
}

export interface HeroCta {
  label: string;
  href: HomeSectionHref;
  variant: "accent" | "ghost";
}

export interface HeroContent {
  eyebrow: string;
  label: string;
  title: string;
  summary: string;
  image: {
    src: string;
    alt: string;
    sizes: string;
  };
  ctas: HeroCta[];
}

export interface ProjectItem {
  slug: string;
  type: string;
  title: string;
  summary: string;
  thumbnail: string;
  ctaLabel: string;
}

export interface ProjectsContent {
  title: string;
  items: ProjectItem[];
}

export interface AboutTimelineItem {
  id: string;
  period: string;
  description: string;
}

export interface AboutContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  bioTitle: string;
  bioSummary: string;
  bioFocus: string;
  timelineTitle: string;
  timeline: AboutTimelineItem[];
}

export interface ProcessStep {
  order: number;
  label: string;
}

export interface ProcessContent {
  eyebrow: string;
  title: string;
  skillsTitle: string;
  skills: string[];
  toolsTitle: string;
  tools: string[];
  processTitle: string;
  steps: ProcessStep[];
  testimonialsTitle: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
}

export interface ContactLinkItem {
  label: string;
  value: string;
  href?: string;
}

export interface ContactContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  responseBadge: string;
  cardTitle: string;
  cardSummary: string;
  links: ContactLinkItem[];
}
