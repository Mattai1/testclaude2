# CSS Extraction Report

## Source
- **URL**: https://antigravity.google
- **Rebranded As**: Mocha — The Agentic Development Platform
- **Date**: 2026-03-10
- **QA Iterations**: 2
- **Build Status**: Compiles successfully

## Design Tokens

### Colors (from antigravity.google stylesheet)
| Token | Value | Usage |
|---|---|---|
| `--palette-grey-0` | #FFFFFF | Surface background |
| `--palette-grey-10` | #F8F9FC | Container background |
| `--palette-grey-20` | #EFF2F7 | Container high |
| `--palette-grey-50` | #E6EAF0 | Container higher |
| `--palette-grey-100` | #E1E6EC | Container highest |
| `--palette-grey-800` | #45474D | Secondary text |
| `--palette-grey-1000` | #212226 | On-surface text |
| `--palette-grey-1200` | #121317 | Primary text / inverse surface |
| `--palette-blue-600` | #3279F9 | Accent / link color |
| Indigo-500 | #6366F1 | Mocha brand primary |
| Purple-500 | #8B5CF6 | Mocha brand gradient |
| Violet-400 | #A78BFA | Mocha brand light |

### Typography
| Property | Value |
|---|---|
| Primary Font | Inter (substitute for Google Sans Flex) |
| Heading Weight | 500 (medium) |
| Body Weight | 400 |
| Hero Size (Desktop) | 80px, line-height 1.05, tracking-tight |
| Hero Size (Tablet) | 4.5rem (72px) |
| Hero Size (Mobile) | 3rem (48px) |
| Statement Size | 56px desktop, 48px tablet, 30px mobile |
| Body Text | 17.5px (base), line-height 25.38px |
| Caption | 14.5px, line-height 21.02px |
| Nav CTA | 14.5px, font-weight 450 |

### Spacing (from antigravity.google)
| Token | Value |
|---|---|
| `--space-xs` | 4px |
| `--space-sm` | 8px |
| `--space-md` | 16px |
| `--space-lg` | 24px |
| `--space-xl` | 36px |
| `--space-2xl` | 48px |
| `--space-3xl` | 60px |
| `--space-4xl` | 80px |
| `--nav-height` | 52px |
| `--page-margin` | 72px (40px tablet, 16px mobile) |

### Breakpoints
| Source | Tailwind Mapping |
|---|---|
| 1600px (`--breakpoint-xl`) | Custom `max-w-7xl` / container |
| 1440px (`--breakpoint-lg`) | `xl:` |
| 1024px (`--breakpoint-md`) | `lg:` / `md:` |
| 767px (`--breakpoint-sm`) | `md:` |
| 425px (`--breakpoint-xs`) | `sm:` |

### Border Radius
| Token | Value |
|---|---|
| `--shape-corner-xs` | 4px |
| `--shape-corner-sm` | 8px |
| `--shape-corner-md` | 16px (`rounded-2xl`) |
| `--shape-corner-lg` | 24px (`rounded-3xl`) |
| `--shape-corner-xl` | 36px |
| `--shape-corner-rounded` | 9999px (`rounded-full`) |

### Easing Functions (from antigravity.google)
| Name | Value |
|---|---|
| `--ease-out-quint` | `cubic-bezier(0.23, 1, 0.32, 1)` |
| `--ease-out-expo` | `cubic-bezier(0.19, 1, 0.22, 1)` |
| `--ease-out-cubic` | `cubic-bezier(0.215, 0.61, 0.355, 1)` |
| `--ease-out-back` | `cubic-bezier(0.34, 1.85, 0.64, 1)` |
| `--ease-in-out-quart` | `cubic-bezier(0.77, 0, 0.175, 1)` |

## Animations Inventory

### @keyframes Animations
| Name | Duration | Easing | Purpose |
|---|---|---|---|
| `mocha-fade-in-up` | 0.7s | ease-out-quint | Scroll reveal: fade + slide up |
| `mocha-fade-in` | 0.6s | ease-out | Simple opacity fade |
| `mocha-scale-in` | 0.7s | ease-out-quint | Scale + fade entrance |
| `mocha-slide-in-left` | 0.7s | ease-out-quint | Slide from left |
| `mocha-slide-in-right` | 0.7s | ease-out-quint | Slide from right |
| `mocha-hero-title` | 0.9s | ease-out-quint | Hero heading: fade + slide + blur |
| `mocha-hero-badge` | 0.6s | ease-out-quint | Badge: fade + scale + slide |
| `mocha-float` | 4s | ease-in-out | Floating icon bobbing (infinite) |
| `mocha-float-gentle` | 5s | ease-in-out | Subtle bobbing (infinite) |
| `mocha-float-delayed` | 5s | ease-in-out | Delayed bobbing (infinite) |
| `mocha-text-shimmer` | 4s | ease-in-out | Gradient text sweep (infinite) |
| `mocha-pulse-glow` | 3s | ease-in-out | CTA button glow (infinite) |
| `mocha-pulse-subtle` | varies | ease-in-out | Subtle opacity pulse |
| `mocha-gradient-rotate` | 4s | linear | Conic gradient border spin (infinite) |
| `mocha-grid-dot-pulse` | 4s | ease-in-out | Background dots opacity (infinite) |
| `mocha-ide-entrance` | 0.8s | ease-out-quint | IDE preview: fade + slide + scale |
| `mocha-cursor-blink` | 1s | step-end | Code cursor blink (infinite) |
| `mocha-marquee` | 30s | linear | Logo scroll (infinite) |
| `mocha-spin-slow` | 20s | linear | Decorative rotation (infinite) |
| `mocha-gradient-shift` | 6s | ease-in-out | Background gradient shift (infinite) |
| `float` | 3s | ease-in-out | Legacy float animation (infinite) |

### Scroll-triggered Animations
| Section | Trigger Threshold | Animation |
|---|---|---|
| IDE Preview | 0.2 | `mocha-ide-entrance` (scale + slide up) |
| Marquee Logos | 0.1 | `mocha-fade-in` |
| Statement | 0.1 | `mocha-hero-title` (blur + slide) |
| Features Header | 0.1 | `mocha-fade-in-up` (staggered 1-3) |
| Feature Cards | 0.1 | `mocha-fade-in-up` (staggered 1-6) |
| CTA Section | 0.1 | `mocha-scale-in` |
| Footer | 0.1 | `mocha-fade-in` |

### Hover/Interactive Animations
| Element | Effect | Duration |
|---|---|---|
| Nav links | Color shift + bg highlight | 200ms |
| Nav logo | Scale 1.1 | 300ms |
| Download button | bg opacity + scale 0.97 active | 200ms |
| Floating icons inner | Shadow + border + scale 1.05 | 300ms |
| Floating icon icons | Color darkening | 300ms |
| IDE play button | Shadow elevation + translateY -0.5 | 300ms |
| IDE traffic lights | Opacity hover | 200ms |
| IDE sidebar items | Color brightening | 200ms |
| Feature cards | Border + shadow + translateY -1 | 300ms |
| Feature card icons | Bg color to indigo, icon color | 300ms |
| CTA arrow link | translateX +1 | 200ms |
| Marquee logos | Color opacity shift | 300ms |
| Footer links | Color shift dark | 200ms |
| Mobile menu | Max-height + opacity transition | 300ms |

### Continuous Animations
| Effect | Element | Duration |
|---|---|---|
| Floating bobbing | 12 hero icons | 3-5s per icon (staggered) |
| Text shimmer | "next-generation" / "agent-first" | 4s infinite |
| Pulse glow | Primary CTA buttons | 3s infinite |
| Grid dot pulse | Hero background | 4s infinite |
| Cursor blink | IDE code editor | 1s step |
| Marquee scroll | Logo strip | 30s linear (pauses on hover) |
| Spinning gradient | CTA decorative orb | 20s linear |
| Particle system | Hero background canvas | 60fps requestAnimationFrame |

### Micro-interactions
| Interaction | Effect |
|---|---|
| Button press | `active:scale-[0.97]` on all primary/secondary buttons |
| Card spotlight | Radial gradient follows mouse position via CSS variables |
| Navbar scroll | Transparent → glassmorphism (bg-white/80 + backdrop-blur-xl + shadow) |
| Mobile menu | Height + opacity animated open/close |

## Components Generated

| Component | File | Animations Used |
|---|---|---|
| Navbar | `src/components/navbar.tsx` | Scroll-aware glassmorphism, logo hover scale, link hover transitions, mobile menu height animation |
| Hero | `src/components/hero.tsx` | CSS-only staggered entrance (badge, heading lines, subtitle, CTAs), grid dots pulse, gradient orb, particles |
| Floating Icons | `src/components/floating-icons.tsx` | 12 icons with `mocha-float` at staggered delays, inner circle hover scale + shadow |
| Particles | `src/components/particles.tsx` | Canvas-based particle system, 60 particles, 5 indigo/purple colors |
| IDE Preview | `src/components/ide-preview.tsx` | Scroll-triggered `mocha-ide-entrance`, cursor blink, play button hover lift, sidebar hover |
| Statement | `src/components/statement.tsx` | Scroll-triggered `mocha-hero-title`, "agent-first" text shimmer |
| Marquee Logos | `src/components/marquee-logos.tsx` | Scroll-triggered fade-in, infinite `mocha-marquee` with fade-edge mask, hover pause |
| Features | `src/components/features.tsx` | Scroll-triggered staggered card entrance, mouse-tracking spotlight, icon color transition on hover |
| CTA Section | `src/components/cta-section.tsx` | Scroll-triggered `mocha-scale-in`, spinning gradient orb, pulse glow on button |
| Footer | `src/components/footer.tsx` | Scroll-triggered `mocha-fade-in`, link hover transitions |
| Mocha Logo | `src/components/mocha-logo.tsx` | SVG with linear gradient (indigo → purple) |

## Hooks Created

| Hook | File | Purpose |
|---|---|---|
| `useInView` | `src/hooks/use-in-view.ts` | IntersectionObserver wrapper, fires once, configurable threshold |
| `useMousePosition` | `src/hooks/use-mouse-position.ts` | Tracks mouse position as CSS variables for spotlight effects |

## Custom CSS Added to globals.css

### Easing Variables
5 custom easing functions from antigravity.google design system

### @keyframes (21 total)
All prefixed with `mocha-` to avoid conflicts with preview CSS sections

### Animation Utility Classes (15 total)
`.animate-mocha-*` classes with appropriate fill-mode and easing

### Stagger Delay Utilities
`.stagger-1` through `.stagger-12` (100ms increments)

### Visual Effect Classes
- `.mocha-text-shimmer` — Gradient text sweep effect
- `.mocha-grid-dots` — Animated dot grid background
- `.mocha-card-spotlight` — Mouse-following radial gradient on cards
- `.mocha-gradient-border` — Animated conic gradient border
- `.mocha-marquee-container` / `.mocha-marquee` — Infinite scroll with fade edges

### Accessibility
- `@media (prefers-reduced-motion: reduce)` — Disables all animations and transitions

## Known Differences
- **Font**: Using Inter instead of Google Sans Flex (proprietary Google font)
- **JS-rendered content**: antigravity.google is an Angular SPA; some dynamic content details may differ
- **Video**: Original has video playback; Mocha has static IDE preview with code display
- **Logo**: Original uses Google Antigravity mark; Mocha uses custom hexagonal coffee-bean SVG
- **Color accent**: Original uses `#3279F9` blue; Mocha uses `#6366F1` indigo for brand differentiation
