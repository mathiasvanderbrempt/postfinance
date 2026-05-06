"use client";

import * as React from "react";
import Icon from "./Icon";
import IconAccent from "./IconAccent";
import { PF, pfFont } from "../lib/pf";
import {
  PFAccountCard,
  PFButton,
  PFCardList,
  PFHeader,
  PFHeaderIcon,
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
            <PFHeaderIcon ariaLabel="Search">
              <Icon name="search" size={22} color={PF.fg2} />
            </PFHeaderIcon>
            <PFHeaderIcon ariaLabel="Notifications" hasBadge>
              <Icon name="bell" size={22} color={PF.fg2} />
            </PFHeaderIcon>
          </>
        }
      />

      <PFAccountCard
        label="Private account"
        accountNo="···· 5325 7"
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
      <PFCardList>
        <PFTxRow icon="cart" name="Migros" meta="Today · 14:32 · *5410" amount="89.40" />
        <PFTxRow icon="coffee" name="Starbucks Bahnhof" meta="Today · 09:15 · *5410" amount="6.80" />
        <PFTxRow icon="send" name="Marco Bianchi" meta="Yesterday · TWINT" amount="120.00" sign="+" />
        <PFTxRow icon="house" name="Rent · April" meta="1 Apr · standing order" amount="1 850.00" />
      </PFCardList>

      <div style={{ padding: 16 }}>
        <div
          style={{
            background: PF.white,
            borderRadius: 16,
            padding: 16,
            border: `1px solid ${PF.divider}`,
            display: "flex",
            alignItems: "center",
            gap: 14,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              flex: "0 0 auto",
              background: PF.petrol1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconAccent name="insight" size={32} />
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
      ? "0 8px 20px rgba(0,75,90,.10)"
      : "0 1px 0 rgba(0,75,90,0.04)",
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
        trailing={
          <PFHeaderIcon ariaLabel="Search">
            <Icon name="search" size={22} color={PF.fg2} />
          </PFHeaderIcon>
        }
      />

      <div
        style={{
          padding: "0 16px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 12,
        }}
      >
        <button className="pf-petrol-card" style={{ ...tile(PF.petrol9, PF.white, true), position: "relative", overflow: "hidden" }}>
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
      <PFCardList>
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
      </PFCardList>

      <div style={{ height: 12 }} />
    </PFScreen>
  );
}

/* ─── INVEST ──────────────────────────────────────────────────────── */
type InvestTab = { id: string; icon: string; label: string; accent?: boolean };
type Holding = { name: string; tag: string; amount: string; change: string };
type Portfolio = {
  title: string;
  total?: string;
  details?: boolean;
  items: Holding[];
};

export function ScreenInvest() {
  const tabs: InvestTab[] = [
    { id: "discover", icon: "trending-up", label: "Discover", accent: true },
    { id: "market", icon: "tag", label: "Market overview" },
    { id: "consult", icon: "card", label: "Consultation" },
  ];
  const portfolios: Portfolio[] = [
    {
      title: "Fund self-service",
      total: "1'770.11+",
      details: true,
      items: [
        {
          name: "UBS (CH) Institutional Fund",
          tag: "Active fund savings plan",
          amount: "1'330.00+",
          change: "+12.50%",
        },
        {
          name: "Pictet Short-Term Money Market JPY",
          tag: "Active fund savings plan",
          amount: "440.11+",
          change: "+12.50%",
        },
      ],
    },
    {
      title: "Investment consulting plus",
      details: true,
      items: [
        {
          name: "99-999999-5",
          tag: "Balance, Global",
          amount: "4'000.11+",
          change: "+12.50%",
        },
      ],
    },
    {
      title: "E-trading",
      total: "12'480.50+",
      details: true,
      items: [
        {
          name: "Nestlé SA",
          tag: "Self-managed · 48 shares",
          amount: "4'627.20+",
          change: "+3.20%",
        },
        {
          name: "Roche Holding",
          tag: "Self-managed · 22 shares",
          amount: "5'458.20+",
          change: "+1.80%",
        },
        {
          name: "Swiss Market Index ETF",
          tag: "Self-managed · 18 units",
          amount: "2'395.10+",
          change: "+0.95%",
        },
      ],
    },
  ];

  return (
    <PFScreen bg={PF.bgAlt}>
      <div style={{ height: 12 }} />
      {/* HERO — petrol card with shine, search button, balance, 3 tabs */}
      <div
        className="pf-petrol-card"
        style={{
          margin: "0 16px",
          background: PF.petrol9,
          color: PF.white,
          borderRadius: 24,
          padding: "20px 22px 24px",
          boxShadow: "0 8px 20px rgba(0,75,90,0.10)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "rgba(255,255,255,.12)",
              border: "none",
              borderRadius: 999,
              color: PF.white,
              padding: "8px 14px",
              fontFamily: pfFont,
              fontWeight: 700,
              fontSize: 13,
              cursor: "pointer",
            }}
          >
            <Icon name="search" size={16} color={PF.white} /> Search
          </button>
        </div>
        <div style={{ textAlign: "center", marginTop: 8 }}>
          <div style={{ fontSize: 14, fontWeight: 300, opacity: 0.85 }}>
            Investment and Retirement
          </div>
          <div
            style={{
              fontSize: 30,
              fontWeight: 700,
              letterSpacing: "-0.01em",
              marginTop: 4,
            }}
          >
            CHF 595&apos;389.49+
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: 22,
          }}
        >
          {tabs.map((t) => (
            <button
              key={t.id}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
                padding: 0,
                fontFamily: pfFont,
                color: PF.white,
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 999,
                  background: t.accent ? PF.gelb : PF.petrol1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon name={t.icon} size={24} color={PF.petrol9} stroke={1.8} />
              </div>
              <span style={{ fontSize: 12, fontWeight: 700 }}>{t.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div style={{ height: 16 }} />

      {/* Portfolio cards */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 14,
          padding: "0 16px",
        }}
      >
        {portfolios.map((p, pi) => (
          <div
            key={pi}
            style={{
              background: PF.white,
              borderRadius: 20,
              padding: 18,
              border: `1px solid ${PF.divider}`,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: PF.fg1,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {p.title}
                </div>
                {p.total && (
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 300,
                      color: PF.fg2,
                      marginTop: 2,
                    }}
                  >
                    CHF {p.total}
                  </div>
                )}
              </div>
              {p.details && (
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: PF.petrol9,
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  Details
                </span>
              )}
            </div>
            <div
              style={{
                marginTop: 14,
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              {p.items.map((it, ii) => (
                <div
                  key={ii}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 999,
                      background: PF.petrol1,
                      flex: "0 0 auto",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={PF.petrol9}
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="6" cy="14" r="2.2" />
                      <circle cx="18" cy="14" r="2.2" />
                      <circle cx="12" cy="6" r="2.2" />
                      <path d="M7.7 13 10.5 7.5 M16.3 13 13.5 7.5" />
                      <rect
                        x="3"
                        y="3"
                        width="6"
                        height="4"
                        rx="1"
                        fill={PF.gelb}
                        stroke={PF.petrol9}
                      />
                      <path d="m4.2 4.2 2 2 M6.2 4.2l-2 2" />
                    </svg>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: PF.fg1,
                        lineHeight: 1.3,
                      }}
                    >
                      {it.name}
                    </div>
                    <span
                      style={{
                        display: "inline-block",
                        marginTop: 6,
                        padding: "4px 10px",
                        borderRadius: 999,
                        background: PF.petrol1,
                        color: PF.petrol9,
                        fontSize: 11,
                        fontWeight: 500,
                      }}
                    >
                      {it.tag}
                    </span>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: PF.fg1,
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      CHF {it.amount}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        color: PF.info,
                        marginTop: 2,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 4,
                      }}
                    >
                      <span style={{ fontSize: 10 }}>▲</span> {it.change}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ height: 20 }} />
    </PFScreen>
  );
}

/* ─── OFFERS ──────────────────────────────────────────────────────── */
type Offer = {
  tag: string;
  title: string;
  highlight?: string;
  sub: string;
  kind: "hero" | "mid";
};

export function ScreenOffers() {
  const offers: Offer[] = [
    {
      tag: "Personal",
      title: "Open a savings account",
      highlight: "1.25%",
      sub: "Switch in under 5 minutes",
      kind: "hero",
    },
    {
      tag: "Cashback",
      title: "Migros · 5% back this weekend",
      sub: "Use your PostFinance card",
      kind: "mid",
    },
    {
      tag: "Travel",
      title: "No fees on EUR purchases",
      sub: "Until 30 June",
      kind: "mid",
    },
    {
      tag: "Mortgage",
      title: "Rate check in 2 minutes",
      highlight: "0.94%",
      sub: "No credit pull required",
      kind: "mid",
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
        {offers.map((o, i) => {
          const hero = o.kind === "hero";
          const bg = hero ? PF.petrol9 : PF.petrol1;
          const fg = hero ? PF.white : PF.petrol11;
          const tagColor = hero ? PF.petrol2 : PF.petrol7;
          return (
            <div
              key={i}
              className={hero ? "pf-petrol-card" : undefined}
              style={{
                background: bg,
                color: fg,
                borderRadius: 20,
                padding: hero ? "24px 22px 26px" : 20,
                minHeight: hero ? 168 : 0,
                boxShadow: hero ? "0 8px 20px rgba(0,75,90,.10)" : "none",
                display: "flex",
                flexDirection: "column",
                justifyContent: hero ? "space-between" : "flex-start",
                gap: hero ? 18 : 4,
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
                  opacity: hero ? 0.8 : 0.85,
                  color: tagColor,
                }}
              >
                {o.tag}
              </div>
              <div>
                <div
                  style={{
                    fontSize: hero ? 22 : 17,
                    fontWeight: 700,
                    marginTop: hero ? 0 : 6,
                    lineHeight: 1.25,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {o.title}
                  {o.highlight && (
                    <>
                      {" · "}
                      <span style={{ color: hero ? PF.gelb : "inherit" }}>
                        {o.highlight}
                      </span>
                    </>
                  )}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 300,
                    marginTop: 4,
                    opacity: hero ? 0.8 : 0.7,
                    color: hero ? "inherit" : PF.petrol7,
                  }}
                >
                  {o.sub}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div style={{ height: 20 }} />
    </PFScreen>
  );
}

/* ─── SERVICES ────────────────────────────────────────────────────── */
export function ScreenServices() {
  return (
    <PFScreen bg={PF.bgAlt}>
      <PFHeader large title="Services" />
      <div style={{ height: 8 }} />
      <PFCardList>
        <PFListRow icon="card" label="Cards" meta="2 active" />
        <PFListRow icon="user" label="Profile & limits" />
        <PFListRow icon="face-id" label="Login & security" />
        <PFListRow icon="pig" label="Retirement (3a)" />
        <PFListRow icon="trending-up" label="E-Trading" />
        <PFListRow icon="bell" label="Notifications" />
        <PFListRow icon="settings" label="Settings" />
      </PFCardList>
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
        <img
          src="/brand/postfinance-mark.svg"
          width={56}
          height={56}
          alt="PostFinance"
          style={{
            display: "block",
            borderRadius: 14,
            boxShadow: "0 6px 18px rgba(0,0,0,0.18)",
          }}
        />
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
            boxShadow:
              "0 20px 40px rgba(0,0,0,.25), 0 0 0 6px rgba(255,204,0,.12)",
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
