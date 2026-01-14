# Lesson Web Fundamentals - Design System

This document outlines the design principles, color palettes, and component patterns used in the Lesson Web Fundamentals slide system. This system is specifically optimized for high-contrast visibility and readability on projectors.

## Core Aesthetics
- **Theme**: Premium Dark Mode
- **Visual Style**: Glassmorphism with vibrant neon accents
- **Core Principles**:
  - High contrast for projection
  - Large click/touch targets
  - Smooth micro-animations
  - Progressive disclosure of information

## Color Palette

| Name | Variable | Value | Usage |
|------|----------|-------|-------|
| Background Dark | `--bg-dark` | `#0f0f1a` | Main background |
| Card Background | `--bg-card` | `#1a1a2e` | Primary card background |
| Card Hover | `--bg-card-hover` | `#252542` | Background on hover |
| Primary | `--primary` | `#6366f1` | Indigo accent / main buttons |
| Accent | `--accent` | `#f472b6` | Pink accent / highlights |
| Text Primary | `--text-primary`| `#ffffff` | Main reading text |
| Text Secondary | `--text-secondary`| `#a1a1aa` | Explanatory text |
| Glass BG | `--glass-bg` | `rgba(255, 255, 255, 0.05)` | Semi-transparent layers |

### Gradients
- **`--gradient-1`**: `linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)` (Projector Optimized)
- **`--gradient-2`**: `linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)`

## Typography
- **Body Font**: `'Inter'`, sans-serif
- **Code Font**: `'Fira Code'`, monospace
- **Scale (Projection Optimized)**:
  - **Main Title**: `3.5rem` (56px) / Line-height: 1.2
  - **Subtitle**: `2.5rem` (40px)
  - **Slide Title**: `3rem` (48px)
  - **Card Headers (`h3`)**: `2.4rem` (38.4px)
  - **Body / List Text**: `1.6rem` (25.6px)
  - **Blockquotes**: `1.8rem` (28.8px)
  - **Code Blocks**: `1.5rem` (24px) / Line-height: 1.8
  - **UI Meta (Tags, Badges)**: `1.2rem` (19.2px)
  - **Labels**: `1.1rem` (17.6px)

## UI Components

### 1. Cards (`.objective-card`, `.tech-card`)
- **Border**: `1px solid rgba(255, 255, 255, 0.1)`
- **Border Radius**: `20px`
- **Padding**: `2rem`
- **Hover Effect**: `translateY(-5px/10px)` with color transition.

### 2. Navigation Elements
- **Slide Nav**: Bottom-fixed floating pill with `backdrop-filter: blur(20px)`.
- **Buttons**: `40px x 40px` targets, circular, with `0.3` opacity when disabled.
- **Progress Bar**: `4px` height at the top, uses `--gradient-1`.

## Animations
- **Slide Transitions**: Horizontal movement (`translateX(50px)` to `0`) with `0.5s cubic-bezier(0.4, 0, 0.2, 1)`.
- **`fadeInUp`**: Applied to cards with staggered delays (`--delay`).
- **`float`**: `6s` ease-in-out infinite floating animation for decorative icons.

## Best Practices for Projection
- Avoid font sizes below `1.5rem` for essential content.
- Use `var(--gradient-1)` for key attention points to cut through projector glare.
- Ensure `backdrop-filter` is paired with a fallback background color.
