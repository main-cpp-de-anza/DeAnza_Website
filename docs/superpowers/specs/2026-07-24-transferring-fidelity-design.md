# Transferring Page Fidelity Design

## Goal

Rebuild the Transferring page from Figma node `10:30` as a responsive, accessible
React page with local Figma imagery and working official external links.

## Structure

- Preserve the Figma hierarchy: ASSIST introduction, tutorial imagery, TAG,
  participating UC campuses, Honors Program, and eligibility requirements.
- Use Figma tutorial/ASSIST images as local assets; do not use temporary URLs or
  a full-page screenshot as page UI.
- Use real external links where Figma provides destinations, opening them safely
  in a new tab.
- Correct clear editable copy errors without changing meaning.

## Responsive behavior

- Desktop uses the centered, vertically spaced Figma layout and highlighted
  lavender section labels.
- Tablet reduces margins and constrains images to the content column.
- Mobile retains the hamburger navigation, stacks lists and sections, and never
  creates horizontal scrolling.

## Verification

- Write failing tests for the ASSIST heading, TAG exception statement, and
  official external link before implementing those behaviors.
- Compare `/transferring` against Figma at desktop, tablet, and phone widths.
- Run the full test suite, linter, and production build before handoff.
