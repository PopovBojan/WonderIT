"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export default function NavLinks() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((v) => !v), []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close on route change
  useEffect(() => { close(); }, [pathname, close]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [close]);

  const isActive = (href: string) =>
    href.startsWith("/#") ? false : pathname === href;

  return (
    <>
      {/* ── Desktop nav ── */}
      <nav className="nav" aria-label="Primary navigation">
        {NAV_LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            aria-current={isActive(href) ? "page" : undefined}
          >
            {label}
          </Link>
        ))}
        <Link
          className="contact-link"
          href="/contact"
          aria-current={pathname === "/contact" ? "page" : undefined}
        >
          Contact
        </Link>
      </nav>

      {/* ── Burger button (mobile only) ── */}
      <button
        id="burger-toggle"
        className={`burger-toggle${isOpen ? " is-open" : ""}`}
        onClick={toggle}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-nav"
        type="button"
      >
        <span className="burger-bar" />
        <span className="burger-bar" />
        <span className="burger-bar" />
      </button>

      {/* ── Backdrop ── */}
      <div
        className={`mobile-backdrop${isOpen ? " is-visible" : ""}`}
        onClick={close}
        aria-hidden="true"
      />

      {/* ── Mobile drawer ── */}
      <nav
        id="mobile-nav"
        className={`mobile-nav${isOpen ? " is-open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
      >
        <div className="mobile-nav-inner">
          <ul className="mobile-nav-list" role="list">
            {NAV_LINKS.map(({ href, label }, i) => (
              <li key={href} style={{ "--i": i } as React.CSSProperties}>
                <Link
                  href={href}
                  className={`mobile-nav-link${isActive(href) ? " is-active" : ""}`}
                  aria-current={isActive(href) ? "page" : undefined}
                  onClick={close}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li style={{ "--i": NAV_LINKS.length } as React.CSSProperties}>
              <Link
                href="/contact"
                className="mobile-nav-link mobile-contact-link"
                aria-current={pathname === "/contact" ? "page" : undefined}
                onClick={close}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
