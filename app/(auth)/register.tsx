import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold text-gray-900">Create account</h1>

      {/* <RegisterForm /> */}

      <p className="mt-6 text-sm text-gray-500">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-semibold text-red-600 hover:text-red-700"
        >
          Login
        </Link>
      </p>
    </main>
  );
}
