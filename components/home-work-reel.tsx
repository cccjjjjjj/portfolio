import Image from "next/image";
import { TransitionLink } from "@/components/transition-link";

const reel = [
  { src: "/images/projects/grace/home.png", alt: "Grace purchase readiness product screen" },
  { src: "/images/projects/vast/timeline.png", alt: "VAST Challenge analytical timeline" },
  { src: "/images/projects/research/poverty-cover.jpg", alt: "Satellite-inspired Philippines research cover" },
];

export function HomeWorkReel() {
  return (
    <TransitionLink href="/work" className="home-work-reel" aria-label="View all five selected projects">
      <div className="home-work-reel-media">
        {reel.map((item, index) => (
          <figure key={item.src} className={`home-work-reel-item home-work-reel-item--${index + 1}`}>
            <Image src={item.src} alt={item.alt} fill priority sizes="(max-width: 700px) 50vw, 33vw" />
          </figure>
        ))}
      </div>
      <div className="home-work-reel-caption">
        <p>Five projects across product, analytics, and research.</p>
        <span>Explore work <i aria-hidden="true">↗</i></span>
      </div>
    </TransitionLink>
  );
}
