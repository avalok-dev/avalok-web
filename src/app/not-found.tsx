import Link from "next/link";
import { CopyCommand } from "@/components/CopyCommand";

export const metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <div className="relative overflow-hidden">
      <div className="glow pointer-events-none absolute inset-0 -z-10" />
      <div className="mx-auto max-w-2xl px-5 py-28 text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">This part of the map is empty.</h1>
        <p className="mx-auto mt-5 max-w-md text-lg text-muted">
          The page you were looking for isn&apos;t here. Try the docs, or run Avalok and see your own system instead.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CopyCommand command="npx avalok" />
          <Link href="/docs/" className="rounded-xl px-4 py-3 text-sm text-muted transition hover:text-fg">Read the docs →</Link>
        </div>
      </div>
    </div>
  );
}
