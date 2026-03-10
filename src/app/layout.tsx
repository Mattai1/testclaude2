import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stripe | Financial Infrastructure for the Internet",
  description:
    "Accept payments, build a marketplace, and grow your revenue online with Stripe's powerful APIs and tools.",
  openGraph: {
    type: "website",
    siteName: "Stripe",
    title: "Stripe | Financial Infrastructure for the Internet",
    description:
      "Accept payments, build a marketplace, and grow your revenue online with Stripe's powerful APIs and tools.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stripe | Financial Infrastructure for the Internet",
    description:
      "Accept payments, build a marketplace, and grow your revenue online with Stripe's powerful APIs and tools.",
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
