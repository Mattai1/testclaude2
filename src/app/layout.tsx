import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mocha — The Agentic Development Platform",
  description: "Mocha is our agentic development platform, evolving the IDE into the agent-first era.",
  openGraph: {
    type: "website",
    siteName: "Mocha",
    title: "Mocha — The Agentic Development Platform",
    description: "Mocha is our agentic development platform, evolving the IDE into the agent-first era.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mocha — The Agentic Development Platform",
    description: "Mocha is our agentic development platform, evolving the IDE into the agent-first era.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
