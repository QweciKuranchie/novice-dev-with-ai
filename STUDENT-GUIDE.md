# 🎓 Student Guide — Web Development + AI Engineering Classroom

> **Format:** Live Zoom sessions | **Duration:** 4 days total
> **Day 1:** Environment Setup (2 hours) | **Days 2–4:** Content Sessions (2 hours each)
> **Tools:** Antigravity IDE, VS Code, Git, Chrome, GitHub, Zoom

---

## Table of Contents

1. [Before Day 1 — What You Need](#before-day-1--what-you-need)
2. [Zoom Class Rules and Etiquette](#zoom-class-rules-and-etiquette)
3. [Day 1 — Environment Setup (Full Guide)](#day-1--environment-setup-full-guide)
4. [Day 2 — HTML Basics](#day-2--html-basics)
5. [Day 3 — Semantic HTML and CSS Introduction](#day-3--semantic-html-and-css-introduction)
6. [Day 4 — Flexbox, Responsive Design, and Your First Real Page](#day-4--flexbox-responsive-design-and-your-first-real-page)
7. [Understanding the .claude Folder](#understanding-the-claude-folder)
8. [How to Use Antigravity as Your Tutor](#how-to-use-antigravity-as-your-tutor)
9. [How to Ask for Help During Zoom Sessions](#how-to-ask-for-help-during-zoom-sessions)
10. [How to Submit Your Work](#how-to-submit-your-work)
11. [Student Commitments](#student-commitments)

---

## Before Day 1 — What You Need

Complete this checklist **before your first Zoom session.** If you get stuck on anything, message the instructor on WhatsApp/Discord before class — do not wait.

### Accounts to Create (Free)

| Account | Link | Why You Need It |
|---|---|---|
| **GitHub** | https://github.com | Store and share your code |
| **Claude AI** | https://claude.ai | AI mentor access |

### Software to Install (Free)

| Software | Download | What It Does |
|---|---|---|
| **VS Code** | https://code.visualstudio.com | Where you write code |
| **Git** | https://git-scm.com | Saves versions of your code |
| **Google Chrome** | https://google.com/chrome | Browser + DevTools |
| **Zoom** | https://zoom.us | Where the class happens |

### VS Code Extensions to Install

Open VS Code → press `Ctrl+Shift+X` → search and install:

- **Live Server** — previews your HTML in Chrome instantly
- **Prettier** — formats your code automatically
- **HTML CSS Support** — smart autocomplete
- **Auto Rename Tag** — renames closing tags when you rename opening tags
- **Error Lens** — shows errors inline in your file

### Verify Git Is Installed

Open your terminal (VS Code → Terminal → New Terminal) and type:

```bash
git --version
```

You should see something like: `git version 2.x.x`

If you see an error, Git is not installed. Download it again from https://git-scm.com

---

## Zoom Class Rules and Etiquette

These are required to make the class work for everyone.

### Before Each Session

- [ ] Join the Zoom link **5 minutes early**
- [ ] Have VS Code open and ready
- [ ] Have Chrome open
- [ ] Have the course repo open in VS Code (after Day 1)
- [ ] Test your microphone works

### During Sessions

| Do This | Don't Do This |
|---|---|
| **Mute yourself** when not speaking | Leave microphone on with background noise |
| **Turn camera on** when possible | Be invisible — presence helps the class |
| **Use the Zoom chat** to paste code snippets | Interrupt the instructor verbally while they're typing |
| **Use Raise Hand** (Reactions → Raise Hand) to ask questions | Stay silent when stuck — ask in chat |
| **Share your screen** when the instructor asks to review your code | Refuse to share — your mistakes help everyone learn |

### How to Ask a Question During Zoom

**Option A — Chat:**
Type your question in the Zoom chat. The instructor checks it regularly.
Paste your code directly in the chat (short snippets only — use backticks for code).

**Option B — Raise Hand:**
Click Reactions → Raise Hand. The instructor will call on you.

**Option C — Share Screen:**
When the instructor asks "can someone share their screen?", volunteer.
Your bugs help the whole class.

### When You Get Left Behind

Do NOT stay silent. Type in the chat:
```
"I'm lost at [step X]. Can we slow down?"
```

The instructor will address it. Every beginner gets left behind sometimes.
Saying so is the professional thing to do.

### Screen Sharing — How to Do It

When the instructor asks you to share your screen:
1. Click the green **Share Screen** button in Zoom
2. Choose **your VS Code window** (not your entire desktop)
3. Make sure your code file is open and visible
4. If you also want to show Chrome: select **Browser window** instead

---

## Day 1 — Environment Setup (Full Guide)

**Duration:** 2 hours | **Format:** Instructor shares screen, you follow along

### What Happens This Day

You will set up your entire development environment from scratch.
By the end of Day 1, your code will be live on GitHub.

### Session Outline

```
[0:00–0:10]  Welcome, introductions, Zoom check
[0:10–0:40]  Install and verify all software (together as a class)
[0:40–1:00]  Create GitHub account + configure Git
[1:00–1:20]  Fork and clone the course repo
[1:20–1:40]  Create your student folder + first HTML file
[1:40–1:55]  First Git commit + push to GitHub
[1:55–2:00]  Homework preview + questions
```

### Step-by-Step: What You Will Do

Follow along with the instructor sharing their screen on Zoom:

> 💡 **Visual Learner?** The steps below use the terminal. If you prefer to use **GitHub Desktop** for a visual, point-and-click experience, read our [**GitHub Desktop Guide for Beginners**](./GITHUB-DESKTOP-GUIDE.md).

#### A. Configure Git with Your Identity

Open VS Code. Go to Terminal → New Terminal. Type these two commands:

```bash
git config --global user.name "Your Full Name"
git config --global user.email "your@email.com"
```

Use the same email as your GitHub account.

Verify it worked:
```bash
git config --list
```

You should see your name and email listed.

#### B. Fork the Course Repository

1. The instructor will paste the repo link in Zoom chat
  https://github.com/mhiskall282/novice-dev-with-ai
2. Click it — it opens GitHub.com
3. Click the **Fork** button (top right of the page)
4. GitHub creates a copy under your account
5. You now have: `github.com/YOUR-USERNAME/novice-dev-with-ai`

#### C. Clone Your Fork to Your Computer

In your VS Code terminal:

```bash
git clone https://github.com/YOUR-GITHUB-USERNAME/novice-dev-with-ai.git
```

> Replace `YOUR-GITHUB-USERNAME` with your actual GitHub username.
> You are cloning **your fork**, not the instructor's repo.

Wait for it to finish. Then:

```bash
cd novice-dev-with-ai
```

You are now inside the course folder.

#### D. Connect to the Instructor's Repo (Upstream)

This lets you receive updates from the instructor throughout the course:

```bash
git remote add upstream https://github.com/mhiskall282/novice-dev-with-ai.git
```

Verify both remotes:
```bash
git remote -v
```

You should see:
```
origin    https://github.com/YOUR-USERNAME/novice-dev-with-ai.git   (your fork)
upstream  https://github.com/mhiskall282/novice-dev-with-ai.git    (instructor)
```

> **origin** = your personal copy (where you push your work)
> **upstream** = the instructor's original (where you pull updates from)

#### E. Create Your Personal Branch

```bash
git checkout -b student/your-name
```

Replace `your-name` with your actual name — all lowercase, hyphens for spaces:
- `student/amara-mensah`
- `student/john-doe`
- `student/kofi-boateng`

#### F. Create Your Student Folder

In the terminal:

```bash
mkdir -p student-projects/your-name
```

#### G. Open in VS Code

```bash
code .
```

VS Code opens the full project. You can see the folder tree in the sidebar.

#### H. Create Your First Two Files

In VS Code sidebar:
1. Right-click on `student-projects/your-name/`
2. New File → type `index.html` → press Enter
3. Right-click again → New File → type `style.css` → press Enter

#### I. Type Your First HTML

Click on `index.html`. Type this **manually** (do not copy-paste):

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Name — First Page</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>Hello, I'm [Your Name]</h1>
    <p>I am learning web development.</p>
  </body>
</html>
```

Save: `Ctrl+S`

#### J. Start Live Server

Right-click `index.html` → **Open with Live Server**

Chrome opens at `http://127.0.0.1:5500/student-projects/your-name/`

You should see your heading and paragraph. **You built a webpage.**

#### K. Your First Git Commit

Back in the terminal:

```bash
git add .
git commit -m "add: day one - my first HTML page"
git push origin student/your-name
```

Go to your GitHub fork in Chrome. Click **"student/your-name"** branch.
You should see your files there.

**Your code is on the internet. That is real software development.**

## How to Submit Your Work

### After Every Exercise — Commit and Push

Every time you finish an exercise, save your work to GitHub:

```bash
git add .
git commit -m "add: [describe what you built]"
git push origin student/your-name
```

Verify it uploaded: go to `https://github.com/YOUR-USERNAME/novice-dev-with-ai`,
switch to your `student/your-name` branch, and confirm your files are there.

---

### Submitting an Assignment — Open a Pull Request

**All assignments are submitted as GitHub Pull Requests (PRs).**
The instructor reviews your code on GitHub and leaves comments directly on your lines.

> 📖 **Full step-by-step PR guide:** [`CONTRIBUTING.md`](./CONTRIBUTING.md)
> Read this before opening your first PR.

**Quick version:**

```
Step 1 → Commit and push your work (see above)

Step 2 → Go to https://github.com/YOUR-USERNAME/novice-dev-with-ai

Step 3 → Click "Compare & pull request" (yellow banner after pushing)

Step 4 → Set the target:
          Base:    mhiskall282/novice-dev-with-ai → main
          Compare: YOUR-USERNAME/novice-dev-with-ai → student/your-name

Step 5 → Write your PR title:
          [Your Full Name] — Day [X] — [What You Built]
          Example: "Amara Mensah — Day 3 — Semantic HTML + CSS"

Step 6 → Fill in the description template from CONTRIBUTING.md
          (What I built, what I learned, what was hard, self-checklist, questions)

Step 7 → Click "Create Pull Request" ✅
```

### When the Instructor Leaves Feedback

1. You get a GitHub email notification
2. Read each comment on your PR
3. Fix the issues in VS Code
4. Commit and push — the same PR updates automatically:
   ```bash
   git add .
   git commit -m "fix: [what you fixed based on review]"
   git push origin student/your-name
   ```
5. Reply to each comment on GitHub and mark resolved
6. Instructor re-reviews → approves → milestone confirmed ✅

---

### PR Title Format (Required)

```
[Full Name] — Day [X] — [Description]

Examples:
Kofi Boateng — Day 2 — HTML About Page
Amara Mensah — Day 3 — Semantic HTML + CSS Introduction
John Doe     — Day 4 — Final Personal Page
```

#### Day 1 Homework (Before Day 2)

1. Add one more `<p>` to your page — write one sentence about why you want to learn web development
2. Change the `<title>` to include your name and the city you're from
3. Commit and push the change:
   ```bash
   git add .
   git commit -m "update: added personal paragraph and city to title"
   git push origin student/your-name
   ```

---

## Day 2 — HTML Basics

**Duration:** 2 hours | **Format:** Zoom — concept + live demo + exercises

### What You Will Learn

- What HTML is and what it does (structure layer only)
- How the browser reads HTML from top to bottom
- Tags, elements, and attributes — the difference explained
- The HTML boilerplate — every line, understood completely
- Headings: `<h1>` through `<h6>` and when to use them
- Paragraphs, links, and images
- Viewing HTML source in Chrome (Ctrl+U)
- Using Chrome DevTools to inspect elements (F12)

### Session Outline

```
[0:00–0:10]  Homework review — instructor checks everyone's GitHub
[0:10–0:25]  Concept: What is HTML? (no code yet — explanation first)
[0:25–0:45]  Live demo: Building a page line by line on screen
[0:45–1:05]  Exercise A: Students build their own page (camera on, work shown)
[1:05–1:20]  AI code review — students paste code into Antigravity
[1:20–1:40]  Exercise B: Add links, images, and a second section
[1:40–1:55]  Screen shares: 2–3 volunteers show their work
[1:55–2:00]  Commit, push, preview Day 3
```

### Exercise A — Build Your About Page

Create a page inside your folder with:
- A proper boilerplate
- An `<h1>` with your name
- An `<h2>` that says "About Me"
- Two `<p>` elements about yourself
- An `<h2>` that says "Why Web Development"
- One `<p>` explaining your reason

**Before you start**, read: `curriculum/module-01-html-basics/lesson-notes.md`

**When you're done**, open Antigravity and paste:

```
I am a beginner HTML student on Module 1 — Day 2.
I just built my first About page.
Please review it and tell me one thing I did well and one thing to fix.
[paste your HTML]
```

### Exercise B — Links and Images

Add to your page:
1. A link to your GitHub profile:
   ```html
   <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
     View my GitHub
   </a>
   ```
2. Create an `images/` folder. Add any image. Link it with `<img src="images/..." alt="description">`

### Day 2 Homework

- Read `curriculum/module-02-semantic-html/README.md`
- Practice typing the boilerplate from memory 3 times in a blank file
- Commit and push anything you built today

---

## Day 3 — Semantic HTML and CSS Introduction

**Duration:** 2 hours | **Format:** Zoom — concept + live demo + exercises

### What You Will Learn

- Semantic HTML: why `<nav>` beats `<div class="nav">`
- Page landmarks: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- How screen readers use semantic elements
- Introduction to CSS: linking, selectors, properties, values
- The CSS box model: content → padding → border → margin
- Typography: font-family, font-size, color, line-height
- The required CSS reset

### Session Outline

```
[0:00–0:10]  Homework check + boilerplate quiz (type it from memory)
[0:10–0:30]  Concept: Semantic HTML — why meaning matters
[0:30–0:50]  Live demo: Converting a div-heavy page to semantic HTML
[0:50–1:05]  Exercise A: Rebuild your page with semantic elements only
[1:05–1:20]  Concept: CSS — linking, selectors, box model (visual)
[1:20–1:40]  Exercise B: Style your page — typography + colors + spacing
[1:40–1:55]  AI code review + screen shares
[1:55–2:00]  Commit, push, preview Day 4
```

### Exercise A — Go Semantic

Rebuild your page structure using only semantic elements. Rules:
- **Zero `<div>` elements allowed**
- Use `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` minimum
- HTML validator must pass: https://validator.w3.org/

Ask Antigravity when stuck:
```
I'm converting my HTML to use semantic elements.
I have a [navigation bar / blog post / sidebar] — which semantic element should I use?
Explain why that element is the right choice.
```

### Exercise B — Your First CSS

Create `style.css` and add:

```css
/* === Reset === */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* === Base === */
body {
  font-family: system-ui, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: #1e293b;
  background-color: #f8fafc;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

h1 { font-size: 2rem; margin-bottom: 0.5rem; }
h2 { font-size: 1.4rem; margin-top: 2rem; margin-bottom: 0.5rem; }
p  { margin-bottom: 1rem; }
```

Open DevTools (F12) → click on your heading → see the Box Model diagram.

### Day 3 Homework

- Validate your HTML (zero errors)
- Validate your CSS at https://jigsaw.w3.org/css-validator/
- Read `curriculum/module-04-flexbox/README.md`
- Commit and push

---

## Day 4 — Flexbox, Responsive Design, and Your First Real Page

**Duration:** 2 hours | **Format:** Zoom — concept + live demo + final project

### What You Will Learn

- CSS Flexbox: container properties, item properties
- Mobile-first responsive design
- Media queries: `@media (min-width: 768px)`
- How to test responsive layouts in Chrome DevTools
- Building a complete, styled, responsive personal page

### Session Outline

```
[0:00–0:10]  Homework review + CSS validator check together
[0:10–0:30]  Concept: Flexbox — one axis at a time (visual explanation)
[0:30–0:50]  Live demo: Flexbox nav bar + card layout
[0:50–1:05]  Exercise A: Build a Flexbox navigation bar
[1:05–1:20]  Concept: Responsive design + media queries
[1:20–1:45]  Final Project: Put it all together
[1:45–1:55]  Everyone shares screen — show your page
[1:55–2:00]  Pull requests, next steps, resources
```

### Exercise A — Flexbox Navigation Bar

Add a `<nav>` to your page and style it:

```html
<nav class="site-nav">
  <span class="nav-brand">Your Name</span>
  <ul class="nav-links">
    <li><a href="#about">About</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>
```

```css
.site-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #1e293b;
}

.nav-brand { color: white; font-weight: bold; }

.nav-links {
  display: flex;
  list-style: none;
  gap: 1.5rem;
}

.nav-links a { color: #94a3b8; text-decoration: none; }
.nav-links a:hover { color: white; }
```

Ask Antigravity if stuck:
```
My Flexbox nav bar has the brand and links both on the left.
I want brand on the left, links on the right.
My CSS: [paste]
Give me a hint — what Flexbox property am I missing?
```

### Final Project — Your Personal Page

Build one page that includes everything from Days 2–4:

**Requirements:**
- [ ] Valid HTML5 boilerplate
- [ ] Semantic structure: `<header>`, `<nav>`, `<main>`, `<footer>`
- [ ] At least 3 sections with `<section>` or `<article>`
- [ ] Your name, photo (or placeholder), about text
- [ ] A Flexbox navigation bar
- [ ] CSS reset + custom typography + colors
- [ ] Works on mobile: test at 375px width in DevTools
- [ ] One media query: layout changes at 768px
- [ ] All images have alt text
- [ ] External CSS file only

**Submit via Pull Request (instructor will walk through this together).**

---

## Understanding the .claude Folder

When you open this repo in VS Code or Antigravity, you will see a `.claude/` folder.

**Do not edit anything inside it.** This folder is the AI's instruction manual.

### What's Inside

```
.claude/
├── CLAUDE.md              ← How the AI is configured to teach
├── WORKFLOWS.md           ← Lesson workflows
├── agents/
│   ├── html-educator.md   ← Your HTML tutor agent
│   └── css-educator.md    ← Your CSS tutor agent
├── contexts/
│   ├── student.md         ← ⭐ USE THIS before every AI chat
│   └── teacher.md         ← Instructor-facing (not for students)
└── rules/
    ├── html/html-standards.md  ← Standards your HTML is reviewed against
    └── css/css-standards.md    ← Standards your CSS is reviewed against
```

### The Most Important File: `student.md`

Every time you open Antigravity or Claude to ask a question, do this first:

1. Open `.claude/contexts/student.md`
2. Copy the template
3. Fill in the blanks
4. Paste it as your **first message** to the AI

This tells the AI exactly who you are and what you need. It makes every response 10x better.

### Can/Cannot Rules

| You CAN | You CANNOT |
|---|---|
| Read any file in `.claude/` | Edit any file in `.claude/` |
| Use `student.md` as a prompt template | Create files inside `.claude/` |
| Ask the AI to explain what's inside | Delete or rename anything |

---

## How to Use Antigravity as Your Tutor

Antigravity IDE reads the `.claude/` folder automatically. When you ask it questions in this repo, it behaves as your configured HTML/CSS tutor — not a generic AI.

### Starting a Session the Right Way

**First message of every session:**

```
I am a beginner web development student in the novice-dev-with-ai classroom.
Module: [X] — [Topic]
Today's goal: [what you are trying to build]
Current code: [paste your HTML / CSS]
What I've already tried: [your attempts]
Question: [specific question]
```

### Prompt Examples You Can Copy

**To learn a concept:**
```
Explain what [CSS Flexbox] is in plain English before showing any code.
Use an everyday analogy. I am a complete beginner.
```

**When stuck on a bug:**
```
My [h2 heading] is [not turning blue] even though I wrote [color: blue] in CSS.
HTML: [paste]
CSS: [paste]
Give me a hint — not the full answer. What should I check first?
```

**To get a code review:**
```
Review my HTML using the beginner checklist.
Tell me: one thing I did well, and one thing to fix.
[paste your code]
```

**When you don't understand AI output:**
```
You gave me this code: [paste]
I don't understand line [X]: [paste that line]
Explain only that one line in plain English. No more code.
```

### The 3-Before-AI Rule

Before asking the AI anything:
1. Read the lesson notes in `curriculum/module-0X/lesson-notes.md`
2. Try one more thing yourself
3. Open DevTools (F12) and inspect the problem

THEN ask. Your question will be better and you will learn more from the answer.

### Prompts to Avoid

```
❌ "Write my whole page for me"
❌ "Fix all my bugs"
❌ "Give me the final version"
❌ "Just give me the answer"
```

These work in a generic AI chat. In this classroom's AI, they are configured
to redirect you to think — because that's the actual skill you're learning.

---

## How to Ask for Help During Zoom Sessions

### In the Zoom Chat

Paste a short description + your code:

```
Stuck: my nav links are not turning white on hover.
CSS: .nav-links a:hover { color: white } — not working.
HTML: [paste your nav HTML]
```

### Via Raise Hand

Click Reactions → Raise Hand. Wait for the instructor to call on you.
Prepare to share your screen when they do.

### After the Session (Between Days)

Post in the class WhatsApp/Discord group:
```
Module [X], Exercise [name]:
Problem: [describe]
Tried: [list attempts]
Code: [paste or share GitHub link]
```

The instructor or a classmate will respond before the next session.

---

## How to Submit Your Work

### After Every Exercise

```bash
git add .
git commit -m "add: [describe what you built]"
git push origin student/your-name
```

### After Each Day's Session

Go to GitHub.com → your fork → your branch.
Confirm your latest files are there.

### Submitting a Milestone (Pull Request)

When you complete a milestone (end of Day 4 or when instructor says):

1. Push your branch to GitHub
2. Go to your fork on GitHub.com
3. Click **"Compare & pull request"**
4. Set:
   - Base: `instructor-repo` → `main`
   - Compare: `your-fork` → `student/your-name`
5. Title: `[Your Name] — Day [X] Complete`
6. Description: Write what you built, what was hard, any questions
7. Click **Create Pull Request**

The instructor reviews it and leaves comments directly on your code.

---

## Student Commitments

By joining this course, you agree to:

**Showing up:**
- [ ] Join every Zoom session on time
- [ ] Have your environment ready before the session starts
- [ ] Complete the homework before the next session

**During sessions:**
- [ ] Camera on when possible
- [ ] Ask in chat when stuck — never stay silent
- [ ] Share your screen when asked — your bugs help everyone
- [ ] Type code yourself — never copy-paste AI output blindly

**Using AI:**
- [ ] Start every AI session with the `student.md` context template
- [ ] Try the 3-Before-AI Rule before asking
- [ ] Ask specific questions, not "fix everything"
- [ ] Read and understand every line before using it

**Git:**
- [ ] Commit after every session
- [ ] Write descriptive commit messages
- [ ] Never push to `main`
- [ ] Never edit another student's folder

---

## Quick Reference — Git Commands

```bash
# Pull latest from instructor (start of every session)
git pull upstream main

# Check what branch you're on
git branch

# Switch to your branch
git checkout student/your-name

# Save and upload your work
git add .
git commit -m "add: description here"
git push origin student/your-name

# See what files changed
git status

# See your commit history
git log --oneline
```

---

## Quick Reference — Tools

| Tool | What It's For | How to Open |
|---|---|---|
| VS Code | Write your HTML and CSS | Desktop icon or `code .` in terminal |
| Live Server | See your page in Chrome | Right-click HTML → Open with Live Server |
| Chrome DevTools | Inspect, debug, test responsive | F12 or right-click → Inspect |
| Device Toolbar | Test mobile layouts | DevTools → Ctrl+Shift+M |
| W3C HTML Validator | Check for HTML errors | https://validator.w3.org |
| W3C CSS Validator | Check for CSS errors | https://jigsaw.w3.org/css-validator |
| Antigravity | Your AI tutor | The IDE you're working in |
| GitHub | Store and share code | https://github.com |

---

*This class happens on Zoom. The internet makes it possible for us to learn together
across distances. Show up. Ask questions. Build things. Ship code.*
*That's what developers do.*
