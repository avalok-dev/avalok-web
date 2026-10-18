import type { MetadataRoute } from "next";
import { getChangelog, getDocs } from "@/lib/content";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const docs = getDocs();
  const newest = (xs: { updated: string }[]) => xs.map((x) => x.updated).sort().at(-1) ?? site.releaseDate;
  return [
    { url: `${site.url}/`, lastModified: site.releaseDate, changeFrequency: "weekly", priority: 1 },
    ...docs.map((d) => ({
      url: `${site.url}${d.slug === "index" ? "/docs/" : `/docs/${d.slug}/`}`,
      lastModified: d.updated,
      changeFrequency: "monthly" as const,
      priority: d.slug === "index" ? 0.9 : 0.7,
    })),
    { url: `${site.url}/changelog/`, lastModified: newest(getChangelog()), changeFrequency: "weekly", priority: 0.6 },
    { url: `${site.url}/privacy/`, lastModified: site.releaseDate, changeFrequency: "yearly", priority: 0.5 },
    { url: `${site.url}/roadmap/`, lastModified: site.releaseDate, changeFrequency: "monthly", priority: 0.5 },
  ];
}
