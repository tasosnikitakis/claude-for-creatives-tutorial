# DESIGN.md — [Business]

Design tokens with exact values and a sentence on intent for each. The
sentence is not decoration: it tells an AI tool what a token is for and when
not to use it. Replace every value; keep the shape.

## Colour
- `--color-paper: #______` — page background. [When to use / when not.]
- `--color-ink: #______` — body text and headings. Never for backgrounds.
- `--color-ink-2: #______` — secondary text: captions, labels, helper text. Never for body paragraphs.
- `--color-line: #______` — rules and borders. Never as a text colour.
- `--color-accent: #______` — one call to action per view. Never for body text, never as a large fill.
- `--color-accent-2: #______` — tinted background behind accent elements only.

Contrast: state the ratio of ink on paper and accent on paper. Both must pass WCAG AA (4.5:1 for normal text).

## Type
- Display: "[Family]" [weight], fallbacks [serif/sans]. Headlines and the brand mark only.
- Body: "[Family]" [weight], fallbacks. Everything else.
- Code (if any): system monospace. File names and commands only.

Scale (mobile / desktop):
- h1: __/__ · h2: __/__ · h3: __/__ · body: __/__ · small: __/__
- Measure: 60–70 characters. Sentence case everywhere unless the brand dictates otherwise.

## Spacing
- Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96.
- Between paragraphs: 16. Before h2: 48. Section padding: 64 mobile / 96 desktop.

## Radius, borders, shadow
- Radius: __px on [which components]. Not on [which].
- Borders: 1px `--color-line`.
- Shadows: [none / one definition, where it is allowed].

## Components
- Button, primary: accent fill, ink or paper text, min height 44px, sentence case, says the action ("Book a call", not "Submit").
- Button, secondary: ink outline, transparent fill.
- Form field: label above, helper text below in ink-2, error text below in [colour], never only a red border.
- Card (if used): only when content is a collection of equal items; never as a wrapper for everything.
- [Add each component the site uses, with its states.]

## Layout
- Breakpoints: 390 (phone), 768 (tablet), 1440 (desktop).
- Grid: [columns, gutters].
- Alignment: [left / centred, and when].

## Motion
- [None on load / one orchestrated moment]. Respect prefers-reduced-motion.
