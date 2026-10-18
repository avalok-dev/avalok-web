import Link from "next/link";
import { ArrowLeft, ArrowRight, Pencil } from "lucide-react";
import { CodeCopyEnhancer } from "@/components/CodeCopyEnhancer";
import { JsonLd } from "@/components/JsonLd";
import { Toc } from "@/components/Toc";
import { getDocs, renderMarkdown } from "@/lib/content";
import { breadcrumbs, graph } from "@/lib/schema";
import { site } from "@/lib/site";

const hrefOf = (slug: string) => (slug === "index" ? "/docs/" : `/docs/${slug}/`);

export async function DocView({ slug }: { slug: string }) {
  const docs = getDocs();
  const i = docs.findIndex((d) => d.slug === slug);
  const doc = docs[i];
  const { html, toc } = await renderMarkdown(doc.raw);
  const prev = docs[i - 1];
  const next = docs[i + 1];
  const url = `${site.url}${hrefOf(slug)}`;

  return (
    <>
      <JsonLd
        data={graph(
          {
            "@type": "TechArticle",
            "@id": `${url}#article`,
            headline: doc.title,
            description: doc.description,
            url,
            dateModified: doc.updated,
            inLanguage: "en",
            isPartOf: { "@id": `${site.url}/#website` },
            about: { "@id": `${site.url}/#software` },
            publisher: { "@id": `${site.url}/#org` },
          },
          breadcrumbs([
            { name: "Home", path: "/" },
            { name: "Docs", path: "/docs/" },
            ...(slug === "index" ? [] : [{ name: doc.title, path: hrefOf(slug) }]),
          ]),
        )}
      />
      <article className="min-w-0 pb-8">
        <p className="eyebrow">Docs</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">{doc.title}</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">{doc.description}</p>
        <div className="prose-avalok mt-10" dangerouslySetInnerHTML={{ __html: html }} />
        <CodeCopyEnhancer />
        <div className="mt-14 flex items-center justify-between border-t border-white/[0.07] pt-6 text-sm text-muted">
          <span>Updated {doc.updated}</span>
          <a
            href={`${site.githubWeb}/blob/main/content/docs/${slug}.md`}
            className="inline-flex items-center gap-1.5 hover:text-fg"
          >
            <Pencil className="h-3.5 w-3.5" /> Edit this page
          </a>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {prev ? (
            <Link href={hrefOf(prev.slug)} className="card flex items-center gap-3 p-4 text-sm transition hover:border-white/[0.14]">
              <ArrowLeft className="h-4 w-4 text-muted" />
              <span><span className="block text-xs text-muted">Previous</span>{prev.title}</span>
            </Link>
          ) : <span />}
          {next && (
            <Link href={hrefOf(next.slug)} className="card flex items-center justify-end gap-3 p-4 text-right text-sm transition hover:border-white/[0.14]">
              <span><span className="block text-xs text-muted">Next</span>{next.title}</span>
              <ArrowRight className="h-4 w-4 text-muted" />
            </Link>
          )}
        </div>
      </article>
      <Toc items={toc} />
    </>
  );
}
