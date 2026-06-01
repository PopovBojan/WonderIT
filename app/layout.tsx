import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";
import HeaderLogo from "./components/HeaderLogo";
import NavLinks from "./components/NavLinks";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "WonderIT | Custom Web, Mobile & AI-Enhanced Software Development",

  description:
    "wonderIT builds modern web applications, mobile apps, SaaS platforms, automation systems, and custom software solutions using React, Next.js, React Native, Node.js, and cloud technologies. We also integrate AI and LLM-powered features into scalable digital products.",

  keywords: [
    "web development",
    "mobile app development",
    "custom software development",
    "React development",
    "Next.js development",
    "React Native development",
    "Node.js development",
    "SaaS development",
    "enterprise applications",
    "software engineering",
    "AI integrations",
    "LLM integrations",
    "automation systems",
    "dashboard development",
    "Firebase development",
    "MongoDB development",
    "real-time applications",
    "custom web applications",
    "startup software development",
    "digital product development",
  ],

  metadataBase: new URL("https://wonderit.io"),

  alternates: {
    canonical: "/",
  },

  authors: [{ name: "wonderIT" }],
  creator: "wonderIT",
  publisher: "wonderIT",

  openGraph: {
    title: "WonderIT | Custom Web, Mobile & AI-Enhanced Software Development",

    description:
      "We build scalable web platforms, mobile apps, SaaS products, automation tools, and AI-enhanced digital experiences.",

    url: "https://wonderit.io",

    siteName: "wonderIT",

    images: [
      {
        url: "https://wonderit.io/images/wonderIT-logo.webp",
        width: 1200,
        height: 630,
        alt: "wonderIT Logo",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "wonderIT | Web, Mobile & Custom Software Development Company",

    description:
      "Custom software, web apps, mobile apps, SaaS platforms, and AI-powered integrations built with modern technologies.",

    images: ["https://wonderit.io/images/wonderIT-logo.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "wonderIT",
              url: "https://wonderit.io",
              logo: "https://wonderit.io/images/wonderIT-logo.webp",
              description:
                "Software development company building web apps, mobile apps, SaaS platforms, automation systems, and AI-enhanced products.",
              sameAs: [
                "https://www.linkedin.com/company/wonderit",
                "https://github.com/wonderit",
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "React Native",
                "Node.js",
                "Firebase",
                "MongoDB",
                "AI Integrations",
                "LLM Applications",
                "SaaS Development",
                "Automation Systems",
              ],
              areaServed: "Worldwide",
            }),
          }}
        />
        <style>{`/* Inline critical CSS */\n/* Insert contents of 06_r287sbqzt5.css here */`}</style>
      </Head>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "wonderIT",
              url: "https://wonderit.io",
            }),
          }}
        />

        <header className="site-header">
          <div className="header-inner">
            <HeaderLogo />
            <NavLinks />
          </div>
        </header>

        {children}

        <footer className="site-footer">
          <div className="footer-inner">
            <p>© {new Date().getFullYear()} WonderIT. All rights reserved.</p>
            <Link href="/privacy-policy">Privacy Policy</Link>
<Link href="/terms-of-service">Terms of Service</Link>
<Link href="/cookie-policy">Cookie Policy</Link>
            <div className="socials" aria-label="Social links">
              <a
                href="https://www.facebook.com/wonderit.io#"
                aria-label="WonderIT on Facebook"
                rel="noopener noreferrer"
                target="blank"
              >
                f
              </a>
              <a
                href="https://www.linkedin.com/company/wonderit-io/posts/?feedView=all"
                aria-label="WonderIT on LinkedIn"
                rel="noopener noreferrer"
                 target="blank"
              >
                in
              </a>
              <a
                href="https://instagram.com/wonderit_io"
                aria-label="WonderIT on Instagram"
                rel="noopener noreferrer"
                 target="blank"
              >
                ig
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
