import fs from "node:fs";
import path from "node:path";

// Drop a file at public/media/demo.gif (or demo.mp4 / demo.webm) and rebuild:
// it replaces the screenshot automatically. No code change needed.
function findDemo() {
  for (const f of ["demo.mp4", "demo.webm", "demo.gif"]) {
    if (fs.existsSync(path.join(process.cwd(), "public", "media", f))) return f;
  }
  return null;
}

export function HeroMedia() {
  const demo = findDemo();
  const src = demo ? `/media/${demo}` : "/avalok-overview.png";
  const alt = "Avalok showing a sample platform's services, datastores and AWS/Kubernetes configuration on one canvas";
  return (
    <div className="relative mx-auto mt-16 max-w-5xl">
      <div className="absolute -inset-x-10 -top-10 bottom-0 -z-10 rounded-[3rem] bg-gradient-to-b from-accent/10 via-violet/10 to-transparent blur-3xl" />
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#090c12] shadow-2xl shadow-black/60">
        <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="mx-auto rounded-md bg-white/[0.05] px-3 py-1 font-mono text-[11px] text-muted">127.0.0.1:4737</span>
          <span className="w-10" />
        </div>
        {demo && demo !== "demo.gif" ? (
          <video src={src} autoPlay loop muted playsInline className="block w-full" aria-label={alt} />
        ) : (
          <img src={src} alt={alt} width={1600} height={960} fetchPriority="high" decoding="async" className="block h-auto w-full" />
        )}
      </div>
    </div>
  );
}
