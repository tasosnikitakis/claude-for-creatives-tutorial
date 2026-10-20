# Project
Marketing site for [Business]. Static HTML + Tailwind. Deployed to GitHub Pages
from the main branch and the /docs folder. No build step.

# Commands
- Preview: `npx serve docs`
- Check:   `npx html-validate "docs/**/*.html"`

# Design rules
- IMPORTANT: use tokens from @DESIGN.md only; never invent colour, type or spacing values.
- IMPORTANT: all user-facing copy follows the brand-voice skill.
- IMPORTANT: every page works at 390px and 1440px; every image has meaningful alt text; contrast meets WCAG AA.
- Links inside the site are relative, never absolute.
- One call to action per view, in the accent colour. Nothing else in the accent colour.

# Art direction
[Two to five sentences. State the position and what to avoid. Example:]
Editorial and calm. Generous whitespace. A serif display face paired with a
humanist sans. One accent colour, used sparingly. Photography over
illustration. Left-aligned; no centred hero. No cards-for-everything, no
gradient washes, no all-caps labels, no arrows on links. One memorable
element per page; everything else quiet.

# Content
- Voice and tone: brand-voice skill.
- Interface states: content/microcopy-matrix.md.
- Greek: content/glossary-el.md; every Greek line is marked "awaiting native review" until a native reviewer signs it off.

# Workflow
- Plan before changes that touch more than one file.
- Show screenshots at 390px and 1440px as evidence before saying a visual change is done.
- Run the ux-reviewer subagent on any new or changed page before committing.
- Commit after each approved change with a message that says what changed and why.
