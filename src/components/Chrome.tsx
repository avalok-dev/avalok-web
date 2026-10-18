import Link from "next/link";
import { Github } from "lucide-react";
import { site } from "@/lib/site";
import { MobileMenu } from "@/components/MobileMenu";

const nav = [
  { href: "/docs/", label: "Docs" },
  { href: "/privacy/", label: "Privacy" },
  { href: "/roadmap/", label: "Roadmap" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/[0.06] bg-bg/70 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2.5 font-semibold tracking-tight">
          <img src="/favicon.svg" alt="" width={26} height={26} />
          Avalok
        </Link>
        <nav className="flex items-center gap-1 text-sm text-muted">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="hidden rounded-md px-3 py-1.5 transition hover:text-fg sm:block">
              {n.label}
            </Link>
          ))}
          <a
            href={site.github}
            className="ml-1 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-fg transition hover:border-accent/50"
          >
            <Github className="h-4 w-4" /> <span>GitHub</span>
          </a>
          <div className="ml-2"><MobileMenu items={nav} /></div>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-32 border-t border-white/[0.06] py-12 text-sm text-muted">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5 font-semibold text-fg">
            <img src="/favicon.svg" alt="" width={22} height={22} /> Avalok
          </div>
          <p className="mt-3 max-w-xs">
            From the Sanskrit <em>avaloka</em>, &ldquo;looking upon&rdquo;. A local view of your code, infrastructure and agents.
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-fg">Product</p>
          <Link href="/docs/" className="block hover:text-fg">Docs</Link>
          <Link href="/roadmap/" className="block hover:text-fg">Roadmap</Link>
          <Link href="/privacy/" className="block hover:text-fg">Privacy</Link>
        </div>
        <div className="space-y-2">
          <p className="text-fg">Project</p>
          <a href={site.github} className="block hover:text-fg">GitHub</a>
          <a href={site.npm} className="block hover:text-fg">npm</a>
          <a href={site.issues} className="block hover:text-fg">Send feedback</a>
          <a href={`mailto:${site.email}`} className="block hover:text-fg">{site.email}</a>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl px-5 text-xs">
        Code is Apache-2.0. The Avalok name and logo are not licensed under it.
      </p>
    </footer>
  );
}
