"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export default function ScrollReveal({
    children,
    className,
    delay = 0,
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isRevealed, setIsRevealed] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Delay the reveal for staggered effects
                    setTimeout(() => setIsRevealed(true), delay);
                    observer.unobserve(el);
                }
            },
            { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
        );

        observer.observe(el);

        return () => {
            observer.disconnect();
        };
    }, [delay]);

    return (
        <div
            ref={ref}
            className={cn("scroll-reveal", isRevealed && "revealed", className)}
            style={{ animationDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}
