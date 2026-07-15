import type { PropsWithChildren } from "react";
import { Navigation } from "@/components/navigation";
import { RouteTransition } from "@/components/route-transition";
import { SignalField } from "@/components/signal-field";
import { TransitionLink } from "@/components/transition-link";
import { siteConfig } from "@/lib/site";

export function SiteShell({ children }: PropsWithChildren) {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SignalField />
      <RouteTransition />
      <div className="site-frame" aria-hidden="true" />
      <header className="site-header">
        <div className="identity">
          <TransitionLink href="/" className="identity-name">{siteConfig.name}</TransitionLink>
          <p>Project Management · Data Analytics · RegTech</p>
        </div>
        <Navigation />
      </header>
      <main id="main-content" className="site-main">{children}</main>
      <footer className="site-footer">
        <p>Singapore · Available December 2026</p>
        <p>© {new Date().getFullYear()} Charles Jr Ancheta</p>
      </footer>
    </>
  );
}
