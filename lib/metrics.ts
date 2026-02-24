import type { MetricsResponse, MetricCategory, Metric } from "@/types";

/**
 * Simple seeded pseudo-random number generator (mulberry32).
 * Produces deterministic results for the same seed.
 */
function seededRandom(seed: number): () => number {
    let s = seed | 0;
    return () => {
        s = (s + 0x6d2b79f5) | 0;
        let t = Math.imul(s ^ (s >>> 15), 1 | s);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

/**
 * Generate a metric value that drifts gradually based on time.
 * Uses 30-second time buckets so values change at poll intervals.
 */
function generateTimedValue(
    base: number,
    variance: number,
    offset: number
): { value: number; delta: number; trend: "up" | "down" | "stable" } {
    const bucket = Math.floor(Date.now() / 30000); // 30-second buckets
    const rand = seededRandom(bucket + offset);
    const prevRand = seededRandom(bucket - 1 + offset);

    const currentValue = base + (rand() - 0.5) * 2 * variance;
    const previousValue = base + (prevRand() - 0.5) * 2 * variance;

    const delta = previousValue !== 0
        ? ((currentValue - previousValue) / previousValue) * 100
        : 0;

    const trend: "up" | "down" | "stable" =
        Math.abs(delta) < 0.5 ? "stable" : delta > 0 ? "up" : "down";

    return {
        value: Math.round(currentValue * 10) / 10,
        delta: Math.round(Math.abs(delta) * 10) / 10,
        trend,
    };
}

function buildMetric(
    id: string,
    label: string,
    unit: string,
    base: number,
    variance: number,
    offset: number
): Metric {
    const { value, delta, trend } = generateTimedValue(base, variance, offset);
    return { id, label, value, unit, trend, delta };
}

/**
 * Generate the full metrics response with realistic, gradually varying data.
 */
export function generateMetrics(): MetricsResponse {
    const laundry: MetricCategory = {
        id: "laundry",
        label: "Dancing Drops — Laundry Operations",
        metrics: [
            buildMetric("machine-load", "Machine Load Utilization", "%", 87, 6, 1),
            buildMetric("trips-eliminated", "Urban Trips Eliminated", "trips", 142, 20, 2),
            buildMetric("water-saved", "Avg. Water Saved Per Cycle", "liters", 34, 5, 3),
            buildMetric("energy-reduction", "Energy Reduction Rate", "%", 22, 4, 4),
        ],
    };

    const software: MetricCategory = {
        id: "software",
        label: "AI Code Reviewer — Software Operations",
        metrics: [
            buildMetric("prs-reviewed", "PRs Reviewed This Month", "reviews", 1243, 150, 5),
            buildMetric("review-turnaround", "Avg. Review Turnaround", "hours", 1.4, 0.5, 6),
            buildMetric("rework-prevented", "Rework Cycles Prevented", "cycles", 89, 15, 7),
            buildMetric("consistency-score", "Architectural Consistency", "%", 94, 3, 8),
        ],
    };

    return {
        timestamp: new Date().toISOString(),
        categories: [laundry, software],
    };
}
