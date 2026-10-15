import Link from "next/link";
import { site } from "@/lib/site";

const nav = [
  { href: "/docs/", label: "Docs" },
  { href: "/privacy/", label: "Privacy" },
  { href: "/roadmap/", label: "Roadmap" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-bg/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <img src="/favicon.svg" alt="" width={24} height={24} />
          Avalok
        </Link>
        <nav className="flex items-center gap-5 text-sm text-muted">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-fg">
              {n.label}
            </Link>
          ))}
          <a href={site.github} className="rounded-md border border-line px-3 py-1 text-fg hover:border-accent">
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line py-10 text-sm text-muted">
      <div className="mx-auto flex max-w-5xl flex-wrap justify-between gap-4 px-4">
        <p>Apache-2.0 code. The Avalok name and logo are not licensed under it.</p>
        <p>
          <a href={site.issues} className="hover:text-fg">Feedback</a> ·{" "}
          <a href={`${site.github}/blob/main/SECURITY.md`} className="hover:text-fg">Security</a>
        </p>
      </div>
    </footer>
  );
}
