import items from "@/assets/items/items"
import { NextResponse } from "next/server";

export async function GET() {
    const { weapons } = items;

    return NextResponse.json(
        {
            count: weapons.length,
            next: null,
            previous: null,
            results: weapons
        },
        {
            status: 200
        }
    )
}

