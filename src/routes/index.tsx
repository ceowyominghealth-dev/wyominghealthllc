import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { HowItWorks } from "@/components/site/HowItWorks";
import { WhyUs } from "@/components/site/WhyUs";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { SiteFooter } from "@/components/site/SiteFooter";

const TITLE = "Wyoming Health LLC | Medical Billing & RCM Services";
const DESCRIPTION =
  "Wyoming Health LLC delivers end-to-end revenue cycle management — medical coding, billing, denial management, A/R recovery, eligibility and scheduling for US providers.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <WhyUs />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
