import { siteConfig } from "@/content/site";
import { cx } from "@/lib/utils/cx";
import { ThemeToggle } from "../theme/ThemeToggle";
import styles from "./SiteHeader.module.css";

export function SiteHeader() {
  return (
    <header className={styles.topNav}>
      <div className={cx("sectionContainer", styles.navInner)}>
        <a className={styles.brand} href="#">
          <span className={styles.dot} />
          <span className={styles.brandText}>{siteConfig.name}</span>
        </a>

        <div className={styles.navRight}>
          <nav className={styles.chipRow} aria-label="Primary navigation">
            {siteConfig.navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className={cx(styles.chip, index === 0 ? styles.chipActive : undefined)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
