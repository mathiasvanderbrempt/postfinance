import * as React from "react";
import Phone from "./components/Phone";
import {
  ScreenHome,
  ScreenInvest,
  ScreenLogin,
  ScreenOffers,
  ScreenPay,
  ScreenServices,
} from "./components/screens";
import { PF } from "./lib/pf";

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--pf-bg-canvas)" }}>
      {/* Canvas header */}
      <header
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "72px 40px 32px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
          }}
        >
          <img
            src="/brand/postfinance-mark.svg"
            width={36}
            height={36}
            alt="PostFinance"
            style={{ borderRadius: 8 }}
          />
          <img
            src="/brand/postfinance-logo.svg"
            height={20}
            alt="PostFinance"
            style={{ display: "block" }}
          />
          <span
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: PF.petrol9,
              opacity: 0.5,
              marginLeft: 8,
            }}
          >
            iOS app — UI kit
          </span>
        </div>
        <h1
          style={{
            margin: "12px 0 0",
            fontSize: 56,
            lineHeight: 1.05,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: PF.petrol9,
            maxWidth: 880,
          }}
        >
          Six screens. Petrol foundation, gelb accents, Swiss restraint.
        </h1>
        <p
          style={{
            margin: "16px 0 0",
            fontSize: 18,
            lineHeight: 1.5,
            fontWeight: 300,
            color: PF.petrol9,
            opacity: 0.85,
            maxWidth: 720,
          }}
        >
          A high-fidelity recreation of the PostFinance iOS app, post-March
          2025 rebrand. Petrol &nbsp;<code style={{ fontSize: 16 }}>#004B5A</code>&nbsp;
          carries the brand spine; gelb &nbsp;<code style={{ fontSize: 16 }}>#FFCC00</code>&nbsp;
          appears as accent only. Demo data throughout.
        </p>
      </header>

      {/* Phones row */}
      <section
        className="pf-canvas-scroll"
        style={{
          padding: "32px 40px 96px",
          overflowX: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 64,
            alignItems: "flex-start",
            paddingBottom: 24,
            width: "max-content",
          }}
        >
          <Phone label="01 · Auth" caption="Welcome back, Anna." showTabBar={false}>
            <ScreenLogin />
          </Phone>
          <Phone label="02 · Home" caption="Account, quick actions, recent activity." activeTab="home">
            <ScreenHome />
          </Phone>
          <Phone label="03 · Payments" caption="QR-bill, IBAN, TWINT, standing orders." activeTab="pay">
            <ScreenPay />
          </Phone>
          <Phone label="04 · Invest" caption="Portfolio total + holdings." activeTab="invest">
            <ScreenInvest />
          </Phone>
          <Phone label="05 · Offers" caption="Petrol surfaces, gelb accents only." activeTab="offers">
            <ScreenOffers />
          </Phone>
          <Phone label="06 · Services" caption="Cards, profile, security, settings." activeTab="services">
            <ScreenServices />
          </Phone>
        </div>
      </section>

      {/* Token strip */}
      <footer
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 40px 96px",
        }}
      >
        <div
          style={{
            background: PF.white,
            borderRadius: 24,
            padding: 32,
            boxShadow: "var(--pf-shadow-md)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 24,
          }}
        >
          {[
            { name: "Petrol 9", hex: "#004B5A", role: "Brand spine", fg: PF.white, bg: PF.petrol9 },
            { name: "Petrol 11", hex: "#002B33", role: "Deepest surface", fg: PF.white, bg: PF.petrol11 },
            { name: "Petrol 1", hex: "#E6EEF0", role: "Tinted background", fg: PF.petrol9, bg: PF.petrol1 },
            { name: "Gelb", hex: "#FFCC00", role: "Accent only", fg: PF.petrol11, bg: PF.gelb },
            { name: "Grau 1", hex: "#F8F8F8", role: "Section background", fg: PF.fg1, bg: "#F8F8F8" },
            { name: "Grau 8", hex: "#1A1A1A", role: "Primary text", fg: PF.white, bg: "#1A1A1A" },
          ].map((t) => (
            <div
              key={t.name}
              style={{
                background: t.bg,
                color: t.fg,
                borderRadius: 16,
                padding: 18,
                minHeight: 96,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                border: t.bg === "#F8F8F8" || t.bg === PF.petrol1 ? "1px solid #E6EAEA" : "none",
              }}
            >
              <div style={{ fontSize: 14, fontWeight: 700 }}>{t.name}</div>
              <div>
                <div style={{ fontFamily: "ui-monospace, monospace", fontSize: 12, opacity: 0.75 }}>
                  {t.hex}
                </div>
                <div style={{ fontSize: 12, fontWeight: 300, opacity: 0.85 }}>{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </footer>
    </main>
  );
}
