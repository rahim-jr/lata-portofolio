export default function About() {
  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '50+', label: 'Projects Completed' },
    { value: '30+', label: 'Happy Clients' },
    { value: '10+', label: 'Technologies' },
  ];

  return (
    <section id="about" className="bg-[var(--bg-secondary)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="section-label mb-4">
                About Me
              </p>
              <h2
                className="section-title mb-6"
              >
                Turning ideas into{' '}
                <span className="gradient-text">reality</span>
              </h2>
            </div>

            <div className="space-y-4" style={{ fontSize: 'var(--text-base)', lineHeight: 1.8 }}>
              <p className="text-[var(--text-secondary)]">
                I&apos;m a passionate software engineer with a knack for building 
                products that make a difference. With expertise spanning frontend 
                and backend technologies, I bring ideas to life through clean, 
                efficient code.
              </p>
              <p className="text-[var(--text-secondary)]">
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, 
                contributing to open source, or mentoring aspiring developers. 
                I believe in continuous learning and pushing the boundaries of 
                what&apos;s possible.
              </p>
            </div>

            {/* Quick Info */}
            <div className="glass rounded-2xl p-6 space-y-4">
              <div className="flex flex-wrap gap-4">
                <InfoItem icon="📍" label="Location" value="San Francisco, CA" />
                <InfoItem icon="💼" label="Experience" value="5+ Years" />
                <InfoItem icon="🎓" label="Degree" value="B.S. Computer Science" />
                <InfoItem icon="🌐" label="Languages" value="English, Spanish" />
              </div>
            </div>

            <a href="/resume.pdf" className="btn-primary inline-flex items-center gap-2" target="_blank">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="glass rounded-2xl p-8 text-center card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className="font-bold gradient-text mb-2"
                  style={{
                    fontSize: 'var(--text-4xl)',
                    letterSpacing: 'var(--tracking-tighter)',
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-[var(--text-muted)] uppercase"
                  style={{
                    fontSize: 'var(--text-xs)',
                    letterSpacing: 'var(--tracking-widest)',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoItem({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 flex-1 min-w-[200px]">
      <span className="text-xl">{icon}</span>
      <div>
        <p
          className="text-[var(--text-muted)] uppercase"
          style={{
            fontSize: 'var(--text-xs)',
            letterSpacing: 'var(--tracking-wider)',
          }}
        >
          {label}
        </p>
        <p
          className="text-[var(--text-primary)] font-medium"
          style={{ fontSize: 'var(--text-sm)' }}
        >
          {value}
        </p>
      </div>
    </div>
  );
}
