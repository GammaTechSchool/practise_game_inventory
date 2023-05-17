import items from "@/assets/items/items"
import { NextResponse } from "next/server";

export async function GET (req) {
    const {shields} = items
    return NextResponse.json({count : shields.length, next : null, previous: null, results : shields})
}

