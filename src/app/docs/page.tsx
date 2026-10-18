import type { Metadata } from "next";
import { Code, Page } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Docs",
  description: "Install Avalok, connect Claude Code or Codex, send OpenTelemetry traces and share a recap.",
  alternates: { canonical: "/docs/" },
};

const cmds: [string, string][] = [
  ["avalok", "Map the repository and open the dashboard"],
  ["avalok demo", "Open a built-in demo, no agent needed"],
  ["avalok recap", "Markdown summary of the newest agent session, ready for a PR"],
  ["avalok wrapped", "Your agent week as a card (counts only)"],
  ["avalok doctor", "Check the setup without starting anything"],
  ["avalok setup claude", "Print the Claude Code settings; add --apply to write them after you confirm"],
  ["avalok feedback", "Print a prefilled GitHub issue link (nothing is sent)"],
];

export default function Docs() {
  return (
    <Page eyebrow="Docs" title="Get started" lead="Avalok runs on your machine. Install takes one command; connecting an agent takes at most one more.">
      <section>
        <h2>Install</h2>
        <p className="mb-4">Requires Node.js 22.12 or newer. Run it in the repository you want to look at.</p>
        <Code>{`npx avalok`}</Code>
        <p className="mt-4">
          It starts a dashboard at <code>http://127.0.0.1:4737</code> and a local receiver at <code>http://127.0.0.1:4318</code>,
          then opens your browser. Press Ctrl+C to stop. Current version: <code>{site.version}</code> (developer preview).
        </p>
      </section>

      <section>
        <h2>Commands</h2>
        <dl className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
          {cmds.map(([c, d]) => (
            <div key={c} className="grid gap-1 py-3 sm:grid-cols-[14rem_1fr] sm:gap-6">
              <dt><code className="text-accent">{c}</code></dt>
              <dd>{d}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <h2>Codex</h2>
        <p>
          Nothing to set up. Avalok reads session files in <code>~/.codex/sessions</code> (or <code>$CODEX_HOME</code>), replays
          them and follows active sessions live. It is read-only, never reconstructs hidden reasoning and never writes to
          Codex&apos;s directory.
        </p>
      </section>

      <section>
        <h2>Claude Code</h2>
        <p className="mb-4">
          Run this once in your project. It prints the settings and writes nothing. Add <code>--apply</code> to write them to
          <code> .claude/settings.local.json</code> after you confirm; existing files are backed up and <code>--remove</code> undoes it.
        </p>
        <Code>{`avalok setup claude`}</Code>
        <p className="mt-4">Hooks are observational only. Avalok never blocks or changes what Claude Code does.</p>
      </section>

      <section>
        <h2>OpenTelemetry</h2>
        <p className="mb-4">Point any OTLP/HTTP trace exporter at the local receiver. No Collector is needed.</p>
        <Code>{`export OTEL_EXPORTER_OTLP_TRACES_ENDPOINT=http://127.0.0.1:4318/v1/traces
export OTEL_EXPORTER_OTLP_TRACES_PROTOCOL=http/protobuf   # or http/json`}</Code>
        <p className="mt-4">Protobuf and JSON over HTTP are supported; gRPC, metrics and logs are not.</p>
      </section>

      <section>
        <h2>Share a recap</h2>
        <p className="mb-4">Everything is generated locally and you review it before sharing. Prompts, run titles, commands and file paths are never included.</p>
        <Code>{`avalok recap                                   # Markdown for a PR
avalok recap --format svg                      # recap card
avalok recap --format html                     # interactive replay, one file
avalok recap --format diagram --out docs/architecture.svg`}</Code>
        <p className="mt-4">Add <code>--anonymize</code> to use generic labels, or <code>--no-brand</code> to drop the footer.</p>
      </section>

      <section>
        <h2>Limits worth knowing</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>Developer preview: interfaces and data formats may change between alpha releases.</li>
          <li>Deep analysis covers JavaScript/TypeScript and Python; other languages are inventoried only.</li>
          <li>Infrastructure analysis describes configuration in your repo, not live cloud or cluster state.</li>
          <li>One repository per run; use Rescan after changes.</li>
        </ul>
        <p className="mt-6">
          Full reference: the <a href={site.github}>README on GitHub</a>. Something wrong? <a href={site.issues}>Open an issue</a>.
        </p>
      </section>
    </Page>
  );
}
