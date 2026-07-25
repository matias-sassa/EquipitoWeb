# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

General public browsing the web — people who encounter the app through search, social sharing, or word of mouth and land on this page to learn about it and decide whether to download it.

## Product Purpose

EquipitoWeb is a marketing landing page for **Equipito**, an Android app available on Google Play. Its job is to communicate what Equipito does, earn the visitor's trust, and convert them to a Play Store download.

## Positioning

A focused landing page whose single success metric is a Play Store tap — not a dashboard, not a docs site, not a SaaS sign-up. Everything on the page exists to serve that conversion.

## Operating Context

Visited on mobile (the target user is an Android owner), desktop, and tablet — often via a shared link or search result. No login, no authentication, no user data collection beyond analytics. The linked Android app concerns teams ("equipo A / equipo B"), suggesting a sports scoring or team-tracking context.

## Capabilities and Constraints

- Static or lightweight web page; no backend required beyond hosting.
- Bilingual: Spanish (primary) and English (secondary); language toggle or auto-detection expected.
- Light and dark theme support; palette confirmed in `colors.json`:
  - Background: `#F3EFD9` (light) / `#10241C` (dark)
  - Text: `#10241C` (light) / `#F3EFD9` (dark)
  - Team A accent: `#23d160`
  - Team B accent: `#FF7062`
- Logo asset: placeholder image exists; final asset to be supplied by the owner.
- Play Store link destination: to be confirmed by owner before shipping.
- App description copy, screenshots, and feature list: not yet provided; must not be fabricated.

## Brand Commitments

- Name: **Equipito** (Android app) / **EquipitoWeb** (this repository / landing page host)
- Color palette locked per `colors.json`.
- Logo placeholder in repository; final logo to be confirmed before launch.

## Evidence on Hand

- `colors.json` — confirmed light/dark palette with team accent colors.
- `README.md` — project name only.
- Logo: placeholder image present (path to be confirmed).
- Play Store listing: not yet linked; existence confirmed by user.

## Product Principles

1. **Conversion first.** Every design decision is measured against whether it moves a visitor toward the Play Store tap.
2. **Mobile-native feel.** The audience owns Android devices; the page should feel at home on a phone screen.
3. **Bilingual without compromise.** Spanish and English receive equal editorial care — no machine-translated afterthought.
4. **Brand coherence.** The page's palette and personality should feel like a preview of the app, not a generic template.
5. **Honest.** No copy, screenshots, stats, or testimonials that the owner has not approved.

## Accessibility & Inclusion

WCAG AA contrast compliance required across both light and dark themes given the custom palette.
