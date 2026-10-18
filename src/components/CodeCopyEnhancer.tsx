"use client";
import { useEffect } from "react";

// Adds a copy button to every code block inside .prose-avalok.
export function CodeCopyEnhancer() {
  useEffect(() => {
    const blocks = document.querySelectorAll<HTMLPreElement>(".prose-avalok pre");
    blocks.forEach((pre) => {
      if (pre.parentElement?.classList.contains("code-wrap")) return;
      const wrap = document.createElement("div");
      wrap.className = "code-wrap";
      pre.parentNode?.insertBefore(wrap, pre);
      wrap.appendChild(pre);
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "code-copy";
      btn.textContent = "Copy";
      btn.setAttribute("aria-label", "Copy code to clipboard");
      btn.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(pre.innerText.replace(/\n$/, ""));
          btn.textContent = "Copied";
          setTimeout(() => (btn.textContent = "Copy"), 1600);
        } catch {}
      });
      wrap.appendChild(btn);
    });
  }, []);
  return null;
}
