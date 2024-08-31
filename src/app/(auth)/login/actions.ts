"use server";
import { signIn, signOut } from "@/app/_lib/auth";
export async function signInWithCredintials(formData: FormData) {
  const payload = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  try {
    const response = await fetch("http://localhost:6060/auth/signIn", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log({ data: data });

    return data;
  } catch (error: any) {
    throw new Error(error.response);
  }
}
export async function signInWithGoogle() {
  await signIn("google", {
    redirectTo: "/",
  });
}
export async function signOutWithGoogle() {
  await signOut({
    redirectTo: "/",
  });
}
