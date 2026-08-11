import type { ReactNode } from "react";
import { CALENDLY_EMBED_SRC, CALENDLY_URL } from "../../lib/calendly";

export default function ContactLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <link rel="preconnect" href="https://calendly.com" />
      <link rel="preconnect" href="https://assets.calendly.com" crossOrigin="" />
      <link rel="dns-prefetch" href="https://calendly.com" />
      <link rel="dns-prefetch" href="https://assets.calendly.com" />
      <link rel="preload" href={CALENDLY_EMBED_SRC} as="document" />
      <link rel="prefetch" href={CALENDLY_URL} />
      {children}
    </>
  );
}
