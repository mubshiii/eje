"use client";

import AnimatedCounter from "./AnimatedCounter";
import Badge from "./Badge";
import { cn } from "@/lib/utils";
import type { Metric } from "@/types";

interface MetricCardProps {
    metric: Metric;
    className?: string;
}

function TrendArrow({ trend }: { trend: "up" | "down" | "stable" }) {
    if (trend === "up") {
        return (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                <polyline points="18 15 12 9 6 15" />
            </svg>
        );
    }
    if (trend === "down") {
        return (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-400">
                <polyline points="6 9 12 15 18 9" />
            </svg>
        );
    }
    return (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-text-tertiary)]">
            <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
    );
}

export default function MetricCard({ metric, className }: MetricCardProps) {
    const trendVariant = metric.trend === "up" ? "success" : metric.trend === "down" ? "error" : "default";

    return (
        <article
            className={cn(
                "flex flex-col gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border)] p-5",
                "bg-[var(--color-bg-card)] hover:bg-[var(--color-bg-card-hover)]",
                "hover:border-[var(--color-border-hover)] transition-all duration-200",
                "min-h-[140px]",
                className
            )}
        >
            <div className="flex items-center justify-between">
                <span className="text-sm text-[var(--color-text-secondary)] font-medium tracking-wide">
                    {metric.label}
                </span>
            </div>

            <div className="flex items-baseline gap-2">
                <AnimatedCounter
                    value={metric.value}
                    decimals={metric.value % 1 === 0 ? 0 : 1}
                    className="text-3xl font-bold tracking-[var(--tracking-tight)] text-[var(--color-text-primary)]"
                />
                <span className="text-sm text-[var(--color-text-tertiary)]">
                    {metric.unit}
                </span>
            </div>

            <div className="flex items-center gap-2 mt-auto">
                <Badge variant={trendVariant}>
                    <TrendArrow trend={metric.trend} />
                    <span>{metric.delta}%</span>
                </Badge>
            </div>
        </article>
    );
}
