import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/site";
import { Header, Footer } from "@/components/Chrome";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name}: ${site.tagline}`, template: `%s · ${site.name}` },
  description: site.description,
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: `${site.name}: ${site.tagline}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: ["/avalok-overview.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-bg font-sans text-fg antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
