"use client";

import { useState } from "react";

type Project = {
  type: string;
  title: string;
  summary: string;
};

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

const navItems = [
  { label: "Work", href: "projects" },
  { label: "Process", href: "process" },
  { label: "About", href: "about" },
  { label: "Contact", href: "contact" },
];

const featuredProjects: Project[] = [
  {
    type: "Fintech Web App",
    title: "LedgerFlow Platform Redesign",
    summary:
      "A complete product refresh that improved task completion and clarified complex finance workflows for teams.",
  },
  {
    type: "B2B SaaS Product",
    title: "NordPanel Analytics Workspace",
    summary:
      "An insight-first interface that streamlined reporting and helped teams move from raw metrics to decisions faster.",
  },
];

const coreSkills = [
  "User interviews and note synthesis",
  "Persona and journey mapping",
  "Information architecture basics",
  "Wireframing and low-fi prototyping",
  "Accessibility checks (contrast, labels, keyboard flow)",
];

const tools = [
  "Figma (components, auto layout, prototyping)",
  "FigJam for workshops and affinity mapping",
  "Miro for remote collaboration",
  "Notion for research repository",
  "Maze / Google Forms for test collection",
  "Slack + Loom for async feedback",
];

const processSteps = ["Empathize", "Define", "Ideate", "Prototype", "Test"] as const;

const testimonials: Testimonial[] = [
  {
    quote:
      "She asks thoughtful follow-up questions and turns user pain points into clear design decisions. Her prototypes become noticeably stronger over one semester.",
    name: "Maya Chen",
    role: "UX Mentor, North Studio",
  },
  {
    quote:
      "During team projects, she keeps everyone aligned by mapping assumptions and validating them quickly. She brings calm structure to messy problems.",
    name: "Daniel Ortiz",
    role: "Peer Collaborator, UX Research Track",
  },
  {
    quote:
      "Her usability test summaries are concise and actionable. She translates findings into iterations without losing sight of user intent.",
    name: "Priya Nair",
    role: "Internship Supervisor, Fin Health",
  },
];

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const theme = isDark ? "dark" : "light";

  return (
    <div data-theme={theme} className="page-root">
      <header className="top-nav">
        <div className="section nav-inner">
          <a className="brand" href="#">
            <span className="dot" />
            <span className="brand-text">Mina Nord</span>
          </a>

          <div className="nav-right">
            <nav className="chip-row" aria-label="Primary navigation">
              {navItems.map((item, index) => (
                <a key={item.label} href={`#${item.href}`} className={`chip ${index === 0 ? "chip-active" : ""}`}>
                  {item.label}
                </a>
              ))}
            </nav>

            <button
              className={`theme-toggle ${isDark ? "theme-dark" : "theme-light"}`}
              onClick={() => setIsDark((value) => !value)}
            >
              <span>{isDark ? "Light" : "Dark"}</span>
              <span className="theme-toggle-track">
                <span className="theme-toggle-dot" />
              </span>
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="section hero" aria-labelledby="hero-title">
          <div className="hero-content">
            <h1 id="hero-title" className="hero-title">
              Aspiring UX Designer Crafting Thoughtful Digital Experiences
            </h1>
            <p className="hero-copy">
              I design intuitive interfaces that balance clarity, emotion, and function. Through user research,
              wireframing, and rapid iteration, I turn complex problems into meaningful digital moments.
            </p>
            <div className="cta-row">
              <a href="#projects" className="btn btn-accent">
                View My Work
              </a>
              <a href="#contact" className="btn btn-ghost">
                Let&apos;s Connect
              </a>
              <a href="#contact" className="btn btn-ghost">
                Download Resume
              </a>
            </div>
          </div>

          <div className="hero-card" aria-hidden>
            <span className="hero-bubble hero-bubble-lg" />
            <span className="hero-bubble hero-bubble-sm" />
            <div className="hero-card-inner">
              <div className="hero-chip">Prototype</div>
              <div className="hero-lines">
                <span />
                <span />
                <span />
              </div>
              <div className="hero-panels">
                <div />
                <div />
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section block-space" aria-labelledby="projects-title">
          <h2 id="projects-title" className="section-title">
            Featured Projects
          </h2>
          <div className="project-grid">
            {featuredProjects.map((project) => (
              <article key={project.title} className="card project-card">
                <div className="project-thumb">
                  <span>Thumbnail Mockup</span>
                </div>
                <p className="meta">{project.type}</p>
                <h3 className="card-title">{project.title}</h3>
                <p className="muted">{project.summary}</p>
                <a href="#contact" className="inline-link">
                  View Case Study <span aria-hidden>→</span>
                </a>
              </article>
            ))}
          </div>

          <p className="hint-text">Cards collapse into a single column on mobile for easy scanning.</p>
          <h3 className="stack-title">Mobile Card Stack</h3>
          <div className="mobile-stack">
            {featuredProjects.map((project) => (
              <article key={`${project.title}-mobile`} className="card project-card mobile-card">
                <div className="project-thumb">
                  <span>Thumbnail Mockup</span>
                </div>
                <p className="meta">{project.type}</p>
                <h3 className="card-title">{project.title}</h3>
                <p className="muted">{project.summary}</p>
                <a href="#contact" className="inline-link">
                  View Case Study <span aria-hidden>→</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="band band-soft" aria-labelledby="about-title">
          <div className="section block-space">
          <p className="eyebrow">ABOUT</p>
            <h2 id="about-title" className="section-title">
              Designing simple experiences with empathy and curiosity.
            </h2>
            <p className="section-subtitle">
              I am a junior UX designer focused on turning research insights into clear, useful interfaces for everyday
              tasks.
            </p>

          <div className="grid-two">
            <article className="card">
                <h3 className="card-title">Authentic Bio</h3>
              <p className="muted">
                  I switched from visual communication studies to UX because I wanted to solve real user problems, not
                  just style screens. My strengths are active listening, mapping user pain points, and iterating
                  quickly with feedback.
              </p>
                <p className="muted muted-small">
                  Current focus: internship-ready portfolio projects in onboarding, dashboard usability, and mobile-first
                  interactions.
                </p>
            </article>

            <article className="card">
                <h3 className="card-title">Education & Learning Path</h3>
                <div className="timeline">
                  <div className="timeline-row">
                    <span className="timeline-year">2021-2023</span>
                    <p className="timeline-copy">
                      B.A. in Visual Communication, built foundation in hierarchy, layout, and typography.
                    </p>
                  </div>
                  <div className="timeline-row">
                    <span className="timeline-year">2024</span>
                    <p className="timeline-copy">
                      Completed Google UX Certificate, with projects in mobile onboarding and usability testing.
                    </p>
                  </div>
                  <div className="timeline-row">
                    <span className="timeline-year">Now</span>
                    <p className="timeline-copy">
                      Practicing through case studies, critique sessions, and mentorship with senior product designers.
                    </p>
                  </div>
                </div>
            </article>
          </div>
          </div>
        </section>

        <section id="process" className="band">
          <div className="section block-space">
          <p className="eyebrow">SKILLS & PROCESS</p>
            <h2 className="section-title">How I work and what I use</h2>
          <div className="grid-two">
            <article className="card">
                <h3 className="card-title">Core UX Skills</h3>
                <ul className="plain-list">
                  {coreSkills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
              </ul>
            </article>
            <article className="card">
                <h3 className="card-title">Tools I Use</h3>
                <ul className="plain-list">
                  {tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
              </ul>
            </article>
          </div>

            <article className="card process-shell">
              <h3 className="card-title">UX Process</h3>
            <div className="process-row">
              {processSteps.map((step, index) => (
                <div key={step} className="process-step">
                  <span className="step-index">{String(index + 1).padStart(2, "0")}</span>
                  <span className="step-name">{step}</span>
                </div>
              ))}
            </div>
          </article>
            <h3 className="subsection-label">Mentor & Peer Testimonials</h3>
            <div className="testimonial-grid">
              {testimonials.map((item) => (
                <article key={item.name} className="card testimonial-card">
                  <p className="quote">&quot;{item.quote}&quot;</p>
                  <p className="author">{item.name}</p>
                  <p className="author-role">{item.role}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="band band-contact" aria-labelledby="contact-title">
          <div className="section block-space contact-section">
          <p className="eyebrow">CONTACT</p>
            <h2 id="contact-title" className="contact-title">
              Let&apos;s Build Something Meaningful Together
            </h2>
            <p className="section-subtitle">
              I&apos;m actively looking for junior UX roles and internships. If you&apos;d like to collaborate, mentor,
              or discuss design opportunities, I&apos;d love to connect.
          </p>

          <div className="contact-grid">
                <article className="card contact-card">
                  <h3 className="contact-card-title">Say hello</h3>
                  <p className="muted">Open to internships, freelance collaboration, and thoughtful UX conversations.</p>
                  <p>
                    <strong>Email:</strong> hello.juniorux@gmail.com
                  </p>
                  <p>
                    <strong>LinkedIn:</strong> linkedin.com/in/junioruxdesigner
                  </p>
                  <p>
                    <strong>Behance:</strong> behance.net/junioruxfolio
                  </p>
                  <p>
                    <strong>Dribbble:</strong> dribbble.com/junioruxdesigner
                  </p>
            </article>

            <form className="card contact-form" onSubmit={(e) => e.preventDefault()}>
              <input aria-label="name" placeholder="Your Name" />
              <input aria-label="email" placeholder="Your Email" />
              <textarea aria-label="project" placeholder="Tell me about your project..." rows={5} />
                <button type="submit" className="btn btn-blue">
                  Send Message
                </button>
            </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
