import type { Metadata } from "next";
import { CodeCopyEnhancer } from "@/components/CodeCopyEnhancer";
import { JsonLd } from "@/components/JsonLd";
import { getChangelog, renderMarkdown } from "@/lib/content";
import { breadcrumbs, graph } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Changelog",
  description: "Release notes for Avalok: what changed in each version.",
  alternates: { canonical: "/changelog/", types: { "application/rss+xml": "/feed.xml" } },
};

export default async function Changelog() {
  const entries = await Promise.all(
    getChangelog().map(async (e) => ({ ...e, html: (await renderMarkdown(e.raw)).html })),
  );
  return (
    <div className="relative">
      <div className="glow pointer-events-none absolute inset-0 -z-10 h-72" />
      <JsonLd data={graph(breadcrumbs([{ name: "Home", path: "/" }, { name: "Changelog", path: "/changelog/" }]))} />
      <div className="mx-auto max-w-3xl px-5 pt-20">
        <p className="eyebrow">Changelog</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">What&apos;s new</h1>
        <p className="mt-5 text-lg text-muted">
          Release notes for every version. Subscribe via <a className="text-accent" href="/feed.xml">RSS</a> or watch{" "}
          <a className="text-accent" href={`${site.github}/releases`}>releases on GitHub</a>.
        </p>
        <div className="mt-14 space-y-16">
          {entries.map((e) => (
            <section key={e.slug} id={e.slug} className="scroll-mt-24">
              <div className="flex flex-wrap items-baseline gap-3">
                <h2 className="font-mono text-2xl font-semibold text-fg">{e.slug}</h2>
                <time dateTime={String(e.data.date)} className="text-sm text-muted">{String(e.data.date)}</time>
              </div>
              <p className="mt-1 text-lg text-fg">{e.title}</p>
              <div className="prose-avalok mt-4" dangerouslySetInnerHTML={{ __html: e.html }} />
            </section>
          ))}
        </div>
        <CodeCopyEnhancer />
      </div>
    </div>
  );
}
