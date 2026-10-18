import { getChangelog, renderMarkdown } from "@/lib/content";
import { site } from "@/lib/site";

export const dynamic = "force-static";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export async function GET() {
  const items = await Promise.all(
    getChangelog().map(async (e) => {
      const { html } = await renderMarkdown(e.raw);
      const link = `${site.url}/changelog/#${e.slug}`;
      return `<item><title>${esc(`${e.slug}: ${e.title}`)}</title><link>${link}</link><guid isPermaLink="true">${link}</guid><pubDate>${new Date(String(e.data.date)).toUTCString()}</pubDate><description>${esc(html)}</description></item>`;
    }),
  );
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${site.name} changelog</title><link>${site.url}/changelog/</link><description>Release notes for ${site.name}.</description><language>en</language>${items.join("")}</channel></rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
