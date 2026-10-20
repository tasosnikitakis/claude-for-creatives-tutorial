/* Shared navigation, prompt copy buttons and previous/next links.
   Pages stay readable without JavaScript; this only adds conveniences.
   To add or rename a module, edit the MODULES list below and nothing else. */

const MODULES = [
  { file: "modules/00-orientation.html",        title: "Orientation: the new creative stack" },
  { file: "modules/01-claude-app-projects.html", title: "Claude as creative partner: Projects and skills" },
  { file: "modules/02-claude-design.html",      title: "Claude Design: prompt to prototype" },
  { file: "modules/03-tooling.html",            title: "Your studio in the desktop app" },
  { file: "modules/04-claude-code.html",        title: "Claude Code fundamentals" },
  { file: "modules/05-context-engineering.html", title: "Context engineering" },
  { file: "modules/06-content-systems.html",    title: "Content systems in Claude Code" },
  { file: "modules/07-figma-mcp.html",          title: "Figma round-trip with MCP" },
  { file: "modules/08-workflows-publishing.html", title: "Automated workflows and publishing" },
  { file: "modules/09-capstone.html",           title: "Capstone: the studio playbook" }
];

const EXTRAS = [
  { file: "templates.html", title: "Templates and downloads" },
  { file: "glossary.html",  title: "Glossary" },
  { file: "resources.html", title: "Resources" }
];

(function () {
  const root = document.body.dataset.root || "./";
  const here = location.pathname.split("/").slice(-2).join("/");

  function isCurrent(file) {
    return here.endsWith(file) || (file === "index.html" && /\/$/.test(location.pathname));
  }

  // Navigation
  const nav = document.getElementById("site-nav");
  if (nav) {
    const modules = MODULES.map((m, i) =>
      `<li><a href="${root}${m.file}"${isCurrent(m.file) ? ' aria-current="page"' : ""}><span class="num">${i}</span>${m.title}</a></li>`
    ).join("");
    const extras = EXTRAS.map(m =>
      `<li><a href="${root}${m.file}"${isCurrent(m.file) ? ' aria-current="page"' : ""}>${m.title}</a></li>`
    ).join("");
    nav.innerHTML = `
      <details>
        <summary>Contents</summary>
        <a class="brand" href="${root}index.html">Claude for creatives</a>
        <p class="nav-group">Modules</p>
        <ol>${modules}</ol>
        <p class="nav-group">Reference</p>
        <ul>${extras}</ul>
      </details>`;
    if (window.matchMedia("(min-width: 900px)").matches) {
      nav.querySelector("details").open = true;
    }
  }

  // Copy buttons on prompt panels
  document.querySelectorAll(".prompt").forEach(panel => {
    const text = panel.querySelector("p");
    if (!text || !navigator.clipboard) return;
    const btn = document.createElement("button");
    btn.className = "copy";
    btn.type = "button";
    btn.textContent = "Copy";
    btn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(text.textContent.trim());
        btn.textContent = "Copied";
        setTimeout(() => (btn.textContent = "Copy"), 1500);
      } catch (e) {
        btn.textContent = "Select and copy";
      }
    });
    panel.appendChild(btn);
  });

  // Previous / next
  const pager = document.getElementById("pager");
  if (pager) {
    const idx = MODULES.findIndex(m => isCurrent(m.file));
    if (idx >= 0) {
      const prev = idx > 0 ? MODULES[idx - 1] : null;
      const next = idx < MODULES.length - 1 ? MODULES[idx + 1] : null;
      pager.innerHTML =
        (prev ? `<a class="prev" href="${root}${prev.file}"><span>Previous</span><strong>${idx - 1}. ${prev.title}</strong></a>` : "") +
        (next ? `<a class="next" href="${root}${next.file}"><span>Next</span><strong>${idx + 1}. ${next.title}</strong></a>`
              : `<a class="next" href="${root}index.html"><span>Finished</span><strong>Back to the start</strong></a>`);
    }
  }
})();
