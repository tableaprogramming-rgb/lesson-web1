# Module 6: CSS Layout Mastery

Welcome to the most powerful module yet! After styling individual elements, it's time to master *layout*—how to arrange elements on a page in any configuration you can imagine. This module covers positioning, Flexbox, CSS Grid, and the new frontier of Container Queries and Animations. These tools separate amateur pages from professional websites.

---

## 🎯 Learning Objectives

By the end of this module, you will be able to:

*   **Master Positioning**: Strategically use `absolute`, `fixed`, and `sticky`.
*   **Build with Flex & Grid**: Choose the best tool for 1D vs 2D layouts.
*   **Implement Native Nesting**: Write cleaner, more organized CSS code.
*   **Master Responsive Design**: Transition from Media Queries to Container Queries.
*   **Add Life with Motion**: Implement smooth Transitions and Keyframe Animations.
*   **Control Overflow & Stacking**: Manage how content spills and overlaps.

---

## 🏗️ 1. Modern Layout Engines: Flexbox & Grid

### Flexbox (1-Dimensional)
Best for rows OR columns (like navbars or lists).
*   **Key Property**: `display: flex;`
*   **Alignment**: Use `justify-content` (main axis) and `align-items` (cross axis).
*   **Shorthand**: `place-items: center;` (The quickest way to center anything).

### CSS Grid (2-Dimensional)
Best for full-page structures and complex galleries.
*   **Key Property**: `display: grid;`
*   **The `fr` Unit**: Represents a fraction of the available space.
*   **Autoflow**: `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));` creates a perfectly responsive grid without media queries.

---

## 🎯 2. The New Frontier: Nesting & Container Queries

### Native CSS Nesting
Native nesting (previously only in Sass) is now supported in all modern browsers. It keeps your code hierarchical and easy to read.

```css
.card {
  padding: 1rem;
  background: white;

  & h2 { color: blue; } /* Nests inside .card */
  &:hover { transform: scale(1.05); }
}
```

### Container Queries (`@container`)
While Media Queries respond to the **browser viewport**, Container Queries respond to the **parent element's size**. This allows components to be truly modular.

```css
.main-wrapper { container-type: inline-size; }

@container (min-width: 400px) {
  .card { display: flex; } /* Change layout based on component width! */
}
```

---

## 📍 3. Positioning, Overflow, and Stacking

### Positioning Refresher
*   **Relative**: Stays in flow but can be moved. Creates a reference point for children.
*   **Absolute**: Removed from flow. Positions relative to the nearest "positioned" parent.
*   **Sticky**: Sticks to the top/bottom while the parent is in the viewport.

### Stacking Contexts & Z-Index
`z-index` isn't a simple "who is higher" number. It's confined to a **Stacking Context**. Certain properties (like `opacity < 1`, `transform`, or `filter`) create a new context, meaning your high `z-index` item might still be hidden behind a low `z-index` item in a different group.

### Managing Overflow
When content is too big for its box:
*   `overflow: hidden`: Clips the extra content.
*   `overflow: scroll`: Adds scrollbars (always).
*   `overflow: auto`: Adds scrollbars only when needed.

---

## ✨ 4. Motion: Transitions & Animations

### Transitions (State A to State B)
Smoothly change a property over time when a state changes (like `:hover`).
```css
.btn {
  background: blue;
  transition: background 0.3s ease-in-out;
}
.btn:hover { background: darkblue; }
```

### Keyframe Animations (Complex Motion)
Create multi-step animations that can loop forever.
```css
@keyframes float {
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
}

.icon { animation: float 3s infinite; }
```

---

## 🚀 Summary

Module 6 has given you the power to shape the web:
*   You use **Flexbox** and **Grid** as your primary layout engines.
*   You write modern, organized code with **Nesting**.
*   You create truly modular components with **Container Queries**.
*   You bring websites to life with **Transitions** and **Animations**.

With these tools, you are no longer just styling elements—you are building immersive, responsive, and dynamic user interfaces.

---

## 📚 References

1.  **web.dev**: [Learn CSS - Layout](https://web.dev/learn/css/layout)
2.  **web.dev**: [Learn CSS - Grid](https://web.dev/learn/css/grid)
3.  **MDN Web Docs**: [CSS Nesting](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Nesting)
4.  **MDN Web Docs**: [Container Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries)
5.  **Josh W. Comeau**: [The Surreal World of Stacking Contexts](https://www.joshwcomeau.com/css/stacking-contexts/)
6.  **CSS-Tricks**: [A Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
