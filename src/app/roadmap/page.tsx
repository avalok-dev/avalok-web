import type { Metadata } from "next";
export const metadata: Metadata = { title: "Roadmap" };

const groups = [
  { h: "Now", items: ["Publish 0.1.0-alpha to npm so `npx avalok` works", "Test with real Claude Code and Codex users", "A clearer first screen: your sessions first"] },
  { h: "Next", items: ["Kiro and Cursor through hooks", "Session insights that cite evidence", "`avalok run -- <command>`", "A GitHub Action that posts the recap on a PR"] },
  { h: "Not planned in the open-source edition", items: ["Accounts, hosted storage, team dashboards", "Live AWS or Kubernetes connections", "Anything that sends your code or sessions off your machine"] },
];

export default function Roadmap() {
  return (
    <div className="mx-auto max-w-2xl px-4 pt-16">
      <h1 className="text-3xl font-semibold">Roadmap</h1>
      <p className="mt-3 text-muted">A statement of intent, not a promise or a schedule.</p>
      {groups.map((g) => (
        <section key={g.h} className="mt-8">
          <h2 className="text-xl font-semibold">{g.h}</h2>
          <ul className="mt-2 space-y-1 text-muted">{g.items.map((i) => <li key={i}>· {i}</li>)}</ul>
        </section>
      ))}
    </div>
  );
}
