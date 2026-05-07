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

  // Hero swipe state
  const [page, setPage] = React.useState(0);
  const [dragX, setDragX] = React.useState(0);
  const [dragging, setDragging] = React.useState(false);
  const startX = React.useRef(0);
  const trackRef = React.useRef<HTMLDivElement>(null);

  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    if ((e.target as HTMLElement).closest("button, a")) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    setDragging(true);
    startX.current = e.clientX;
    setDragX(0);
  }
  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!dragging) return;
    const dx = e.clientX - startX.current;
    // Resist out-of-range drag
    const w = trackRef.current?.clientWidth ?? 1;
    let resisted = dx;
    if ((page === 0 && dx > 0) || (page === 1 && dx < 0)) {
      resisted = dx * 0.35;
    }
    void w;
    setDragX(resisted);
  }
  function onPointerUp() {
    if (!dragging) return;
    setDragging(false);
    const w = trackRef.current?.clientWidth ?? 1;
    const threshold = w * 0.2;
    let next = page;
    if (dragX < -threshold) next = Math.min(1, page + 1);
    else if (dragX > threshold) next = Math.max(0, page - 1);
    setPage(next);
    setDragX(0);
  }

  // Holdings tray state — null = closed, index of active portfolio when open
  const [activeSection, setActiveSection] = React.useState<number | null>(null);
  // Holding detail state — null = overview, index into active section's items
  const [activeItem, setActiveItem] = React.useState<number | null>(null);
  // Period selector for detail
  const [period, setPeriod] = React.useState<"1W" | "1M" | "3M" | "1Y" | "ALL">("1M");
  React.useEffect(() => {
    if (activeSection === null) setActiveItem(null);
  }, [activeSection]);

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

  const spring = "cubic-bezier(0.32, 0.72, 0, 1)";
  const isTrayOpen = activeSection !== null;
  const activePortfolio = activeSection !== null ? portfolios[activeSection] : null;
  const activeHolding =
    activePortfolio && activeItem !== null ? activePortfolio.items[activeItem] : null;
  const isDetailOpen = activeHolding !== null;

  return (
    <div
      style={{
        position: "relative",
        flex: 1,
        minHeight: 0,
        background: PF.bgAlt,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        paddingTop: 44,
        fontFamily: pfFont,
        color: PF.fg1,
        fontWeight: 300,
      }}
    >
      <div
        style={{
          flex: 1,
          minHeight: 0,
          overflowY: "auto",
          paddingBottom: 84,
        }}
      >
      <div style={{ height: 12 }} />
      {/* HERO — investment & retirement total + allocation (swipeable) */}
      <div
        className="pf-petrol-card"
        style={{
          margin: "0 16px",
          background: PF.petrol9,
          color: PF.white,
          borderRadius: 24,
          padding: "20px 20px 16px",
          boxShadow: "0 8px 20px rgba(0,75,90,0.10)",
          position: "relative",
          overflow: "hidden",
          flex: "0 0 auto",
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

        {/* Swipe track */}
        <div
          ref={trackRef}
          style={{
            overflow: "hidden",
            marginTop: 16,
            touchAction: "pan-y",
          }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          <div
            style={{
              display: "flex",
              width: "200%",
              transform: `translateX(calc(${-page * 50}% + ${dragX}px))`,
              transition: dragging ? "none" : `transform 420ms ${spring}`,
              minHeight: 190,
            }}
          >
            {/* Page 1 — balance, performance, actions */}
            <div style={{ width: "50%", flex: "0 0 50%", paddingRight: 4 }}>
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

              <button
                style={{
                  marginTop: 16,
                  width: "100%",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  background: PF.gelb,
                  color: PF.petrol11,
                  border: "none",
                  borderRadius: 999,
                  padding: "12px 16px",
                  fontFamily: pfFont,
                  fontWeight: 700,
                  fontSize: 13,
                  cursor: "pointer",
                }}
              >
                <Icon name="trending-up" size={16} color={PF.petrol11} stroke={1.8} />
                Discover opportunities
              </button>
              <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                <button
                  style={{
                    flex: 1,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "transparent",
                    color: PF.white,
                    border: "1px solid rgba(255,255,255,.24)",
                    borderRadius: 999,
                    padding: "11px 14px",
                    fontFamily: pfFont,
                    fontWeight: 700,
                    fontSize: 13,
                    cursor: "pointer",
                  }}
                >
                  Market
                </button>
                <button
                  style={{
                    flex: 1,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "transparent",
                    color: PF.white,
                    border: "1px solid rgba(255,255,255,.24)",
                    borderRadius: 999,
                    padding: "11px 14px",
                    fontFamily: pfFont,
                    fontWeight: 700,
                    fontSize: 13,
                    cursor: "pointer",
                  }}
                >
                  Advisor
                </button>
              </div>
            </div>

            {/* Page 2 — allocation */}
            <div style={{ width: "50%", flex: "0 0 50%", paddingLeft: 4 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: 13, fontWeight: 700 }}>Portfolio allocation</span>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 300,
                    opacity: 0.7,
                  }}
                >
                  as of today
                </span>
              </div>

              <div
                style={{
                  marginTop: 14,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {allocation.map((a) => (
                  <div
                    key={a.id}
                    style={{ display: "flex", flexDirection: "column", gap: 6 }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 8,
                        }}
                      >
                        <span
                          style={{
                            width: 24,
                            height: 24,
                            borderRadius: 999,
                            background: "rgba(255,255,255,.08)",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Icon name={a.icon} size={12} color={accent} stroke={1.6} />
                        </span>
                        <span
                          style={{
                            fontSize: 13,
                            fontWeight: 700,
                          }}
                        >
                          {a.label}
                        </span>
                      </span>
                      <span
                        style={{
                          fontSize: 14,
                          fontWeight: 700,
                          fontVariantNumeric: "tabular-nums",
                        }}
                      >
                        {a.pct}%
                      </span>
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

              <button
                style={{
                  marginTop: 16,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  background: "transparent",
                  border: "none",
                  color: PF.white,
                  fontFamily: pfFont,
                  fontWeight: 700,
                  fontSize: 12,
                  cursor: "pointer",
                  padding: 0,
                  opacity: 0.85,
                }}
              >
                Details <Icon name="chevron" size={12} color={PF.white} stroke={1.8} />
              </button>
            </div>
          </div>
        </div>

        {/* Pagination dots */}
        <div
          style={{
            marginTop: 14,
            display: "flex",
            justifyContent: "center",
            gap: 6,
          }}
        >
          {[0, 1].map((i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`Page ${i + 1}`}
              style={{
                width: page === i ? 18 : 6,
                height: 6,
                borderRadius: 999,
                border: "none",
                padding: 0,
                background:
                  page === i ? "rgba(255,255,255,.95)" : "rgba(255,255,255,.30)",
                cursor: "pointer",
                transition: `width 280ms ${spring}, background 200ms ease`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Holdings — in-page list */}
      <div style={{ padding: "20px 16px 8px" }}>
        <span
          style={{
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: PF.fg3,
          }}
        >
          Holdings
        </span>
      </div>
      <div
        style={{
          margin: "0 16px",
          background: PF.white,
          borderRadius: 20,
          boxShadow: "0 1px 0 rgba(0, 75, 90, 0.06)",
          overflow: "hidden",
        }}
      >
        {portfolios.map((p, pi) => (
          <div
            key={pi}
            onClick={() => setActiveSection(pi)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "14px 16px",
              borderTop: pi === 0 ? "none" : `1px solid ${PF.divider}`,
              cursor: "pointer",
            }}
          >
            <SectionIcon kind={p.sectionIcon} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: PF.fg1,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.2,
                }}
              >
                {p.title}
              </div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 300,
                  color: PF.fg3,
                  marginTop: 2,
                }}
              >
                {p.count}
              </div>
            </div>
            <div style={{ textAlign: "right", flex: "0 0 auto", marginRight: 4 }}>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: PF.fg1,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                CHF {p.total}
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
                <span style={{ fontSize: 9 }}>▲</span> {p.ytdPct} YTD
              </div>
            </div>
            <Icon name="chevron" size={14} color={PF.fg4} stroke={1.8} />
          </div>
        ))}
      </div>

      {/* Trust card */}
      <div
        style={{
          margin: "12px 16px 16px",
          background: PF.white,
          borderRadius: 16,
          padding: "12px 14px",
          boxShadow: "0 1px 0 rgba(0, 75, 90, 0.06)",
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: 10,
            background: PF.petrol1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: "0 0 auto",
          }}
        >
          <Icon name="shield" size={16} color={PF.petrol9} stroke={1.8} />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: PF.fg1,
              lineHeight: 1.25,
            }}
          >
            Your assets are protected
          </div>
          <div
            style={{
              fontSize: 10,
              fontWeight: 300,
              color: PF.fg3,
              marginTop: 1,
            }}
          >
            Bank-level security &amp; Swiss regulation
          </div>
        </div>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 3,
            fontSize: 11,
            fontWeight: 700,
            color: PF.petrol9,
            flex: "0 0 auto",
          }}
        >
          Learn more <Icon name="chevron" size={11} color={PF.petrol9} stroke={1.8} />
        </span>
      </div>

      </div>

      {/* Backdrop when section tray is open */}
      <div
        onClick={() => setActiveSection(null)}
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,43,51,0.36)",
          opacity: isTrayOpen ? 1 : 0,
          pointerEvents: isTrayOpen ? "auto" : "none",
          transition: "opacity 320ms ease",
          zIndex: 8,
        }}
      />

      {/* Section detail tray (overview ↔ holding detail) */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "85%",
          transform: isTrayOpen ? "translateY(0)" : "translateY(100%)",
          transition: `transform 460ms ${spring}`,
          background: PF.white,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          boxShadow: "0 -12px 44px rgba(0, 75, 90, 0.18)",
          display: "flex",
          flexDirection: "column",
          zIndex: 10,
        }}
      >
        {/* Drag handle (always visible) */}
        <div
          onClick={() => {
            if (isDetailOpen) setActiveItem(null);
            else setActiveSection(null);
          }}
          style={{
            paddingTop: 8,
            paddingBottom: 6,
            display: "flex",
            justifyContent: "center",
            cursor: "pointer",
            flex: "0 0 auto",
          }}
        >
          <span
            style={{
              width: 36,
              height: 4,
              borderRadius: 999,
              background: PF.divider,
            }}
          />
        </div>

        {/* Slider track between overview and detail */}
        <div
          style={{
            flex: 1,
            minHeight: 0,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "200%",
              height: "100%",
              transform: `translateX(${isDetailOpen ? "-50%" : "0"})`,
              transition: `transform 420ms ${spring}`,
            }}
          >
            {/* ── Pane 1: Section overview ───────────────────────── */}
            <div
              style={{
                width: "50%",
                flex: "0 0 50%",
                display: "flex",
                flexDirection: "column",
                minHeight: 0,
              }}
            >
              {/* Header */}
              <div
                style={{
                  padding: "4px 20px 14px",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  flex: "0 0 auto",
                }}
              >
                {activePortfolio && <SectionIcon kind={activePortfolio.sectionIcon} />}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: 17,
                      fontWeight: 700,
                      letterSpacing: "-0.01em",
                      color: PF.fg1,
                      lineHeight: 1.2,
                    }}
                  >
                    {activePortfolio?.title ?? ""}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 300,
                      color: PF.fg3,
                      marginTop: 2,
                    }}
                  >
                    {activePortfolio?.count ?? ""}
                  </div>
                </div>
                <button
                  onClick={() => setActiveSection(null)}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: PF.petrol9,
                    fontFamily: pfFont,
                    fontWeight: 700,
                    fontSize: 13,
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  Done
                </button>
              </div>

              {/* Total + YTD strip */}
              {activePortfolio && (
                <div
                  style={{
                    margin: "0 20px 8px",
                    padding: "12px 14px",
                    borderRadius: 14,
                    background: PF.petrol1,
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    flex: "0 0 auto",
                  }}
                >
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontSize: 18,
                        fontWeight: 700,
                        color: PF.fg1,
                        letterSpacing: "-0.01em",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      CHF {activePortfolio.total}
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 300,
                        color: PF.fg3,
                        marginTop: 2,
                      }}
                    >
                      Total value
                    </div>
                  </div>
                  <div
                    style={{
                      width: 1,
                      alignSelf: "stretch",
                      background: "rgba(0,75,90,0.12)",
                    }}
                  />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: PF.green,
                        fontVariantNumeric: "tabular-nums",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 4,
                      }}
                    >
                      <span style={{ fontSize: 11 }}>▲</span> {activePortfolio.ytdPct}
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 300,
                        color: PF.fg3,
                        marginTop: 2,
                      }}
                    >
                      YTD
                    </div>
                  </div>
                </div>
              )}

              {/* Items list (scrollable) */}
              <div
                style={{
                  flex: 1,
                  minHeight: 0,
                  overflowY: "auto",
                  padding: "0 20px 24px",
                  WebkitOverflowScrolling: "touch",
                }}
              >
                {activePortfolio?.items.map((it, ii) => (
                  <div
                    key={ii}
                    onClick={() => setActiveItem(ii)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      padding: "14px 0",
                      borderTop: ii === 0 ? "none" : `1px solid ${PF.divider}`,
                      cursor: "pointer",
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
                          fontSize: 13,
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
                          fontVariantNumeric: "tabular-nums",
                        }}
                      >
                        ▲ {it.changePct} YTD
                      </div>
                    </div>
                    <Icon name="chevron" size={14} color={PF.fg4} stroke={1.8} />
                  </div>
                ))}
              </div>
            </div>

            {/* ── Pane 2: Holding detail ────────────────────────── */}
            <div
              style={{
                width: "50%",
                flex: "0 0 50%",
                display: "flex",
                flexDirection: "column",
                minHeight: 0,
              }}
            >
              {/* Back bar */}
              <div
                style={{
                  padding: "4px 12px 8px",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  flex: "0 0 auto",
                }}
              >
                <button
                  onClick={() => setActiveItem(null)}
                  aria-label="Back"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 2,
                    background: "transparent",
                    border: "none",
                    color: PF.petrol9,
                    fontFamily: pfFont,
                    fontWeight: 700,
                    fontSize: 14,
                    cursor: "pointer",
                    padding: "6px 8px",
                  }}
                >
                  <Icon name="chevron-left" size={18} color={PF.petrol9} stroke={2} />
                  {activePortfolio?.title.split(" ").slice(0, 2).join(" ") ?? "Back"}
                </button>
                <div style={{ flex: 1 }} />
                <button
                  aria-label="More"
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 999,
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: PF.petrol9,
                  }}
                >
                  <span style={{ fontSize: 20, lineHeight: 1, letterSpacing: 1 }}>···</span>
                </button>
              </div>

              {/* Scrollable detail body */}
              <div
                style={{
                  flex: 1,
                  minHeight: 0,
                  overflowY: "auto",
                  WebkitOverflowScrolling: "touch",
                  paddingBottom: 96,
                }}
              >
                {activeHolding && (
                  <>
                    {/* Title + pill */}
                    <div style={{ padding: "0 20px" }}>
                      <div
                        style={{
                          fontSize: 22,
                          fontWeight: 700,
                          letterSpacing: "-0.02em",
                          color: PF.fg1,
                          lineHeight: 1.15,
                        }}
                      >
                        {activeHolding.name}
                      </div>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          marginTop: 8,
                          padding: "3px 9px 3px 8px",
                          borderRadius: 999,
                          background: PF.petrol1,
                          color: PF.petrol9,
                          fontSize: 11,
                          fontWeight: 700,
                        }}
                      >
                        {activeHolding.pillDot && (
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
                        {activeHolding.pillLabel}
                      </span>
                    </div>

                    {/* Hero value */}
                    <div style={{ padding: "20px 20px 8px" }}>
                      <div
                        style={{
                          fontSize: 32,
                          fontWeight: 700,
                          letterSpacing: "-0.02em",
                          color: PF.fg1,
                          lineHeight: 1.05,
                          fontVariantNumeric: "tabular-nums",
                        }}
                      >
                        CHF {activeHolding.amount}
                      </div>
                      <div
                        style={{
                          marginTop: 6,
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 8,
                          fontSize: 13,
                          fontWeight: 700,
                          color: PF.green,
                          fontVariantNumeric: "tabular-nums",
                        }}
                      >
                        <span>▲ +CHF 147.78</span>
                        <span>{activeHolding.changePct}</span>
                        <span style={{ color: PF.fg3, fontWeight: 300 }}>
                          {period}
                        </span>
                      </div>
                    </div>

                    {/* Period selector */}
                    <div
                      style={{
                        margin: "12px 20px 0",
                        padding: 4,
                        background: PF.petrol1,
                        borderRadius: 999,
                        display: "flex",
                        gap: 2,
                      }}
                    >
                      {(["1W", "1M", "3M", "1Y", "ALL"] as const).map((p) => (
                        <button
                          key={p}
                          onClick={() => setPeriod(p)}
                          style={{
                            flex: 1,
                            padding: "7px 0",
                            borderRadius: 999,
                            background: period === p ? PF.white : "transparent",
                            color: period === p ? PF.petrol9 : PF.petrol7,
                            border: "none",
                            fontFamily: pfFont,
                            fontWeight: 700,
                            fontSize: 11,
                            cursor: "pointer",
                            boxShadow:
                              period === p ? "0 1px 2px rgba(0,75,90,.12)" : "none",
                            transition: "background 180ms ease",
                          }}
                        >
                          {p}
                        </button>
                      ))}
                    </div>

                    {/* Chart */}
                    <div
                      style={{
                        margin: "16px 20px 0",
                        height: 140,
                        position: "relative",
                      }}
                    >
                      <svg
                        viewBox="0 0 320 140"
                        preserveAspectRatio="none"
                        style={{ width: "100%", height: "100%", display: "block" }}
                      >
                        <defs>
                          <linearGradient id="pf-area" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor={PF.green} stopOpacity={0.18} />
                            <stop offset="100%" stopColor={PF.green} stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <path
                          d="M0 110 L24 102 L48 108 L72 92 L96 96 L120 78 L144 86 L168 70 L192 76 L216 58 L240 64 L264 44 L288 50 L312 28 L320 24 L320 140 L0 140 Z"
                          fill="url(#pf-area)"
                        />
                        <path
                          d="M0 110 L24 102 L48 108 L72 92 L96 96 L120 78 L144 86 L168 70 L192 76 L216 58 L240 64 L264 44 L288 50 L312 28 L320 24"
                          stroke={PF.green}
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        />
                        <circle cx={320} cy={24} r={3.4} fill={PF.green} />
                      </svg>
                    </div>

                    {/* Stats grid */}
                    <div
                      style={{
                        margin: "20px 20px 0",
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 1,
                        background: PF.divider,
                        borderRadius: 14,
                        overflow: "hidden",
                      }}
                    >
                      {[
                        { k: "Cost basis", v: "CHF 1'182.22" },
                        { k: "Total gain", v: "+CHF 147.78", color: PF.green },
                        { k: "Avg price", v: "CHF 142.30" },
                        { k: "Last update", v: "Today · 17:30" },
                      ].map((s) => (
                        <div
                          key={s.k}
                          style={{
                            background: PF.white,
                            padding: "14px 14px",
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                          }}
                        >
                          <span
                            style={{
                              fontSize: 11,
                              fontWeight: 300,
                              color: PF.fg3,
                            }}
                          >
                            {s.k}
                          </span>
                          <span
                            style={{
                              fontSize: 14,
                              fontWeight: 700,
                              color: s.color ?? PF.fg1,
                              fontVariantNumeric: "tabular-nums",
                              letterSpacing: "-0.005em",
                            }}
                          >
                            {s.v}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* About card */}
                    <div
                      style={{
                        margin: "20px 20px 0",
                        background: PF.white,
                        border: `1px solid ${PF.divider}`,
                        borderRadius: 16,
                        padding: 16,
                      }}
                    >
                      <div
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          color: PF.fg3,
                        }}
                      >
                        About
                      </div>
                      <p
                        style={{
                          margin: "8px 0 0",
                          fontSize: 13,
                          fontWeight: 300,
                          lineHeight: 1.5,
                          color: PF.fg2,
                        }}
                      >
                        A diversified position tracking the underlying benchmark.
                        Invests broadly across listed Swiss large- and mid-cap
                        equities with passive cost discipline.
                      </p>
                      <div
                        style={{
                          marginTop: 14,
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          rowGap: 10,
                          columnGap: 12,
                        }}
                      >
                        {[
                          { k: "ISIN", v: "CH0123456789" },
                          { k: "Asset class", v: "Equity" },
                          { k: "Currency", v: "CHF" },
                          { k: "Domicile", v: "Switzerland" },
                          { k: "Risk score", v: "4 / 7" },
                          { k: "TER", v: "0.18%" },
                        ].map((r) => (
                          <div key={r.k}>
                            <div style={{ fontSize: 11, color: PF.fg3, fontWeight: 300 }}>
                              {r.k}
                            </div>
                            <div
                              style={{
                                fontSize: 13,
                                fontWeight: 700,
                                color: PF.fg1,
                                marginTop: 1,
                                fontVariantNumeric: "tabular-nums",
                              }}
                            >
                              {r.v}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Sticky bottom CTA */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  padding: "12px 20px 36px",
                  background:
                    "linear-gradient(to top, rgba(255,255,255,1) 70%, rgba(255,255,255,0))",
                  display: "flex",
                  gap: 8,
                }}
              >
                <button
                  style={{
                    flex: 1,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 6,
                    background: PF.gelb,
                    color: PF.petrol11,
                    border: "none",
                    borderRadius: 999,
                    padding: "13px 16px",
                    fontFamily: pfFont,
                    fontWeight: 700,
                    fontSize: 14,
                    cursor: "pointer",
                  }}
                >
                  <Icon name="plus" size={16} color={PF.petrol11} stroke={2} /> Buy more
                </button>
                <button
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 6,
                    background: "transparent",
                    color: PF.petrol9,
                    border: `1px solid ${PF.divider}`,
                    borderRadius: 999,
                    padding: "13px 16px",
                    fontFamily: pfFont,
                    fontWeight: 700,
                    fontSize: 14,
                    cursor: "pointer",
                  }}
                >
                  Manage
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
