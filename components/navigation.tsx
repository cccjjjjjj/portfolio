"use client";

import { usePathname } from "next/navigation";
import { TransitionLink } from "@/components/transition-link";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/profile", label: "Profile" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className="primary-nav">
      <ul>
        {links.map((link) => {
          const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
          return (
            <li key={link.href}>
              <TransitionLink href={link.href} aria-current={active ? "page" : undefined}>
                <span aria-hidden="true" className="nav-marker" />
                <span className="nav-label"><span>{link.label}</span><span aria-hidden="true">{link.label}</span></span>
              </TransitionLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
