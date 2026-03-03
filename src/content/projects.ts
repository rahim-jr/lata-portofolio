import type { ProjectsContent } from "@/lib/types/content";

export const projectsContent: ProjectsContent = {
  title: "Featured Projects",
  items: [
    {
      slug: "ledgerflow-platform-redesign",
      type: "Fintech Web App",
      title: "LedgerFlow Platform Redesign",
      summary:
        "A complete product refresh that improved task completion and clarified complex finance workflows for teams.",
      thumbnail: "/image.png",
      ctaLabel: "View Case Study",
    },
    {
      slug: "nordpanel-analytics-workspace",
      type: "B2B SaaS Product",
      title: "NordPanel Analytics Workspace",
      summary:
        "An insight-first interface that streamlined reporting and helped teams move from raw metrics to decisions faster.",
      thumbnail: "/image.png",
      ctaLabel: "View Case Study",
    },
  ],
};
