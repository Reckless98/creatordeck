# CreatorDeck

CreatorDeck is a Next.js app for building creator media kits that feel presentable in a sponsor conversation, not just in a portfolio gallery.

## What It Includes

- A landing page that introduces the product and links into the working app
- A live builder backed by `react-hook-form` and `zod`
- Preview and presentation routes for sponsor-facing review
- Bundled example kits at `/examples/[slug]`
- Template switching, pricing examples, and local persistence

## Routes

- `/` overview
- `/builder` edit the active kit
- `/preview` review the current kit
- `/share` simplified presentation mode
- `/templates` switch visual direction
- `/pricing` inspect package examples
- `/examples/[slug]` open bundled sample kits

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui primitives
- Recharts
- Framer Motion

## Local Development

Requirements:

- Node.js 20+
- npm

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Run the full verification set:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

## Notes

- The app is intentionally backend-free today and stores the active kit in local storage.
- Example kits are included so the builder, preview, and share routes are usable immediately.
- Invalid example slugs resolve to a clean not-found state.

## License

MIT
