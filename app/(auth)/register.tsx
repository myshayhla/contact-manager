import Link from "next/link";
import RegisterForm from "../component/RegisterForm";

export default function RegisterPage() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center bg-zinc-50 px-4 py-12 transition-colors duration-300 dark:bg-zinc-950">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Create Account
        </h1>

        <p className="mt-2 text-sm text-gray-500 dark:text-zinc-400">
          Create an account and start managing your contacts.
        </p>
      </div>

      <RegisterForm />

      <p className="mt-6 text-sm text-gray-500 dark:text-zinc-400">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-semibold text-red-600 transition hover:text-red-700 dark:text-red-400"
        >
          Login
        </Link>
      </p>
    </main>
  );
}
