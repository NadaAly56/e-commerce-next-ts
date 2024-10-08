"use client";
import { toast } from "react-toastify";
import { signInWithCredintials, signInWithGoogle } from "./actions";

export default function Login() {
  async function onSubmitAction(formData: FormData) {
    console.log({ formData: Object.fromEntries(formData) });

    // signInWithGoogle()
    try {
      const res = await signInWithCredintials(formData);
      console.log("res", res);

      if (res.msg === "success") toast(res.msg);
      else toast.error(res.msg);
    } catch (error: any) {
      toast.error(error.response.msg);
    }
  }
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action={onSubmitAction}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-pink-600 hover:text-pink-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-pink-200 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500"
            >
              Sign in
            </button>
          </div>
        </form>
        <br></br>
        <p className="border-t-2 w-full text-center">OR</p>
        <form action={signInWithGoogle}>
          <button
            type="submit"
            className="font-semibold text-blue-600 hover:text-blue-500 w-full text-center"
          >
            Signin with Google
          </button>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <a
            href="/register"
            className="font-semibold leading-6 text-pink-600 hover:text-pink-500"
          >
            &nbsp; Sign up now
          </a>
        </p>
      </div>
    </div>
  );
}
