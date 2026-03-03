import { cx } from "@/lib/utils/cx";
import type { ReactNode } from "react";

interface CardProps {
  as?: "article" | "div";
  className?: string;
  children: ReactNode;
}

export function Card({ as = "article", className, children }: CardProps) {
  const Element = as;
  return <Element className={cx("cardBase", className)}>{children}</Element>;
}
