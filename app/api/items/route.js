import items from "@/assets/items/items";
import { NextResponse } from "next/server";

export async function GET() {
    const numberOfItems = Object.entries(items).reduce((acc, curr) => acc + curr[1].length, 0);
    return NextResponse.json(
        {
            count: numberOfItems,
            next: null,
            previous: null,
            results: items
        },
        {
            status: 200
        }
    );
}