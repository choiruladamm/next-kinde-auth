import {
  getKindeServerSession,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

export default async function Home() {
  const { isAuthenticated } = getKindeServerSession();
  const authenticated = await isAuthenticated();

  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 px-4 dark:bg-black">
      <main className="flex w-full max-w-md flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <h1 className="text-4xl font-bold tracking-tight">
            Next.js{" "}
            <span className="text-zinc-400 dark:text-zinc-600">+</span> Kinde
          </h1>
          <p className="max-w-sm text-zinc-500">
            Next.js 16 authentication with Kinde.
          </p>
        </div>

        {authenticated ? (
          <div className="flex flex-col items-center gap-4">
            <Link
              href="/dashboard"
              className="font-medium text-zinc-900 underline underline-offset-2 dark:text-zinc-100"
            >
              Go to dashboard
            </Link>
            <LogoutLink className="text-sm text-zinc-500 underline underline-offset-2 hover:text-zinc-900 dark:hover:text-zinc-100">
              Sign out
            </LogoutLink>
          </div>
        ) : (
          <div className="flex w-full flex-col gap-3">
            <Link
              href="/signin"
              className="flex h-11 w-full items-center justify-center rounded-full bg-zinc-900 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-200"
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className="flex h-11 w-full items-center justify-center rounded-full border border-zinc-200 text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-900"
            >
              Create account
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
