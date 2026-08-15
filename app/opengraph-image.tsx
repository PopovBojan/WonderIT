import { ImageResponse } from "next/og";

export const alt = "WonderIT custom software development";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 82px",
          background: "#f6f6f8",
          color: "#11111b",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontSize: 34,
            fontWeight: 800,
          }}
        >
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: 6,
              background: "#8d4de8",
            }}
          />
          WonderIT
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              maxWidth: 980,
              fontSize: 72,
              lineHeight: 1.04,
              letterSpacing: "-3px",
              fontWeight: 800,
            }}
          >
            Custom software built for real users.
          </div>
          <div
            style={{
              fontSize: 29,
              color: "#616173",
            }}
          >
            Web platforms · Mobile apps · SaaS · AI automation
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: "100%",
            height: 12,
            borderRadius: 999,
            background:
              "linear-gradient(90deg, #8d4de8 0%, #5f89dd 52%, #25cbbb 100%)",
          }}
        />
      </div>
    ),
    size,
  );
}
