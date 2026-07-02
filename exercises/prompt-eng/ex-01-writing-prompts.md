# Exercise 9-01 — Writing Structured Prompts

## Goal
Learn to write structured prompts using the 5-Part Prompt Formula to generate clean, semantic HTML and CSS.

---

## Part 1 — The Prompt Formula Template
Every time you prompt the AI for code generation, use this template:

```
[Role]        → Act as a...
[Context]     → I am building a...
[Task]        → Write the HTML/CSS for...
[Constraints] → Keep code under [X] lines. Do not use [libraries/styles].
[Format]      → Structure your response with [format choice].
```

---

## Instructions

### Task A: Describe your component
You will write a structured prompt to generate a **responsive contact section** for your landing page project. The section should have:
1. A heading, short description, and a card with the business phone number, email address, and office location.
2. A clean contact form containing fields for: Name, Email, and a Message text area.

### Task B: Draft the prompt
In a new file in your student folder called `contact-prompt.txt`, write the complete structured prompt following the template. Make sure to specify the following:
*   **Role:** Act as a junior-friendly senior frontend engineer and accessibility advocate.
*   **Context:** Beginner student project, static site, styled with external vanilla CSS.
*   **Task:** HTML and CSS for a contact section.
*   **Constraints:** HTML must be fully semantic. Form fields must have corresponding labels. Do not use any `<div>` tags unless necessary for layout grouping. Do not use any libraries or inline styles. Font sizes must be in `rem`.
*   **Format:** HTML code block first, then CSS code block, followed by 3 accessibility notes.

### Task C: Test and Verify
1. Copy the text of your prompt and paste it into Antigravity IDE.
2. Analyze the generated code:
   *   Did it use `<section>`, `<h2>`, `<form>`, `<label>`, `<button>`?
   *   Did it link labels to inputs using `for` and `id`?
   *   Is the CSS clean, without ID selectors?
3. Save the resulting HTML and CSS into your project files.
