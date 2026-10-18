import type { TocItem } from "@/lib/content";

export function Toc({ items }: { items: TocItem[] }) {
  if (items.length < 2) return null;
  return (
    <nav aria-label="On this page" className="sticky top-20 hidden xl:block">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-muted">On this page</p>
      <ul className="space-y-1.5 border-l border-white/[0.08] text-sm">
        {items.map((t) => (
          <li key={t.id} className={t.depth === 3 ? "pl-6" : "pl-3"}>
            <a href={`#${t.id}`} className="text-muted transition hover:text-fg">
              {t.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
