# Module 3: Introduction to HTML

This transcript serves as a deep dive into the foundations, anatomy, and structure of HTML, the language of the web.

---

## 🎯 Learning Objectives
By the end of this module, you will be able to:
*   **HTML Foundations**: Understand the evolution of HTML and its role as the skeleton of the web.
*   **Anatomy of Elements**: Identify tags, attributes, and content structure.
*   **Document Structure**: Build a standard HTML5 boilerplate from scratch.
*   **Essential Tags Mastery**: Use heading, paragraph, link, and media tags effectively.

---

## 📜 1. The History of HTML
The web has evolved from simple text documents to the interactive platform we use today.

*   **1989**: **Tim Berners-Lee** proposes a global hypertext system at CERN to help researchers share information [3].
*   **1991**: **HTML 1.0** is released with only 18 basic tags [2][7].
*   **1995**: **HTML 2.0** becomes the first official standard.
*   **1999**: **HTML 4.01** stabilizes the web for the next decade.
*   **2004**: **WHATWG** forms to evolve HTML into a dynamic application platform.
*   **2014**: **HTML5** is finalized, adding native support for Video, Audio, and Graphics [2].
*   **Today**: We use the **HTML Living Standard**, which is continuously updated.

---

## 📄 2. What is HTML?
**HTML** stands for **HyperText Markup Language**.
*   **HyperText**: Text that contains links to other text.
*   **Markup**: Using "tags" to annotate and structure content.
*   **Language**: A standardized set of rules for communication.

---

## 🔬 3. Anatomy of an HTML Element
An element consists of an opening tag, content, and a closing tag.

**Example**:
```html
<p class="intro">Hello, World!</p>
```
*   `<p>`: Opening Tag
*   `class="intro"`: Attribute (provides extra info)
*   `Hello, World!`: Content
*   `</p>`: Closing Tag

---

## 📋 4. Basic HTML Structure
Every HTML file must follow this boilerplate structure:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
  </body>
</html>
```
*   `<!DOCTYPE html>`: Tells the browser this is an HTML5 document.
*   `<html>`: The root container for the whole page.
*   `<head>`: Contains metadata (not visible to users).
*   `<body>`: Contains all visible content (text, images, links).

---

## 🏷️ 5. Essential HTML Tags
*   **Text**: `<h1>` to `<h6>` (Headings), `<p>` (Paragraph), `<strong>` (Bold), `<em>` (Italic).
*   **Links & Media**: `<a>` (Link), `<img>` (Image), `<video>`.
*   **Lists**: `<ul>` (Unordered), `<ol>` (Ordered), `<li>` (Item).
*   **Containers**: `<div>` (Block-level), `<span>` (Inline).

---

## 🛠️ 6. Your First Steps
1.  **Create**: Make a new file named `index.html`.
2.  **Code**: Add the basic structure and some content.
3.  **Run**: Double-click the file to open it in your browser.
4.  **Tools**: Use a code editor like **Visual Studio Code** for the best experience.

---

## 🚀 Summary
HTML is the foundation. Every single website on the planet, from Google to your personal blog, starts with these basic tags. Master the structure, and the rest becomes much easier.

**Next Module**: We will explore **HTML Deep Dive** - including Tables, Forms, and Semantic SEO.

---

## 📚 References
1.  **Pew Research Center**: [World Wide Web Timeline](https://www.pewresearch.org/internet/2014/03/11/world-wide-web-timeline/)
2.  **CERN**: [A short history of the Web](https://home.cern/science/computing/birth-web/short-history-web)
3.  **W3C**: [A Little History of the World Wide Web](https://www.w3.org/History.html)
4.  **MDN Web Docs**: [HTML: HyperText Markup Language](https://developer.mozilla.org/en-US/docs/Web/HTML)
