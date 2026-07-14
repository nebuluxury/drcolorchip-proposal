# Nēbu Design System

**Nēbu — Luxury Scent Nebulizers.** Nēbu (pronounced *NEH-boo*, styled **Nēbu**) is a
direct-to-consumer luxury fragrance house. It sells **cold-air nebulizing diffusers**
(the NL50 / NL200 / NL300 hardware line) and a library of **fragrance oils** organized
into eight *scent families* — many "inspired by" grand hotels and designer houses
(Santal 33, Acqua di Gio, the Four Seasons, the Burj Al Arab…). The storefront lives at
**nebuluxury.com** on Shopify.

The brand voice is hushed, warm and second-person; the look is **deep wine + gold on
warm white**, set in **Manrope** at light weights with the brand's signature
gold-rule eyebrow above every headline.

---

## Sources this system was built from

- **Logo & graphics** — local folder `Logo : Graphics/` (wordmark lockups + the eight
  scent-family icons8 line icons). Copied into `assets/`.
- **Live Shopify theme** — GitHub `nebuluxury/nebu-theme` (private).
  Authoritative for color, type, copy and layout. Explore further:
  <https://github.com/nebuluxury/nebu-theme> — esp. `sections/slideshow-1.liquid` and
  `sections/compare-diffusers-section.liquid` (the 2026 redesign that fixes the palette
  and type below). Other Nēbu repos seen: `nebu-customer-map`, `nebu-halo-digest`,
  `nebu-labels`, `nebuluxury-daily-ad-report`, `shoreline-cabanas-preview`.
- **Brand drive** — `3. BRANDING NEBU`
  (<https://drive.google.com/drive/folders/1Y52nSyRyrvPGF6V2638q57E96Bki45Hr>) — **could
  not be accessed** (sign-in required). If you want assets from here incorporated, drop
  them into the mounted folder or share individual files.

---

## CONTENT FUNDAMENTALS — how Nēbu writes

- **Person & tone.** Second person, warm and unhurried. The brand *invites*, never
  pressures: "Not sure where to start?", "Let our concierge match you to your perfect
  scent", "We promise we won't write often — only for the fun stuff."
- **Casing.** Sentence case in body and headlines. **UPPERCASE is reserved** for
  eyebrows, nav, buttons and tiny labels — always with wide letter-spacing.
- **Emphasis.** A single key phrase per headline is set in **gold italic** ("Buy 2 Get 1
  Free / *All Fragrances.*", "Shop by *scent family*").
- **Numbers & offers.** Concrete and plain: "Special Price $115", "30% OFF", "Free
  shipping over $150", "60-day returns". Discount as a small black `% OFF` chip.
- **Vocabulary.** *Scent families* (Hotel, Designer, Diva, Dream Garden, Forest, Fruits
  of Paradise, Spa Retreat, Odor Neutralizers); *nebulizer / diffuser*; *fragrance oil*;
  *top note*; *inspired by*; *concierge*; *signature scent*.
- **No emoji.** Ever. Restraint is the brand.

## VISUAL FOUNDATIONS

- **Color.** Anchor is **wine `#78000b`** (logo, buttons, footer, dark bands), deepening
  to `#4e0314` on hover. **Gold `#b7813b`** is the accent — rule lines, active dots,
  star ratings — with **soft gold `#f5d8a0`** for italic emphasis on dark and **amber
  `#e09938`** for sale/cart. Surfaces are warm: white, **cream `#f4f1eb`** for alternating
  sections, **blush `#fff7f7`** for faint wine-tinted panels. Body text is warm near-black
  **espresso `#262613`**; headings near-black `#030303`. A heritage **rust `#782c02`**
  survives from the legacy theme as a secondary warm tone.
- **Type.** **Manrope** throughout — light (300) for display & H2, regular (400) for body,
  medium/semibold for labels, bold (700) for buttons. Tight tracking on big light type
  (`-0.02em`); very wide tracking on uppercase (eyebrow `0.28em`, button `0.18em`, nav
  `0.12em`). **Frank Ruhl Libre** is the editorial serif for pull-quotes and long-form.
- **The eyebrow motif.** The signature device: a wide-tracked uppercase kicker flanked by
  two 40px gold rule lines, centered above headlines. Use it constantly.
- **Backgrounds & imagery.** Full-bleed photography in heroes under a wine-to-black
  gradient overlay (radial + linear, ~45% darkness); slow Ken-Burns scale-in on the
  active slide. Imagery is warm and editorial. Alternating section backgrounds: white →
  cream → wine band → white.
- **Motion.** Slow and refined. Easing `cubic-bezier(0.4,0,0.2,1)`; hero crossfades over
  1.1s; staggered `opacity + translateY` entrances; image zoom over 7s. No bounce.
- **Hover / press.** Buttons darken to wine-dark and **lift 2px**; arrows slide +4px;
  product cards lift 3px with a soft wine-tinted shadow and the image zooms 4%; the
  "Add to cart" reveals from the image bottom. Links warm to champagne.
- **Borders, radii, shadows.** Hairline `#ececec` borders. **Small radii** — 3px buttons
  & badges, 6px tiles, 12px cards/dialogs, pill for chips & dots. Shadows are soft and
  **wine-tinted** (`0 10px 30px rgba(78,3,20,.07)`), never heavy. Focus = soft gold ring.
- **Layout.** 1440px max container, 24px gutter, generous 64–80px section padding,
  centered section headers max ~720px wide. Sticky header (72px) gains a shadow on scroll.

## ICONOGRAPHY

- **Scent-family icons** are the brand's distinctive icon set: eight **icons8 line/flat
  PNG icons** in `assets/icons/` — `hotel` (Hotel), `champagne` (Designer), `bow-tie`
  (Diva), `flower-bouquet` (Dream Garden), `grass` (Forest), `pomegranate` (Fruits of
  Paradise), `stones` (Spa Retreat), `wind` (Odor Neutralizers). Presented inside a soft
  cream/champagne circle. Use these PNGs — do not redraw them.
- **UI glyphs** (search, account, bag, arrows, close) are simple inline SVG strokes at
  ~1.5px weight in `currentColor`, matching the thin, restrained line style. For any
  glyph not in the brand set, substitute a matching **1.5px stroke** line icon
  (Lucide/Feather are good matches) — flag the substitution.
- **No emoji**, no unicode-as-icon.

---

## Index / manifest

- `styles.css` — global entry (import this one file). Imports:
  - `tokens/fonts.css` — Manrope + Frank Ruhl Libre (Google Fonts CDN)
  - `tokens/colors.css` — base + semantic color tokens
  - `tokens/typography.css` — families, weights, scale, tracking
  - `tokens/spacing.css` — spacing, radii, borders, shadows, motion
- `components/` — React primitives (namespace `window.NBuDesignSystem_6704c7`)
  - `core/` — **Button**, **Eyebrow**, **Badge**, **SectionHeading**
  - `commerce/` — **ProductCard**, **ScentTile**, **StarRating**
  - `forms/` — **Input**, **NewsletterForm**
- `ui_kits/storefront/` — interactive homepage recreation (`index.html`): announcement
  bar, sticky header, hero slideshow, scent-family grid, filterable product grid, wine
  value-prop band, footer + newsletter, slide-in cart drawer.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `assets/` — logo lockups (`logo-nebu-*`) and scent-family icons (`icons/`).
- `SKILL.md` — portable skill manifest for Claude Code.

> **Font note:** Manrope and Frank Ruhl Libre are the real brand families and load from
> the Google Fonts CDN — no substitution. Swap `tokens/fonts.css` for local `@font-face`
> if you need self-hosted binaries.
