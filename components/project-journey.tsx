"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import type { ProjectJourney as Journey } from "@/lib/project-journeys";

export function ProjectJourney({ slug, journey }: { slug: string; journey: Journey }) {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<Array<HTMLLIElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.step));
      }),
      { rootMargin: "-32% 0px -42%", threshold: 0.1 },
    );
    stepRefs.current.forEach((element) => element && observer.observe(element));
    return () => observer.disconnect();
  }, []);

  function moveStage(event: PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--pointer-x", `${((event.clientX - rect.left) / rect.width - 0.5) * 10}px`);
    event.currentTarget.style.setProperty("--pointer-y", `${((event.clientY - rect.top) / rect.height - 0.5) * 10}px`);
  }

  return (
    <section className={`project-journey project-journey--${slug}`} aria-label="Guided project walkthrough">
      <div className="journey-stage-wrap">
        <div className="journey-stage" data-active={active} onPointerMove={moveStage} onPointerLeave={(event) => { event.currentTarget.style.removeProperty("--pointer-x"); event.currentTarget.style.removeProperty("--pointer-y"); }}>
          <Image src={journey.image} alt={journey.imageAlt} fill priority sizes="(max-width: 900px) 100vw, 64vw" />
          <div className="journey-atmosphere" aria-hidden="true"><span /><span /><span /><span /></div>
          <p className="journey-position"><span>{String(active + 1).padStart(2, "0")}</span> / 04 · {journey.steps[active].kicker}</p>
        </div>
      </div>
      <ol className="journey-steps">
        {journey.steps.map((step, index) => (
          <li key={step.title} ref={(element) => { stepRefs.current[index] = element; }} data-step={index}>
            <button type="button" className="journey-step" aria-pressed={active === index} onClick={() => setActive(index)} onFocus={() => setActive(index)}>
              <span>{String(index + 1).padStart(2, "0")} · {step.kicker}</span>
              <strong>{step.title}</strong>
              <p>{step.body}</p>
            </button>
          </li>
        ))}
      </ol>
    </section>
  );
}
