import { NextResponse } from "next/server";

export async function POST() {
  //call microservice / ECS / orchestrator / whatever
  return new Response("API route works!", { status: 200 });

  //return NextResponse.json({ message: "Demo starting..." });
}