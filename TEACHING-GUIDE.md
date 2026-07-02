# 📖 Instructor Teaching Guide — Day-of-Class Playbook

> **Who this is for:** The course instructor.
> Use this file on teaching days as your step-by-step runbook.
> It contains exact prompts to give Antigravity IDE, what to tell students about
> the `.claude` folder, and a full class session flow with examples.

---

## Part 1 — Before Class Starts (Instructor Prep)

### 1A. Open Antigravity and Load This Repo

1. Open Antigravity IDE
2. File → Open Folder → select `novice-dev-with-ai/`
3. Confirm the `.claude/` folder is visible in the sidebar
4. Open `.claude/CLAUDE.md` — this is the AI's brain for this classroom
5. Open the relevant module's `curriculum/module-0X/lesson-notes.md`

### 1B. Prime Antigravity With the Teaching Context

Paste this prompt into Antigravity **before the first student arrives:**

```
You are the AI mentor for a beginner web development classroom.
Read the file .claude/CLAUDE.md carefully — it contains your behavior rules.
Read the file .claude/WORKFLOWS.md for the lesson delivery workflow.
Today's lesson is: [Module X — Topic Name].
The lesson notes are in: curriculum/module-0X/lesson-notes.md

Rules for this session:
- Explain every concept BEFORE showing code
- Use plain English — no jargon without defining it
- Give hints before full answers when students are stuck
- Keep all code examples under 20 lines
- Celebrate effort and working code, even if imperfect
- When reviewing code, use the 8-point beginner rubric in CLAUDE.md

Confirm you have read these files and are ready to teach.
```

### 1C. Verify Student Setup (5 Minutes Before Class)

Check that every student has:
- [ ] VS Code or Antigravity IDE open
- [ ] This repo cloned and their personal branch checked out
- [ ] Their `student-projects/their-name/` folder created
- [ ] Live Server extension installed and working
- [ ] Chrome open with DevTools (F12) accessible

---

## Part 2 — What to Tell Students About the `.claude` Folder

**Say this to students on Day 1 (exact script):**

> "See this `.claude` folder in the sidebar? This is the AI's instruction manual.
> It tells every AI tool in this repo how to behave — what to teach, how to explain things,
> what rules to follow when reviewing your code.
>
> You do NOT edit anything in this folder. Think of it like the teacher's desk — 
> it's set up a specific way for a reason.
>
> What you CAN do is USE the AI tools it powers. When you open Antigravity and ask it
> a question, it reads this folder automatically and becomes your personal tutor
> configured specifically for this course.
>
> The folder contains:
> - `CLAUDE.md` — the main AI configuration (how it speaks, what it teaches)
> - `WORKFLOWS.md` — the step-by-step flows for lessons, reviews, and error recovery
> - `agents/` — 30 specialized AI assistants (html-educator, css-educator, code-reviewer, etc.)
> - `rules/` — the coding standards your code is reviewed against
> - `contexts/` — two files you WILL use: `student.md` and `teacher.md`
> - `skills/` — 125 background knowledge skills the AI draws from
>
> The most important rule: **the AI is configured to teach you, not do your work.**
> If you ask it to write your whole project, it will ask you questions instead.
> That's not a bug — that's by design."

### Show Students the student.md Context File

Open `.claude/contexts/student.md` on the projector and say:

> "This file is your AI session starter. At the beginning of EVERY AI chat,
> you copy this template, fill in the blanks, and paste it first.
> It tells the AI exactly who you are, what module you're on, and what you need.
> The more specific your context, the better the AI helps you."

---

## Part 3 — Module-by-Module Day-of-Teaching Flow

### Every Class Session Follows This Pattern

```
[00:00] Warm-up review (5 min)
[00:05] Concept introduction — YOU explain it first, then AI reinforces (15 min)
[00:20] Live demo with Antigravity (10 min)
[00:30] Students code Exercise A — guided (20 min)
[00:50] Code review with AI (10 min)
[01:00] Students code Exercise B — semi-guided (20 min)
[01:20] Peer review + share screen (10 min)
[01:30] Wrap-up + commit to GitHub (10 min)
[01:40] Preview of next session (5 min)
```

---

## Part 4 — Exact Antigravity Prompts by Situation

### Situation 1 — Introducing a New Concept to the Class

Use this on the projector to show the whole class how to prompt properly:

```
I am teaching Module [X] — [Topic] to a class of complete beginners.
They have just learned [previous concept].

Please explain [new concept] using this exact format:
1. Plain English definition (2-3 sentences, no jargon)
2. A real-world analogy (not a coding analogy)
3. A visual diagram if possible (ASCII is fine)
4. The smallest working code example (under 20 lines, every line commented)
5. One common mistake beginners make with this concept

Do NOT skip to code without the explanation first.
```

**Example — Day 1, introducing the HTML boilerplate:**

```
I am teaching Module 1 — HTML Basics to complete beginners.
They have never written code before.

Please explain "the HTML boilerplate" using this format:
1. Plain English definition (what it is, why every file needs it)
2. A real-world analogy
3. The boilerplate code with EVERY line commented explaining what it does
4. What happens if a student forgets each line
5. The single most common mistake beginners make

Do NOT use any CSS or JavaScript. HTML only.
```

---

### Situation 2 — A Student's Code Is Broken

When a student is stuck, show them how to ask for help properly.
Type this on their machine:

```
I am a beginner HTML student on Module [X].
My code is not working. Here is the problem:

[Student describes the problem in their own words]

Here is my code:
[paste their HTML]
[paste their CSS if relevant]

What I already tried:
[student lists their attempts]

Please:
1. Tell me what TYPE of error this is (syntax / logic / CSS specificity / etc.)
2. Show me EXACTLY where the problem is
3. Explain WHY it's a problem in plain English
4. Give me a HINT — not the full fix
5. Ask me a question to help me figure out the fix myself
```

---

### Situation 3 — Reviewing a Student's Submitted Code

Paste this with the student's code attached:

```
Please review this student's HTML and CSS using the beginner rubric from CLAUDE.md.

Student: [name]
Module: [X]
Exercise: [name]

[paste student's full HTML file]
[paste student's full CSS file]

Review format:
- Score each of the 8 rubric items: Great / Needs Work / Missing
- Name ONE specific thing they did really well (quote the exact code)
- Name ONE most important fix (explain WHY, then give a guiding question — not the answer)
- Give one tip to prepare them for the next module
Keep your tone encouraging.
```

---

### Situation 4 — Generating an Exercise for the Class

```
Create a [guided / semi-guided / debug challenge] exercise for Module [X]: [topic].

Student level: [describe — e.g. "Day 3, comfortable with HTML structure, first CSS lesson"]

Requirements:
- Pure HTML + CSS (no JavaScript, no frameworks)
- Total code under 40 lines
- Achievable in 20 minutes
- Clear success criteria (student knows when they're done)

Format:
- Exercise title
- Goal statement (one sentence)
- What they will build (visual description)
- Step-by-step instructions OR hints only (depending on level)
- What the finished result should look like
```

---

### Situation 5 — A Student Asks "What Does This Error Mean?"

Show the student how to ask the AI:

```
I got this error in my browser console / HTML validator / CSS validator:

[paste the exact error message]

Please:
1. Explain what this error means in plain English (no technical jargon)
2. Tell me which line in my code likely caused it
3. Explain what that line was supposed to do vs what it's actually doing
4. Give me one question to ask myself to find the fix

My code: [paste]
```

---

### Situation 6 — Live Demo for the Whole Class

When demoing on the projector, use this prompt so the AI generates
code students can study and type themselves:

```
I am demonstrating [topic] to a class of beginners on a projector.

Please generate a demo that:
- Uses only HTML and CSS (no JavaScript)
- Is under 30 lines total
- Has a comment on EVERY single line explaining what it does
- Uses a realistic real-world example (not "foo" or "bar")
- Looks visually clear enough to see on a projector screen

Topic: [topic]
Real-world example to use: [e.g. "a simple business card layout"]
```

---

### Situation 7 — End of Session — Git Commit Prompt

At the end of every session, show students this Antigravity prompt:

```
Help me write a good git commit message for what I built today.

What I built: [student describes in plain English]
Module: [X]
Files changed: [list files]

Give me 3 commit message options using this format:
add: [description]
fix: [description]
learn: [description]

Explain which one is most accurate for what I built.
```

---

### Situation 8 — Teaching Prompt Engineering (5-Part Formula)

Use this prompt to demonstrate the difference between simple prompts and structured prompt engineering:

```
I am teaching my students how to prompt. Show them the difference between a poor prompt and a well-engineered prompt for building a contact form.

Output:
1. The Poor Prompt (e.g. "write a contact form").
2. The Code resulting from the poor prompt (show 5 lines, pointing out lack of label relationships, bad semantic structure, etc.).
3. The Engineered Prompt using the 5-Part Formula (Role, Context, Task, Constraints, Output Format).
4. The Code resulting from the engineered prompt (fully semantic, accessible, with clear annotations).
```

---

### Situation 9 — Teaching Antigravity Workspace Config (.ai folder)

Use this prompt to explain to students how to customize local AI settings:

```
Explain to a class of web development students how to initialize a `.ai` folder in their project.
List:
1. The step-by-step commands to create the directories.
2. A sample styling rules file contents (`.ai/rules/styling.md`) that enforces using rem and variables.
3. How to check that Antigravity is reading these files.
Keep the explanation clear, brief, and structured.
```

---

## Part 5 — Student Step-by-Step: How to Work in This Repo

**Share this with students as a printed or pinned reference.**

### Every Session — The 8 Steps

```
Step 1 → PULL latest changes
         git pull upstream main

Step 2 → SWITCH to your branch
         git checkout student/your-name

Step 3 → OPEN your folder in VS Code
         student-projects/your-name/

Step 4 → START Live Server
         Right-click index.html → Open with Live Server

Step 5 → PRIME the AI with your context
         Copy .claude/contexts/student.md
         Fill in: module, goal, current code, question
         Paste into Antigravity as your first message

Step 6 → READ before you code
         Open curriculum/module-0X/lesson-notes.md
         Read the concept for today BEFORE touching any code

Step 7 → CODE and save constantly
         Ctrl+S after every small change
         Watch the browser update in real time

Step 8 → COMMIT at the end
         git add .
         git commit -m "add: what you built today"
         git push origin student/your-name
```

---

## Part 6 — How Students Navigate the Repo (Visual Guide)

```
novice-dev-with-ai/
│
├── README.md                ← START HERE — read this first
│
├── curriculum/              ← YOUR LESSONS — read before coding
│   └── module-01-html-basics/
│       ├── README.md        ← module overview
│       └── lesson-notes.md ← full concept explanations + exercises
│
├── student-projects/        ← YOUR CODE GOES HERE
│   └── your-name/
│       ├── index.html       ← build this
│       └── style.css        ← style this
│
└── .claude/                 ← AI BRAIN — do not edit
    ├── CLAUDE.md            ← AI behavior rules
    ├── contexts/
    │   └── student.md       ← COPY THIS before every AI session
    ├── agents/
    │   ├── html-educator.md ← AI HTML teacher
    │   └── css-educator.md  ← AI CSS teacher
    └── rules/
        ├── html/html-standards.md ← rules your HTML is reviewed against
        └── css/css-standards.md   ← rules your CSS is reviewed against
```

**The student's daily path:**
1. `curriculum/` → read the lesson
2. `student-projects/your-name/` → write the code
3. `.claude/contexts/student.md` → prime the AI
4. Antigravity chat → ask questions
5. Git → commit and push

---

## Part 7 — Common Student Questions & How to Answer Them

### "Why can't the AI just write my code for me?"

> "It can — but it's configured not to in this classroom. Here's why:
> If AI writes your code, you learn nothing. Two weeks from now in an interview
> or on a real project, you'll be lost. The AI is configured to make you think.
> That's the skill. Prompting an AI well is a skill. Debugging is a skill.
> You're learning both — and that's worth more than any shortcut."

### "The AI gave me code I don't understand. What do I do?"

Teach the student to paste this:

```
You gave me this code: [paste it]
I don't understand what [specific line] does.
Please explain only that line in plain English.
Don't give me more code — just explain.
```

### "My code looks exactly like the example but it doesn't work."

Teach the student to use this:

```
My code looks the same as the example but it doesn't work.
Here is my code: [paste]
Here is the example: [paste]
Can you spot the difference? Don't fix it — just point to the line.
```

### "I finished the exercise early. What do I do?"

Post this on the board or tell them:

```
Ask the AI:
"I finished [exercise name] early. 
I used [X, Y, Z concepts].
What is one way I could make this more accessible, 
more responsive, or more semantic? 
Give me a challenge, not the solution."
```

---

## Part 8 — Module 1 Full Day Script (Detailed Example)

This is a complete walkthrough of Day 1 as a reference.

### [00:00–00:05] Warm-Up

Ask the class (no computers, just discussion):
- "What is a website made of? Take a guess."
- Accept all answers. Write them on the board.
- Reveal: Structure (HTML), Appearance (CSS), Behaviour (JavaScript)

### [00:05–00:15] Concept Introduction — What is HTML?

**YOU explain first** (do not use AI yet):
> "HTML stands for HyperText Markup Language.
> Think of it as labels. If I hand you a folder and write 'IMPORTANT DOCUMENTS'
> on the tab — that label describes what's inside. HTML does the same thing
> for content on a webpage. You write `<h1>` and the browser reads that label
> and knows: this is the most important heading on the page."

**Then show the AI reinforcing it** — paste this into Antigravity on the projector:

```
A student just heard that HTML is "labels for content on a webpage."
Reinforce this idea with:
1. One more analogy (different from labels)
2. Three real examples of HTML elements and what they label
3. Do NOT show code yet
```

### [00:15–00:25] Live Demo — The Boilerplate

Paste into Antigravity:

```
Show me the HTML5 boilerplate with every single line commented.
Use a real example — title should be "John's Pizza Shop".
After showing it, ask the class: "Which line tells the browser what language this page is in?"
```

Type the result live in VS Code while students watch.
Open with Live Server. Students see a blank page — explain why (no content yet).

### [00:25–00:45] Exercise 1-A — Students Type Their Own Boilerplate

Tell students:
> "Close everything showing the boilerplate. Open a blank file.
> Type it from memory as best you can. Do NOT copy-paste.
> You will make mistakes — that's the point. When you're done, open it in Chrome."

**If a student gets stuck:** teach them to ask Antigravity:
```
I'm trying to type the HTML boilerplate from memory.
I'm stuck after <head>. What comes next?
Give me just the NEXT line, not the whole thing.
```

### [00:45–00:55] AI Code Review

Each student pastes their code into Antigravity with this prompt:
```
Review my HTML boilerplate attempt.
Code: [paste]
Tell me: what did I get right, and what one thing should I fix first?
Be encouraging — this is my first attempt.
```

### [00:55–01:10] Exercise 1-B — Add Content

Tell students:
> "Now add three things inside `<body>`:
> 1. A `<h1>` with your name
> 2. A `<p>` about where you're from
> 3. A `<p>` about why you want to build websites"

### [01:10–01:20] View Source Activity

> "Open Chrome. Press Ctrl+U. Find your h1 tag. Screenshot it. That's YOUR code running in a real browser."

### [01:20–01:35] Commit to GitHub

Walk through live:
```bash
git add .
git commit -m "add: day one - my first HTML page"
git push origin student/your-name
```

Then check GitHub.com together — "Your code is on the internet. You shipped."

### [01:35–01:40] Preview Module 2

```
Ask Antigravity to preview the next concept:

"Give me a 30-second teaser for semantic HTML.
Tell beginners why it matters more than they think.
Use one shocking statistic or fact if you know one.
No code — just intrigue."
```

---

## Part 9 — Antigravity Quick Reference Card

**Print this and keep it at your desk.**

| Situation | Prompt Starter |
|---|---|
| Introduce concept | "Explain [X] to complete beginners. Concept before code." |
| Student is stuck | "Give a hint, not the answer. Student tried: [X]" |
| Code review | "Review using the beginner rubric. Encourage first, then fix." |
| Generate exercise | "Create a [guided/debug] exercise for Module [X], 20 mins." |
| Error explanation | "Explain this error in plain English: [paste error]" |
| Live demo | "Demo [X] in under 30 lines, every line commented." |
| End of class | "Help write a git commit message for: [what was built]" |
| Student finished early | "Give [student] a harder challenge that extends [exercise]." |
| Parent concept review | "Quiz me on [concept] with 3 questions. Wait for my answers." |

---

## Appendix — Key Files Students Must Know

| File | What It Is | When to Use |
|---|---|---|
| `README.md` | Full course guide | First day and whenever lost |
| `curriculum/module-0X/lesson-notes.md` | Today's lesson content | Read BEFORE coding |
| `.claude/contexts/student.md` | AI session starter template | Paste at start of EVERY AI chat |
| `.claude/rules/html/html-standards.md` | HTML coding rules | Before submitting any HTML |
| `.claude/rules/css/css-standards.md` | CSS coding rules | Before submitting any CSS |
| `.ai/rules/styling.md` | Local AI styling rules | Standardizes code generated by Antigravity in your project |
| `.ai/contexts/project.md` | Local AI application context | Primes Antigravity with your page structure |
| `TEACHING-GUIDE.md` | This file — instructor only | Teaching days |

