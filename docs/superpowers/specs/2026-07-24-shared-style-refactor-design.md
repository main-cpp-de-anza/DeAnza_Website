# Shared Style Refactor Design

## Goal

Make the existing React pages easier to maintain by consolidating repeated CSS
decisions, without intentionally changing the current visual appearance or
overriding page-specific Figma fidelity.

## Scope

- Keep `React/src/index.css` as the stylesheet for this pass.
- Add semantic CSS custom properties for values already in use: content widths,
  spacing, corner radii, and shadows.
- Extract shared utility classes for repeated page containers, pill headings,
  bordered images, and centered content groups.
- Update existing page markup only where a shared class exactly preserves the
  current applied styles.
- Keep unique layout classes such as `campus-map-layout` and
  `vta-location-grid` scoped to their pages.
- Merge duplicate `.guide-image` declarations and simplify conflicting margin
  declarations while preserving their final computed values.

## Non-goals

- Do not redesign any page or alter Figma-matched content.
- Do not split the stylesheet into several files.
- Do not replace every page class with a generic class.
- Do not change routes, interactions, external links, or image assets.

## Implementation boundaries

Shared rules must express a repeated, visible design decision. Page rules retain
their unique dimensions, responsive behavior, and layout structure. New custom
properties use the current effective values, rather than introducing a new
spacing or typography scale.

## Validation

- Run Vitest, ESLint, and the Vite production build.
- Review the home page, registration page, transferring page, VTA Card page,
  and Campus Map page at desktop and mobile widths.
- Confirm there are no route, interaction, or layout regressions.
