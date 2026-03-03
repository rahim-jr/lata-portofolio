import type { HeroContent } from "@/lib/types/content";

export const heroContent: HeroContent = {
  eyebrow: "PRODUCT DESIGNER",
  label: "UX PORTFOLIO",
  title: "Aspiring UX Designer Crafting Thoughtful Digital Experiences",
  summary:
    "I design intuitive interfaces that balance clarity, emotion, and function. Through user research, wireframing, and rapid iteration, I turn complex problems into meaningful digital moments.",
  image: {
    src: "/image.png",
    alt: "Portrait of Mina Nord",
    sizes: "(max-width: 1080px) 100vw, 520px",
  },
  ctas: [
    { label: "View My Work", href: "#projects", variant: "accent" },
    { label: "Let's Connect", href: "#contact", variant: "ghost" },
    { label: "Download Resume", href: "#contact", variant: "ghost" },
  ],
};
