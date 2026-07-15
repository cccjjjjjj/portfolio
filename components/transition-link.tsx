"use client";

import Link, { type LinkProps } from "next/link";
import type { MouseEvent } from "react";

type TransitionLinkProps = LinkProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>;

export function TransitionLink(props: TransitionLinkProps) {
  const { onClick, target, ...linkProps } = props;

  function beginTransition(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || target === "_blank") return;
    const rect = event.currentTarget.getBoundingClientRect();
    window.dispatchEvent(new CustomEvent("portfolio:navigate", {
      detail: { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 },
    }));
  }

  return <Link {...linkProps} target={target} onClick={beginTransition} />;
}
