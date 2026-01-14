# 📘 Web Fundamentals Syllabus

> A comprehensive two-semester curriculum designed to take students from absolute beginners to confident front-end developers.

---

## 🎯 Course Overview

**Course Title:** Web Fundamentals  
**Target Audience:** College-aged students (18-24) with little to no prior programming experience  
**Duration:** 2 Semesters  
**Delivery Mode:** Face-to-Face (Lecture + Hands-on Labs)

### Academic Calendar
| Semester | Subject | Period | Focus Area |
|----------|---------|--------|------------|
| **1st Semester** | Web Fundamentals I | August - December | HTML & CSS Foundations |
| **2nd Semester** | Web Fundamentals II | January - May | Frameworks, JavaScript & Interactivity |

### Time Allocation Per Semester
| Factor | Weeks |
|--------|-------|
| Total semester weeks | ~18-20 weeks |
| Less: Extra-curricular events | -1.5 weeks |
| Less: Term exams (Prelim, Midterm, Finals) | -3 weeks |
| **Net Teaching Weeks** | **~14 weeks** |

### Learning Outcomes
Upon successful completion of this course, students will be able to:
- Understand how the web works at an infrastructural level
- Build modern, responsive websites using HTML, CSS, and JavaScript
- Utilize CSS frameworks to accelerate development
- Apply interactivity using JavaScript and jQuery
- Demonstrate proficiency in professional developer tools and workflows

---

## 📚 Course Modules

---

### **Module 0: Orientation** 🔭
*Start Here — Course introduction and setup*

**Topics Covered:**
- Welcome and course overview
- What to expect from this course
- Introduction to required tools (code editor, browser, files)
- Setting up your development environment
- Navigating the course materials

**Learning Objectives:**
- Understand the course roadmap and expectations
- Install and configure Visual Studio Code
- Create your first project folder

**Materials:**
- `lesson-0-orientation/orientation.html`
- `lesson-0-orientation/orientation.md`

---

### **Module 1: Computer & Digital Literacy** 💻
*Prerequisite — Foundational computer skills*

**Topics Covered:**
- Understanding files and folders
- File extensions and their meanings (.html, .css, .js, .png, etc.)
- Navigating the file system
- Basic keyboard shortcuts for productivity
- Introduction to the command line (optional advanced topic)

**Learning Objectives:**
- Navigate file systems confidently on any operating system
- Understand how files and folders relate to web projects
- Manage and organize project files efficiently

**Hands-on Activity:**
- Create a structured project folder hierarchy
- Practice file naming conventions

---

### **Module 2: Introduction to the Web & Web Development** 🌐
*What is web development, particularly the architecture of front-end*

**Topics Covered:**
- **Part A: Internet vs. World Wide Web**
  - The Internet as infrastructure (the highway)
  - The World Wide Web as a service (the cars)
  - Brief history of ARPANET to modern Internet
- **Part B: How the Web Works**
  - The Client-Server model
  - HTTP/HTTPS protocol basics
  - What happens when you type a URL
  - DNS and IP addresses (high-level)
- **Part C: Front-End Architecture**
  - What is front-end development?
  - The three pillars: HTML (structure), CSS (style), JavaScript (behavior)
  - How browsers render web pages
  - Introduction to the DOM (Document Object Model)
- **Part D: The Web Development Ecosystem**
  - Roles: Front-end vs. Back-end vs. Full-stack
  - Modern tools and workflows overview
  - Career paths in web development

**Learning Objectives:**
- Distinguish between the Internet and the World Wide Web
- Explain the client-server architecture
- Identify the roles of HTML, CSS, and JavaScript in web pages
- Understand front-end development as a career path

**Materials:**
- `lesson-1-introduction/introduction.html`
- `lesson-1-introduction/introduction.md`

---

### **Module 3: Introduction to HTML** 📄
*The skeleton of every web page*

**Topics Covered:**
- **Part A: HTML Foundations**
  - What is HTML? (HyperText Markup Language)
  - The evolution of HTML (HTML 1.0 → HTML5 Living Standard)
  - Setting up your first `.html` file
- **Part B: Anatomy of HTML**
  - Elements, tags, and attributes
  - Opening tags, closing tags, and self-closing tags
  - Nesting elements properly
- **Part C: HTML Document Structure**
  - The DOCTYPE declaration
  - `<html>`, `<head>`, and `<body>` elements
  - Meta tags and page titles
  - Character encoding (UTF-8)
- **Part D: Essential HTML Elements**
  - Text elements: headings `<h1>`-`<h6>`, paragraphs `<p>`, spans `<span>`
  - Text formatting: `<strong>`, `<em>`, `<br>`, `<hr>`
  - Links: anchor tags `<a>` and the `href` attribute
  - Images: `<img>` tag, `src`, `alt`, and best practices

**Learning Objectives:**
- Create a valid HTML5 document from scratch
- Use semantic and structural HTML elements
- Implement links and images in web pages

**Hands-on Project:**
- Build a simple "About Me" personal page

---

### **Module 4: HTML Deep Dive** 🧱
*Advanced HTML elements and semantics*

**Topics Covered:**
- **Part A: Lists and Tables**
  - Ordered lists `<ol>` and unordered lists `<ul>`
  - List items `<li>` and nested lists
  - Tables: `<table>`, `<tr>`, `<th>`, `<td>`
  - Table accessibility and when to use tables
- **Part B: Forms and User Input**
  - The `<form>` element and form actions
  - Input types: text, email, password, number, date, etc.
  - Labels, placeholders, and accessibility
  - Buttons, checkboxes, radio buttons, and dropdowns
  - Form validation basics (HTML5 attributes)
- **Part C: Semantic HTML5**
  - Why semantics matter (SEO, accessibility, maintainability)
  - Semantic elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`
  - Div vs. semantic elements
- **Part D: Multimedia and Embedding**
  - Audio: `<audio>` element
  - Video: `<video>` element
  - Embedding content: `<iframe>` (YouTube, maps, etc.)

**Learning Objectives:**
- Build complex page layouts using semantic HTML
- Create functional web forms with validation
- Embed multimedia content in web pages

**Hands-on Project:**
- Create a multi-page website with navigation, forms, and embedded content

---

### **Module 5: CSS Fundamentals** 🎨
*Making your pages beautiful*

**Topics Covered:**
- **Part A: Introduction to CSS**
  - What is CSS? (Cascading Style Sheets)
  - How to add CSS: inline, internal, and external stylesheets
  - The CSS syntax: selectors, properties, and values
  - The cascade and specificity
- **Part B: CSS Selectors**
  - Element selectors
  - Class and ID selectors
  - Combinators: descendant, child, sibling
  - Pseudo-classes (`:hover`, `:focus`, `:nth-child`)
  - Pseudo-elements (`::before`, `::after`)
- **Part C: The Box Model**
  - Content, padding, border, and margin
  - `box-sizing: border-box` explained
  - Display types: block, inline, inline-block
- **Part D: Colors, Typography, and Backgrounds**
  - Color formats: hex, RGB, RGBA, HSL
  - Web fonts and Google Fonts
  - Font properties: size, weight, style, line-height
  - Background images, gradients, and layering

**Learning Objectives:**
- Apply styles to HTML elements using CSS
- Understand the box model and layout basics
- Style typography and color schemes effectively

**Hands-on Project:**
- Style your "About Me" page with a custom color scheme and typography

---

### **Module 6: CSS Layout Mastery** 📐
*Modern layout techniques*

**Topics Covered:**
- **Part A: Positioning**
  - Static, relative, absolute, fixed, and sticky positioning
  - The `z-index` property
  - Practical use cases for each position type
- **Part B: Flexbox**
  - The flex container and flex items
  - Main axis vs. cross axis
  - Properties: `justify-content`, `align-items`, `flex-wrap`, `gap`
  - Building navigation bars and card layouts
- **Part C: CSS Grid**
  - Grid containers and grid items
  - Defining rows and columns
  - Grid template areas
  - Auto-placement and responsive grids
  - `fr` units and `minmax()`
- **Part D: Responsive Design**
  - Mobile-first design philosophy
  - Media queries and breakpoints
  - Responsive images and typography
  - The viewport meta tag

**Learning Objectives:**
- Create complex layouts using Flexbox and Grid
- Build responsive designs that work on all screen sizes
- Apply modern positioning techniques

**Hands-on Project:**
- Create a responsive portfolio page with a grid-based gallery

---

### **Module 7: CSS Frameworks** 🛠️
*Accelerating development with pre-built solutions*

**Topics Covered:**
- **Part A: Introduction to CSS Frameworks**
  - What are CSS frameworks and why use them?
  - Popular frameworks overview: Bootstrap, Tailwind, Bulma
  - Pros and cons of using frameworks
- **Part B: Bootstrap Fundamentals**
  - Getting started with Bootstrap (CDN vs. npm)
  - The Bootstrap grid system
  - Pre-built components: buttons, cards, navbars, modals
  - Utility classes for spacing, colors, and typography
  - Customizing Bootstrap with Sass (overview)
- **Part C: Tailwind CSS Introduction (Optional)**
  - Utility-first CSS philosophy
  - Common utility classes
  - When to choose Tailwind vs. Bootstrap
- **Part D: Best Practices**
  - When to use a framework vs. custom CSS
  - Overriding framework styles safely
  - Performance considerations

**Learning Objectives:**
- Integrate Bootstrap into a web project
- Use Bootstrap's grid system and components
- Make informed decisions about framework usage

**Hands-on Project:**
- Rebuild your portfolio using Bootstrap components

---

### **Module 8: Introduction to JavaScript** ⚡
*Bringing your pages to life*

**Topics Covered:**
- **Part A: JavaScript Fundamentals**
  - What is JavaScript and its role in web development
  - Running JavaScript: console, inline, and external scripts
  - Variables: `var`, `let`, and `const`
  - Data types: strings, numbers, booleans, null, undefined
- **Part B: Operators and Control Flow**
  - Arithmetic, comparison, and logical operators
  - Conditional statements: `if`, `else if`, `else`
  - Switch statements
  - Loops: `for`, `while`, `for...of`
- **Part C: Functions**
  - Declaring and invoking functions
  - Parameters and return values
  - Arrow functions (`=>`)
  - Scope: global vs. local
- **Part D: Arrays and Objects**
  - Creating and manipulating arrays
  - Common array methods: `push`, `pop`, `map`, `filter`, `forEach`
  - Object literals and properties
  - Accessing and modifying objects

**Learning Objectives:**
- Write basic JavaScript programs
- Use variables, operators, and control structures
- Create and use functions, arrays, and objects

**Hands-on Activity:**
- Build a simple quiz game in the console

---

### **Module 9: JavaScript and the DOM** 🖱️
*Connecting JavaScript to your web pages*

**Topics Covered:**
- **Part A: The Document Object Model**
  - What is the DOM?
  - The DOM tree structure
  - Nodes and elements
- **Part B: Selecting Elements**
  - `getElementById`, `getElementsByClassName`, `getElementsByTagName`
  - Modern methods: `querySelector`, `querySelectorAll`
- **Part C: Manipulating the DOM**
  - Changing text content and HTML
  - Modifying styles and classes
  - Creating and removing elements
  - Working with attributes
- **Part D: Event Handling**
  - What are events?
  - Common events: click, submit, keydown, mouseover
  - Adding event listeners
  - Event objects and event delegation
  - Form handling with JavaScript

**Learning Objectives:**
- Select and manipulate DOM elements
- Respond to user interactions with event listeners
- Dynamically update page content

**Hands-on Project:**
- Build an interactive to-do list application

---

### **Module 10: jQuery Essentials** ✨
*Simplifying JavaScript with jQuery*

**Topics Covered:**
- **Part A: Introduction to jQuery**
  - What is jQuery and its history
  - Why jQuery was revolutionary (and when to still use it today)
  - Including jQuery in your project (CDN)
- **Part B: jQuery Basics**
  - The `$()` function and document ready
  - Selecting elements with jQuery selectors
  - Chaining methods
- **Part C: DOM Manipulation with jQuery**
  - `.text()`, `.html()`, `.val()`
  - `.css()`, `.addClass()`, `.removeClass()`, `.toggleClass()`
  - `.hide()`, `.show()`, `.fadeIn()`, `.fadeOut()`, `.slideToggle()`
- **Part D: Events and Effects**
  - `.on()`, `.click()`, `.hover()`
  - Animation methods
  - AJAX basics with `$.ajax()`, `$.get()`, `$.post()` (introduction)
- **Part E: jQuery vs. Modern JavaScript**
  - Comparing jQuery to vanilla JavaScript
  - When jQuery is still useful
  - The shift toward modern frameworks

**Learning Objectives:**
- Use jQuery to simplify DOM manipulation
- Implement animations and effects
- Understand when jQuery is appropriate to use

**Hands-on Project:**
- Enhance your to-do list with jQuery animations and effects

---

### **Module 11: Capstone Project** 🏆
*Putting it all together*

**Project Requirements:**
Students will design and build a complete, responsive website that demonstrates mastery of all course concepts.

**Project Specifications:**
- Minimum 3 pages with consistent navigation
- Responsive design (mobile, tablet, desktop)
- Semantic HTML structure
- Custom CSS styling (with or without framework)
- Interactive features using JavaScript/jQuery
- At least one form with validation
- Proper file organization and code documentation

**Suggested Project Ideas:**
1. Personal portfolio website
2. Restaurant or café website
3. Small business landing page
4. Blog or magazine layout
5. Event or conference website

**Deliverables:**
- Complete website source code
- README documentation
- Live deployment (GitHub Pages or similar)
- Presentation/demo to class

---

## 📅 Semester Schedules

---

### 📗 SUBJECT 1: Web Fundamentals I (1st Semester)
**Period:** August - December  
**Focus:** HTML & CSS Foundations

| Week | Content | Notes |
|------|---------|-------|
| 1 | **Module 0:** Orientation | Course intro, tools setup |
| 2 | **Module 1:** Computer & Digital Literacy | Files, folders, shortcuts |
| 3 | **Module 2:** Introduction to Web Development | Internet, architecture, client-server |
| 4 | **Module 3:** Introduction to HTML (Part A-B) | HTML foundations, anatomy |
| 5 | **Module 3:** Introduction to HTML (Part C-D) | Document structure, essential elements |
| — | 📝 **PRELIM EXAMINATION** | Covers Modules 0-3 |
| 6 | **Module 4:** HTML Deep Dive (Part A-B) | Lists, tables, forms |
| 7 | **Module 4:** HTML Deep Dive (Part C-D) | Semantic HTML, multimedia |
| 8 | **Module 5:** CSS Fundamentals (Part A-B) | Intro to CSS, selectors |
| 9 | **Module 5:** CSS Fundamentals (Part C-D) | Box model, typography |
| — | 📝 **MIDTERM EXAMINATION** | Covers Modules 4-5 |
| 10 | **Module 6:** CSS Layout Mastery (Part A-B) | Positioning, Flexbox |
| 11 | **Module 6:** CSS Layout Mastery (Part C-D) | CSS Grid, responsive design |
| 12 | **Semester Project Work** | Multi-page static website |
| 13 | **Semester Project Work** | Completion & presentation |
| — | 📝 **FINAL EXAMINATION** | Covers Module 6 + cumulative |

**Semester 1 Deliverable:** Multi-page static website using HTML & CSS

---

### 📘 SUBJECT 2: Web Fundamentals II (2nd Semester)
**Period:** January - May  
**Focus:** Frameworks, JavaScript & Interactivity  
**Prerequisite:** Successful completion of Web Fundamentals I

| Week | Content | Notes |
|------|---------|-------|
| 1 | **Semester 1 Review** | Refresher on HTML & CSS fundamentals |
| 2 | **Module 7:** CSS Frameworks (Part A-B) | Intro to frameworks, Bootstrap basics |
| 3 | **Module 7:** CSS Frameworks (Part C-D) | Tailwind overview, best practices |
| 4 | **Module 8:** Introduction to JavaScript (Part A-B) | JS fundamentals, control flow |
| 5 | **Module 8:** Introduction to JavaScript (Part C-D) | Functions, arrays, objects |
| — | 📝 **PRELIM EXAMINATION** | Covers Modules 7-8 |
| 6 | **Module 9:** JavaScript and the DOM (Part A-B) | DOM basics, selecting elements |
| 7 | **Module 9:** JavaScript and the DOM (Part C-D) | Manipulation, event handling |
| 8 | **Module 10:** jQuery Essentials (Part A-C) | jQuery basics, DOM manipulation |
| 9 | **Module 10:** jQuery Essentials (Part D-E) | Events, effects, comparison to vanilla JS |
| — | 📝 **MIDTERM EXAMINATION** | Covers Modules 9-10 |
| 10 | **Module 11:** Capstone Project | Planning & design phase |
| 11 | **Module 11:** Capstone Project | Development phase |
| 12 | **Module 11:** Capstone Project | Development & testing |
| 13 | **Module 11:** Capstone Project | Final polish & deployment |
| 14 | **Capstone Presentations** | Student demos & peer review |
| — | 📝 **FINAL EXAMINATION** | Cumulative (Modules 7-11) |

**Semester 2 Deliverable:** Complete interactive website (Capstone Project)

---

### 🔗 Semester Transition Notes

When transitioning from Subject 1 to Subject 2:
1. **Week 1 Review** — Dedicate the first week to reviewing key HTML/CSS concepts
2. **Portfolio Continuity** — Students should use their Semester 1 project as a foundation for Semester 2 enhancements
3. **Skill Assessment** — Brief diagnostic quiz to identify any gaps from the break

---

## 🧰 Required Tools & Resources

### Software
- **Code Editor:** Visual Studio Code (free)
- **Web Browser:** Google Chrome or Firefox (with Developer Tools)
- **Version Control:** Git & GitHub (introduced progressively)

### Online Resources
- MDN Web Docs: [developer.mozilla.org](https://developer.mozilla.org)
- W3Schools: [w3schools.com](https://www.w3schools.com)
- CSS-Tricks: [css-tricks.com](https://css-tricks.com)
- Bootstrap Documentation: [getbootstrap.com](https://getbootstrap.com)
- jQuery Documentation: [jquery.com](https://jquery.com)

---

## 📊 Assessment Structure

### Subject 1: Web Fundamentals I (1st Semester)
| Assessment Type | Weight | Description |
|-----------------|--------|-------------|
| Hands-on Labs | 30% | Practical exercises for Modules 0-6 |
| Module Quizzes | 20% | Short assessments after each module |
| Term Exams | 30% | Prelim, Midterm, Finals |
| Semester Project | 20% | Multi-page static website |

### Subject 2: Web Fundamentals II (2nd Semester)
| Assessment Type | Weight | Description |
|-----------------|--------|-------------|
| Hands-on Labs | 25% | Practical exercises for Modules 7-10 |
| Module Quizzes | 15% | Short assessments after each module |
| Term Exams | 25% | Prelim, Midterm, Finals |
| Capstone Project | 35% | Complete interactive website |

---

## 🔮 Optional Advanced Topics
*For accelerated learners or as bonus content*

- CSS Animations and Transitions
- CSS Variables (Custom Properties)
- Sass/SCSS Preprocessing
- JavaScript ES6+ Features (Promises, async/await)
- Introduction to APIs and Fetch
- Introduction to Frontend Frameworks (React overview)
- Version Control with Git & GitHub
- Deploying with GitHub Pages or Netlify
- Web Accessibility (WCAG guidelines)
- Performance Optimization

---

## 📖 Appendix: Lesson Folder Structure

Each lesson follows a consistent structure:
```
lesson-X-topic/
├── topic.html        # Visual presentation for lecture
├── topic.md          # Transcript/study guide
└── examples/         # Code examples (where applicable)
```

---

*This syllabus is designed to be flexible. Instructors may adjust pacing based on class needs and student progress.*
