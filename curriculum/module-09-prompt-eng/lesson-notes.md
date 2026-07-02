# Module 9 — Prompt Engineering: Lesson Notes

**Prerequisites:** Module 8 milestone complete  
**Read before:** Opening VS Code today  

---

## Concept 1 — What is Prompt Engineering?

Prompt Engineering is the practice of designing, writing, and refining inputs (prompts) to get the most accurate, high-quality, and useful responses from Generative AI models.

For a software developer, prompting is not just "chatting" with an AI; it is an engineering discipline. How you structure your instructions directly affects the quality of the code, tests, and explanations you receive. 

### The AI Developer Cycle:
```
Traditional:  Idea ──> Manual Coding ──> Manual Debugging ──> Ship
AI-Assisted:  Idea ──> Prompt Design ──> AI Output ──> Code Review/Verify ──> Refine/Ship
```

As an AI-assisted developer, your job changes from being a pure "typewriter" to being a **designer, reviewer, and integrator**. If you write poor prompts, you spend more time fixing bad AI code than you would have spent writing it yourself.

---

## Concept 2 — The 5-Part Anatomy of a Perfect Prompt

To get predictable, high-quality code or explanations from an AI, you should structure your prompt using the **5-Part Formula**:

1. **Role (Who the AI is):** Tell the AI what persona to adopt (e.g., "Act as a senior frontend engineer and accessibility specialist").
2. **Context (The background):** Provide the environment details (e.g., "I am building a static HTML site. I am a beginner student using vanilla CSS. I have a main content area and a sidebar").
3. **Task (What to do):** The core instruction (e.g., "Create a semantic footer element").
4. **Constraints (The boundaries):** What the AI *must not* do (e.g., "Do not use Javascript. Keep the code under 15 lines. Do not use Tailwind or external libraries").
5. **Output Format (How it looks):** The shape of the response (e.g., "Provide the HTML code first, followed by a list of 3 bullet points explaining the accessibility choices").

### Anatomy Example:
> *"Act as an accessibility expert [Role]. I am building an HTML form for a newsletter [Context]. Write the HTML for an email input field and submit button [Task]. Do not use any divs, inline styles, or external libraries [Constraints]. Structure the response with the raw HTML block first, and then a brief list of the labels and attributes used [Format]."*

---

## Concept 3 — Prompt Engineering in Software Engineering (SWE)

In professional software development, prompt engineering is applied in four main areas:

### 1. Code Generation (Small & Focused)
Instead of asking the AI to "Write a homepage," break it down into micro-tasks. Ask for a specific card, navbar, or helper function.

*   **Bad Prompt:** *"Write a product card for me."*
*   **Good Prompt:** *"Act as a UI developer. Write the HTML and CSS for a single responsive product card. The card needs an image, title, price, and 'Add to Cart' button. Use Flexbox for layout. Keep CSS in a separate code block. Do not use external libraries. Output only the HTML and CSS."*

### 2. Code Explanation
When you encounter code you don't understand, the AI is your tutor.

*   **Prompt Example:** *"Act as a web development tutor. Explain what the following CSS block does, line-by-line. Focus on explaining how `flex-wrap: wrap` affects the items when the screen shrinks. Use a real-world analogy. Here is the code: [paste code]."*

### 3. Code Review & Standards
Ask the AI to check your work against standards before committing.

*   **Prompt Example:** *"Act as a senior code reviewer. Review my HTML file against the standard W3C semantic guidelines. Check for accessibility issues like missing alt tags or bad heading order. Tell me what I did well, and list up to 3 specific improvements I should make. Do not rewrite my code. Here is my file: [paste HTML]."*

### 4. Interactive Debugging
When code is broken, use the AI as a guide to help you find the problem rather than giving you the answer.

*   **Prompt Example:** *"Act as a debugger. My layout is overlapping on mobile views, but looks fine on desktop. I want to learn how to fix this myself. Look at my CSS below, point to the line causing the issue, and give me a hint about media queries. Do not give me the corrected code. Here is my CSS: [paste CSS]."*

---

## Concept 4 — How to Write Prompts that Get Results

To write effective prompts, follow these rules:

1.  **Define the boundaries:** AIs love to show off. If you don't tell them to "Do not use libraries," they might write React or Tailwind. Use strict negative constraints (e.g., "Do not use inline styles," "No JavaScript").
2.  **Iterate on the output:** Treat the chat as a conversation. If the AI's first output is close but not perfect, prompt again: *"That is good, but change the gap between the cards to 1.5rem and make the background color transparent."*
3.  **Provide the source code:** Never ask the AI about your code without pasting it. The AI cannot read your mind. Always paste the relevant HTML, CSS, or Javascript blocks.
4.  **Translate error messages:** If you get an error in Chrome DevTools, copy the *exact* error text and paste it into the AI with your code.

---

## Exercises

### Exercise 9-A — The Anatomy Breakdown
Write a prompt to generate a **3-column pricing section** using the 5-Part Prompt Formula. Label each part of your prompt explicitly:
*   `[Role]`: ...
*   `[Context]`: ...
*   `[Task]`: ...
*   `[Constraints]`: ...
*   `[Format]`: ...
Run this prompt in your AI assistant and note the quality of the result. Save your written prompt and the AI output in a file called `pricing-prompt.txt` inside your folder.

### Exercise 9-B — The Debug Buddy Prompt
Find a bug in your project or create a temporary CSS error (e.g., set `display: flex` and `float: left` together).
Write a structured prompt asking the AI to act as a **Debugging Tutor**. Instruct the AI to analyze your broken code and give you **three hints** rather than the solution. Paste the prompt and the AI's hints in a file called `debug-prompt.md`.

### Exercise 9-C — Generating Code for your Landing Page
Use a structured prompt to generate a **Testimonial Section** for your personal landing page. 
*   Specify constraints: Semantic tags (`<section>`, `<blockquote class="testimonial">`), flexbox alignment, card structure, and accessible alt-text.
*   Review the code generated by the AI. Add it manually to your project.

### Exercise 9-D — Refactoring Request
Paste one of your older HTML files (from Module 1 or 2) into the AI. Prompt it:
*"Act as a semantic HTML refactoring tool. Review this code and rewrite it using HTML5 semantic elements (header, nav, main, footer, section) where appropriate. Do not change any class names. Add inline comments explaining why each change was made."*
Review the changes. Did the AI explain them clearly?

---

## Milestone Assessment

To pass Module 9, create a document named `prompts-log.md` inside your student project folder. It must contain:
1.  The structured prompt from **Exercise 9-A** and your analysis of the code quality.
2.  The prompt and hints from **Exercise 9-B**.
3.  A short paragraph reflecting on the difference between asking *"Write a form"* vs. using the 5-part prompt formula.
4.  Show your PR link containing the Testimonial Section created in **Exercise 9-C**.
