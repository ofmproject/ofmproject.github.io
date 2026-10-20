# ofmproject.org

Source of the Open Firewall Manager website, built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build) and hosted on GitHub Pages at <https://ofmproject.org>.

## Local development

Requires Node.js 22 or later.

```sh
npm install      # creates package-lock.json on first run; commit it
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the built site locally
```

## Structure

```text
.
├── .github/workflows/deploy.yml   # build and deploy to GitHub Pages
├── public/
│   ├── CNAME                      # custom domain
│   └── favicon.svg                # adapts to light and dark mode
├── src/
│   ├── assets/                    # logo (light and dark)
│   ├── content/docs/index.mdx     # the one-pager
│   └── styles/theme.css           # brand colours and fonts
└── astro.config.mjs               # site settings
```

- The site is currently a single page. Sidebar and search are switched off in `astro.config.mjs` and can be enabled again once documentation pages are added.
- Brand colours are defined in `src/styles/theme.css` only.
- Fonts (Inter, JetBrains Mono) are self-hosted via Fontsource. No external requests, no cookies, no tracking.

## Deployment

Every push to `main` builds and deploys the site through GitHub Actions. In the repository settings under **Pages**, the source must be set to **GitHub Actions**.
