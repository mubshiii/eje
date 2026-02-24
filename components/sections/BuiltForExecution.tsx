export default function BuiltForExecution() {
    const principles = [
        "We do not scale before optimizing.",
        "We do not automate before formalizing rules.",
        "We do not expand before validating margins.",
    ];

    return (
        <section className="bg-[var(--color-bg-secondary)] py-24 sm:py-32 lg:py-40">
            <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
                <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)] font-mono">
                    Built for Execution
                </p>

                <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl lg:text-5xl leading-tight mb-16">
                    Principles, not platitudes.
                </h2>

                <div className="space-y-8">
                    {principles.map((principle, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-6 text-left max-w-2xl mx-auto"
                        >
                            <span className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-sm font-mono text-[var(--color-text-tertiary)]">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <p className="text-xl text-[var(--color-text-primary)] leading-relaxed font-medium">
                                {principle}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 border-t border-[var(--color-border)] pt-12">
                    <p className="text-xl italic text-[var(--color-text-secondary)] font-light">
                        &ldquo;Efficiency precedes growth.&rdquo;
                    </p>
                </div>
            </div>
        </section>
    );
}
