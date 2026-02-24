// ── Metrics ──────────────────────────────────────────────

export interface Metric {
  id: string;
  label: string;
  value: number;
  unit: string;
  trend: "up" | "down" | "stable";
  delta: number; // change since last reading, as a percentage
}

export interface MetricCategory {
  id: string;
  label: string;
  metrics: Metric[];
}

export interface MetricsResponse {
  timestamp: string; // ISO 8601
  categories: MetricCategory[];
}

// ── Contact Form ─────────────────────────────────────────

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  useCase: string;
}

export interface ContactFormErrors {
  name?: string;
  company?: string;
  email?: string;
  useCase?: string;
}

export interface ContactResponse {
  success: boolean;
}

// ── useMetrics hook return type ──────────────────────────

export interface UseMetricsReturn {
  data: MetricsResponse | null;
  isLoading: boolean;
  isError: boolean;
  lastUpdated: Date | null;
}
