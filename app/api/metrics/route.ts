import { generateMetrics } from "@/lib/metrics";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export function GET(): NextResponse {
    const data = generateMetrics();
    return NextResponse.json(data);
}
