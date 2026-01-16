# Contributing Guide

Welcome to the team! This guide explains how to properly contribute to Prakash's Portfolio.

## Workflow
1. **Branching**: Create a new branch for any feature or content update.
   `git checkout -b feature/new-venture`
2. **Local Dev**: Run `npm run dev` to see changes live.
3. **Commit**: Use descriptive commit messages.
4. **Push**: Always push via SSH.

## Content Updates (Most Common)
To add or edit a Venture or Research area, do NOT edit HTML files. Instead:
1. Open `src/js/data.js`.
2. Add a new object to the `ventures` or `researchAreas` array.
3. The UI will automatically render the new content on the respective pages.

## Style Guide
- All styling must be added to `src/css/style.css` (global) or `src/css/components.css` (modular).
- Use CSS Variables defined in `src/css/variables.css` for colors and fonts.
- Follow the **BEM-ish** naming convention for new components.

## Deployment
Successful merges to the `main` branch will automatically deploy to GitHub Pages (managed via Repository Settings).
