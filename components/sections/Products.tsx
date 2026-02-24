import Link from "next/link";

interface ProductCardData {
    id: string;
    title: string;
    description: string;
    features: string[];
    outcome: string;
    href: string;
    accentColor: string;
}

const products: ProductCardData[] = [
    {
        id: "dancing-drops",
        title: "Dancing Drops",
        description: "Urban laundry optimization, powered by batching and operational discipline.",
        features: [
            "Pickup & delivery in Madrid",
            "Professional load optimization",
            "Reduced water and energy per garment",
            "Measurable service reliability",
        ],
        outcome: "Time recovered. Resources conserved. Infrastructure utilized efficiently.",
        href: "/products/dancing-drops",
        accentColor: "#10b981",
    },
    {
        id: "ai-code-reviewer",
        title: "AI Code Reviewer",
        description: "Project-aware architectural enforcement for software teams.",
        features: [
            "Pull-request level review",
            "Project-specific rule ingestion",
            "Context-aware feedback",
            "Cloud-first deployment",
        ],
        outcome: "Reduced review load. Lower technical debt. Enforced architectural consistency.",
        href: "/products/ai-code-reviewer",
        accentColor: "#00d4ff",
    },
];

function ProductCard({ product }: { product: ProductCardData }) {
    return (
        <article className="group flex flex-col rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8 transition-all duration-300 hover:border-[var(--color-border-hover)] hover:bg-[var(--color-bg-card-hover)]">
            {/* Accent bar */}
            <div
                className="mb-6 h-1 w-12 rounded-full"
                style={{ backgroundColor: product.accentColor }}
                aria-hidden="true"
            />

            <h3 className="text-2xl font-bold text-[var(--color-text-primary)] tracking-tight">
                {product.title}
            </h3>

            <p className="mt-3 text-base text-[var(--color-text-secondary)] leading-relaxed">
                {product.description}
            </p>

            <ul className="mt-6 space-y-2.5 flex-grow">
                {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-[var(--color-text-secondary)]">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0" style={{ color: product.accentColor }}>
                            <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        {feature}
                    </li>
                ))}
            </ul>

            <div className="mt-8 border-t border-[var(--color-border)] pt-6">
                <p className="text-sm italic text-[var(--color-text-tertiary)]">{product.outcome}</p>
            </div>

            <Link
                href={product.href}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium transition-colors group-hover:gap-2.5"
                style={{ color: product.accentColor }}
            >
                Learn more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
            </Link>
        </article>
    );
}

export default function Products() {
    return (
        <section id="products" className="bg-[var(--color-bg-primary)] py-24 sm:py-32 lg:py-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)] font-mono">
                        Our Products
                    </p>
                    <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
                        Two domains. One methodology.
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
