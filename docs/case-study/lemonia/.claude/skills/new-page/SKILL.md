---
name: new-page
description: Build a new page of the site from a brief, applying the design system and brand voice, with review and screenshots, and stop for approval before committing.
---

Purpose: turn a brief into a reviewed, on-system page without skipping the checks.

Inputs: the brief; CLAUDE.md; DESIGN.md; UX.md if present; the brand-voice skill; content/microcopy-matrix.md.

Steps — say which step you are on as you go:
1. Read the brief and every input above. If the brief is missing the goal, the audience, the sections or the call to action, ask for them and stop.
2. Propose a one-paragraph plan: file name, sections, which components from DESIGN.md, which copy states are needed. Wait for approval.
3. Build the page using only DESIGN.md tokens and existing components. Write every copy element against the brand-voice skill and the matrix. Every image gets alt text. Links are relative.
4. Start the local preview. Take screenshots at 390px and 1440px.
5. Run the ux-reviewer subagent on the new file. If an editorial-qa subagent exists, run it on the copy.
6. Show the screenshots and both reports. List anything you invented (placeholder content, assumed facts) that must be replaced.
7. STOP. Do not commit. Wait for one of: "approve", "change: …", or "discard".
8. On "approve": commit with a message that names the page and the brief. On "change": apply it and return to step 4. On "discard": delete the file and say so.

Definition of done: page passes the ux-reviewer with no blockers or majors; screenshots match the brief; copy has no unresolved matrix violations; the person has said "approve".

Sample output (step 6):
"Screenshots: [390px] [1440px]. ux-reviewer: 0 blockers, 1 major (contrast of helper text, line 42 — fix proposed), 2 minor. editorial-qa: 1 must-fix (unsourced '98% satisfaction', line 18). Invented: the testimonial on line 31 is a placeholder. Waiting for approve / change / discard."
