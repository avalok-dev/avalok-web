"use client";
import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { track } from "@vercel/analytics";

export function CopyCommand({ command }: { command: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(command);
          track("copy_install_command", { command });
          setDone(true);
          setTimeout(() => setDone(false), 1800);
        } catch {}
      }}
      className="group inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 font-mono text-sm shadow-[0_0_0_1px_rgb(103_232_249/0.0)] transition hover:border-accent/50"
      aria-label={`Copy ${command}`}
    >
      <span className="text-accent">$</span>
      <span>{command}</span>
      {done ? <Check className="h-4 w-4 text-mint" /> : <Copy className="h-4 w-4 text-muted transition group-hover:text-fg" />}
    </button>
  );
}
