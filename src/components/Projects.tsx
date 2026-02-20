'use client';

import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: 'web' | 'mobile' | 'api';
  github?: string;
  live?: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
    category: 'web',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management tool with real-time updates, team workspaces, and productivity analytics.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    category: 'web',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    id: 3,
    title: 'AI Content Generator',
    description: 'An AI-powered tool that generates marketing content, blog posts, and social media captions.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    tags: ['Python', 'OpenAI', 'FastAPI', 'React'],
    category: 'api',
    github: 'https://github.com',
    featured: true,
  },
  {
    id: 4,
    title: 'Fitness Tracker Mobile',
    description: 'Cross-platform mobile app for tracking workouts, nutrition, and health metrics.',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop',
    tags: ['React Native', 'TypeScript', 'Firebase'],
    category: 'mobile',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
  },
  {
    id: 5,
    title: 'DevOps Dashboard',
    description: 'Monitoring dashboard for CI/CD pipelines, server health, and deployment status.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    tags: ['Vue.js', 'Go', 'Docker', 'Kubernetes'],
    category: 'web',
    github: 'https://github.com',
    featured: false,
  },
  {
    id: 6,
    title: 'Payment Gateway API',
    description: 'Secure payment processing API with support for multiple payment providers.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
    tags: ['Node.js', 'Express', 'Redis', 'PostgreSQL'],
    category: 'api',
    github: 'https://github.com',
    featured: false,
  },
];

type ProjectCategory = 'all' | 'web' | 'mobile' | 'api';

const categories: { key: ProjectCategory; label: string }[] = [
  { key: 'all', label: 'All Projects' },
  { key: 'web', label: 'Web Apps' },
  { key: 'mobile', label: 'Mobile' },
  { key: 'api', label: 'APIs' },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="bg-[var(--bg-secondary)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label mb-4">
            My Work
          </p>
          <h2 className="section-title mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A selection of projects I&apos;ve built that showcase my skills and passion for development
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.key
                  ? 'bg-gradient-to-r from-[var(--accent-violet)] to-[var(--accent-indigo)] text-white shadow-lg shadow-violet-500/20'
                  : 'glass text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
              style={{
                fontSize: 'var(--text-sm)',
                letterSpacing: 'var(--tracking-wide)',
              }}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="glass rounded-2xl overflow-hidden card-hover group"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] to-transparent opacity-60" />
                
                {/* Featured Badge */}
                {project.featured && (
                  <div
                    className="absolute top-4 left-4 px-3 py-1 rounded-full font-medium bg-gradient-to-r from-[var(--accent-violet)] to-[var(--accent-indigo)] text-white"
                    style={{ fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-wide)' }}
                  >
                    Featured
                  </div>
                )}

                {/* Overlay Links */}
                <div 
                  className={`absolute inset-0 flex items-center justify-center gap-4 bg-[var(--bg-primary)]/80 transition-opacity duration-300 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass hover:bg-[var(--accent-violet)] transition-colors duration-300"
                      aria-label="View code on GitHub"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass hover:bg-[var(--accent-indigo)] transition-colors duration-300"
                      aria-label="View live demo"
                    >
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="font-semibold text-[var(--text-primary)] mb-2"
                  style={{
                    fontSize: 'var(--text-xl)',
                    letterSpacing: 'var(--tracking-tight)',
                  }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-[var(--text-secondary)] mb-4 line-clamp-2"
                  style={{ fontSize: 'var(--text-sm)', lineHeight: 1.7 }}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full font-medium bg-[var(--glass-bg)] text-[var(--text-muted)] border border-[var(--glass-border)]"
                      style={{ fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-wide)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View More Link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[var(--accent-violet)] hover:text-[var(--accent-indigo)] transition-colors duration-300 font-medium group"
            style={{ fontSize: 'var(--text-sm)', letterSpacing: 'var(--tracking-wide)' }}
          >
            View all projects on GitHub
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
