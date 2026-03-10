import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://mocha.dev"),
  title: {
    default: "Blog — Mocha",
    template: "%s — Mocha Blog",
  },
  description:
    "Insights on agentic development, AI-powered coding, and the future of software engineering.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
