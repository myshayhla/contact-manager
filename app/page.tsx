import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900 transition-colors duration-300 dark:bg-zinc-950 dark:text-white">
      {/* Hero Section */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-10 lg:py-28">
        {/* Left Content */}
        <div className="max-w-xl">
          <span className="mb-6 inline-flex rounded-full bg-red-50 px-4 py-2 text-sm font-medium text-red-600 dark:bg-red-950/40 dark:text-red-400">
            Your contacts, organized.
          </span>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Manage your
            <span className="text-red-600 dark:text-red-500"> contacts </span>
            with ease.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-zinc-500 sm:text-lg dark:text-zinc-400">
            Keep all your important connections in one place. Organize, manage
            and access your contacts whenever you need them.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="rounded-xl bg-red-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-200 transition hover:bg-red-700 dark:shadow-none"
            >
              Get Started
            </Link>

            <Link
              href="/login"
              className="rounded-xl border border-zinc-200 bg-white px-7 py-3.5 text-sm font-semibold text-zinc-700 transition hover:border-red-300 hover:text-red-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-red-500 dark:hover:text-red-400"
            >
              Sign in
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
            <div className="flex -space-x-2">
              <div className="h-9 w-9 rounded-full border-2 border-white bg-red-100 dark:border-zinc-950 dark:bg-red-950" />
              <div className="h-9 w-9 rounded-full border-2 border-white bg-orange-100 dark:border-zinc-950 dark:bg-orange-950" />
              <div className="h-9 w-9 rounded-full border-2 border-white bg-zinc-200 dark:border-zinc-950 dark:bg-zinc-700" />
            </div>
            <p>Simple, organized and always accessible.</p>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex items-center justify-center">
          <div className="absolute h-72 w-72 rounded-full bg-red-100 blur-3xl sm:h-96 sm:w-96 dark:bg-red-950/40" />

          <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-zinc-100 bg-white p-3 shadow-2xl shadow-zinc-200/60 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-black/30">
            <Image
              src="/images/home-img.jpg"
              alt="Contact management illustration"
              width={300}
              height={400}
              className="h-[350px] w-full rounded-2xl object-cover sm:h-[430px]"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-zinc-100 bg-white px-6 py-20 md:px-10 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-red-600 dark:text-red-500">
              Why choose us
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need to stay connected
            </h2>

            <p className="mt-4 leading-7 text-zinc-500 dark:text-zinc-400">
              A simple way to keep your contacts organized and make managing
              connections effortless.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Easy Management",
                description:
                  "Add, edit and organize your contacts without any hassle.",
              },
              {
                number: "02",
                title: "Quick Access",
                description:
                  "Find the people you need with a simple and organized contact list.",
              },
              {
                number: "03",
                title: "Stay Organized",
                description:
                  "Keep important contact information together in one place.",
              },
            ].map((feature) => (
              <div
                key={feature.number}
                className="rounded-2xl border border-zinc-100 bg-zinc-50 p-8 transition duration-300 hover:-translate-y-1 hover:border-red-100 hover:shadow-lg hover:shadow-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-red-900 dark:hover:shadow-black/20"
              >
                <span className="text-sm font-bold text-red-600 dark:text-red-500">
                  {feature.number}
                </span>

                <h3 className="mt-5 text-xl font-semibold">{feature.title}</h3>

                <p className="mt-3 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-zinc-50 px-6 py-20 dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl rounded-3xl bg-zinc-900 px-8 py-14 text-center text-white sm:px-16 dark:bg-black dark:ring-1 dark:ring-zinc-800">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to organize your contacts?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-zinc-400">
            Start managing your connections today with a simpler and smarter
            contact manager.
          </p>

          <Link
            href="/register"
            className="mt-8 inline-flex rounded-xl bg-red-600 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            Create your account
          </Link>
        </div>
      </section>
    </main>
  );
}
