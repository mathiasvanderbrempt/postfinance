"use client";

import * as React from "react";
import { PF } from "../lib/pf";

/**
 * Composite icon — petrol stroke base with exactly one gelb filled disc
 * behind a sub-glyph. Mirrors the "Composite" tier in the design system's
 * preview/icons.html.
 */
export type AccentName =
  | "scheduled"
  | "insight"
  | "card-alert"
  | "verified"
  | "save-more";

export default function IconAccent({
  name,
  size = 40,
}: {
  name: AccentName;
  size?: number;
}) {
  const stroke = PF.petrol9;
  const gelb = PF.gelb;
  const common = {
    fill: "none",
    stroke,
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (name === "scheduled") {
    return (
      <svg width={size} height={size} viewBox="0 0 40 40" {...common}>
        <rect x="4" y="11" width="22" height="14" rx="1.5" />
        <path d="M9 15h5" />
        <circle cx="28" cy="27" r="6.5" fill={gelb} stroke="none" />
        <circle cx="28" cy="27" r="6.5" />
        <path d="M28 23.5V27l2.4 1.4" />
      </svg>
    );
  }
  if (name === "insight") {
    return (
      <svg width={size} height={size} viewBox="0 0 40 40" {...common}>
        <path d="M5 30h26" />
        <path d="M9 26v-6" />
        <path d="M15 26v-10" />
        <path d="M21 26v-4" />
        <circle cx="29" cy="14" r="5" fill={gelb} stroke="none" />
        <circle cx="29" cy="14" r="5" />
        <path d="M27 15.5 28.5 13l1 1.4 2-2.4" />
      </svg>
    );
  }
  if (name === "card-alert") {
    return (
      <svg width={size} height={size} viewBox="0 0 40 40" {...common}>
        <rect x="4" y="10" width="24" height="16" rx="2" />
        <path d="M4 15h24" />
        <circle cx="30" cy="28" r="6.5" fill={gelb} stroke="none" />
        <circle cx="30" cy="28" r="6.5" />
        <path d="M30 25v3.5" />
        <circle cx="30" cy="31" r="0.6" fill={stroke} stroke="none" />
      </svg>
    );
  }
  if (name === "verified") {
    return (
      <svg width={size} height={size} viewBox="0 0 40 40" {...common}>
        <path d="M18 5 7 9v9a13 13 0 0 0 11 13 13 13 0 0 0 11-13V9z" />
        <circle cx="18" cy="18" r="5.5" fill={gelb} stroke="none" />
        <path d="m15 18 2.5 2.5L21 16" />
      </svg>
    );
  }
  // save-more
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" {...common}>
      <path d="M7 18a8 8 0 0 1 8-8h6a9 9 0 0 1 9 9v2a8 8 0 0 1-2 5v3h-3v-2h-5v2h-3v-2.5A8 8 0 0 1 7 18z" />
      <circle cx="24" cy="17" r="0.7" fill={stroke} stroke="none" />
      <path d="M5 14v2a2 2 0 0 0 2 2" />
      <circle cx="11" cy="9" r="5" fill={gelb} stroke={stroke} />
      <path d="M11 7v4 M9 9h4" />
    </svg>
  );
}
