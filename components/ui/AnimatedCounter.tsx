"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
    value: number;
    decimals?: number;
    duration?: number;
    className?: string;
}

/**
 * Smoothly animates from the previous value to the new value using
 * requestAnimationFrame. No animation library used.
 */
export default function AnimatedCounter({
    value,
    decimals = 1,
    duration = 800,
    className,
}: AnimatedCounterProps) {
    const [displayValue, setDisplayValue] = useState<number>(value);
    const previousValueRef = useRef<number>(value);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        const from = previousValueRef.current;
        const to = value;
        const startTime = performance.now();

        // Easing function — easeOutCubic for a natural deceleration
        function easeOutCubic(t: number): number {
            return 1 - Math.pow(1 - t, 3);
        }

        function animate(currentTime: number) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutCubic(progress);
            const current = from + (to - from) * easedProgress;

            setDisplayValue(current);

            if (progress < 1) {
                rafRef.current = requestAnimationFrame(animate);
            } else {
                setDisplayValue(to);
                previousValueRef.current = to;
            }
        }

        rafRef.current = requestAnimationFrame(animate);

        return () => {
            if (rafRef.current !== null) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, [value, duration]);

    const formatted = displayValue.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    });

    return (
        <span className={className} aria-live="polite" aria-atomic="true">
            {formatted}
        </span>
    );
}
