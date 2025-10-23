export function Hero() {
  const scrollToWaitlist = () => {
    const element = document.getElementById("waitlist");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Spotlight background */}
      <div className="absolute inset-0 hero-spotlight" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: '64px 64px'
        }}
      />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--surface)] mb-6">
            <span className="text-xs font-medium text-[var(--muted)] uppercase tracking-wider">
              A Smarter Way to Send
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-[var(--text)] mb-6 text-balance">
            Real Inboxing at Scale
          </h1>

          {/* Subhead */}
          <p className="text-lg md:text-xl text-[var(--muted)] mb-10 max-w-2xl mx-auto leading-relaxed">
            Deliverability-first cold email infrastructure — powered by AWS SES. Multi-domain rotation, automatic warm-up, and clean sender reputation built in.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToWaitlist}
              className="btn-primary text-base px-8 py-3"
            >
              Join the Waitlist
            </button>
            <a
              href="#why"
              className="px-8 py-3 text-base font-semibold text-[var(--text)] hover:text-[var(--accent)] transition-colors"
            >
              Learn More →
            </a>
          </div>

          {/* Social proof hint */}
          <div className="mt-12 text-sm text-[var(--muted)]">
            Trusted by growth teams who value inbox placement
          </div>
        </div>
      </div>
    </section>
  );
}

