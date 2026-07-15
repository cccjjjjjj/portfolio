import { ImageResponse } from "next/og";

export const alt = "Charles Jr Ancheta, Project Management, Data Analytics, and RegTech";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "stretch",
        background: "#090b0d",
        color: "#e8e4dc",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Arial, sans-serif",
        height: "100%",
        justifyContent: "space-between",
        padding: "68px 76px",
        position: "relative",
        width: "100%",
      }}
    >
      <div style={{ border: "1px solid rgba(232,228,220,.25)", inset: "28px", position: "absolute" }} />
      <div style={{ display: "flex", fontSize: 22, justifyContent: "space-between", letterSpacing: "-0.02em" }}>
        <strong>Charles Jr Ancheta</strong>
        <span style={{ color: "#a09b93" }}>Singapore</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 960 }}>
        <div style={{ color: "#c98b52", fontSize: 24, marginBottom: 24 }}>
          Project Management · Data Analytics · RegTech
        </div>
        <div style={{ fontSize: 76, letterSpacing: "-0.055em", lineHeight: 0.96 }}>
          Turning complexity into clear, measurable progress.
        </div>
      </div>
      <div style={{ color: "#a09b93", display: "flex", fontSize: 18, justifyContent: "space-between" }}>
        <span>Selected work · 2023–2026</span>
        <span>Available December 2026</span>
      </div>
    </div>,
    size,
  );
}
