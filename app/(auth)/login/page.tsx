import LoginForm from "@/app/component/LoginForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold text-gray-900">Login</h1>

      <LoginForm />

      <p className="mt-6 text-sm text-gray-500">
        Don't have an account?{" "}
        <Link
          href="/register"
          className="font-semibold text-red-600 hover:text-red-700"
        >
          Create account
        </Link>
      </p>
    </main>
  );
}
