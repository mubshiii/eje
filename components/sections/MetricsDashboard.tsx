"use client";

import { useMetrics } from "@/hooks/useMetrics";
import MetricCard from "@/components/ui/MetricCard";
import SkeletonCard from "@/components/ui/SkeletonCard";
import { useEffect, useState } from "react";
import { timeAgo } from "@/lib/utils";

export default function MetricsDashboard() {
    const { data, isLoading, isError, lastUpdated } = useMetrics();
    const [timeAgoText, setTimeAgoText] = useState<string>("");

    // Tick "last updated" label every second
    useEffect(() => {
        if (!lastUpdated) return;

        const tick = () => setTimeAgoText(timeAgo(lastUpdated));
        tick(); // initial

        const interval = setInterval(tick, 1000);
        return () => clearInterval(interval);
    }, [lastUpdated]);

    return (
        <section id="metrics" className="bg-[var(--color-bg-secondary)] py-24 sm:py-32 lg:py-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)] font-mono">
                        Live Metrics
                    </p>
                    <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
                        Measurable Impact
                    </h2>

                    {lastUpdated && (
                        <p className="mt-4 text-xs text-[var(--color-text-tertiary)] font-mono">
                            Last updated: {timeAgoText}
                        </p>
                    )}
                </div>

                {isError && !data && (
                    <div className="text-center text-[var(--color-text-secondary)] py-12">
                        <p className="text-lg">Unable to load metrics data.</p>
                        <p className="text-sm mt-1">Data will retry automatically.</p>
                    </div>
                )}

                {isLoading && !data && (
                    <div className="space-y-12">
                        {[0, 1].map((i) => (
                            <div key={i}>
                                <div className="skeleton h-5 w-48 rounded mb-6" />
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                    {[0, 1, 2, 3].map((j) => (
                                        <SkeletonCard key={j} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {data && (
                    <div className="space-y-12">
                        {data.categories.map((category) => (
                            <div key={category.id}>
                                <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--color-text-tertiary)] mb-6 font-mono">
                                    {category.label}
                                </h3>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                    {category.metrics.map((metric) => (
                                        <MetricCard key={metric.id} metric={metric} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
