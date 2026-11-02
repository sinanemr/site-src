# Sinan Emre — personal website

Built on the [Astrofy](https://github.com/manuelernestog/astrofy) template (MIT licence).

## Edit the content
All text is in **`src/data/site.ts`**: intro, robots, projects, CV timeline, skills, languages.
Every fact matches the CVs; change a fact in the CVs first, then here.

## Replace the placeholder images
- `public/profile.webp`: your photo (square, at least 300 × 300 px).
- `public/projects/*.webp`: one image per project (750 × 422 px works best). Keep the file names, or change
  the `img` path in `src/data/site.ts`. GIFs work too: name them e.g. `hpu.gif` and update the path.
- `public/social_img.webp`: the preview picture shown when the link is shared.
- `public/Sinan_Emre_CV*.pdf`: replace when the CVs change.

## Publish on GitHub Pages (free)
1. Create a repository named `<your-username>.github.io` and push this folder to its `main` branch.
2. In the repository: Settings → Pages → Source: **GitHub Actions**.
3. Every push to `main` rebuilds the site (workflow: `.github/workflows/deploy.yml`).
   It will be live at `https://<your-username>.github.io`.

## Run it on your computer (optional)
```
npm install
npm run dev     # http://localhost:4321
```
