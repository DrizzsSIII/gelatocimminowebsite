# CLAUDE.md — Frontend Website Rules

## Always Do First
- Read the `frontend-design` skill before writing any frontend code, every session, no exceptions.

## Reference Images
- If a reference image is provided: match layout, spacing, typography, and color exactly. Swap in placeholder content (images via `https://placehold.co/`, generic copy). Do not improve or add to the design.
- If no reference image: design from scratch with high craft (see guardrails below).
- Do comparison rounds until no visible differences remain, with a minimum of 2. Do not stop early.
- When comparing, be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px".

## Local Server
- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start the dev server: `node serve.mjs` (serves the project root at `http://localhost:3000`)
- `serve.mjs` lives in the project root. Start it in the background before taking any screenshots.
- If the server is already running, do not start a second instance.
- If the server fails to start, stop and report the error — do not screenshot a `file:///` URL as a substitute.

## Screenshot Workflow
- Puppeteer path and Chrome cache are machine-specific — update these if moving machines or sharing this file:
  - Puppeteer: `C:/Users/nateh/AppData/Local/Temp/puppeteer-test/`
  - Chrome cache: `C:/Users/nateh/.cache/puppeteer/`
- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:3000`
- Screenshots are saved automatically to `./temporary screenshots/screenshot-N.png` (auto-incremented, never overwritten).
- Optional label suffix: `node screenshot.mjs http://localhost:3000 label` → saves as `screenshot-N-label.png`
- `screenshot.mjs` lives in the project root. Use it as-is.
- After screenshotting, read the PNG from `temporary screenshots/` with the Read tool — Claude can see and analyze the image directly.
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing.

## Brand Assets
- Always check the `brand_assets/` folder before designing.
- If assets exist there (logos, color guides, style guides, images), use them. Do not use placeholders where real assets are available. If a color palette is defined, use those exact values — do not invent brand colors.
- If `brand_assets/` is missing or empty, proceed with the scratch design rules below.

## Output Defaults
- Single `index.html` file, all styles inline, unless user says otherwise.
- Tailwind CSS via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- Placeholder images: `https://placehold.co/WIDTHxHEIGHT`
- Mobile-first responsive.

## Design Rules

### Anti-Generic Guardrails
- **Colors:** Never use default Tailwind palette (indigo-500, blue-600, etc.). Pick a custom brand color and derive from it.
- **Shadows:** Never use flat `shadow-md`. Use layered, color-tinted shadows with low opacity.
- **Typography:** Never use the same font for headings and body. Pair a display/serif with a clean sans. Apply tight tracking (`-0.03em`) on large headings, generous line-height (`1.7`) on body. Never use generic fonts (Inter, Roboto, Arial, system fonts).
- **Gradients:** Layer 2–3 radial gradients at different opacities. Add grain via an SVG `feTurbulence` noise filter for depth. Avoid a single linear gradient as the sole background treatment.
- **Animations:** Only animate `transform` and `opacity`. Use spring-style easing.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.
- **Images:** Add a gradient overlay (`bg-gradient-to-t from-black/60`) and a color treatment layer with `mix-blend-multiply`.
- **Spacing:** Use intentional, consistent spacing tokens — not random Tailwind steps.
- **Depth:** Surfaces should have a layering system (base → elevated → floating), not all sit at the same z-plane.

### Workflow Rules
- Do not add sections, features, or content not in the reference.
- Do not "improve" a reference design — match it.
- Do not stop after one screenshot pass.
- Do not use `transition-all`.
- Do not use default Tailwind blue/indigo as primary color.
