import Link from "next/link";
import LogoutButton from "./LogoutBtn";

export default function Navbar() {
  const session = true;

  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-red-600"
        >
          Contact Manager<span className="text-gray-900">.</span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          {session ? (
            <>
              <Link
                href="/contact"
                className="text-sm font-medium text-gray-600 transition-colors hover:text-red-600"
              >
                Contacts
              </Link>

              <LogoutButton />
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-sm font-medium text-gray-600 transition-colors hover:text-red-600"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
