"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HeaderLogo from "./HeaderLogo";

const NAV_LINKS = [
  {
    href: "/services",
    label: "Services",
    description: "Web, mobile, SaaS and AI",
  },
  {
    href: "/work",
    label: "Work",
    description: "Projects and case studies",
  },
  {
    href: "/industries",
    label: "Industries",
    description: "Domain-specific software",
  },
  {
    href: "/about",
    label: "About",
    description: "Team, values, process",
  },
  {
    href: "/blog",
    label: "Insights",
    description: "Insights and updates",
  },
];

const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/wonderit.io#",
    label: "WonderIT on Facebook",
    text: "f",
  },
  {
    href: "https://www.linkedin.com/company/wonderit-io/posts/?feedView=all",
    label: "WonderIT on LinkedIn",
    text: "in",
  },
  {
    href: "https://instagram.com/wonderit_io",
    label: "WonderIT on Instagram",
    text: "ig",
  },
];

const FOCUSABLE = 'a[href], button:not([disabled])';

export default function NavLinks() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const previousFocus = useRef<HTMLElement | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const close = useCallback(() => {
    setIsOpen(false);
    document.body.classList.remove("menu-open");
    previousFocus.current?.focus();
  }, []);

  const open = useCallback(() => {
    previousFocus.current = document.activeElement as HTMLElement;
    setIsOpen(true);
    document.body.classList.add("menu-open");
    window.setTimeout(() => {
      navRef.current?.querySelector<HTMLElement>(FOCUSABLE)?.focus();
    }, 60);
  }, []);

  const toggle = useCallback(() => {
    if (isOpen) close();
    else open();
  }, [isOpen, close, open]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(close);
    return () => window.cancelAnimationFrame(frame);
  }, [pathname, close]);

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        return;
      }

      if (event.key !== "Tab" || !navRef.current) return;

      const items = [
        ...navRef.current.querySelectorAll<HTMLElement>(FOCUSABLE),
      ];
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  useEffect(() => {
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, []);

  const isActive = (href: string) =>
    href.startsWith("/#") ? false : pathname === href;

  return (
    <>
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
          Contact us
        </Link>
      </nav>

      <button
        className="menu-trigger"
        onClick={toggle}
        aria-controls="mobileNav"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        type="button"
      >
        <span className="menu-bars" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
      </button>

      <aside
        ref={navRef}
        id="mobileNav"
        className={`mobile-nav${isOpen ? " is-open" : ""}`}
        aria-hidden={!isOpen}
      >
        <div
          className="mobile-nav__scrim"
          onClick={close}
          aria-hidden="true"
        />

        <div
          className="mobile-nav__panel"
          role="dialog"
          aria-modal={isOpen}
          aria-label="Mobile navigation menu"
        >
          <div className="mobile-nav__surface">
            <div className="mobile-nav__top">
              <HeaderLogo />
              <button
                className="mobile-nav__close"
                type="button"
                aria-label="Close menu"
                onClick={close}
              >
                ×
              </button>
            </div>

            <div className="mobile-nav__intro">
              <small>Build with WonderIT</small>
              <strong>From product idea to scalable software.</strong>
            </div>

            <ul className="mobile-nav__links">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`mobile-nav__link${isActive(link.href) ? " is-active" : ""}`}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    onClick={close}
                  >
                    <span className="mobile-nav__copy">
                      <strong>{link.label}</strong>
                      <span>{link.description}</span>
                    </span>
                    <span className="mobile-nav__arrow" aria-hidden="true">
                      ›
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mobile-nav__footer">
              <Link href="/contact" className="mobile-nav__cta" onClick={close}>
                Start a project
              </Link>

              <div className="mobile-nav__socials">
                <span>Follow WonderIT</span>
                <nav aria-label="Social links">
                  {SOCIAL_LINKS.map((social) => (
                    <a
                      key={social.href}
                      href={social.href}
                      aria-label={social.label}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {social.text}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
