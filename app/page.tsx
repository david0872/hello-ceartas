import { Suspense } from "react";
import { connection } from "next/server";
import { sql } from "@/lib/db";

async function DbVersion() {
  await connection();
  const rows = await sql`SELECT version()`;
  return (
    <p className="max-w-2xl text-sm leading-6 text-zinc-700 dark:text-zinc-300">
      PostgreSQL Version: {rows[0].version}
    </p>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col items-start gap-6 px-8 py-24">
        <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
          Hello Ceartas
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Next.js wired to Lakebase Postgres on Neon.
        </p>
        <Suspense fallback={<p className="text-sm text-zinc-500">Loading database…</p>}>
          <DbVersion />
        </Suspense>
      </main>
    </div>
  );
}
