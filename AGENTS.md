# AGENTS.md — Workspace Project Rules & Standards

## 1. Core Workflow Directives

### Section-by-Section Building Rule (Mandatory)
* **Iterative Execution**: For any landing page, portfolio, or web design project, agents MUST build the site **one section at a time** (fold-by-fold).
* **No Bulk Overhaul Dumps**: NEVER generate or edit all page sections at once in a single massive prompt cycle.
* **Build & Verify Cycle**:
  1. Implement single target section component.
  2. Verify build integrity (`npm run build` / `npx tsc --noEmit`).
  3. Present section to user for review & feedback.
  4. Wait for explicit approval before proceeding to the next section.

---

## 2. High-End Visual Design & Aesthetic Rules

* **Double-Bezel Architecture**: All cards, containers, and code blocks must use nested Doppelrand framing (outer shell `bg-white/5 p-2 rounded-[2rem]` + inner core `rounded-[calc(2rem-0.5rem)]`).
* **Button-in-Button CTAs**: Primary action CTAs must use pill buttons (`rounded-full`) with a trailing arrow icon nested inside its own circular glass wrapper.
* **Zero Em-Dashes**: Strictly ZERO em-dash (`—`) characters anywhere in headlines, body copy, eyebrows, CTAs, alt-text, or captions.
* **Single Color Accent Lock**: Maintain one locked accent color (e.g. `#00e599` Electric Emerald) across all sections on an off-black surface (`#09090b` / `#050505`).
* **Macro-Whitespace**: Section paddings must be strictly `py-24` to `py-32` to allow the layout to breathe heavily.
* **Viewport Stability**: Always use `min-h-[100dvh]` for full-screen sections (never `h-screen` to prevent iOS address bar layout jumps).
* **Fluid Motion Physics**: Custom cubic-bezier transitions (`transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]`).
