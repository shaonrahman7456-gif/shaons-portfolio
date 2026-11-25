# Saipur Rahman Shaon — Portfolio

A five-page responsive React portfolio with light/dark theme switching.

## Run in VS Code

1. Install **Node.js LTS** from https://nodejs.org/
2. Extract this ZIP.
3. Open the extracted `shaon-portfolio` folder in VS Code.
4. Open Terminal → New Terminal.
5. Run:

```bash
npm install
npm run dev
```

6. Open the local URL printed by Vite (usually http://localhost:5173).

## Pages
- Home
- Skills & Projects
- Education & Achievements
- Hobbies & Interests
- Contact

## Included features
- React + Vite + React Router
- Light and dark mode (saved in localStorage)
- Responsive navigation
- Framer Motion page transitions
- Project and achievement image gallery
- Contact form that opens the visitor's email application

## Before publishing
- Confirm your phone number and social profile URLs.
- Replace the Facebook placeholder URL with your actual profile URL.
- Add your LinkedIn URL if you want it displayed.
- Add project GitHub repository links if available.
- Add your exact degree title, department, batch, and graduation date if you want those shown.
- The Figma URL could not be inspected automatically, so this is a polished initial implementation based on the details and images supplied, not a pixel-perfect Figma reproduction.


## Deploy to GitHub Pages

This version is configured for a GitHub repository named `shaon-portfolio` under `shaonrahman7456-gif`. It uses HashRouter so page navigation works when hosted on GitHub Pages.

1. Create a GitHub repository named **shaon-portfolio** (public is simplest).
2. Upload/push all files in this folder to the repository's `main` branch. Include the hidden `.github` folder.
3. In GitHub, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
4. Open the **Actions** tab and wait for the “Deploy React portfolio to GitHub Pages” workflow to finish successfully.
5. Your site will be available at `https://shaonrahman7456-gif.github.io/shaon-portfolio/`.

If you choose a different repository name, update the `base` value in `vite.config.js` to `/<your-repository-name>/` before pushing.
