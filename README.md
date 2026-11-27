# Ink & Interface — Design Agency Homepage

A responsive, single-page homepage for a fictional creative design studio, built as a Next.js internship assignment.

- **Live demo:** `<add your Vercel link here>`
- **Repository:** `<add your GitHub link here>`

## Sections

1. **Hero** — agency name, tagline, call-to-action buttons, and a CSS-built art panel
2. **Services** — 4 cards (Branding, Web design, Development, Arts & Play), each with an icon, title and description
3. **Portfolio** — responsive grid of 4 projects with image, title and hover effects
4. **Contact** — name, email and message fields with validation and a success message

Also included: a responsive navbar with a mobile menu, and a footer.

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router) and React 19, using functional components only
- Custom CSS in `app/globals.css` (Tailwind CSS v4 is imported for its base reset; layout and styling are hand-written)
- [lucide-react](https://lucide.dev/) for icons
- `next/image` for optimized portfolio images

## Getting started

Requires Node.js 20.9 or newer.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
# open http://localhost:3000

# 3. Check lint and a production build
npm run lint
npm run build
npm start
```

## Project structure

```
app/
  layout.js        # Root layout + SEO metadata
  page.js          # Home page: assembles the sections
  globals.css      # All styles
components/
  Navbar.jsx
  Hero.jsx
  Services.jsx
  Portfolio.jsx
  Contact.jsx
  Footer.jsx
next.config.ts     # Allows Unsplash images in next/image; Tailwind loader for Turbopack
```

## Extras beyond the requirements

- SEO metadata (title, description, Open Graph, Twitter card)
- Image optimization with `next/image`
- CSS animations, with `prefers-reduced-motion` respected
- Smooth scrolling between sections
- Mobile-friendly navigation menu
- Form validation (required fields, email format) and an accessible success message

## Assumptions

- The contact form is front-end only: it validates input and shows a success message, but does not send data to a server.
- Portfolio projects and images are placeholders (Unsplash photos) for a fictional studio.
- Tested at screen widths from 320px to 1440px.
