import ContactForm from "@/components/ui/ContactForm";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "AI Code Reviewer — EJE Technologies",
    description:
        "Project-aware architectural enforcement for software teams. Pull-request level review with context-aware feedback.",
};

export default function AICodeReviewerPage() {
    return (
        <article className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
            {/* Hero */}
            <header className="mb-16">
                <div className="mb-4 h-1 w-12 rounded-full bg-[#00d4ff]" aria-hidden="true" />
                <h1 className="text-4xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-5xl lg:text-6xl">
                    AI Code Reviewer
                </h1>
                <p className="mt-4 text-lg text-[var(--color-text-secondary)] max-w-2xl leading-relaxed">
                    Project-aware architectural enforcement for software teams.
                </p>
            </header>

            <ScrollReveal>
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">
                        The Problem
                    </h2>
                    <p className="text-base text-[var(--color-text-secondary)] leading-relaxed max-w-3xl">
                        Software teams generate code faster than they can review it. Reviews become
                        bottlenecks — inconsistent, superficial, and disconnected from architectural intent.
                        Technical debt accumulates silently. The AI Code Reviewer enforces project-specific
                        rules at the pull-request level, ensuring every change aligns with your architecture.
                    </p>
                </section>
            </ScrollReveal>

            <ScrollReveal delay={100}>
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-8">
                        Capabilities
                    </h2>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        {[
                            {
                                title: "Pull-Request Level Review",
                                desc: "Every PR is analyzed against your project's architectural rules before merging.",
                            },
                            {
                                title: "Project-Specific Rule Ingestion",
                                desc: "Define your conventions, patterns, and constraints. The system learns and enforces them.",
                            },
                            {
                                title: "Context-Aware Feedback",
                                desc: "Reviews consider the full project context — not just the diff. Feedback is actionable, not generic.",
                            },
                            {
                                title: "Cloud-First Deployment",
                                desc: "Runs in your CI/CD pipeline. No local setup. Integrates with GitHub, GitLab, and Bitbucket.",
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="rounded-[var(--radius-lg)] border border-[var(--color-border)] p-6 bg-[var(--color-bg-card)]"
                            >
                                <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
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
                    <div className="border-l-2 border-[#00d4ff] pl-6">
                        <p className="text-lg italic text-[var(--color-text-primary)] leading-relaxed font-light">
                            &ldquo;Reduced review load. Lower technical debt. Enforced architectural consistency.&rdquo;
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
                        Interested in the AI Code Reviewer for your engineering team? Tell us about your workflow.
                    </p>
                    <ContactForm productName="AI Code Reviewer" />
                </section>
            </ScrollReveal>
        </article>
    );
}
