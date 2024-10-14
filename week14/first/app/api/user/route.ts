import { NextRequest, NextResponse } from "next/server"

export function GET() {
    return NextResponse.json({
        email: "navdep",
        name: "navdeep"
    })
}

export async function POST(req: NextRequest) {
    const body = await req.json();

    console.log(req.headers.get("Authorization"));
    console.log(req.nextUrl.searchParams.get("name"));

    return NextResponse.json({
        message: "your are signed up"
    })
}