# PostFinance Design System — Style Guide

**For use with Claude Design / Magic Patterns**

---

## Brand Identity

PostFinance is Switzerland's leading retail financial institution. The brand communicates **trust, clarity, and Swiss precision** through a clean, modern visual language with bold yellow as its signature color.

---

## Color System

### Primary Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `yellow-500` (Brand) | `#FFCC00` | Primary CTAs, brand moments, active states |
| `yellow-400` | `#FFD633` | Hover states, highlights |
| `yellow-600` | `#E6B800` | Pressed states |
| `black-900` | `#1A1A1A` | Primary text, headers |
| `white` | `#FFFFFF` | Backgrounds, card surfaces |

### Secondary Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `gray-50` | `#F8F8F8` | Page background |
| `gray-100` | `#F0F0F0` | Card backgrounds, dividers |
| `gray-200` | `#E0E0E0` | Borders, inactive elements |
| `gray-400` | `#999999` | Secondary text, placeholders |
| `gray-600` | `#666666` | Tertiary text |
| `gray-800` | `#333333` | Secondary headers |

### Semantic Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `success` | `#00B67A` | Positive values, confirmations, income |
| `error` | `#E53935` | Errors, negative values, alerts |
| `warning` | `#FF9800` | Warnings, pending states |
| `info` | `#2196F3` | Information, links |

### Dark Mode Adaptations

| Element | Light | Dark |
|---------|-------|------|
| Background | `#FFFFFF` | `#121212` |
| Surface | `#F8F8F8` | `#1E1E1E` |
| Card | `#FFFFFF` | `#2A2A2A` |
| Primary text | `#1A1A1A` | `#F0F0F0` |
| Yellow CTA | `#FFCC00` | `#FFCC00` (unchanged) |

---

## Typography

### Font Stack

- **Primary:** SF Pro Display (iOS system font)
- **Monospace:** SF Mono (for amounts, account numbers)

### Type Scale

| Style | Weight | Size | Line Height | Usage |
|-------|--------|------|-------------|-------|
| Display | Bold | 34px | 41px | Screen titles (large navigation) |
| H1 | Bold | 28px | 34px | Section headers |
| H2 | Semibold | 22px | 28px | Card titles |
| H3 | Semibold | 18px | 24px | Subsection headers |
| Body | Regular | 16px | 22px | Default body text |
| Body Small | Regular | 14px | 20px | Secondary info, descriptions |
| Caption | Regular | 12px | 16px | Labels, timestamps, metadata |
| Amount Large | Bold (Mono) | 34px | 41px | Primary balance display |
| Amount Medium | Semibold (Mono) | 22px | 28px | Transaction amounts |
| Amount Small | Medium (Mono) | 16px | 22px | Secondary amounts |

---

## Spacing & Layout

### Grid

- **Screen width:** 390px (iPhone 15 Pro reference)
- **Horizontal padding:** 20px (screen edges)
- **Card padding:** 16px internal
- **Section gap:** 24px between content sections
- **Item gap:** 12px between list items

### Spacing Scale (8px base)

| Token | Value |
|-------|-------|
| `xs` | 4px |
| `sm` | 8px |
| `md` | 12px |
| `lg` | 16px |
| `xl` | 20px |
| `2xl` | 24px |
| `3xl` | 32px |
| `4xl` | 40px |

---

## Components

### Cards

```
Background: white (light) / #2A2A2A (dark)
Corner radius: 16px
Shadow: 0 2px 8px rgba(0,0,0,0.06)
Padding: 16px
Border: none (rely on shadow for elevation)
```

### Buttons

#### Primary (Yellow CTA)
```
Background: #FFCC00
Text: #1A1A1A (black)
Font: SF Pro Display Semibold, 16px
Height: 52px
Corner radius: 14px
Full width in forms, auto-width in cards
Pressed: #E6B800
Disabled: opacity 0.4
```

#### Secondary (Outline)
```
Background: transparent
Border: 1.5px solid #E0E0E0
Text: #1A1A1A
Height: 52px
Corner radius: 14px
```

#### Tertiary (Text)
```
Background: transparent
Text: #FFCC00 or #1A1A1A
No border
Used for cancel actions, links
```

#### Destructive
```
Background: #E53935
Text: white
Height: 52px
Corner radius: 14px
```

### Input Fields

```
Background: #F8F8F8
Border: 1.5px solid transparent → #FFCC00 on focus
Corner radius: 12px
Height: 52px
Padding: 0 16px
Label: Caption style, positioned above
Error state: border #E53935, helper text in error color
```

### Tab Bar

```
Background: white with blur (vibrancy)
Height: 83px (including safe area)
Icons: 24x24, SF Symbols
Active: #FFCC00 icon + label
Inactive: #999999 icon + label
5 tabs: Home, Accounts, Pay, Invest, More
```

### Navigation Bar

```
Large title style (iOS native)
Background: transparent → white on scroll
Title: Display style on expand, H3 on collapse
Right actions: icon buttons (bell, search)
```

### Bottom Sheets

```
Background: white
Corner radius: 20px (top)
Handle: 36x5px, gray-200, centered, 8px from top
Detents: .medium (half), .large (full)
Dim background: rgba(0,0,0,0.3)
```

### Transaction Row

```
Layout: Icon (40x40) | Title + Subtitle | Amount
Icon: merchant logo or category icon in 40x40 circle
Title: Body weight, primary text color
Subtitle: Caption, gray-400
Amount: Amount Medium, right-aligned
  Positive: success green with + prefix
  Negative: primary text color with - prefix
Divider: 1px gray-100, inset from left (72px)
Row height: 72px
Swipe actions: right-to-left for quick actions
```

### Account Card (Dashboard)

```
Size: full width, 120px height
Background: white card
Layout:
  Top: Account name (Body) + Type badge (Caption, gray bg)
  Bottom-left: Balance (Amount Large)
  Bottom-right: Mini sparkline (60x30px, yellow stroke)
Corner radius: 16px
Horizontal scroll in carousel
```

---

## Iconography

- **Style:** SF Symbols (iOS native), weight: medium
- **Size:** 24x24 for navigation, 20x20 for inline, 40x40 for feature icons
- **Color:** follows text color hierarchy; active = yellow-500

### Key Icons

| Function | SF Symbol |
|----------|-----------|
| Home | `house.fill` |
| Accounts | `creditcard.fill` |
| Pay | `arrow.up.right` |
| Invest | `chart.line.uptrend.xyaxis` |
| More | `ellipsis` |
| QR Scan | `qrcode.viewfinder` |
| Transfer | `arrow.left.arrow.right` |
| Settings | `gearshape` |
| Notifications | `bell` |
| Search | `magnifyingglass` |
| Card Freeze | `snowflake` |
| Biometric | `faceid` |

---

## Motion & Animation

| Pattern | Duration | Easing |
|---------|----------|--------|
| Screen transition | 350ms | ease-in-out |
| Bottom sheet | 300ms | spring (damping: 0.85) |
| Card press | 100ms | ease-out (scale: 0.98) |
| Balance count-up | 600ms | ease-out |
| Success checkmark | 400ms | spring |
| Pull-to-refresh | 300ms | ease-in-out |
| Skeleton shimmer | 1.5s loop | linear |

---

## Design Principles

1. **Clarity first** — Every screen should be scannable in 2 seconds. Use hierarchy, whitespace, and contrast.
2. **Swiss precision** — Pixel-perfect alignment. Consistent spacing. No sloppy margins.
3. **Native confidence** — Use iOS patterns (large titles, sheets, haptics). Don't reinvent navigation.
4. **Yellow with restraint** — Brand yellow is powerful. Use it for primary CTAs and active states only. Never as backgrounds.
5. **Typography-driven** — Let type hierarchy do the work. Minimize decorative elements.
6. **Accessible by default** — 4.5:1 contrast ratios. Touch targets ≥ 44px. VoiceOver labels on everything.

---

## Claude Design Prompt Template

Use this prompt structure when generating screens:

```
Design a [SCREEN NAME] for the PostFinance Swiss banking app (iOS).

BRAND: PostFinance yellow (#FFCC00) as accent, white/light gray backgrounds, 
black text, SF Pro Display font. Clean, minimal, Swiss design aesthetic.

LAYOUT: iPhone 15 Pro (390x844). Native iOS patterns — large title navigation, 
tab bar (Home/Accounts/Pay/Invest/More), bottom sheets for modals.

STYLE: 
- Cards with 16px radius, subtle shadow
- 52px height buttons with 14px radius
- Yellow primary CTAs with black text
- Success green (#00B67A), Error red (#E53935)
- 20px screen padding, 8px spacing scale
- SF Mono for monetary amounts

SPECIFIC REQUIREMENTS: [describe screen content and interactions]

NATIVE PATTERNS: [list iOS patterns used — swipe actions, long press, sheets, etc.]
```
