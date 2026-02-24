import Link from "next/link";

const footerLinks = {
    company: [
        { label: "About Eje Technologies", href: "/#thesis" },
        { label: "Sustainability & Impact", href: "/#governance" },
        { label: "Governance & Compliance", href: "/#governance" },
    ],
    products: [
        { label: "Dancing Drops", href: "/products/dancing-drops" },
        { label: "AI Code Reviewer", href: "/products/ai-code-reviewer" },
    ],
    connect: [
        { label: "Contact", href: "mailto:hello@ejetechnologies.com" },
    ],
};

export default function Footer() {
    return (
        <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 text-[var(--color-text-primary)] mb-4">
                            <svg width="20" height="20" viewBox="0 0 32 32" fill="none" className="text-[var(--color-accent)]">
                                <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5" />
                                <circle cx="16" cy="16" r="6" fill="currentColor" />
                            </svg>
                            <span className="text-sm font-semibold tracking-wide">EJE Technologies</span>
                        </div>
                        <p className="text-sm text-[var(--color-text-tertiary)] leading-relaxed max-w-xs">
                            Efficiency-driven systems across physical and digital domains.
                        </p>
                        <p className="mt-3 text-xs text-[var(--color-text-tertiary)] font-mono italic">
                            Efficiency, Enforced.
                        </p>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-tertiary)] mb-4">
                            Company
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-tertiary)] mb-4">
                            Products
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.products.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-tertiary)] mb-4">
                            Connect
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.connect.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-[var(--color-border)] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-[var(--color-text-tertiary)]">
                        © {new Date().getFullYear()} Eje Technologies S.L. All rights reserved.
                    </p>
                    <p className="text-xs text-[var(--color-text-tertiary)]">
                        Madrid, Spain
                    </p>
                </div>
            </div>
        </footer>
    );
}
