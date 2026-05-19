"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function HeaderLogo() {
  const pathname = usePathname();
  const isActive = pathname === "/";

  return (
    <Link href="/" className={`logo-box`}>
      <Image 
        src="/wonderit-logo.webp" 
        alt="WonderIT Logo" 
        width={140} 
        height={35} 
        className="h-8 w-auto object-contain"
        priority
      />
    </Link>
  );
}
