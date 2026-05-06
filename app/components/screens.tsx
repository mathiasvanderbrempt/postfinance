"use client";

import * as React from "react";
import Icon from "./Icon";
import { PF, pfFont } from "../lib/pf";
import {
  PFAccountCard,
  PFButton,
  PFHeader,
  PFListRow,
  PFQuickActions,
  PFScreen,
  PFSectionHead,
  PFTxRow,
} from "./PFKit";

/* ─── HOME ────────────────────────────────────────────────────────── */
export function ScreenHome() {
  return (
    <PFScreen bg={PF.bgAlt}>
      <PFHeader
        large
        title="Hi, Anna"
        trailing={
          <>
            <Icon name="search" size={22} color={PF.fg2} />
            <div style={{ position: "relative" }}>
              <Icon name="bell" size={22} color={PF.fg2} />
              <div
                style={{
                  position: "absolute",
                  top: -2,
                  right: -2,
                  width: 8,
                  height: 8,
                  borderRadius: 4,
                  background: PF.gelb,
                  border: `1.5px solid ${PF.white}`,
                }}
              />
            </div>
          </>
        }
      />
      <PFAccountCard
        label="Private account"
        accountNo="CH56 0900 ··· 5325 7"
        balance="4 218.50"
      />

      <PFQuickActions
        items={[
          { id: "qr", icon: "qr", label: "Scan QR" },
          { id: "pay", icon: "send", label: "Pay" },
          { id: "card", icon: "card", label: "Card" },
          { id: "save", icon: "pig", label: "Save" },
        ]}
      />

      <PFSectionHead title="Recent activity" action="See all" />
      <div style={{ background: PF.white }}>
        <PFTxRow icon="cart" name="Migros" meta="Today · 14:32 · *5410" amount="89.40" />
        <PFTxRow
          icon="coffee"
          name="Starbucks Bahnhof"
          meta="Today · 09:15 · *5410"
          amount="6.80"
        />
        <PFTxRow
          icon="send"
          name="Marco Bianchi"
          meta="Yesterday · TWINT"
          amount="120.00"
          sign="+"
        />
        <PFTxRow
          icon="house"
          name="Rent · April"
          meta="1 Apr · standing order"
          amount="1 850.00"
        />
      </div>

      <div style={{ padding: 20 }}>
        <div
          style={{
            background: PF.white,
            borderRadius: 20,
            padding: 18,
            border: "1px solid #E6EAEA",
            display: "flex",
            alignItems: "center",
            gap: 14,
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              flex: "0 0 auto",
              background: PF.petrol1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon name="trending-up" size={22} color={PF.petrol9} />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: ".06em",
                textTransform: "uppercase",
                color: PF.petrol7,
                opacity: 0.85,
              }}
            >
              Insight · for you
            </div>
            <div
              style={{
                fontSize: 15,
                fontWeight: 600,
                marginTop: 3,
                lineHeight: 1.3,
                color: PF.fg1,
              }}
            >
              You could save CHF 84/month by moving idle cash to a Sparkonto Plus.
            </div>
          </div>
          <Icon name="chevron" size={20} color={PF.fg3} />
        </div>
      </div>

      <div style={{ height: 12 }} />
    </PFScreen>
  );
}

/* ─── PAYMENTS ────────────────────────────────────────────────────── */
function tile(
  bg: string,
  fg: string,
  petrol: boolean,
): React.CSSProperties {
  return {
    background: bg,
    color: fg,
    border: "none",
    borderRadius: 20,
    padding: 20,
    minHeight: 120,
    display: "flex",
    flexDirection: "column",
    gap: 8,
    cursor: "pointer",
    textAlign: "left",
    alignItems: "flex-start",
    fontFamily: pfFont,
    boxShadow: petrol
      ? "0 20px 40px rgba(0,75,90,.12)"
      : "0 20px 40px rgba(0,0,0,.04)",
  };
}
const tileTitle = (c: string): React.CSSProperties => ({
  fontSize: 15,
  fontWeight: 700,
  color: c,
  marginTop: "auto",
});
const tileSub = (c: string): React.CSSProperties => ({
  fontSize: 12,
  fontWeight: 300,
  color: c,
});

export function ScreenPay() {
  return (
    <PFScreen bg={PF.bgAlt}>
      <PFHeader
        large
        title="Payments"
        trailing={<Icon name="search" size={22} color={PF.fg2} />}
      />

      <div
        style={{
          padding: "0 20px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 12,
        }}
      >
        <button style={tile(PF.petrol9, PF.white, true)}>
          <Icon name="qr" size={28} color={PF.gelb} />
          <span style={tileTitle(PF.white)}>Scan QR-bill</span>
          <span style={tileSub("rgba(255,255,255,.7)")}>
            Pay any Swiss QR invoice
          </span>
        </button>
        <button style={tile(PF.white, PF.fg1, false)}>
          <Icon name="send" size={28} color={PF.petrol9} />
          <span style={tileTitle(PF.fg1)}>New payment</span>
          <span style={tileSub(PF.fg3)}>IBAN or saved recipient</span>
        </button>
        <button style={tile(PF.white, PF.fg1, false)}>
          <Icon name="user" size={28} color={PF.petrol9} />
          <span style={tileTitle(PF.fg1)}>TWINT</span>
          <span style={tileSub(PF.fg3)}>Send to a phone number</span>
        </button>
        <button style={tile(PF.white, PF.fg1, false)}>
          <Icon name="house" size={28} color={PF.petrol9} />
          <span style={tileTitle(PF.fg1)}>Standing orders</span>
          <span style={tileSub(PF.fg3)}>3 active</span>
        </button>
      </div>

      <PFSectionHead title="Pending" action="See all" />
      <div style={{ background: PF.white }}>
        <PFTxRow
          icon="house"
          name="Krankenkasse · Helsana"
          meta="Due 5 Apr · scheduled"
          amount="412.00"
        />
        <PFTxRow
          icon="card"
          name="Swisscom"
          meta="Due 12 Apr · QR-bill"
          amount="89.50"
        />
      </div>

      <div style={{ height: 12 }} />
    </PFScreen>
  );
}

/* ─── INVEST ──────────────────────────────────────────────────────── */
export function ScreenInvest() {
  return (
    <PFScreen bg={PF.bgAlt}>
      <PFHeader
        large
        title="Invest"
        trailing={<Icon name="settings" size={22} color={PF.fg2} />}
      />

      <div
        className="pf-petrol-card"
        style={{
          margin: "0 20px",
          background: PF.petrol9,
          color: PF.white,
          borderRadius: 20,
          padding: 20,
          boxShadow: "var(--pf-shadow-petrol)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: ".04em",
            textTransform: "uppercase",
            opacity: 0.7,
          }}
        >
          Portfolio total
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 6,
            marginTop: 6,
          }}
        >
          <span style={{ fontSize: 13, opacity: 0.7 }}>CHF</span>
          <span
            style={{
              fontSize: 36,
              fontWeight: 700,
              letterSpacing: "-0.01em",
            }}
          >
            28 540.20
          </span>
        </div>
        <div
          style={{
            display: "flex",
            gap: 14,
            marginTop: 8,
            fontSize: 13,
          }}
        >
          <span style={{ color: PF.gelb, fontWeight: 700 }}>+ 624.30</span>
          <span style={{ opacity: 0.7 }}>+ 2.23% · 1M</span>
        </div>
        <div
          style={{
            marginTop: 18,
            display: "flex",
            height: 56,
            alignItems: "flex-end",
            gap: 4,
          }}
        >
          {[28, 32, 30, 38, 36, 42, 40, 46, 44, 52, 50, 58, 56, 64, 60, 68].map(
            (h, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: `${h}%`,
                  background: i > 12 ? PF.gelb : "rgba(255,255,255,.35)",
                  borderRadius: 3,
                }}
              />
            ),
          )}
        </div>
      </div>

      <PFSectionHead title="Holdings" action="View all" />
      <div style={{ background: PF.white }}>
        <PFTxRow
          icon="trending-up"
          name="Nestlé"
          meta="48 shares · CHF 96.40"
          amount="4 627.20"
          sign="+"
        />
        <PFTxRow
          icon="trending-up"
          name="Roche"
          meta="22 shares · CHF 248.10"
          amount="5 458.20"
          sign="+"
        />
        <PFTxRow
          icon="trending-up"
          name="Swiss Index ETF"
          meta="120 units · CHF 142.50"
          amount="17 100.00"
          sign="+"
        />
      </div>

      <div style={{ padding: 20 }}>
        <PFButton kind="primary" fullWidth leadingIcon="plus">
          Buy / sell
        </PFButton>
      </div>

      <div style={{ height: 12 }} />
    </PFScreen>
  );
}

/* ─── OFFERS ──────────────────────────────────────────────────────── */
type Offer = {
  tag: string;
  title: string;
  highlight?: string;
  sub: string;
  dark?: boolean;
};

export function ScreenOffers() {
  const offers: Offer[] = [
    {
      tag: "Personal",
      title: "Open a savings account",
      highlight: "1.25%",
      sub: "Switch in under 5 minutes",
      dark: true,
    },
    {
      tag: "Cashback",
      title: "Migros · 5% back this weekend",
      sub: "Use your PostFinance card",
    },
    {
      tag: "Travel",
      title: "No fees on EUR purchases",
      sub: "Until 30 June",
    },
    {
      tag: "Mortgage",
      title: "Rate check in 2 minutes",
      highlight: "0.94%",
      sub: "No credit pull required",
      dark: true,
    },
  ];

  return (
    <PFScreen bg={PF.bgAlt}>
      <PFHeader large title="Offers" />
      <div
        style={{
          padding: "0 20px",
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        {offers.map((o, i) => (
          <div
            key={i}
            className={o.dark ? "pf-petrol-card" : undefined}
            style={{
              background: o.dark ? PF.petrol9 : PF.white,
              color: o.dark ? PF.white : PF.fg1,
              borderRadius: 20,
              padding: 20,
              boxShadow: o.dark
                ? "var(--pf-shadow-petrol)"
                : "var(--pf-shadow-md)",
              border: o.dark ? "none" : "1px solid #E6EAEA",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: ".06em",
                textTransform: "uppercase",
                color: o.dark ? PF.gelb : PF.petrol7,
                opacity: o.dark ? 0.95 : 0.65,
              }}
            >
              {o.tag}
            </div>
            <div
              style={{
                fontSize: 18,
                fontWeight: 700,
                marginTop: 6,
                lineHeight: 1.25,
              }}
            >
              {o.title}
              {o.highlight && (
                <>
                  {" · "}
                  <span style={{ color: PF.gelb }}>{o.highlight}</span>
                </>
              )}
            </div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 300,
                marginTop: 4,
                opacity: 0.75,
              }}
            >
              {o.sub}
            </div>
          </div>
        ))}
      </div>
      <div style={{ height: 20 }} />
    </PFScreen>
  );
}

/* ─── SERVICES ────────────────────────────────────────────────────── */
export function ScreenServices() {
  return (
    <PFScreen bg={PF.white}>
      <PFHeader large title="Services" />
      <PFListRow icon="card" label="Cards" meta="2 active" />
      <PFListRow icon="user" label="Profile & limits" />
      <PFListRow icon="face-id" label="Login & security" />
      <PFListRow icon="pig" label="Retirement (3a)" />
      <PFListRow icon="trending-up" label="E-Trading" />
      <PFListRow icon="bell" label="Notifications" />
      <PFListRow icon="settings" label="Settings" />
      <div style={{ padding: "32px 20px" }}>
        <PFButton kind="ghost" fullWidth>
          Sign out
        </PFButton>
      </div>
    </PFScreen>
  );
}

/* ─── LOGIN ──────────────────────────────────────────────────────── */
export function ScreenLogin() {
  return (
    <div
      className="pf-petrol-card"
      style={{
        flex: 1,
        background: PF.petrol9,
        color: PF.white,
        fontFamily: pfFont,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "94px 20px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div>
        {/* PostFinance signet on gelb square */}
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: 14,
            background: PF.gelb,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 6px 18px rgba(0,0,0,0.18)",
          }}
        >
          <span
            style={{
              fontSize: 30,
              fontWeight: 700,
              color: PF.petrol9,
              lineHeight: 1,
              letterSpacing: "-0.04em",
            }}
          >
            ₽
          </span>
        </div>
        <div
          style={{
            fontSize: 36,
            fontWeight: 700,
            letterSpacing: "-0.01em",
            marginTop: 32,
            lineHeight: 1.1,
          }}
        >
          Welcome back,
          <br />
          Anna.
        </div>
        <div
          style={{
            fontSize: 15,
            fontWeight: 300,
            opacity: 0.75,
            marginTop: 12,
            maxWidth: 280,
          }}
        >
          Use Face ID to access your account.
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 24,
          position: "relative",
        }}
      >
        <div
          style={{
            width: 96,
            height: 96,
            borderRadius: 999,
            background: "rgba(255,255,255,.08)",
            border: `2px solid ${PF.gelb}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 20px 40px rgba(0,0,0,.25), 0 0 0 6px rgba(255,204,0,.12)",
          }}
        >
          <Icon name="face-id" size={42} color={PF.gelb} stroke={1.8} />
        </div>
        <div style={{ fontSize: 14, opacity: 0.8 }}>Tap to unlock</div>
        <div style={{ height: 24 }} />
        <PFButton kind="ghost" style={{ color: PF.white }}>
          Use password instead
        </PFButton>
      </div>
    </div>
  );
}
