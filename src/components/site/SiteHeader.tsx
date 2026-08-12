import logo from "@/assets/wyoming-health-logo.png";
import { NAV_LINKS } from "./data";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Wyoming Health LLC — smarter workflows, dedicated teams"
            width={128}
            height={72}
            className="h-12 w-auto rounded-md border border-border/70 bg-white p-1"
          />
          <span className="text-lg font-bold tracking-tight text-brand-deep sm:text-xl">
            Wyoming Health LLC
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-brand-deep"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full px-5 py-3 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-card)] transition-opacity hover:opacity-90"
            style={{ backgroundImage: "var(--gradient-gold)" }}
          >
            We will code you free for a week
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md border border-border p-2 text-brand-deep lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-5 pb-5 lg:hidden">
          <nav className="flex flex-col gap-1 py-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block rounded-full px-5 py-3 text-center text-sm font-semibold text-accent-foreground"
            style={{ backgroundImage: "var(--gradient-gold)" }}
          >
            We will code you free for a week
          </a>
        </div>
      )}
    </header>
  );
}
