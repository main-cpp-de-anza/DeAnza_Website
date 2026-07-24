# De Anza Website Design

## Goal

Build the complete De Anza student-information website from the supplied Figma
file as a responsive React application. Correct clear visible copy errors while
preserving the design's meaning and visual intent.

## Technology and routing

The project remains a Vite and React application. Add React Router to provide
stable client-side routes:

| Route | Page |
| --- | --- |
| `/` | Home |
| `/registration` | Student Registration |
| `/transferring` | Transferring Information |
| `/vta-card` | VTA Card |
| `/campus-map` | Campus Map |
| `/about` | About Us (the Figma `Main.cpp` screen) |

Use a shared application layout so every page includes the same navigation bar
and footer.

## Component structure

```text
src/
  components/
    Layout.jsx
    Navbar.jsx
    Footer.jsx
    InfoCard.jsx
    SectionHeading.jsx
  pages/
    Home.jsx
    Registration.jsx
    Transferring.jsx
    VtaCard.jsx
    CampusMap.jsx
    AboutUs.jsx
  assets/
  App.jsx
  index.css
```

`Navbar` contains these internal links, in order: Student Registration,
Transferring, VTA Card, Campus Map, and About Us. The final link replaces the
Figma placeholder label `Navigation Bar` and targets `/about`.

## Pages

- **Home:** hero content plus four navigation cards for Registration,
  Transferring, VTA Card, and Campus Map.
- **Student Registration:** registration guidance, process steps, supporting
  screenshots, and highlighted headings.
- **Transferring:** ASSIST, TAG, Honors Program, eligibility, and UC campus
  information.
- **VTA Card:** SmartPass information, pickup locations, required documents,
  and the orientation reminder.
- **Campus Map:** campus map image and the Figma-specified external location
  links.
- **About Us:** the Main.cpp club mission, activities, social/contact links,
  and contributor list.

All Figma-provided external links, including maps, ASSIST, Instagram, and
Discord, are functional. Links that leave the site open in a new tab with the
appropriate safe relationship attributes.

## Visual and content rules

- Treat each Figma frame as the desktop visual reference, not as code to copy
  verbatim.
- Recreate hierarchy, colors, imagery, typography, cards, and spacing using
  React and the project's CSS rather than Tailwind or absolute-positioned
  generated markup.
- Correct obvious visible copy errors without changing content meaning. Examples
  include `Student Registration` and `About Us`.
- Download Figma-exported assets into `src/assets` or `public` before relying on
  them, because MCP asset URLs are temporary.
- Use responsive CSS: centered desktop content, flexible tablet layouts, and
  stacked mobile cards/sections with usable navigation.

## Testing and verification

Add Vitest and React Testing Library. Follow test-first development:

1. Write a failing test for a route or navigation behavior.
2. Implement the minimum code for that behavior.
3. Run the focused test until it passes.
4. Repeat by page, then run the complete test suite.

At completion, verify:

- all six routes render;
- navbar and home-card links navigate to the intended route;
- external links have their intended targets;
- mobile layouts remain usable;
- linting and production build pass; and
- rendered pages are visually compared against their Figma frames.

## Build order

1. Install routing and test dependencies; establish tokens and global styles.
2. Implement shared layout and test navigation.
3. Implement and test Home.
4. Implement and test Registration, Transferring, VTA Card, and Campus Map.
5. Implement and test About Us.
6. Save assets locally, refine responsive styles, run full checks, and compare
   against Figma.
