# Module 8 — Introduction to JavaScript

**Duration:** 4–5 class sessions  
**Prerequisites:** Module 7 — Accessibility milestone complete  
**Next:** [Module 9 — Prompt Engineering for Web Developers](../module-09-prompt-eng/README.md)

---

## What Students Learn

- What JavaScript does (controls behaviour — the third layer)
- Linking JavaScript to HTML: `<script src="script.js" defer></script>`
- The browser console: `console.log()`, reading errors
- Variables: `const`, `let` — difference and when to use each
- Data types: string, number, boolean, null, undefined
- Functions: declaring, calling, parameters, return values
- Selecting elements: `document.querySelector()`, `document.querySelectorAll()`
- Events: `addEventListener('click', function)`, common event types
- Modifying the DOM: `textContent`, `innerHTML`, `classList.add/remove/toggle`
- Conditional logic: `if`, `else if`, `else`
- Basic form handling: reading input values, preventing default submission
- Template literals: `Hello, ${name}!`

## Key Concept — The Three Layers

```
HTML  → WHAT things are (structure)
CSS   → HOW things look (appearance)
JS    → WHAT things do (behaviour)
```

JavaScript reads HTML elements, listens for user actions (clicks, typing),
and changes the page in response. It does NOT control appearance directly —
it adds and removes CSS classes, which then control appearance.

## Module Projects

### Project 1 — Dark Mode Toggle
```
Button → click → toggle .dark-mode class on <body>
CSS    → .dark-mode changes all colors via CSS variables
```

### Project 2 — Contact Form Validator
```
Form submit → JS reads input values
           → checks if fields are empty or invalid
           → shows error messages (add/remove CSS classes)
           → only submits if all fields valid
```

## Files in This Module

```
module-08-javascript/
├── README.md
├── lesson-notes.md
└── exercises/
    ├── exercise-01-console-and-variables.md
    ├── exercise-02-functions-and-events.md
    ├── exercise-03-dom-manipulation.md
    ├── exercise-04-dark-mode-toggle.md
    └── exercise-05-form-validator.md
```

## Milestone

Submit a pull request with both projects working:
1. Dark mode button toggles the page between light and dark themes
2. Contact form validates all fields and shows specific error messages
Both must be built with vanilla JavaScript — no libraries.
