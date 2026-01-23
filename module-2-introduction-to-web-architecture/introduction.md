# Module 2: Web Architecture & Infrastructure

This transcript serves as a guide to the underlying technologies that make the World Wide Web possible, focusing on the relationship between clients, servers, and the global network.

---

## 🎯 Learning Objectives
By the end of this module, you will be able to:
*   **Define the Web**: Distinguish between the Internet (hardware) and the World Wide Web (software).
*   **Infrastructure Mastery**: Explain how data travels across the globe via undersea cables and routers.
*   **Client-Server Model**: Describe the request/response conversation between browsers and hosts.
*   **Front-End Architecture**: Understand the role of the "Three Pillars" (HTML, CSS, JS).

---

## 🌐 1. Internet vs. World Wide Web
They are often used interchangeably, but they are technically distinct layers of technology.

### 🔌 The Internet (The Highway)
*   **What it is**: A global network of interconnected computers and hardware.
*   **Infrastructure**: Consists of physical cables (undersea fiber optics), routers, and high-speed servers.
*   **History**: Started in 1969 as ARPANET [8].
*   **Purpose**: Carries all kinds of data (Web, Email, File transfers, Gaming, Streaming).

### 🕸️ The World Wide Web (The Cars)
*   **What it is**: A system of interlinked documents and resources (webpages) [6].
*   **Access**: Accessed via a web browser (Chrome, Firefox, Safari).
*   **History**: Invented in 1989 by Sir Tim Berners-Lee [3][7].
*   **Protocol**: Uses HTTP (HyperText Transfer Protocol) to transmit data.

---

## 🧱 2. Building Blocks of the Web: The Three Pillars
Every modern website is built using three core technologies that work together in the browser:

1.  **HTML (Structure)**: The **Skeleton**. Defines the content (headings, paragraphs, images).
2.  **CSS (Style)**: The **Skin**. Defines the appearance (colors, fonts, layout).
3.  **JavaScript (Behavior)**: The **Brain**. Adds interactivity (animations, data processing).

---

## 🔄 3. How the Web Works: The Client-Server Model
Web browsing is essentially a conversation between two entities over a network.

### 1. The Client (The Question)
*   **Who it is**: Your device (phone, laptop) and your browser.
*   **Action**: It sends an **HTTP Request** (e.g., "I want to see the homepage of google.com").

### 2. The Server (The Answer)
*   **Who it is**: A powerful computer that is always "on" and hosting the website's files.
*   **Action**: It sends an **HTTP Response** (e.g., "Request accepted. Here is the HTML code for that page").

---

## 🛡️ 4. Security: HTTP vs. HTTPS
You may have noticed a "lock" icon in your browser's address bar.

*   **HTTP**: HyperText Transfer Protocol. Data is sent in "plain text" and can be intercepted.
*   **HTTPS**: The "S" stands for **Secure**. Your data is encrypted for privacy, protecting passwords and credit card info.

---

## 🚀 Summary
Understanding the architecture of the web is crucial for any developer. When you write code, you aren't just making a file—you're creating an asset that will be requested by clients and served by hardware across the entire world.

**Next Module**: We will dive deep into **HTML** to learn how to build the skeleton of these pages.

---

## 📚 References
1.  **CERN**: [A short history of the Web](https://home.cern/science/computing/birth-web/short-history-web)
2.  **Wikipedia**: [World Wide Web](https://en.wikipedia.org/wiki/World_Wide_Web)
3.  **W3C**: [A Little History of the World Wide Web](https://www.w3.org/History.html)
4.  **National Science and Media Museum**: [A short history of the internet](https://www.scienceandmediamuseum.org.uk/objects-and-stories/short-history-internet)
5.  **Google Developers**: [How the Web Works](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works)
