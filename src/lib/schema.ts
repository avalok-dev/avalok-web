import { site } from "@/lib/site";

export const organization = {
  "@type": "Organization",
  "@id": `${site.url}/#org`,
  name: site.name,
  url: site.url,
  logo: `${site.url}/favicon.svg`,
  email: site.email,
  sameAs: [site.github, site.npm],
};

export const website = {
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.name,
  description: site.description,
  publisher: { "@id": `${site.url}/#org` },
  inLanguage: "en",
};

export const softwareApplication = {
  "@type": "SoftwareApplication",
  "@id": `${site.url}/#software`,
  name: site.name,
  alternateName: "avalok",
  description: site.description,
  url: site.url,
  applicationCategory: "DeveloperApplication",
  applicationSubCategory: "Architecture visualization and AI coding agent observability",
  operatingSystem: "macOS, Linux, Windows",
  softwareVersion: site.version,
  softwareRequirements: "Node.js 22.12 or newer",
  datePublished: site.releaseDate,
  license: "https://www.apache.org/licenses/LICENSE-2.0",
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  downloadUrl: site.npm,
  installUrl: site.npm,
  codeRepository: site.github,
  screenshot: `${site.url}/og.png`,
  image: `${site.url}/og.png`,
  featureList: [
    "Maps repository architecture: services, datastores and infrastructure",
    "Overlays what Claude Code and Codex did on the architecture map",
    "Reads Terraform, Kubernetes, Helm, Docker and Compose configuration",
    "Receives OpenTelemetry (OTLP/HTTP) traces locally",
    "Generates shareable recaps: card, interactive replay, diagram and Markdown",
    "Runs locally with no account and no data leaving the machine",
  ],
  publisher: { "@id": `${site.url}/#org` },
};

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.path}`,
    })),
  };
}

export const graph = (...nodes: object[]) => ({ "@context": "https://schema.org", "@graph": nodes });
