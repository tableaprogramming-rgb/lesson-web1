# Module 8: Introduction to JavaScript

Welcome to a new frontier! You've mastered HTML (structure) and CSS (style). Now it's time to master **JavaScript**—the language that brings pages to life with interactivity and behavior. JavaScript is the "brain" of web pages, handling everything from form validation to animations to complex applications.

---

## 🎯 Learning Objectives

By the end of this module, you will be able to:

* **Understand JavaScript's Role**: Know what JavaScript is and why it's essential for web development.
* **Use Variables Effectively**: Declare and manipulate variables with `let`, `const`, and `var`.
* **Work with Data Types**: Understand strings, numbers, booleans, null, and undefined.
* **Apply Operators**: Use arithmetic, comparison, and logical operators in expressions.
* **Control Flow**: Use `if`, `else`, `switch`, and loops to make decisions in code.
* **Write Functions**: Create reusable blocks of code with parameters and return values.
* **Use Arrays and Objects**: Store and organize collections of data.
* **Think Programmatically**: Translate logic into code execution.

---

## ⚡ 1. JavaScript Fundamentals: What and Why

### What is JavaScript?

JavaScript is a programming language that runs in browsers and can manipulate HTML and CSS in real-time. It's the language of web development.

**The Three Pillars of Web Development**:
* **HTML**: Structure (the skeleton)
* **CSS**: Style (the appearance)
* **JavaScript**: Behavior (the interactivity)

### Why JavaScript Matters

JavaScript enables:
* **Form validation**: Checking data before sending to servers
* **DOM manipulation**: Changing page content dynamically
* **Animations and effects**: Smooth transitions and visual feedback
* **Event handling**: Responding to user clicks, typing, scrolling
* **Real-time applications**: Chat apps, collaborative tools, live updates
* **Game development**: Browser-based games
* **API integration**: Fetching data from servers

### Where JavaScript Runs

JavaScript executes in three contexts:

1. **Browser console**: Developer tools for testing
2. **Inline in HTML**: `<script>` tags in HTML files
3. **External files**: `.js` files linked from HTML

---

## 🎯 2. Variables: Storing and Accessing Data

A variable is a named container for storing data. It's like a labeled box that holds information you want to use later.

### Variable Declaration

JavaScript offers three ways to declare variables:

**`let`** (modern, recommended):
```javascript
let age = 25;
let name = "Alice";
let isStudent = true;
```
* Block-scoped (limited to surrounding `{}`)
* Can be reassigned
* Modern standard

**`const`** (for values that don't change):
```javascript
const pi = 3.14159;
const firstName = "Bob";
```
* Block-scoped
* Cannot be reassigned after declaration
* Use by default; use `let` only when reassignment is needed

**`var`** (legacy):
```javascript
var message = "Old style";
```
* Function-scoped (different behavior)
* Rarely used in modern code
* Included for backwards compatibility

### Naming Conventions

* **camelCase**: `firstName`, `myVariable` (standard in JavaScript)
* **PascalCase**: `MyClass` (for class definitions)
* **SCREAMING_SNAKE_CASE**: `MAX_USERS` (for constants)
* **Descriptive names**: `userAge` not `x`, `totalPrice` not `t`

---

## 📊 3. Data Types: Strings, Numbers, Booleans, and More

JavaScript has several fundamental data types:

### Strings (Text)

Text data enclosed in quotes (single, double, or backticks):
```javascript
let greeting = "Hello, World!";
let singleQuote = 'JavaScript';
let template = `Welcome, ${name}!`;  // Template literal with ${variable}
```

**String methods**:
```javascript
let text = "JavaScript";
console.log(text.length);           // 10
console.log(text.toUpperCase());    // JAVASCRIPT
console.log(text.toLowerCase());    // javascript
console.log(text.indexOf("Script")); // 4
console.log(text.slice(0, 4));      // Java
```

### Numbers

Both integers and decimals use the `number` type:
```javascript
let age = 25;
let price = 19.99;
let negative = -10;
```

**Number operations**:
```javascript
let x = 10;
let y = 3;
console.log(x + y);  // 13 (addition)
console.log(x - y);  // 7 (subtraction)
console.log(x * y);  // 30 (multiplication)
console.log(x / y);  // 3.33... (division)
console.log(x % y);  // 1 (modulo/remainder)
console.log(x ** 2); // 100 (exponentiation)
```

### Booleans (True/False)

The `boolean` type has only two values:
```javascript
let isLoggedIn = true;
let hasErrors = false;
```

Booleans are used in conditions and logical operations.

### Null and Undefined

* **`null`**: Explicitly set "no value"
* **`undefined`**: Variable declared but not assigned

```javascript
let nothing = null;      // Intentionally empty
let something;
console.log(something);  // undefined
```

### Type Checking

Check a value's type with `typeof`:
```javascript
console.log(typeof "hello");   // "string"
console.log(typeof 42);        // "number"
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"
```

---

## 🔢 4. Operators and Control Flow

### Comparison Operators

Compare values and return boolean results:

```javascript
let a = 10;
let b = 20;

console.log(a === b);   // false (strict equal)
console.log(a !== b);   // true (not equal)
console.log(a < b);     // true (less than)
console.log(a > b);     // false (greater than)
console.log(a <= b);    // true (less than or equal)
console.log(a >= b);    // false (greater than or equal)
```

### Logical Operators

Combine boolean values:

```javascript
let age = 25;
let hasLicense = true;

// AND: both conditions must be true
if (age >= 18 && hasLicense) {
  console.log("Can drive");
}

// OR: at least one condition must be true
if (age < 13 || age > 65) {
  console.log("Special rates apply");
}

// NOT: reverses the boolean
if (!hasLicense) {
  console.log("Cannot drive");
}
```

### Conditional Statements: if/else

Control flow based on conditions:

```javascript
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}
```

### Switch Statements

Choose from multiple options:

```javascript
let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  default:
    dayName = "Unknown";
}

console.log(dayName);  // Wednesday
```

### Loops: Repeating Code

Execute code multiple times:

**`for` loop** (count-based):
```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);  // Prints 0, 1, 2, 3, 4
}
```

**`while` loop** (condition-based):
```javascript
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}
```

**`for...of` loop** (iterate over values):
```javascript
let fruits = ["apple", "banana", "orange"];
for (let fruit of fruits) {
  console.log(fruit);
}
```

---

## 📦 5. Functions: Reusable Code Blocks

Functions are named blocks of code you can call repeatedly. They reduce duplication and make code more maintainable.

### Function Declaration

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Alice"));  // Hello, Alice!
```

**Components**:
* **`function`**: Keyword declaring a function
* **`greet`**: Function name
* **`name`**: Parameter (input)
* **`return`**: Sends value back to caller

### Parameters and Arguments

* **Parameters**: Variable names in function definition
* **Arguments**: Actual values passed when calling function

```javascript
function add(a, b) {
  return a + b;
}

console.log(add(5, 3));      // 8 (5 and 3 are arguments)
console.log(add(10, 20));    // 30
```

### Default Parameters

Provide default values:

```javascript
function introduce(name = "Friend", age = 0) {
  return `${name} is ${age} years old`;
}

console.log(introduce("Alice", 25));  // Alice is 25 years old
console.log(introduce("Bob"));        // Bob is 0 years old
```

### Arrow Functions (Modern Syntax)

Concise function syntax:

```javascript
const multiply = (a, b) => {
  return a * b;
};

const square = x => x * x;  // Single parameter, implicit return

console.log(multiply(4, 5));  // 20
console.log(square(5));       // 25
```

### Scope: Variable Accessibility

Variables are accessible within their scope:

```javascript
let globalVar = "Global";

function myFunc() {
  let localVar = "Local";
  console.log(globalVar);   // Accessible
  console.log(localVar);    // Accessible
}

console.log(globalVar);     // Accessible
console.log(localVar);      // Error: localVar is not defined
```

---

## 📊 6. Arrays: Collections of Data

Arrays store multiple values in a single variable:

```javascript
let fruits = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "two", true, null];
```

### Accessing Elements

Arrays are **zero-indexed** (first element is at index 0):

```javascript
let colors = ["red", "green", "blue"];
console.log(colors[0]);      // red
console.log(colors[1]);      // green
console.log(colors.length);  // 3
```

### Array Methods

**Common methods**:

```javascript
let arr = [1, 2, 3];

arr.push(4);          // Add to end → [1, 2, 3, 4]
arr.pop();            // Remove from end → [1, 2, 3]
arr.unshift(0);       // Add to start → [0, 1, 2, 3]
arr.shift();          // Remove from start → [1, 2, 3]
```

**Transforming arrays**:

```javascript
let numbers = [1, 2, 3, 4, 5];

// map: Transform each element
let doubled = numbers.map(n => n * 2);
console.log(doubled);  // [2, 4, 6, 8, 10]

// filter: Keep elements matching condition
let evens = numbers.filter(n => n % 2 === 0);
console.log(evens);    // [2, 4]

// forEach: Execute function for each element
numbers.forEach(n => console.log(n));  // Prints each number
```

---

## 📋 7. Objects: Organizing Related Data

Objects store key-value pairs, organizing related data:

```javascript
let person = {
  name: "Alice",
  age: 25,
  city: "New York",
  isStudent: true
};
```

### Accessing Object Properties

**Dot notation**:
```javascript
console.log(person.name);  // Alice
console.log(person.age);   // 25
```

**Bracket notation**:
```javascript
console.log(person["name"]);  // Alice
console.log(person["age"]);   // 25
```

### Modifying Objects

```javascript
person.age = 26;                    // Update existing
person.email = "alice@email.com";   // Add new property
delete person.isStudent;            // Remove property
```

### Object Methods

Functions inside objects:

```javascript
let user = {
  name: "Bob",
  greet() {
    return `Hello, I'm ${this.name}`;
  }
};

console.log(user.greet());  // Hello, I'm Bob
```

The `this` keyword refers to the object itself.

---

## 🚀 Summary

Module 8 introduced you to JavaScript programming:

* **Variables**: Use `const` by default, `let` when reassignment needed
* **Data types**: Strings, numbers, booleans, null, undefined
* **Operators**: Arithmetic, comparison, logical
* **Control flow**: `if`/`else`, `switch`, loops
* **Functions**: Reusable code blocks with parameters and returns
* **Arrays**: Collections for storing multiple values
* **Objects**: Key-value stores for organizing related data

JavaScript is a programming language with a learning curve steeper than HTML/CSS, but don't be discouraged—you now understand the fundamentals. Practice by writing small programs and solving problems.

**Next step**: In Module 9, we'll connect JavaScript to the web page itself using the **DOM** (Document Object Model).

---

## 📚 References

1. **MDN Web Docs**: [JavaScript Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
2. **MDN Web Docs**: [Variables and Data Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types)
3. **MDN Web Docs**: [Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)
4. **MDN Web Docs**: [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
5. **MDN Web Docs**: [Arrays and Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
6. **JavaScript.info**: [The JavaScript Language](https://javascript.info/)
