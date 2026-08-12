import { STEPS } from "./data";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-brand-tint py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground">THE RCM CYCLE</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-brand-deep sm:text-4xl">
          How we move a claim from visit to paid
        </h2>
        <p className="mt-5 max-w-3xl text-base text-muted-foreground">
          A documented workflow with owners at every stage — nothing sits in a queue unworked.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step) => (
            <article
              key={step.number}
              className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
            >
              <span className="absolute right-5 top-4 text-4xl font-bold text-brand-deep/8">
                {step.number}
              </span>
              <span className="block h-1 w-9 rounded-full bg-brand-gold" />
              <h3 className="mt-5 text-lg font-bold text-brand-deep">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
