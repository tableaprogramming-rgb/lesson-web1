# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Web Fundamentals** is a comprehensive 2-semester college-level curriculum for teaching front-end web development to absolute beginners (18-24 year old students). The course progresses from foundational web concepts through HTML, CSS, JavaScript, and jQuery.

- **Subject 1 (1st Semester)**: HTML & CSS Foundations (Modules 0-6)
- **Subject 2 (2nd Semester)**: Frameworks, JavaScript, jQuery, and Capstone Project (Modules 7-11)
- **Live Site**: [https://tableaprogramming-rgb.github.io/lesson-web1/](https://tableaprogramming-rgb.github.io/lesson-web1/)

## Architecture Overview

### Content Structure

Each module follows a strict structure with two parallel deliverables:

```
module-[X]-[name]/
├── [name].html          # Interactive slide presentation for live lectures
├── [name].md            # Comprehensive transcript/study guide for student review
└── (optional) examples/ # Working code examples that students can modify
```

**Key principle**: The `.html` file is a living example of the lesson concepts it teaches. Module 3 (HTML) demonstrates semantic HTML, Module 5 (CSS) demonstrates modern CSS patterns, etc.

### Design System

The visual presentation uses a **premium "Modern-Tech" aesthetic** optimized for projector visibility:

- **Color Scheme**: Dark mode foundation (`#0f0f1a` background), glassmorphism UI elements, vibrant gradient accents (Indigo → Purple → Pink)
- **Typography**: `Inter` font (UI), `Fira Code` (code blocks)
- **Accessibility**: Large font sizes (body text: 1.6rem minimum), high contrast ratios, large touch targets (40px buttons)
- **Key CSS Variables**: Defined in `/assets/css/styles.css` and used throughout all modules

### Presentation Pattern

All module `.html` files use a common JavaScript-powered slide system (`/assets/js/script.js`):

- **Navigation**: Arrow keys, spacebar, mouse buttons, or touch swipes
- **State Management**: Current slide index, progress indicator, keyboard hints
- **Animations**: Horizontal slide transitions, staggered card animations, fade effects

## Important Conventions

### Naming & Organization

- **Directory**: `module-[number]-[kebab-case-name]`
- **Files**: `[name].html` and `[name].md` (matching module directory name)
- **Module IDs**: Must use standardized format `Module XX` in UI elements

### Citations & References

All content requires proper attribution:

- **HTML**: Use superscript citations `<sup>[1]</sup>` with a `## References` section listing sources
- **Markdown**: Use `[1]` inline references with `## References` section

### Pedagogical Tone

Maintain the established instructional voice:

- **Context-First**: Explain *why* before *how*. Use real-world analogies (e.g., "Internet = highway, Web = cars").
- **Encouraging**: Conclude sections with "you can do this" messaging and actionable next steps.
- **Accessible**: Use precise technical language but remain welcoming to absolute beginners.
- **Modular**: Break information into digestible sections with visual reinforcement (icons, diagrams, structured grids).

## Development Workflow

### No Build Process Required

This is a **static HTML/CSS/JavaScript project** with no build tools, package managers, or compilation steps:

- Open `.html` files directly in a browser to preview
- Edit `.md` files in any text editor
- All assets are referenced from `/assets/` directory

### Viewing Locally

1. Open any module's `.html` file in a modern browser (Chrome/Firefox recommended)
2. Use keyboard shortcuts: Arrow keys, Space, or mouse buttons to navigate slides
3. Press `Home` to return to first slide, `End` to jump to last slide

### Testing & Quality Checks

Before finalizing any module:

1. **Visual Verification**: Open in Chrome and Firefox to verify rendering across browsers
2. **Responsive Check**: Resize browser window to verify mobile/tablet/desktop layouts
3. **Link Validation**: Ensure all internal links (to other modules) use correct relative paths
4. **Accessibility**: Verify color contrast, keyboard navigation works smoothly
5. **Slide Navigation**: Test all keyboard shortcuts and button navigation from first-to-last slide

## Key Files & Their Purpose

| File | Purpose |
|------|---------|
| `/index.html` | Course dashboard/table of contents, links to all modules |
| `/assets/css/styles.css` | Global design system, CSS variables, shared component styles |
| `/assets/js/script.js` | Slide navigation controller, keyboard/touch event handlers |
| `/SYLLABUS.md` | Complete 2-semester curriculum structure and learning outcomes |
| `/PEDAGOGY_AND_STYLE.md` | Instructional tone, pedagogical principles, design philosophy |
| `/DESIGN_SYSTEM.md` | Color palette, typography scale, component patterns, animation specs |
| `/MEMORY.md` | AI agent context and project status tracking |

## Current Module Status

**Completed**:
- Module 0: Orientation
- Module 1: Introduction to Web Architecture (currently combined with Computer Literacy content)
- Module 2: Introduction to HTML

**Planned (Not Yet Created)**:
- Module 4: HTML Deep Dive
- Module 5: CSS Fundamentals
- Module 6: CSS Layout Mastery
- Module 7: CSS Frameworks
- Module 8: Introduction to JavaScript
- Module 9: JavaScript and the DOM
- Module 10: jQuery Essentials
- Module 11: Capstone Project

## When Adding New Modules

1. **Create the directory**: `module-[X]-[name]` at project root
2. **Create `.html` presentation**: Use existing module as template, follow design system patterns
3. **Create `.md` transcript**: Comprehensive study guide with proper citations
4. **Update `/index.html`**: Add card linking to new module in curriculum grid
5. **Verify visually**: Test all navigation, check responsive design, validate links
6. **Update `/MEMORY.md`**: Document completion status and next steps

## Common Development Tasks

### Updating Design System

Edit `/assets/css/styles.css` to modify:
- CSS variable values (colors, spacing, typography)
- Global component styles (cards, buttons, animations)
- Responsive breakpoints

Changes automatically apply to all modules.

### Fixing Slide Navigation

Edit `/assets/js/script.js` to modify:
- Keyboard shortcuts
- Touch/swipe thresholds
- Progress indicator behavior
- Animation transitions

### Adding Content to a Module

1. Add new `.slide` elements to the module's `.html` file
2. Each slide gets `class="slide"` and unique content
3. Animations handled automatically via JavaScript and CSS classes

### Linking Between Modules

Use relative paths from project root:
```html
<a href="module-3-introduction-to-html/introduction-to-html.html">Go to Module 3</a>
```

## Notes on Code Quality

- **Semantic HTML**: All modules demonstrate proper semantic HTML5 practices
- **CSS Organization**: Follow the design system; use CSS variables for all colors/spacing
- **JavaScript**: Minimal, focus on essential interactivity (slide navigation only)
- **Performance**: Static files load instantly; no external APIs or dependencies beyond Google Fonts
