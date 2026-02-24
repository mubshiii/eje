import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
    href?: string;
    children: React.ReactNode;
}

const variantStyles: Record<string, string> = {
    primary:
        "text-[var(--color-btn-primary-text)] border border-transparent hover:opacity-90",
    secondary:
        "text-[var(--color-btn-secondary-text)] border hover:bg-[var(--color-btn-secondary-hover)]",
    ghost:
        "text-[var(--color-text-secondary)] border-transparent hover:text-[var(--color-text-primary)]",
};

const sizeStyles: Record<string, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
};

export default function Button({
    variant = "primary",
    size = "md",
    href,
    className,
    children,
    ...props
}: ButtonProps) {
    const classes = cn(
        "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer",
        "rounded-[var(--radius-sm)]",
        variantStyles[variant],
        sizeStyles[size],
        variant === "primary" && "bg-[var(--color-btn-primary-bg)]",
        variant === "secondary" && "bg-[var(--color-btn-secondary-bg)] border-[var(--color-btn-secondary-border)]",
        className
    );

    if (href) {
        return (
            <a href={href} className={classes}>
                {children}
            </a>
        );
    }

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
}
