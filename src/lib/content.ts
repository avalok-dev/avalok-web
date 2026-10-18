import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeShiki from "@shikijs/rehype";
import rehypeStringify from "rehype-stringify";
import { toString } from "hast-util-to-string";
import type { Root, Element } from "hast";

export type TocItem = { id: string; text: string; depth: 2 | 3 };
export type Entry = {
  slug: string;
  title: string;
  description: string;
  order: number;
  updated: string;
  raw: string;
  data: Record<string, unknown>;
};

const root = path.join(process.cwd(), "content");

function iso(v: unknown): string {
  if (v instanceof Date) return v.toISOString().slice(0, 10);
  return String(v ?? "");
}

export function readCollection(dir: string): Entry[] {
  const folder = path.join(root, dir);
  if (!fs.existsSync(folder)) return [];
  return fs
    .readdirSync(folder)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const { data, content } = matter(fs.readFileSync(path.join(folder, f), "utf8"));
      return {
        slug: f.replace(/\.md$/, ""),
        title: String(data.title ?? data.version ?? f),
        description: String(data.description ?? ""),
        order: Number(data.order ?? 0),
        updated: iso(data.updated ?? data.date),
        raw: content,
        data: { ...data, date: iso(data.date), updated: iso(data.updated) },
      };
    });
}

function collectToc(toc: TocItem[]) {
  return () => (tree: Root) => {
    const walk = (nodes: Root["children"] | Element["children"]) => {
      for (const n of nodes) {
        if (n.type !== "element") continue;
        if ((n.tagName === "h2" || n.tagName === "h3") && n.properties?.id) {
          toc.push({ id: String(n.properties.id), text: toString(n), depth: n.tagName === "h2" ? 2 : 3 });
        }
        walk(n.children);
      }
    };
    walk(tree.children);
  };
}

export async function renderMarkdown(md: string): Promise<{ html: string; toc: TocItem[] }> {
  const toc: TocItem[] = [];
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: "wrap" })
    .use(collectToc(toc))
    .use(rehypeShiki, { theme: "github-dark-default", defaultLanguage: "text", fallbackLanguage: "text" })
    .use(rehypeStringify)
    .process(md);
  return { html: String(file), toc };
}

export function getDocs(): Entry[] {
  return readCollection("docs").sort((a, b) => a.order - b.order);
}

export function getChangelog(): Entry[] {
  return readCollection("changelog").sort((a, b) => (a.updated < b.updated ? 1 : -1));
}

export function getPosts(): Entry[] {
  return readCollection("blog").sort((a, b) => (a.updated < b.updated ? 1 : -1));
}
