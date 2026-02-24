export default function Governance() {
    return (
        <section id="governance" className="bg-[var(--color-bg-primary)] py-24 sm:py-32 lg:py-40">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
                <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)] font-mono">
                    Governance &amp; Discipline
                </p>

                <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl lg:text-5xl leading-tight">
                    Operational standards as infrastructure.
                </h2>

                <div className="mt-10 space-y-6 text-lg leading-relaxed text-[var(--color-text-secondary)]">
                    <p>
                        Eje Technologies S.L. operates under clear IP ownership, GDPR-compliant data
                        governance, defined operational thresholds, and financial discipline with
                        transparent reporting.
                    </p>
                    <p>
                        Public funding, private customers, and operational partners require the same
                        standard: measurable execution.
                    </p>
                </div>

                {/* Governance pillars */}
                <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {[
                        { title: "IP Ownership", desc: "Clear intellectual property boundaries across all products and partnerships." },
                        { title: "GDPR Compliance", desc: "Full data governance conformance with European privacy regulations." },
                        { title: "Operational Thresholds", desc: "Defined performance baselines with continuous monitoring and reporting." },
                        { title: "Financial Transparency", desc: "Disciplined reporting for public funders, private clients, and partners." },
                    ].map((pillar) => (
                        <div
                            key={pillar.title}
                            className="rounded-[var(--radius-lg)] border border-[var(--color-border)] p-6 bg-[var(--color-bg-card)]"
                        >
                            <h3 className="text-base font-semibold text-[var(--color-text-primary)] mb-2">
                                {pillar.title}
                            </h3>
                            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                {pillar.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
