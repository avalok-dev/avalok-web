import { DocsNav } from "@/components/DocsNav";
import { getDocs } from "@/lib/content";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const items = getDocs().map((d) => ({ href: d.slug === "index" ? "/docs/" : `/docs/${d.slug}/`, title: d.title }));
  return (
    <div className="relative">
      <div className="glow pointer-events-none absolute inset-x-0 top-0 -z-10 h-72" />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 pt-12 lg:grid-cols-[13rem_minmax(0,1fr)] xl:grid-cols-[13rem_minmax(0,1fr)_13rem]">
        <DocsNav items={items} />
        {children}
      </div>
    </div>
  );
}
