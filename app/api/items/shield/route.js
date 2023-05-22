import items from "@/assets/items/items"
import { NextResponse } from "next/server";

export async function GET() {
    const { shields } = items
    return NextResponse.json(
        {
            count: shields.length,
            next: null,
            previous: null,
            results: shields
        },
        {
            status: 200
        }
    )
}

