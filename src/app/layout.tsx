import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "John Doe | Software Engineer",
  description: "Portfolio of John Doe - A passionate software engineer crafting elegant solutions to complex problems. Full Stack Developer specializing in React, Next.js, and Node.js.",
  keywords: ["Software Engineer", "Full Stack Developer", "React", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: "John Doe" }],
  openGraph: {
    title: "John Doe | Software Engineer",
    description: "Portfolio of John Doe - A passionate software engineer crafting elegant solutions to complex problems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
