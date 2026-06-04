import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yoursite.com"), // TODO: replace with your domain
  title: "Senior .NET Engineer | Distributed Systems & Agentic AI",
  description:
    "Senior Software Engineer specializing in .NET backend systems, distributed architecture, enterprise automation, and production agentic AI engineering.",
  keywords: [
    ".NET engineer",
    "distributed systems",
    "agentic AI",
    "Azure",
    "backend engineer",
    "C#",
    "workflow automation",
  ],
  authors: [{ name: "Your Name" }], // TODO: replace with your name
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yoursite.com", // TODO: replace with your domain
    siteName: "Your Portfolio", // TODO: replace with your name
    title: "Senior .NET Engineer | Distributed Systems & Agentic AI",
    description:
      "Senior Software Engineer specializing in .NET backend systems, distributed architecture, enterprise automation, and production agentic AI engineering.",
    images: [
      {
        url: "/og-image.png", // TODO: add an og-image.png to /public
        width: 1200,
        height: 630,
        alt: "Senior .NET Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Senior .NET Engineer | Distributed Systems & Agentic AI",
    description:
      "Senior Software Engineer specializing in .NET backend systems, distributed architecture, enterprise automation, and production agentic AI engineering.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-slate-950 text-slate-100">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
