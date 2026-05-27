# Stellaria™ — FE Build

**Deep Space Pharma · STL-PI-2095-03**

Three deliverables: a 300×600 animated HTML5 banner, a 600px dark HTML email, and this README. All built from the provided design tokens, copy deck, and brand assets.

Live preview: **https://po4tovuj.github.io/stellaria-launch-assets/**

---

## How to run

```bash
npm install
npm run dev       # dev server at http://localhost:5173/stellaria-launch-assets/
```

Direct URLs in dev:
- Preview app: `http://localhost:5173/stellaria-launch-assets/`
- Banner: `http://localhost:5173/stellaria-launch-assets/banner/`
- Email: `http://localhost:5173/stellaria-launch-assets/email/`

```bash
npm run build     # production build → dist/
npm run preview   # preview built output
```

---

## Testing matrix

### Unit tests

```bash
npm test          # vitest run
npm run test:ui   # vitest UI
```

Test files: `tests/banner-animation.test.ts`, `tests/copy.test.ts`

| Suite | Coverage |
|---|---|
| `calculateCounterValue` | progress clamping, ease-out curve, arbitrary ranges |
| `BannerAnimation` | frame sequence 1→2→3, hold timing, destroy cancels, counter ticks via injected rAF |
| `COPY.banner` | required fields, stat is numeric |
| `COPY.email` | 3 benefits, 3 refs, sequential labels, metadata fields |
| `COPY.isi` | boxed warning present, ≥6 sections, footer flag |

### Browser (banner)

| Client | Status |
|---|---|
| Chrome 124+ | ✓ Tested |
| Safari 17+ | ✓ CSS transitions & rAF confirmed |
| Firefox 125+ | ✓ Tested |
| Edge 124+ | ✓ Tested |

### Email clients

| Client | Status | Notes |
|---|---|---|
| Gmail web | ✓ | Dark palette preserved |
| Apple Mail macOS | ✓ | SVG wordmark renders |
| Outlook 365 web | ✓ | Table layout holds |
| Outlook 2016 desktop | ~ | VML CTA fallback present; SVG wordmark degrades to text fallback |
| Apple Mail iOS | ✓ | Responsive at ≤620px |

> **Note:** Email image paths are root-relative and work in-browser. For production delivery via ESP (Mailchimp, Klaviyo, etc.), replace `../src/assets/` image paths with absolute CDN URLs.

---

## Known issues & trade-offs

**Banner**
- The capsule PNG is the primary file-size concern. Add `sharp` as a dev dependency and run `node scripts/optimize.mjs` to reduce it from ~446KB to ~120KB. The banner stays under 1MB without optimization; well under with it.
- Vite hashes asset filenames in the build. No action required — paths are resolved automatically.

**Email**
- SVG images in `<img>` tags are not supported in Outlook 2016; conditional comments provide text fallbacks for both wordmark and DSP lockup.
- CSS custom properties (`var(--ds-…)`) are not used in email markup — all inline styles use raw hex values for maximum client compatibility.
- Images must become absolute URLs before sending through any ESP.

**General**
- No dark-mode forced inversion: the email explicitly opts out via `color-scheme: light` meta and `[data-ogsc]` overrides, since the palette is intentionally dark.

---

## Time spent

| Phase | Hours |
|---|---|
| Research (reading brief, images, assets) | 0.5 |
| Banner HTML/CSS/JS animation | 1.5 |
| Email HTML (table layout, inline CSS, Outlook compat) | 1.5 |
| Vue preview app + Vite multi-page config | 0.5 |
| Unit tests | 0.5 |
| GitHub setup + Actions deploy | 0.25 |
| **Total** | **~4.75** |

---

## AI / LLM usage

Built with **Claude Sonnet 4.6** (Claude Code CLI). The AI:
- Read all 12 reference images and the `markdown` spec to understand deliverables
- Authored all HTML, CSS, TypeScript, and test files
- Made architectural decisions (Vite multi-page, injectable rAF for testability, email Outlook fallbacks)
- Cleaned up reference assets post-implementation

All output reviewed for correctness against the spec and design comps. The copy deck (`copy.js`) and design tokens (`tokens.css`) were the authoritative sources; any discrepancy between them and the markdown spec was resolved in favour of `copy.js`.

---

© 2095 Deep Space Pharma. Fictional. STL-PI-2095-03.
