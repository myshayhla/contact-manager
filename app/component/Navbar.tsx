"use client";

import Link from "next/link";
import LogoutButton from "./LogoutBtn";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../_lib/theme-provider";

export default function Navbar() {
  const session = false;
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="w-full border-b border-gray-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-red-600"
        >
          Contact Manager
          <span className="text-gray-900 dark:text-white">.</span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-4 sm:gap-6">
          {session ? (
            <>
              <Link
                href="/contact"
                className="text-sm font-medium text-gray-600 transition-colors hover:text-red-600 dark:text-zinc-300"
              >
                Contacts
              </Link>

              <Link
                href="/profile"
                className="text-sm font-medium text-gray-600 transition-colors hover:text-red-600 dark:text-zinc-300"
              >
                Profile
              </Link>

              <LogoutButton />
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-sm font-medium text-gray-600 transition-colors hover:text-red-600 dark:text-zinc-300"
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

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-700 transition hover:bg-gray-100 dark:border-zinc-700 dark:text-yellow-400 dark:hover:bg-zinc-800"
          >
            {theme === "light" ? <Moon size={19} /> : <Sun size={19} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
