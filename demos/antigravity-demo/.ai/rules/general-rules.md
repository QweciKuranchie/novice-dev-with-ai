# Antigravity General Coding Rules

This rules file enforces code design and style standards. Every code generation block must adhere to these criteria:

---

## 1. Directory Structure & Layout
- Keep HTML, CSS, and JS modular.
- The entrypoint must be `index.html`.
- Custom styles must reside in `style.css` (no inline styling).

---

## 2. Formatting
- Use exactly **2 spaces** for indentation. Never use tabs.
- Use lowercase for HTML elements, attributes, and CSS selectors.
- Tag and attribute naming must be hypenated (e.g. `class="card-container"`).

---

## 3. Styling Standards
- No style attributes on elements directly: `<div style="...">` is strictly forbidden.
- No ID selectors in CSS (`#logo` or `#button` styling). Use class selectors (`.logo`, `.btn`) instead.
- Typography sizes must use `rem` units (e.g., `font-size: 1.25rem`). Never use absolute `px` for font sizing.
- All colors must utilize CSS custom properties (variables) defined in `:root`.

---

## 4. Accessibility Rules
- Every image `<img>` must contain an alt text attribute.
- Every interactive element (anchor `<a>`, button `<button>`, input `<input>`) must have custom `:focus-visible` styling (never remove outlines).
- Form inputs must be linked to a `<label>` element using `for`/`id` matching.
