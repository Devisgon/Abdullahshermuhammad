# Abdullah Sher Muhammad

Personal website for Abdullah Sher Muhammad. Built with Next.js 16, React 19, TypeScript, Tailwind CSS 4 and Lucide icons. Next.js exports static pages to `out/`; GitHub Actions publishes them to GitHub Pages.

## Where to edit

```text
src/
├── app/
│   ├── globals.css              # Tailwind setup, light/dark palettes, font and sitewide rules
│   ├── layout.tsx                # HTML, metadata and body theme
│   └── (site)/
│       ├── layout.tsx            # Shared header and footer
│       ├── page.tsx              # Homepage: assembles sections in order
│       ├── [slug]/page.tsx       # Service page routes
│       ├── industries/[slug]/    # Industry page routes
│       └── */page.tsx            # Other standalone pages
├── components/
│   ├── layout/                   # Header, theme toggle, mobile menu, brand, footer
│   └── ui/                       # Reusable cards, buttons, intros and form controls
├── content/                      # Navigation, service, offer and industry copy
├── features/
│   ├── home/components/          # Hero, bottlenecks, solutions and other home sections
│   ├── offers/components/        # Reusable service page view and workflow illustration
│   ├── industries/components/    # Directory and industry page view
│   └── */components/             # Sections and forms for each remaining page
└── lib/                          # Shared SEO metadata, form submission and utilities
public/                           # Logo, favicon, portraits and CNAME
.github/workflows/deploy.yml       # GitHub Pages deployment
```

**Styling rule:** Put component styling in that component's Tailwind `className` attributes. `src/app/globals.css` contains only theme tokens and sitewide rules. Brand colors and font are in `@theme inline`; light and dark values are in `:root` and `html.dark`. There are no page or component CSS files. The header toggle saves a choice under `asm-theme` in browser storage and follows the system theme until a choice is saved.

The header logo is `public/ASM-LOGO.png`. Homepage content begins in `src/app/(site)/page.tsx`, which imports named sections from `src/features/home/components/`. Change service copy in `src/content/offers.ts`, industry copy in `src/content/industries.ts`, and menu items in `src/content/navigation.ts`.

**Search content:** `src/content/seo-targets.ts` maps the distinct search intent and visible explanation for every service and industry landing page. `src/lib/seo.ts` builds canonical and social metadata; `src/app/sitemap.ts` and `src/app/robots.ts` expose discoverable URLs. The research, market limits and page-by-page keyword map are in `SEO_RESEARCH_REPORT.md`.

**Social preview image:** Add a 1200 × 630 PNG named `og-image.png` at `public/images/og-image.png`. Every page uses that image for Open Graph and X/Twitter previews. Page titles, descriptions and canonical URLs are generated through `src/lib/seo.ts` and the page metadata. Preview images will not appear in shared links until this file is uploaded and deployed. The image URL is `https://abdullahshermuhammad.me/images/og-image.png`.

## Run locally

Use Node.js 22.13 or later and pnpm:

```bash
pnpm install --frozen-lockfile
pnpm dev
pnpm lint
pnpm build
```

`pnpm build` generates the static `out/` directory, including all service and industry pages. The output folder should not be committed.

## Forms and publishing

GitHub Pages cannot process form submissions. Create a Formspree form and set your repository's **Settings → Secrets and variables → Actions → Variables → `NEXT_PUBLIC_LEAD_FORM_ENDPOINT`** to its public endpoint (`https://formspree.io/f/your-form-id`). The deployment workflow requires this variable. It is compiled into browser code, so do not use a private API key. Submit a test enquiry after publishing to confirm delivery.

In **Settings → Pages**, choose **GitHub Actions** as the source. Push to `main` to deploy. `public/CNAME` configures `abdullahshermuhammad.me`; configure the same custom domain in Pages settings and point its DNS at GitHub Pages. The deployment workflow lives at `.github/workflows/deploy.yml`.
