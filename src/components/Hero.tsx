'use client';

import { useEffect, useState } from 'react';

const roles = [
  'Software Engineer',
  'Full Stack Developer',
  'Problem Solver',
  'Tech Enthusiast',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    
    if (isTyping) {
      if (displayText.length < currentRole.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }
  }, [displayText, isTyping, roleIndex]);

  return (
    <section id="home" className="animated-gradient relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--accent-violet)] opacity-15 rounded-full blur-3xl float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[var(--accent-indigo)] opacity-10 rounded-full blur-3xl float" style={{ animationDelay: '-3s' }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-[var(--accent-cyan)] opacity-[0.07] rounded-full blur-3xl float" style={{ animationDelay: '-1.5s' }} />

      {/* Dot Grid */}
      <div className="absolute inset-0 dot-grid opacity-40" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Status Badge */}
          <div className="fade-in inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-[length:var(--text-xs)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[var(--text-secondary)]" style={{ letterSpacing: 'var(--tracking-wider)' }}>
              AVAILABLE FOR WORK
            </span>
          </div>

          {/* Name */}
          <h1
            className="font-bold fade-in"
            style={{
              fontSize: 'var(--text-hero)',
              letterSpacing: 'var(--tracking-tighter)',
              lineHeight: 1.05,
              animationDelay: '0.2s',
            }}
          >
            <span className="text-[var(--text-primary)]">Hi, I&apos;m </span>
            <span className="gradient-text">John Doe</span>
          </h1>

          {/* Dynamic Role */}
          <div className="h-10 flex items-center fade-in" style={{ animationDelay: '0.4s' }}>
            <span
              className="text-[var(--text-secondary)] font-light"
              style={{
                fontSize: 'var(--text-2xl)',
                letterSpacing: 'var(--tracking-wide)',
              }}
            >
              {displayText}
              <span className="typing-cursor" />
            </span>
          </div>

          {/* Description */}
          <p
            className="max-w-2xl text-[var(--text-muted)] fade-in"
            style={{
              fontSize: 'var(--text-lg)',
              lineHeight: 1.8,
              letterSpacing: 'var(--tracking-normal)',
              animationDelay: '0.6s',
            }}
          >
            I craft elegant solutions to complex problems. Passionate about building 
            scalable applications, clean code, and creating exceptional user experiences.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 justify-center fade-in" style={{ animationDelay: '0.8s' }}>
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-secondary">
              Let&apos;s Connect
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-6 fade-in" style={{ animationDelay: '1s' }}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--accent-violet)] transition-colors duration-300"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--accent-violet)] transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--accent-violet)] transition-colors duration-300"
              aria-label="Twitter"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>

          {/* Scroll Indicator */}
          <a
            href="#about"
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--text-muted)] hover:text-[var(--accent-violet)] transition-colors duration-300"
            aria-label="Scroll down"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="uppercase font-mono" style={{ fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-widest)' }}>Scroll</span>
              <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
