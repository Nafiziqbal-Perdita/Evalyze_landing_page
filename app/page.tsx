"use client";
import Link from "next/link";
import Image from "next/image";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.ielts.aievalyze";

function handleHeroClick(e: React.MouseEvent<HTMLDivElement>) {
  const target = e.target as HTMLElement;
  const interactive = target.closest("a, button, [role='button']");
  if (interactive) return;
  window.open(PLAY_STORE_URL, "_blank", "noopener,noreferrer");
}

export default function Home() {
  return (
    <main className="relative isolate min-h-screen w-full overflow-hidden bg-background ">
      {/* Hero */}
      <section className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_50%_-10%,_rgba(37,99,235,0.25),_transparent_60%)] dark:bg-[radial-gradient(80%_60%_at_50%_-10%,_rgba(59,130,246,0.25),_transparent_60%)]"
        />
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 pb-16 pt-24 sm:pt-28 md:grid-cols-2 md:items-center md:gap-16 md:pb-20 lg:pt-32">
          <div onClick={handleHeroClick} className="cursor-pointer">
            <div className="mb-5"
           
            >
              <Image
              src="/evalyze_1.png"
              alt="Evalyze logo"
              width={180}
              height={40}
              className="dark:hidden h-10 w-auto"
              priority
              />
              <Image
              src="/evalyze_2.png"
              alt="Evalyze logo"
              width={180}
              height={40}
              className="hidden h-10 w-auto dark:block"
              priority
              />
            </div>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
              <span className="inline-block h-2 w-2 rounded-full bg-brand" />
              AI IELTS Writing Coach
            </p>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Get instant feedback on IELTS Writing
            </h1>
            <p className="mt-4 max-w-xl text-pretty text-lg leading-7 text-zinc-600 dark:text-zinc-400">
              Evalyze analyzes your Task 1 & 2 responses and provides band
              estimates, criterion-wise feedback, grammar suggestions, and
              improvement tips — in seconds.
            </p>
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand px-6 font-medium text-brand-foreground shadow-sm transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-brand/40"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="h-5 w-5"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M325.3 234.3 104.6 13.6C95.7 4.7 83.5 0 70.7 0 31.7 0 0 31.7 0 70.7v370.7C0 480.3 31.7 512 70.7 512c12.8 0 25-4.7 33.9-13.6l220.7-220.7c18-18 18-47.1 0-65.1zm45.3-45.3 45.3-45.3c18-18 47.1-18 65.1 0L512 174.7c18 18 18 47.1 0 65.1l-30.9 30.9c-18 18-47.1 18-65.1 0l-45.3-45.3c-18-18-18-47.1 0-65.1zM415 352.6c18-18 47.1-18 65.1 0L512 384v-64l-31.9 31.9c-18 18-47.1 18-65.1 0l-45.3-45.3c-18-18-18-47.1 0-65.1l45.3-45.3c18-18 47.1-18 65.1 0L512 160 415 256.9c-18 18-18 47.1 0 65.1L415 352.6z" />
                </svg>
                Get it on Google Play
              </a>
              <Link
                href="#features"
                className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-200 px-6 font-medium text-foreground transition hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
              >
                See how it works
              </Link>
            </div>
            <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-500">
              No sign-up required to try. Mobile app for Android.
            </p>
          </div>
          <div className="relative">
            <div className="mx-auto w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <div className="mb-3 flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300">
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                Live feedback demo
              </div>
              <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-sm leading-6 text-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200">
                Paste your IELTS Writing Task 2 response, and get:
                <ul className="mt-2 list-disc pl-5">
                  <li>Estimated band score range</li>
                  <li>Feedback by criteria (TR/CC/LR/GRA)</li>
                  <li>Grammar and phrasing suggestions</li>
                  <li>Actionable improvement tips</li>
                </ul>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-zinc-600 dark:text-zinc-400">
                <div className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-800">
                  Task 1 & 2
                </div>
                <div className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-800">
                  Timed practice
                </div>
                <div className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-800">
                  Save attempts
                </div>
                <div className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-800">
                  Progress tracking
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Why learners choose Evalyze
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Instant band estimate",
              desc: "Quickly gauge your level to focus your practice.",
            },
            {
              title: "Criterion-wise feedback",
              desc: "TR, CC, LR, GRA—clear insights for each criterion.",
            },
            {
              title: "Actionable suggestions",
              desc: "Grammar, vocabulary, and structure improvements you can apply.",
            },
            {
              title: "Task 1 & 2 support",
              desc: "Practice both Academic and General Training prompts.",
            },
            {
              title: "Progress tracking",
              desc: "Save attempts and see how you improve over time.",
            },
            {
              title: "Learn by doing",
              desc: "Timed practice with realistic exam-like flow.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-zinc-200 bg-white p-5 transition hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="mb-2 h-8 w-8 rounded-lg bg-brand/10 text-brand grid place-items-center">
                <span className="text-sm">★</span>
              </div>
              <h3 className="text-base font-medium text-foreground">{f.title}</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Steps */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-zinc-200 bg-gradient-to-br from-white to-zinc-50 p-8 dark:border-zinc-800 dark:from-zinc-950 dark:to-zinc-900">
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Get feedback in three steps
          </h2>
          <ol className="mt-6 grid grid-cols-1 gap-6 text-sm sm:grid-cols-3">
            {[
              {
                n: 1,
                t: "Install Evalyze",
                d: "Download from Google Play to get started.",
              },
              {
                n: 2,
                t: "Write or paste",
                d: "Enter your response for Task 1 or Task 2.",
              },
              {
                n: 3,
                t: "See your feedback",
                d: "Review band estimate and improvement tips instantly.",
              },
            ].map((s) => (
              <li key={s.n} className="flex gap-4">
                <span className="mt-0.5 inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-brand text-sm font-semibold text-brand-foreground">
                  {s.n}
                </span>
                <div>
                  <div className="font-medium text-foreground">{s.t}</div>
                  <div className="text-zinc-600 dark:text-zinc-400">{s.d}</div>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-8">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand px-6 font-medium text-brand-foreground shadow-sm transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-brand/40"
            >
              Install free on Google Play
            </a>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          FAQs
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            {
              q: "Is Evalyze free?",
              a: "You can try key features for free. Some advanced capabilities may require an upgrade inside the app.",
            },
            {
              q: "Does it support Task 1 and Task 2?",
              a: "Yes. You can practice both tasks with tailored feedback.",
            },
            {
              q: "Is the band score official?",
              a: "No. Band estimates are AI-generated for practice and guidance.",
            },
            {
              q: "Do I need an account?",
              a: "No sign-up is required to get started.",
            },
          ].map((item) => (
            <div
              key={item.q}
              className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="font-medium text-foreground">{item.q}</div>
              <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {item.a}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl bg-[linear-gradient(120deg,var(--brand)_0%,#4F46E5_100%)] p-8 text-center text-brand-foreground">
          <h2 className="text-balance text-2xl font-semibold sm:text-3xl">
            Ready to improve your IELTS Writing?
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm/6 opacity-90">
            Install Evalyze and start getting instant, actionable feedback on
            your writing.
          </p>
          <div className="mt-6">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 font-medium text-zinc-900 shadow-sm transition hover:opacity-90"
            >
              Get it on Google Play
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
