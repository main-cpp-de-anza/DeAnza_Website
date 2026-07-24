# VTA Card Figma Fidelity Design

## Goal

Rebuild Figma node `10:65` as a responsive VTA Card information page in the existing React app.

## Scope

- Keep the existing shared navigation, footer, route, and mobile hamburger menu.
- Use the two exact Figma location photos as committed local assets.
- Match the Figma hierarchy: lavender VTA Card label, SmartPass introduction, two side-by-side photos, map direction link, document requirement, student-ID note, and orientation reminder.
- On narrow screens, stack the two photos while preserving their aspect ratio and rounded border treatment.
- Make the Figma Google Maps direction URL a safe external link (`target="_blank"` and `rel="noreferrer"`).
- Correct visible editable copy while retaining its meaning, including “De Anza students” and “travel by bus.”

## Component Design

`VtaCard.jsx` remains a single semantic article with small content sections. It imports two local Figma images and maps them into a location-photo grid. No new shared component is required because this layout is page-specific.

`index.css` receives scoped `.vta-page` rules only. These extend the compact centered language used by Registration and Transferring, rather than altering generic article styles.

## Accessibility and Links

- Each location photo has a descriptive alt text; no visible caption is added, matching Figma.
- The map-direction text is an accessible external link.
- Content uses headings, paragraphs, and an unordered list only where the design represents a list.

## Verification

- Add a focused VTA test for both local images and the external Google Maps link.
- Confirm the test fails before production changes, then passes afterward.
- Run the full test suite, lint, and production build.
- Compare the responsive page at desktop, tablet, and mobile widths; the user’s visual review remains the final acceptance check.
