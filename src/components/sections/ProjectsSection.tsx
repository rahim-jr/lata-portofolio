import Image from "next/image";
import { projectsContent } from "@/content/projects";
import { Card } from "../ui/Card";
import { SectionHeading } from "../ui/SectionHeading";
import { SectionShell } from "../ui/SectionShell";
import styles from "./ProjectsSection.module.css";

export function ProjectsSection() {
  return (
    <SectionShell id="projects" labelledBy="projects-title">
      <SectionHeading titleId="projects-title" title={projectsContent.title} />

      <div className={styles.projectGrid}>
        {projectsContent.items.map((project) => (
          <Card key={project.slug} className={styles.projectCard}>
            <div className={styles.projectThumb}>
              <Image
                src={project.thumbnail}
                alt={`${project.title} preview`}
                fill
                sizes="(max-width: 1080px) 100vw, (max-width: 1240px) 50vw, 600px"
              />
            </div>
            <p className={styles.meta}>{project.type}</p>
            <h3 className={styles.cardTitle}>{project.title}</h3>
            <p className="mutedText">{project.summary}</p>
            <a href="#contact" className="inlineLink">
              {project.ctaLabel} <span aria-hidden>→</span>
            </a>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
