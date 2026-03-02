import type { Metadata } from "next";
import { type ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mina Nord | UX Portfolio",
  description:
    "Portfolio frontend in Next.js with matching light and dark mode canvases, project showcase, process, and contact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
