import { cx } from "@/lib/utils/cx";
import type { HomeSectionHref } from "@/lib/types/content";
import type { ReactNode } from "react";

interface ButtonLinkProps {
  href: HomeSectionHref;
  variant?: "accent" | "ghost" | "blue";
  className?: string;
  children: ReactNode;
}

const variantClassNames = {
  accent: "buttonAccent",
  ghost: "buttonGhost",
  blue: "buttonBlue",
} as const;

export function ButtonLink({ href, variant = "ghost", className, children }: ButtonLinkProps) {
  return (
    <a href={href} className={cx("buttonBase", variantClassNames[variant], className)}>
      {children}
    </a>
  );
}
