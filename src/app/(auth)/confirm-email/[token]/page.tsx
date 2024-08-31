import React from "react";import confirmEmail from "../actions";
import { redirect } from "next/navigation";

export default async function Page({
  params: { token },
}: {
  params: { token: string };
}) {
  await confirmEmail(token);
  redirect("/login");
  return (
    <div className="w-full h-screen flex items-start justify-center py-20">
      Your email is confirmed successfully we will redirect you now to login
      page...
    </div>
  );
}
