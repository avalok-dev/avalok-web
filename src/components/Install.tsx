import { npmPublished, site } from "@/lib/site";

export function Install() {
  return (
    <div className="rounded-xl border border-line bg-card p-5 font-mono text-sm">
      {npmPublished ? (
        <>
          <p className="text-muted"># in your repository</p>
          <p><span className="text-accent">$</span> npx avalok</p>
        </>
      ) : (
        <>
          <p className="text-muted"># developer preview {site.version}: build from a clone</p>
          <p><span className="text-accent">$</span> pnpm install --frozen-lockfile</p>
          <p><span className="text-accent">$</span> pnpm release:build --skip-smoke</p>
          <p><span className="text-accent">$</span> npm install -g ./artifacts/release/avalok-{site.version}.tgz</p>
          <p><span className="text-accent">$</span> cd your-repo &amp;&amp; avalok</p>
        </>
      )}
    </div>
  );
}
