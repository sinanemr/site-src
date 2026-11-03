# Sinan Emre — personal website

Built on the [Astrofy](https://github.com/manuelernestog/astrofy) template (MIT licence).

## Edit the content
All text is in **`src/data/site.ts`**: intro, robots, projects, CV timeline, skills, languages.
Every fact matches the CVs; change a fact in the CVs first, then here.

## Replace the placeholder images
- `public/profile.webp`: your photo (square, at least 300 × 300 px).
- `public/projects/`: one picture or short video per project. Put the file there and set the project's `img`
  in `src/data/site.ts`, e.g. `img: "/projects/hpu.jpg"` or `img: "/projects/hpu.mp4"`.
  - Pictures: `.jpg`, `.png`, `.webp` or `.gif`, about 800 × 800 px. Any shape works; it is cropped from the centre to a square.
  - Videos: `.mp4` (or `.webm`), 5–15 s, no sound needed (they play muted on a loop), ideally under 5 MB.
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
