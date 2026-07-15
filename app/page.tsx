import { HomeAperture } from "@/components/home-aperture";

export default function HomePage() {
  return (
    <div className="landing-page page-enter">
      <section className="landing" aria-labelledby="landing-title">
        <HomeAperture />
        <div>
          <p className="eyebrow"><span className="status-dot" aria-hidden="true" />Singapore · Available December 2026</p>
          <h1 id="landing-title">Charles Jr Ancheta</h1>
          <p>Project management / Data analytics / RegTech</p>
        </div>
      </section>
    </div>
  );
}
