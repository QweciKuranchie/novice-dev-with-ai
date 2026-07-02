# Module 9 — Prompt Engineering for Web Developers

**Duration:** 2 class sessions  
**Prerequisites:** Module 8 — Introduction to JavaScript milestone complete  
**Next module:** Module 10 — AI-Assisted Coding with Antigravity

---

## What Students Learn

- **Anatomy of a Prompt:** Context, Role, Task, Constraints, and Output Format.
- **AI as a Tutor:** How to prompt the AI to explain, teach, and hint rather than just generating solutions.
- **Prompting in Software Engineering (SWE):**
  - **Code Generation:** Generating small, focused HTML/CSS structures from description.
  - **Debugging:** Feeding error messages to the AI to get hints.
  - **Code Review:** Prompting the AI to grade code against standard rubrics.
  - **Refactoring:** Asking the AI to optimize or semanticize existing code.
- **Iterative Prompting:** Refining AI output step-by-step.
- **Common Pitfalls:** How to spot hallucinations, invalid tags, CSS bugs, and how to verify AI-generated code.

## Key Concept — The Perfect Prompt Formula

```
[Role]        → "Act as a patient senior frontend developer."
[Context]     → "I am a beginner HTML/CSS student working on a responsive navbar."
[Task]        → "Explain the difference between flex-grow and flex-shrink."
[Constraints] → "Do not show code yet. Use a simple bookshelf analogy."
[Format]      → "Structure your answer in three short bullet points."
```

By engineering your prompts using this structure, you get highly accurate, clean, and educational results rather than overwhelming walls of boilerplate code.

## Files in This Module

```
curriculum/module-09-prompt-eng/
├── README.md
└── lesson-notes.md
```

## Milestone

Submit a pull request demonstrating a structured prompt document (`prompts-log.md`) containing:
1. A structured prompt used to generate a semantic HTML layout.
2. A structured prompt used to request a code review.
3. A structured prompt used to resolve a CSS layout bug.
All prompts must clearly show the Role, Context, Task, Constraints, and Output Format.
