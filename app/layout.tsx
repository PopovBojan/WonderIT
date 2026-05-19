import type { Metadata } from "next";
import Link from "next/link";
import SidebarLinks from "./components/SidebarLinks";
import HeaderLogo from "./components/HeaderLogo";
import MobileNav from "./components/MobileNav";
import "./globals.css";


export const metadata: Metadata = {
  title:
    "WonderIT | Custom Web, Mobile & AI-Enhanced Software Development",
    
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
    title:
      "WonderIT | Custom Web, Mobile & AI-Enhanced Software Development",

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
    title:
      "wonderIT | Web, Mobile & Custom Software Development Company",

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
    <html lang="en">
     
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
        {/* Vertical Sidebar Navigation */}
        <nav className="sidebar fixed left-0 top-0 bottom-0 z-50 flex flex-col justify-center glass overflow-hidden">
          <SidebarLinks />
        </nav>

        {/* Logo Header - Aligned with container */}
        <header className="logo-container">
          <div className="container flex items-center justify-between">
            <HeaderLogo />
            <MobileNav />
          </div>
        </header>

        {/* Main Content Wrapper */}
        <div className="main-wrapper">
          {children}

          {/* Footer */}
          <footer className="py-12 border-t border-black/5">
            <div className="container">
              {/* Social Links */}
              <div className="flex justify-center gap-4 mb-6">
                <a 
                  href="https://www.facebook.com/wonderit.io#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-full glass hover:bg-accent-primary hover:text-white transition-all"
                  style={{ width: '40px', height: '40px', color: 'var(--accent-secondary)' }}
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/company/wonderit-io/posts/?feedView=all" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-full glass hover:bg-accent-primary hover:text-white transition-all"
                  style={{ width: '40px', height: '40px', color: 'var(--accent-secondary)' }}
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a 
                  href="https://instagram.com/wonderit_io" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-full glass hover:bg-accent-primary hover:text-white transition-all"
                  style={{ width: '40px', height: '40px', color: 'var(--accent-secondary)' }}
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
              
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 mobile-footer-wrapper">
                <Link href="/" className="text-xl font-bold gradient-text">WonderIT</Link>
                <p className="text-text-secondary text-sm">
                  © {new Date().getFullYear()} WonderIT. All rights reserved.
                </p>
                <div className="flex gap-6 text-sm text-text-secondary mobile-footer-links">
                  <Link href="/privacy" className="hover:text-black">Privacy Policy</Link>
                  <Link href="/terms" className="hover:text-black">Terms of Service</Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
