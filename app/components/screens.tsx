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
            boxShadow: "0 1px 0 rgba(0, 75, 90, 0.06)",
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
type Holding = {
  name: string;
  pillLabel: string;
  pillDot?: boolean;
  pillIcon?: string;
  amount: string;
  changePct: string;
};
type SectionIconKind = "funds" | "managed" | "trading";
type Portfolio = {
  sectionIcon: SectionIconKind;
  title: string;
  count: string;
  total: string;
  ytdPct: string;
  items: Holding[];
};

function SectionIcon({ kind }: { kind: SectionIconKind }) {
  return (
    <div
      style={{
        width: 44,
        height: 44,
        borderRadius: 14,
        background: PF.petrol9,
        flex: "0 0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
      }}
    >
      <svg width={26} height={26} viewBox="0 0 24 24" fill="none">
        {kind === "funds" && (
          <g>
            {/* L-shape axis */}
            <path
              d="M5 5 L5 18 L19 18"
              stroke="rgba(255,255,255,0.22)"
              strokeWidth="1.4"
              strokeLinecap="round"
              fill="none"
            />
            {/* Yellow accent square */}
            <rect x="14.6" y="9.2" width="3" height="2.4" rx="0.5" fill={PF.gelb} />
            {/* White trending arrow */}
            <path
              d="M7.5 14.5 L11 11 L13 13 L16.5 9.5"
              stroke={PF.white}
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <path
              d="M14 9.5 L17 9.5 L17 12.5"
              stroke={PF.white}
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </g>
        )}
        {kind === "managed" && (
          <g>
            <path
              d="M5 5 L5 18 L19 18"
              stroke="rgba(255,255,255,0.22)"
              strokeWidth="1.4"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="11" cy="10" r="3" stroke={PF.white} strokeWidth="1.6" fill="none" />
            <path
              d="M6 17.5a5 5 0 0 1 10 0"
              stroke={PF.white}
              strokeWidth="1.6"
              strokeLinecap="round"
              fill="none"
            />
            <polygon
              points="18,4 19,6 21.2,6.3 19.6,7.8 20,10 18,8.9 16,10 16.4,7.8 14.8,6.3 17,6"
              fill={PF.gelb}
              stroke="none"
            />
          </g>
        )}
        {kind === "trading" && (
          <g>
            <path
              d="M5 5 L5 18 L19 18"
              stroke="rgba(255,255,255,0.22)"
              strokeWidth="1.4"
              strokeLinecap="round"
              fill="none"
            />
            <line x1="8" y1="5.5" x2="8" y2="16.5" stroke={PF.white} strokeWidth="1.4" strokeLinecap="round" />
            <rect x="6.7" y="8" width="2.6" height="6.5" rx="0.5" fill={PF.white} opacity={0.9} />
            <line x1="13" y1="6" x2="13" y2="17" stroke={PF.white} strokeWidth="1.4" strokeLinecap="round" />
            <rect x="11.7" y="9" width="2.6" height="5.5" rx="0.5" fill={PF.white} />
            <line x1="18" y1="6.5" x2="18" y2="16" stroke={PF.gelb} strokeWidth="1.4" strokeLinecap="round" />
            <rect x="16.7" y="8.5" width="2.6" height="5.5" rx="0.5" fill={PF.gelb} />
          </g>
        )}
      </svg>
    </div>
  );
}

export function ScreenInvest() {
  const allocation = [
    { id: "funds", icon: "pie", label: "Funds", pct: 58 },
    { id: "ret", icon: "chair", label: "Retirement", pct: 27 },
    { id: "cash", icon: "wallet", label: "Cash", pct: 15 },
  ];
  const accent = "#5EE6B6";
  const portfolios: Portfolio[] = [
    {
      sectionIcon: "funds",
      title: "Self-directed funds",
      count: "2 products",
      total: "1'770.11+",
      ytdPct: "+12.50%",
      items: [
        {
          name: "UBS (CH) Institutional Fund",
          pillLabel: "Savings plan",
          pillDot: true,
          amount: "1'330.00+",
          changePct: "12.50%",
        },
        {
          name: "Pictet Short-Term Money Market JPY",
          pillLabel: "Savings plan",
          pillDot: true,
          amount: "440.11+",
          changePct: "12.50%",
        },
      ],
    },
    {
      sectionIcon: "managed",
      title: "Managed portfolios",
      count: "1 portfolio",
      total: "4'000.11+",
      ytdPct: "+12.50%",
      items: [
        {
          name: "99-999999-5",
          pillLabel: "Balance, Global",
          amount: "4'000.11+",
          changePct: "12.50%",
        },
      ],
    },
    {
      sectionIcon: "trading",
      title: "E-trading",
      count: "1 account",
      total: "12'340.45+",
      ytdPct: "+8.23%",
      items: [
        {
          name: "Trading account",
          pillLabel: "Securities, CHF",
          pillIcon: "card",
          amount: "12'340.45+",
          changePct: "8.23%",
        },
      ],
    },
  ];

  return (
    <PFScreen bg={PF.bgAlt}>
      <div style={{ height: 12 }} />
      {/* HERO — investment & retirement total + allocation */}
      <div
        className="pf-petrol-card"
        style={{
          margin: "0 16px",
          background: PF.petrol9,
          color: PF.white,
          borderRadius: 24,
          padding: 20,
          boxShadow: "0 8px 20px rgba(0,75,90,0.10)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Top row: title + Total pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 8,
            position: "relative",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 999,
                background: "rgba(255,255,255,.10)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flex: "0 0 auto",
              }}
            >
              <Icon name="trending-up" size={16} color={PF.white} stroke={1.8} />
            </div>
            <span
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "-0.005em",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Investment &amp; Retirement
            </span>
          </div>
          <button
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              background: "transparent",
              border: "1px solid rgba(255,255,255,.20)",
              borderRadius: 999,
              color: PF.white,
              padding: "6px 10px 6px 12px",
              fontFamily: pfFont,
              fontWeight: 700,
              fontSize: 12,
              cursor: "pointer",
              flex: "0 0 auto",
            }}
          >
            Total <Icon name="chevron-down" size={14} color={PF.white} stroke={1.8} />
          </button>
        </div>

        {/* Balance */}
        <div style={{ position: "relative", marginTop: 18 }}>
          <div
            style={{
              fontSize: 30,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            CHF 595&apos;389.49
          </div>
          <div
            style={{
              marginTop: 8,
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 6,
              fontSize: 12,
              fontWeight: 700,
            }}
          >
            <span style={{ color: accent }}>+CHF 12&apos;430</span>
            <span style={{ fontWeight: 300, opacity: 0.8 }}>this month</span>
            <span style={{ color: accent, marginLeft: 2 }}>▲ 2.14%</span>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: "rgba(255,255,255,.12)",
            margin: "18px 0 14px",
          }}
        />

        {/* Allocation header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 12,
          }}
        >
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontWeight: 700 }}>
            Portfolio allocation
            <Icon name="info" size={13} color="rgba(255,255,255,.55)" stroke={1.6} />
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 4, opacity: 0.7, fontWeight: 300 }}>
            as of today <Icon name="chevron" size={12} color={PF.white} stroke={1.8} />
          </span>
        </div>

        {/* Allocation tiles */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 10,
            marginTop: 12,
          }}
        >
          {allocation.map((a) => (
            <div key={a.id} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 999,
                    background: "rgba(255,255,255,.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: "0 0 auto",
                  }}
                >
                  <Icon name={a.icon} size={14} color={accent} stroke={1.6} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1, minWidth: 0 }}>
                  <span style={{ fontSize: 11, fontWeight: 300, opacity: 0.75 }}>{a.label}</span>
                  <span style={{ fontSize: 16, fontWeight: 700, marginTop: 2 }}>{a.pct}%</span>
                </div>
              </div>
              <div
                style={{
                  height: 4,
                  borderRadius: 999,
                  background: "rgba(255,255,255,.10)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${a.pct}%`,
                    height: "100%",
                    background: accent,
                    borderRadius: 999,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 8, marginTop: 18 }}>
          <button
            style={{
              flex: "1 1 0",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              background: PF.gelb,
              color: PF.petrol11,
              border: "none",
              borderRadius: 999,
              padding: "11px 14px",
              fontFamily: pfFont,
              fontWeight: 700,
              fontSize: 12,
              cursor: "pointer",
              minWidth: 0,
            }}
          >
            <Icon name="trending-up" size={14} color={PF.petrol11} stroke={1.8} />
            <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              Discover opportunities
            </span>
          </button>
          <button
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              background: "transparent",
              color: PF.white,
              border: "1px solid rgba(255,255,255,.22)",
              borderRadius: 999,
              padding: "11px 14px",
              fontFamily: pfFont,
              fontWeight: 700,
              fontSize: 12,
              cursor: "pointer",
            }}
          >
            <Icon name="bars" size={14} color={PF.white} stroke={1.8} /> Market
          </button>
          <button
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              background: "transparent",
              color: PF.white,
              border: "1px solid rgba(255,255,255,.22)",
              borderRadius: 999,
              padding: "11px 14px",
              fontFamily: pfFont,
              fontWeight: 700,
              fontSize: 12,
              cursor: "pointer",
            }}
          >
            <Icon name="user" size={14} color={PF.white} stroke={1.8} /> Advisor
          </button>
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
              boxShadow: "0 1px 0 rgba(0, 75, 90, 0.06)",
            }}
          >
            {/* Section header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <SectionIcon kind={p.sectionIcon} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: PF.fg1,
                    letterSpacing: "-0.01em",
                    lineHeight: 1.2,
                  }}
                >
                  {p.title}
                </div>
                <div style={{ fontSize: 12, fontWeight: 300, color: PF.fg3, marginTop: 2 }}>
                  {p.count}
                </div>
              </div>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  fontSize: 13,
                  fontWeight: 700,
                  color: PF.petrol9,
                  cursor: "pointer",
                  flex: "0 0 auto",
                }}
              >
                View all <Icon name="chevron" size={14} color={PF.petrol9} stroke={1.8} />
              </span>
            </div>

            {/* Total + YTD */}
            <div
              style={{
                display: "flex",
                alignItems: "stretch",
                gap: 16,
                marginTop: 14,
              }}
            >
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: PF.fg1,
                    letterSpacing: "-0.01em",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  CHF {p.total}
                </div>
                <div style={{ fontSize: 11, fontWeight: 300, color: PF.fg3, marginTop: 2 }}>
                  Total value
                </div>
              </div>
              <div style={{ width: 1, background: PF.divider }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: PF.green,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  <span style={{ fontSize: 11 }}>▲</span> {p.ytdPct}
                </div>
                <div style={{ fontSize: 11, fontWeight: 300, color: PF.fg3, marginTop: 2 }}>
                  YTD
                </div>
              </div>
            </div>

            {/* Items */}
            <div style={{ marginTop: 14 }}>
              {p.items.map((it, ii) => (
                <div
                  key={ii}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "12px 0",
                    borderTop: `1px solid ${PF.divider}`,
                  }}
                >
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: PF.fg1,
                        lineHeight: 1.25,
                      }}
                    >
                      {it.name}
                    </div>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        marginTop: 6,
                        padding: "3px 9px 3px 8px",
                        borderRadius: 999,
                        background: PF.petrol1,
                        color: PF.petrol9,
                        fontSize: 11,
                        fontWeight: 700,
                      }}
                    >
                      {it.pillDot && (
                        <span
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: 999,
                            background: PF.green,
                            display: "inline-block",
                          }}
                        />
                      )}
                      {it.pillIcon && (
                        <Icon name={it.pillIcon} size={11} color={PF.petrol9} stroke={1.6} />
                      )}
                      {it.pillLabel}
                    </span>
                  </div>
                  <div style={{ textAlign: "right", flex: "0 0 auto" }}>
                    <div
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        color: PF.fg1,
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      CHF {it.amount}
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: PF.green,
                        marginTop: 2,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 3,
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      <span style={{ fontSize: 9 }}>▲</span> {it.changePct} YTD
                    </div>
                  </div>
                  <Icon name="chevron" size={14} color={PF.fg4} stroke={1.8} />
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Trust card */}
        <div
          style={{
            background: PF.white,
            borderRadius: 20,
            padding: "14px 16px",
            boxShadow: "0 1px 0 rgba(0, 75, 90, 0.06)",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 12,
              background: PF.petrol1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flex: "0 0 auto",
            }}
          >
            <Icon name="shield" size={18} color={PF.petrol9} stroke={1.8} />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: PF.fg1, lineHeight: 1.25 }}>
              Your assets are protected
            </div>
            <div style={{ fontSize: 11, fontWeight: 300, color: PF.fg3, marginTop: 2 }}>
              Bank-level security &amp; Swiss regulation
            </div>
          </div>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              fontSize: 12,
              fontWeight: 700,
              color: PF.petrol9,
              flex: "0 0 auto",
            }}
          >
            Learn more <Icon name="chevron" size={12} color={PF.petrol9} stroke={1.8} />
          </span>
        </div>
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
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img
            src="/brand/postfinance-mark.svg"
            width={32}
            height={32}
            alt=""
            style={{ borderRadius: 8 }}
          />
          <span
            style={{
              fontSize: 20,
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
            fontSize: 36,
            fontWeight: 700,
            letterSpacing: "-0.01em",
            marginTop: 40,
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
