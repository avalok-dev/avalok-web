import { getChangelog, getDocs } from "@/lib/content";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const docs = getDocs()
    .map((d) => `# ${d.title}\nSource: ${site.url}${d.slug === "index" ? "/docs/" : `/docs/${d.slug}/`}\n\n${d.raw.trim()}`)
    .join("\n\n---\n\n");
  const log = getChangelog()
    .map((e) => `## ${e.slug} (${String(e.data.date)}): ${e.title}\n\n${e.raw.trim()}`)
    .join("\n\n");
  const body = `# ${site.name} documentation\n\n${site.description}\n\nHomepage: ${site.url}\n\n---\n\n${docs}\n\n---\n\n# Changelog\n\n${log}\n`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
