import type { ProcessContent } from "@/lib/types/content";

export const processContent: ProcessContent = {
  eyebrow: "SKILLS & PROCESS",
  title: "How I work and what I use",
  skillsTitle: "Core UX Skills",
  skills: [
    "User interviews and note synthesis",
    "Persona and journey mapping",
    "Information architecture basics",
    "Wireframing and low-fi prototyping",
    "Accessibility checks (contrast, labels, keyboard flow)",
  ],
  toolsTitle: "Tools I Use",
  tools: [
    "Figma (components, auto layout, prototyping)",
    "FigJam for workshops and affinity mapping",
    "Miro for remote collaboration",
    "Notion for research repository",
    "Maze / Google Forms for test collection",
    "Slack + Loom for async feedback",
  ],
  processTitle: "UX Process",
  steps: [
    { order: 1, label: "Empathize" },
    { order: 2, label: "Define" },
    { order: 3, label: "Ideate" },
    { order: 4, label: "Prototype" },
    { order: 5, label: "Test" },
  ],
  testimonialsTitle: "Mentor & Peer Testimonials",
};
