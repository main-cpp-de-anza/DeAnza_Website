# Student Registration Page Fidelity Design

## Goal

Rebuild the Student Registration page from Figma node `10:29` so it closely
matches the desktop design while remaining fluid and usable on tablet and
mobile screens.

## Content and images

- Use local exports of the exact Figma registration guidance images and portal
  screenshots.
- Correct editable page copy, including `Student Registration`.
- Preserve real external-portal screenshots rather than altering their embedded
  UI text; correct guidance with editable surrounding headings, captions, and
  steps.
- Use semantic sections for Priority Registration, professor selection,
  registration time/location, and General Education requirements.

## Responsive layout

- Desktop mirrors the Figma hierarchy: centered titles, highlighted headings,
  wide screenshots, and spacious instructional sections.
- Tablet reduces outer margins and keeps screenshots constrained to the content
  column.
- Mobile uses the existing hamburger navigation, full-width screenshots, and
  stacked readable text without horizontal scrolling.

## Accessibility and verification

- Give each non-decorative local image meaningful alternative text.
- Keep exactly one page-level `h1`, with each guidance topic as an `h2`.
- Add failing tests before adding new behavior or content.
- Compare the page against Figma at desktop, tablet, and phone widths, then run
  the full test suite, linter, and production build.
