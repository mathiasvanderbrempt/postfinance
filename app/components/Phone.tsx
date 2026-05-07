"use client";

import * as React from "react";
import { PF } from "../lib/pf";
import { PFTabBar, TabKey } from "./PFKit";

interface PhoneProps {
  label: string;
  caption?: string;
  activeTab?: TabKey | null;
  showTabBar?: boolean;
  children: React.ReactNode;
}

export default function Phone({
  label,
  caption,
  activeTab,
  showTabBar = true,
  children,
}: PhoneProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 24,
        width: 390,
        flex: "0 0 auto",
      }}
    >
      <div>
        <div
          style={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: PF.petrol9,
            opacity: 0.55,
          }}
        >
          {label}
        </div>
        {caption && (
          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              lineHeight: 1.2,
              color: PF.petrol9,
              marginTop: 6,
              letterSpacing: "-0.01em",
              maxWidth: 360,
            }}
          >
            {caption}
          </div>
        )}
      </div>

      <div
        style={{
          width: 390,
          height: 844,
          borderRadius: 56,
          background: PF.petrol11,
          padding: 8,
          boxShadow: "var(--pf-shadow-phone)",
          flex: "0 0 auto",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            borderRadius: 48,
            background: PF.white,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Status bar */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 28px",
              zIndex: 20,
              pointerEvents: "none",
              fontSize: 14,
              fontWeight: 600,
              color: PF.fg1,
            }}
          >
            <span>9:41</span>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
              {/* signal */}
              <svg width="18" height="10" viewBox="0 0 18 10" fill="currentColor">
                <rect x="0" y="6" width="3" height="4" rx="0.6" />
                <rect x="5" y="4" width="3" height="6" rx="0.6" />
                <rect x="10" y="2" width="3" height="8" rx="0.6" />
                <rect x="15" y="0" width="3" height="10" rx="0.6" />
              </svg>
              {/* battery */}
              <svg width="26" height="12" viewBox="0 0 26 12" fill="none">
                <rect
                  x="0.5"
                  y="0.5"
                  width="22"
                  height="11"
                  rx="3"
                  stroke="currentColor"
                  opacity="0.5"
                />
                <rect x="2" y="2" width="19" height="8" rx="1.6" fill="currentColor" />
                <rect x="23.5" y="4" width="2" height="4" rx="1" fill="currentColor" opacity="0.5" />
              </svg>
            </span>
          </div>

          {/* Notch */}
          <div
            style={{
              position: "absolute",
              top: 11,
              left: "50%",
              transform: "translateX(-50%)",
              width: 110,
              height: 32,
              borderRadius: 999,
              background: PF.petrol11,
              zIndex: 30,
              pointerEvents: "none",
            }}
          />

          {/* Screen content */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              minHeight: 0,
              overflow: "hidden",
              position: "relative",
            }}
          >
            {children}
          </div>

          {/* Tab bar — overlay so screen-internal sheets can cover it */}
          {showTabBar && activeTab && (
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 5,
              }}
            >
              <PFTabBar active={activeTab} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
