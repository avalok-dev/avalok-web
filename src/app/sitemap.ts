import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "docs/", "privacy/", "roadmap/"].map((p) => ({ url: `https://avalok.dev/${p}` }));
}
