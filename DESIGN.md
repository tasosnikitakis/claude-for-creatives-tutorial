# DESIGN.md — Claude for creatives

Design tokens for the tutorial site. Every value here is mirrored as a CSS
variable in docs/assets/style.css. Change this file first, then the CSS.
Each token says what it is for and when not to use it, because that is what
keeps an AI tool from guessing.

## Colour

Light theme (default):

- `--paper: #f6f7f4` — page background. A cool off-white, deliberately not a warm cream.
- `--paper-2: #ecefe8` — sidebar, code blocks, objectives panel. One step darker than paper; never for large text areas.
- `--ink: #1c2321` — body text and headings. A green-black, not pure black.
- `--ink-2: #4a5451` — secondary text: kickers, labels, descriptions, captions. Never for body paragraphs.
- `--line: #d3d9d2` — rules and borders. Never as a text colour.
- `--blue: #244a73` — the single accent. Links, prompt-panel border, current-page marker. Never as a fill behind body text.
- `--blue-2: #e4ebf3` — prompt-panel background only.
- `--moss: #4f6b3d` / `--moss-2: #e7eedf` — checkpoint panels only.
- `--clay: #8a3d2a` / `--clay-2: #f3e3dd` — caution panels only. Rare; one per page at most.

Dark theme (prefers-color-scheme: dark): same roles, values in style.css. Accents lighten; backgrounds darken; contrast stays AA.

Contrast: ink on paper 13.9:1; ink-2 on paper 6.6:1; blue on paper 7.4:1. All pass AA for normal text.

## Type

- Display: "Fraunces" 600, with Palatino/Georgia fallbacks. Headings, the brand mark, prompt-panel text, pager titles. Never for body paragraphs.
- Body: "Source Sans 3" 400/600, with Segoe UI/Helvetica fallbacks. Everything else.
- Code: system monospace. File names, commands, code blocks. Never for prose.

Scale (desktop / mobile):
- h1: clamp(2rem, 4.5vw, 3rem), line-height 1.15
- h2: 1.6rem, line-height 1.15
- h3: 1.2rem
- body: 18px, line-height 1.6
- lede: 1.2rem, ink-2
- small, kicker, labels: 0.85–0.95rem, ink-2

Measure: 68ch for body text. Sentence case everywhere. No all-caps.

## Spacing

Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96 px (`--s1` … `--s9`).
- Between paragraphs: 16.
- Before h2: 48. Before h3: 32.
- Panel padding: 16 vertical, 24 horizontal.
- Main column padding: 32/16 on mobile, 64/48 on desktop.

## Radius and borders

- `--radius: 6px` on panels and code blocks. Panels with a coloured left border get radius on the right side only.
- Borders are 1px `--line`. Accent panels use a 4px left border in their accent colour.
- No drop shadows anywhere.

## Components

- Prompt panel: blue-2 background, 4px blue left border, Fraunces text, small ink-2 label, Copy button top-right. The one memorable element per page.
- Objectives panel: paper-2 background, radius, h2 at 1.1rem.
- Exercise panel: 1px line border, radius, numbered steps.
- Checkpoint panel: moss-2 background, 4px moss left border.
- Caution panel: clay-2 background, 4px clay left border. One sentence plus a link.
- Tables: 1px bottom rules only, no zebra striping, wrapped in `.table-wrap` for horizontal scroll on phones.
- Pager: previous left, next right, Fraunces titles, ink-2 "Previous/Next" labels.

## Layout

- Desktop (≥900px): 260px sticky sidebar + fluid main column.
- Mobile: single column; sidebar collapses to a "Contents" disclosure at the top.
- Everything left-aligned. No centred heroes.

## Motion

- None on load. Only the Copy button's label change on click. Reduced-motion preference is respected.
