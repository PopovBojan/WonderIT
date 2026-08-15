import type { Metadata } from "next";
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
  title: "Custom Software Development Company | WonderIT",

  description:
    "WonderIT builds custom web apps, mobile products, SaaS platforms, real-time systems, and AI automation for startups and growing businesses.",

  metadataBase: new URL("https://wonderit.io"),

  alternates: {
    canonical: "/",
  },

  authors: [{ name: "wonderIT" }],
  creator: "wonderIT",
  publisher: "wonderIT",

  openGraph: {
    title: "Custom Software Development Company | WonderIT",

    description:
      "We build scalable web platforms, mobile apps, SaaS products, automation tools, and AI-enhanced digital experiences.",

    url: "https://wonderit.io",

    siteName: "wonderIT",

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "wonderIT | Web, Mobile & Custom Software Development Company",

    description:
      "Custom software, web apps, mobile apps, SaaS platforms, and AI-powered integrations built with modern technologies.",

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
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://wonderit.io/#organization",
                  name: "WonderIT",
                  url: "https://wonderit.io/",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://wonderit.io/wonderit-logo.webp",
                  },
                  description:
                    "Custom software development company building web apps, mobile products, SaaS platforms, real-time systems, and AI automation.",
                  sameAs: [
                    "https://www.linkedin.com/company/wonderit-io/",
                    "https://www.facebook.com/wonderit.io",
                    "https://www.instagram.com/wonderit_io/",
                  ],
                  areaServed: "Worldwide",
                },
                {
                  "@type": "WebSite",
                  "@id": "https://wonderit.io/#website",
                  name: "WonderIT",
                  url: "https://wonderit.io/",
                  publisher: { "@id": "https://wonderit.io/#organization" },
                },
              ],
            }).replace(/</g, "\\u003c"),
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
            <p className="footer-copyright">
              © {new Date().getFullYear()} WonderIT. All rights reserved.
            </p>
            <nav className="footer-links" aria-label="Legal">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-of-service">Terms of Service</Link>
              <Link href="/cookie-policy">Cookie Policy</Link>
            </nav>
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
