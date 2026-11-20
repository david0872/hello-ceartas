import { connection, NextResponse } from "next/server";
import { sql } from "@/lib/db";

export async function GET() {
  await connection();
  const rows = await sql`SELECT version()`;
  return NextResponse.json(rows[0]);
}
