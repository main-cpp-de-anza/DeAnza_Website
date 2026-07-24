# Campus Map Figma Fidelity Design

## Goal

Rebuild Figma node `10:47` as a responsive Campus Map page in the existing React app.

## Scope

- Keep the existing shared navigation, footer, route, and mobile hamburger menu.
- Use the exact Figma campus-map image as a committed local asset.
- Match the Figma desktop composition: map image on the left and compact external location links on the right.
- On narrow screens, stack the map image above the links.
- Keep the current page’s unique location list, including Tennis Court; do not reproduce Figma’s duplicate Registration & Student Services entry.
- Keep every location destination as a safe external link (`target="_blank"` and `rel="noreferrer"`).
- Do not add a visible title or image caption because Figma does not include either.

## Component Design

`CampusMap.jsx` keeps its `locations` data and maps it into the right-hand list. It imports one local `campus-map-guide.png` Figma export and renders it as the left panel, replacing the current placeholder gradient.

`index.css` receives scoped `.campus-map-page`, `.campus-map-image`, and `.campus-map-links` rules. The desktop grid mirrors Figma’s left/right split without fixed page positioning; its single-column mobile rule preserves the flexible screen sizing the project uses.

## Accessibility and Links

- The map image has the alt text `De Anza College campus map`.
- Every destination remains a semantic external link with safe new-tab attributes.
- The location list contains no duplicate visible entries.

## Verification

- Add a focused test for the local map image, unique Tennis Court link, and external destination behavior.
- Confirm the new test fails before updating production code, then passes afterward.
- Run the full test suite, lint, and production build.
- Compare the page with Figma on desktop and mobile; the user’s visual review remains final acceptance.
