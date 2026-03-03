import Image from "next/image";
import { heroContent } from "@/content/hero";
import { ButtonLink } from "../ui/ButtonLink";
import { SectionShell } from "../ui/SectionShell";
import styles from "./HeroSection.module.css";

export function HeroSection() {
  return (
    <SectionShell className={styles.heroShell} containerClassName={styles.heroContainer} labelledBy="hero-title">
      <div className={styles.heroRow}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>{heroContent.eyebrow}</p>
          <p className={styles.label}>{heroContent.label}</p>
          <h1 id="hero-title" className={styles.heroTitle}>
            {heroContent.title}
          </h1>
          <p className={styles.heroCopy}>{heroContent.summary}</p>
          <div className={styles.ctaRow}>
            {heroContent.ctas.map((cta) => (
              <ButtonLink key={cta.label} href={cta.href} variant={cta.variant}>
                {cta.label}
              </ButtonLink>
            ))}
          </div>
        </div>

        <div className={styles.heroMedia}>
          <Image src={heroContent.image.src} alt={heroContent.image.alt} fill priority sizes={heroContent.image.sizes} />
        </div>
      </div>
    </SectionShell>
  );
}
