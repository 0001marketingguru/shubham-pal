# Plan: Homepage Rebuild Using Shadcn / Shadcnspace / 21st Components

## Goal
Reconstruct the homepage into a high-converting, editorial-grade silo landing page using verified shadcn ecosystem components mapped from shadcnspace and 21st/Agent Elements registries.

## Current State Review
- Next.js 14 App Router + Tailwind CSS v4 + Framer Motion.
- Homepage rendered via `src/app/page.tsx` -> `HomeClient`.
- Existing sections: Navbar, ATF Hero, Trust Matrix, FAQ Accordion, Footer.
- Dark editorial aesthetic with Electric Gold accent, Oswald/Inter fonts, left-aligned prose, no decorative shadows.
- `src/components/sections/` contains one section per file.

## MCP / Component Sourcing Status
- Shadcnspace MCP: configured in `mcp.json` but not exposed to current tool runtime. Docs confirm tools: `listBlocks`, `listComponents`, `searchBlocks`, `getBlockInstall`.
- 21st / Agent Elements: not configured. Available config:
```json
"agent-elements": {
  "command": "npx",
  "args": ["-y", "shadcn@canary", "mcp"],
  "env": { "REGISTRY_URL": "https://agent-elements.21st.dev/r/index.json" }
}
```
- Web research surfaced strong blocks from shadcn.io: Hero Bento Grid, Features Dark Inset Bento Grid, Feature Cards, Accordion, Checklist Grid, Integration Grid.

## Proposed Component Map
| Section | Source / Pattern | Implementation Notes |
|---|---|---|
| ATF Hero | `hero-bento-grid` with custom asymmetric left/right split | Keep left content column, right metadata panel. Avoid centered headline. Use shadcn Card + Badge + Button. |
| Social Proof | `integration-grid` or `dark-inset-icon-grid` | Replace current logo wall. Monochrome brand marks with grayscale hover. |
| Silos Overview | `features-dark-inset-bento-grid` or `hero-feature-cards` | Maintain `lg:col-span` asymmetry (7/5/12). Use shadcn Card. Add corner accent bead. |
| Process / Steps | custom 3-step map | Keep 03-step flow aligned to Trust Matrix currently. |
| FAQ | `accordion` | Upgrade `faq-accordion.tsx` to shadcn Accordion while preserving motion variants. |
| Final CTA | Reuse footer CTA pattern | Ensure repeated action at basal fold. |

## Implementation Steps
1. **Add shadcn/ui dependencies / components**
   - Initialize shadcn CLI if `components.json` is missing.
   - Install base primitives: `button`, `badge`, `card`, `accordion`, `input`.
2. **Create / adjust section files**
   - `src/components/sections/atf-hero.tsx`: rewire to Card/Badge/Button with same asymmetric split.
   - `src/components/sections/trust-matrix.tsx`: split into `social-proof.tsx` + `process-steps.tsx`.
   - `src/components/sections/faq-accordion.tsx`: swap to shadcn Accordion.
   - `src/components/clients/home-client.tsx`: update imports and compose new sections.
3. **Preserve constraints**
   - Mobile-first at 375px baseline.
   - Zero horizontal overflow.
   - Left-aligned prose, uppercase display typography.
   - Accent reserved for CTAs / focus states.
   - Framer Motion limited to opacity + GPU transforms.
4. **Browser-in-the-loop validation**
   - Render locally and capture snapshots at 375px and 1440px.
   - Auto-fix padding, line-height, alignment, overflow utilities.
5. **Lint & typecheck**

## Open Questions / Tradeoffs
- Install shadcn primitives now via CLI versus building primitive-equivalent custom components to avoid CLI overhead?
- Retain existing motion variant patterns or simplify to match upgraded blocks?
- Add 21st/Agent Elements MCP config now or defer?

## Acceptance Criteria
- Homepage passes `next lint` and `next build`.
- No horizontal container overflow at 375px and 1440px.
- All CTAs point to `/book-call`.
- Prose blocks remain left-aligned with `leading-relaxed` minimum.
- Accent color used only for conversion actions and focus states.
- Navbar links strictly to the three service silos; `book-call` CTA visible everywhere except the clean booking terminal.
