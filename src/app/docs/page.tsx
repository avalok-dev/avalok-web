import type { Metadata } from "next";
import { Install } from "@/components/Install";
import { site } from "@/lib/site";
export const metadata: Metadata = { title: "Docs" };

const cmds = [
  ["avalok", "map the repo and open the dashboard"],
  ["avalok demo", "open a built-in demo"],
  ["avalok recap", "Markdown summary of the newest agent session (paste into a PR)"],
  ["avalok wrapped", "your agent week as a card (counts only)"],
  ["avalok doctor", "check the setup without starting anything"],
  ["avalok setup claude", "print Claude Code hook settings (--apply to write after confirming)"],
];

export default function Docs() {
  return (
    <div className="mx-auto max-w-2xl px-4 pt-16">
      <h1 className="text-3xl font-semibold">Docs</h1>
      <p className="mt-3 text-muted">Requires Node.js 22.12 or newer. Codex needs no setup; Claude Code needs one command.</p>
      <div className="mt-6"><Install /></div>
      <h2 className="mt-10 text-xl font-semibold">Commands</h2>
      <dl className="mt-3 space-y-3">
        {cmds.map(([c, d]) => (
          <div key={c}><dt className="font-mono text-accent">{c}</dt><dd className="text-muted">{d}</dd></div>
        ))}
      </dl>
      <p className="mt-10 text-muted">Everything else lives in the <a className="text-accent" href={site.github}>repository README</a>.</p>
    </div>
  );
}
