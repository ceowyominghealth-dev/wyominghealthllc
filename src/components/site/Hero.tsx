import heroImage from "@/assets/hero-office.jpg";
import logo from "@/assets/wyoming-health-logo.png";
import { HERO_BADGES, HERO_STATS } from "./data";
import { ArrowRight, Clock, ShieldCheck, TrendingUp } from "lucide-react";

const BADGE_ICONS = {
  shield: ShieldCheck,
  trend: TrendingUp,
  clock: Clock,
} as const;

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <img
        src={heroImage}
        alt="Medical billing workstation with claim worklists on screen"
        width={1600}
        height={1000}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0" style={{ backgroundImage: "var(--gradient-hero)", opacity: 0.94 }} />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:px-8 lg:py-28">
        <div className="text-primary-foreground">
          <div className="inline-flex items-center gap-4 rounded-2xl bg-primary-foreground/10 p-4 ring-1 ring-primary-foreground/15">
            <img
              src={logo}
              alt="Wyoming Health LLC — smarter workflows, dedicated teams"
              width={128}
              height={72}
              className="h-16 w-auto rounded-md bg-white p-1"
            />
            <span className="text-xl font-bold tracking-tight sm:text-2xl">Wyoming Health LLC</span>
          </div>

          <p className="mt-8 text-xs font-semibold tracking-[0.2em] text-brand-gold sm:text-sm">
            SHERIDAN, WYOMING · SERVING PRACTICES NATIONWIDE
          </p>

          <h1 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            End-to-end revenue cycle management for US healthcare providers
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
            Wyoming Health LLC handles medical coding, billing, denial management, accounts
            receivable recovery, eligibility verification and patient scheduling — so your clinic
            gets paid faster and your team stays focused on care.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl px-7 py-4 text-base font-semibold text-accent-foreground shadow-[var(--shadow-card)] transition-opacity hover:opacity-90"
              style={{ backgroundImage: "var(--gradient-gold)" }}
            >
              Get free coding for a week <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center rounded-xl border border-primary-foreground/25 bg-primary-foreground/5 px-7 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/15"
            >
              Explore our services
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-3">
            {HERO_BADGES.map((badge) => {
              const Icon = BADGE_ICONS[badge.icon as keyof typeof BADGE_ICONS];
              return (
                <li
                  key={badge.label}
                  className="flex items-center gap-2.5 rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-3 text-sm font-medium text-primary-foreground/90"
                >
                  <Icon className="h-4 w-4 shrink-0 text-brand-gold" />
                  {badge.label}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="rounded-3xl border border-primary-foreground/15 bg-primary-foreground/8 p-7 text-primary-foreground backdrop-blur-sm lg:mt-32">
          <h2 className="text-xl font-bold sm:text-2xl">What practices see with us</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {HERO_STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-5"
              >
                <p className="text-3xl font-bold text-brand-gold">{stat.value}</p>
                <p className="mt-1 text-sm text-primary-foreground/75">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-primary-foreground/65">
            Benchmarks reflect typical outcome targets for practices onboarding a dedicated RCM
            team. Your results are scoped during the audit.
          </p>
        </div>
      </div>
    </section>
  );
}
