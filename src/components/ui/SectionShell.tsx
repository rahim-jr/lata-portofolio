import { cx } from "@/lib/utils/cx";
import type { ReactNode } from "react";

interface SectionShellProps {
  id?: string;
  className?: string;
  containerClassName?: string;
  labelledBy?: string;
  children: ReactNode;
}

export function SectionShell({ id, className, containerClassName, labelledBy, children }: SectionShellProps) {
  return (
    <section id={id} className={className} aria-labelledby={labelledBy}>
      <div className={cx("sectionContainer", "sectionSpacing", containerClassName)}>{children}</div>
    </section>
  );
}
