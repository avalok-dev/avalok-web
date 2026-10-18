import { getChangelog, getDocs } from "@/lib/content";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const docs = getDocs()
    .map((d) => `- [${d.title}](${site.url}${d.slug === "index" ? "/docs/" : `/docs/${d.slug}/`}): ${d.description}`)
    .join("\n");
  const latest = getChangelog()[0];
  const body = `# ${site.name}

> ${site.description}

Avalok is a free, open-source (Apache-2.0) command-line tool and local dashboard for developers who use AI coding agents such as Claude Code and Codex. Run \`npx avalok\` in a repository. It maps the repository's architecture (services, datastores, Terraform, Kubernetes, Helm, Docker), overlays what the coding agent actually did, and produces shareable recaps. Everything runs locally on 127.0.0.1; there is no account and no data leaves the machine. Current version: ${site.version} (developer preview). Requires Node.js 22.12 or newer.

## Documentation

${docs}

## Project

- [Changelog](${site.url}/changelog/): release notes${latest ? `, latest ${latest.slug}` : ""}
- [Privacy](${site.url}/privacy/): what runs locally and how to verify it
- [Roadmap](${site.url}/roadmap/): what is planned, considered and deliberately not planned
- [Source code](${site.github}): Apache-2.0
- [npm package](${site.npm}): \`npx avalok\`
- [Report an issue](${site.issues})

## Optional

- [Full documentation as one text file](${site.url}/llms-full.txt)
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
