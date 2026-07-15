"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

type Point = {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  phase: number;
};

function hashPath(pathname: string) {
  return [...pathname].reduce((total, char) => total + char.charCodeAt(0), 17);
}

export function SignalField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let frame = 0;
    let points: Point[] = [];
    let pointer = { x: -1000, y: -1000, active: false };
    let visible = true;
    const seed = hashPath(pathname);

    const createPoints = () => {
      const columns = Math.max(5, Math.min(11, Math.floor(width / 145)));
      const rows = Math.max(4, Math.min(8, Math.floor(height / 145)));
      points = [];
      for (let row = 0; row < rows; row += 1) {
        for (let column = 0; column < columns; column += 1) {
          const baseX = ((column + 0.5) / columns) * width;
          const baseY = ((row + 0.5) / rows) * height;
          const offset = ((column * 31 + row * 17 + seed) % 19) - 9;
          points.push({ baseX, baseY, x: baseX, y: baseY, phase: offset * 0.31 });
        }
      }
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      createPoints();
    };

    const draw = (time = 0) => {
      if (!visible) return;
      context.clearRect(0, 0, width, height);
      const tick = reduceMotion ? 0 : time * 0.00022;

      for (const point of points) {
        const waveX = Math.sin(tick + point.phase) * 10;
        const waveY = Math.cos(tick * 0.8 + point.phase) * 8;
        const dx = point.baseX - pointer.x;
        const dy = point.baseY - pointer.y;
        const distance = Math.hypot(dx, dy);
        const influence = pointer.active ? Math.max(0, 1 - distance / 230) : 0;
        const force = influence * 30;
        point.x = point.baseX + waveX + (distance ? (dx / distance) * force : 0);
        point.y = point.baseY + waveY + (distance ? (dy / distance) * force : 0);
      }

      context.lineWidth = 0.7;
      for (let index = 0; index < points.length; index += 1) {
        const point = points[index];
        for (let nextIndex = index + 1; nextIndex < points.length; nextIndex += 1) {
          const next = points[nextIndex];
          const distance = Math.hypot(point.x - next.x, point.y - next.y);
          if (distance < 190) {
            const alpha = (1 - distance / 190) * 0.12;
            context.strokeStyle = `rgba(131, 165, 154, ${alpha})`;
            context.beginPath();
            context.moveTo(point.x, point.y);
            context.lineTo(next.x, next.y);
            context.stroke();
          }
        }
      }

      for (const point of points) {
        const distance = Math.hypot(point.x - pointer.x, point.y - pointer.y);
        const nearPointer = pointer.active && distance < 180;
        context.fillStyle = nearPointer ? "rgba(201, 139, 82, 0.72)" : "rgba(232, 228, 220, 0.23)";
        context.beginPath();
        context.arc(point.x, point.y, nearPointer ? 1.8 : 1.1, 0, Math.PI * 2);
        context.fill();
      }

      if (!reduceMotion) frame = window.requestAnimationFrame(draw);
    };

    const onPointerMove = (event: PointerEvent) => {
      pointer = { x: event.clientX, y: event.clientY, active: true };
    };
    const onPointerLeave = () => {
      pointer.active = false;
    };
    const onVisibility = () => {
      visible = document.visibilityState === "visible";
      if (visible && !reduceMotion) frame = window.requestAnimationFrame(draw);
      if (!visible) window.cancelAnimationFrame(frame);
    };

    resize();
    draw();
    if (!reduceMotion) frame = window.requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [pathname]);

  return <canvas ref={canvasRef} className="signal-field" aria-hidden="true" />;
}
