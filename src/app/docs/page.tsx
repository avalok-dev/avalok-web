import type { Metadata } from "next";
import { DocView } from "@/components/DocView";
import { getDocs } from "@/lib/content";

export function generateMetadata(): Metadata {
  const d = getDocs().find((x) => x.slug === "index")!;
  return { title: d.title, description: d.description, alternates: { canonical: "/docs/" } };
}

export default function DocsIndex() {
  return <DocView slug="index" />;
}
