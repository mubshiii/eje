import { Suspense } from "react";
import Hero from "@/components/sections/Hero";
import Thesis from "@/components/sections/Thesis";
import Products from "@/components/sections/Products";
import MetricsDashboard from "@/components/sections/MetricsDashboard";
import Governance from "@/components/sections/Governance";
import BuiltForExecution from "@/components/sections/BuiltForExecution";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <>
      <Hero />

      <ScrollReveal>
        <Thesis />
      </ScrollReveal>

      <ScrollReveal>
        <Products />
      </ScrollReveal>

      <Suspense
        fallback={
          <section className="bg-[var(--color-bg-secondary)] py-24 sm:py-32 lg:py-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
              <p className="text-[var(--color-text-tertiary)]">Loading metrics…</p>
            </div>
          </section>
        }
      >
        <ScrollReveal>
          <MetricsDashboard />
        </ScrollReveal>
      </Suspense>

      <ScrollReveal>
        <Governance />
      </ScrollReveal>

      <ScrollReveal>
        <BuiltForExecution />
      </ScrollReveal>
    </>
  );
}
