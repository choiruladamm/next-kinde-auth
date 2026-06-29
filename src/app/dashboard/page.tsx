import {
  getKindeServerSession,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Dashboard() {
  const { getUser, isAuthenticated } = getKindeServerSession();

  const isSignedIn = await isAuthenticated();
  if (!isSignedIn) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <p className="text-zinc-500">Redirecting to login...</p>
      </div>
    );
  }

  const user = await getUser();

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-8 p-8">
      <div className="flex flex-col items-center gap-2">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-900 text-lg font-semibold text-white dark:bg-zinc-100 dark:text-black">
          {user?.given_name?.charAt(0) ?? "?"}
          {user?.family_name?.charAt(0) ?? ""}
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Welcome, {user?.given_name ?? "there"}
        </h1>
        <p className="text-sm text-zinc-500">{user?.email}</p>
      </div>

      <LogoutLink className="rounded-full border border-zinc-200 px-5 py-2 text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-900">
        Sign out
      </LogoutLink>
    </div>
  );
}
