"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type DocLink = { href: string; title: string };

export function DocsNav({ items }: { items: DocLink[] }) {
  const pathname = usePathname();
  const current = items.find((i) => i.href === pathname)?.title ?? "Docs";
  const list = (
    <ul className="space-y-0.5">
      {items.map((i) => {
        const active = i.href === pathname;
        return (
          <li key={i.href}>
            <Link
              href={i.href}
              aria-current={active ? "page" : undefined}
              className={`block rounded-lg px-3 py-1.5 text-sm transition ${
                active ? "bg-white/[0.07] text-fg" : "text-muted hover:text-fg"
              }`}
            >
              {i.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
  return (
    <>
      <nav aria-label="Documentation" className="sticky top-20 hidden max-h-[calc(100vh-6rem)] overflow-y-auto lg:block">
        <p className="mb-3 px-3 font-mono text-xs uppercase tracking-[0.18em] text-muted">Docs</p>
        {list}
      </nav>
      <details className="card mb-8 lg:hidden">
        <summary className="cursor-pointer list-none px-4 py-3 text-sm">
          <span className="text-muted">Docs · </span>
          {current}
        </summary>
        <div className="border-t border-white/[0.07] p-2">{list}</div>
      </details>
    </>
  );
}
