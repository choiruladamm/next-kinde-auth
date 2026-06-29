"use client";

import { KindeProvider as BaseKindeProvider } from "@kinde-oss/kinde-auth-nextjs";
import type { ReactNode } from "react";

export function KindeProvider({ children }: { children: ReactNode }) {
  return <BaseKindeProvider>{children}</BaseKindeProvider>;
}
