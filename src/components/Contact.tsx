'use client';

import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>),
      label: 'Email', value: 'hello@johndoe.dev', href: 'mailto:hello@johndoe.dev',
    },
    {
      icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>),
      label: 'Location', value: 'San Francisco, CA', href: null,
    },
    {
      icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>),
      label: 'Availability', value: 'Open to opportunities', href: null,
    },
  ];

  const socials = [
    { name: 'GitHub', href: 'https://github.com', icon: 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z' },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
    { name: 'Twitter', href: 'https://twitter.com', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
  ];

  return (
    <section id="contact" className="bg-[var(--bg-primary)] relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[var(--accent-violet)] opacity-[0.06] rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--accent-indigo)] opacity-[0.06] rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="section-label mb-4">Get in Touch</p>
          <h2 className="section-title mb-6">Let&apos;s <span className="gradient-text">Connect</span></h2>
          <p className="section-subtitle mx-auto">Have a project in mind or just want to say hi? I&apos;d love to hear from you!</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full glass flex items-center justify-center text-[var(--accent-violet)]">{item.icon}</div>
                  <div>
                    <p className="text-[var(--text-muted)] uppercase" style={{ fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-wider)' }}>{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-[var(--text-primary)] hover:text-[var(--accent-violet)] transition-colors duration-300" style={{ fontSize: 'var(--text-base)' }}>{item.value}</a>
                    ) : (
                      <p className="text-[var(--text-primary)]" style={{ fontSize: 'var(--text-base)' }}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className="text-[var(--text-muted)] uppercase mb-4" style={{ fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-wider)' }}>Follow Me</p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full glass flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-violet)] hover:border-[var(--accent-violet)] transition-all duration-300 card-hover" aria-label={s.name}>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={s.icon} /></svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">
            <div>
              <label htmlFor="name" className="block font-medium text-[var(--text-secondary)] mb-2" style={{ fontSize: 'var(--text-sm)', letterSpacing: 'var(--tracking-wide)' }}>Your Name</label>
              <input type="text" id="name" value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} required className="w-full px-4 py-3 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-violet)] transition-colors duration-300" style={{ fontSize: 'var(--text-base)' }} placeholder="John Smith" />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium text-[var(--text-secondary)] mb-2" style={{ fontSize: 'var(--text-sm)', letterSpacing: 'var(--tracking-wide)' }}>Email Address</label>
              <input type="email" id="email" value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} required className="w-full px-4 py-3 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-violet)] transition-colors duration-300" style={{ fontSize: 'var(--text-base)' }} placeholder="john@example.com" />
            </div>
            <div>
              <label htmlFor="message" className="block font-medium text-[var(--text-secondary)] mb-2" style={{ fontSize: 'var(--text-sm)', letterSpacing: 'var(--tracking-wide)' }}>Message</label>
              <textarea id="message" value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} required rows={5} className="w-full px-4 py-3 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-violet)] transition-colors duration-300 resize-none" style={{ fontSize: 'var(--text-base)' }} placeholder="Tell me about your project..." />
            </div>

            <button type="submit" disabled={isSubmitting} className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
              {isSubmitting ? (
                <><svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>Sending...</>
              ) : (
                <>Send Message<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg></>
              )}
            </button>

            {isSubmitted && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-center" style={{ fontSize: 'var(--text-sm)' }}>
                Thanks for reaching out! I&apos;ll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
