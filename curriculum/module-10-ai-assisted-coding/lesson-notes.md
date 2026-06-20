# Module 10 — AI-Assisted Coding with Antigravity: Lesson Notes

**Prerequisites:** Module 9 milestone complete  
**Read before:** Opening VS Code today  

---

## Concept 1 — What is the `.ai` Configuration Folder?

When you work on a project with Antigravity IDE, the AI is incredibly smart, but it doesn't automatically know your project's personal conventions, styling rules, or file structure unless you tell it.

The `.ai` folder is a special directory in the root of your workspace that acts as the **AI's project instruction manual**. By defining specific files inside `.ai/`, you teach Antigravity exactly how to build code for your project.

### Why do we need it?
*   **Prevent Hallucinations:** You tell the AI what files exist so it doesn't suggest importing nonexistent files.
*   **Enforce Standards:** You tell the AI to use specific formatting (e.g. 2 spaces, double quotes, no inline styles), and it will automatically apply them.
*   **Automate Workflows:** You can write custom "skills" that let the AI execute complex checklists (like performing an accessibility review) with a single command.

---

## Concept 2 — Initializing the `.ai` Folder (Step-by-Step)

To set up a project so that Antigravity picks up custom settings, you must create the folder structure and configuration.

### Step 1: Create the Directories
In your terminal, navigate to your project root and run:

```bash
mkdir -p .ai/rules .ai/contexts .ai/skills
```

Or right-click in the sidebar of VS Code / Antigravity and create:
*   `.ai/` (folder)
    *   `rules/` (subfolder)
    *   `contexts/` (subfolder)
    *   `skills/` (subfolder)

### Step 2: Create a General Rule
Create a file named `.ai/rules/general.md`. This is where you declare general rules.

```markdown
# General Coding Rules

- Indentation: Always use 2 spaces.
- Language: HTML5 and Vanilla CSS. No frameworks.
- Quotes: Use double quotes in HTML, single quotes in CSS.
- Accessibility: Every image must have an alt tag. Every form input must have a label.
- File Names: Lowercase with hyphens (e.g., about-me.html).
```

Antigravity scans this file every time you prompt it, ensuring all generated code follows these style guidelines!

---

## Concept 3 — Writing Custom Rules (`rules/`)

Rule files are written in Markdown. You can create multiple rule files targeting different areas of your code (e.g. `css-rules.md`, `javascript-rules.md`, `git-rules.md`).

Here is an example `.ai/rules/css-rules.md` file:

```markdown
# CSS Coding Standards

- No Inline Styles: Never use the `style` attribute in HTML.
- Selectors: Use classes for styling. Never style IDs (`#header`).
- Font Sizes: Always use `rem` units for font sizes. Never use `px` for text.
- Box Model: Every container must use `box-sizing: border-box`.
- Layout: Use Flexbox for 1D alignments and CSS Grid for 2D page layouts.
- Variables: Maintain colors using CSS variables defined in `:root`.
```

Every time Antigravity writes CSS for you, it will read this file and ensure it conforms to these guidelines.

---

## Concept 4 — Writing Custom Contexts (`contexts/`)

Context files tell the AI about your application's architecture, state management, routes, or design layout so that it has the necessary background information.

For example, create `.ai/contexts/landing-page.md`:

```markdown
# Landing Page Context

- Technical Stack: Vanilla HTML5 and CSS3.
- Page Sections:
  1. Header with navigation logo on left, navigation links on right.
  2. Hero section with headline, short text, and a primary call-to-action button.
  3. Features section (3-card grid).
  4. Testimonials section (2-column layout).
  5. Contact form (inputs: Name, Email, Message).
  6. Footer (links, copyright).
- Theme Colors:
  - Primary: `#2563eb` (Blue)
  - Secondary: `#1e293b` (Slate)
  - Background: `#f8fafc` (Light Slate)
```

Now, when you ask Antigravity to build a new section, you can start your prompt like this:
> *"Using the context in `.ai/contexts/landing-page.md`, write the HTML and CSS for the Features section."*

---

## Concept 5 — Writing Custom Skills (`skills/`)

Skills are specialized templates or playbooks that tell the AI how to execute complex, multi-step actions. 

For example, create `.ai/skills/accessibility-audit.md`:

```markdown
# Accessibility Audit Skill

When asked to run an accessibility audit, perform these checks:
1. Scan the HTML for any missing `alt` attributes on `<img>` tags.
2. Check that all form elements have a matching `<label>` with a `for` attribute.
3. Check the heading order (ensure h1 is not followed immediately by h3).
4. Verify that contrast ratios meet WCAG AA (4.5:1).
5. Output a table with the fields: File, Line, Issue, and Suggested Fix.
```

Now you can prompt Antigravity:
> *"Run the Accessibility Audit Skill on my index.html page."*
The AI will execute the checklist exactly as defined in your skill file!

---

## Exercises

### Exercise 10-A — Initialize and Configure Rules
1. Create a folder called `ai-test-project` inside your `student-projects/your-name/` directory.
2. Inside `ai-test-project`, initialize the `.ai` folder structure (`rules/`, `contexts/`, `skills/`).
3. Create `.ai/rules/styling.md`. Add rules enforcing:
   *   CSS variable-only colors
   *   Enforce a CSS Reset block
   *   No inline CSS styles
   *   2-space indentation

### Exercise 10-B — Add Project Context
1. In `ai-test-project/.ai/contexts/project.md`, write a summary of a **Weather Dashboard** project.
2. Include details about the layout (search bar, current weather card, 5-day forecast grid) and color theme.
3. Open a chat with Antigravity and ask: *"Based on the project context in `.ai/contexts/project.md`, write the HTML structure for the dashboard."*
4. Confirm if the AI used the correct structure and grid layout.

### Exercise 10-C — Teach a Custom Skill
1. In `ai-test-project/.ai/skills/bem-validator.md`, create a skill that instructs the AI to check if class names follow BEM naming conventions (`block__element--modifier`).
2. Have it output a list of violating classes and suggestions.
3. Create `index.html` with several classes (some matching BEM, some using camelCase or camel_case like `productCard` or `nav_link`).
4. Ask Antigravity to run the `bem-validator` skill on `index.html` and verify the output.

### Exercise 10-D — Build an AI-Assisted Component
1. Create a CSS file `style.css` in `ai-test-project/`.
2. Ask Antigravity: *"Using the styling rules in `.ai/rules/styling.md` and the project context, write the CSS to style the weather dashboard HTML."*
3. Check the output: Did it use CSS variables? Did it avoid px for fonts? Is there inline styling?
4. Save the code, run Live Server, and visually verify the dashboard layout.

---

## Milestone Assessment

Submit a Pull Request with the `ai-test-project` folder completed:
1. A fully initiated `.ai` folder containing:
   *   `.ai/rules/styling.md`
   *   `.ai/contexts/project.md`
   *   `.ai/skills/bem-validator.md`
2. Working `index.html` and `style.css` for the weather dashboard, styled completely by Antigravity under the constraints of your custom rules.
3. A screen capture or description illustrating that the generated code contains no rule violations (e.g. no styling IDs, no px text sizes, no inline CSS).
