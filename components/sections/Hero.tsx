import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--color-bg-primary)]">
            {/* Subtle radial glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                aria-hidden="true"
                style={{
                    background:
                        "radial-gradient(ellipse 60% 50% at 50% 40%, var(--color-accent-glow), transparent)",
                }}
            />

            <div className="relative z-10 mx-auto max-w-5xl px-6 py-32 text-center lg:px-8">
                {/* Eyebrow */}
                <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)] font-mono">
                    EJE Technologies S.L.
                </p>

                {/* Headline */}
                <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-[var(--color-text-primary)]">
                    We design systems that eliminate{" "}
                    <span className="text-[var(--color-accent)]">structural waste.</span>
                </h1>

                {/* Subheading */}
                <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[var(--color-text-secondary)] sm:text-xl">
                    Eje Technologies builds and operates efficiency-driven solutions across physical and
                    digital domains — reducing wasted water, energy, time, and human attention through
                    enforceable systems.
                </p>

                {/* CTAs */}
                <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
                    <Link
                        href="/products/dancing-drops"
                        className="inline-flex items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-btn-primary-bg)] px-8 py-4 text-base font-medium text-[var(--color-btn-primary-text)] transition-all duration-200 hover:opacity-90 w-full sm:w-auto"
                    >
                        Explore Dancing Drops
                    </Link>
                    <Link
                        href="/products/ai-code-reviewer"
                        className="inline-flex items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-btn-secondary-border)] bg-transparent px-8 py-4 text-base font-medium text-[var(--color-btn-secondary-text)] transition-all duration-200 hover:bg-[var(--color-btn-secondary-hover)] w-full sm:w-auto"
                    >
                        Explore AI Code Reviewer
                    </Link>
                </div>

                {/* Tagline */}
                <p className="mt-20 text-xs uppercase tracking-[0.4em] text-[var(--color-text-tertiary)] font-mono">
                    Efficiency, Enforced.
                </p>
            </div>
        </section>
    );
}
