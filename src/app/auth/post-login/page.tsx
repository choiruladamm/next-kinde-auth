import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { PostLoginHandler } from "./client";

export default async function PostLoginPage() {
  const { isAuthenticated } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    redirect("/signin");
  }

  return <PostLoginHandler />;
}
