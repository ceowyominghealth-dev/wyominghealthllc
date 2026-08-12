import { useState } from "react";
import { CONTACT } from "./data";
import { Linkedin, Mail, Phone, Send } from "lucide-react";

const FIELD =
  "w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/30";
const LABEL = "block text-sm font-medium text-foreground";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    practice: "",
    email: "",
    service: "",
    message: "",
  });

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Inquiry from ${form.name || "a practice"}${form.practice ? ` — ${form.practice}` : ""}`;
    const body = [
      `Name: ${form.name}`,
      `Practice: ${form.practice}`,
      `Email: ${form.email}`,
      `Service needed: ${form.service}`,
      "",
      form.message,
    ].join("\n");
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-panel)] lg:grid-cols-[0.85fr_1.15fr]">
          <div className="p-9 text-primary-foreground" style={{ backgroundImage: "var(--gradient-hero)" }}>
            <p className="text-xs font-semibold tracking-[0.2em] text-brand-gold">CONTACT</p>
            <h2 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">
              We will code you free for a week
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-primary-foreground/80">
              Send us a recent chart or coding sample and we will show you exactly where accuracy
              and revenue can improve — no cost, no obligation.
            </p>

            <ul className="mt-9 space-y-5 text-sm">
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                <span>
                  <span className="block text-primary-foreground/70">Email</span>
                  <a href={`mailto:${CONTACT.email}`} className="font-semibold hover:text-brand-gold">
                    {CONTACT.email}
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                <span>
                  <span className="block text-primary-foreground/70">Phone</span>
                  <a
                    href={`tel:${CONTACT.phone.replace(/[^+\d]/g, "")}`}
                    className="font-semibold hover:text-brand-gold"
                  >
                    {CONTACT.phone}
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <Linkedin className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                <span>
                  <span className="block text-primary-foreground/70">LinkedIn</span>
                  <a
                    href={CONTACT.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold hover:text-brand-gold"
                  >
                    Wyoming Health LLC
                  </a>
                </span>
              </li>
            </ul>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-3 text-sm font-semibold transition-colors hover:bg-primary-foreground/20"
              >
                <Mail className="h-4 w-4" /> Email us directly
              </a>
              <a
                href={`tel:${CONTACT.phone.replace(/[^+\d]/g, "")}`}
                className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-3 text-sm font-semibold transition-colors hover:bg-primary-foreground/20"
              >
                <Phone className="h-4 w-4" /> Call us
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-card p-9">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={LABEL} htmlFor="name">
                  Your name
                </label>
                <input id="name" className={`${FIELD} mt-2`} placeholder="Dr. Jane Smith" value={form.name} onChange={update("name")} />
              </div>
              <div>
                <label className={LABEL} htmlFor="practice">
                  Practice name
                </label>
                <input id="practice" className={`${FIELD} mt-2`} placeholder="Sheridan Family Care" value={form.practice} onChange={update("practice")} />
              </div>
              <div>
                <label className={LABEL} htmlFor="email">
                  Email
                </label>
                <input id="email" type="email" className={`${FIELD} mt-2`} placeholder="you@practice.com" value={form.email} onChange={update("email")} />
              </div>
              <div>
                <label className={LABEL} htmlFor="service">
                  Service needed
                </label>
                <input id="service" className={`${FIELD} mt-2`} placeholder="Billing, coding, A/R..." value={form.service} onChange={update("service")} />
              </div>
            </div>

            <div className="mt-5">
              <label className={LABEL} htmlFor="message">
                How can we help?
              </label>
              <textarea
                id="message"
                rows={4}
                className={`${FIELD} mt-2 resize-y`}
                placeholder="Specialty, monthly claim volume, current days in A/R..."
                value={form.message}
                onChange={update("message")}
              />
            </div>

            <button
              type="submit"
              className="mt-7 inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-card)] transition-opacity hover:opacity-90"
              style={{ backgroundImage: "var(--gradient-gold)" }}
            >
              Send inquiry <Send className="h-4 w-4" />
            </button>
            <p className="mt-4 text-xs text-muted-foreground">
              This opens your email app with the details filled in, addressed to {CONTACT.email}.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
