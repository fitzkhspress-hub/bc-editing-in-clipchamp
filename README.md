# Clipchamp Broadcast Walkthrough

A standalone KHS Cougar News walkthrough for GitHub Pages. Eight steps total 8 minutes 30 seconds of estimated lesson time. Actual editing, uploads, caption generation, and rendering take additional time. No footage, accounts, server, installation, or build process is needed to view the lesson. Clipchamp access and your own footage are needed to carry out the editing steps.

## Publish on GitHub Pages

1. Unzip the supplied archive.
2. Open or create the GitHub repository you want to use.
3. Upload the extracted **contents** to the repository root. `index.html`, `styles.css`, and `app.js` should appear directly at the top level. Upload the files, not the ZIP. Include `.nojekyll` if your upload method shows hidden files; this site also works without it.
4. Commit the files to your publishing branch, usually `main`.
5. Open **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**. Choose **main** and **/(root)**, then **Save**.
6. Wait for publishing to complete. Open the link shown in Pages settings.

Relative links support repository subpaths and custom domains. No GitHub deployment has been performed by creating this package.

Official guidance: [Configure a GitHub Pages publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Preview

From this folder, run `python3 -m http.server 8788`, then open `http://localhost:8788`. Press Control+C in the terminal when finished. Opening `index.html` directly also works; progress saving may vary for local files.

## Content and behavior

- Eight numbered steps, illustrated timeline concepts, three retryable quick checks, and a printable checklist.
- Step completion is self-reported with **Mark done & continue**. Quick checks have feedback and do not block navigation or contribute a grade.
- Progress and answers are saved only in the current browser using localStorage when available. No analytics or data submission.
- **Reset progress** opens a confirmation dialog before clearing this lesson's progress.
- The course does not load external fonts, images, scripts, or video. Microsoft links open official documentation in a new tab.
- Illustrations are conceptual teaching diagrams, not screenshots or a working editor.
- Lesson is an independent guide, not a Microsoft product. School and personal account labels may differ.

## Editing

Edit the `lessons` array in `app.js` to change instructions, estimated times, diagrams, and checks. `styles.css` controls appearance. `index.html` contains the introduction and overall layout. Source links are included in each step; Microsoft instructions were checked October 26, 2026.

## Verification

JavaScript syntax and local asset links passed checks. Desktop browser checks confirmed navigation through all eight steps, quick-check retry feedback, completion, saved progress after reload, reset confirmation, and checklist expansion. Responsive styles and print styles are included; narrow-screen layout and the operating system print dialog were not separately tested.
