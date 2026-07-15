import { TransitionLink } from "@/components/transition-link";

export default function NotFound() {
  return (
    <section className="not-found page-enter">
      <p className="eyebrow">404 · Signal lost</p>
      <h1>This route does not lead anywhere yet.</h1>
      <TransitionLink href="/" className="text-action text-action--primary">
        Return home <span aria-hidden="true">↗</span>
      </TransitionLink>
    </section>
  );
}
