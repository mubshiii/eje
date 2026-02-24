import { cn } from "@/lib/utils";

interface BadgeProps {
    children: React.ReactNode;
    variant?: "default" | "success" | "warning" | "error";
    className?: string;
}

const variantStyles: Record<string, string> = {
    default: "bg-[var(--color-accent-muted)] text-[var(--color-accent)]",
    success: "bg-emerald-500/10 text-emerald-400",
    warning: "bg-amber-500/10 text-amber-400",
    error: "bg-red-500/10 text-red-400",
};

export default function Badge({ children, variant = "default", className }: BadgeProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center gap-1 rounded-[var(--radius-sm)] px-2 py-0.5 text-xs font-medium tracking-wide uppercase",
                variantStyles[variant],
                className
            )}
        >
            {children}
        </span>
    );
}
