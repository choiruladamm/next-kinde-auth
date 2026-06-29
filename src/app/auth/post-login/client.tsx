"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function PostLoginHandler() {
  const router = useRouter();
  const [status, setStatus] = useState("Processing...");

  useEffect(() => {
    async function run() {
      setStatus("Fetching data...");

      await fetch("https://jsonplaceholder.typicode.com/todos/1");

      setStatus("Almost there...");

      await new Promise((r) => setTimeout(r, 1500));

      router.push("/dashboard");
    }

    run();
  }, [router]);

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-zinc-300 border-t-zinc-900 dark:border-zinc-700 dark:border-t-zinc-100" />
      <p className="text-sm text-zinc-500">{status}</p>
    </div>
  );
}
