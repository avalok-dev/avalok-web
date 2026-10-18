import type { Metadata } from "next";
import { Page } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Roadmap",
  description: "What Avalok plans next, what it is considering, and what it deliberately will not do.",
  alternates: { canonical: "/roadmap/" },
};

const groups = [
  { h: "Now", note: "Developer preview", items: ["Test with real Claude Code and Codex users and fix the top blockers", "A clearer first screen: your sessions first, setup out of the way"] },
  { h: "Next", note: "If people use it", items: ["Kiro (CLI first) and Cursor (IDE first) through hooks", "Session insights that cite their evidence: what depends on what changed, touched-but-untested files, sensitive areas", "avalok run -- <command> to start an app with OpenTelemetry pointed at Avalok", "A GitHub Action that posts the Markdown recap on a pull request"] },
  { h: "Considering", note: "", items: ["Slower replay speeds and side-by-side comparison of two sessions", "Deeper language support beyond JavaScript/TypeScript and Python"] },
  { h: "Not planned in the open-source edition", note: "", items: ["Accounts, hosted storage, team dashboards, prompt management or evals", "Live connections to AWS, Kubernetes clusters or cloud billing", "Anything that sends your code, prompts or sessions off your machine, or that blocks or changes what your agent does"] },
];

export default function Roadmap() {
  return (
    <Page eyebrow="Roadmap" title="What's next" lead="A statement of intent, not a promise or a schedule.">
      {groups.map((g) => (
        <section key={g.h}>
          <h2>
            {g.h} {g.note && <span className="ml-2 text-sm font-normal text-muted">{g.note}</span>}
          </h2>
          <ul className="list-disc space-y-1.5 pl-5">{g.items.map((i) => <li key={i}>{i}</li>)}</ul>
        </section>
      ))}
      <p>
        A hosted or team tier may exist someday as a separate product. It would not change what the local edition does. Want
        something here to move? <a href={site.issues}>Say what you were trying to do.</a>
      </p>
    </Page>
  );
}
