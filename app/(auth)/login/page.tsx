import LoginForm from "@/app/component/LoginForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center bg-zinc-50 px-4 py-12 transition-colors duration-300 dark:bg-zinc-950">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Welcome Back
        </h1>

        <p className="mt-2 text-sm text-gray-500 dark:text-zinc-400">
          Sign in to manage your contacts.
        </p>
      </div>

      <LoginForm />

      <p className="mt-6 text-sm text-gray-500 dark:text-zinc-400">
        Don't have an account?{" "}
        <Link
          href="/register"
          className="font-semibold text-red-600 transition hover:text-red-700 dark:text-red-400"
        >
          Create account
        </Link>
      </p>
    </main>
  );
}
