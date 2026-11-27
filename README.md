# Ink & Interface — Design Agency Homepage
A responsive, single-page homepage for a fictional creative design studio, built as a Next.js internship assignment.

- **Live demo:** `<https://ink-and-interface-internship.vercel.app/>`
- **Repository:** `<https://github.com/priyankapri24/ink-and-interface-internship>`

## Sections

1. **Hero** — agency name, tagline, call-to-action buttons, and a CSS-built art panel
2. **Services** — 4 cards (Branding, Web design, Development, Arts & Play), each with an icon, title and description
3. **Portfolio** — responsive grid of 4 projects with image, title and hover effects
4. **Contact** — name, email and message fields with validation and a success message

Also included: a responsive navbar with a mobile menu, and a footer.
------------------------------------------------------------------------

## Table of contents

-   [Overview](#overview)
-   [Features](#features)
-   [Tech stack](#tech-stack)
-   [Project structure](#project-structure)
-   [Prerequisites](#prerequisites)
-   [Getting started](#getting-started)
-   [Available scripts](#available-scripts)
-   [How the application is
    organized](#how-the-application-is-organized)
-   [Customization](#customization)
-   [Assumptions and implementation
    notes](#assumptions-and-implementation-notes)
-   [Potential future improvements](#potential-future-improvements)
-   [Deployment](#deployment)


------------------------------------------------------------------------

## Overview

Ink & Interface is presented as an independent creative studio working
across branding, web design, development, and experimental creative
work. The website is a single-page portfolio experience with a clear
visual identity:

-   Warm off-white backgrounds and dark typography.
-   Lime-green and coral accents.
-   Oversized editorial headings and compact studio-style labels.
-   CSS-built geometric artwork, orbit elements, and motion effects.
-   Responsive navigation and layouts for smaller screens.

The homepage brings the main sections together in this order:

1.  Navigation
2.  Hero / studio introduction
3.  Services
4.  Selected work / portfolio
5.  Contact
6.  Footer

The page uses in-page anchor links to move between these sections.

## Features

### Studio introduction

-   Large hero headline and studio positioning statement.
-   Calls to action linking to the portfolio and contact sections.
-   Decorative geometric artwork created with HTML and CSS.
-   Animated shapes and visual details.

### Navigation

-   Brand link returns to the homepage.
-   Desktop navigation links to Services and Selected Work.
-   Contact call to action links to the contact section.
-   Mobile menu opens and closes using React state.
-   Mobile navigation closes after a navigation link is selected.

### Services

Four service categories are presented:

  Service       Description / focus
  ------------- -----------------------------------------------
  Branding      Identity and strategy
  Web design    UX, UI, and digital experience
  Development   Frontend development and interaction
  Arts & Play   Experimental visuals and creative exploration

Each service card links to the contact section.

### Portfolio

The portfolio contains four sample project entries:

-   **Sunday Objects** --- Branding / E-commerce
-   **Form & Function** --- UI / UX / Web
-   **Morrow Coffee** --- Branding / Packaging
-   **Offbeat Studio** --- Development / Design

Each entry includes a category, project type, short description, year,
and image. Selecting a project visual leads to the contact section
rather than to a separate case-study page.

### Contact

-   Name, email, and message fields.
-   Required-field validation provided by native HTML form attributes.
-   Email field uses the browser's email input validation.
-   On submit, the component prevents the browser's default form
    navigation, displays a confirmation state, and clears the fields.
-   A `mailto:` link provides a direct email option.

**Important:** The current form handler only changes local React state.
It does not call an API, send an email, or persist submissions.

### Footer

-   Closing studio statement and call to action.
-   Navigation links to the main page sections.
-   Studio email and location text.
-   Social links currently point to the general Instagram, Behance, and
    LinkedIn homepages.
-   Back-to-top link.

### Responsive styling and motion

-   CSS media queries adapt the navigation, hero, and layouts to smaller
    viewports.
-   Smooth scrolling is enabled.
-   Hover transitions and decorative CSS animations add motion to
    selected elements.
-   The hero and footer artwork are constructed from styled elements
    rather than requiring separate illustration assets.

------------------------------------------------------------------------

## Tech stack

The following technologies and libraries are identifiable in the
supplied source files.

  -----------------------------------------------------------------------
  Technology                          Usage
  ----------------------------------- -----------------------------------
  [Next.js](https://nextjs.org/)      React framework; App Router-style
                                      `layout.js` and `page.js` files

  [React](https://react.dev/)         Component rendering and client-side
                                      state

  JavaScript (JSX)                    Application components and page
                                      composition

  CSS                                 Custom layout, colors, responsive
                                      rules, transitions, and animations

  [Tailwind                           Imported through
  CSS](https://tailwindcss.com/)      `@import "tailwindcss";` in the
                                      global stylesheet

  [Lucide React](https://lucide.dev/) Interface icons such as arrows,
                                      menu, sparkles, and service icons

  `next/image`                        Optimized image component used by
                                      the portfolio

  `next/font/google`                  Loads the Space Grotesk font from
                                      Google Fonts
  -----------------------------------------------------------------------

### Fonts and visual tokens

The root layout loads **Space Grotesk** and exposes it through the
`--font-space-grotesk` CSS variable.

The global stylesheet defines the main visual tokens:

  -----------------------------------------------------------------------------
  Token                   Value                         Purpose
  ----------------------- ----------------------------- -----------------------
  `--background`          `#f5f3eb`                     Main warm off-white
                                                        background

  `--foreground`          `#171714`                     Main dark text

  `--accent`              `#c5f467`                     Lime accent

  `--muted`               `#74746c`                     Muted text

  `--font-display`        `var(--font-space-grotesk)`   Display font reference
  -----------------------------------------------------------------------------

Additional coral (`#ff9275`) and olive tones are used in decorative
styling.

> The exact dependency versions are not visible in the supplied source
> files. Use the versions declared in the project's `package.json` and
> lockfile as the source of truth.

------------------------------------------------------------------------

## Project structure

The supplied files indicate the following intended structure. The
component imports in `app/page.js` expect the component files to be
available in a sibling `components` directory.

``` text
project-root/
├── app/
│   ├── layout.js
│   ├── page.js
│   └── globals.css
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Services.jsx
│   ├── Portfolio.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── public/
│   └── favicon.ico
├── package.json
├── package-lock.json        # or another package-manager lockfile
└── README.md
```

**File placement note:** The uploaded source set includes the files, but
not their original folder paths. The tree above is inferred from the
relative imports in `page.js` and `layout.js`. In particular, `page.js`
imports components from `../components/...`, while `layout.js` imports
`./globals.css`. Place the files in a directory arrangement that makes
those imports resolve. The favicon was supplied, but its original
location and whether it is configured as an App Router icon are not
established by the provided code.

### Main files

  -----------------------------------------------------------------------
  File                                Responsibility
  ----------------------------------- -----------------------------------
  `app/layout.js`                     Root HTML layout, font loading,
                                      global stylesheet import, and page
                                      metadata

  `app/page.js`                       Composes the homepage from the six
                                      page components

  `app/globals.css`                   Global styles, design tokens,
                                      section styling, responsive
                                      breakpoints, and animations

  `components/Navbar.jsx`             Main navigation and mobile menu

  `components/Hero.jsx`               Hero headline, calls to action, and
                                      decorative artwork

  `components/Services.jsx`           Four service cards and their
                                      descriptions

  `components/Portfolio.jsx`          Sample project data and portfolio
                                      presentation

  `components/Contact.jsx`            Contact form and client-side
                                      success state

  `components/Footer.jsx`             Closing content, section links,
                                      studio details, and social links
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## Prerequisites

Before running the project, install:

-   **Node.js** --- use a current supported LTS release compatible with
    the Next.js version in the project.
-   **npm** (included with Node.js), or the package manager used by the
    repository.
-   A code editor such as Visual Studio Code.
-   A modern browser.

Check your installed versions:

``` bash
node --version
npm --version
```

The supplied files do not include `package.json` or a lockfile, so the
exact Node.js requirement, dependency versions, and npm scripts cannot
be confirmed from the source provided.

------------------------------------------------------------------------

## Getting started

### 1. Get the project files

Clone the repository if it is hosted in Git:

``` bash
git clone <your-repository-url>
cd <your-project-folder>
```

Alternatively, place the supplied source files into the project
structure described above.

### 2. Check the project manifest

Make sure the project root contains a `package.json` with the required
dependencies and scripts. The source imports indicate that the
application needs at least:

-   `next`
-   `react`
-   `react-dom`
-   `lucide-react`
-   `tailwindcss`

The project also needs the appropriate Tailwind CSS integration for the
installed Next.js setup. Do not assume dependency versions from this
README; use the versions in the original project manifest if available.

If you are reconstructing the project from only the supplied source
files, create or restore the correct `package.json` before installing
dependencies. The commands below assume that the manifest already
exists.

### 3. Install dependencies

For an npm project with a `package-lock.json`:

``` bash
npm ci
```

If there is no npm lockfile but a valid `package.json` is present:

``` bash
npm install
```

Use the equivalent install command if the project uses pnpm, Yarn, or
another package manager.

### 4. Start the development server

If the project manifest defines the conventional Next.js development
script:

``` bash
npm run dev
```

Open <http://localhost:3000> in your browser.

If that command is unavailable, inspect the `scripts` section of
`package.json`. The exact scripts were not included in the supplied
files.

### 5. Create a production build

When the project is ready for production, run the build script defined
by the manifest. For a conventional Next.js setup:

``` bash
npm run build
```

To run the built application locally, the project commonly uses:

``` bash
npm run start
```

These commands depend on the corresponding scripts being present in
`package.json`.

------------------------------------------------------------------------

## Available scripts

The source files do not include `package.json`, so the actual script
names cannot be verified. A typical Next.js project may define scripts
similar to these:

  -----------------------------------------------------------------------
  Command                             Typical purpose
  ----------------------------------- -----------------------------------
  `npm run dev`                       Starts the local development server

  `npm run build`                     Builds the production application

  `npm run start`                     Starts the production server after
                                      a build

  `npm run lint`                      Runs the configured linting tool,
                                      if one is installed and configured
  -----------------------------------------------------------------------

Treat this table as a guide, not confirmation that every script exists
in this project. Check `package.json` before using a command.

------------------------------------------------------------------------

## How the application is organized

### Root layout

`layout.js`:

-   Imports the global stylesheet.
-   Loads Space Grotesk using `next/font/google`.
-   Sets the document language to English.
-   Defines the browser title and description metadata.
-   Wraps the route content in the root HTML and body elements.

### Homepage composition

`page.js` imports and renders the components in sequence:

``` jsx
<Navbar />
<Hero />
<Services />
<Portfolio />
<Contact />
<Footer />
```

This keeps the homepage organized into reusable section components.

### Client-side components

`Navbar.jsx` and `Contact.jsx` use React's `useState` hook and are
marked with `"use client"`.

-   The navigation component stores whether the mobile menu is open.
-   The contact component stores the form field values and whether the
    demo confirmation screen should be displayed.

The other supplied sections are rendered as regular components and do
not show client-side state in the provided source.

### Styling

The global stylesheet contains the visual system for the site,
including:

-   Global element defaults and CSS variables.
-   Navigation and mobile-menu styles.
-   Hero layout and geometric artwork.
-   Responsive media queries.
-   Hover states, keyframe animations, and section-specific styling.

Keep the global stylesheet imported from the root layout so the section
styles are available throughout the page.

------------------------------------------------------------------------

## Customization

### Update studio details

Search the components for the current studio copy and replace it with
your own:

-   Studio name and tagline: `Navbar.jsx`, `Hero.jsx`, and `Footer.jsx`.
-   Contact email: `Contact.jsx` and `Footer.jsx`.
-   Location: `Footer.jsx`.
-   Page title and description: `layout.js`.

If the email address changes, update every occurrence so the contact
section and footer remain consistent.

### Update services

Edit the `services` array in `Services.jsx`. Each item contains a
number, title, description, tags, icon, CSS class, and artwork type.

When adding or removing a service, check the card styling and any number
labels that assume four services.

### Update portfolio projects

Edit the `projects` array in `Portfolio.jsx`. Each project includes:

-   `number`
-   `title`
-   `category`
-   `type`
-   `description`
-   `image`
-   `className`
-   `year`

Replace the sample Unsplash image URLs with images you have permission
to use. Check that each image has an appropriate alternative text
description and that remote image host configuration is correct for the
installed Next.js version if required by `next/image`.

The current project cards link to `#contact`. If you want individual
case studies, add routes and update the project links.

### Update colors and typography

Change the CSS variables near the beginning of `globals.css` to adjust
the core palette. The Space Grotesk font is configured in `layout.js`;
if you change fonts, update the font import and the CSS variable
consistently.

### Update social destinations

The social links in `Footer.jsx` currently point to the general platform
homepages. Replace them with the studio's actual profile URLs before
publishing.

### Update the favicon

Replace the supplied `favicon.ico` with the final brand icon and place
it in the location expected by your Next.js app configuration. Confirm
that it appears in the browser tab after running the application.

------------------------------------------------------------------------

## Assumptions and implementation notes

The following points are important when running, evaluating, or
extending the supplied project.

1.  **The website is a single-page studio portfolio.** The supplied
    `page.js` composes all sections on one homepage. No separate
    service, project-detail, or contact routes are included in the
    supplied files.

2.  **The project uses the Next.js App Router pattern.** The `layout.js`
    and `page.js` files use the conventions associated with the App
    Router. The original repository configuration was not supplied, so
    the exact Next.js version is unknown.

3.  **The directory tree is inferred.** The component import paths
    suggest an `app` directory and a sibling `components` directory.
    Adjust file placement or import paths to match the actual
    repository.

4.  **The dependency manifest is missing from the supplied source set.**
    No `package.json`, lockfile, TypeScript configuration, or Next.js
    configuration was provided. Dependency versions, scripts, and
    image-host settings therefore need to be checked in the complete
    project.

5.  **The contact form is a front-end demonstration.** The form
    validates required fields in the browser, switches to a success
    message, and clears the form. It does not deliver messages, save
    submissions, or connect to a backend service.

6.  **The email link is separate from form submission.** The `mailto:`
    link opens the visitor's configured email application. It is the
    only explicit email contact mechanism in the supplied
    implementation.

7.  **Portfolio entries are sample content.** The four project names,
    descriptions, dates, and Unsplash images are hard-coded in the
    component. Confirm that the work and imagery accurately represent
    the studio before presenting them as real client projects.

8.  **External image delivery is assumed.** Portfolio images are loaded
    from Unsplash URLs through `next/image`. Depending on the Next.js
    configuration and version, the Unsplash host may need to be allowed
    in `next.config.js` using the supported remote-image configuration.

9.  **Social URLs are placeholders.** Instagram, Behance, and LinkedIn
    links currently lead to their platform homepages, not to verified
    studio accounts.

10. **The supplied favicon's integration is unconfirmed.** The icon file
    was provided, but the source does not show where it is stored or how
    it is registered with Next.js metadata.

11. **No database, authentication, analytics, or content-management
    system is shown.** The supplied components do not import or
    configure these services.

12. **No automated test suite is included in the supplied files.** Add
    tests and quality checks if the project needs a formal production
    workflow.

------------------------------------------------------------------------

## Potential future improvements

These are suggested enhancements, not features currently implemented in
the supplied code.

### Functional improvements

-   Connect the contact form to a server-side route or a trusted form
    service.
-   Add server-side validation, spam protection, and clear error states.
-   Send form submissions to the studio's email or store them in a
    database.
-   Replace generic social links with official profile URLs.
-   Add dedicated project-detail pages with case studies and project
    outcomes.

### User experience and accessibility

-   Add a visible success and failure state for real form delivery.
-   Review keyboard navigation and focus indicators for all interactive
    elements.
-   Check color contrast across text, buttons, and accent backgrounds.
-   Respect the `prefers-reduced-motion` setting for animated elements.
-   Test the mobile menu with keyboard and screen-reader workflows.
-   Review image alternative text and ensure decorative visuals are
    hidden from assistive technology where appropriate.

### Performance and search visibility

-   Confirm that remote image domains are configured correctly.
-   Use appropriately sized, compressed portfolio images.
-   Add Open Graph and social-sharing metadata.
-   Add a favicon and other metadata icons through the Next.js app
    conventions.
-   Run a production build and test the deployed site on mobile and
    desktop.

### Maintainability

-   Add a `package.json` and commit the package-manager lockfile.
-   Add linting and formatting configuration.
-   Add automated component or end-to-end tests.
-   Consider moving project and service content into separate data files
    or a CMS if the site grows.

------------------------------------------------------------------------

## Deployment

This project can be deployed to a hosting platform that supports
Next.js.

A typical deployment workflow is:

1.  Push the complete project to a Git repository.
2.  Import the repository into a Next.js-compatible hosting provider,
    such as Vercel.
3.  Configure the correct package manager and build command based on
    `package.json`.
4.  Confirm the required environment variables. None are referenced by
    the supplied source files.
5.  Deploy and test the production URL.

Before publishing, verify:

-   The production build completes successfully.
-   The favicon and portfolio images load.
-   The contact email and social links are correct.
-   The contact form's behavior is clearly understood and, if needed,
    connected to a real delivery service.
-   The responsive layout works across supported screen sizes.

------------------------------------------------------------------------

## Troubleshooting

### `npm run dev` or another script is not found

Check the `scripts` section in `package.json`. The supplied source files
do not include the package manifest, so the script names cannot be
confirmed.

### A module cannot be resolved

Install the dependencies declared by the project. The visible imports
include Next.js, React, and `lucide-react`. Also confirm that component
files are in the locations expected by the relative imports.

### The portfolio images do not load

Check the network connection and the image URLs. If Next.js reports that
the remote hostname is not configured, add the required Unsplash host
configuration for the installed Next.js version.

### The page cannot find `globals.css`

Confirm that `globals.css` is located at the path imported by
`layout.js`, or update the import to match the actual directory
structure.

### The contact form does not send an email

That is expected with the supplied implementation. The form only
displays a local confirmation state. Connect it to a backend endpoint or
form service to deliver submissions.

------------------------------------------------------------------------

