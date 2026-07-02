# Prompt Engineering Cheatsheet for Developers

This cheatsheet provides ready-to-use structured prompts and templates for daily web development tasks using the 5-Part Prompt Formula (Role, Context, Task, Constraints, Output Format).

---

## 1. The Code Generation Prompt

Use this when you want the AI to write a specific, isolated component.

```markdown
Act as a senior frontend developer and accessibility expert. 

I am building a portfolio website using vanilla HTML and CSS. I need a responsive "Hero Section".

Task: Write the HTML and CSS for a hero section containing:
- An h1 title (headline)
- A short description paragraph
- A primary Call-To-Action (CTA) link styled as a button
- A placeholder image area

Constraints:
- Use only semantic HTML landmarks (e.g., <section>, <h1>, <p>).
- Do not use Tailwind, Bootstrap, React, or jQuery.
- Do not use inline style attributes in HTML.
- Colors must use CSS custom properties (variables) defined in a reset block.
- Keep the font sizes responsive using `rem` units.
- Total HTML must be under 30 lines.

Output Format: Provide the HTML code block first, then the CSS code block. Do not write explanations.
```

---

## 2. The Code Explanation Prompt

Use this when you encounter a complex block of code (e.g. keyframe animations, complex selectors) and want to understand it.

```markdown
Act as a patient computer science professor.

I am a beginner student learning CSS layouts. I am trying to understand the CSS box model and positioning.

Task: Explain how `position: absolute` works in relation to a parent element with `position: relative`.

Constraints:
- Do not use complex technical terms without defining them first.
- Use a physical, real-world analogy (e.g., a photo frame, a sticky note).
- Limit the explanation to under 15 sentences.

Output Format: Structure your explanation as:
1. High-level definition.
2. Analogy.
3. Code example (under 10 lines) with line comments.
```

---

## 3. The Interactive Debugging Prompt

Use this when your code has a bug and you want hints, not copy-paste solutions.

```markdown
Act as a friendly programming coach.

I am a student building a form. My submit button works, but my validation messages are not showing up beneath the fields when they are empty.

Task: Review the HTML and JS code below, find the issue, and give me a hint about event listener default behaviors and checking element values.

Constraints:
- Do not give me the corrected code.
- Do not write the solution.
- Give me three guiding questions to help me solve the bug myself.

Code to inspect:
[paste HTML and JavaScript here]
```

---

## 4. The Code Review & Refactoring Prompt

Use this to double-check that your work meets quality standards.

```markdown
Act as a senior tech lead.

I am preparing to submit a pull request for Module 2 of a beginner web course.

Task: Review my HTML code below against the W3C standards and checklist.
- Check semantic usage (no <div> overload).
- Check accessibility (alt attributes, headings).
- Check code formatting.

Constraints:
- Score my code on a scale of: Great, Needs Work, or Missing for the categories: Semantics, Alt Text, and Focus Styles.
- List the most critical issue first.
- Suggest one optimization.

My HTML:
[paste HTML code here]
```
