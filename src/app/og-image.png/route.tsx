import { ImageResponse } from "next/og";

export const runtime = "edge";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(circle at 20% 20%, rgba(192,132,252,0.35), transparent 45%), radial-gradient(circle at 85% 80%, rgba(103,232,249,0.25), transparent 40%), #09090b",
          color: "#ffffff",
          padding: "56px",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 24,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#c084fc",
          }}
        >
          Youmanize
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 70, fontWeight: 800, lineHeight: 1.05 }}>
            Sonali Dutta
          </div>
          <div style={{ fontSize: 34, color: "#67e8f9" }}>
            Founder | DEI Consultant, Trainer, Speaker & Coach
          </div>
          <div style={{ fontSize: 24, color: "#d4d4d8", maxWidth: "88%" }}>
            Building human-first, inclusive workplaces through leadership facilitation,
            LGBT+ inclusion, and practical culture transformation.
          </div>
        </div>

        <div style={{ display: "flex", gap: 26, fontSize: 22, color: "#e4e4e7" }}>
          <span>9+ Years Experience</span>
          <span>200+ Engagements</span>
          <span>Bengaluru, India</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
