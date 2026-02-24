export default function Thesis() {
    return (
        <section id="thesis" className="bg-[var(--color-bg-secondary)] py-24 sm:py-32 lg:py-40">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
                <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)] font-mono">
                    The Thesis
                </p>

                <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl lg:text-5xl leading-tight">
                    Fragmented systems waste resources.
                </h2>

                <div className="mt-10 space-y-6 text-lg leading-relaxed text-[var(--color-text-secondary)]">
                    <p>
                        Households run half-empty washing machines. Software teams generate code faster
                        than they can review it. Urban infrastructure and human cognition are under-optimized.
                    </p>
                    <p>
                        We build enforcement layers. We formalize rules. We embed them into workflows. We
                        measure the deltas.
                    </p>
                </div>

                <div className="mt-12 border-l-2 border-[var(--color-accent)] pl-6">
                    <p className="text-xl italic text-[var(--color-text-primary)] leading-relaxed font-light">
                        &ldquo;Efficiency is not a promise. It is a system outcome.&rdquo;
                    </p>
                </div>
            </div>
        </section>
    );
}
