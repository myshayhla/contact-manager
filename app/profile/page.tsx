import React from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { User, Mail, ShieldCheck, ArrowLeft, Contact } from "lucide-react";
import { getSession } from "../_lib/session";

export default async function ProfilePage() {
  const user = await getSession();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-zinc-50 px-4 py-10">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/contact"
          className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-red-500"
        >
          <ArrowLeft size={18} />
          Back to Contacts
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900">My Profile</h1>
          <p className="mt-2 text-sm text-zinc-500">
            Manage your personal information and account details.
          </p>
        </div>

        {/* Profile Header */}
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-50 text-red-500">
              <User size={36} />
            </div>

            <div className="text-center sm:text-left">
              <h2 className="text-xl font-bold text-zinc-900">{user.name}</h2>
              <p className="mt-1 text-sm text-zinc-500">{user.email}</p>
              <span className="mt-3 inline-flex rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600">
                Active Account
              </span>
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-zinc-900">
              Personal Information
            </h3>
            <p className="mt-1 text-sm text-zinc-500">
              Your account information.
            </p>
          </div>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-zinc-100 p-3 text-zinc-500">
                <User size={20} />
              </div>
              <div>
                <p className="text-xs text-zinc-400">Full Name</p>
                <p className="mt-1 font-medium text-zinc-800">{user.name}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-zinc-100 p-3 text-zinc-500">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs text-zinc-400">Email Address</p>
                <p className="mt-1 font-medium text-zinc-800">{user.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-zinc-100 p-3 text-zinc-500">
                <ShieldCheck size={20} />
              </div>
              <div>
                <p className="text-xs text-zinc-400">Account ID</p>
                <p className="mt-1 font-medium text-zinc-800">{user.id}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Account Actions */}
        <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-zinc-900">Account</h3>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 rounded-lg border border-zinc-200 px-5 py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50"
            >
              <Contact size={18} />
              My Contacts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
