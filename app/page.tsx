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
import DesignSystem from "./components/system/DesignSystem";
import { PF } from "./lib/pf";

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--pf-bg-canvas)" }}>
      {/* Canvas header */}
      <header
        className="pf-canvas-header"
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
          <span
            style={{
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: "-0.01em",
              color: PF.petrol9,
              lineHeight: 1,
            }}
          >
            PostFinance
          </span>
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
            fontSize: "clamp(28px, 6.5vw, 56px)",
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
        className="pf-canvas-scroll pf-canvas-row"
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

      {/* Full design system documentation */}
      <DesignSystem />
    </main>
  );
}
