# Exercise 10-02 — Contexts and Custom Skills

## Goal
Configure project context templates and teach Antigravity a custom code-review skill to automate quality checks in your project.

---

## Instructions

### Task A: Configure Context
1. In `student-projects/your-name/ai-sandbox/.ai/contexts/landing-page-context.md`, define:
   *   The color palette variables (e.g. Primary: `#4f46e5`, Dark Gray: `#1f2937`).
   *   The typography rules (e.g., Font: Outfit, fallback: sans-serif).
   *   The container size (e.g., maximum width 1100px, responsive padding).

### Task B: Define the Review Skill
Create the file `student-projects/your-name/ai-sandbox/.ai/skills/accessibility-check.md`:
```markdown
# Accessibility Check Skill

Analyze the target HTML file and verify:
1. Every `<img src="...">` tag has a non-empty `alt="..."` description.
2. Form fields are explicitly linked to labels via `for`/`id`.
3. Contrast matches minimum WCAG AA standards (4.5:1 ratio).
4. Interactive elements like buttons and anchors are keyboard-reachable.
Output a markdown list detailing the findings and one sentence explaining how to improve accessibility.
```

### Task C: Trigger the Skill
1. Create a file `contact.html` inside `ai-sandbox/` containing a basic contact form with some missing label relationships or a missing alt tag on an icon image.
2. Ask Antigravity:
   > *"Run the Accessibility Check Skill on my contact.html file."*
3. Review the AI's analysis. Does it point directly to the label-input disconnect and the alt tag omission?
4. Fix the errors based on the output.
