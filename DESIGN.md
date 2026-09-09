# Design Brief

## Direction

NJM Royal Precision — a premium luxury automotive dealership site in the style of Porsche, pairing deep royal navy surfaces with white type and sharp red accents.

## Tone

Refined, confident, editorial luxury — dark-first premium aesthetic where precision typography, generous whitespace, and layered surfaces convey automotive excellence.

## Differentiation

A dark royal-navy "showroom at night" atmosphere with red reserved strictly for CTAs and price tags, making every red element feel like a deliberate, high-value signal.

## Color Palette

| Token      | OKLCH        | Role                              |
| ---------- | ------------ | --------------------------------- |
| background | 0.14 0.022 262 | deep royal navy-black surface   |
| foreground | 0.95 0.01 260 | white primary text              |
| card       | 0.185 0.024 262 | elevated vehicle card surface  |
| primary    | 0.5 0.16 262 | royal blue brand (buttons/links) |
| accent     | 0.6 0.2 25  | red — CTAs and price badges      |
| muted      | 0.22 0.022 262 | secondary surfaces              |
| destructive| 0.6 0.2 25  | red destructive/emphasis         |

Light mode mirrors the same hue story on white surfaces (background 0.985, primary 0.33 royal blue).

## Typography

- Display: Space Grotesk — headings, hero, section titles, prices (technical-geometric automotive precision)
- Body: General Sans — paragraphs, UI labels, navigation
- Scale: hero `text-5xl md:text-7xl font-bold tracking-tight`, h2 `text-3xl md:text-5xl font-bold tracking-tight`, label `text-sm font-semibold tracking-widest uppercase`, body `text-base lg:text-lg`

## Elevation & Depth

Layered surfaces (card over background) with thin borders and `shadow-elevated` on hover; no neon glows — depth comes from surface contrast and restrained elevation.

## Structural Zones

| Zone    | Background  | Border   | Notes                              |
| ------- | ----------- | -------- | ---------------------------------- |
| Header  | bg-background/90 blur | border-b | sticky, transparent-to-solid on scroll |
| Content | bg-background | —       | alternate `bg-muted/40` for feature sections |
| Footer  | bg-muted/40 | border-t | contact info, hours, address band  |

## Spacing & Rhythm

Section gaps `py-20 md:py-28`; cards grouped in a 3-column grid collapsing to 1 on mobile; micro-spacing `gap-4`/`gap-6` for consistent rhythm.

## Component Patterns

- Buttons: royal blue primary `rounded-sm`, red accent for key CTAs, `transition-smooth` hover lift
- Cards: `rounded-sm`, `bg-card` with `border-border`, `shadow-subtle` resting / `shadow-elevated` hover
- Badges: red `rounded-sm` price tags with white `font-display` text; thin blue-bordered spec chips

## Motion

- Entrance: `animate-fade-up` staggered on hero and card reveals
- Hover: `transition-smooth` on buttons/cards — subtle translate + shadow elevation
- Decorative: none — motion is restrained to preserve the premium feel

## Constraints

- Token-only styling — no raw hex/rgb color literals in components
- Red used sparingly (CTAs, prices, emphasis) to preserve its signal value
- Currency displayed as `TT$` throughout
- AA+ contrast in both light and dark modes

## Signature Detail

Red price badges on deep royal-navy cards — the single high-contrast signal that makes every inventory card feel like a premium offer.
