# De Anza Homepage Fidelity Design

## Goal

Rebuild the homepage to closely match the supplied Figma `HomePage` frame while
remaining fluid and usable across desktop, tablet, and phone screen sizes.

## Scope

This is the first page of the broader Figma-fidelity effort. It establishes the
asset, navigation, responsive-layout, and verification patterns that later
pages will follow.

## Approach

Build the page from responsive React components and local copies of the exact
Figma assets. Do not use an exported full-page image as the UI and do not scale
a fixed-position desktop canvas. This keeps content selectable, links usable,
and the page responsive.

## Desktop layout

- Reproduce the mint header, rounded De Anza logo, hero area, and four Figma
  navigation cards.
- Use the Figma card order: Student Registration, Transferring Information,
  VTA Card, and Campus Map.
- Preserve the approved copy correction `Student Registration`; do not restore
  the Figma misspelling.
- Use individual local Figma images for the logo and card imagery, never
  short-lived MCP asset URLs or a full-screen screenshot background.

## Responsive behavior

- Desktop: full horizontal navigation and four cards in a row.
- Tablet: reduced spacing and a two-column card grid.
- Phone: an accessible hamburger button replaces the visible navigation links;
  the opened menu exposes the same five routes and cards become one column.
- No viewport may require horizontal scrolling.

## Interaction and accessibility

- Navigation, cards, and the hamburger button have subtle hover and visible
  keyboard-focus feedback.
- The hamburger control exposes `aria-expanded` and `aria-controls`; its
  keyboard operation follows native button behavior.
- Exact-logo and card images have descriptive alternative text unless they are
  purely decorative.
- Internal cards remain normal React Router links.

## Verification

1. Download Figma-exported source assets into `React/src/assets` with stable,
   descriptive filenames.
2. Add behavior tests before implementing menu or navigation changes.
3. Compare the live homepage against Figma at desktop, tablet, and phone
   widths, then refine measurable differences in spacing, typography, color,
   and cropping.
4. Run the full test suite, linter, and production build before handoff.
