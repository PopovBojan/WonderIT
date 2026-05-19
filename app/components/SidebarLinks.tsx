"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/work", label: "Our Work" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function SidebarLinks() {
  const pathname = usePathname();

  return (
    <ul className="sidebar-links flex flex-col py-10">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <li key={link.href}>
            <Link 
              href={link.href} 
              className={`sidebar-link group ${isActive ? "active" : ""}`}
            >
              <span className="link-text">{link.label}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
