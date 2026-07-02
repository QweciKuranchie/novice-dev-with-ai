# Exercise 10-01 — Initializing the `.ai` Folder

## Goal
Set up the `.ai` folder structure in a new project and verify that Antigravity successfully reads your styling rule constraints.

---

## Instructions

### Task A: Project Setup
1. Create a directory inside `student-projects/your-name/` called `ai-sandbox`.
2. Inside `ai-sandbox`, create the `.ai/` directory structure with subfolders:
   *   `.ai/rules/`
   *   `.ai/contexts/`
   *   `.ai/skills/`

### Task B: Define Rules
Create the file `student-projects/your-name/ai-sandbox/.ai/rules/html-rules.md` and define the following guidelines:
```markdown
# HTML Quality Rules

- Semantic Landmarks: All main sections must use `<header>`, `<nav>`, `<main>`, `<section>`, or `<footer>`.
- No Division Abuse: Minimize `<div>` nesting. Never use `<div>` if a semantic tag fits.
- Accessibility Checklist:
  - All interactive elements must have clear focus styling.
  - All form controls must have linked `<label>` tags.
  - All anchor tags must have descriptive text (no "click here").
```

### Task C: Test Rule Enforcement
1. Open the folder `student-projects/your-name/ai-sandbox/` in Antigravity.
2. Ask Antigravity to write a simple login form layout:
   > *"Write the HTML structure for a login page containing username and password inputs, a submit button, and a return to homepage link."*
3. Check the output:
   *   Did the AI link labels to inputs?
   *   Did it use `<main>` or `<form>` wrappers?
   *   Did the links avoid saying "click here"?
4. If it followed the rules, save it to `index.html`.
