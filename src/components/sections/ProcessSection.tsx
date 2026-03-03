import { processContent } from "@/content/process";
import { testimonials } from "@/content/testimonials";
import { Card } from "../ui/Card";
import { SectionHeading } from "../ui/SectionHeading";
import { SectionShell } from "../ui/SectionShell";
import styles from "./ProcessSection.module.css";

export function ProcessSection() {
  return (
    <SectionShell id="process" className="band" labelledBy="process-title">
      <SectionHeading titleId="process-title" eyebrow={processContent.eyebrow} title={processContent.title} />

      <div className={styles.gridTwo}>
        <Card>
          <h3 className={styles.cardTitle}>{processContent.skillsTitle}</h3>
          <ul className="plainList">
            {processContent.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </Card>

        <Card>
          <h3 className={styles.cardTitle}>{processContent.toolsTitle}</h3>
          <ul className="plainList">
            {processContent.tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </Card>
      </div>

      <Card className={styles.processShell}>
        <h3 className={styles.cardTitle}>{processContent.processTitle}</h3>
        <div className={styles.processRow}>
          {processContent.steps.map((step) => (
            <div key={step.label} className={styles.processStep}>
              <span className={styles.stepIndex}>{String(step.order).padStart(2, "0")}</span>
              <span className={styles.stepName}>{step.label}</span>
            </div>
          ))}
        </div>
      </Card>

      <h3 className={styles.subsectionLabel}>{processContent.testimonialsTitle}</h3>
      <div className={styles.testimonialGrid}>
        {testimonials.map((item) => (
          <Card key={item.name} className={styles.testimonialCard}>
            <p className={styles.quote}>&quot;{item.quote}&quot;</p>
            <p className={styles.author}>{item.name}</p>
            <p className={styles.authorRole}>{item.role}</p>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
