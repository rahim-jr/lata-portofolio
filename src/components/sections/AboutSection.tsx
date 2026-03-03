import { aboutContent } from "@/content/about";
import { Card } from "../ui/Card";
import { SectionHeading } from "../ui/SectionHeading";
import { SectionShell } from "../ui/SectionShell";
import styles from "./AboutSection.module.css";

export function AboutSection() {
  const uniqueTimeline = aboutContent.timeline.filter((item, index, items) => {
    return items.findIndex((entry) => entry.period === item.period && entry.description === item.description) === index;
  });

  return (
    <SectionShell id="about" className="bandSoft" labelledBy="about-title">
      <SectionHeading
        titleId="about-title"
        eyebrow={aboutContent.eyebrow}
        title={aboutContent.title}
        subtitle={aboutContent.subtitle}
      />

      <div className={styles.gridTwo}>
        <Card>
          <h3 className={styles.cardTitle}>{aboutContent.bioTitle}</h3>
          <p className="mutedText">{aboutContent.bioSummary}</p>
          <p className={styles.mutedSmall}>{aboutContent.bioFocus}</p>
        </Card>

        <Card>
          <h3 className={styles.cardTitle}>{aboutContent.timelineTitle}</h3>
          <div className={styles.timeline}>
            {uniqueTimeline.map((item) => (
              <div key={item.id} className={styles.timelineRow}>
                <span className={styles.timelineYear}>{item.period}</span>
                <p className={styles.timelineCopy}>{item.description}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </SectionShell>
  );
}
