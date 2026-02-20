export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--bg-secondary)] py-8 border-t border-[var(--glass-border)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#home"
            className="font-bold gradient-text"
            style={{ fontSize: 'var(--text-xl)', letterSpacing: 'var(--tracking-tight)' }}
          >
            {'<Dev />'}
          </a>

          {/* Copyright */}
          <p className="text-[var(--text-muted)] text-center" style={{ fontSize: 'var(--text-sm)' }}>
            © {currentYear} John Doe. Crafted with{' '}
            <span className="text-[var(--accent-violet)]">♥</span> using Next.js
          </p>

          {/* Back to Top */}
          <a
            href="#home"
            className="flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--accent-violet)] transition-colors duration-300 group"
            style={{ fontSize: 'var(--text-sm)', letterSpacing: 'var(--tracking-wide)' }}
          >
            Back to top
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
