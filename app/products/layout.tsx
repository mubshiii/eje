import Link from "next/link";

export default function ProductsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen bg-[var(--color-bg-primary)]">
            {/* Product page header */}
            <div className="mx-auto max-w-5xl px-6 pt-8 lg:px-8">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    Back to home
                </Link>
            </div>

            {children}
        </div>
    );
}
