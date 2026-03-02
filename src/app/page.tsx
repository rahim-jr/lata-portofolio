"use client";

import { useState } from "react";

type Project = {
  type: string;
  title: string;
  summary: string;
};

const projects: Project[] = [
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

const processSteps = ["Empathize", "Define", "Ideate", "Prototype", "Test"];

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
              {["Work", "Process", "About", "Contact"].map((item, index) => (
                <button key={item} className={`chip ${index === 0 ? "chip-active" : ""}`}>
                  {item}
                </button>
              ))}
            </nav>

            <button className={`theme-toggle ${isDark ? "theme-dark" : "theme-light"}`} onClick={() => setIsDark((v) => !v)}>
              <span>{isDark ? "Light" : "Dark"}</span>
              <span className="theme-toggle-dot" />
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="section hero">
          <div className="hero-left">
            <h1>Aspiring UX Designer Crafting Thoughtful Digital Experiences</h1>
            <p>
              I design intuitive interfaces that balance clarity, emotion, and function. Through user research,
              wireframing, and rapid iteration, I turn complex problems into meaningful digital moments.
            </p>
            <div className="cta-row">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-secondary">Let’s Connect</a>
              <a href="#contact" className="btn btn-secondary">Download Resume</a>
            </div>
          </div>
          <div className="hero-card" aria-hidden>
            <div className="hero-card-inner" />
          </div>
        </section>

        <section id="projects" className="section">
          <h2>Featured Projects</h2>
          <div className="grid-two">
            {projects.map((project) => (
              <article key={project.title} className="card">
                <div className="thumb" />
                <p className="tag">{project.type}</p>
                <h3>{project.title}</h3>
                <p className="muted">{project.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <p className="eyebrow">ABOUT</p>
          <h2>Designing simple experiences with empathy and curiosity.</h2>
          <div className="grid-two">
            <article className="card">
              <h3>Authentic Bio</h3>
              <p className="muted">
                I switched from visual communication studies to UX because I wanted to solve real user problems, not
                just style screens. My strengths are active listening, mapping user pain points, and iterating quickly.
              </p>
            </article>
            <article className="card">
              <h3>Education & Learning Path</h3>
              <p className="muted">Google UX, portfolio labs, usability testing, and mentor feedback loops.</p>
            </article>
          </div>
        </section>

        <section className="section">
          <p className="eyebrow">SKILLS & PROCESS</p>
          <h2>How I work and what I use</h2>
          <div className="grid-two">
            <article className="card">
              <h3>Core UX Skills</h3>
              <ul>
                <li>User interviews and note synthesis</li>
                <li>Information architecture basics</li>
                <li>Wireframing and low-fi prototyping</li>
                <li>Accessibility checks</li>
              </ul>
            </article>
            <article className="card">
              <h3>Tools I Use</h3>
              <ul>
                <li>Figma, FigJam, Miro</li>
                <li>Notion for research repository</li>
                <li>Maze / Forms for testing</li>
                <li>Slack + Loom for async feedback</li>
              </ul>
            </article>
          </div>

          <article className="card process-card">
            <h3>UX Process</h3>
            <div className="process-row">
              {processSteps.map((step, index) => (
                <div key={step} className="process-step">
                  <span className="step-index">{String(index + 1).padStart(2, "0")}</span>
                  <span className="step-name">{step}</span>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section id="contact" className="section contact-section">
          <p className="eyebrow">CONTACT</p>
          <h2>Let’s Build Something Meaningful Together</h2>
          <p className="muted">
            I’m actively looking for junior UX roles and internships. If you’d like to collaborate, mentor, or discuss
            design opportunities, I’d love to connect.
          </p>

          <div className="contact-grid">
            <article className="card">
              <h3>Say hello</h3>
              <p className="muted">Open to internships, freelance collaboration, and thoughtful UX conversations.</p>
              <p>Email: hello.juniorux@gmail.com</p>
              <p>LinkedIn: linkedin.com/in/junioruxdesigner</p>
              <p>Behance: behance.net/junioruxfolio</p>
              <p>Dribbble: dribbble.com/junioruxdesigner</p>
            </article>

            <form className="card contact-form" onSubmit={(e) => e.preventDefault()}>
              <input aria-label="name" placeholder="Your Name" />
              <input aria-label="email" placeholder="Your Email" />
              <textarea aria-label="project" placeholder="Tell me about your project..." rows={5} />
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
