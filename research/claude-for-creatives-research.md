# Claude for UI/UX and Content Work
## Research foundation for a creative director's tutorial

- **Scope:** Claude only — the Claude app (chat, Projects, artifacts, skills, Claude Design), Claude Code, skills, subagents, hooks, MCP and GitHub publishing. Other AI design tools are out of scope; Figma appears only as a Claude Code integration.
- **Learner:** an experienced creative director and content writer with UI/UX background, strong at prompting, new to VS Code, the terminal and Git.
- **Purpose:** source material for a multi-page tutorial site that will be published on GitHub Pages.
- **Research date:** 20 October 2026. Product names, plan contents and prices changed several times in 2026 — every tool page in the tutorial should carry a "last verified" date.

---

## 0. The one idea the tutorial is built on

The skills a creative director already has — taste, brand voice, research synthesis, critique — are now the main *input* to AI-generated design. Nielsen Norman Group calls this "UX-context design": turning what a business knows about its users and its brand into files the AI reads before it generates anything.

Claude is a good fit for this way of working because the same context assets (a brand-voice skill, a `DESIGN.md`, a `CLAUDE.md` brief, a review rubric) are reused across every Claude surface: the chat app, Claude Design and Claude Code.

**So the tutorial teaches context files and review checklists before it teaches any code.** The generated pages are disposable; the context files are the business asset.

---

## 1. Why now — the role shift in one page

Keep this short in the tutorial; it is motivation, not instruction.

- **UI is becoming less of a differentiator.** NN/g's 2026 outlook says that as AI tools improve, almost anyone will be able to produce a decent-looking interface, so value moves to strategy, research and judgement. Designers who only assemble screens from a design system are the most exposed.
- **Adoption is high, trust is lower.** Figma's *State of the Designer 2026* (906 designers) reports that 72% use generative AI and 91% say it improves their designs. Its 2025 report found that only about a third felt they could rely on AI output. Figma sells AI features, so treat both as directional.
- **"AI fatigue" and "slop" are real.** NN/g expects a growing backlash against generic AI output and says human, authentic detail will set experiences apart. NN/g's own hands-on tests found AI-generated screens often look flat and interchangeable unless the prompt is very specific or a real design file is attached.
- **Content design moves from writing strings to writing rules.** UX Content Collective's 2026 "new basics" ask whether a content designer can express voice and tone as instructions a model will follow. That is exactly a Claude skill.
- **The custodial problem.** NN/g (August 2026) notes that AI lets teams build faster than UX can evaluate; the fix is to encode recurring UX problems as instructions so they are prevented rather than cleaned up. In Claude terms: `CLAUDE.md`, skills and hooks.

---

## 2. The Claude stack for creatives

### 2.1 Claude app (claude.ai / desktop / mobile)

| Capability | What it is | Creative use |
|---|---|---|
| **Chat** | Conversational work with files, images, web search | Thinking, critique, one-off copy, research questions |
| **Projects** | A workspace with persistent knowledge files and instructions | Attach the brand book, voice guide, research findings; every chat inside inherits them |
| **Artifacts** | Live outputs beside the chat: documents, code, interactive previews | Drafts, prototypes, decks, one-pagers you keep, edit and share |
| **Claude Design** | A design canvas that pairs conversation with editable visuals (see 2.2) | Prototypes, decks, landing pages, mockups |
| **Skills** | Reusable instruction packages that load when relevant | A brand-voice skill, a microcopy skill, a localisation skill |
| **Memory** | Remembers durable facts and preferences across chats | Standing preferences on tone, format, language |
| **Cowork** | Agentic assistant for files and multi-step tasks (launched January 2026; its capabilities are now part of Claude) | Batch work on folders of documents |

### 2.2 Claude Design

- **Status (verify before publishing):** launched 17 April 2026 as an Anthropic Labs research preview; out of beta since 8 October 2026 and available on Free, Pro, Max, Team and Enterprise. It is now a template you start an artifact from, usable in any chat, in Claude Code and from the Artifacts tab. The standalone claude.ai/design closes on 14 December 2026. Design-system ingestion (your colours, type and components applied automatically) is reported to need a paid plan.
- **The flow (per Anthropic's Help Center):** start a design → attach a design system → add context (screenshots, brand assets, codebase) → describe what you want → review → refine by chat, direct edits on the canvas or inline comments → export or share.
- **Anthropic's prompt formula:** **goal, layout, content, audience.** Add art direction and a check (see 7).
- **Exports:** share links; export to Canva (fully editable there); PDF/image; hand off to Claude Code with `/design` for a real build.
- **Good for:** one-pagers, pitch decks, onboarding flows, marketing pages, client concept rounds, "show me three directions".
- **Not for:** production code, multi-file sites, anything that must live in a repo — that is Claude Code.

### 2.3 Claude Code

Anthropic describes Claude Code as an agentic environment: unlike a chatbot, it reads your files, runs commands, makes changes and works through problems while you watch, redirect or step away.

**Where it runs:** terminal (CLI), the VS Code extension (Anthropic's recommended route; VS Code 1.94+), the Claude desktop and web apps, and the Claude mobile app for remote sessions.

**Features that matter for a designer:**

| Feature | What it does | Why a creative cares |
|---|---|---|
| **`CLAUDE.md`** | Project memory read at the start of every session | This is the creative brief + brand rules. Keep it short: Anthropic warns that "Bloated CLAUDE.md files cause Claude to ignore your actual instructions!" Aim under ~200 lines |
| **Plan mode** (Shift+Tab until "plan mode on") | Claude reads and proposes but does not edit | The concept review before production. Skip it only when the change is one sentence long |
| **Skills** (`.claude/skills/<name>/SKILL.md`) | Repeatable workflows or domain knowledge, auto-invoked or run as `/name` | Brand voice, microcopy matrix, `/new-page` scaffold |
| **Subagents** (`.claude/agents/*.md`) | Specialist helpers with their own context and tool limits | A read-only UX reviewer, an accessibility checker, an editorial QA pass |
| **Hooks** | Scripts that run automatically at set points | Guaranteed checks (run an accessibility linter after every edit). Instructions are advisory; hooks are deterministic |
| **MCP servers** (`claude mcp add …`) | Connect external tools | Figma, Notion, GitHub, Google Drive |
| **Plugins** (`/plugin`) | Installable bundles of skills, hooks and MCP servers | Anthropic's official **frontend-design** plugin is the first install — it exists specifically to avoid generic "AI slop" aesthetics |
| **`/design` and `/design-sync`** | Move work between Claude Design and Claude Code; pull in your design system | Canvas concept → coded page without re-briefing |
| **Verification** | Give Claude a check it can run: a build, a screenshot comparison | "Screenshot the result at 390px and 1440px, compare to the brief, list differences, fix them" |
| **Permission modes** | Auto mode (default in recent versions, with a safety classifier) or manual approval of every edit | Start in manual; move to auto once the workflow is trusted |
| **`/init`, `/clear`, `@file`** | Generate a starter `CLAUDE.md`; reset context; reference a file | `/clear` between unrelated tasks — a full context window is the main cause of degraded output |
| **Images** | Paste screenshots or reference designs | "Match this reference" works far better than adjectives |

### 2.4 Plans and pricing (reported Sept–Oct 2026 — verify on claude.com/pricing)

| Plan | Price | Claude Design | Claude Code |
|---|---|---|---|
| Free | $0 | Yes (no design-system ingestion) | **No** |
| Pro | $20/month ($17/month annual) | Yes | Yes |
| Max | $100 or $200/month | Yes | Yes, higher limits |
| Team / Enterprise | Per seat | Yes | Yes |

Usage is shared across chat, Design and Code on one plan. Recommendation: Pro first; Max only if she regularly hits limits.

---

## 3. Use-case map — task → Claude surface → human checkpoint

| Task | Claude surface | How | Human checkpoint |
|---|---|---|---|
| Research synthesis | Chat / Project | Upload transcripts and survey exports; ask for themes with supporting quotes | Verify every theme against raw quotes; NN/g warns models can over-focus on the wrong takeaway |
| Personas and user models | Project | Draft from the synthesis; demand the reasoning, not stock names and photos | Check each persona against evidence |
| Journeys and IA | Chat + artifact | Generate alternative sitemaps and flows from a content inventory | Card-sort or tree-test with real users |
| Concepts, decks, one-pagers | Claude Design | Goal/layout/content/audience prompt; iterate on canvas and by comment | Brand review; heuristic review |
| Prototypes | Claude Design → Claude Code | Interactive canvas prototype; `/design` to build a clickable HTML version | Usability test |
| Real pages and sites | Claude Code | Plan mode → build → screenshot verification → commit → GitHub Pages | Rubric in section 7 |
| Design system and tokens | Claude Code | Extract tokens into `DESIGN.md`; `/design-sync`; refactor pages to tokens only | Design-system owner approves |
| Figma hand-off both ways | Claude Code + Figma MCP | Read a frame and implement it; "Send this to Figma" to push coded UI back as frames | Visual diff against the frame |
| UX copy / microcopy | Skill (app and Code) | Generate every state against the brand-voice skill and a microcopy matrix | Content lead approves per state |
| Brand voice and content strategy | Project + skill | Reverse-engineer a voice guide from 5 gold-standard samples, package as a skill | CD sign-off |
| Greek localisation | Skill + glossary | Draft and transcreate with a Greek glossary and tone notes | Native Greek reviewer, always |
| Accessibility | Subagent + hook | WCAG AA contrast, semantic HTML, alt text, focus order | Manual keyboard and screen-reader pass |
| Usability-test analysis | Chat / Project | Cluster issues by severity from session notes | Researcher validates severity |
| Documentation | Claude Code | Component docs, READMEs, workflow runbooks | Peer review |
| Repeatable studio workflows | Skills + subagents + hooks | `/new-page`, `/brief-to-concepts`, `/qa-copy` with built-in stop points | The stop points |

---

## 4. Use cases in detail (with example prompts)

### 4.1 Research synthesis and personas — Claude app Projects

Create a Project per client or product. Add: brand book, voice guide, research summaries, glossary. Set project instructions ("always cite which transcript a theme comes from").

> **Prompt:** "Here are six interview transcripts. Identify the recurring themes, give two verbatim quotes per theme with the transcript name, flag anything only one person said, and tell me which theme you are least confident about and why."

> **Prompt:** "From these themes, draft two user models. For each: goals, constraints, decision triggers, and the evidence lines that support each claim. No names, no stock imagery, no traits that aren't in the data."

### 4.2 Brand voice as a reusable skill

The method (adapted from Right Side Up and UXCC): collect ~5 gold-standard pieces → give Claude a 1–2 page template → extract voice principles, tone-by-context rules, terminology and do/don't examples → turn the result into a skill so it loads automatically in both the app and Claude Code.

- Lead with examples, not adjectives: three real paragraphs beat "warm but professional".
- Make tone conditional: "if the user is frustrated, shift to extra reassuring".
- Add hard rules: button case, exclamation marks, forbidden terms, length limits.

> **Prompt:** "Analyse these five pieces of our writing. Extract voice principles, tone-by-context rules, terminology (say/don't say), reading level, and three do/don't example pairs into this template: [template]. Then rewrite it as a Claude skill with a one-line description that says when to apply it."

### 4.3 Concepts, decks and prototypes — Claude Design

> **Prompt:** "Mock up a 3-screen onboarding flow. Goal: first booking in under two minutes. Audience: busy small-business owners on mobile. Content: [bullets]. Layout: one action per screen, progress indicator. Use the attached design system. Ask me three clarifying questions before you start."

> **Prompt:** "Give me three directions for the hero of this landing page — editorial, product-led, and testimonial-led — in the same brand system. Keep the copy; vary the composition."

Iterate by leaving comments on the canvas ("this CTA competes with the nav"), then hand off: `/design` in Claude Code to build it for real.

### 4.4 Building real pages — Claude Code

The mental model for the tutorial: Claude Code is a junior studio team working from a brief. `CLAUDE.md` is the brief and brand book, plan mode is the concept review, the diff and the screenshot are what you sign off.

The loop: gather context → plan → act → verify → report. You approve, redirect or reject at each step.

> **Prompt (plan mode):** "Read brief.md and the attached design screenshot. Propose a file structure and a build plan for a static HTML + Tailwind page using only the tokens in DESIGN.md. Don't write code yet."

> **Prompt (build):** "Build it. When done, start a local preview, screenshot it at 390px and 1440px, compare both to the design, list every difference, and fix them before telling me it's finished."

> **Prompt (interview first):** "Before building the pricing page, interview me — one question at a time — until you have enough to write a brief. Then show me the brief for approval."

### 4.5 Design systems and context files

Three files carry the system:

- **`CLAUDE.md`** — project brief, commands, rules, workflow (template in section 6).
- **`DESIGN.md`** — tokens with exact values *plus prose on intent* (Google Labs open-sourced the format in April 2026; NN/g recommends it and proposes a broader `UX.md`). Prose matters because it tells the model what a colour is *for*. Without a tokens file, models invent token names and lose values between sessions.
- **`UX.md`** (NN/g's proposal) — research findings, interaction standards, glossary, user models, domain rules.

> **Prompt:** "Extract our design tokens from this site into DESIGN.md: colours, type scale, spacing, radii, shadows, with exact values and a sentence on when to use each. Then refactor the page to use only those tokens and show me the diff."

### 4.6 Figma round-trip via MCP

- **Figma → Claude Code.** Install the official plugin (`claude plugin install figma@claude-plugins-official`) or add the remote server (`claude mcp add --transport http figma https://mcp.figma.com/mcp`), run `/mcp` and authenticate in the browser. Figma recommends the remote server for the fullest feature set. Reading design context is reported to work on all Figma plans.
- **Claude Code → Figma ("Code to Canvas", shipped 17 February 2026).** Say "Send this to Figma" and the running UI becomes editable frames. Remote MCP only; writing into existing files needs a Figma Full seat with edit access. Early adopters reported the tool sometimes not appearing in sessions, so expect friction.

> **Prompt:** "Use the Figma MCP to read [frame link]. Implement it with our DESIGN.md tokens and existing components, screenshot the result, compare it to the frame, and list differences. Then send the coded version back to Figma as a new page."

### 4.7 Microcopy and Greek localisation

Build a **microcopy matrix**: state (success, error, empty, loading, confirmation) × tone × length limit × terminology. Generate variants against it with the brand-voice skill; review per state.

Greek: the research found no rigorous benchmark for English→Greek interface copy, and published work describes Greek as a lower-resourced language where general models lag (Greek-specific models like Meltemi showed large gains over a general base model). **Treatment in the tutorial:** Claude drafts and transcreates using a Greek glossary and tone notes stored as a skill; a native Greek reviewer signs off before anything ships.

> **Prompt:** "Using the brand-voice skill, write copy for every state of the contact form (labels, helper text, success, three error types, empty). Then translate to Greek using glossary-el.md. Flag any line where the tone or idiom may not carry over and suggest a transcreation instead of a translation."

### 4.8 Review and QA — subagents, hooks and the rubric

- A read-only **`ux-reviewer` subagent** checks against Nielsen's heuristics, WCAG AA and the brand-voice skill, and reports issues by severity with file and line references.
- An **accessibility hook** runs a linter after every edit — guaranteed, not advisory.
- The **rubric** in section 7 is the shared language for "is this good?"

> **Prompt:** "Run the ux-reviewer subagent on /docs/index.html. Group findings by severity, cite the heuristic or WCAG criterion for each, and propose a fix without applying it."

### 4.9 Publishing — GitHub Pages

Claude Code handles Git: commit, branch, open a pull request, set up Pages. Install the `gh` CLI so it can talk to GitHub reliably. Pages publishes static HTML or Markdown from a branch or a workflow — the tutorial site itself can ship this way.

> **Prompt:** "Explain every command you run in one sentence as if I'm a designer new to the terminal. Then initialise a Git repo here, make the first commit, create the GitHub repo, push, and set up GitHub Pages from /docs."

### 4.10 From chat to automation — a decision rule

| Use | When | Surface |
|---|---|---|
| **Chat** | Exploring, thinking, one-off copy, critique | Claude app / Projects |
| **Canvas / artifact** | Visual exploration, decks, prototypes to share | Claude Design |
| **Agent** | Multi-file builds, applying a system across many pages, repo work | Claude Code, plan mode first |
| **Automation** | The same steps every time, with checks | Skills + subagents + hooks |

Anthropic's own guidance ("Building effective agents"): use the simplest workflow that works before reaching for an autonomous agent. Every automated workflow keeps a human stop point.

> **Prompt:** "Create a skill /new-page that: reads a brief, applies DESIGN.md and the brand-voice skill, builds the page, runs the ux-reviewer subagent, shows me screenshots, and stops for my approval before committing."

---

## 5. Getting started — the non-developer path

1. **Plan:** Pro or higher (Claude Code is not on Free).
2. **VS Code:** code.visualstudio.com.
3. **Claude Code CLI** (native installer, no Node.js needed):
   - macOS/Linux: `curl -fsSL https://claude.ai/install.sh | bash`
   - Windows PowerShell: `irm https://claude.ai/install.ps1 | iex`
4. **VS Code extension:** Extensions (Cmd/Ctrl+Shift+X) → search "Claude Code" (publisher Anthropic) → Install. The extension bundles its own Claude Code; the CLI is still needed for `claude` in the integrated terminal.
5. **Open a folder**, trust it, click the Claude icon, sign in.
6. **First session:** `/init` to generate a starter `CLAUDE.md`; install the frontend-design plugin via `/plugin`; start in manual permission mode.
7. **Local preview:** ask Claude to start a preview server and give you the URL (static server or VS Code Live Preview for HTML; `npm run dev` for React/Vite). Keep browser and VS Code side by side.

**Git in five words each:** repository = project folder with history; commit = saved snapshot with a message; push = upload to GitHub; branch = parallel version for experiments; pull request = proposal to merge. Claude does all of these when asked.

**Habits that keep output good:** plan mode for anything touching several files; ask for evidence (screenshots, build output) not claims; `/clear` between unrelated tasks; let Claude interview you before big features; prune `CLAUDE.md` whenever a rule gets ignored.

---

## 6. Starter templates

### `CLAUDE.md` (website project)

```markdown
# Project
Marketing site for [Business]. Static HTML + Tailwind. Deployed to GitHub Pages from /docs.

# Commands
- Preview: `npx serve docs`

# Design rules
- Use tokens from @DESIGN.md only; never invent colour or spacing values.
- Follow the brand-voice skill for all copy.
- Mobile-first; verify at 390px and 1440px.
- IMPORTANT: every image needs meaningful alt text; colour contrast must meet WCAG AA.
- Aesthetic: see "Art direction" below. No Inter/Roboto/system fonts, no purple gradients, no centred-everything hero.

# Art direction
Editorial, generous whitespace, a serif display face paired with a humanist sans, one accent colour used sparingly, photography over illustration.

# Workflow
- Plan before multi-file changes. Show screenshots as evidence. Commit after each approved change.
```

### `.claude/skills/brand-voice/SKILL.md`

```markdown
---
name: brand-voice
description: Apply [Business] voice and tone to any user-facing copy, microcopy or marketing text
---
Voice: warm, precise, confident; never hype. Reading level: plain English (B1–B2).
Tone by state: success = brief and warm; error = calm, explain the next step, never blame; empty state = invite action.
Terminology: say "booking", not "reservation"; say "team", not "staff".
Before returning copy: check length limits, sentence case for buttons, no exclamation marks in errors.
Return 3 options + a one-line rationale each.
Greek: use glossary-el.md; flag idioms that need transcreation.
```

### `.claude/agents/ux-reviewer.md`

```markdown
---
name: ux-reviewer
description: Read-only reviewer for usability, accessibility and brand voice. Use before any commit of user-facing pages.
tools: Read, Grep, Glob
---
Review the given files against: Nielsen's 10 heuristics, WCAG 2.2 AA (contrast, semantics, alt text, focus order), and the brand-voice skill.
Report issues grouped by severity (blocker / major / minor) with file:line, the criterion violated, and a proposed fix. Do not edit files.
```

### `DESIGN.md` skeleton

```markdown
# Colour
- --color-ink: #1A1A1A — body text. Never for backgrounds.
- --color-accent: #C8442B — one CTA per view. Never for body text.
# Type
- Display: "Fraunces" 700, 40/48 mobile, 64/72 desktop — headlines only.
- Body: "Source Sans 3" 400, 17/28.
# Spacing
- Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96. Sections use 64 mobile / 96 desktop.
# Components
- Button: primary = accent fill, ink text; secondary = ink outline. Sentence case. Min height 44px.
```

---

## 7. Quality — avoiding "AI slop" and judging output

**Anthropic's own art-direction guidance** (frontend-design skill and the "Prompting for frontend aesthetics" cookbook): avoid overused fonts (Inter, Roboto, Arial, system fonts), clichéd palettes (notably purple gradients on white), predictable layouts; commit to a clear aesthetic direction; use motion and typography deliberately. Writing this block is ordinary creative-director work — and it is the fastest fix for generic output.

**Evaluation rubric (reuse in every review):**

| Dimension | Check | Standard |
|---|---|---|
| Brief fit | Goal, audience and CTA met | The brief |
| Brand consistency | Tokens only; type and colour on-system; not generic | `DESIGN.md`, art-direction block |
| Usability | Nielsen's 10 heuristics | NN/g |
| Accessibility | Contrast AA, semantic HTML, alt text, keyboard focus | WCAG 2.2 |
| Content | Voice and tone per state, clarity, terminology, length | Brand-voice skill |
| Truthfulness | No invented facts, testimonials or statistics | Editorial policy |
| Evidence | Screenshots and build output supplied, not claimed | Anthropic verification guidance |

Why the rubric matters, in Figma's words from its 2026 report: the problem is that "designers don't know how to prove whether outputs are good or bad."

---

## 8. Ethics and disclosure (brief)

- **EU AI Act, Article 50** transparency obligations apply from **2 August 2026**. AI-generated text published to inform the public must be disclosed unless it has gone through human review or editorial control with someone holding editorial responsibility. For evidently creative work, disclosure may be done in a way that doesn't spoil the work. The Commission published a voluntary Code of Practice on labelling AI content on 10 June 2026; secondary legal commentary reports provider watermarking duties from 2 December 2026 under the Digital Omnibus.
- **US Copyright Office (January 2025):** AI assistance does not bar copyright in a human-authored work, but expressive elements decided by the machine are not protected.
- **Authors Guild (updated May 2026):** disclose substantial AI generation; imitating a named writer's style is considered unethical.
- **Studio policy to adopt:** human editorial control on everything published; tell clients about substantial AI generation; never imitate a named living creator; keep a prompt-and-context log per deliverable; check image licences.

---

## 9. Claude-specific learning resources

**Official**
- Claude Code docs (code.claude.com/docs): Best practices · How Claude Code works · VS Code · Skills · Sub-agents · Hooks · MCP · Permission modes.
- Claude Help Center: "Get started with Claude Design" · "Set up your design system in Claude Design".
- Anthropic cookbook: "Prompting for frontend aesthetics".
- Anthropic essays and guides: "Building effective agents"; the prompt engineering guide (docs.claude.com).
- **Anthropic Academy** (anthropic.skilljar.com, free, certificates): Claude 101 · Claude Code 101 · Claude Code in Action · Introduction to Agent Skills · Introduction to Subagents · MCP courses · AI Fluency.

**Courses**
- DeepLearning.AI: "Claude Code: A Highly Agentic Coding Assistant" (includes building a UI from Figma mockups via MCP) · "Agent Skills with Anthropic" · "MCP: Build Rich-Context AI Apps with Anthropic".
- NN/g (paid): "Context Engineering: Shaping AI-Generated Designs" · "AI for Design Workflows" · "UX Writing: Foundations and AI-Assisted Techniques".

**Designer-oriented third-party guides**
- Olya Cooper, "Claude Code + Figma MCP: The Complete Designer Workflow" (Medium).
- Builder.io guides on Claude Code ↔ Figma.
- "Claude Blattman — AI for Professionals Who Don't Code" (VS Code setup for non-developers).
- Victor Dibia, *Designing with AI* newsletter (Claude Design + Claude Code walkthroughs).
- UX Writing Hub, Claude Code content-systems workshop.
- Community repos: `shanraisshan/claude-code-best-practice`, `rohitg00/awesome-claude-design`.

---

## 10. Proposed tutorial — 9 modules, Claude only

Progression: prompting (already strong) → Projects, artifacts, Claude Design → VS Code + Claude Code basics → context engineering → Figma MCP round-trip → automated, gated workflows → studio playbook. Suggested pacing: two weeks in the Claude app before the terminal.

**Module 0 — Orientation: the new creative stack**
- Objectives: understand the role shift; map Claude app / Claude Design / Claude Code to her existing process.
- Exercise: audit one recent project; label each step research, generation or judgement.
- Prompt: "Here is my process for [project]. Classify each step as research, generation or judgement, and suggest where Claude could help and where a human gate is essential."

**Module 1 — Claude as creative partner: Projects and skills**
- Objectives: build a Project with the brand book; write a brand-voice skill.
- Exercise: reverse-engineer a voice guide from five samples (prompt in 4.2).

**Module 2 — Claude Design: prompt to prototype**
- Objectives: goal/layout/content/audience; iterate with comments and canvas edits; export and share.
- Exercise: a one-pager and a 3-screen onboarding prototype (prompts in 4.3).

**Module 3 — Developer tooling without fear: VS Code, terminal, Git**
- Objectives: install VS Code, the CLI and the extension; understand folders, commits, pushes; create a GitHub repo.
- Exercise: a "hello studio" repo; Claude makes the first commit (prompt in 4.9).

**Module 4 — Claude Code fundamentals: the agentic loop**
- Objectives: plan mode, permission modes, `/init`, `/clear`, `@file`, pasting screenshots, verification.
- Exercise: build a static landing page from the Module 2 design; preview locally (prompts in 4.4).

**Module 5 — Context engineering: CLAUDE.md, DESIGN.md, UX.md**
- Objectives: project memory and tokens; install the frontend-design plugin; write the art-direction block.
- Exercise: regenerate the page with and without context; score both with the rubric (prompt in 4.5).

**Module 6 — Content systems in Claude Code**
- Objectives: microcopy matrix, voice skill, editorial-QA subagent, Greek localisation workflow with glossary.
- Exercise: all states of the contact form in English and Greek; QA subagent, then native review (prompt in 4.7).

**Module 7 — Figma round-trip with MCP**
- Objectives: connect the Figma MCP; implement a frame; send a coded UI back to the canvas.
- Exercise: Figma hero section → code → "Send this to Figma" → explore variants (prompt in 4.6).

**Module 8 — Automated, gated workflows and publishing**
- Objectives: ux-reviewer subagent, accessibility hook, `/new-page` skill; deploy with GitHub Pages; document workflows as runbooks.
- Exercise: ship the tutorial site itself (prompts in 4.8, 4.10).

**Module 9 — Capstone: the studio playbook**
- Objectives: combine everything into a client-ready workflow with disclosure policy and rubric.
- Exercise: a full mini-project (brief → synthesis → prototype → build → review → publish) and its runbook.

**Workflow documentation format** (every skill or runbook): purpose · inputs (which context files) · steps · the human checkpoint · definition of done · a sample output. `CLAUDE.md` lives in Git and compounds over time.

---

## 11. Glossary — developer terms for a designer

- **Agent / agentic loop** — an AI that plans, acts (edits files, runs commands), checks results and repeats.
- **Artifact** — a live output panel in Claude (document, code, design).
- **Branch / commit / push / pull request** — Git's parallel version / snapshot / upload / merge proposal.
- **`CLAUDE.md`** — the project memory file Claude Code reads every session.
- **CLI / terminal** — a text interface for running commands.
- **Context window** — everything the model can "see" at once; quality drops as it fills.
- **Design tokens** — named design values (colour, spacing, type) used in code.
- **`DESIGN.md` / `UX.md`** — AI-readable design and UX context files.
- **Diff** — the exact before/after change to files.
- **GitHub Pages** — free static hosting from a GitHub repo.
- **Hook** — a script that runs automatically at set points; guaranteed, unlike instructions.
- **localhost / local preview** — a site running on your own computer.
- **MCP (Model Context Protocol)** — the standard for connecting Claude to tools such as Figma.
- **npm / Node.js** — JavaScript package tools many web projects use.
- **Plan mode** — Claude Code's read-only planning state.
- **Plugin** — an installable bundle of skills, hooks and MCP servers.
- **Repository (repo)** — a project folder tracked by Git.
- **Skill (`SKILL.md`)** — reusable instructions Claude loads when relevant.
- **Subagent** — a specialist helper with its own context and tool limits.
- **Tailwind / React / shadcn/ui** — a utility-CSS framework / a UI library / a component kit Claude often reaches for.
- **Vibe coding / vibe design** — building by describing intent and accepting AI output, often without reading the code.

---

## 12. Caveats — verify before publishing

- **Volatility.** Claude Design went research preview → beta → generally available on all plans, and from standalone to built-in, within six months; claude.ai/design closes 14 December 2026. Claude Code permission defaults and plugin names may change.
- **Pricing** comes mostly from third-party pages checked September–October 2026. Confirm on claude.com/pricing and figma.com/pricing.
- **Figma details** (plan requirements for the MCP server and Code to Canvas) come from secondary sources and forum reports.
- **Greek localisation** evidence is indirect; no English→Greek UX-copy benchmark was found.
- **EU AI Act** provider-obligation dates under the Digital Omnibus come from legal commentary, not the regulation text.
- **Survey figures** come from Figma, a vendor with AI products; treat as rough indicators.

---

## 13. Sources

**Anthropic / Claude**
- Claude Code best practices — https://code.claude.com/docs/en/best-practices
- Claude Code in VS Code — https://code.claude.com/docs/en/vs-code
- Get started with Claude Design (Help Center) — https://support.claude.com/en/articles/14604416-get-started-with-claude-design
- Prompting for frontend aesthetics (cookbook) — https://platform.claude.com/cookbook/coding-prompting-for-frontend-aesthetics
- Anthropic Academy — https://anthropic.skilljar.com/
- Claude Design GA announcement (X) — https://x.com/claudeai/status/2045156267690213649
- TechCrunch on the Claude Design launch — https://techcrunch.com/2026/04/17/anthropic-launches-claude-design-a-new-product-for-creating-quick-visuals/
- Frontend-design skill breakdown — https://medium.com/@ahmed.soliman/why-anthropics-frontend-design-skill-just-works-a-prompt-engineering-breakdown-72a1386df114
- Frontend-design plugin overview — https://www.aidesigner.ai/blog/claude-code-frontend-design
- Claude Design free-tier note — https://omidsaffari.com/blog/claude-design-free
- Claude Design how-to — https://f1studioz.com/blog/how-to-use-claude-design/
- Claude Design review (DataCamp) — https://www.datacamp.com/blog/claude-design
- Victor Dibia on Claude Design — https://newsletter.victordibia.com/p/how-good-is-anthropics-claude-design
- Claude plans and pricing (third-party) — https://www.ssdnodes.com/learn/claude-plans-which-one-do-you-need · https://sessionwatcher.com/guides/how-much-does-claude-code-cost · https://www.wearetandem.ai/en/blog/tools/claude-max-pro-pricing-plans · https://www.morphllm.com/claude-code-pricing

**Claude Code setup for non-developers**
- VS Code extension set-up — https://dev.to/noorhalvorsen/claude-code-in-vs-code-the-official-extension-set-up-properly-38o5
- AI for professionals who don't code — https://claudeblattman.com/setup/vscode-setup/
- Further set-up guides — https://www.shopify.com/blog/claude-code-vs-code-extension · https://sagnikbhattacharya.com/blog/claude-code-vscode · https://blogs.novita.ai/claude-code-vscode/ · https://www.explainx.ai/blog/claude-code-vscode-ide-extension-setup-guide-2026
- Best-practice summaries — https://munderdiffl.in/blog/claude-code-best-practices/

**Figma ↔ Claude Code**
- Code to Canvas (Builder.io) — https://www.builder.io/blog/claude-code-to-figma
- Figma MCP with Claude Code (Builder.io) — https://www.builder.io/blog/claude-code-figma-mcp-server
- Designer workflow (Olya Cooper) — https://olyacooper.medium.com/claude-code-figma-mcp-the-complete-designer-workflow-56f3d7f22a6f
- Beginner MCP set-up — https://medium.com/@nithin_94885/claude-code-mcp-with-figma-a-beginners-step-by-step-setup-guide-84546b46c07d · https://medium.com/@parvaneh.pouladzadeh/how-to-connect-figma-and-claude-code-with-mcp-846ada3a49bf
- Playbook — https://www.925studios.co/blog/2026-03-18-how-to-use-figma-mcp-with-claude-code-the-complete-playbook-2026
- Launch coverage — https://dataconomy.com/2026/02/18/figma-and-anthropic-launch-code-to-canvas-for-ai-design-editing/ · https://gigazine.net/gsc_news/en/20260218-figma-code-to-canvas/ · https://pochanglab.com/en/blog/figma-claude-code-to-canvas
- Forum issue report — https://forum.figma.com/report-a-problem-6/generate-figma-design-not-available-in-claude-code-connector-51173
- Agency case (design-system-aware) — https://www.eleken.co/blog-posts/figma-to-claude-code

**Field context (NN/g, Figma, Smashing, content design)**
- NN/g, UX-context design — https://www.nngroup.com/articles/ux-context-design/
- NN/g, State of UX 2026 — https://www.nngroup.com/articles/state-of-ux-2026/
- NN/g, AI UX debt — https://www.nngroup.com/articles/ai-ux-debt/
- NN/g, AI prototyping test — https://www.nngroup.com/articles/ai-prototyping/
- NN/g, AI study guide — https://www.nngroup.com/articles/ai-work-study-guide/
- NN/g, AI topic hub — https://www.nngroup.com/topic/ai/
- Figma, State of the Designer 2026 — https://www.figma.com/blog/state-of-the-designer-2026/
- Figma, State of Design (AI report) — https://www.figma.com/blog/the-state-of-design/
- Figma 2025 AI report summary — https://www.everydayux.net/figma-2025-ai-report-insights-for-ux-designers/
- UserTesting podcast on the Figma report — https://www.usertesting.com/resources/podcast/craft-ai-and-figma-state-of-design
- Smashing, bull and bear case — https://www.smashingmagazine.com/2026/07/bull-and-bear-case-digital-design-age-ai/
- UXCC, new basics 2026 — https://uxcontent.com/the-new-basics-questions-content-designers-should-be-able-to-answer-in-2026
- UXCC, style guides — https://uxcontent.com/how-to-create-style-guide/
- UX Writing Hub workshop — https://uxwritinghub.com/ai-powered-ux-content-design-systems-workshop/
- Right Side Up, voice-and-tone guide with AI — https://www.rightsideup.com/blog/voice-and-tone-guide-with-ai
- Roger Wong, State of UX in 2026 — https://rogerwong.me/2026/02/state-of-ux-in-2026

**Courses**
- DeepLearning.AI, Agent Skills with Anthropic — https://www.deeplearning.ai/courses/agent-skills-with-anthropic
- DeepLearning.AI course catalogue — https://www.deeplearning.ai/courses
- Claude Code course write-up — https://medium.com/@PowerUpSkills/deeplearning-ai-just-released-their-free-claude-code-course-4e5a58d229c5
- Anthropic Academy overviews — https://aitoolsclub.com/10-free-anthropic-academy-ai-courses-to-master-claude-claude-code-and-mcp/ · https://www.datacamp.com/blog/best-claude-courses

**Localisation and ethics**
- Greek LLM evaluation (arXiv 2501.12826) — https://arxiv.org/pdf/2501.12826
- Meltemi Greek model (arXiv 2407.20743) — https://arxiv.org/html/2407.20743v1
- EU AI Act Article 50 — https://ai-act-law.eu/article/50/ · https://ai-act-text.com/article-50-ai-act
- Commission press release, Code of Practice — https://ec.europa.eu/commission/presscorner/api/files/document/print/en/ip_26_1328/IP_26_1328_EN.pdf
- Mayer Brown via Lexology on the Digital Omnibus — https://www.lexology.com/library/detail.aspx?g=f7b2a1c6-c053-45e5-b5d6-83411c67b0d9
- US Copyright Office, AI report Part 2 — https://www.copyright.gov/newsnet/2025/1060.html
- Authors Guild, AI best practices — https://authorsguild.org/resource/ai-best-practices-for-authors/
