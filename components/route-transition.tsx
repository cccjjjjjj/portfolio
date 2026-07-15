"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Origin = { x: number; y: number };

export function RouteTransition() {
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    function begin(event: Event) {
      const detail = (event as CustomEvent<Origin>).detail;
      document.documentElement.style.setProperty("--route-x", `${detail.x}px`);
      document.documentElement.style.setProperty("--route-y", `${detail.y}px`);
      timers.current.forEach(window.clearTimeout);
      setActive(false);
      window.requestAnimationFrame(() => setActive(true));
    }
    window.addEventListener("portfolio:navigate", begin);
    return () => window.removeEventListener("portfolio:navigate", begin);
  }, []);

  useEffect(() => {
    timers.current.forEach(window.clearTimeout);
    timers.current = [window.setTimeout(() => setActive(false), 420)];
    return () => timers.current.forEach(window.clearTimeout);
  }, [pathname]);

  return <div className="route-transition" data-active={active || undefined} aria-hidden="true" />;
}
