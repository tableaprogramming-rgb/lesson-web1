# Module 5: CSS Fundamentals

Congratulations! You've mastered HTML—the skeleton of web pages. Now it's time to add skin, color, and personality with CSS. CSS (Cascading Style Sheets) is the language that transforms plain HTML into beautiful, engaging websites. This module teaches you the foundational concepts you need to style anything on the web, updated with modern features from the "Learn CSS" curriculum.

---

## 🎯 Learning Objectives

By the end of this module, you will be able to:

*   **Master the Cascade & Inheritance**: Understand how CSS rules flow and which properties are inherited by children.
*   **Write Advanced Selectors**: Target elements using combinators, pseudo-classes, and pseudo-elements.
*   **Decipher Specificity**: Predict style wins using a points-based system and learn about Cascade Layers.
*   **Control the Box Model**: Manipulate margins, padding, and borders like a pro.
*   **Use Modern Sizing**: Move beyond pixels with `rem`, `em`, `vh`, `vw`, and logical properties.
*   **Implement Design Systems**: Use CSS Custom Properties (Variables) and Functions (`calc`, `clamp`).

---

## 🎨 1. The Core Architecture of CSS

### What is CSS?

CSS (Cascading Style Sheets) is a language for styling HTML documents. While HTML describes *what* content is, CSS describes *how it looks*.

**Think of it this way**:
*   HTML = The skeleton (structure)
*   CSS = The skin, clothes, and makeup (presentation)

### The Three Pillars of CSS

To truly master CSS, you must understand how it handles conflict.

1.  **The Cascade**: Rules flow from top to bottom. If two rules have the same specificity, the last one wins.
2.  **Specificity**: A weighting system that determines which rule is "stronger." An ID selector always beats a Class selector.
3.  **Inheritance**: Some properties (like `color` and `font-family`) are passed from parent to child automatically, while others (like `border` and `margin`) are not.

### How to Add CSS to HTML

1.  **Inline**: `<p style="color: blue;">` (Avoid—hard to maintain)
2.  **Internal**: `<style>` block in `<head>` (Good for quick prototypes)
3.  **External**: `<link rel="stylesheet" href="style.css">` (**Best Practice**)

---

## 🎯 2. Selectors: Targeting Elements Precisely

Selectors are how you tell CSS "which elements should I style?"

### Basic Selectors
*   **Element**: `p { ... }` (All paragraphs matching the tag name)
*   **Class**: `.card { ... }` (Reusable styles for multiple elements. Start with `.`)
*   **ID**: `#header { ... }` (Unique identifier for exactly one element per page. Start with `#`)

**Class vs ID: The Golden Rule**
Use **Classes** for your primary styling because they are reusable and flexible. Use **IDs** only when an element is truly unique (like a main navigation bar) or when you need a specific "hook" for JavaScript or jump-links. IDs are much "heavier" in specificity, making them harder to override later.

### Relationship-Based Selectors (Combinators)
*   **Descendant (space)**: `article p` (All paragraphs inside an article)
*   **Child (`>`)**: `ul > li` (Only direct children)
*   **Adjacent Sibling (`+`)**: `h2 + p` (The paragraph immediately after an H2)

### The "State" Selectors (Pseudo-classes)
Pseudo-classes target elements in specific states:
*   `:hover`: When a mouse is over it.
*   `:focus`: When selected via keyboard (crucial for accessibility!).
*   `:nth-child(n)`: Target specific items in a list (e.g., `:nth-child(odd)`).

### The "Virtual" Selectors (Pseudo-elements)
Target parts of an element:
*   `::before` / `::after`: Add decorative content via CSS.
*   `::first-letter`: Create a "drop cap" effect.

---

## 📦 3. Advanced Box Model & Sizing

### The Box Model Layers
Every element is a box consisting of: **Content → Padding → Border → Margin**.

**Pro-Tip**: Always use `box-sizing: border-box;`. This ensures that padding and borders are included in the element's width, making layout math much easier.

### Moving Beyond Pixels (Relative Units)
Modern web design requires flexibility. Stop using `px` for everything!

*   **`rem`**: **R**oot **em**. Relative to the `<html>` font size (usually 16px). This is the gold standard for accessibility because if a user changes their browser's default font size, `rem` units scale accordingly.
*   **`em`**: Relative to the font size of the **parent** (or the element itself). Useful for components where padding/margins should scale proportionally to the text inside them.
*   **`vw` / `vh`**: Relative to the **viewport** width/height. (100vw = 100% of the screen width).
*   **`%`**: Relative to the **parent's** dimensions.

### Logical Properties: Future-Proofing for Global Users
Physical properties like `margin-left` are "stuck" to the left side of the screen. **Logical properties** adapt to the "flow" of the language (e.g., Arabic is right-to-left).
*   `margin-inline-start`: Becomes `margin-left` in English, but `margin-right` in Arabic.
*   `padding-block`: Handles both top and bottom padding relative to the text flow.

By using logical properties, your website is automatically more accessible to international audiences.

---

## 🛠️ 4. Modern CSS Power Tools

### Custom Properties (Variables)
Variables allow you to define a value once and reuse it throughout your site.

```css
:root {
  --primary-color: #6366f1;
  --spacing-unit: 1rem;
}

.button {
  background-color: var(--primary-color);
  padding: var(--spacing-unit);
}
```

### CSS Functions
CSS isn't just static styles; it can perform calculations:
*   **`calc()`**: Perform math, e.g., `width: calc(100% - 20px);`
*   **`min()` & `max()`**: Provide boundaries. `width: min(90%, 1200px);` means "be 90% wide, but never exceed 1200px."
*   **`clamp(MIN, PREFERRED, MAX)`**: The ultimate responsive tool. It prevents values from getting too small or too large while allowing them to scale in between.
    *   Example: `font-size: clamp(1rem, 5vw, 3rem);`
    *   Result: Text scales with the screen, but never drops below 1rem or grows above 3rem. No media queries required!

---

## ⚖️ 5. Specificity & The Cascade Layers

### The Specificity Scoreboard
When rules collide, CSS calculates a score:
1.  **Inline Styles**: 1,000 pts
2.  **IDs**: 100 pts
3.  **Classes/Pseudo-classes**: 10 pts
4.  **Elements**: 1 pt

### Cascade Layers (`@layer`)
A new way to control the "Cascade" without fighting specificity:
```css
@layer base, components, utilities;

@layer base {
  h1 { color: blue; } /* Lowest priority */
}

@layer utilities {
  .text-red { color: red; } /* Highest priority */
}
```

---

## 🚀 Summary

Module 5 has moved you from a "styler" to a "CSS architect":
*   You understand the **Cascade** and how **Inheritance** flows.
*   You can target anything with **Advanced Selectors**.
*   You build flexible layouts using **Relative Units** and **Logical Properties**.
*   You maintain clean code with **Custom Properties** and **Functions**.

In the next module, we will put these styles into motion with **CSS Layout Mastery**, exploring Flexbox, Grid, and the new world of Container Queries.

---

## 📚 References

1.  **web.dev**: [Learn CSS - Welcome](https://web.dev/learn/css/welcome)
2.  **MDN Web Docs**: [CSS Inheritance](https://developer.mozilla.org/en-US/docs/Web/CSS/Inheritance)
3.  **MDN Web Docs**: [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
4.  **Modern CSS**: [A Guide to Logical Properties](https://moderncss.dev/guide-to-advanced-css-selectors-part-1/)
5.  **Ahmad Shadeed**: [Digging Into CSS Properties](https://ishadeed.com/article/logical-properties/)
