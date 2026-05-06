import * as React from "react";
import { PF } from "../../lib/pf";

export function Section({
  eyebrow,
  title,
  lede,
  id,
  children,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      style={{
        maxWidth: 1280,
        margin: "0 auto",
        padding: "64px 40px",
      }}
    >
      <div style={{ marginBottom: 40, maxWidth: 720 }}>
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: PF.petrol6,
          }}
        >
          {eyebrow}
        </div>
        <h2
          style={{
            margin: "10px 0 0",
            fontSize: 40,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: PF.petrol11,
            lineHeight: 1.1,
          }}
        >
          {title}
        </h2>
        {lede && (
          <p
            style={{
              margin: "16px 0 0",
              fontSize: 17,
              fontWeight: 300,
              lineHeight: 1.55,
              color: PF.petrol9,
              maxWidth: 640,
            }}
          >
            {lede}
          </p>
        )}
      </div>
      {children}
    </section>
  );
}

export function Block({
  title,
  description,
  spec,
  children,
  span = 1,
  pad = true,
  bg,
}: {
  title?: string;
  description?: string;
  spec?: React.ReactNode;
  children: React.ReactNode;
  span?: 1 | 2 | 3;
  pad?: boolean;
  bg?: string;
}) {
  return (
    <div
      style={{
        gridColumn: `span ${span}`,
        background: PF.white,
        borderRadius: 20,
        boxShadow: "0 1px 0 rgba(0, 75, 90, 0.06)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          background: bg ?? "#F6FAFB",
          padding: pad ? 28 : 0,
          borderBottom: title || description ? "1px solid #E1ECEE" : "none",
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 160,
        }}
      >
        {children}
      </div>
      {(title || description || spec) && (
        <div style={{ padding: "18px 22px 22px" }}>
          {title && (
            <div
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: PF.petrol11,
                letterSpacing: "-0.005em",
              }}
            >
              {title}
            </div>
          )}
          {description && (
            <p
              style={{
                margin: "4px 0 0",
                fontSize: 13,
                fontWeight: 300,
                color: PF.petrol9,
                lineHeight: 1.5,
              }}
            >
              {description}
            </p>
          )}
          {spec && (
            <div
              style={{
                marginTop: 12,
                display: "flex",
                flexWrap: "wrap",
                gap: 6,
              }}
            >
              {spec}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export function Grid({
  children,
  cols = 3,
  gap = 16,
}: {
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4 | 6;
  gap?: number;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        gap,
      }}
    >
      {children}
    </div>
  );
}
