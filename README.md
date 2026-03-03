# Mina Nord Portfolio Frontend

Next.js App Router portfolio site with section-based components, typed content modules, CSS Modules, and a server-action contact form.

## Scripts

- `npm run dev` - start local development server
- `npm run build` - create production build
- `npm run start` - run production server
- `npm run lint` - run ESLint

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- CSS Modules + shared design tokens
- Server Actions + Zod validation

## Project Structure

- `src/app/page.tsx` - composition-only home page
- `src/app/actions/contact.ts` - contact server action
- `src/components/sections/*` - section components and local styles
- `src/components/layout/SiteHeader.tsx` - sticky header and theme toggle
- `src/components/forms/ContactForm.tsx` - client form with action state
- `src/content/*` - typed section content
- `src/lib/types/*` - content and form contracts
- `src/lib/validation/contactSchema.ts` - Zod schema
- `src/lib/contact/*` - pluggable contact provider
