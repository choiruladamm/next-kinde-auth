import { NextRequest } from "next/server";
import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";

export default function proxy(req: NextRequest) {
  return withAuth(req, {
    isReturnToCurrentPage: true,
    publicPaths: ["/", "/signin", "/api/mock/migrate", "/api/auth/login", "/api/auth/register"],
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\.png$).*)"],
};
