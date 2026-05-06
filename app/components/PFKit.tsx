"use client";

import * as React from "react";
import Icon from "./Icon";
import { PF, pfFont, pfMono } from "../lib/pf";

/* ─── Button ─────────────────────────────────────────────────────── */
type BtnKind = "primary" | "secondary" | "accent" | "ghost";

export function PFButton({
  kind = "primary",
  children,
  onClick,
  fullWidth,
  style,
  leadingIcon,
}: {
  kind?: BtnKind;
  children: React.ReactNode;
  onClick?: () => void;
  fullWidth?: boolean;
  style?: React.CSSProperties;
  leadingIcon?: string;
}) {
  const variants: Record<BtnKind, React.CSSProperties> = {
    primary: { background: PF.petrol9, color: PF.white },
    secondary: {
      background: PF.white,
      color: PF.petrol9,
      borderColor: PF.petrol9,
    },
    accent: { background: PF.gelb, color: PF.petrol11 },
    ghost: { background: "transparent", color: PF.petrol9 },
  };
  return (
    <button
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        padding: "14px 28px",
        borderRadius: 100,
        fontFamily: pfFont,
        fontWeight: 700,
        fontSize: 16,
        border: "1.5px solid transparent",
        cursor: "pointer",
        lineHeight: 1,
        width: fullWidth ? "100%" : "auto",
        ...variants[kind],
        ...style,
      }}
    >
      {leadingIcon && <Icon name={leadingIcon} size={18} />}
      {children}
    </button>
  );
}

/* ─── Header ─────────────────────────────────────────────────────── */
export function PFHeader({
  title,
  trailing,
  large,
}: {
  title: string;
  trailing?: React.ReactNode;
  large?: boolean;
}) {
  return (
    <div
      style={{
        padding: large ? "8px 20px 16px" : "10px 20px 12px",
        display: "flex",
        alignItems: large ? "flex-end" : "center",
        justifyContent: "space-between",
        minHeight: large ? 96 : 52,
        background: "transparent",
      }}
    >
      <span
        style={{
          fontFamily: pfFont,
          fontWeight: 700,
          fontSize: large ? 32 : 18,
          color: PF.fg1,
          letterSpacing: "-0.01em",
        }}
      >
        {title}
      </span>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        {trailing}
      </div>
    </div>
  );
}

/* ─── Account Card (petrol hero) ─────────────────────────────────── */
export function PFAccountCard({
  label,
  balance,
  currency = "CHF",
  accountNo,
}: {
  label: string;
  balance: string;
  currency?: string;
  accountNo: string;
}) {
  return (
    <div
      className="pf-petrol-card"
      style={{
        background: PF.petrol9,
        color: PF.white,
        borderRadius: 20,
        padding: 20,
        margin: "0 20px",
        minHeight: 184,
        boxShadow: "var(--pf-shadow-petrol)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: 16,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div>
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              opacity: 0.7,
            }}
          >
            {label}
          </div>
          <div
            style={{
              fontSize: 12,
              opacity: 0.6,
              marginTop: 4,
              fontFamily: pfMono,
            }}
          >
            {accountNo}
          </div>
        </div>
        <Icon name="eye" size={20} color="rgba(255,255,255,.7)" />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: 6,
        }}
      >
        <span style={{ fontSize: 13, fontWeight: 300, opacity: 0.7 }}>
          {currency}
        </span>
        <span
          style={{
            fontSize: 36,
            fontWeight: 700,
            letterSpacing: "-0.01em",
          }}
        >
          {balance}
        </span>
      </div>
    </div>
  );
}

/* ─── Quick Actions ──────────────────────────────────────────────── */
export function PFQuickActions({
  items,
}: {
  items: { id: string; icon: string; label: string }[];
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${items.length}, 1fr)`,
        gap: 8,
        padding: 20,
      }}
    >
      {items.map((it) => (
        <button
          key={it.id}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            padding: "8px 4px",
            fontFamily: pfFont,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 20,
              background: PF.petrol1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon name={it.icon} size={24} color={PF.petrol9} />
          </div>
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: PF.fg1,
              textAlign: "center",
              lineHeight: 1.2,
            }}
          >
            {it.label}
          </span>
        </button>
      ))}
    </div>
  );
}

/* ─── Tx Row ─────────────────────────────────────────────────────── */
export function PFTxRow({
  icon,
  name,
  meta,
  amount,
  sign = "−",
  currency = "CHF",
}: {
  icon: string;
  name: string;
  meta: string;
  amount: string;
  sign?: "+" | "−";
  currency?: string;
}) {
  const positive = sign === "+";
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "14px 20px",
        borderBottom: `1px solid ${PF.divider}`,
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 999,
          background: PF.petrol1,
          flex: "0 0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon name={icon} size={20} color={PF.petrol9} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontSize: 15,
            fontWeight: 700,
            color: PF.fg1,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {name}
        </div>
        <div
          style={{
            fontSize: 12,
            fontWeight: 300,
            color: PF.fg3,
            marginTop: 2,
          }}
        >
          {meta}
        </div>
      </div>
      <div style={{ textAlign: "right" }}>
        <div
          style={{
            fontSize: 15,
            fontWeight: 700,
            color: positive ? PF.green : PF.fg1,
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {sign} {currency} {amount}
        </div>
      </div>
    </div>
  );
}

/* ─── Section Heading ────────────────────────────────────────────── */
export function PFSectionHead({
  title,
  action,
}: {
  title: string;
  action?: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 20px 8px",
      }}
    >
      <h3
        style={{
          margin: 0,
          fontSize: 18,
          fontWeight: 700,
          color: PF.fg1,
        }}
      >
        {title}
      </h3>
      {action && (
        <button
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: pfFont,
            fontSize: 14,
            fontWeight: 700,
            color: PF.petrol9,
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}
        >
          {action} <Icon name="chevron" size={14} />
        </button>
      )}
    </div>
  );
}

/* ─── List Row (settings-style) ──────────────────────────────────── */
export function PFListRow({
  icon,
  label,
  meta,
}: {
  icon: string;
  label: string;
  meta?: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "16px 20px",
        borderBottom: `1px solid ${PF.divider}`,
        background: PF.white,
      }}
    >
      <Icon name={icon} size={22} color={PF.petrol9} />
      <div
        style={{
          flex: 1,
          fontSize: 15,
          color: PF.fg1,
          fontWeight: 300,
        }}
      >
        {label}
      </div>
      {meta && (
        <span style={{ fontSize: 13, color: PF.fg3 }}>{meta}</span>
      )}
      <Icon name="chevron" size={16} color={PF.fg4} />
    </div>
  );
}

/* ─── Tab Bar ────────────────────────────────────────────────────── */
export type TabKey =
  | "home"
  | "pay"
  | "invest"
  | "offers"
  | "services";

export function PFTabBar({ active }: { active: TabKey }) {
  const tabs: { id: TabKey; label: string; icon: string }[] = [
    { id: "home", label: "Home", icon: "home" },
    { id: "pay", label: "Payments", icon: "send" },
    { id: "invest", label: "Invest", icon: "trending-up" },
    { id: "offers", label: "Offers", icon: "tag" },
    { id: "services", label: "Services", icon: "menu" },
  ];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "8px 8px 24px",
        background: PF.white,
        borderTop: `1px solid ${PF.divider}`,
      }}
    >
      {tabs.map((t) => {
        const on = t.id === active;
        return (
          <div
            key={t.id}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 3,
              padding: "6px 0",
              fontFamily: pfFont,
            }}
          >
            <Icon
              name={t.icon}
              size={24}
              color={on ? PF.petrol9 : PF.fg4}
              stroke={on ? 1.8 : 1.5}
            />
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                color: on ? PF.petrol9 : PF.fg4,
              }}
            >
              {t.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

/* ─── Screen shell ───────────────────────────────────────────────── */
export function PFScreen({
  children,
  bg = PF.white,
}: {
  children: React.ReactNode;
  bg?: string;
}) {
  return (
    <div
      className="pf-screen"
      style={{
        flex: 1,
        background: bg,
        overflowY: "auto",
        overflowX: "hidden",
        fontFamily: pfFont,
        color: PF.fg1,
        fontWeight: 300,
        paddingTop: 44,
      }}
    >
      {children}
    </div>
  );
}
