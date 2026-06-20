# Module 10 — AI-Assisted Coding with Antigravity

**Duration:** 2 class sessions  
**Prerequisites:** Module 9 — Prompt Engineering milestone complete  
**Next module:** Graduation / Advanced Portfolio Project

---

## What Students Learn

- **The `.ai` Configuration Folder:** Understanding what it is and how Antigravity reads it.
- **Initializing `.ai` Step-by-Step:** Creating directories and setting up core structures.
- **Writing AI Rules (`.ai/rules/`):** Setting strict guidelines for how the AI writes code (indentation, forbidden libraries, naming conventions).
- **Writing AI Contexts (`.ai/contexts/`):** Building templates that tell the AI about your architecture and file layout.
- **Writing AI Skills (`.ai/skills/`):** Creating functional instruction files to automate repetitive tasks (e.g., refactoring or formatting).
- **Collaborating with Antigravity:** Working in tandem to plan, check off, and verify code.

## Key Concept — The `.ai` Directory Architecture

When Antigravity opens a project, it looks for the `.ai` folder in the root to customize the assistant's behavior locally:

```
my-project/
├── .ai/
│   ├── rules/          ← Defines coding style, accessibility standards, etc.
│   │   └── styling.md
│   ├── contexts/       ← Templates used to load project context and files.
│   │   └── app-state.md
│   └── skills/         ← Automates specific tasks or runs predefined checklists.
│       └── linting.md
├── index.html
└── style.css
```

By defining these files, you customize the AI to understand your exact codebase patterns, eliminating generic/useless answers.

## Files in This Module

```
curriculum/module-10-ai-assisted-coding/
├── README.md
└── lesson-notes.md
```

## Milestone

Submit a pull request where you have:
1. Created a new web project folder.
2. Initialized a `.ai` folder inside it.
3. Created a rule file (`rules/css-rules.md`) that enforces using rem sizes and CSS variables, and a context file (`contexts/project.md`) detailing the project goals.
4. Used Antigravity to build an interactive modal component based on these rules.
5. Included a `walkthrough-notes.md` file listing your files and showing how Antigravity successfully respected the rules.
