import type { Metadata } from "next";
import Link from "next/link";
import { ThemeToggle } from "@/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Cryzo Desktop | Cryzo",
  description:
    "Cryzo Desktop is an AI development environment for Windows: build apps with an AI agent, then plan, schedule, and publish your own posts to TikTok, YouTube, Instagram, Facebook Pages, X, and LinkedIn with Marketing.",
};

const build = [
  {
    title: "Build with an AI agent",
    body: "Describe a web or mobile app and Cryzo's agent writes the code in your project folder, runs commands, and fixes errors, asking before it changes anything unless you give it full access.",
  },
  {
    title: "Preview inside Cryzo",
    body: "Your app runs in Cryzo's built-in browser, where you and the agent can click through it and mark what to change.",
  },
  {
    title: "Publish",
    body: "Put your app online when it's ready, or keep the code and run it wherever you like.",
  },
];

const WINDOWS_ZIP =
  "https://github.com/jlois552-ui/cryzo-desktop/releases/download/v0.1.0-preview/Cryzo-Desktop-Windows-x64.zip";

const features = [
  {
    title: "Connect your own accounts",
    body: "Open Marketing and connect TikTok, YouTube, Instagram, Facebook Pages, X, or LinkedIn through each network's own sign-in and permission screen. Disconnect any account at any time.",
  },
  {
    title: "Write and schedule posts",
    body: "Pick a video or image, write the caption, and publish now or choose a time. Every post is one you create or approve; Cryzo never posts on its own.",
  },
  {
    title: "See how your posts do",
    body: "Follower counts and post results for the accounts you connect, in one place.",
  },
];

const tiktok = [
  "Log in with TikTok shows which account a post goes to, with its name and avatar.",
  "Post directly: choose a video, see a preview, edit the caption, and pick who can view it from the options your account allows. Nothing is preselected.",
  "Comments, Duet, and Stitch start off, and you can turn them on. Branded or promotional content can be disclosed before posting.",
  "Nothing is sent until you click Publish now or schedule the post.",
  "Send to TikTok drafts: the video goes to your TikTok inbox so you can finish and post it in the TikTok app.",
  "Your follower, like, and video counts appear on the Analytics page.",
];

export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-[var(--cryzo-canvas)] text-[var(--cryzo-text)]">
      <header className="sticky top-0 z-20 border-b border-[var(--cryzo-border)] bg-[color:var(--cryzo-canvas)]/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <img src="/icon.svg" alt="" className="h-8 w-8 rounded-lg" />
            <span>Cryzo</span>
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
        <h1 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Cryzo Desktop</h1>
        <p className="mt-4 text-base leading-8 text-[var(--cryzo-muted)]">
          An AI development environment for Windows. Build your app with an AI agent, then grow it with Marketing:
          plan, schedule, and publish your own posts to TikTok, YouTube, Instagram, Facebook Pages, X, and LinkedIn from
          the same app.
        </p>

        <a
          href={WINDOWS_ZIP}
          className="mt-8 inline-flex h-11 items-center rounded-lg bg-[var(--cryzo-text)] px-5 text-sm font-medium text-[var(--cryzo-canvas)] hover:opacity-90"
        >
          Download for Windows (64-bit)
        </a>
        <p className="mt-3 text-xs text-[var(--cryzo-muted)]">Preview build · Windows 10 or 11 · macOS coming soon</p>

        <section className="mt-12 border-t border-[var(--cryzo-border)] pt-8">
          <h2 className="text-xl font-semibold">Build</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {build.map((feature) => (
              <div key={feature.title} className="rounded-xl border border-[var(--cryzo-border)] p-4">
                <h3 className="text-sm font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--cryzo-muted)]">{feature.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 border-t border-[var(--cryzo-border)] pt-8">
          <h2 className="text-xl font-semibold">Marketing</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-xl border border-[var(--cryzo-border)] p-4">
                <h3 className="text-sm font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--cryzo-muted)]">{feature.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 border-t border-[var(--cryzo-border)] pt-8">
          <h2 className="text-xl font-semibold">Posting to TikTok</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-[var(--cryzo-muted)] sm:text-[15px]">
            {tiktok.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-7 text-[var(--cryzo-muted)] sm:text-[15px]">
            How Cryzo handles data from connected accounts is described in section 8 of our{" "}
            <Link href="/privacy" className="text-[var(--cryzo-text)] underline underline-offset-4">Privacy Policy</Link>. To
            delete it, see{" "}
            <Link href="/data-deletion" className="text-[var(--cryzo-text)] underline underline-offset-4">data deletion</Link>.
          </p>
        </section>

        <section className="mt-12 border-t border-[var(--cryzo-border)] pt-8">
          <h2 className="text-xl font-semibold">Install</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-[var(--cryzo-muted)] sm:text-[15px]">
            <li>Unzip the download, open the Cryzo folder, and run Cryzo.exe.</li>
            <li>
              The preview is not code-signed yet, so Windows SmartScreen may show &quot;Windows protected your PC&quot;. Click
              More info, then Run anyway.
            </li>
            <li>Sign in with Google, then open Marketing to connect your accounts.</li>
          </ol>
        </section>
      </article>

      <footer className="border-t border-[var(--cryzo-border)]">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-5 py-6 text-xs text-[var(--cryzo-muted)] sm:px-8">
          <span>© 2026 Cryzo, a product of Tenacious Finance LLC</span>
          <div className="flex gap-4">
            <Link href="/terms" className="hover:text-[var(--cryzo-text)]">Terms</Link>
            <Link href="/privacy" className="hover:text-[var(--cryzo-text)]">Privacy</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
