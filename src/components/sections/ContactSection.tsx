import { contactContent } from "@/content/contact";
import { ContactForm } from "../forms/ContactForm";
import { Card } from "../ui/Card";
import { SectionHeading } from "../ui/SectionHeading";
import { SectionShell } from "../ui/SectionShell";
import styles from "./ContactSection.module.css";

export function ContactSection() {
  return (
    <SectionShell id="contact" className="bandContact" labelledBy="contact-title" containerClassName={styles.contactGap}>
      <SectionHeading
        titleId="contact-title"
        eyebrow={contactContent.eyebrow}
        title={contactContent.title}
        subtitle={contactContent.subtitle}
      />

      <div className={styles.contactGrid}>
        <Card className={styles.contactCard}>
          <h3 className={styles.contactCardTitle}>{contactContent.cardTitle}</h3>
          <p className="mutedText">{contactContent.cardSummary}</p>
          {contactContent.links.map((link) => (
            <p key={link.label} className={styles.contactLine}>
              <strong>{link.label}:</strong>{" "}
              {link.href ? (
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.value}
                </a>
              ) : (
                link.value
              )}
            </p>
          ))}
        </Card>

        <Card as="div">
          <ContactForm />
        </Card>
      </div>
    </SectionShell>
  );
}
