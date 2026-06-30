# Charles and Patricia Heidelberger Foundation Site

## Project Architecture

This is a TanStack Start and React site deployed on Netlify. The current experience is a single-page foundation website with tab-style navigation that scrolls between sections for Home, Mission, History, Conferences, Board Members, and Contact.

## Key Directories

- `src/routes/__root.tsx` defines the document shell and page metadata.
- `src/routes/index.tsx` contains the full foundation website UI and contact form behavior.
- `src/styles.css` contains Tailwind import setup plus the custom visual system and responsive layout rules.
- `public/__forms.html` is the static Netlify Forms skeleton required for form detection in this SSR app.

## Coding Conventions

- Use TypeScript and React function components.
- Keep route files in `src/routes` following TanStack Router file-based routing.
- Prefer scoped, semantic JSX sections over adding new abstractions unless content grows substantially.
- Keep design tokens in `src/styles.css` under `:root` and reuse them for color consistency.
- Use Netlify Forms for the contact form. If form fields change in React, mirror the same field names in `public/__forms.html`.

## Non-Obvious Decisions

The contact form posts to `/__forms.html` instead of `/` because TanStack Start is an SSR framework. Netlify needs the static form skeleton for build-time detection, and AJAX submissions must target that static file so Netlify Forms can process them.

The board member entries and some organizational details are placeholders because no verified roster, address, or conference schedule was provided in the request. Replace those fields with approved foundation content when available.
