import whyImage from "@/assets/why-us.jpg";
import { WHY_US } from "./data";
import { Check } from "lucide-react";

export function WhyUs() {
  return (
    <section id="why-us" className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <img
          src={whyImage}
          alt="Healthcare professional entering billing details on a keyboard beside a stethoscope"
          width={1200}
          height={900}
          loading="lazy"
          className="w-full rounded-2xl object-cover shadow-[var(--shadow-panel)]"
        />

        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground">
            WHY WYOMING HEALTH LLC
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-brand-deep sm:text-4xl">
            A billing partner that behaves like your own back office
          </h2>

          <div className="mt-9 grid gap-7 sm:grid-cols-2">
            {WHY_US.map((item) => (
              <div key={item.title} className="flex gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-brand-tint">
                  <Check className="h-3.5 w-3.5 text-brand-deep" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-brand-deep">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
