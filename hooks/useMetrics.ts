"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import type { MetricsResponse, UseMetricsReturn } from "@/types";

const POLL_INTERVAL_MS = 30_000;
const API_URL = "/api/metrics";

export function useMetrics(): UseMetricsReturn {
    const [data, setData] = useState<MetricsResponse | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);
    const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const isMountedRef = useRef<boolean>(true);

    const fetchMetrics = useCallback(async (isInitial = false) => {
        if (isInitial) setIsLoading(true);

        try {
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);

            const json = (await response.json()) as MetricsResponse;

            if (isMountedRef.current) {
                setData(json);
                setLastUpdated(new Date());
                setIsError(false);
                if (isInitial) setIsLoading(false);
            }
        } catch {
            if (isMountedRef.current) {
                setIsError(true);
                if (isInitial) setIsLoading(false);
            }
        }
    }, []);

    useEffect(() => {
        isMountedRef.current = true;

        // Initial fetch
        fetchMetrics(true);

        // Polling
        intervalRef.current = setInterval(() => {
            fetchMetrics(false);
        }, POLL_INTERVAL_MS);

        // Cleanup — prevents memory leaks
        return () => {
            isMountedRef.current = false;
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [fetchMetrics]);

    return { data, isLoading, isError, lastUpdated };
}
