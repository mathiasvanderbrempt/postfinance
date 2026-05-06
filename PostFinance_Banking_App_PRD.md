# PostFinance Banking App — Product Requirements Document

**Version:** 1.0  
**Date:** May 3, 2026  
**Author:** Mathias Van der Brempt  
**Status:** Design Phase

---

## 1. Product Vision

Redesign the PostFinance consumer banking app as a modern, native iOS experience that reflects Swiss precision — clean, confident, and effortless. The app serves as the primary touchpoint for PostFinance's 2.5M+ retail customers to manage their finances, make payments, and grow their wealth.

**Design North Star:** "Banking that feels like it was designed in Switzerland — precise, trustworthy, and beautifully simple."

---

## 2. Target Users

| Persona | Description | Primary Needs |
|---------|-------------|---------------|
| **Daily Banker** | 25–45, uses app 3–5x/week for payments and balance checks | Speed, quick payments, spending insights |
| **Wealth Builder** | 30–55, has investment products and savings goals | Portfolio overview, goal tracking, market data |
| **Family Manager** | 35–50, manages household finances and shared accounts | Multi-account overview, standing orders, budgeting |
| **Digital Native** | 18–30, mobile-first, expects modern UX | Card controls, P2P payments, biometric everything |

---

## 3. Feature Inventory

### 3.1 Onboarding & Authentication

- **Biometric login** — Face ID / Touch ID as primary, PIN fallback
- **First-time setup wizard** — account linking, notification preferences, quick tour
- **Device registration** — secure device binding with push-based 2FA
- **Language selection** — DE / FR / IT / EN (Swiss quadrilingual)

### 3.2 Home / Dashboard

- **Account summary cards** — scrollable cards showing each account with balance, account type icon, and mini sparkline
- **Quick actions bar** — Pay, Scan QR, Request, Top Up (4 primary actions)
- **Recent transactions** — last 5 transactions with merchant logos, categorization badges
- **Spending pulse** — weekly spending ring chart vs. personal average
- **Notification banner** — actionable alerts (pending approvals, upcoming bills)

### 3.3 Accounts

- **Account list** — Private, Savings, E-Finance, Youth accounts
- **Account detail** — full transaction history with search, filters (date range, amount, category, in/out)
- **Transaction detail** — merchant info, category, receipt attachment, notes, split option
- **Statements** — monthly PDF statements, downloadable
- **Account settings** — rename, set default, manage linked cards

### 3.4 Payments & Transfers

- **QR-Bill scanning** — camera-based Swiss QR-bill reader with auto-fill
- **Manual payment** — IBAN entry with bank name auto-resolve, amount, reference, scheduling
- **TWINT integration** — in-app TWINT P2P payments
- **Standing orders** — create, edit, pause, delete recurring payments
- **Payment templates** — save frequent recipients as templates
- **Domestic transfer** — between own PostFinance accounts (instant)
- **International transfer** — SWIFT/SEPA with fee preview and exchange rate
- **Approval flow** — pending payments requiring confirmation (above threshold)
- **Payment history** — searchable log with status tracking (pending, completed, failed)

### 3.5 Cards

- **Card overview** — physical and virtual cards with card art
- **Card controls** — freeze/unfreeze, contactless toggle, online payments toggle, ATM withdrawal toggle
- **Spending limits** — daily/monthly limits with adjustable sliders
- **PIN management** — view PIN (authenticated), change PIN
- **Apple Pay / Google Pay** — provisioning flow
- **Card detail** — card number (masked, reveal on auth), expiry, CVV
- **Order new card** — replacement or additional card flow
- **Transaction disputes** — flag and report unauthorized transactions

### 3.6 Investments & Wealth

- **Portfolio overview** — total value, allocation donut chart, performance graph (1D/1W/1M/3M/1Y/ALL)
- **Fund products** — PostFinance fund catalog with risk ratings, past performance, fees
- **Savings goals** — create named goals with target amount, deadline, auto-contribution
- **Goal detail** — progress ring, projected completion, contribution history
- **Buy/Sell flow** — select fund → amount → review → confirm → receipt
- **Market data** — key indices (SMI, SPI, DAX), currency rates (EUR/CHF, USD/CHF)
- **Documents** — annual statements, tax documents, fund factsheets

### 3.7 Profile & Settings

- **Personal info** — name, address, contact details (read-only, link to update)
- **Security** — biometric settings, PIN change, active sessions, 2FA management
- **Notifications** — push notification preferences by category
- **Appearance** — light/dark mode, app icon selection
- **Language** — switch app language
- **Support** — in-app chat, FAQ, branch finder, callback request
- **Legal** — terms, privacy policy, licenses
- **About** — app version, rate app, share app

### 3.8 Notifications & Alerts

- **Transaction alerts** — real-time push for debits above threshold
- **Balance alerts** — low balance warning
- **Bill reminders** — upcoming standing order notifications
- **Security alerts** — new device login, card used abroad
- **Marketing** — product offers (opt-in)

---

## 4. Screen Inventory (Design Deliverables)

| # | Screen | Flow | Priority |
|---|--------|------|----------|
| 1 | Splash / Biometric Login | Auth | P0 |
| 2 | Home Dashboard | Core | P0 |
| 3 | Account List | Accounts | P0 |
| 4 | Account Detail + Transactions | Accounts | P0 |
| 5 | Transaction Detail | Accounts | P1 |
| 6 | QR-Bill Scanner | Payments | P0 |
| 7 | Payment Form (Manual) | Payments | P0 |
| 8 | Payment Review & Confirm | Payments | P0 |
| 9 | Payment Success | Payments | P0 |
| 10 | Standing Orders List | Payments | P1 |
| 11 | Card Overview | Cards | P0 |
| 12 | Card Detail + Controls | Cards | P0 |
| 13 | Portfolio Overview | Investments | P0 |
| 14 | Fund Detail | Investments | P1 |
| 15 | Savings Goal Detail | Investments | P1 |
| 16 | Buy Fund Flow | Investments | P1 |
| 17 | Profile & Settings | Settings | P0 |
| 18 | Notifications Center | Core | P1 |
| 19 | Search (Global) | Core | P1 |
| 20 | Support / Help | Settings | P2 |

---

## 5. Native Interaction Patterns

### iOS-First Design Decisions

- **Tab bar** — 5 tabs: Home, Accounts, Pay, Invest, More
- **Large title navigation** — collapsing large titles on scroll per Apple HIG
- **Haptic feedback** — success (payment confirmed), warning (freeze card), selection (amount picker)
- **Pull-to-refresh** — all list views
- **Swipe actions** — swipe-to-pay on templates, swipe-to-archive on notifications
- **Long press** — context menus on accounts, cards, transactions
- **Bottom sheets** — filters, confirmations, quick actions (not full-screen modals)
- **Smooth transitions** — shared element transitions between list → detail
- **Dynamic Island** — payment progress, transfer status
- **Widgets** — balance widget, quick pay widget (iOS home screen)

### Micro-interactions

- Balance reveal animation (count-up on load)
- Card flip animation (front ↔ back)
- Payment success confetti / checkmark morph
- Spending ring fill animation
- Goal progress celebration at milestones (25%, 50%, 75%, 100%)

---

## 6. Information Architecture

```
Tab Bar
├── Home
│   ├── Account Summary Cards
│   ├── Quick Actions (Pay, Scan, Request, Top Up)
│   ├── Recent Transactions
│   └── Spending Pulse
├── Accounts
│   ├── Account List
│   └── Account Detail
│       ├── Transaction History
│       └── Transaction Detail
├── Pay
│   ├── QR Scanner
│   ├── Manual Payment
│   ├── Templates
│   ├── Standing Orders
│   └── Payment History
├── Invest
│   ├── Portfolio Overview
│   ├── Fund Catalog
│   ├── Savings Goals
│   └── Market Data
└── More
    ├── Cards
    ├── Profile
    ├── Settings
    ├── Notifications
    ├── Support
    └── Legal
```

---

## 7. Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| App Store Rating | ≥ 4.6 | Quarterly |
| Task Completion (Payment) | < 30s | Analytics |
| Daily Active Users | +20% YoY | Analytics |
| Biometric Login Rate | > 85% | Analytics |
| Feature Adoption (Investments) | > 15% of MAU | Quarterly |
| Customer Support Tickets | -30% | Quarterly |
| Crash-free Sessions | > 99.9% | Real-time |

---

## 8. Technical Constraints

- iOS 16+ minimum deployment target
- Swift UI preferred, UIKit where needed for complex animations
- Offline mode for balance viewing and recent transactions
- Accessibility: WCAG 2.1 AA, VoiceOver fully supported
- Localization: 4 languages (DE, FR, IT, EN)
- Biometric authentication via LocalAuthentication framework
- Push notifications via APNs
- QR scanning via AVFoundation
