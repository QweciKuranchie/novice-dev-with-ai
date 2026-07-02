# Teacher / Instructor Session Context

Paste this at the start of an AI session when planning lessons, creating exercises,
or reviewing student work as the course instructor.

---

## Session Starter Template

```
I am the instructor for the novice-dev-with-ai web development classroom.

Today I need help with:
[ ] Planning a lesson for Module [X] — [topic]
[ ] Creating a coding exercise (level: guided / semi-guided / challenge / debug)
[ ] Reviewing student work (student: [name], module: [X])
[ ] Generating quiz questions for Module [X]
[ ] Creating a project brief for the milestone

Student level context:
[describe where the class is: e.g. "Week 3, comfortable with HTML, just started CSS"]

Specific request:
[describe exactly what you need]
```

---

## Lesson Planning Requests

### Generate a Full Lesson Plan

```
Create a lesson plan for Module [X]: [topic].

Format:
- Learning objectives (3–5 measurable outcomes)
- Prerequisite knowledge students need
- Concept explanation sequence (explain → analogy → code)
- 2–3 in-class exercises (guided → semi-guided → challenge)
- Common misconceptions to address
- Milestone assessment criteria
- Suggested homework
```

### Generate a Concept Explanation

```
Generate a beginner-friendly explanation of [CSS Flexbox] for a student
who has just completed the CSS box model.

Include:
- Plain English definition
- Real-world analogy
- Visual ASCII model
- Minimal code example (< 20 lines, heavily commented)
- Student exercise
- Common mistake to highlight
```

### Generate a Demo

```
Create a reference demo for [Flexbox — justify-content values].

Requirements:
- Pure HTML + CSS (no frameworks, no JavaScript)
- Under 50 lines total
- Every property commented with a clear explanation
- Save to: demos/[topic-name]/index.html + style.css
```

---

## Exercise Generation Requests

### Guided Exercise (Step-by-step instructions)

```
Create a GUIDED exercise for Module [X]: [topic].

Level: Beginner — student has just learned this concept for the first time.

Format:
- Exercise title and goal
- What they will build (describe the output)
- Step-by-step instructions (numbered, specific)
- Starter code to give them (skeleton HTML/CSS with blanks)
- Expected result description
- Extension challenge (for fast finishers)
```

### Semi-Guided Exercise (Hints only)

```
Create a SEMI-GUIDED exercise for Module [X]: [topic].

Level: Student has practiced the basics and needs to apply knowledge independently.

Format:
- Exercise title and goal
- What they will build
- Requirements list (what it must include/do)
- 3 hints (without giving the solution)
- Expected result description
```

### Debug Challenge (Broken code to fix)

```
Create a DEBUG CHALLENGE for [topic].

Requirements:
- Broken HTML/CSS that a student must fix
- 3–5 intentional errors (appropriate to module level)
- Error types: [syntax, semantic, accessibility, layout, responsiveness]
- Do NOT reveal the errors — student must find them
- Answer key (for instructor reference only)
```

### Open Challenge (Student builds from scratch)

```
Create an OPEN CHALLENGE for Module [X].

Level: Student is approaching the module milestone.

Format:
- Project brief (describe what to build, not how)
- Requirements checklist (must-haves)
- Constraints (e.g. "use Flexbox only, no Grid")
- Evaluation criteria (how it will be reviewed)
```

---

## Student Code Review Requests

```
Review this student's [HTML/CSS] using the beginner rubric.
Student: [name], Module: [X], Exercise: [name]

Code:
[paste student's HTML]
[paste student's CSS]

Please provide:
1. Rubric score (✅ Great / ⚠️ Needs work / ❌ Missing) for each of the 8 points
2. Top strength (specific, with the exact code that impressed you)
3. Single most important fix (explain WHY, give a guiding question not the answer)
4. One suggestion to prepare them for the next module
```

---

## Quiz Generation Requests

```
Generate [5] quiz questions for Module [X]: [topic].

Question types: [multiple choice / fill in the blank / spot the error / predict the output]
Difficulty: [beginner — no trick questions, test understanding not memory]

For each question include:
- The question
- 4 options (for multiple choice)
- Correct answer
- Explanation of why it's correct and why the others are wrong
```

---

## Instructor Reference — Module Milestones

| Module | Milestone Assessment |
|---|---|
| 1 | Student types boilerplate from memory, explains each line verbally |
| 2 | Code review: 4-region page, zero `<div>`, HTML validator passes |
| 3 | Code review: full styling, external CSS, box model visible in DevTools |
| 4 | Live demo: centers any element on request, builds card row |
| 5 | Pull Request: 3-column grid, collapses to 1 column at 640px |
| 6 | Pull Request: same layout working on mobile, tablet, desktop |
| 7 | WAVE audit: zero errors, student explains each fix they made |
| 8 | Live demo: form validation messages show, dark mode toggle works |
| 9 | Pull Request: prompts-log.md containing 5-Part Formula templates for generation and debugging |
| 10 | Pull Request: .ai/ workspace settings folder initialized and dashboard created complying with rules |


---

## Instructor Coding Standards Checklist

When reviewing student submissions, check:

**HTML:**
- [ ] DOCTYPE, html lang, charset, viewport, title, link to CSS
- [ ] Semantic elements used correctly (no unnecessary divs)
- [ ] One h1 only, no skipped heading levels
- [ ] All images have descriptive alt text
- [ ] All links have descriptive text (no "click here")
- [ ] All form inputs have linked labels
- [ ] 2-space indentation throughout
- [ ] HTML validator: zero errors

**CSS:**
- [ ] External stylesheet only (no inline or style tags)
- [ ] box-sizing reset at top
- [ ] Classes used for styling (no ID selectors)
- [ ] Class names: lowercase, hyphens, descriptive
- [ ] rem for font sizes (not px)
- [ ] max-width for containers (not fixed width)
- [ ] Mobile-first media queries
- [ ] Focus styles present and visible
- [ ] CSS validator: zero errors

**Accessibility:**
- [ ] Color contrast passes 4.5:1 ratio (test with WAVE)
- [ ] Keyboard-navigable (test with Tab key)
- [ ] No content conveyed by color alone
- [ ] WAVE audit: zero errors
