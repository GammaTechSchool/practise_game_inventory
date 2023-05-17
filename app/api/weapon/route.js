import items from "@/assets/items/items"
import { NextResponse } from "next/server";

export async function GET (req) {
    const {weapons} = items
    
    return NextResponse.json({count : weapons.length, next : null, previous: null, results : weapons })
}

