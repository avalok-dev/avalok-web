export function SectionHead({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {children && <p className="mt-4 text-lg leading-relaxed text-muted">{children}</p>}
    </div>
  );
}

export function Code({ children }: { children: string }) {
  return (
    <pre className="overflow-x-auto rounded-xl border border-white/[0.08] bg-[#090c12] p-4 font-mono text-[13px] leading-relaxed text-fg/90">
      <code>{children}</code>
    </pre>
  );
}

export function Page({ eyebrow, title, lead, children }: { eyebrow: string; title: string; lead?: string; children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="glow pointer-events-none absolute inset-x-0 top-0 -z-10 h-72" />
      <article className="mx-auto max-w-3xl px-5 pt-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
        {lead && <p className="mt-5 text-lg leading-relaxed text-muted">{lead}</p>}
        <div className="mt-12 space-y-12 text-[15px] leading-relaxed text-muted [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-fg [&_a]:text-accent [&_a]:underline [&_a]:decoration-accent/40 [&_a]:underline-offset-[3px] [&_code]:font-mono [&_code]:text-[13px] [&_code]:text-fg/90">
          {children}
        </div>
      </article>
    </div>
  );
}
