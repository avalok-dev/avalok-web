import { Eye, Map, Share2, ShieldCheck } from "lucide-react";
import { Install } from "@/components/Install";
import { npmPublished, site } from "@/lib/site";

const steps = [
  { icon: Map, title: "Map", body: "Avalok detects services, datastores and infrastructure (Terraform, Kubernetes, Helm, Docker) from your repository. Nothing is executed." },
  { icon: Eye, title: "Watch", body: "Overlay what Claude Code or Codex actually did: files touched, commands run, time spent, what failed." },
  { icon: Share2, title: "Share", body: "One click makes a recap card, interactive replay, diagram or Markdown block for your PR. You preview it first." },
];

const privacy = [
  "Dashboard and receiver bind to 127.0.0.1 only",
  "No account, analytics, crash reporting or update check",
  "Analysis never runs your code, uploads source or calls an LLM",
  "Exports omit prompts, commands, file paths and secret-looking values",
];

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-4 pt-20 text-center">
        <p className="mb-4 inline-block rounded-full border border-line px-3 py-1 text-xs text-muted">
          {npmPublished ? "Developer preview" : `Developer preview ${site.version} · not on npm yet`}
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
          Watch what your coding agent
          <br />
          <span className="text-accent">just did to your architecture.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
          Avalok is a local-first dashboard. It maps your repository, overlays your agent&apos;s
          activity, and turns a session into a recap you can share. One command, no account.
        </p>
        <div className="mx-auto mt-8 max-w-xl text-left"><Install /></div>
        <img
          src="/avalok-overview.png"
          alt="Avalok showing a sample platform's services, datastores and AWS/Kubernetes configuration on one canvas"
          className="mx-auto mt-14 w-full rounded-xl border border-line"
        />
      </section>

      <section className="mx-auto mt-24 grid max-w-5xl gap-4 px-4 sm:grid-cols-3">
        {steps.map(({ icon: Icon, title, body }) => (
          <div key={title} className="rounded-xl border border-line bg-card p-5">
            <Icon className="mb-3 h-5 w-5 text-accent" />
            <h2 className="font-semibold">{title}</h2>
            <p className="mt-2 text-sm text-muted">{body}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto mt-24 max-w-5xl px-4">
        <div className="rounded-xl border border-line bg-card p-8">
          <ShieldCheck className="mb-3 h-5 w-5 text-mint" />
          <h2 className="text-2xl font-semibold">Local by design, and checkable</h2>
          <ul className="mt-4 grid gap-2 text-muted sm:grid-cols-2">
            {privacy.map((p) => <li key={p}>· {p}</li>)}
          </ul>
          <a href="/privacy/" className="mt-5 inline-block text-sm text-accent">How to verify it yourself →</a>
        </div>
      </section>
    </>
  );
}
