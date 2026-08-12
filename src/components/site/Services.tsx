import { SERVICES } from "./data";
import {
  AlertOctagon,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  FileCode2,
  FileText,
  HeartPulse,
  Users,
  Wallet,
} from "lucide-react";

const ICONS = {
  heart: HeartPulse,
  code: FileCode2,
  file: FileText,
  wallet: Wallet,
  alert: AlertOctagon,
  calendar: CalendarCheck,
  clipboard: ClipboardList,
  "check-circle": CheckCircle2,
  users: Users,
} as const;

export function Services() {
  return (
    <section id="services" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground">OUR SERVICES</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-brand-deep sm:text-4xl">
          Every step of the revenue cycle, handled by one team
        </h2>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">
          We have been in home health coding for years — OASIS, POC and PDGM are second nature to
          us. Pick a single service or hand us the full cycle: scheduling and eligibility through
          coding, claim submission, denial appeals and final collection.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon as keyof typeof ICONS];
            return (
              <article
                key={service.title}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-transform duration-200 hover:-translate-y-1"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-tint">
                  <Icon className="h-5 w-5 text-brand-deep" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-brand-deep">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.body}</p>
                <ul className="mt-6 space-y-2 border-t border-border pt-5 text-xs text-muted-foreground">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
