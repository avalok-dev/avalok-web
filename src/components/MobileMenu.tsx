"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export function MobileMenu({ items }: { items: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-fg"
      >
        {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </button>
      {open && (
        <nav
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-b border-white/[0.06] bg-bg/95 px-5 py-3 backdrop-blur-xl"
        >
          {items.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/[0.05] py-3 text-base text-fg last:border-0"
            >
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}
