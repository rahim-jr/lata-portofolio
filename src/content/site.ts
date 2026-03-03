import type { SiteConfig } from "@/lib/types/content";

export const siteConfig: SiteConfig = {
  name: "Mina Nord",
  role: "Product Designer",
  title: "Mina Nord | UX Portfolio",
  description:
    "Portfolio frontend in Next.js with matching light and dark mode canvases, project showcase, process, and contact.",
  navItems: [
    { label: "Work", href: "#projects" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
};
