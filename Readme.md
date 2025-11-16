# HulasPatakhProfile

A lightweight static personal/profile template — HTML, CSS and minimal JavaScript — ready to be customized and deployed. Suitable for showcasing a personal brand, portfolio, or simple landing/profile page.

## Key features
- Static single-page layout (index.html)
- Responsive CSS (styles/ or css/)
- Assets folder for images and fonts
- No build step required (can be served directly)

## Project structure
- index.html — main entry
- css/ or styles/ — stylesheets
- js/ — minimal scripts (if any)
- assets/ — images, icons, fonts
- README.md — this file

(Adjust paths above to match actual folder names in this repo.)

## Prerequisites
- Git (optional, for repo management)
- Node.js (optional, for dev server)
- Python (optional, simple file server)

## Run locally (Windows)
Open directly:
- Double-click index.html or run in PowerShell:
  start "index.html"

Serve with Python (recommended for proper path/asset handling):
- PowerShell / CMD:
  py -3 -m http.server 5500
  Open http://localhost:5500

Serve with npm (no global install):
- PowerShell:
  npx live-server . --port=5500
  or
  npm i -g serve
  serve -s . -l 5500

## Deploy to Vercel
Option A — Dashboard
1. Push repo to GitHub.
2. Go to vercel.com → Import Project → select repo.
3. Framework Preset: Other (Static).
4. Build Command: leave empty. Output Directory: leave empty (index.html at root) or set if different.
5. Deploy.

Option B — CLI
- PowerShell:
  npm i -g vercel
  vercel login
  cd "C:\Users\Priyansh Shukla\Desktop\MoneyMission2025\Freelance WebDev\Templates\HulasPatakhProfile"
  vercel
  vercel --prod

Optional vercel.json (if you need SPA routing):
{
  "version": 2,
  "name": "hulas-patakh-profile",
  "builds": [{ "src": "index.html", "use": "@vercel/static" }],
  "routes": [{ "src": "/(.*)", "dest": "/index.html" }]
}

## Customize
- Replace content in index.html (name, bio, links).
- Swap images in assets/.
- Update styles in css/ to match branding.

## Troubleshooting
- 404 assets: ensure paths are relative and correct.
- Vercel build issues: confirm build/output settings or set Framework Preset to Other.

## License
MIT — modify as needed.