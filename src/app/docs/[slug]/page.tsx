import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocView } from "@/components/DocView";
import { getDocs } from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return getDocs().filter((d) => d.slug !== "index").map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const d = getDocs().find((x) => x.slug === slug);
  if (!d) return {};
  return { title: d.title, description: d.description, alternates: { canonical: `/docs/${slug}/` } };
}

export default async function DocPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!getDocs().some((d) => d.slug === slug)) notFound();
  return <DocView slug={slug} />;
}
