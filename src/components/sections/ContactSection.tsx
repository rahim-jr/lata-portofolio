import { contactContent } from "@/content/contact";
import { ContactForm } from "../forms/ContactForm";
import { Card } from "../ui/Card";
import { SectionHeading } from "../ui/SectionHeading";
import { SectionShell } from "../ui/SectionShell";
import styles from "./ContactSection.module.css";

function ContactLinkIcon({ label }: { label: string }) {
  const key = label.toLowerCase();

  if (key === "email") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden className={styles.contactIconSvg}>
        <path
          d="M4.5 7.5h15a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 15V9a1.5 1.5 0 0 1 1.5-1.5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m4.2 8 7 5.1a1.4 1.4 0 0 0 1.6 0l7-5.1"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (key === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden className={styles.contactIconSvg}>
        <path
          d="M6.2 9.7v8M17.8 17.7V13c0-1.5-.8-2.3-2-2.3-1.1 0-1.8.6-2.1 1.3v5.7M9.8 9.7v8M6.1 6.8a1.2 1.2 0 1 0 2.4 0 1.2 1.2 0 0 0-2.4 0Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (key === "behance") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden className={styles.contactIconSvg}>
        <path
          d="M6 7.2h5.4a2.2 2.2 0 0 1 0 4.4H6Zm0 4.4h6.1a2.3 2.3 0 0 1 0 4.6H6ZM14 10.8h4.5a1.8 1.8 0 0 1 0 3.6H14a1.8 1.8 0 1 1 0-3.6Zm.2-2.2h4.1"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden className={styles.contactIconSvg}>
      <circle cx="12" cy="12" r="7.6" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M4.8 12h14.4M12 4.8a11.4 11.4 0 0 1 5.2 7.2A11.4 11.4 0 0 1 12 19.2 11.4 11.4 0 0 1 6.8 12 11.4 11.4 0 0 1 12 4.8Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ContactSection() {
  const iconToneClassByLabel: Record<string, string> = {
    email: styles.contactIconEmail,
    linkedin: styles.contactIconLinkedIn,
    behance: styles.contactIconBehance,
    dribbble: styles.contactIconDribbble,
  };

  return (
    <SectionShell id="contact" className="bandContact" labelledBy="contact-title" containerClassName={styles.contactGap}>
      <SectionHeading
        titleId="contact-title"
        eyebrow={contactContent.eyebrow}
        title={contactContent.title}
        subtitle={contactContent.subtitle}
      />
      <p className={styles.responseBadge}>
        <span className={styles.responseDot} aria-hidden />
        {contactContent.responseBadge}
      </p>

      <div className={styles.contactGrid}>
        <Card className={styles.contactCard}>
          <h3 className={styles.contactCardTitle}>{contactContent.cardTitle}</h3>
          <p className={styles.contactCardSummary}>{contactContent.cardSummary}</p>
          {contactContent.links.map((link) => (
            <div key={link.label} className={styles.contactLine}>
              {link.href ? (
                <a href={link.href} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                  <span className={`${styles.contactIcon} ${iconToneClassByLabel[link.label.toLowerCase()] ?? ""}`}>
                    <ContactLinkIcon label={link.label} />
                  </span>
                  {link.value}
                </a>
              ) : (
                <span className={styles.contactLink}>
                  <span className={styles.contactIcon}>
                    <ContactLinkIcon label={link.label} />
                  </span>
                  {link.value}
                </span>
              )}
            </div>
          ))}
        </Card>

        <Card as="div">
          <ContactForm />
        </Card>
      </div>
    </SectionShell>
  );
}
