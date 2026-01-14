# Module 1: Introduction to the Web & HTML Fundamentals

This transcript serves as a counterpart to the "Introduction to the Web" presentation. It covers the history, infrastructure, and foundational concepts of web development.

---

## 🎯 Learning Objectives
By the end of this module, you will be able to:
*   **Understand the Web**: Define the World Wide Web and distinguish it from the Internet.
*   **Web Infrastructure**: Explain how data travels between clients and servers.
*   **HTML Basics**: Identify the purpose of HTML and its role in web development.
*   **Get Started**: Set up a basic HTML document and view it in a browser.

---

## 🌐 1. Internet vs. World Wide Web
They are often used interchangeably, but they are not the same thing.

### 🔌 The Internet (The Highway)
*   **What it is**: A global network of interconnected computers and hardware.
*   **Infrastructure**: Consists of physical cables (undersea cables), routers, and servers.
*   **History**: Started in 1969 as ARPANET [8].
*   **Purpose**: Carries all kinds of data (Web, Email, File transfers, Gaming).

### 🕸️ The World Wide Web (The Cars)
*   **What it is**: A system of interlinked documents and resources (webpages) [6].
*   **Access**: Accessed via a web browser (Chrome, Firefox, Safari).
*   **History**: Invented in 1989 by Sir Tim Berners-Lee [3][7].
*   **Protocol**: Uses HTTP (HyperText Transfer Protocol) to transmit data.

---

## 📜 2. The History of HTML
The web has evolved from simple text documents to the interactive platform we use today.

*   **1989**: **Tim Berners-Lee** proposes a global hypertext system at CERN to help researchers share information [3].
*   **1991**: **HTML 1.0** is released with only 18 basic tags [2][7].
*   **1995**: **HTML 2.0** becomes the first official standard.
*   **1999**: **HTML 4.01** stabilizes the web for the next decade.
*   **2004**: **WHATWG** forms to evolve HTML into a dynamic application platform.
*   **2014**: **HTML5** is finalized, adding native support for Video, Audio, and Graphics [2].
*   **Today**: We use the **HTML Living Standard**, which is continuously updated.

> *"The Web does not just connect machines, it connects people."* — Sir Tim Berners-Lee

---

## 🧱 3. Building Blocks of the Web
Every modern website is built using three core technologies:
1.  **HTML (Structure)**: The skeleton. Defines the content (headings, paragraphs, images).
2.  **CSS (Style)**: The skin. Defines the appearance (colors, fonts, layout).
3.  **JavaScript (Behavior)**: The brain. Adds interactivity (animations, data processing).

---

## 🔄 4. How the Web Works: The Client-Server Model
Web browsing is a conversation between two entities:

1.  **The Client**: Your device and browser. It sends an **HTTP Request** (e.g., "I want to see google.com").
2.  **The Server**: A powerful computer hosting the website. It sends an **HTTP Response** (e.g., "Here is the HTML file for google.com").

**HTTP vs HTTPS**:
*   **HTTP**: HyperText Transfer Protocol.
*   **HTTPS**: The "S" stands for Secure. Your data is encrypted for privacy.

---

## 📄 5. What is HTML?
**HTML** stands for **HyperText Markup Language**.
*   **HyperText**: Text that contains links to other text.
*   **Markup**: Using "tags" to annotate and structure content.
*   **Language**: A standardized set of rules for communication.

---

## 🔬 6. Anatomy of an HTML Element
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

## 📋 7. Basic HTML Structure
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

## 🏷️ 8. Essential HTML Tags
*   **Text**: `<h1>` to `<h6>` (Headings), `<p>` (Paragraph), `<strong>` (Bold), `<em>` (Italic).
*   **Links & Media**: `<a>` (Link), `<img>` (Image), `<video>`.
*   **Lists**: `<ul>` (Unordered), `<ol>` (Ordered), `<li>` (Item).
*   **Containers**: `<div>` (Block-level), `<span>` (Inline).

---

## 🛠️ 9. Your First Steps
1.  **Create**: Make a new file named `index.html`.
2.  **Code**: Add the basic structure and some content.
3.  **Run**: Double-click the file to open it in your browser.
4.  **Tools**: Use a code editor like **Visual Studio Code** for the best experience.

---

## 🚀 Summary
Today we laid the foundation of the web. We learned about the infrastructure that powers it, the history of its creation, and the basic syntax of the language that builds it.

**Next Module**: We will dive deep into **CSS** to make our pages look beautiful!

---

## 📚 References

1.  **GitHub Docs**: [Viewing and understanding files](https://docs.github.com/en/repositories/working-with-files/using-files/viewing-and-understanding-files)
2.  **Pew Research Center**: [World Wide Web Timeline](https://www.pewresearch.org/internet/2014/03/11/world-wide-web-timeline/)
3.  **CERN**: [A short history of the Web](https://home.cern/science/computing/birth-web/short-history-web)
4.  **CERN**: [A short history of the Web (Alternate)](https://www.home.cern/science/computing/birth-web/short-history-web)
5.  **Wikipedia**: [History of the World Wide Web](https://en.wikipedia.org/wiki/History_of_the_World_Wide_Web)
6.  **Wikipedia**: [World Wide Web](https://en.wikipedia.org/wiki/World_Wide_Web)
7.  **W3C**: [A Little History of the World Wide Web](https://www.w3.org/History.html)
8.  **National Science and Media Museum**: [A short history of the internet](https://www.scienceandmediamuseum.org.uk/objects-and-stories/short-history-internet)
