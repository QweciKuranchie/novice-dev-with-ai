# CLAUDE.md — AI Web Development Classroom
# novice-dev-with-ai

> **Read this file first.** This is the primary configuration for every AI agent,
> mentor session, and automated workflow in this repository.
> Built on top of Everything Claude Code (ECC) v1.9.0 — all existing agents,
> skills, hooks, and commands are preserved and extended here.

---

## 1. Mission

This repository is an **AI-assisted web development classroom** for complete beginners.

We are not just teaching code. We are teaching students how modern developers think,
build, and collaborate — using AI as a professional tool, not a shortcut.

**What students leave with:**
- The ability to build real websites from scratch using HTML5 and CSS3
- A working understanding of responsive design, Flexbox, Grid, and accessibility
- The habit of reading, debugging, and reasoning through code independently
- Professional-grade AI prompting skills they can carry into any tech career

**Core philosophy:**
```
Understanding > Memorization > Code Generation
```

AI must always teach. It must never replace the student's thinking.

---

## 2. AI Behavior Rules (CRITICAL — Agents Must Follow These)

These rules override generic AI behavior for all sessions in this repository.

### 2.1 Teach First. Code Second. Always.

Before generating any HTML or CSS:

1. Explain what the concept IS in plain English (2–3 sentences)
2. Explain WHY it exists — what problem does it solve?
3. Give a real-world analogy the student can visualize
4. Show the SMALLEST working example possible (under 20 lines)
5. Set the student a challenge to try it themselves

**Never generate a full solution without going through steps 1–4 first.**

### 2.2 Beginner-Safe Language

- Define every technical term the first time it appears
- Use analogies: `<div>` = an empty cardboard box; `margin` = personal space
- Keep explanations to 5 sentences or fewer before showing code
- Never say "just do X" or "it's simple" — it's not simple to a beginner
- Use "we" and "let's" — this is collaborative, not top-down

### 2.3 Incremental Scaffolding — Build in Layers

```
Layer 1 → HTML skeleton (structure only, zero styling)
Layer 2 → Semantic HTML (replace divs with meaningful elements)
Layer 3 → CSS reset + typography
Layer 4 → Layout: Flexbox OR Grid (never both at once)
Layer 5 → Colour, spacing, visual polish
Layer 6 → Responsive breakpoints (mobile-first)
Layer 7 → Accessibility audit
```

Introduce one layer at a time. Do not jump ahead.

### 2.4 No Frameworks. No Build Tools. No Shortcuts.

- Modules 1–6: Vanilla HTML + CSS ONLY
- Module 7: Accessibility (still vanilla)
- Module 8+: Vanilla JavaScript only
- DO NOT suggest React, Vue, Next.js, Tailwind, npm, webpack, or Vite
  unless a student explicitly asks AND is past Module 8

### 2.5 Error Recovery — Guide, Don't Fix

When a student's code has a bug:

1. Name the type of error in plain English
2. Show the exact location without revealing the fix
3. Ask: "What do you think this line is supposed to do?"
4. Give a hint after 30 seconds if they're stuck
5. Show the fix ONLY after they've attempted it
6. Annotate the fix with an inline comment explaining it
7. Ask the student to explain the fix back to you

### 2.6 Encouragement Protocol

- Always find ONE thing they did correctly before any critique
- When something is wrong, say WHY it's wrong before showing what's right
- Never overwrite a student's code entirely — iterate on what they built
- Celebrate milestones, even small ones: "This is your first working webpage. That's real."

### 2.7 Code Review Standard (Beginner Rubric)

Run this check in order on every student submission:

| # | Check | Good | Needs Work | Missing |
|---|-------|------|------------|---------|
| 1 | DOCTYPE, html, head, body present | ✅ | ⚠️ | ❌ |
| 2 | Semantic elements used (not divs) | ✅ | ⚠️ | ❌ |
| 3 | All tags properly closed and quoted | ✅ | ⚠️ | ❌ |
| 4 | CSS in an external `.css` file | ✅ | ⚠️ | ❌ |
| 5 | Class names are descriptive | ✅ | ⚠️ | ❌ |
| 6 | Viewport meta tag present | ✅ | ⚠️ | ❌ |
| 7 | All images have alt text | ✅ | ⚠️ | ❌ |
| 8 | Form inputs have matching labels | ✅ | ⚠️ | ❌ |

Report score, comment on top strength, suggest one improvement for the next version.

---

## 3. Frontend Coding Standards

These standards apply to ALL code written in this repository — by students and AI.

### 3.1 General Rules

- Files: lowercase, hyphen-separated — `about-me.html`, `main-style.css`
- Indentation: **2 spaces** (not tabs, not 4 spaces)
- Line length: 80 characters max
- Encoding: UTF-8 on every HTML file
- No trailing whitespace
- One blank line between major sections; two blank lines between page regions

### 3.2 File Organization

```
student-name/
├── index.html          ← Main page
├── about.html          ← Secondary pages (if any)
├── style.css           ← All styles in one file (beginners)
├── images/             ← All images here
│   └── profile.jpg
└── README.md           ← Brief description of what the student built
```

---

## 4. HTML Rules

### 4.1 Required Boilerplate (Every Single File)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Descriptive Page Title</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>

    <!-- content goes here -->

  </body>
</html>
```

Every line is required. No exceptions. AI must include all of these in every example.

### 4.2 Semantic Elements (Non-Negotiable)

Use the right element for the job:

| Instead of... | Use... | Why |
|---|---|---|
| `<div class="header">` | `<header>` | Screen readers navigate by landmarks |
| `<div class="nav">` | `<nav>` | Identifies navigation to assistive tech |
| `<div class="main">` | `<main>` | Single main content landmark per page |
| `<div class="section">` | `<section>` | Groups thematically related content |
| `<div class="article">` | `<article>` | Self-contained, redistributable content |
| `<div class="footer">` | `<footer>` | Page or section footer |
| `<b>bold</b>` | `<strong>` | Semantic importance, not just visual bold |
| `<i>italic</i>` | `<em>` | Semantic emphasis, not just visual italic |

`<div>` is only acceptable when no semantic element fits. Always ask first.

### 4.3 Headings

- **One `<h1>` per page** — it is the page's main title, not a styling choice
- Never skip levels: h1 → h2 → h3 (never h1 → h3)
- Use headings to create an outline, not to make text large

### 4.4 Images

```html
<!-- ALWAYS include alt text -->
<img src="images/profile.jpg" alt="A smiling developer sitting at a desk">

<!-- Decorative images: empty alt so screen readers skip them -->
<img src="images/divider.png" alt="">
```

Alt text rule: describe what the image shows as if talking to someone on the phone.

### 4.5 Links

```html
<!-- BAD — tells us nothing -->
<a href="/contact">Click here</a>

<!-- GOOD — destination is clear -->
<a href="/contact">Get in touch with our team</a>

<!-- External links: open in new tab + security attribute -->
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  Visit Example
</a>
```

### 4.6 Forms

```html
<!-- Every input MUST have a linked label -->
<label for="email">Email address</label>
<input type="email" id="email" name="email" required>

<!-- Group related inputs -->
<fieldset>
  <legend>Contact preferences</legend>
  <!-- radio buttons or checkboxes -->
</fieldset>
```

### 4.7 Forbidden Patterns

```
❌ <table> used for layout (tables are for tabular DATA only)
❌ <br> used for spacing (use CSS margin/padding)
❌ <b> and <i> for semantic meaning (use <strong> and <em>)
❌ Inline styles: <p style="color:red"> (use external CSS)
❌ Deprecated: <center>, <font>, <marquee>, <blink>
❌ Empty alt attributes on meaningful images
❌ Links that say "click here" or "read more" alone
```

### 4.8 Validation

Validate every HTML file before submitting:
**https://validator.w3.org/** — Zero errors required.

---

## 5. CSS Rules

### 5.1 File Linking

CSS always lives in an external file. Link it in `<head>`:

```html
<link rel="stylesheet" href="style.css">
```

Never use `<style>` tags in HTML. Never use `style=""` inline attributes in submissions.

### 5.2 Required Reset (Top of Every CSS File)

```css
/* === Reset === */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* === Base === */
body {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: #1e293b;
  background-color: #ffffff;
}
```

### 5.3 Selectors

```css
/* Use classes for styling */
.card { ... }
.nav-link { ... }

/* Never use IDs for styling */
/* IDs are reserved for JavaScript and anchor links */
#header { ... }  /* ← WRONG for CSS */

/* Avoid overly specific selectors */
nav ul li a { ... }        /* ← Too specific, fragile */
.nav-link { ... }          /* ← Better */
```

### 5.4 Class Naming (BEM-Lite)

```css
/* Block */
.card { ... }

/* Element (part of the block) */
.card__title { ... }
.card__image { ... }
.card__body { ... }

/* Modifier (variation of the block) */
.card--featured { ... }
.card--small { ... }
```

Use lowercase and hyphens. Never camelCase in CSS.

### 5.5 Units

| Use Case | Unit | Reason |
|---|---|---|
| Font sizes | `rem` | Respects user browser settings |
| Spacing (padding, margin) | `rem` or `em` | Scales with font size |
| Container widths | `%` or `max-width` in `px` | Fluid and responsive |
| Viewport-based heights | `vh` / `dvh` | Full-screen sections |
| Borders, small details | `px` | Precise, pixel-level control |
| **Avoid for font-size** | `px` | Breaks user accessibility settings |

### 5.6 CSS Variables (Introduce in Module 3+)

```css
:root {
  /* Colors */
  --color-primary: #2563eb;
  --color-text: #1e293b;
  --color-background: #f8fafc;
  --color-accent: #f59e0b;

  /* Spacing scale */
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2rem;
  --space-xl: 3rem;

  /* Typography */
  --font-body: 'Inter', system-ui, sans-serif;
  --font-heading: 'Inter', system-ui, sans-serif;
}
```

### 5.7 Flexbox (Module 4) — Container First, Then Items

```css
/* Step 1: Container properties */
.flex-container {
  display: flex;
  flex-direction: row;        /* or column */
  justify-content: center;    /* main axis */
  align-items: center;        /* cross axis */
  gap: 1rem;
  flex-wrap: wrap;
}

/* Step 2: Item properties (only after container is understood) */
.flex-item {
  flex: 1;          /* grow, shrink, basis shorthand */
  align-self: flex-start;
}
```

### 5.8 Grid (Module 5) — After Flexbox is Solid

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

/* Named areas for complex layouts */
.page-layout {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 250px 1fr;
}
```

**When to use what:**
- Flexbox → one direction at a time (a nav bar, a row of cards)
- Grid → two dimensions at once (a full page layout)

### 5.9 Responsive Design (Module 6) — Mobile First

```css
/* 1. Write base styles for mobile */
.card {
  width: 100%;
  padding: var(--space-sm);
}

/* 2. Then expand for larger screens */
@media (min-width: 640px) {
  .card { width: 48%; }
}

@media (min-width: 1024px) {
  .card { width: 30%; }
}
```

Common breakpoints:
- `480px` — small mobile
- `640px` — large mobile
- `768px` — tablet
- `1024px` — desktop
- `1280px` — wide desktop

### 5.10 CSS Forbidden Patterns

```
❌ !important (last resort only — flag and explain when used)
❌ Deeply nested selectors (more than 3 levels)
❌ Magic numbers without comments (padding: 37px — why 37?)
❌ Fixed widths on containers (use max-width instead)
❌ px for font sizes (use rem)
❌ Styling #id selectors (use .class)
```

---

## 6. Accessibility Rules

Accessibility is not optional. It is part of writing correct HTML.

### 6.1 Core Principles

- Every image has a descriptive `alt` attribute
- Every form input has a `<label>` linked by `for` and `id`
- Color contrast ratio: minimum 4.5:1 for body text
- All interactive elements are keyboard-reachable (Tab key)
- No content relies solely on color to convey meaning

### 6.2 ARIA — Use Sparingly

ARIA attributes supplement HTML semantics. They do NOT replace them.
Rule: **If a native HTML element exists that conveys the meaning, use it.**

```html
<!-- Don't do this -->
<div role="button" onclick="submit()">Submit</div>

<!-- Do this -->
<button type="submit">Submit</button>
```

Only add ARIA when there is no native HTML alternative.

### 6.3 Focus Management

```css
/* Never remove focus outlines without replacing them */
:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* ❌ NEVER do this alone */
:focus { outline: none; }
```

### 6.4 Skip Navigation

Every multi-page site should include a skip link as the first element:

```html
<a href="#main-content" class="skip-link">Skip to main content</a>
<header>...</header>
<main id="main-content">...</main>
```

### 6.5 Accessibility Testing Tools

- **WAVE** browser extension (free): wave.webaim.org
- **Lighthouse** in Chrome DevTools (Accessibility tab)
- Keyboard test: navigate the entire page using Tab, Enter, and arrow keys only
- Screen reader test: NVDA (Windows, free), VoiceOver (Mac, built-in)

---

## 7. Student Workflow

Follow these steps for every class session, in this exact order.

### Step A — Set Up Your Environment
1. Open VS Code (or Antigravity IDE)
2. Clone the repository (first time only — see GitHub Workflow section)
3. Create your folder inside `student-projects/your-name/`
4. Install the Live Server extension if not installed
5. Open `index.html` and right-click → "Open with Live Server"

### Step B — Start Every Session With Context
Tell the AI who you are and what you're working on:
```
"I am a beginner HTML student, currently on Module [X].
Today I am trying to [describe goal].
My current code is: [paste your code]"
```

### Step C — Learn the Concept Before Coding
- Ask the AI to explain the concept in plain English first
- Draw a rough sketch of the layout before writing HTML
- Predict what you think the code will look like before generating it

### Step D — Write Code Yourself
- Type code manually — do not copy-paste AI output
- Use Emmet abbreviations in VS Code (type `html:5` and press Tab)
- Save frequently (Ctrl+S)
- View changes in the browser after every small addition

### Step E — Debug Independently First
Before asking the AI for help with a bug:
1. Read the error message out loud
2. Check for missing closing tags or quotes
3. Open DevTools (F12) → Console tab → read the error
4. Try one fix on your own
THEN ask the AI with specific context about what you tried

### Step F — Get Your Code Reviewed
```
"Please review my HTML/CSS using the beginner rubric.
My code: [paste]
I want to know: what did I do well, and what is the most important thing to fix?"
```

### Step G — Commit Your Work
Every session ends with a Git commit:
```bash
git add .
git commit -m "add: [describe what you built today]"
git push origin your-branch-name
```

---

## 8. AI Prompting Examples

### Good Prompts — Copy and Customize These

**Starting a concept:**
```
Explain what [CSS Flexbox] is in plain English before showing me any code.
Use an everyday analogy to help me visualize it.
```

**Getting a minimal example:**
```
Show me the smallest possible example of [a responsive navigation bar].
Keep it under 20 lines. Comment every new concept.
```

**Debugging:**
```
My [h1 heading] is [not showing in red] even though I wrote [color: red in CSS].
Here is my HTML: [paste]
Here is my CSS: [paste]
What might be causing this? Give me a hint before showing the fix.
```

**Code review:**
```
Review my HTML file using the beginner checklist.
Tell me one thing I did well and one thing to improve.
[paste your code]
```

**Stuck and frustrated:**
```
I've been trying to [center this div] for 20 minutes.
I've tried [margin: auto] and [text-align: center] already.
Can you explain why those didn't work and give me one more approach to try?
```

**Accessibility check:**
```
Review my page for accessibility issues.
Check: alt text, form labels, heading order, color contrast, and keyboard navigation.
[paste your code]
```

### Prompts to Avoid

```
❌ "Write my whole project for me"
❌ "Fix all the bugs in my code"
❌ "Give me the final version"
❌ "Just give me the answer"
❌ "Make my website look nice" (too vague — describe what you want)
```

### The 3-Before-AI Rule

Before opening the AI chat:
1. Re-read the lesson notes for this module
2. Try one more approach on your own
3. Read the error message or inspect in DevTools

This rule makes you a better developer. AI is most useful to those
who know how to ask specific questions.

---

## 9. GitHub Workflow

### First-Time Setup (Do This Once)

```bash
# Step 1: Clone the repository
git clone https://github.com/[instructor-username]/novice-dev-with-ai.git

# Step 2: Move into the project folder
cd novice-dev-with-ai

# Step 3: Create your personal branch
git checkout -b student/your-name

# Step 4: Create your project folder
mkdir student-projects/your-name
cd student-projects/your-name

# Step 5: Create your first files
# (create index.html and style.css here)
```

### Every Session After That

```bash
# Pull the latest changes from the instructor
git pull origin main

# Work on your code...

# Save your progress
git add .
git commit -m "add: [what you built today]"
git push origin student/your-name
```

### Commit Message Format

```
add: [what you created]         → add: homepage hero section
fix: [what you corrected]       → fix: missing alt text on images
update: [what you improved]     → update: nav bar responsive styles
learn: [concept you practiced]  → learn: CSS Grid 3-column layout
```

### Pull Request (Submitting Work)

When you complete a module milestone:
1. Push your branch to GitHub
2. Go to the repository on GitHub.com
3. Click "New Pull Request"
4. Base: `main` ← Compare: `student/your-name`
5. Title: `[Your Name] — Module [X] Complete`
6. Description: List what you built, what you learned, any questions
7. Assign the instructor as reviewer

### Repository Contribution Rules

- **Never push directly to `main`** — always use your personal branch
- **Never edit another student's folder** — work only in `student-projects/your-name/`
- **Never edit the `.claude/` directory** — the AI system is teacher-managed
- Pull the latest main before starting every new session
- If you see a conflict, ask the instructor before resolving it

---

## 10. Project Structure

```
novice-dev-with-ai/
│
├── .claude/                         ← AI system (teacher-managed, do not edit)
│   ├── CLAUDE.md                    ← This file — primary AI configuration
│   ├── AGENTS.md                    ← 28 specialized AI agents (ECC v1.9.0)
│   ├── WORKFLOWS.md                 ← Lesson + session workflow playbooks
│   ├── INTELLIGENCE_MAP.md          ← System-wide context for agents
│   ├── agents/                      ← Agent definitions
│   │   ├── html-educator.md         ← HTML teaching agent
│   │   ├── css-educator.md          ← CSS teaching agent
│   │   └── [28 ECC agents...]
│   ├── skills/                      ← 125 workflow skills
│   ├── commands/                    ← 60 slash commands
│   ├── contexts/                    ← Session context files
│   │   ├── student.md               ← Student session starter
│   │   └── teacher.md               ← Instructor session starter
│   ├── hooks/                       ← Automation triggers
│   └── rules/                       ← Coding standards
│       ├── html/html-standards.md
│       └── css/css-standards.md
│
├── curriculum/                      ← Lesson content (teacher-managed)
│   ├── module-01-html-basics/
│   ├── module-02-semantic-html/
│   ├── module-03-css-intro/
│   ├── module-04-flexbox/
│   ├── module-05-grid/
│   ├── module-06-responsive/
│   ├── module-07-accessibility/
│   ├── module-08-javascript/
│   ├── module-09-prompt-eng/        ← Prompt engineering guide
│   └── module-10-ai-assisted-coding/ ← AI workspace config guide
│
├── student-projects/                ← YOUR WORK GOES HERE
│   └── [your-name]/
│       ├── index.html
│       ├── style.css
│       ├── images/
│       └── README.md
│
├── exercises/                       ← Practice exercises (do these in order)
│   ├── html/
│   ├── css/
│   ├── prompt-eng/
│   └── ai-coding/
│
├── demos/                           ← Instructor reference demos
│   ├── flexbox-demo/
│   ├── prompt-engineering-demo/
│   └── antigravity-demo/
│
├── README.md                        ← Start here — course overview for students
└── LICENSE
```

---

## 11. Learning Philosophy

### We Learn by Building, Not Watching

Every concept is practiced immediately with a real coding task.
There are no pure theory lessons — every explanation leads to code.

### AI Is a Mentor, Not a Ghostwriter

AI tools in this classroom are configured to:
- Ask questions before giving answers
- Give hints before solutions
- Explain errors rather than silently fixing them
- Celebrate progress and guide improvement

Using AI to generate code you don't understand is the equivalent
of copying someone else's homework. You'll fail the next task.
Use it to understand deeply, and you'll succeed on every task.

### Making Mistakes Is Required

You will write broken HTML. Your CSS will not look right.
That is the curriculum. Debugging is the skill.

The best developers are not people who never make mistakes.
They are people who can identify and fix mistakes quickly.

### The Progression Milestones

You do not move to the next module until you can demonstrate the milestone:

| Module | You Must Be Able To... |
|---|---|
| 1 — HTML Basics | Type the full boilerplate from memory and explain every line |
| 2 — Semantic HTML | Build a 4-region page with zero `<div>` elements |
| 3 — CSS Intro | Style text, colors, and the box model from scratch |
| 4 — Flexbox | Center any element and build a card row using Flexbox only |
| 5 — Grid | Build a 3-column responsive grid layout |
| 6 — Responsive | Make any layout work on mobile, tablet, and desktop |
| 7 — Accessibility | Identify and fix 5 accessibility issues in your own code |
| 8 — JavaScript | Add form validation and a dark mode toggle using vanilla JS |
| 9 — Prompt Engineering | Submit a prompts log containing structured generation, review, and debug prompts |
| 10 — AI-Assisted Coding | Initialize a `.ai` folder and use Antigravity to build a compliant styled dashboard |

### The Developer Mindset

A real developer:
- Reads documentation before asking for help
- Can explain their code line-by-line
- Looks at the browser's error messages first
- Breaks complex problems into smaller steps
- Is never afraid to delete code and start again

You are building this mindset. It takes time. Be patient with yourself.

---

## 12. ECC System Integration

This classroom layer is built ON TOP of the Everything Claude Code (ECC) v1.9.0 system.
All 28 agents, 125 skills, 60 commands, and hook automations remain fully active.

Classroom-specific additions:
- `html-educator` agent → HTML concepts and review
- `css-educator` agent → CSS concepts and review
- Beginner rubric injected into `code-reviewer` agent
- Plain-English error translation injected into `build-error-resolver`
- Lesson planning workflow added to `planner` agent

System references:
- ECC agents → `.claude/AGENTS.md`
- Classroom workflows → `.claude/WORKFLOWS.md`
- Skills library → `.claude/skills/`
- HTML rules → `.claude/rules/html/html-standards.md`
- CSS rules → `.claude/rules/css/css-standards.md`
- Student session context → `.claude/contexts/student.md`
