import type { Metadata } from "next";
import { Code, Page } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Avalok runs locally, with no account, analytics or cloud. Here is how to verify it yourself.",
  alternates: { canonical: "/privacy/" },
};

export default function Privacy() {
  return (
    <Page eyebrow="Privacy" title="Local by design" lead="Avalok runs on your machine and has no cloud service. This page says exactly what that means, and how to check it.">
      <section>
        <h2>The product</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>The dashboard and receiver bind to <code>127.0.0.1</code> only.</li>
          <li>The Avalok tool has no account, analytics, crash reporting or update check.</li>
          <li>Repository analysis never executes your code, uploads source or calls an LLM.</li>
          <li>Exports never include prompts, run titles, commands, file paths or secret-looking values, and you see a preview first.</li>
          <li>Avalok stores only its own observed runs and UI settings in your user-data directory. <code>avalok data clear</code> removes them.</li>
        </ul>
      </section>

      <section>
        <h2>Check it yourself</h2>
        <Code>{`avalok demo --no-open &
lsof -nP -iTCP -sTCP:LISTEN | grep -E ":(4737|4318)"
# both should show 127.0.0.1, not * or 0.0.0.0`}</Code>
        <p className="mt-4">Outbound connections were also measured before release and none to a non-loopback host were attempted. The code is open, so you can read it.</p>
      </section>

      <section>
        <h2>This website</h2>
        <p>
          avalok.dev is a static site. It sets no cookies and loads no third-party scripts; fonts are served from this site. It does
          use Vercel Web Analytics to count visits. That is cookieless and does not follow you across sites: it records page views,
          referrer, country, and device and browser type. It does not store your IP
          address or build a profile of you. The Avalok tool itself has no analytics at all.
        </p>
      </section>

      <section>
        <h2>More</h2>
        <p>
          Full documents: <a href={`${site.github}/blob/main/docs/privacy.md`}>Privacy</a>,{" "}
          <a href={`${site.github}/blob/main/SECURITY.md`}>Security policy</a>. Questions: <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </section>
    </Page>
  );
}
