'use client';

import { useState } from 'react';

type SkillCategory = 'all' | 'frontend' | 'backend' | 'tools';

interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools';
  color: string;
}

const skills: Skill[] = [
  // Frontend
  { name: 'React', icon: 'react', category: 'frontend', color: '#61DAFB' },
  { name: 'Next.js', icon: 'nextjs', category: 'frontend', color: '#FFFFFF' },
  { name: 'TypeScript', icon: 'typescript', category: 'frontend', color: '#3178C6' },
  { name: 'JavaScript', icon: 'javascript', category: 'frontend', color: '#F7DF1E' },
  { name: 'Tailwind CSS', icon: 'tailwindcss', category: 'frontend', color: '#06B6D4' },
  { name: 'HTML5', icon: 'html5', category: 'frontend', color: '#E34F26' },
  { name: 'CSS3', icon: 'css3', category: 'frontend', color: '#1572B6' },
  { name: 'Vue.js', icon: 'vuejs', category: 'frontend', color: '#4FC08D' },
  
  // Backend
  { name: 'Node.js', icon: 'nodejs', category: 'backend', color: '#339933' },
  { name: 'Python', icon: 'python', category: 'backend', color: '#3776AB' },
  { name: 'PostgreSQL', icon: 'postgresql', category: 'backend', color: '#4169E1' },
  { name: 'MongoDB', icon: 'mongodb', category: 'backend', color: '#47A248' },
  { name: 'GraphQL', icon: 'graphql', category: 'backend', color: '#E10098' },
  { name: 'Redis', icon: 'redis', category: 'backend', color: '#DC382D' },
  
  // Tools
  { name: 'Git', icon: 'git', category: 'tools', color: '#F05032' },
  { name: 'Docker', icon: 'docker', category: 'tools', color: '#2496ED' },
  { name: 'AWS', icon: 'amazonwebservices', category: 'tools', color: '#FF9900' },
  { name: 'VS Code', icon: 'vscode', category: 'tools', color: '#007ACC' },
  { name: 'Figma', icon: 'figma', category: 'tools', color: '#F24E1E' },
  { name: 'Linux', icon: 'linux', category: 'tools', color: '#FCC624' },
];

const categories: { key: SkillCategory; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'tools', label: 'Tools' },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="bg-[var(--bg-primary)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label mb-4">
            My Skills
          </p>
          <h2 className="section-title mb-6 mx-auto">
            Technologies I <span className="gradient-text">Work With</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A curated collection of tools and technologies I use to bring ideas to life
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

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="glass rounded-2xl p-6 text-center card-hover group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="relative mb-4">
                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`}
                  alt={skill.name}
                  className="w-12 h-12 mx-auto transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src.includes('-original')) {
                      target.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-plain.svg`;
                    }
                  }}
                />
                <div 
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"
                  style={{ backgroundColor: skill.color }}
                />
              </div>
              <h3
                className="text-[var(--text-primary)] font-medium"
                style={{ fontSize: 'var(--text-sm)' }}
              >
                {skill.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Extra Info */}
        <div className="mt-16 text-center">
          <p className="text-[var(--text-muted)]" style={{ fontSize: 'var(--text-sm)' }}>
            ...and always learning more! Currently exploring{' '}
            <span className="text-[var(--accent-violet)] font-medium">AI/ML</span> and{' '}
            <span className="text-[var(--accent-indigo)] font-medium">Web3</span>
          </p>
        </div>
      </div>
    </section>
  );
}
