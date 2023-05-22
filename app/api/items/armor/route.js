
import items from "@/assets/items/items"
import { NextResponse } from "next/server";

export async function GET() {
    const { armors } = items
    return NextResponse.json(
        {
            count: armors.length,
            next: null,
            previous: null,
            results: armors
        },
        {
            status: 200
        }
    )
}

