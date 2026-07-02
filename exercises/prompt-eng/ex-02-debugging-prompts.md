# Exercise 9-02 — Prompting for Debugging

## Goal
Learn how to prompt the AI to find, explain, and guide you through fixing HTML/CSS bugs rather than having the AI write the fix for you.

---

## Instructions

### Task A: The Broken Code
Copy the following broken HTML and CSS block into a temporary file or review it carefully. The page is supposed to display a responsive navigation bar with the site title on the left and navigation links on the right, but it's completely broken:

**HTML:**
```html
<nav id="navbar">
  <div class="brand">My Portfolio</div>
  <ul class="nav-links">
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#projects">Projects</a>
  </ul>
</nav>
```

**CSS:**
```css
#navbar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #333;
  color: white;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 15px;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-size: 14px;
}
```

### Task B: Craft the Debugging Prompt
In your student folder, create a file called `debug-prompt-log.md`.
Write a structured prompt targeting the broken code above. The prompt must:
1. Specify the role (e.g., a patient coding mentor).
2. Detail the context (what you expect the navbar to look like vs what it looks like now).
3. Explicitly constrain the AI: **"Do not give me the corrected code block. Identify the line numbers with errors, explain why they are errors, and provide a small hint for each."**
4. Paste the broken HTML and CSS into the prompt.

### Task C: Test it
1. Run your prompt in Antigravity IDE.
2. Confirm if the AI followed your constraints (i.e. did not write the solution, only pointed out the mistakes like:
   *   The unclosed `<li>` tag in HTML.
   *   The use of ID selector `#navbar` instead of a class.
   *   `justify-content: flex-start` putting everything on the left instead of `space-between`).
3. Correct the bugs yourself in your file using the hints.
