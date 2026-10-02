# Engineer portfolio — Next.js + Tailwind CSS

A conversion of the supplied HTML, CSS, and JavaScript portfolio, preserving its content, responsive layout, project illustrations, and interactions.

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm ci
npm run dev
```

Open http://localhost:3000.

```bash
npm run lint
npm run build
npm start
```

## Project structure

- `src/app/page.jsx`: assembles the page using the Next.js App Router.
- `src/app/layout.jsx`: document layout, page metadata, favicon, and theme color.
- `src/app/globals.css`: Tailwind CSS v4 import, theme tokens, fonts, and small global accessibility rules.
- `src/components/sections/`: HeroSection, WorkSection, ApproachSection, AboutSection, and ConnectSection.
- `src/components/projects/`: FeaturedProject, OpsDeskProject, and FoodiProject, plus their separate interface previews.
- `src/components/ui/`: Header, Footer, shared native Modal, CaseStudyDialog, and BillingDemoDialog.
- `src/data/portfolio.js`: case-study content and the professional introduction.
- `src/data/invoices.js`: sample invoice records, filters, and currency/total helpers.

Components use Tailwind utilities, including arbitrary values for the original design's exact measurements. The theme exposes ink, muted, paper, line, and lime colors. There is no legacy stylesheet or DOM event script.

Static sections render as Server Components. WorkSection and ConnectSection are Client Components because they own interactive state; their child project components share that client boundary. Native dialogs preserve Escape handling, modal focus trapping, and focus restoration, with backdrop closing and scroll locking.

The billing demo supports filtering, marking the pending invoice as paid, recalculating outstanding totals, empty results, and reset. Demo changes persist while the page remains mounted and reset on a full reload. No backend or payment integration is included. Clipboard errors reveal selectable introduction text.

The original Google Fonts import is retained. If fonts cannot load, the page uses sans-serif fallbacks. No environment variables are required.

## Validation

Production build and ESLint passed. React interaction checks in a simulated DOM passed for all case studies, modal closing, invoice filters/status changes/totals/session persistence/reset, and clipboard success/fallback. Browser visual checks and native dialog focus behavior could not be verified in the conversion environment because the browser download failed.
