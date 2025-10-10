# Project TODO

This file summarizes outstanding tasks and quick next steps for the website project.

## Completed

- [x] Restore top CSS properties block

  - Remove stray CTA CSS from the top `@layer properties` block and restore variable/property declarations so the stylesheet parses.

- [x] Verify CTA styles & z-index

  - Ensure `.cta::before` (sheen) and other overlays stack and animate correctly in light/dark.

- [x] Apply CTA classes to Contact/Footer

  - Updated send / follow buttons to use `.cta` variants.

- [x] Revert games carousel to grid

  - Restored the games grid layout.

- [x] Nav background on scroll

  - Implemented scroll-aware nav background and blur.

- [x] Add nav background fade gradient

  - Added `.bg-background-fade` using `--background` and applied it to nav states.

- [x] Make nav always faded (partial)

  - Navigation now keeps a faded background by default (nav no longer depends on scroll).

## Remaining / In progress

- [ ] Fix minor CSS warnings

  - Purpose: clean up non-fatal warnings in `index.css` (e.g., `vertical-align` warnings) and remove duplicated rules.

- [ ] Persistent game card shadow

  - Purpose: make Games grid cards have a constant drop shadow matching the CTA shadow style.
  - Files: `src/components/Games.tsx`, `src/index.css`

## Nice-to-have / Follow-ups

- Tweak nav fade stops (currently ~85% -> 95%) to taste.
- Tune game card shadow intensity or hue for stronger brand feel.
- Add unit tests for any utility logic if/when more JS logic is added.
