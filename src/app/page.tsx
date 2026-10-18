import { ArrowRight, Boxes, Cable, FileText, Github, Layers, Radar, ShieldCheck } from "lucide-react";
import { CopyCommand } from "@/components/CopyCommand";
import { HeroMedia } from "@/components/HeroMedia";
import { Code, SectionHead } from "@/components/Section";
import { npmPublished, site } from "@/lib/site";

const works = ["Claude Code", "Codex", "OpenTelemetry", "OpenInference", "Terraform", "Kubernetes", "Helm", "Docker Compose", "TypeScript", "Python"];

const steps = [
  { n: "01", title: "Map the repository", body: "Avalok reads your source and configuration and draws services, datastores and deployment on one canvas. It never runs, builds or installs anything from your repo." },
  { n: "02", title: "See where the agent went", body: "Run it while Claude Code or Codex works, or after. The map lights up with the files touched, commands run, time spent and what failed." },
  { n: "03", title: "Share the recap", body: "One click, or avalok recap, gives you a card, an interactive replay, a diagram or a Markdown block for your pull request. You preview it first." },
];

const features = [
  { icon: Boxes, title: "Architecture, detected", body: "Services, routes, model and datastore integrations from TypeScript and Python. Every element shows its evidence and a confidence level." },
  { icon: Layers, title: "Infrastructure in context", body: "Terraform, Kubernetes, Helm, Docker and Compose are parsed as data, then linked to the services they deploy. Configured, not live state." },
  { icon: Radar, title: "Agent replay", body: "Codex sessions are read from disk, read-only. Claude Code comes in through its OpenTelemetry traces and opt-in hooks. Scrub a timeline of what happened." },
  { icon: Cable, title: "OpenTelemetry native", body: "Point any OTLP/HTTP trace exporter at the local receiver. No Collector needed. OpenInference spans show up as agent activity." },
  { icon: FileText, title: "Recaps for your PR", body: "A card, an HTML replay anyone can open, an architecture diagram for your README, and Markdown. Prompts, commands and file paths are never included." },
  { icon: ShieldCheck, title: "Local-first, provably", body: "No account, analytics or cloud. Both servers bind to 127.0.0.1. You can verify that yourself in one command." },
];

const faq = [
  ["Does anything leave my machine?", "No. Avalok has no cloud service, account, analytics, crash reporting or update check. It analyses your repository without executing it, uploading source or calling an LLM."],
  ["Which agents does it support?", "Codex through its local session files, and Claude Code through OpenTelemetry traces and opt-in hooks. Kiro and Cursor are on the roadmap. Any OTLP/HTTP trace source works too."],
  ["What does it need?", "Node.js 22.12 or newer. Then run npx avalok in a repository."],
  ["Is it free?", "Yes. The code is Apache-2.0. A hosted or team tier may exist someday as a separate product and would not change what the local edition does."],
  ["Does it understand my whole system?", "No, and it does not claim to. It reports what it detected, observed or inferred, with evidence. Deep analysis covers TypeScript and Python; other languages are inventoried."],
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="glow pointer-events-none absolute inset-0 -z-10" />
        <div className="bg-grid pointer-events-none absolute inset-0 -z-10" />
        <div className="mx-auto max-w-6xl px-5 pb-8 pt-20 text-center sm:pt-28">
          <a
            href={site.npm}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs text-muted transition hover:border-accent/40 hover:text-fg"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-mint" />
            Developer preview {site.version}{npmPublished ? " · now on npm" : ""}
            <ArrowRight className="h-3 w-3" />
          </a>
          <h1 className="mx-auto mt-7 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            See what your coding agent{" "}
            <span className="bg-gradient-to-r from-accent via-violet to-mint bg-clip-text text-transparent">
              did to your architecture.
            </span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-balance text-lg leading-relaxed text-muted sm:text-xl">
            Avalok maps your repository, overlays what Claude Code or Codex actually did, and turns the session into a
            recap you can share. One command. No account. Nothing leaves your machine.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CopyCommand command="npx avalok" />
            <a
              href={site.github}
              className="inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm text-muted transition hover:text-fg"
            >
              <Github className="h-4 w-4" /> Star on GitHub <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
          <p className="mt-4 text-xs text-muted">Requires Node.js 22.12+ · macOS, Linux and Windows</p>
          <HeroMedia />
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-5">
        <p className="text-center text-xs uppercase tracking-[0.18em] text-muted">Reads what you already have</p>
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {works.map((w) => (
            <span key={w} className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3.5 py-1.5 text-sm text-muted">{w}</span>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-32 max-w-6xl px-5">
        <SectionHead eyebrow="How it works" title="Run it once. See the whole session.">
          The loop is three steps, and none of them need a login.
        </SectionHead>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="card p-7">
              <span className="font-mono text-sm text-accent">{s.n}</span>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-32 max-w-6xl px-5">
        <SectionHead eyebrow="What you get" title="An honest map, with evidence.">
          Avalok says detected, observed and inferred, and shows why. It does not pretend to understand more than it does.
        </SectionHead>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, body }) => (
            <div key={title} className="card p-6 transition hover:border-white/[0.14]">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
                <Icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="mt-5 font-semibold tracking-tight">{title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-32 max-w-6xl px-5">
        <div className="card grid gap-10 p-8 sm:p-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Privacy</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Don&apos;t take our word for it.</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              The dashboard and receiver bind to 127.0.0.1 only. Run this and look at the addresses yourself.
            </p>
            <a href="/privacy/" className="mt-6 inline-flex items-center gap-2 text-sm text-accent">
              Full privacy details <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
          <div className="self-center">
            <Code>{`avalok demo --no-open &
lsof -nP -iTCP -sTCP:LISTEN | grep -E ":(4737|4318)"

# both lines show 127.0.0.1,
# not * or 0.0.0.0`}</Code>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-32 max-w-3xl px-5">
        <SectionHead eyebrow="Questions" title="Straight answers." />
        <div className="mt-10 divide-y divide-white/[0.07] border-y border-white/[0.07]">
          {faq.map(([q, a]) => (
            <details key={q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-medium">
                {q}
                <span className="text-xl leading-none text-muted transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 leading-relaxed text-muted">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="relative mx-auto mt-32 max-w-6xl px-5">
        <div className="card relative overflow-hidden px-6 py-16 text-center sm:py-20">
          <div className="glow pointer-events-none absolute inset-0 -z-0" />
          <h2 className="relative text-3xl font-semibold tracking-tight sm:text-5xl">Try it on your next agent session.</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-muted">
            It&apos;s a developer preview. Tell us what breaks and what you wanted it to show.
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CopyCommand command="npx avalok" />
            <a href={site.issues} className="rounded-xl px-4 py-3 text-sm text-muted transition hover:text-fg">Send feedback →</a>
          </div>
        </div>
      </section>
    </>
  );
}
