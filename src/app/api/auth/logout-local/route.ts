import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  const store = await cookies();

  const kindeCookies = store
    .getAll()
    .filter((c) => c.name.includes("pkce") || c.name.includes("kinde"))
    .map((c) => c.name);

  for (const name of kindeCookies) {
    store.set(name, "", { maxAge: 0, path: "/" });
  }

  return NextResponse.redirect(new URL("/", process.env.KINDE_SITE_URL));
}
