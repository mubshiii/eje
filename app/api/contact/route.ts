import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import type { ContactFormData, ContactResponse } from "@/types";

export async function POST(request: NextRequest): Promise<NextResponse<ContactResponse>> {
    try {
        const body = (await request.json()) as ContactFormData;

        // Basic server-side validation
        if (!body.name || !body.email || !body.company || !body.useCase) {
            return NextResponse.json({ success: false }, { status: 400 });
        }

        // In production this would send an email / store in DB
        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
