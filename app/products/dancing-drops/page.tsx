import ContactForm from "@/components/ui/ContactForm";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dancing Drops — EJE Technologies",
    description:
        "Urban laundry optimization powered by batching and operational discipline. Pickup & delivery in Madrid.",
};

export default function DancingDropsPage() {
    return (
        <article className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
            {/* Hero */}
            <header className="mb-16">
                <div className="mb-4 h-1 w-12 rounded-full bg-emerald-500" aria-hidden="true" />
                <h1 className="text-4xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-5xl lg:text-6xl">
                    Dancing Drops
                </h1>
                <p className="mt-4 text-lg text-[var(--color-text-secondary)] max-w-2xl leading-relaxed">
                    Urban laundry optimization, powered by batching and operational discipline.
                </p>
            </header>

            <ScrollReveal>
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">
                        The Problem
                    </h2>
                    <p className="text-base text-[var(--color-text-secondary)] leading-relaxed max-w-3xl">
                        Urban households run washing machines at 40–60% capacity. Each cycle wastes
                        water, energy, and time. Multiply this across a city and the structural inefficiency
                        is staggering. Dancing Drops eliminates this waste through professional batching
                        and centralized operations.
                    </p>
                </section>
            </ScrollReveal>

            <ScrollReveal delay={100}>
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-8">
                        How It Works
                    </h2>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        {[
                            {
                                step: "01",
                                title: "Schedule Pickup",
                                desc: "Book a pickup slot in Madrid. Our fleet operates on optimized routes to minimize urban trips.",
                            },
                            {
                                step: "02",
                                title: "Professional Batching",
                                desc: "Garments are sorted and washed in full-capacity loads, achieving maximum machine utilization.",
                            },
                            {
                                step: "03",
                                title: "Resource Optimization",
                                desc: "Industrial-grade machines reduce water and energy consumption by up to 40% per garment.",
                            },
                            {
                                step: "04",
                                title: "Delivery & Reporting",
                                desc: "Clean garments returned on schedule with measurable impact data for every cycle.",
                            },
                        ].map((item) => (
                            <div
                                key={item.step}
                                className="rounded-[var(--radius-lg)] border border-[var(--color-border)] p-6 bg-[var(--color-bg-card)]"
                            >
                                <span className="text-xs font-mono text-emerald-400 tracking-wider">
                                    {item.step}
                                </span>
                                <h3 className="mt-2 text-lg font-semibold text-[var(--color-text-primary)]">
                                    {item.title}
                                </h3>
                                <p className="mt-2 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </ScrollReveal>

            <ScrollReveal delay={150}>
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
                        Measurable Outcomes
                    </h2>
                    <div className="border-l-2 border-emerald-500 pl-6">
                        <p className="text-lg italic text-[var(--color-text-primary)] leading-relaxed font-light">
                            &ldquo;Time recovered. Resources conserved. Infrastructure utilized efficiently.&rdquo;
                        </p>
                    </div>
                </section>
            </ScrollReveal>

            {/* Request Access Form */}
            <ScrollReveal delay={200}>
                <section className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-8 sm:p-10">
                    <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
                        Request Access
                    </h2>
                    <p className="text-sm text-[var(--color-text-secondary)] mb-8">
                        Interested in Dancing Drops for your building, community, or business? Tell us about your use case.
                    </p>
                    <ContactForm productName="Dancing Drops" />
                </section>
            </ScrollReveal>
        </article>
    );
}
