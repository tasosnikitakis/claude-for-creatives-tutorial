# Prompt library

Every prompt from the tutorial, grouped by module, with space to add your
own. Keep this file in the repository and add to it whenever a prompt works
well. A prompt that works three times is a candidate for a skill.

## Module 0 — Orientation

**Process audit**
Here is my process for a recent project, step by step: [paste your list]. Classify each step as research, generation or judgement. For each generation step, say which Claude surface — the Claude app, Claude Design or Claude Code — would help and what I would still have to check myself. For each judgement step, explain why a human gate is essential there. Finish with the three steps where AI would save me the most time, in order.

## Module 1 — Projects and skills

**Themes from transcripts**
Here are six interview transcripts. Identify the recurring themes. For each theme give two verbatim quotes with the transcript name, flag anything only one person said, and tell me which theme you are least confident about and why.

**User models from themes**
From these themes, draft two user models. For each: goals, constraints, decision triggers, and the evidence lines that support each claim. No invented names, no stock imagery, no traits that are not in the data.

**Reverse-engineer the voice**
Analyse these five pieces of our writing. Extract voice principles, tone-by-context rules (success, error, empty state, marketing, support), terminology we use and avoid, the reading level, and three do/don't example pairs. Fill this template: [paste template]. Lead with examples rather than adjectives. Then rewrite the result as a Claude skill: a short file with a name, a one-line description that says when to apply it, and the rules in the order a writer would check them.

## Module 2 — Claude Design

**Onboarding flow**
Mock up a 3-screen onboarding flow. Goal: first booking in under two minutes. Audience: busy small-business owners on their phones, often interrupted. Content: [paste bullets]. Layout: one action per screen, a visible progress indicator, no modal dialogs. Use the attached design system. Art direction: calm, confident, no illustration. Ask me three clarifying questions before you start.

**Three directions**
Give me three directions for the hero of this landing page — editorial, product-led, and testimonial-led — in the same brand system. Keep the copy identical in all three; vary only composition, scale and image treatment. Note one risk for each direction.

**One-pager**
Design a one-page overview of [service]. Goal: a prospective client understands what we do and books a call. Audience: marketing managers who have never heard of us. Content: [headline, three benefits, one proof point, one call to action, contact details]. Layout: single column, readable at phone width, one accent colour. Art direction: [two sentences]. When you are done, list anything you invented that I should replace with real content.

## Module 3 — The desktop app

**Connect to GitHub**
I am a designer and this is my first Code session. Explain every command in one plain sentence before you run it. First, check that Git and the GitHub CLI are installed. Then sign me in to GitHub without asking me any questions in a terminal: run gh auth login --web --hostname github.com --git-protocol https, tell me the one-time code and the web address to open, and wait while I approve it in my browser.

**First repository**
Now, in this folder: start a Git repository, create a README.md that says what this project is, make the first commit with a clear message, create a private GitHub repository called hello-studio, and push to it. Tell me the repository's web address when you are done.

**Understanding what happened**
Show me the commit history as a short list. Then explain what a branch is using this repository as the example, and create one called try-new-headline. Do not change any files yet.

## Module 4 — Claude Code fundamentals

**Plan first**
Read brief.md and the attached design screenshot. Propose a file structure and a build plan for a static HTML page using only the colours and type in the screenshot. List any decisions you would have to guess at and ask me about them. Do not write any code yet.

**Build and verify**
Build it. When done, start a local preview and give me the address. Then take screenshots at 390px and 1440px wide, compare both against the design screenshot, list every difference you can see, and fix them before telling me it is finished.

**Interview me first**
Before building the pricing page, interview me — one question at a time — until you have enough to write a one-page brief. Then show me the brief and wait for my approval.

## Module 5 — Context engineering

**Extract tokens**
Extract the design tokens from this site into DESIGN.md: colours, type scale, spacing, radii, shadows and the main components. Give exact values and, for each token, one sentence on when to use it and when not to. Then refactor index.html to use only those tokens and show me the diff.

**Write the brief**
Rewrite CLAUDE.md for this project in under sixty lines. Sections: Project, Commands, Design rules, Art direction, Workflow. Mark the three most important rules IMPORTANT. Use @DESIGN.md for tokens and the brand-voice skill for copy; do not repeat their contents. Ask me anything you cannot infer from the files.

## Module 6 — Content systems

**Every state of a form**
Using the brand-voice skill and content/microcopy-matrix.md, write copy for every state of the contact form: field labels, helper text, the success message, three error types (empty required field, invalid email, server failure), and the empty state for the message history. Return it as a table with a character count per line. Flag any line where you had to choose between two rules in the skill.

**Create the editorial-qa helper**
Create a read-only subagent called editorial-qa in .claude/agents/. It reviews any text I point it at against the brand-voice skill, content/microcopy-matrix.md and content/glossary-el.md, and reports: terminology errors, lines over their length limit, claims that need a source, and reading level. It must not edit files. Then run it on docs/contact.html and show me the report.

**Greek pass**
Translate the contact-form copy to Greek using content/glossary-el.md and the Greek rules in the brand-voice skill. Put English and Greek side by side. Flag every line where the tone or idiom may not carry over and offer a transcreation. Mark the file as awaiting native review; do not publish it.

## Module 7 — Figma MCP

**Implement a frame**
Use the Figma MCP to read this frame: [paste link]. Implement it as a section of index.html using only our DESIGN.md tokens and existing components; where the frame uses a value we do not have, use the nearest token and tell me. Screenshot the result at 1440px, compare it to the frame, and list the differences.

**Back to the canvas**
Send the hero section we just built to Figma as a new page called "Hero — coded v1". Then tell me what came across as editable layers and what came across as flattened, so I know what I can change on the canvas.

## Module 8 — Workflows and publishing

**The reviewer**
Create a read-only subagent called ux-reviewer in .claude/agents/ with only Read, Grep and Glob tools. It reviews the files I name against Nielsen's ten usability heuristics, WCAG 2.2 AA (contrast, semantic HTML, alt text, keyboard focus order) and the brand-voice skill. It reports issues grouped by severity — blocker, major, minor — each with file and line, the criterion violated, and a proposed fix. It never edits.

**The guaranteed check**
Add a hook that runs an HTML validation and accessibility check on any file in docs/ after every edit, and shows me the result. Explain where the hook lives, what event triggers it, and how I would turn it off. Use a tool that needs no sign-up.

**The workflow skill**
Create a skill called new-page. When I run /new-page with a brief, it: reads the brief; applies DESIGN.md, CLAUDE.md and the brand-voice skill; builds the page; starts the preview and takes screenshots at 390px and 1440px; runs the ux-reviewer subagent; shows me the screenshots and the review; then STOPS and waits for my approval before committing. Write the skill so each step is visible to me as it happens.

**Publish**
This site lives in docs/. Make sure docs/.nojekyll exists and every internal link is relative. Commit and push. Then walk me through enabling GitHub Pages from the main branch and the docs folder, one step at a time, and give me the address when it is live.

## Module 9 — Capstone

**The runbook**
Read the session history and the files in .claude/. Write docs/runbooks/studio-playbook.md describing how this project was done: purpose, inputs (which context files), the steps in order, every point where I stopped to approve, the definition of done, and a sample output. Mark anything you inferred rather than observed, so I can correct it.

## Your own

**[name]** — [when it works]
[prompt]
