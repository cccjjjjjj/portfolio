"use client";

import { useEffect, useRef } from "react";

export function HomeAperture() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const aperture = ref.current;
    if (!aperture || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    function move(event: PointerEvent) {
      aperture?.style.setProperty("--aperture-x", `${((event.clientX / window.innerWidth) - 0.5) * 12}px`);
      aperture?.style.setProperty("--aperture-y", `${((event.clientY / window.innerHeight) - 0.5) * 12}px`);
    }
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return <div ref={ref} className="home-aperture" aria-hidden="true"><span /></div>;
}
