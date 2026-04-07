# CreatorDeck

Premium sponsor-ready media kit builder for creators and agencies.

CreatorDeck is a polished Next.js portfolio-style web app that turns creator data into a commercially credible pitch surface. It ships with a premium landing page, a live builder, public preview flows, sample kits, template switching, pricing examples, and a presentation mode designed for sponsor calls.

## Product Pitch

Creators usually send messy PDFs, Notion pages, or outdated one-sheets when a brand asks for a media kit. CreatorDeck gives them a cleaner answer:

- premium live-editable media kits
- refined sponsor package presentation
- audience proof with charts
- partner logos and testimonial blocks
- elegant template switching for different commercial moods
- a presentation/share route for calls and internal reviews

The result feels like a product a creator manager, talent agency, or premium solo creator could actually sell.

## Screenshots

Placeholder targets for future screenshots:

- `docs/screenshots/landing-page.png`
- `docs/screenshots/builder-workbench.png`
- `docs/screenshots/public-preview.png`
- `docs/screenshots/template-gallery.png`
- `docs/screenshots/share-mode.png`

## Features

- Premium landing page with strong commercial positioning and animated product sections
- Live media kit builder powered by `react-hook-form` and `zod`
- Local persisted demo state with bundled example creator kits
- Audience stats cards and Recharts visualizations
- Sponsor package cards with featured offer highlighting
- Partner logo blocks and testimonial proof sections
- Template chooser with three premium visual directions
- Preview route for public-facing presentation
- Share mode for clean screen-sharing during sponsor calls
- Sample creator kits at dynamic example routes
- Dark/light mode support with `next-themes`

## Routes

- `/` landing page
- `/builder` live editing workspace
- `/preview` public-facing preview
- `/templates` template/theme chooser
- `/pricing` sponsor package examples and monetization framing
- `/examples/[slug]` bundled sample creator kits
- `/share` presentation/share mode

## Tech Stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS
- shadcn/ui component patterns
- Framer Motion
- Recharts
- react-hook-form
- zod
- next-themes
- Lucide icons

## Local Development

Requirements:

- Node.js 20+ recommended
- npm

Install and run:

```bash
npm install
npm run dev
```

Production verification:

```bash
npm run lint
npm run typecheck
npm run build
```

## Commercial Angle

CreatorDeck is positioned as a premium revenue-ops tool for creators and agencies, not a generic portfolio toy. The monetization story is straightforward:

- solo creator subscription for one active media kit
- studio tier for creator managers and boutique teams
- agency tier for multi-kit rosters and white-label presentation
- future paid upgrades for exports, analytics, CRM syncing, brand portals, and share tracking

## Future Upgrades

- Auth and cloud persistence
- PDF export and print-optimized layouts
- Share analytics and sponsor engagement tracking
- White-label agency workspaces
- Brand portal links with comments and approvals
- CRM and creator-management integrations
- AI-assisted package copy generation
- Media uploads for logos, headshots, and case studies

## Notes

- The app is intentionally backend-free for now and uses local persisted state for demos.
- Bundled sample kits are included so the product feels alive immediately after startup.
- The current visual system is designed to feel premium, sponsor-ready, and commercially credible rather than student-project generic.
