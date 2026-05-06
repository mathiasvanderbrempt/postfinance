"use client";

import * as React from "react";
import Icon from "../Icon";
import IconAccent from "../IconAccent";
import { PF, pfFont, pfMono } from "../../lib/pf";
import { CodeBlock, CopyChip } from "./Copyable";
import { Block, Grid, Section } from "./Section";

/* ============================================================
 *  TABLE OF CONTENTS
 *  -----------------------------------------------------------
 *  01. Foundations · brand at a glance
 *  02. Logo · 5 lockups
 *  03. Color · petrol, gelb, semantic, secondary, neutral
 *  04. Typography · scale, weights, body
 *  05. Spacing · 4px base
 *  06. Radii · sharp → pill
 *  07. Shadows · sm / md / lg
 *  08. Iconography · system + composite
 *  09. Components · buttons, badges, inputs, cards, rows
 *  10. Voice & tone · do / don't
 *  11. Motion · easing, durations
 *  12. Handoff · install, tokens.css, usage
 * ============================================================ */

export default function DesignSystem() {
  return (
    <div style={{ background: PF.bgAlt, paddingBottom: 120 }}>
      <DSHeader />
      <Foundations />
      <LogoSection />
      <ColorSection />
      <TypographySection />
      <SpacingSection />
      <RadiiSection />
      <ShadowsSection />
      <IconographySection />
      <ComponentsSection />
      <VoiceSection />
      <MotionSection />
      <HandoffSection />
      <Footer />
    </div>
  );
}

/* ─── Header ──────────────────────────────────────────────────── */
function DSHeader() {
  return (
    <header
      style={{
        background: PF.petrol9,
        color: PF.white,
        padding: "112px 40px 96px",
        position: "relative",
        overflow: "hidden",
      }}
      className="pf-petrol-card pf-ds-header"
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 32,
          }}
        >
          <img src="/brand/postfinance-mark.svg" width={44} height={44} alt="" style={{ borderRadius: 10 }} />
          <span
            style={{
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: "-0.01em",
              color: PF.white,
              lineHeight: 1,
            }}
          >
            PostFinance
          </span>
        </div>
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            opacity: 0.7,
          }}
        >
          Design system · v1
        </div>
        <h1
          style={{
            margin: "16px 0 0",
            fontSize: "clamp(34px, 8vw, 72px)",
            fontWeight: 700,
            letterSpacing: "-0.025em",
            lineHeight: 1.02,
            maxWidth: 980,
          }}
        >
          A calm, confident,
          <br />
          unmistakably Swiss banking system.
        </h1>
        <p
          style={{
            margin: "24px 0 0",
            fontSize: 18,
            fontWeight: 300,
            lineHeight: 1.6,
            opacity: 0.9,
            maxWidth: 720,
          }}
        >
          Tokens, components, and patterns for the post-March-2025 PostFinance
          rebrand. Petrol carries trust; gelb signals opportunity; restraint
          ties it together. Everything below is wired with copy buttons —
          tap a token to grab it.
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            marginTop: 32,
            fontFamily: pfMono,
            fontSize: 11,
          }}
        >
          {[
            { label: "petrol-9", value: "#004B5A" },
            { label: "gelb", value: "#FFCC00" },
            { label: "radius pill", value: "100px" },
            { label: "shadow-md", value: "0 20 40 / .06" },
            { label: "type", value: "PF Grotesk → Inter" },
          ].map((t) => (
            <span
              key={t.label}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 12px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.08)",
                color: PF.white,
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span style={{ opacity: 0.65 }}>{t.label}</span>
              <span style={{ color: PF.gelb, fontWeight: 700 }}>{t.value}</span>
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}

/* ─── 01 Foundations ─────────────────────────────────────────── */
function Foundations() {
  const principles = [
    {
      title: "Clarity over cleverness",
      body: "Plain language and pixel-aligned hierarchy. The customer should know what to do in two seconds.",
    },
    {
      title: "Two weights, one job each",
      body: "Light 300 carries body and most UI. Bold 700 sets headings and CTAs. Nothing in between.",
    },
    {
      title: "Petrol holds, gelb signals",
      body: "Petrol is the foundation — surfaces, cards, primary buttons. Gelb is reserved for moments that matter.",
    },
    {
      title: "Calm motion, calm shadows",
      body: "Soft and large rather than sharp and small. Apple-like ease, no bounce. Like a Swiss train.",
    },
  ];
  return (
    <Section
      id="foundations"
      eyebrow="01 — Foundations"
      title="A few principles, applied consistently."
      lede="The whole system rests on a small set of decisions. Internalise these and the rest follows."
    >
      <Grid cols={4} gap={16}>
        {principles.map((p, i) => (
          <Block key={i} bg={PF.white} pad>
            <div style={{ width: "100%" }}>
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: PF.gelb,
                  fontFamily: pfMono,
                  marginBottom: 12,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: PF.petrol11,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.25,
                }}
              >
                {p.title}
              </div>
              <p
                style={{
                  margin: "10px 0 0",
                  fontSize: 14,
                  fontWeight: 300,
                  color: PF.petrol9,
                  lineHeight: 1.5,
                }}
              >
                {p.body}
              </p>
            </div>
          </Block>
        ))}
      </Grid>
    </Section>
  );
}

/* ─── 02 Logo ────────────────────────────────────────────────── */
function LogoSection() {
  return (
    <Section
      id="logo"
      eyebrow="02 — Brand mark"
      title="Five lockups, applied with discipline."
      lede="The wordmark is the primary identity. The signet shows up in app icons and ultra-compact placements. White-on-petrol is the only reverse variant."
    >
      <Grid cols={3} gap={16}>
        <Block
          title="Primary wordmark"
          description="Petrol on white. Default for headers and footers."
          spec={
            <>
              <CopyChip label="src" value="/brand/postfinance-logo.svg" />
              <CopyChip label="min-height" value="20px" />
            </>
          }
          bg={PF.white}
        >
          <img src="/brand/postfinance-logo.svg" height={28} alt="PostFinance" />
        </Block>

        <Block
          title="On gelb"
          description="Petrol wordmark on the brand yellow. Allowed for product callouts."
          spec={<CopyChip label="bg" value="#FFCC00" />}
          bg={PF.gelb}
        >
          <img src="/brand/postfinance-logo.svg" height={28} alt="PostFinance" />
        </Block>

        <Block
          title="Reversed · on petrol"
          description="The only time the wordmark inverts to white."
          spec={
            <>
              <CopyChip label="src" value="/brand/postfinance-logo-white.svg" />
              <CopyChip label="bg" value="#004B5A" />
            </>
          }
          bg={PF.petrol9}
        >
          <img src="/brand/postfinance-logo-white.svg" height={28} alt="PostFinance" />
        </Block>

        <Block
          title="App icon · mark"
          description="Signet on gelb, 22px corner radius. The iOS / Android home-screen tile."
          spec={<CopyChip label="src" value="/brand/postfinance-mark.svg" />}
        >
          <img
            src="/brand/postfinance-mark.svg"
            width={96}
            height={96}
            alt=""
            style={{ borderRadius: 20, boxShadow: "0 12px 28px rgba(0,75,90,0.18)" }}
          />
        </Block>

        <Block
          title="Signet only"
          description="The petrol cross-glyph at its smallest. Avatars, micro-placements."
          spec={<CopyChip label="src" value="/brand/postfinance-signet.svg" />}
        >
          <img src="/brand/postfinance-signet.svg" width={56} height={56} alt="" />
        </Block>

        <Block
          title="Clear-space rule"
          description="Reserve at least the height of the signet around every lockup. Never crop, recolor outside the petrol/gelb/white set, or place on busy photography."
        >
          <div
            style={{
              position: "relative",
              padding: 32,
              border: "2px dashed #C2D4D8",
              borderRadius: 12,
            }}
          >
            <img src="/brand/postfinance-logo.svg" height={26} alt="" />
            <span
              style={{
                position: "absolute",
                top: 6,
                left: 8,
                fontSize: 9,
                fontFamily: pfMono,
                color: PF.petrol5,
                letterSpacing: "0.05em",
              }}
            >
              ↕ ≥ 26px
            </span>
          </div>
        </Block>
      </Grid>
    </Section>
  );
}

/* ─── 03 Color ───────────────────────────────────────────────── */
function ColorSection() {
  const petrol = [
    { step: 1, hex: "#E6EEF0" },
    { step: 2, hex: "#C2D4D8" },
    { step: 3, hex: "#99B5BC" },
    { step: 4, hex: "#6F95A0" },
    { step: 5, hex: "#4A7984" },
    { step: 6, hex: "#2A6470" },
    { step: 7, hex: "#15555F" },
    { step: 8, hex: "#074E58" },
    { step: 9, hex: "#004B5A", brand: true },
    { step: 10, hex: "#003D49" },
    { step: 11, hex: "#002B33" },
  ];
  const semantic = [
    { name: "info", bg: "#EAF3F8", fg: "#1F5E85", note: "system messaging" },
    { name: "success", bg: "#E6F4EC", fg: "#1E7A48", note: "sent / completed" },
    { name: "pending", bg: "#FFF4D6", fg: "#8A6300", note: "scheduled / awaiting" },
    { name: "danger", bg: "#FBE7E5", fg: "#B3261E", note: "errors / blocked" },
  ];
  const grau = [
    { step: 1, hex: "#F8F8F8", role: "alt section" },
    { step: 2, hex: "#EDEDED", role: "subtle divider" },
    { step: 3, hex: "#DEDEDE" },
    { step: 4, hex: "#BDBDBD" },
    { step: 5, hex: "#9A9A9A" },
    { step: 6, hex: "#6E6E6E" },
    { step: 7, hex: "#4A4A4A" },
    { step: 8, hex: "#1A1A1A" },
  ];
  const second = [
    { name: "Grapefruit 5", hex: "#E5755A", role: "warm secondary" },
    { name: "Grapefruit 2", hex: "#F9D5CB" },
    { name: "Hellblau 5", hex: "#5290B9", role: "info / data" },
    { name: "Hellblau 1", hex: "#EAF3F8" },
  ];

  return (
    <Section
      id="color"
      eyebrow="03 — Color"
      title="Petrol holds the line. Gelb is reserved."
      lede="Eleven petrol steps cover surfaces from soft tints to deep tiles. Gelb appears as accent only — never as a wash. The whole foreground stack is petrol-tuned."
    >
      <Block
        span={3}
        title="Petrol — primary brand"
        description="Eleven steps, light to dark. Petrol-1 (#E6EEF0) is the lightest screen tint; petrol-9 (#004B5A) is the brand primary; petrol-11 (#002B33) is the deepest text."
        spec={
          <>
            <CopyChip label="primary" value="#004B5A" />
            <CopyChip label="--pf-petrol-9" value="--pf-petrol-9" variant="mono" />
          </>
        }
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(46px, 1fr))", gap: 6, width: "100%" }}>
          {petrol.map((s) => (
            <div key={s.step} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <div
                style={{
                  width: "100%",
                  aspectRatio: "1 / 1.1",
                  borderRadius: 12,
                  background: s.hex,
                  outline: s.brand ? `2px solid ${PF.gelb}` : "none",
                  outlineOffset: 2,
                  display: "flex",
                  alignItems: "flex-end",
                  padding: 8,
                  color: s.step <= 3 ? PF.petrol9 : PF.white,
                  fontSize: 11,
                  fontWeight: 700,
                }}
              >
                {s.step}
                {s.brand && "★"}
              </div>
              <span style={{ fontSize: 10, fontFamily: pfMono, color: PF.petrol6 }}>{s.hex}</span>
            </div>
          ))}
        </div>
      </Block>

      <div style={{ height: 16 }} />

      <Grid cols={2} gap={16}>
        <Block
          title="Gelb — accent only"
          description="Used for primary CTAs, opportunity moments, and key data points. Never a background wash."
          spec={
            <>
              <CopyChip label="gelb" value="#FFCC00" />
              <CopyChip label="gelb dark" value="#E6B800" />
            </>
          }
        >
          <div style={{ display: "flex", gap: 12, width: "100%", justifyContent: "center" }}>
            <div style={{ width: 120, height: 120, background: PF.gelb, borderRadius: 20 }} />
            <div style={{ width: 120, height: 120, background: PF.gelbDark, borderRadius: 20 }} />
          </div>
        </Block>

        <Block
          title="Foreground · all petrol"
          description="Text resolves to petrol — fg-1 is petrol-11, fg-2 is petrol-9, fg-3 is petrol-6, fg-4 is petrol-4. Never grau."
          spec={
            <>
              <CopyChip label="fg-1" value="#002B33" />
              <CopyChip label="fg-2" value="#004B5A" />
              <CopyChip label="fg-3" value="#2A6470" />
              <CopyChip label="fg-4" value="#6F95A0" />
            </>
          }
          bg={PF.white}
        >
          <div style={{ width: "100%", padding: "8px 16px" }}>
            <div style={{ fontSize: 26, fontWeight: 700, color: PF.fg1, letterSpacing: "-0.01em" }}>
              Your money, simply.
            </div>
            <div style={{ fontSize: 15, fontWeight: 300, color: PF.fg2, marginTop: 6 }}>
              Pay, save, invest — all in one place.
            </div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: PF.fg3,
                marginTop: 12,
              }}
            >
              Caption · meta
            </div>
          </div>
        </Block>
      </Grid>

      <div style={{ height: 16 }} />

      <Block
        span={3}
        title="Semantic pairs"
        description="Each ships as a (-bg, -fg) duo, tuned for inline status messages, badges, and toasts."
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 12, width: "100%" }}>
          {semantic.map((s) => (
            <div
              key={s.name}
              style={{
                background: s.bg,
                color: s.fg,
                borderRadius: 14,
                padding: 16,
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}
            >
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {s.name}
              </span>
              <span style={{ fontSize: 16, fontWeight: 700 }}>{s.note}</span>
              <span style={{ fontSize: 10, fontFamily: pfMono, opacity: 0.7 }}>
                bg {s.bg} · fg {s.fg}
              </span>
            </div>
          ))}
        </div>
      </Block>

      <div style={{ height: 16 }} />

      <Grid cols={2} gap={16}>
        <Block
          title="Grau — neutral 8 steps"
          description="Reserved for backgrounds and inactive states. Foreground text stays petrol."
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gap: 4, width: "100%" }}>
            {grau.map((g) => (
              <div key={g.step} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <div
                  style={{
                    aspectRatio: "1",
                    background: g.hex,
                    borderRadius: 8,
                    border: g.step <= 2 ? "1px solid #E1ECEE" : "none",
                  }}
                />
                <span style={{ fontSize: 9, fontFamily: pfMono, color: PF.petrol6, textAlign: "center" }}>
                  {g.step}
                </span>
              </div>
            ))}
          </div>
        </Block>

        <Block
          title="Secondary · grapefruit + hellblau"
          description="Secondary palettes for warm product moments (grapefruit) and information surfaces (hellblau)."
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10, width: "100%" }}>
            {second.map((c) => (
              <div
                key={c.name}
                style={{
                  background: c.hex,
                  color: ["#5290B9", "#E5755A"].includes(c.hex) ? PF.white : PF.petrol11,
                  borderRadius: 12,
                  padding: 16,
                  fontSize: 12,
                  fontWeight: 700,
                  height: 64,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <span>{c.name}</span>
                <span style={{ fontFamily: pfMono, fontWeight: 500, opacity: 0.85 }}>{c.hex}</span>
              </div>
            ))}
          </div>
        </Block>
      </Grid>
    </Section>
  );
}

/* ─── 04 Typography ──────────────────────────────────────────── */
function TypographySection() {
  const display = [
    { label: "Display XL · 64 / 700", text: "Banking that gets out of your way.", size: 56 },
    { label: "Display L · 48 / 300", text: "Pay, save, invest — in one app.", size: 42, weight: 300 },
    { label: "Display M · 36 / 700", text: "Open an account in 8 minutes.", size: 32 },
  ];
  const body = [
    { label: "H1 · 32 / 700", size: 32, weight: 700, color: PF.petrol11, text: "Your money, simply." },
    { label: "H2 · 24 / 700", size: 24, weight: 700, color: PF.petrol11, text: "Recent payments" },
    { label: "H3 · 20 / 700", size: 20, weight: 700, color: PF.petrol11, text: "Account summary" },
    { label: "Body L · 18 / 300", size: 18, weight: 300, color: PF.petrol9, text: "A clear, calm overview of where your money is." },
    { label: "Body · 16 / 300", size: 16, weight: 300, color: PF.petrol9, text: "Send, receive, scan QR-bills, split costs in seconds." },
    { label: "Body S · 14 / 300", size: 14, weight: 300, color: PF.petrol9, text: "Last sync just now · CHF amounts in Swiss formatting." },
    { label: "Caption · 12 / 700 · uppercase", size: 12, weight: 700, color: PF.petrol6, text: "SECTION LABEL", letter: "0.06em" },
  ];

  return (
    <Section
      id="typography"
      eyebrow="04 — Typography"
      title="Two weights. Light does the work."
      lede="PostFinance Grotesk in production, Inter as the open-source fallback. The contrast between Light 300 and Bold 700 IS the type system."
    >
      <Grid cols={2} gap={16}>
        <Block
          span={2}
          title="Display scale"
          description="Hero typography for marketing surfaces. Generous tracking-tight headlines, light follow-ups."
          spec={
            <>
              <CopyChip label="font" value='"PostFinance Grotesk", "Inter"' />
              <CopyChip label="line-height" value="1.05" />
              <CopyChip label="tracking" value="-0.02em" />
            </>
          }
        >
          <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 22 }}>
            {display.map((d, i) => (
              <div key={i}>
                <div
                  style={{
                    fontSize: d.size,
                    fontWeight: d.weight ?? 700,
                    color: PF.petrol11,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.05,
                  }}
                >
                  {d.text}
                </div>
                <div
                  style={{
                    fontSize: 10,
                    fontFamily: pfMono,
                    color: PF.petrol6,
                    marginTop: 4,
                    letterSpacing: "0.04em",
                  }}
                >
                  {d.label}
                </div>
              </div>
            ))}
          </div>
        </Block>

        <Block
          title="Weights"
          description="Two weights, no in-between. Light feels modern; bold carries weight precisely because it is rare."
          spec={
            <>
              <CopyChip label="light" value="300" />
              <CopyChip label="bold" value="700" />
            </>
          }
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 16, width: "100%" }}>
            <div>
              <div style={{ fontSize: 56, fontWeight: 300, color: PF.petrol11, letterSpacing: "-0.02em", lineHeight: 1 }}>
                Aa Light
              </div>
              <span style={{ fontSize: 10, fontFamily: pfMono, color: PF.petrol6 }}>300 · body, ui, most surfaces</span>
            </div>
            <div>
              <div style={{ fontSize: 56, fontWeight: 700, color: PF.petrol11, letterSpacing: "-0.02em", lineHeight: 1 }}>
                Aa Bold
              </div>
              <span style={{ fontSize: 10, fontFamily: pfMono, color: PF.petrol6 }}>700 · headings, ctas, emphasis</span>
            </div>
          </div>
        </Block>

        <Block
          title="In-app scale"
          description="Headings ladder down through petrol-11 → petrol-9 → petrol-6. Body stays Light 300; captions go Bold 700 + uppercase."
          spec={<CopyChip label="line-height (body)" value="1.5" />}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 12, width: "100%" }}>
            {body.map((b, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 16,
                  paddingBottom: i === body.length - 1 ? 0 : 10,
                  borderBottom: i === body.length - 1 ? "none" : "1px solid #E1ECEE",
                }}
              >
                <span
                  style={{
                    flex: "0 0 150px",
                    fontSize: 9,
                    fontFamily: pfMono,
                    color: PF.petrol5,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  {b.label}
                </span>
                <span
                  style={{
                    fontSize: b.size,
                    fontWeight: b.weight,
                    color: b.color,
                    letterSpacing: b.letter ?? "-0.005em",
                  }}
                >
                  {b.text}
                </span>
              </div>
            ))}
          </div>
        </Block>
      </Grid>
    </Section>
  );
}

/* ─── 05 Spacing ─────────────────────────────────────────────── */
function SpacingSection() {
  const scale = [
    { name: "space-1", v: 4 },
    { name: "space-2", v: 8 },
    { name: "space-3", v: 12 },
    { name: "space-4", v: 16 },
    { name: "space-5", v: 20, star: true, role: "grid gutter, screen edge" },
    { name: "space-6", v: 24 },
    { name: "space-8", v: 32 },
    { name: "space-10", v: 40 },
    { name: "space-12", v: 48 },
    { name: "space-16", v: 64 },
    { name: "space-24", v: 96 },
    { name: "space-32", v: 128 },
  ];
  return (
    <Section
      id="spacing"
      eyebrow="05 — Spacing"
      title="A 4-pixel base. Twenty everywhere."
      lede="Every spacing decision is a multiple of 4. The grid gutter and screen-edge padding are both 20px — that's the rhythm of the whole product."
    >
      <Grid cols={1}>
        <Block
          span={1}
          pad
          spec={
            <>
              <CopyChip label="base" value="4px" />
              <CopyChip label="grid gutter ★" value="20px" />
              <CopyChip label="screen edge" value="20px" />
              <CopyChip label="row gap" value="12px" />
            </>
          }
        >
          <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 6 }}>
            {scale.map((s) => (
              <div
                key={s.name}
                style={{
                  display: "grid",
                  gridTemplateColumns: "100px 70px 1fr",
                  gap: 14,
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: 11, fontFamily: pfMono, color: PF.petrol6 }}>
                  {s.name}
                  {s.star && <span style={{ color: PF.gelb }}> ★</span>}
                </span>
                <span style={{ fontSize: 12, fontWeight: 700, color: PF.petrol11 }}>{s.v}px</span>
                <div
                  style={{
                    width: s.v,
                    height: 14,
                    background: s.star ? PF.gelb : PF.petrol9,
                    borderRadius: 4,
                  }}
                />
              </div>
            ))}
            <p style={{ marginTop: 8, fontSize: 11, color: PF.petrol6 }}>
              ★ space-5 (20px) is the canonical grid gutter, screen-edge padding, and section indent.
            </p>
          </div>
        </Block>
      </Grid>
    </Section>
  );
}

/* ─── 06 Radii ───────────────────────────────────────────────── */
function RadiiSection() {
  const radii = [
    { name: "xs", v: 4 },
    { name: "sm · input", v: 8 },
    { name: "md", v: 12 },
    { name: "lg ★ card", v: 20, star: true },
    { name: "xl", v: 32 },
    { name: "pill ★ cta", v: 100, pill: true, star: true },
    { name: "full", v: 9999 },
  ];
  return (
    <Section
      id="radii"
      eyebrow="06 — Radii"
      title="Two shape signatures: 20 and 100."
      lede="20px rounds every card, tile, and feature surface. 100px makes every CTA a pill. Sharp corners do not appear in product UI."
    >
      <Block
        spec={
          <>
            <CopyChip label="card ★" value="20px" />
            <CopyChip label="cta ★" value="100px" />
            <CopyChip label="input" value="8px" />
            <CopyChip label="full" value="9999px" />
          </>
        }
      >
        <div
          style={{
            display: "flex",
            gap: 24,
            alignItems: "flex-end",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "100%",
            padding: "16px 0",
          }}
        >
          {radii.map((r) => (
            <div key={r.name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              {r.pill ? (
                <div
                  style={{
                    width: 130,
                    height: 48,
                    borderRadius: r.v,
                    background: PF.gelb,
                  }}
                />
              ) : (
                <div
                  style={{
                    width: 88,
                    height: 88,
                    borderRadius: r.v,
                    background: r.star ? PF.gelb : PF.petrol9,
                  }}
                />
              )}
              <span style={{ fontSize: 11, fontFamily: pfMono, color: PF.petrol6 }}>{r.name}</span>
              <span style={{ fontSize: 12, fontWeight: 700, color: PF.petrol11 }}>{r.v}px</span>
            </div>
          ))}
        </div>
      </Block>
    </Section>
  );
}

/* ─── 07 Shadows ─────────────────────────────────────────────── */
function ShadowsSection() {
  const shadows = [
    { name: "shadow-sm", val: "0 8px 24px rgba(0,0,0,0.04)", role: "hover lift" },
    { name: "shadow-md", val: "0 20px 40px rgba(0,0,0,0.06)", role: "resting card" },
    { name: "shadow-lg", val: "0 40px 80px rgba(0,0,0,0.08)", role: "modal · focus" },
  ];
  return (
    <Section
      id="shadows"
      eyebrow="07 — Shadows"
      title="Soft, large, low opacity."
      lede="Three steps that signal elevation without weight. No coloured shadows, no inner shadows, no harsh drops."
    >
      <Grid cols={3}>
        {shadows.map((s) => (
          <Block
            key={s.name}
            title={s.name}
            description={s.role}
            spec={<CopyChip value={s.val} />}
            bg="#F4F8F9"
          >
            <div
              style={{
                width: 180,
                height: 130,
                background: PF.white,
                borderRadius: 20,
                boxShadow: s.val,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: 16,
              }}
            >
              <span style={{ fontSize: 13, fontWeight: 700, color: PF.petrol11 }}>{s.name}</span>
              <span style={{ fontSize: 10, fontFamily: pfMono, color: PF.petrol6, lineHeight: 1.4 }}>
                {s.val}
              </span>
            </div>
          </Block>
        ))}
      </Grid>
    </Section>
  );
}

/* ─── 08 Iconography ─────────────────────────────────────────── */
function IconographySection() {
  const sys = [
    "home", "send", "swap", "search", "settings", "menu", "plus", "chevron",
    "qr", "card", "house", "user", "bell", "trending-up", "tag", "pig",
    "doc", "shield", "calendar", "globe", "msg", "logout", "face-id", "eye",
  ];
  const composite: { name: "scheduled" | "insight" | "card-alert" | "verified" | "save-more"; label: string; desc: string }[] = [
    { name: "scheduled", label: "Scheduled", desc: "petrol bill + gelb clock" },
    { name: "insight", label: "Insight", desc: "petrol bars + gelb spark" },
    { name: "card-alert", label: "Card alert", desc: "petrol card + gelb warning" },
    { name: "verified", label: "Verified", desc: "petrol shield + gelb check" },
    { name: "save-more", label: "Save more", desc: "petrol pig + gelb plus" },
  ];

  return (
    <Section
      id="icons"
      eyebrow="08 — Iconography"
      title="Two tiers. System stays petrol; composite earns its gelb."
      lede="System icons are 1.6px stroked, 24×24, petrol on petrol-1. Composite icons compose petrol stroke with exactly one gelb fill disc — used to draw attention without breaking the calm."
    >
      <Grid cols={2}>
        <Block
          title="System icons"
          description="One stroke weight, one disc. No filled icon system; status uses a thin stroke + small dot."
          spec={
            <>
              <CopyChip label="stroke" value="1.6px" />
              <CopyChip label="grid" value="24×24" />
              <CopyChip label="tile" value="40×40 · radius 12" />
            </>
          }
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(56px, 1fr))", gap: 12, width: "100%" }}>
            {sys.map((n) => (
              <div key={n} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: PF.petrol1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon name={n} size={22} color={PF.petrol9} />
                </div>
                <span style={{ fontSize: 9, fontFamily: pfMono, color: PF.petrol6 }}>{n}</span>
              </div>
            ))}
          </div>
        </Block>

        <Block
          title="Composite icons (IconAccent)"
          description="Petrol stroke with one gelb fill disc behind a sub-glyph. Used at 32–40px in surfaces that deserve the brand's full voice."
          spec={
            <>
              <CopyChip label="size" value="40px" />
              <CopyChip label="rule" value="exactly one gelb fill" />
            </>
          }
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(80px, 1fr))", gap: 16, width: "100%" }}>
            {composite.map((c) => (
              <div key={c.name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, textAlign: "center" }}>
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 16,
                    background: PF.petrol1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <IconAccent name={c.name} size={36} />
                </div>
                <span style={{ fontSize: 11, fontWeight: 700, color: PF.petrol11 }}>{c.label}</span>
                <span style={{ fontSize: 10, fontFamily: pfMono, color: PF.petrol6, lineHeight: 1.4 }}>{c.desc}</span>
              </div>
            ))}
          </div>
        </Block>
      </Grid>
    </Section>
  );
}

/* ─── 09 Components ──────────────────────────────────────────── */
function pillBtn(bg: string, color: string, border?: string): React.CSSProperties {
  return {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: "12px 24px",
    borderRadius: 100,
    fontFamily: pfFont,
    fontWeight: 700,
    fontSize: 14,
    border: border ?? "1.5px solid transparent",
    background: bg,
    color,
    cursor: "pointer",
    lineHeight: 1,
  };
}

function ComponentsSection() {
  return (
    <Section
      id="components"
      eyebrow="09 — Components"
      title="Building blocks, fully specced."
      lede="Each component below ships with the exact tokens and props used across the kit. Click any chip to copy the value."
    >
      {/* Buttons */}
      <Block
        span={3}
        title="Buttons"
        description="Pill 100. Padding 14×28 (12×24 in dense lists). 1.5px transparent border on the variant baseline so secondary aligns at the same height. Press transforms to 0.98 over 80ms."
        spec={
          <>
            <CopyChip label="primary" value="bg petrol-9 / fg white" />
            <CopyChip label="hover" value="bg petrol-10" />
            <CopyChip label="press" value="bg petrol-11 + scale .98" />
            <CopyChip label="radius" value="100px" />
          </>
        }
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 14, width: "100%" }}>
          {[
            { label: "Primary", buttons: [
              { props: pillBtn(PF.petrol9, PF.white), text: "Pay now" },
              { props: pillBtn(PF.petrol10, PF.white), text: "Hover" },
              { props: { ...pillBtn(PF.petrol11, PF.white), transform: "scale(.98)" }, text: "Press" },
              { props: pillBtn("#DEDEDE", "#9A9A9A"), text: "Disabled" },
            ]},
            { label: "Secondary", buttons: [
              { props: pillBtn(PF.white, PF.petrol9, `1.5px solid ${PF.petrol9}`), text: "Cancel" },
              { props: pillBtn(PF.petrol1, PF.petrol9, `1.5px solid ${PF.petrol9}`), text: "Hover" },
            ]},
            { label: "Accent", buttons: [
              { props: pillBtn(PF.gelb, PF.petrol11), text: "Open account" },
              { props: pillBtn(PF.gelbDark, PF.petrol11), text: "Hover" },
            ]},
            { label: "Ghost", buttons: [
              { props: pillBtn("transparent", PF.petrol9), text: "Learn more" },
              { props: pillBtn(PF.petrol1, PF.petrol9), text: "Hover" },
            ]},
          ].map((row) => (
            <div
              key={row.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                flexWrap: "wrap",
                background: "#F4F8F9",
                padding: "14px 18px",
                borderRadius: 14,
              }}
            >
              <span
                style={{
                  width: 90,
                  flex: "0 0 auto",
                  fontSize: 10,
                  fontFamily: pfMono,
                  color: PF.petrol6,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                }}
              >
                {row.label}
              </span>
              {row.buttons.map((b, i) => (
                <button key={i} style={b.props}>
                  {b.text}
                </button>
              ))}
            </div>
          ))}
        </div>
      </Block>

      <div style={{ height: 16 }} />

      {/* Badges + toasts */}
      <Grid cols={2}>
        <Block
          title="Badges"
          description="Pill chips for status. Two custom ones at the end pair petrol-1 / gelb for product context."
          spec={<CopyChip label="font" value="12 / 700 · pill 100" />}
        >
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", width: "100%" }}>
            {[
              { bg: "#EAF3F8", fg: "#1F5E85", text: "Info" },
              { bg: "#E6F4EC", fg: "#1E7A48", text: "Sent" },
              { bg: "#FFF4D6", fg: "#8A6300", text: "Pending" },
              { bg: "#FBE7E5", fg: "#B3261E", text: "Failed" },
              { bg: PF.petrol1, fg: PF.petrol9, text: "New" },
              { bg: PF.gelb, fg: PF.petrol11, text: "Featured" },
            ].map((b) => (
              <span
                key={b.text}
                style={{
                  background: b.bg,
                  color: b.fg,
                  fontSize: 12,
                  fontWeight: 700,
                  padding: "4px 12px",
                  borderRadius: 100,
                }}
              >
                {b.text}
              </span>
            ))}
          </div>
        </Block>

        <Block
          title="Toasts"
          description="Inline status messages, one stroke icon + bold lead + light follow."
          spec={<CopyChip label="radius" value="14px" />}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 10, width: "100%" }}>
            <Toast bg="#E6F4EC" fg="#1E7A48" lead="Sent." rest=" CHF 1 200.50 will arrive within seconds." />
            <Toast bg="#EAF3F8" fg="#1F5E85" lead="Heads up." rest=" Your card expires in 3 weeks." />
            <Toast bg="#FBE7E5" fg="#B3261E" lead="We didn't recognise those details." rest=" Try again, or reset your password." />
          </div>
        </Block>

        <Block
          title="Inputs"
          description="8px radius, 1px hairline → petrol-9 on focus, danger-fg on error. Labels are 12 / 700, helper is 11."
          spec={
            <>
              <CopyChip label="radius" value="8px" />
              <CopyChip label="border" value="1px → petrol-9 focus" />
            </>
          }
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 12, width: "100%" }}>
            <Field label="IBAN" value="CH56 0900 0000 8500 5325 7" help="Swiss IBAN format" />
            <Field label="Email" placeholder="anna@example.ch" focus help="Focused state" />
            <Field label="Reference" value="invalid" error errMsg="Reference number is not valid." />
          </div>
        </Block>

        <Block
          title="Card surfaces"
          description="Five flavours. Petrol hero + animated shine for the hero moment; petrol-1 for soft tiles; gelb sparingly; the krypto gradient is reserved for that single product surface."
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, width: "100%" }}>
            <CardSwatch
              label="White on grey"
              style={{
                background: PF.white,
                color: PF.petrol11,
                boxShadow: "0 1px 0 rgba(0,75,90,0.06)",
              }}
            >
              <span style={{ fontSize: 12, fontWeight: 700 }}>Workhorse</span>
              <span style={{ fontSize: 10, color: PF.petrol6, fontFamily: pfMono }}>radius 20 · bottom hairline</span>
            </CardSwatch>
            <CardSwatch
              label="Petrol hero"
              className="pf-petrol-card"
              style={{
                background: PF.petrol9,
                color: PF.white,
                boxShadow: "0 8px 20px rgba(0,75,90,0.10)",
              }}
            >
              <span style={{ fontSize: 11, opacity: 0.7, fontWeight: 700, letterSpacing: "0.04em" }}>BALANCE</span>
              <span style={{ fontSize: 18, fontWeight: 700 }}>CHF 4 218.50</span>
            </CardSwatch>
            <CardSwatch
              label="Mid · petrol-1"
              style={{ background: PF.petrol1, color: PF.petrol11 }}
            >
              <span style={{ fontSize: 12, fontWeight: 700, color: PF.petrol11 }}>Soft tile</span>
              <span style={{ fontSize: 10, color: PF.petrol7, fontFamily: pfMono }}>petrol icon + 1 gelb detail</span>
            </CardSwatch>
            <CardSwatch
              label="Gelb accent"
              style={{ background: PF.gelb, color: PF.petrol11 }}
            >
              <span style={{ fontSize: 12, fontWeight: 700 }}>Used sparingly</span>
              <span style={{ fontSize: 10, color: PF.petrol9, fontFamily: pfMono, opacity: 0.85 }}>moments only</span>
            </CardSwatch>
          </div>
        </Block>

        <Block
          span={2}
          title="List rows"
          description="Wrapped in PFCardList — single rounded white card, internal divider only, last row's separator is suppressed automatically."
          spec={
            <>
              <CopyChip label="row padding" value="14×16 · 16×16" />
              <CopyChip label="icon tile" value="40×40 · radius 12" />
              <CopyChip label="container" value="radius 16 · bottom-hairline" />
            </>
          }
        >
          <div style={{ width: "100%", maxWidth: 460 }}>
            <div
              style={{
                background: PF.white,
                borderRadius: 16,
                boxShadow: "0 1px 0 rgba(0,75,90,0.06)",
                overflow: "hidden",
              }}
            >
              <DemoRow icon="cart" name="Migros" meta="Today · 14:32" amount="89.40" />
              <DemoRow icon="send" name="Marco Bianchi" meta="Yesterday · TWINT" amount="120.00" sign="+" />
              <DemoRow icon="house" name="Rent · April" meta="1 Apr · standing order" amount="1 850.00" last />
            </div>
          </div>
        </Block>

        <Block
          span={2}
          title="Tab bar"
          description="Five tabs. Active uses petrol-9 with bold label and 1.8 stroke; inactive uses petrol-4 with light stroke. No background, no glassy blur."
          spec={
            <>
              <CopyChip label="active" value="petrol-9 / 1.8" />
              <CopyChip label="inactive" value="petrol-4 / 1.5" />
            </>
          }
        >
          <div
            style={{
              width: "100%",
              maxWidth: 380,
              background: PF.white,
              borderTop: "1px solid #E1ECEE",
              padding: "8px 8px 18px",
              display: "flex",
              justifyContent: "space-around",
              borderRadius: "0 0 24px 24px",
            }}
          >
            {[
              { id: "home", label: "Home", icon: "home", on: true },
              { id: "pay", label: "Payments", icon: "send" },
              { id: "invest", label: "Invest", icon: "trending-up" },
              { id: "offers", label: "Offers", icon: "tag" },
              { id: "services", label: "Services", icon: "menu" },
            ].map((t) => (
              <div key={t.id} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
                <Icon name={t.icon} size={22} color={t.on ? PF.petrol9 : PF.petrol4} stroke={t.on ? 1.8 : 1.5} />
                <span style={{ fontSize: 10, fontWeight: 700, color: t.on ? PF.petrol9 : PF.petrol4 }}>{t.label}</span>
              </div>
            ))}
          </div>
        </Block>
      </Grid>
    </Section>
  );
}

function Toast({ bg, fg, lead, rest }: { bg: string; fg: string; lead: string; rest: string }) {
  return (
    <div
      style={{
        background: bg,
        color: fg,
        padding: "10px 14px",
        borderRadius: 14,
        display: "flex",
        gap: 10,
        alignItems: "center",
        fontSize: 13,
      }}
    >
      <Icon name="bell" size={16} color="currentColor" stroke={1.8} />
      <span>
        <b style={{ fontWeight: 700 }}>{lead}</b>
        {rest}
      </span>
    </div>
  );
}

function Field({
  label,
  value,
  placeholder,
  focus,
  error,
  help,
  errMsg,
}: {
  label: string;
  value?: string;
  placeholder?: string;
  focus?: boolean;
  error?: boolean;
  help?: string;
  errMsg?: string;
}) {
  const borderColor = error ? "#B3261E" : focus ? PF.petrol9 : "#DEDEDE";
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label style={{ fontSize: 11, fontWeight: 700, color: PF.petrol9, letterSpacing: "0.02em" }}>{label}</label>
      <div
        style={{
          padding: "10px 14px",
          borderRadius: 8,
          border: `1px solid ${borderColor}`,
          fontFamily: pfFont,
          fontSize: 14,
          background: PF.white,
          color: value ? PF.petrol11 : PF.petrol4,
          fontWeight: 300,
        }}
      >
        {value || placeholder}
      </div>
      {help && !error && <span style={{ fontSize: 11, color: PF.petrol6 }}>{help}</span>}
      {error && errMsg && <span style={{ fontSize: 11, color: "#B3261E" }}>{errMsg}</span>}
    </div>
  );
}

function CardSwatch({
  label,
  children,
  style,
  className,
}: {
  label: string;
  children: React.ReactNode;
  style: React.CSSProperties;
  className?: string;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <div
        className={className}
        style={{
          padding: 16,
          borderRadius: 20,
          minHeight: 88,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          overflow: "hidden",
          ...style,
        }}
      >
        {children}
      </div>
      <span style={{ fontSize: 10, fontFamily: pfMono, color: PF.petrol6 }}>{label}</span>
    </div>
  );
}

function DemoRow({
  icon,
  name,
  meta,
  amount,
  sign = "−",
  last,
}: {
  icon: string;
  name: string;
  meta: string;
  amount: string;
  sign?: "+" | "−";
  last?: boolean;
}) {
  const positive = sign === "+";
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "14px 16px",
        borderBottom: last ? "none" : "1px solid #E1ECEE",
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 12,
          background: PF.petrol1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon name={icon} size={20} color={PF.petrol9} />
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: PF.petrol11 }}>{name}</div>
        <div style={{ fontSize: 12, fontWeight: 300, color: PF.petrol6 }}>{meta}</div>
      </div>
      <div style={{ fontSize: 14, fontWeight: 700, color: positive ? "#1E7A48" : PF.petrol11 }}>
        {sign} CHF {amount}
      </div>
    </div>
  );
}

/* ─── 10 Voice ────────────────────────────────────────────────── */
function VoiceSection() {
  const yes = [
    "Banking that gets out of your way.",
    "Sent. CHF 1 200.50 will arrive within seconds.",
    "Nothing here yet. Scan a QR-bill to get started.",
    "We didn't recognise those details. Try again, or reset your password.",
  ];
  const no = [
    "Discover a smarter way to manage your finances! 🚀",
    "Yay! Your money is on its way! 💸",
    "Hey there, money buddy! Looks like it's a bit empty…",
    "Are you absolutely sure you want to do this?",
  ];
  return (
    <Section
      id="voice"
      eyebrow="10 — Voice"
      title="Direct over decorative. Confident over cute."
      lede="The voice is Swiss-direct and human. Plain language IS the trust signal — short sentences, no exclamation marks, no synthetic warmth."
    >
      <Grid cols={2}>
        <Block bg="#E6F4EC">
          <div style={{ width: "100%" }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "#1E7A48",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              ✓ On voice
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {yes.map((t, i) => (
                <div
                  key={i}
                  style={{
                    background: PF.white,
                    color: PF.petrol11,
                    padding: "10px 14px",
                    borderRadius: 12,
                    fontSize: 14,
                    fontWeight: 300,
                    lineHeight: 1.45,
                  }}
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
        </Block>
        <Block bg="#FBE7E5">
          <div style={{ width: "100%" }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "#B3261E",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              ✕ Off voice
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {no.map((t, i) => (
                <div
                  key={i}
                  style={{
                    background: PF.white,
                    color: PF.petrol11,
                    padding: "10px 14px",
                    borderRadius: 12,
                    fontSize: 14,
                    fontWeight: 300,
                    lineHeight: 1.45,
                    textDecoration: "line-through",
                    textDecorationColor: "#B3261E",
                  }}
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
        </Block>
      </Grid>
    </Section>
  );
}

/* ─── 11 Motion ──────────────────────────────────────────────── */
function MotionSection() {
  return (
    <Section
      id="motion"
      eyebrow="11 — Motion"
      title="Calm. Like a Swiss train pulling into a station."
      lede="Smooth fades and gentle slides. No bounces, no overshoots, no springs. Three durations, two easings."
    >
      <Grid cols={2}>
        <Block
          title="Easings"
          description="Apple-like soft ease for arrivals; standard ease-in-out for state changes."
          spec={
            <>
              <CopyChip label="ease" value="cubic-bezier(0.32, 0.72, 0, 1)" />
              <CopyChip label="ease-inout" value="cubic-bezier(0.4, 0, 0.2, 1)" />
            </>
          }
        >
          <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { name: "soft ease-out", curve: "M0,100 C32,72 72,0 100,0" },
              { name: "ease-in-out", curve: "M0,100 C40,100 60,0 100,0" },
            ].map((c, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <svg width="80" height="60" viewBox="0 0 100 100" style={{ flex: "0 0 auto" }}>
                  <path
                    d={c.curve}
                    stroke={PF.petrol9}
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: PF.petrol11 }}>{c.name}</div>
                  <div style={{ fontSize: 11, fontFamily: pfMono, color: PF.petrol6 }}>
                    {i === 0
                      ? "page transitions, sheet open"
                      : "tab switch, color change"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Block>

        <Block
          title="Durations"
          description="Three steps. Anything longer than 400ms feels slow; anything shorter than 150ms feels nervous."
          spec={
            <>
              <CopyChip label="fast" value="150ms" />
              <CopyChip label="base" value="250ms" />
              <CopyChip label="slow" value="400ms" />
            </>
          }
        >
          <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { name: "fast", v: 150, role: "color, opacity" },
              { name: "base", v: 250, role: "small layout, micro-interactions" },
              { name: "slow", v: 400, role: "page or sheet transitions" },
            ].map((d) => (
              <div key={d.name} style={{ display: "grid", gridTemplateColumns: "60px 1fr 70px", gap: 14, alignItems: "center" }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: PF.petrol11 }}>{d.name}</span>
                <div
                  style={{
                    height: 8,
                    background: PF.petrol1,
                    borderRadius: 999,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: PF.petrol9,
                      width: `${(d.v / 400) * 100}%`,
                      borderRadius: 999,
                    }}
                  />
                </div>
                <span style={{ fontSize: 11, fontFamily: pfMono, color: PF.petrol6, textAlign: "right" }}>
                  {d.v}ms
                </span>
              </div>
            ))}
            <p style={{ fontSize: 11, color: PF.petrol6, marginTop: 8 }}>
              Press states snap with a 60–80ms <code style={{ fontFamily: pfMono }}>scale(0.98)</code>; reduced-motion users get the end state immediately.
            </p>
          </div>
        </Block>
      </Grid>
    </Section>
  );
}

/* ─── 12 Handoff ─────────────────────────────────────────────── */
function HandoffSection() {
  const tokensCss = `:root {
  /* Petrol */
  --pf-petrol-1:  #E6EEF0;
  --pf-petrol-9:  #004B5A;  /* brand primary */
  --pf-petrol-11: #002B33;

  /* Gelb */
  --pf-gelb:      #FFCC00;
  --pf-gelb-dark: #E6B800;

  /* Foreground (petrol family) */
  --pf-fg-1: var(--pf-petrol-11);
  --pf-fg-2: var(--pf-petrol-9);
  --pf-fg-3: var(--pf-petrol-6);
  --pf-fg-4: var(--pf-petrol-4);

  /* Type */
  --pf-font: "PostFinance Grotesk", "Inter",
             -apple-system, system-ui, sans-serif;
  --pf-weight-light: 300;
  --pf-weight-bold:  700;

  /* Radii */
  --pf-radius-card: 20px;
  --pf-radius-pill: 100px;

  /* Shadows */
  --pf-shadow-md: 0 20px 40px rgba(0,0,0,0.06);
}`;

  const buttonTsx = `<button
  style={{
    background: "var(--pf-petrol-9)",
    color: "var(--pf-white)",
    padding: "14px 28px",
    borderRadius: "var(--pf-radius-pill)",
    fontWeight: 700,
    fontFamily: "var(--pf-font)",
    border: "1.5px solid transparent",
  }}
>
  Pay now
</button>`;

  const cardListTsx = `import { PFCardList, PFTxRow } from "@/components/PFKit";

<PFCardList>
  <PFTxRow icon="cart" name="Migros"
    meta="Today · 14:32" amount="89.40" />
  <PFTxRow icon="send" name="Marco Bianchi"
    meta="Yesterday · TWINT" amount="120.00" sign="+" />
</PFCardList>`;

  const checklist = [
    "Use petrol-9 #004B5A for primary surfaces and CTAs.",
    "Use gelb #FFCC00 only for accents — never as a background wash.",
    "Card radius 20px. CTA pill radius 100px. No sharp corners in product UI.",
    "Foreground text resolves to petrol family (fg-1 → fg-4), never grau.",
    "Two type weights: Light 300 for body, Bold 700 for headings and CTAs.",
    "Section rhythm comes from white ↔ #F8F8F8 contrast, not dividers.",
    "List groups wrap in PFCardList — internal dividers, last row clears.",
    "Composite icons use exactly one gelb fill disc. No more.",
    "Motion: cubic-bezier(0.32, 0.72, 0, 1), 150 / 250 / 400 ms.",
    "Krypto gradient is the ONLY place petrol-to-gold gradient appears.",
  ];

  return (
    <Section
      id="handoff"
      eyebrow="12 — Handoff"
      title="Drop it in. Tokens, snippets, and a checklist."
      lede="Everything below is meant to be copied. The full token sheet is one click; component snippets compose on top."
    >
      <Grid cols={2}>
        <Block
          title="tokens.css"
          description="The minimum token sheet. Drop it in :root and the rest of the system inherits."
        >
          <div style={{ width: "100%" }}>
            <CodeBlock language="css" code={tokensCss} />
          </div>
        </Block>

        <Block
          title="Primary button"
          description="Plain JSX example. In the kit, prefer the typed PFButton kind=primary wrapper."
        >
          <div style={{ width: "100%" }}>
            <CodeBlock language="tsx" code={buttonTsx} />
          </div>
        </Block>

        <Block
          title="Card list"
          description="Wrap a stack of rows. The wrapper auto-clones the last child to drop its bottom divider."
        >
          <div style={{ width: "100%" }}>
            <CodeBlock language="tsx" code={cardListTsx} />
          </div>
        </Block>

        <Block
          title="Implementation checklist"
          description="Ten rules to keep the system honest. If you find yourself breaking one, double-check why."
        >
          <ol
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              counterReset: "rule",
              display: "flex",
              flexDirection: "column",
              gap: 10,
              width: "100%",
            }}
          >
            {checklist.map((item, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  gap: 12,
                  alignItems: "flex-start",
                  fontSize: 13,
                  color: PF.petrol9,
                  fontWeight: 300,
                  lineHeight: 1.5,
                }}
              >
                <span
                  style={{
                    flex: "0 0 auto",
                    width: 22,
                    height: 22,
                    borderRadius: 999,
                    background: PF.petrol1,
                    color: PF.petrol9,
                    fontSize: 11,
                    fontWeight: 700,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: pfMono,
                  }}
                >
                  {i + 1}
                </span>
                {item}
              </li>
            ))}
          </ol>
        </Block>
      </Grid>
    </Section>
  );
}

/* ─── Footer ─────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer
      style={{
        maxWidth: 1280,
        margin: "0 auto",
        padding: "48px 40px 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 24,
        flexWrap: "wrap",
        color: PF.petrol6,
        fontSize: 12,
        fontWeight: 300,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <img src="/brand/postfinance-mark.svg" width={32} height={32} alt="" style={{ borderRadius: 8 }} />
        <div>
          <div style={{ color: PF.petrol11, fontWeight: 700, fontSize: 13 }}>
            PostFinance design system · v1
          </div>
          <div>iOS app kit · post-March-2025 rebrand</div>
        </div>
      </div>
      <div style={{ fontFamily: pfMono, fontSize: 11 }}>
        ★ petrol-9 #004B5A · gelb #FFCC00
      </div>
    </footer>
  );
}
