import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "../_lib/session";
import { getContacts } from "../api/contact";
import { ContactType } from "../_types/contact";

export const instant = false;

export default async function ContactPage() {
  const user = await getSession();

  // Check authentication
  if (!user) {
    redirect("/login");
  }

  // Get user's contacts
  const contacts: ContactType[] = await getContacts(user.id);

  // Empty contact list
  if (!contacts || contacts.length === 0) {
    return (
      <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-50 text-3xl text-red-600">
          +
        </div>

        <h1 className="text-3xl font-bold text-zinc-900">
          Your contact list is empty
        </h1>

        <p className="mt-3 max-w-md text-zinc-500">
          Start organizing your connections by adding your first contact.
        </p>

        <Link
          href="/contact/new"
          className="mt-7 rounded-xl bg-red-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-red-700"
        >
          Add your first contact
        </Link>
      </main>
    );
  }

  // Contacts list
  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
              My Contacts
            </h1>

            <p className="mt-2 text-sm text-zinc-500">
              Manage and organize your contacts in one place.
            </p>
          </div>

          <Link
            href="/contact/new"
            className="inline-flex items-center justify-center rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            + Add Contact
          </Link>
        </div>

        {/* Contact Count */}
        <div className="mb-6">
          <p className="text-sm font-medium text-zinc-600">
            All Contacts ({contacts.length})
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-lg font-bold text-red-600">
                {contact.name.charAt(0).toUpperCase()}
              </div>

              <h2 className="text-lg font-semibold text-zinc-900">
                {contact.name}
              </h2>

              <p className="mt-2 text-sm text-zinc-500">{contact.email}</p>

              {/* <p className="mt-1 text-sm text-zinc-500">{contact.phone}</p> */}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
