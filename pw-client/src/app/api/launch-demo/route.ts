import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  // call your controller-caller or orchestration function here
  return NextResponse.json({ ok: true, received: body });
}