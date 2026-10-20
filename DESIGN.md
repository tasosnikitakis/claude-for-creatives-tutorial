# DESIGN.md — Claude for creatives

Design tokens for the tutorial site. Every value here is mirrored as a CSS
variable in docs/assets/style.css. Change this file first, then the CSS.
Each token says what it is for and when not to use it, because that is what
keeps an AI tool from guessing.

## Colour

A warm, Claude-like palette chosen independently: no Anthropic logos, marks or proprietary typefaces.

Light theme (default):

- `--paper: #faf9f5` — page background. Warm paper.
- `--paper-2: #f0eee6` — sidebar, code blocks, objectives panel. One step darker than paper; never for large text areas.
- `--ink: #141413` — body text and headings.
- `--ink-2: #5e5d59` — secondary text: kickers, labels, descriptions, captions. Never for body paragraphs.
- `--line: #e3dfd3` — rules and borders. Never as a text colour.
- `--accent: #a94f2c` — the single accent, a clay. Links, prompt-panel border, current-page marker. Never as a fill behind body text.
- `--accent-2: #f5e6dc` — prompt-panel background only.
- `--olive: #55612f` / `--olive-2: #ebecdc` — checkpoint panels only.
- `--amber: #7d5410` / `--amber-2: #f6ecd6` — caution panels only. Rare; one per page at most.

Dark theme (prefers-color-scheme: dark): paper #262624, paper-2 #30302e, ink #f5f4ee, ink-2 #bdbab0, line #3e3e3a, accent #e08a68, accent-2 #3a2a23, olive #b3c08a / #2c3022, amber #e2b56a / #3a3020.

Contrast (light): ink on paper 17.5:1; ink-2 on paper 6.3:1; accent on paper 5.2:1; ink on accent-2 15.1:1. Dark: ink on paper 13.8:1; accent on paper 5.8:1. All pass AA for normal text.

## Type

- Display and reading text: "Source Serif 4" (headings 500, text 400), with Iowan/Palatino/Georgia fallbacks. Headings, lesson prose, prompt-panel text, pager titles.
- UI: "Source Sans 3" 400/600, with Segoe UI/Helvetica fallbacks. Navigation, kickers, ledes, labels, tables, objectives and checkpoint lists, buttons.
- Code: system monospace. File names, commands, code blocks. Never for prose.

Scale (desktop / mobile):
- h1: clamp(2rem, 4.5vw, 3rem), line-height 1.15
- h2: 1.6rem, line-height 1.15
- h3: 1.2rem
- body: 18px, line-height 1.65
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

- `--radius: 10px` on panels and code blocks. Panels with a coloured left border get radius on the right side only.
- Borders are 1px `--line`. Accent panels use a 4px left border in their accent colour.
- No drop shadows anywhere.

## Components

- Prompt panel: accent-2 background, 4px accent left border, serif text, small ink-2 label, Copy button top-right. The one memorable element per page.
- Objectives panel: paper-2 background, radius, h2 at 1.1rem.
- Exercise panel: 1px line border, radius, numbered steps.
- Checkpoint panel: olive-2 background, 4px olive left border.
- Caution panel: amber-2 background, 4px amber left border. One sentence plus a link.
- Tables: 1px bottom rules only, no zebra striping, wrapped in `.table-wrap` for horizontal scroll on phones.
- Pager: previous left, next right, serif titles, ink-2 "Previous/Next" labels.

## Layout

- Desktop (≥900px): 260px sticky sidebar + fluid main column.
- Mobile: single column; sidebar collapses to a "Contents" disclosure at the top.
- Everything left-aligned. No centred heroes.

## Motion

- None on load. Only the Copy button's label change on click. Reduced-motion preference is respected.
