"use client";

import * as React from "react";
import { PF, pfFont, pfMono } from "../../lib/pf";

export function CopyChip({
  label,
  value,
  variant = "mono",
}: {
  label?: string;
  value: string;
  variant?: "mono" | "label";
}) {
  const [copied, setCopied] = React.useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      }}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "4px 10px",
        borderRadius: 999,
        background: copied ? PF.petrol9 : PF.petrol1,
        color: copied ? PF.white : PF.petrol9,
        fontFamily: variant === "mono" ? pfMono : pfFont,
        fontSize: 11,
        fontWeight: variant === "mono" ? 500 : 700,
        border: "none",
        cursor: "pointer",
        letterSpacing: variant === "mono" ? 0 : "0.04em",
        transition: "background 120ms ease, color 120ms ease",
      }}
      aria-label={`Copy ${value}`}
    >
      {label && <span style={{ opacity: 0.7 }}>{label}</span>}
      <span>{copied ? "Copied" : value}</span>
    </button>
  );
}

export function CodeBlock({
  code,
  language,
}: {
  code: string;
  language?: string;
}) {
  const [copied, setCopied] = React.useState(false);
  return (
    <div
      style={{
        position: "relative",
        background: PF.petrol11,
        color: PF.petrol1,
        borderRadius: 12,
        padding: "16px 18px",
        fontFamily: pfMono,
        fontSize: 12,
        lineHeight: 1.6,
        overflowX: "auto",
        whiteSpace: "pre",
      }}
    >
      <button
        onClick={() => {
          navigator.clipboard.writeText(code);
          setCopied(true);
          setTimeout(() => setCopied(false), 1200);
        }}
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          background: copied ? PF.gelb : "rgba(255,255,255,0.08)",
          color: copied ? PF.petrol11 : PF.white,
          border: "none",
          borderRadius: 999,
          padding: "4px 12px",
          fontFamily: pfFont,
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          cursor: "pointer",
          transition: "background 120ms ease, color 120ms ease",
        }}
      >
        {copied ? "Copied" : "Copy"}
      </button>
      {language && (
        <span
          style={{
            position: "absolute",
            top: 10,
            left: 14,
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            opacity: 0.4,
          }}
        >
          {language}
        </span>
      )}
      <code style={{ display: "block", marginTop: language ? 18 : 0 }}>
        {code}
      </code>
    </div>
  );
}
