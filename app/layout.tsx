import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PostFinance — iOS app canvas",
  description:
    "High-fidelity recreation of the PostFinance iOS app, post-March 2025 rebrand. Six screens shown side-by-side.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
