/* eslint-disable @next/next/no-css-tags */
import type { Metadata } from "next";
import Script from "next/script";

import { ThemeProvider } from "@/components/theme-provider";

const siteUrl = "https://your-domain.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Software, DevOps & Infrastructure Engineer",
    template: "%s | Portfolio",
  },
  description:
    "A premium engineering portfolio for a Computer Science graduate focused on software engineering, DevOps, production systems, and cloud infrastructure.",
  keywords: [
    "Software Engineer",
    "DevOps Engineer",
    "Production Engineer",
    "Infrastructure Engineer",
    "Next.js",
    "Docker",
    "Kubernetes",
    "AWS",
    "CI/CD",
  ],
  authors: [{ name: "Yeasin Arfin" }],
  creator: "Yeasin Arfin",
  applicationName: "Engineering Portfolio",
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Software, DevOps & Infrastructure Engineer",
    description:
      "Modern portfolio showcasing scalable products, cloud infrastructure, and production engineering mindset.",
    siteName: "Engineering Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Software and DevOps engineering portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software, DevOps & Infrastructure Engineer",
    description:
      "A recruiter-focused portfolio for software, DevOps, and infrastructure roles.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Yeasin Arfin",
  url: siteUrl,
  jobTitle: [
    "Software Engineer",
    "DevOps Engineer",
    "Production Engineer",
    "Infrastructure Engineer",
  ],
  knowsAbout: [
    "Software Engineering",
    "DevOps",
    "Cloud Infrastructure",
    "CI/CD",
    "Docker",
    "Kubernetes",
    "TypeScript",
    "Next.js",
  ],
  sameAs: ["https://github.com/Arfiny007", "https://linkedin.com/in/yourusername"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="noise" aria-hidden="true" />
          {children}
          <Script
            id="portfolio-json-ld"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
