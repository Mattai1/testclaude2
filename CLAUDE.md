# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Web design agency system. We clone existing websites, then customize design and content for clients. Each client project lives in its own subdirectory under `projects/`.

## Workflow

1. **Clone phase**: Replicate the target site's structure, layout, and styling as closely as possible
2. **Customize phase**: Swap out branding, copy, images, colors, and fonts to match the client's identity
3. **Deliver phase**: Polish, optimize, and prepare for deployment

## Stack Defaults

- HTML/CSS/JS for static sites
- Next.js or Astro when a framework is needed
- Tailwind CSS for styling
- Deploy-ready output (Vercel, Netlify, or static hosting)

When a client project requires a different stack, document it in that project's own README.

## Structure

```
projects/
  client-name/        # one folder per client project
    src/              # source code
    public/           # static assets (images, fonts, favicons)
    README.md         # client-specific notes, target URL, customization details
```

## Conventions

- Match the source site's responsive breakpoints before customizing
- Keep original class/component names during clone phase for easy comparison; rename during customization
- Optimize all images (WebP preferred, fallback to PNG/JPG)
- Use semantic HTML — proper headings, landmarks, alt text
- Every client project must include a README with: target site URL, client name, color palette, font choices, and deployment target
- Turkish and English content both common — handle UTF-8 properly throughout
