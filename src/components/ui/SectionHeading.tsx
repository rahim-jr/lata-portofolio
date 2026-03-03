interface SectionHeadingProps {
  title: string;
  titleId?: string;
  eyebrow?: string;
  subtitle?: string;
}

export function SectionHeading({ title, titleId, eyebrow, subtitle }: SectionHeadingProps) {
  return (
    <>
      {eyebrow ? <p className="sectionEyebrow">{eyebrow}</p> : null}
      <h2 id={titleId} className="sectionTitle">
        {title}
      </h2>
      {subtitle ? <p className="sectionSubtitle">{subtitle}</p> : null}
    </>
  );
}
