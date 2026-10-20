# Claude for creatives

A ten-module tutorial for a creative director learning to design and run UI/UX and content workflows with Claude and Claude Code. Static site, no build step, published with GitHub Pages.

The repository is also the worked example the tutorial teaches: it has its own `CLAUDE.md`, `DESIGN.md`, `UX.md`, a brand-voice skill and a ux-reviewer subagent. Open them alongside the lessons.

## Layout

```
.
├── CLAUDE.md                     Project brief Claude Code reads every session (Module 5)
├── DESIGN.md                     Design tokens with intent; mirrored in docs/assets/style.css
├── UX.md                         Audience, findings, interaction standards, terminology
├── .claude/
│   ├── skills/brand-voice/SKILL.md   The site's own voice, as a skill (Modules 1, 6)
│   └── agents/ux-reviewer.md         Read-only reviewer subagent (Module 8)
├── docs/                         The published site
│   ├── index.html                Start here
│   ├── modules/00–09 …html       One page per module
│   ├── templates.html            Downloads page
│   ├── templates/*.md            Starter files with placeholders
│   ├── glossary.html, resources.html
│   ├── assets/style.css          Tokens as CSS variables + components
│   ├── assets/site.js            Navigation, copy buttons, previous/next
│   └── .nojekyll                 Tells GitHub Pages to serve files as they are
└── research/                     The research document the tutorial was built from
```

## Preview locally

Any static server works. Two options:

```bash
npx serve docs
```

or, in a Code session in the Claude desktop app, ask Claude to open `docs/index.html` in the Browser pane.

The pages also open directly from the file system (double-click `docs/index.html`); only the Copy buttons need a server.

## Publish with GitHub Pages

1. Create a repository on GitHub and push this folder to its `main` branch.
2. On github.com open the repository → Settings → Pages.
3. Under "Build and deployment" choose **Deploy from a branch**, branch **main**, folder **/docs**. Save.
4. After a minute or two the page shows the public address, of the form `https://<user>.github.io/<repository>/`.
5. Every later push to `main` republishes automatically.

Or, from inside Claude Code in this folder:

> This site lives in docs/. Make sure docs/.nojekyll exists and every internal link is relative. Commit and push. Then walk me through enabling GitHub Pages from the main branch and the docs folder, one step at a time, and give me the address when it is live.

## Editing

- Module pages are plain HTML with one shared structure (see `CLAUDE.md` → Design rules). Copy an existing module to add one.
- Navigation and previous/next links come from the `MODULES` list at the top of `docs/assets/site.js`. Add or rename a module there and in the list on `docs/index.html`.
- Colours, type and spacing live in `DESIGN.md`; the CSS variables at the top of `docs/assets/style.css` mirror them. Change `DESIGN.md` first.
- Every page ends with a "Last verified" line. Product facts (plans, prices, feature availability) changed several times in 2026; update the date when you check a page.

## Check

```bash
npx html-validate "docs/**/*.html"
```

## Disclosure

Human editorial control over everything published. Substantial AI generation disclosed to clients. No imitation of a named living creator's voice or style. Prompts and context files kept for every deliverable. Image-tool licences checked before commercial use.

## Licence

Content © the authors. Add a licence of your choice before making the repository public.
