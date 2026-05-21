# Contributing to novice-dev-with-ai

> **Who this is for:** Students submitting assignments and projects for instructor review.
> Every assignment in this course is submitted as a **Pull Request (PR)** on GitHub.
> This file explains exactly how to do that, step by step.

---

## How Assignment Submission Works

```
You write code                    Instructor reviews
on your branch    →  Pull Request →  and leaves comments
                                       ↓
                               You fix and update
                               (same PR, just push again)
                                       ↓
                               Instructor approves ✅
                               Milestone confirmed
```

There is no email. There is no file upload. There is no WhatsApp photo of your screen.
**All work is submitted through GitHub Pull Requests.** This is how real developers work.

> 💡 **Visual Learner?** If you are using GitHub Desktop instead of the terminal, read our [**GitHub Desktop Guide for Beginners**](./GITHUB-DESKTOP-GUIDE.md) for a point-and-click tutorial for these exact steps.

---

## Step-by-Step: Submitting an Assignment

### Step 1 — Make Sure Your Code Is Committed and Pushed

Before opening a PR, your latest code must be on GitHub:

```bash
# Check the status of your files
git status

# Stage all changes
git add .

# Commit with a descriptive message
git commit -m "add: [Day X / Exercise name] — brief description"

# Push to your branch
git push origin student/your-name
```

**Verify it uploaded:** Go to `https://github.com/YOUR-USERNAME/novice-dev-with-ai`
Click the branch dropdown and select `student/your-name`. Your files should be there.

---

### Step 2 — Open a Pull Request

1. Go to your fork on GitHub:
   `https://github.com/YOUR-USERNAME/novice-dev-with-ai`

2. GitHub shows a yellow banner: **"student/your-name had recent pushes"**
   Click the green **"Compare & pull request"** button.

   > If the banner is gone: click **"Pull requests"** tab → **"New pull request"**

3. Set the PR target correctly:

   ```
   base repository:  mhiskall282/novice-dev-with-ai    branch: main
   head repository:  YOUR-USERNAME/novice-dev-with-ai  branch: student/your-name
   ```

   > This means: "I want to send my work to the instructor's repo for review."

4. Write your PR title:

   ```
   [Your Full Name] — Day [X] — [What You Built]
   ```

   Examples:
   ```
   Amara Mensah — Day 2 — HTML About Page
   Kofi Boateng — Day 3 — Semantic HTML + CSS
   John Doe — Day 4 — Final Personal Page
   ```

5. Fill in the PR description (required — do not leave it blank):

---

### Step 3 — Write Your PR Description

Copy and fill in this template in the description box:

```markdown
## What I Built
[Describe in 2–3 sentences what your page/exercise contains]

## What I Learned
[Name 2–3 specific things you understood better after doing this exercise]

## What Was Hard
[What concept or part of the code gave you trouble?]

## AI Prompts I Used
[Paste 1–2 prompts you gave to Antigravity that helped you — be specific]

## Self-Check (tick each one)
- [ ] HTML validator passes (zero errors): https://validator.w3.org/
- [ ] CSS validator passes (zero errors): https://jigsaw.w3.org/css-validator/
- [ ] All images have alt text
- [ ] All form inputs have labels (if I have a form)
- [ ] Page opens correctly in Chrome
- [ ] Responsive — checked at 375px in DevTools
- [ ] CSS is in an external file (no inline styles)
- [ ] Committed and pushed to my branch

## Questions for the Instructor
[Any specific things you want feedback on, or concepts you're unsure about]
```

6. Click **"Create Pull Request"** ✅

---

### Step 4 — Wait for Review

The instructor will:
- Review your code directly on GitHub
- Leave **inline comments** on specific lines of your HTML/CSS
- Leave a **general review comment** with your rubric score
- Either **Request Changes** or **Approve**

You will get a GitHub notification (and email) when the review is posted.

---

### Step 5 — Respond to Feedback

If the instructor **requests changes:**

1. Read each comment carefully
2. Open the file in VS Code and make the fixes
3. Save, commit, and push:

```bash
git add .
git commit -m "fix: [describe what you fixed based on review]"
git push origin student/your-name
```

Your push automatically updates the **same Pull Request** — you do not open a new one.

4. Go to the PR on GitHub and reply to each comment:
   - Click the comment → **"Resolve conversation"** if you fixed it
   - Or reply with a question if you don't understand the feedback

5. The instructor re-reviews and approves when the fixes are correct.

---

### Step 6 — Milestone Confirmed

When the instructor approves your PR, your milestone for that day is complete.
The PR will be merged into the course repo — your code becomes part of the classroom.

---

## PR Rules

| Rule | Why |
|---|---|
| One PR per day/assignment | Keeps reviews organized |
| Title must include your full name | Instructor teaches multiple students |
| Description template is required | Self-reflection is part of the learning |
| All self-checks must be ticked | Check your own work before asking someone else |
| Never push directly to `main` | `main` is protected — you cannot merge your own work |
| Never edit another student's folder | Work only in `student-projects/your-name/` |
| Keep all work on `student/your-name` branch | One branch per student for the whole course |

---

## Example: A Complete Good PR

**Title:**
```
Amara Mensah — Day 3 — Semantic HTML + CSS Introduction
```

**Description:**
```markdown
## What I Built
A fully semantic 4-region personal page using header, nav, main, and footer.
I also added my first external CSS file with a full reset and basic typography.

## What I Learned
- The difference between <section> and <article>
- Why box-sizing: border-box matters (padding no longer breaks width)
- How to use rem instead of px for font sizes

## What Was Hard
I kept forgetting to link the CSS file and wondering why nothing was styled.
I learned to always check the <head> section first.

## AI Prompts I Used
"I have a blog post on my page. Should I use <section> or <article>?
 Explain the difference before showing me which one to use."

## Self-Check
- [x] HTML validator passes
- [x] CSS validator passes
- [x] All images have alt text
- [x] Page opens in Chrome
- [x] Responsive at 375px
- [x] External CSS only

## Questions for the Instructor
Am I supposed to put my <nav> inside <header> or outside it?
I saw both online and I'm not sure which is correct.
```

---

## Useful GitHub Links

| Action | Link |
|---|---|
| Your fork | `https://github.com/YOUR-USERNAME/novice-dev-with-ai` |
| Instructor repo | `https://github.com/mhiskall282/novice-dev-with-ai` |
| Your pull requests | `https://github.com/mhiskall282/novice-dev-with-ai/pulls` |
| Open a new PR | `https://github.com/mhiskall282/novice-dev-with-ai/compare` |

---

## Common Mistakes When Opening PRs

| Mistake | How to Spot It | How to Fix It |
|---|---|---|
| PR goes to your own fork's main | Base repo shows YOUR username | Change base to `mhiskall282/novice-dev-with-ai` |
| Description is empty | Instructor asks for it | Always fill in the template |
| Wrong branch selected | PR shows files from other students | Select `student/your-name` as the compare branch |
| Code not pushed before PR | PR shows 0 files changed | Run `git push origin student/your-name` first |
| New PR opened for every fix | Multiple open PRs with same title | Push fixes to the same branch — PR auto-updates |

---

## Git Commit Message Format (Quick Reference)

```bash
git commit -m "add: day 2 - about page with heading and paragraphs"
git commit -m "add: day 3 - semantic HTML structure complete"
git commit -m "fix: missing alt text on profile image"
git commit -m "fix: nav links not white on hover"
git commit -m "update: responsive styles for 375px mobile"
git commit -m "learn: flexbox justify-content practice"
```

---

## Getting Help With Git or GitHub

If you are confused about any step in this process, ask in the Zoom session
or paste this into Antigravity:

```
I am trying to submit my Day [X] assignment as a Pull Request.
I'm stuck at: [describe exactly where you are]
What I've done so far: [list steps you completed]
What I see on screen: [describe or paste the error/page]
Walk me through the next step only.
```
