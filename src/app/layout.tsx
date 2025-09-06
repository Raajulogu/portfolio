import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "RAJESHKUMAR - Software Developer Portfolio",
  description:
    "Full Stack Software Developer with 8+ years experience in Next.js, React, Node.js, and MongoDB. Code. Collaborate. Elevate.",
  generator: "v0.app",
  keywords: ["Software Developer", "Full Stack", "React", "Next.js", "Node.js", "MongoDB", "TypeScript"],
  authors: [{ name: "RAJESHKUMAR.R" }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
