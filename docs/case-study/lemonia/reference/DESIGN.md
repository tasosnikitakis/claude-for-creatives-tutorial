# DESIGN.md — Lemonia Bakehouse (reference answer)

Built from brand/brand-notes.md. Values were adjusted from the "roughly"
colours so every text pairing passes WCAG AA; the originals are noted.

## Colour
- `--color-wall: #f7f3ea` — page background (the whitewashed wall). Everywhere.
- `--color-kraft: #ede2cf` — secondary surfaces: menu table header, footer, form panels. Never for large text blocks. (Lighter than the bag's #c8a97e so text stays readable.)
- `--color-ink: #222222` — all body text and headings.
- `--color-ink-2: #5a544a` — secondary text: allergen codes, helper text, captions. 6.8:1 on wall.
- `--color-green: #3f5a3c` — the brand colour (the shutters). Links, the primary button, the language switch, active states. 6.9:1 on wall. White text on green is 7.7:1.
- `--color-lemon: #e8c547` — the lemon in the logo only, and one small "baked this morning" marker. Never text, never a background behind text, never larger than an icon.
- `--color-line: #ddd3c2` — table rules and borders.
- `--color-error: #9b2c1f` — form error text and its left border. 6.8:1 on wall.

## Type
- Headings: "Gelasio" 600 (an open serif with a schoolbook feel; Georgia-metric). Fallback Georgia.
- Body and UI: "Gelasio" 400 at 19px, line-height 1.6. One family keeps it homely.
- Prices and times: same family, tabular figures (`font-variant-numeric: tabular-nums`).
- Minimum body size 19px; never below 16px anywhere ("big enough for my mother").

Scale (mobile / desktop): h1 34/48 · h2 26/32 · h3 21/24 · body 19/19 · small 16/16.

## Spacing
Scale 4, 8, 12, 16, 24, 32, 48, 64. Sections 48 mobile / 64 desktop. Menu rows 12 vertical.

## Shape
- Radius 4px on buttons and fields only. Photos square-cornered.
- No shadows. Borders 1px line.

## Components
- Button, primary: green fill, white text, 48px min height, sentence case, says the action ("Send pre-order").
- Language switch: top right, "Ελληνικά / English", current language in bold, never a flag.
- Menu table: item (Greek then English on the second line), price right-aligned, allergen codes in ink-2. Prices always visible; no "from" unless the menu says so.
- Hours block: in the footer of every page, generated from one data file.
- Photo: full width on mobile, natural colour, real alt text from Nikos's names plus a plain description.
- Form field: label above, helper below in ink-2, error below in error colour with an icon; never colour alone.

## Layout
- Single column up to 768px; two columns (photo / text) above.
- Left-aligned text. Logo top left at 120px wide, never redrawn.

## Motion
None.
