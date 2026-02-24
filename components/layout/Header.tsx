import Link from "next/link";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Header() {
    return (
        <header className="glass-header fixed top-0 left-0 right-0 z-50">
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8" aria-label="Main navigation">
                <Link href="/" className="flex items-center gap-2 text-[var(--color-text-primary)] hover:opacity-80 transition-opacity">
                    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" className="text-[var(--color-accent)]">
                        <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5" />
                        <circle cx="16" cy="16" r="6" fill="currentColor" />
                        <line x1="16" y1="2" x2="16" y2="8" stroke="currentColor" strokeWidth="1.5" />
                        <line x1="16" y1="24" x2="16" y2="30" stroke="currentColor" strokeWidth="1.5" />
                        <line x1="2" y1="16" x2="8" y2="16" stroke="currentColor" strokeWidth="1.5" />
                        <line x1="24" y1="16" x2="30" y2="16" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                    <span className="text-base font-semibold tracking-wide">EJE Technologies</span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link href="/#products" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
                        Products
                    </Link>
                    <Link href="/#metrics" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
                        Metrics
                    </Link>
                    <Link href="/#governance" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
                        Governance
                    </Link>
                </div>

                <div className="flex items-center gap-3">
                    <ThemeToggle />
                </div>
            </nav>
        </header>
    );
}
