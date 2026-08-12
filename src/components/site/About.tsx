export function About() {
  return (
    <section id="about" className="bg-brand-tint py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground">ABOUT US</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-brand-deep sm:text-4xl">
            Built on home health coding success — now supporting every specialty
          </h2>
          <div className="mt-7 space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Wyoming Health LLC is a healthcare revenue cycle management company. We help
              independent practices, clinics, billing companies and specialty groups collect what
              they have already earned by tightening every stage of the cycle: patient access,
              coding, claim submission, denial management and accounts receivable.
            </p>
            <p>
              We have already delivered strong results in home health coding — and we are now
              expanding those same accurate, timely, specialty-aware services to family practice,
              behavioral health, orthopedics, cardiology, DME, ambulatory surgery and more.
            </p>
            <p>
              Our team combines certified medical coders, billing specialists, A/R callers and
              schedulers into one accountable unit assigned to your practice. You get a named point
              of contact, documented workflows and monthly reporting instead of a ticket queue.
            </p>
          </div>
        </div>

        <dl className="h-fit rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
          <div>
            <dt className="text-xs font-semibold tracking-[0.18em] text-muted-foreground">COMPANY</dt>
            <dd className="mt-2 text-sm text-foreground">Wyoming Health LLC</dd>
          </div>
          <div className="mt-6 border-t border-border pt-6">
            <dt className="text-xs font-semibold tracking-[0.18em] text-muted-foreground">FOCUS</dt>
            <dd className="mt-2 text-sm text-foreground">
              Revenue cycle management, coding, billing, A/R, scheduling
            </dd>
          </div>
          <div className="mt-6 border-t border-border pt-6">
            <dt className="text-xs font-semibold tracking-[0.18em] text-muted-foreground">COVERAGE</dt>
            <dd className="mt-2 text-sm text-foreground">
              All 50 states · commercial, Medicare &amp; Medicaid payers
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
