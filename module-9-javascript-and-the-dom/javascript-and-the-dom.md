# Module 9: JavaScript and the DOM

You've learned JavaScript fundamentals. Now it's time to connect JavaScript to the web page itself. The **DOM** (Document Object Model) is the bridge between JavaScript and HTML. It's how you manipulate page content dynamically, respond to user interactions, and build interactive web applications.

---

## 🎯 Learning Objectives

By the end of this module, you will be able to:

* **Understand the DOM**: Visualize how browsers represent HTML as a tree structure.
* **Select Elements**: Use `getElementById`, `querySelector`, and other selection methods.
* **Manipulate Content**: Change text, HTML, and attributes dynamically.
* **Modify Styles**: Update CSS properties from JavaScript.
* **Handle Events**: Respond to user interactions (clicks, typing, hovering).
* **Create Elements**: Dynamically generate new HTML elements.
* **Use Event Delegation**: Efficiently handle events on dynamic content.
* **Build Interactive Features**: Combine selection, manipulation, and events to create interactive experiences.

---

## 🌳 1. The Document Object Model (DOM): Understanding Structure

### What is the DOM?

The DOM is the browser's representation of an HTML document as a tree of objects. Every HTML element, attribute, and text node becomes an object you can access and manipulate with JavaScript.

### The DOM Tree

HTML structure becomes a tree:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Welcome</h1>
    <p>This is a paragraph</p>
  </body>
</html>
```

Becomes a tree:

```
document
├── html
│   ├── head
│   │   └── title
│   │       └── "My Page" (text node)
│   └── body
│       ├── h1
│       │   └── "Welcome" (text node)
│       └── p
│           └── "This is a paragraph" (text node)
```

### Key DOM Concepts

* **Node**: Any item in the tree (element, text, comment)
* **Element**: HTML tag like `<p>`, `<div>`, `<h1>`
* **Document**: The root object representing the entire page
* **Parent/Child/Sibling**: Relationships between nodes

### Accessing the DOM

Start with the global `document` object:

```javascript
console.log(document);              // The entire DOM
console.log(document.body);         // The <body> element
console.log(document.head);         // The <head> element
console.log(document.title);        // "My Page"
```

---

## 🔍 2. Selecting Elements: Finding What You Need

The first step to manipulating HTML is selecting the elements you want to change.

### getElementById: Select by ID

Find a single element with a specific ID:

```html
<button id="myButton">Click Me</button>
```

```javascript
let button = document.getElementById("myButton");
console.log(button);  // The button element
```

**Characteristics**:
* Returns single element (or null if not found)
* IDs should be unique per page
* Fast selection method

### querySelector: CSS Selector Method (Modern)

Select elements using CSS selector syntax:

```html
<p class="intro">First paragraph</p>
<p class="intro">Second paragraph</p>
<div id="content">Content area</div>
```

```javascript
// Select by class
let intro = document.querySelector(".intro");  // First element with class "intro"

// Select by ID
let content = document.querySelector("#content");

// Select by element type
let para = document.querySelector("p");  // First <p> element

// Complex selectors
let link = document.querySelector("nav a");  // First <a> inside <nav>
```

**Characteristics**:
* Returns first match only
* Supports any CSS selector
* Returns null if not found
* Modern, recommended approach

### querySelectorAll: Select Multiple Elements

Select all matching elements:

```javascript
let allIntros = document.querySelectorAll(".intro");  // All with class "intro"

// Loop through results
allIntros.forEach(element => {
  console.log(element);
});

// Access by index
console.log(allIntros[0]);  // First element
console.log(allIntros.length);  // Number of elements
```

### getElementByClassName: Select by Class

```javascript
let items = document.getElementsByClassName("item");  // All with class "item"
```

**Note**: This returns a "live" collection that updates if DOM changes (different from `querySelectorAll`).

### getElementById vs querySelector

| Method | Syntax | Returns |
|--------|--------|---------|
| `getElementById` | ID name only | Single element or null |
| `querySelector` | CSS selector | First match or null |
| `querySelectorAll` | CSS selector | All matches (NodeList) |

**Modern best practice**: Use `querySelector` and `querySelectorAll` for consistency.

---

## ✏️ 3. Manipulating Content and Attributes

Once you've selected an element, manipulate its content and properties.

### Changing Text Content

**`textContent`**: Set or get plain text (recommended):

```html
<p id="message">Old text</p>
```

```javascript
let para = document.getElementById("message");
para.textContent = "New text";  // Changes displayed text
console.log(para.textContent);  // "New text"
```

**`innerHTML`**: Set or get HTML (use carefully!):

```javascript
para.innerHTML = "<strong>Bold text</strong>";  // Creates <strong> element
```

**Warning**: `innerHTML` can introduce security vulnerabilities (XSS attacks). Only use with trusted content.

### Getting and Setting Attributes

Attributes are properties like `href`, `src`, `alt`, `class`, etc.

```html
<a id="link" href="https://example.com" target="_blank">Click here</a>
```

```javascript
let link = document.getElementById("link");

// Get attribute
console.log(link.getAttribute("href"));    // https://example.com
console.log(link.getAttribute("target"));  // _blank

// Set attribute
link.setAttribute("href", "https://newsite.com");
link.setAttribute("title", "Go to new site");

// Remove attribute
link.removeAttribute("target");
```

### The classList API: Managing Classes

Adding/removing classes is often easier than changing inline styles:

```html
<button id="btn" class="primary">Submit</button>
```

```javascript
let btn = document.getElementById("btn");

btn.classList.add("active");       // Add class
btn.classList.remove("primary");   // Remove class
btn.classList.toggle("disabled");  // Toggle on/off

console.log(btn.classList.contains("active"));  // true if has class
```

---

## 🎨 4. Modifying Styles

Change CSS properties directly from JavaScript:

```html
<div id="box">Box</div>
```

```javascript
let box = document.getElementById("box");

// Change inline styles
box.style.backgroundColor = "blue";
box.style.color = "white";
box.style.fontSize = "20px";
box.style.padding = "10px";

// CSS properties use camelCase in JavaScript
// CSS: background-color → JavaScript: backgroundColor
// CSS: border-radius → JavaScript: borderRadius
```

**Note**: Using `classList` and CSS classes is often better than direct style manipulation:

```javascript
// Less recommended: Direct inline styles
box.style.backgroundColor = "blue";
box.style.color = "white";

// Better: Use CSS classes
box.classList.add("highlighted");  // Define styles in CSS, toggle class here
```

---

## 🖱️ 5. Event Handling: Responding to User Interaction

Events are things that happen in the browser (clicks, typing, scrolling). Event handlers respond to these events.

### Common Events

* **`click`**: Mouse click on element
* **`submit`**: Form submission
* **`keydown` / `keyup`**: Keyboard key pressed/released
* **`input`**: User types in input field
* **`change`**: Element value changed
* **`mouseover` / `mouseout`**: Mouse enters/leaves element
* **`focus` / `blur`**: Element gains/loses focus

### Adding Event Listeners

**Using `addEventListener`** (recommended):

```html
<button id="myBtn">Click me</button>
```

```javascript
let btn = document.getElementById("myBtn");

btn.addEventListener("click", function() {
  console.log("Button clicked!");
});

// Or with arrow function
btn.addEventListener("click", () => {
  console.log("Button clicked!");
});
```

**Characteristics**:
* Modern, flexible approach
* Multiple listeners can be added to same element
* Best practice

### The Event Object

Event handlers receive an event object with information:

```javascript
btn.addEventListener("click", function(event) {
  console.log(event.type);      // "click"
  console.log(event.target);    // The clicked element
  console.log(event.pageX);     // Mouse X coordinate
  console.log(event.pageY);     // Mouse Y coordinate
});
```

### Form Event Handling

Handle form submissions:

```html
<form id="myForm">
  <input type="text" id="nameInput" placeholder="Name">
  <button type="submit">Submit</button>
</form>
```

```javascript
let form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();  // Prevent page refresh

  let nameInput = document.getElementById("nameInput");
  let name = nameInput.value;

  console.log(`Hello, ${name}`);
});
```

### Keyboard Events

Respond to keyboard input:

```javascript
document.addEventListener("keydown", function(event) {
  console.log(event.key);  // The key pressed ("Enter", "a", " ", etc.)

  if (event.key === "Enter") {
    console.log("User pressed Enter");
  }
});
```

### Event Delegation: Handle Dynamic Content

When you add elements dynamically, event listeners don't automatically apply. Use **event delegation**:

```javascript
// Instead of adding listener to each item...
// Listen to parent for events bubbling up from children

let list = document.getElementById("itemList");

list.addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    console.log("List item clicked:", event.target.textContent);
  }
});

// Now add items dynamically
let newItem = document.createElement("li");
newItem.textContent = "New item";
list.appendChild(newItem);
// The new item responds to the listener!
```

---

## 🆕 6. Creating and Removing Elements

Dynamically create new HTML elements:

### Creating Elements

```javascript
let newDiv = document.createElement("div");
let newP = document.createElement("p");

newP.textContent = "I am a new paragraph!";
newP.classList.add("highlight");

newDiv.appendChild(newP);  // Add paragraph to div
```

### Adding to the Page

```javascript
let container = document.getElementById("container");

container.appendChild(newDiv);  // Add to end of container
container.insertBefore(newDiv, container.firstChild);  // Add to beginning
```

### Removing Elements

```javascript
let element = document.getElementById("toRemove");
element.remove();  // Removes element from page

// Or via parent
element.parentElement.removeChild(element);
```

### Complete Example: Todo List

```javascript
let addBtn = document.getElementById("addBtn");
let todoList = document.getElementById("todoList");
let input = document.getElementById("todoInput");

addBtn.addEventListener("click", function() {
  let todoText = input.value;

  if (todoText.trim() === "") return;  // Don't add empty todos

  // Create new list item
  let li = document.createElement("li");
  li.textContent = todoText;

  // Add delete button
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", function() {
    li.remove();
  });

  li.appendChild(deleteBtn);
  todoList.appendChild(li);

  input.value = "";  // Clear input
  input.focus();     // Refocus for next entry
});
```

---

## 🚀 Summary

Module 9 connected JavaScript to the web page:

* **DOM**: Browser's tree representation of HTML, accessible via `document` object
* **Selection**: Use `querySelector` and `querySelectorAll` to find elements
* **Manipulation**: Change text, attributes, and styles of elements
* **Events**: Respond to user interactions with `addEventListener`
* **Creation**: Dynamically generate new elements with `createElement`
* **Removal**: Delete elements from the page
* **Delegation**: Handle events on dynamically-created elements

With DOM manipulation, your pages transform from static documents into interactive experiences. Users can click buttons, submit forms, and see immediate responses.

**Next step**: In Module 10, we'll explore **jQuery**—a library that simplifies DOM manipulation even further.

---

## 📚 References

1. **MDN Web Docs**: [DOM Introduction](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
2. **MDN Web Docs**: [Document.querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
3. **MDN Web Docs**: [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
4. **MDN Web Docs**: [Element Methods for Manipulation](https://developer.mozilla.org/en-US/docs/Web/API/Element)
5. **MDN Web Docs**: [Events Reference](https://developer.mozilla.org/en-US/docs/Web/Events)
6. **W3C**: [DOM Specification](https://www.w3.org/TR/dom/)
