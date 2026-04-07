# CreatorDeck
CreatorDeck helps creators build a sponsor-ready media kit from one working draft.

Most media kits get stitched together from analytics screenshots, old PDFs, rate cards, and notes in chat. CreatorDeck keeps the profile, audience story, packages, templates, and share view in one flow so a creator can update the deck quickly before sending it out.

## Features
- Guided builder for profile, audience, metrics, offers, and brand details
- Form validation with `react-hook-form` and `zod`
- Preview route for checking the full kit before sharing
- Sponsor-facing share mode with a cleaner presentation layout
- Template switching to change the visual direction without re-entering data
- Pricing page for package examples and offer structure
- Bundled examples at `/examples/[slug]` for quick reference
- Local persistence so the active kit survives refreshes
- Runs entirely from local data with no backend setup

Tech stack: Next.js 16 App Router, React 19, TypeScript, Tailwind CSS, Radix UI primitives, React Hook Form, Zod, Recharts, Framer Motion.

## Routes
- `/` landing page
- `/builder` edit the active media kit
- `/preview`, `/share` review and presentation modes
- `/templates`, `/pricing` template and package views
- `/examples/[slug]` bundled example kits

## Development
```bash
npm install
npm run dev
```
Open `http://localhost:3000`.

## Testing
`npm test`

Build with `npm run build`.
