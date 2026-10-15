import type { Metadata } from "next";
export const metadata: Metadata = { title: "Privacy" };

export default function Privacy() {
  return (
    <article className="mx-auto max-w-2xl px-4 pt-16 text-muted [&_h1]:text-fg [&_h2]:text-fg [&_code]:text-accent [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:border [&_pre]:border-line [&_pre]:bg-card [&_pre]:p-4">
      <h1 className="text-3xl font-semibold">Privacy</h1>
      <p className="mt-4">Avalok runs on your machine. There is no Avalok cloud service, account, analytics, crash reporting or update check.</p>
      <h2 className="mt-8 text-xl font-semibold">Check it yourself</h2>
      <pre className="mt-3 text-sm"><code>{`avalok demo --no-open &
lsof -nP -iTCP -sTCP:LISTEN | grep -E ":(4737|4318)"
# both should show 127.0.0.1, not * or 0.0.0.0`}</code></pre>
      <h2 className="mt-8 text-xl font-semibold">This website</h2>
      <p className="mt-2">avalok.dev is a static site. It sets no cookies and runs no analytics.</p>
      <p className="mt-6">Full details: <a className="text-accent" href="https://github.com/avalok-dev/avalok/blob/main/docs/privacy.md">docs/privacy.md</a>.</p>
    </article>
  );
}
