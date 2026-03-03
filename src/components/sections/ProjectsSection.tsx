import Image from "next/image";
import { projectsContent } from "@/content/projects";
import { cx } from "@/lib/utils/cx";
import { Card } from "../ui/Card";
import { SectionHeading } from "../ui/SectionHeading";
import { SectionShell } from "../ui/SectionShell";
import styles from "./ProjectsSection.module.css";

function ProjectThumbnail({ thumbnail, title }: { thumbnail: string; title: string }) {
  if (thumbnail === "/") {
    return <span className={styles.thumbPlaceholder}>Thumbnail Mockup</span>;
  }

  return <Image src={thumbnail} alt={`${title} preview`} fill sizes="(max-width: 1080px) 100vw, (max-width: 1240px) 50vw, 600px" />;
}

function ProjectCardBody({
  type,
  title,
  summary,
  thumbnail,
  ctaLabel,
}: {
  type: string;
  title: string;
  summary: string;
  thumbnail: string;
  ctaLabel: string;
}) {
  return (
    <>
      <div className={styles.projectThumb}>
        <ProjectThumbnail thumbnail={thumbnail} title={title} />
      </div>
      <p className={styles.meta}>{type}</p>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className="mutedText">{summary}</p>
      <a href="#contact" className="inlineLink">
        {ctaLabel} <span aria-hidden>→</span>
      </a>
    </>
  );
}

export function ProjectsSection() {
  return (
    <SectionShell id="projects" labelledBy="projects-title">
      <SectionHeading titleId="projects-title" title={projectsContent.title} />

      <div className={styles.projectGrid}>
        {projectsContent.items.map((project) => (
          <Card key={project.slug} className={styles.projectCard}>
            <ProjectCardBody
              type={project.type}
              title={project.title}
              summary={project.summary}
              thumbnail={project.thumbnail}
              ctaLabel={project.ctaLabel}
            />
          </Card>
        ))}
      </div>

      <p className={styles.stackHint}>Cards collapse into a single column on mobile for easy scanning.</p>
      <h3 className={styles.stackTitle}>Mobile Card Stack</h3>
      <div className={styles.stackPreview}>
        {projectsContent.items.map((project) => (
          <Card key={`mobile-${project.slug}`} className={cx(styles.projectCard, styles.mobileCard)}>
            <ProjectCardBody
              type={project.type}
              title={project.title}
              summary={project.summary}
              thumbnail={project.thumbnail}
              ctaLabel={project.ctaLabel}
            />
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
