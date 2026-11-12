import React from "react";
import Link from "next/link";
import { ArrowLeft, User, Mail } from "lucide-react";

export default function NewContactPage() {
  return (
    <div className="min-h-screen bg-zinc-50 px-4 py-10">
      <div className="mx-auto max-w-xl">
        <Link
          href="/contact"
          className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-red-500"
        >
          <ArrowLeft size={18} />
          Back to Contacts
        </Link>

        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-zinc-900">
              Add New Contact
            </h1>
            <p className="mt-2 text-sm text-zinc-500">
              Add a new person to your contact list.
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-zinc-700"
              >
                Full Name
              </label>

              <div className="relative">
                <User
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
                />
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter full name"
                  required
                  className="w-full rounded-lg border border-zinc-200 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-100"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-zinc-700"
              >
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@email.com"
                  required
                  className="w-full rounded-lg border border-zinc-200 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-100"
                />
              </div>
            </div>

            <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
              <Link
                href="/contact"
                className="rounded-lg border border-zinc-200 px-5 py-3 text-center text-sm font-medium text-zinc-600 transition hover:bg-zinc-50"
              >
                Cancel
              </Link>

              <button
                type="submit"
                className="rounded-lg bg-red-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-red-600"
              >
                Save Contact
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
