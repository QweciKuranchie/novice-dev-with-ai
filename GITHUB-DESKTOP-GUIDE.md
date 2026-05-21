# 🖥️ GitHub Desktop Guide for Beginners

If you prefer a visual interface instead of typing Git commands in the terminal, **GitHub Desktop** is the perfect tool. This guide will walk you through the entire process step-by-step.

---

## Step 1: Install and Sign In
1. Download GitHub Desktop from [https://desktop.github.com/](https://desktop.github.com/).
2. Install it and open the application.
3. Click **Sign in to GitHub.com** and follow the browser prompts to link your account.

---

## Step 2: Fork the Main Repository
Before downloading the code, you need your own copy (a "fork") on GitHub.

1. Go to the course repository: `https://github.com/mhiskall282/novice-dev-with-ai`
2. Click the **Fork** button (top right of the page).
3. GitHub creates a copy under your account (`https://github.com/YOUR-USERNAME/novice-dev-with-ai`).

---

## Step 3: Clone to Your PC Using GitHub Desktop
Now, let's download your fork to your computer.

1. Go to your newly forked repository page on GitHub.com.
2. Click the green **Code** button.
3. Select **Open with GitHub Desktop**.
4. GitHub Desktop will open and prompt you to clone the repository.
   - Choose a "Local Path" on your computer (e.g., `Documents\GitHub\novice-dev-with-ai`).
5. Click **Clone**.

---

## Step 4: Create Your Personal Branch
You must do all your work on your own branch, not `main`.

1. In GitHub Desktop, look at the top menu bar. Click on **Current Branch** (it currently says `main`).
2. Click the **New Branch** button.
3. Name it `student/your-name` (e.g., `student/amara-mensah`).
4. Click **Create Branch**.
5. Click **Publish branch** (the blue button) so GitHub knows about this new branch.

---

## Step 5: Do Your Assignment
1. Open the code in VS Code. (In GitHub Desktop, go to the top menu: **Repository > Open in Visual Studio Code**, or use the shortcut `Ctrl+Shift+A`).
2. Create your folder `student-projects/your-name/`.
3. Create your files (`index.html`, `style.css`, etc.) inside your folder.
4. Write your code and **Save** your files (`Ctrl+S`).

---

## Step 6: Commit and Push Your Changes
When you finish an exercise, you need to save your progress to GitHub.

1. Go back to GitHub Desktop.
2. On the left panel, you will see a list of all the files you added or changed. Make sure the boxes next to them are checked.
3. At the bottom left, there is a commit box.
   - **Summary (required):** Type a short description (e.g., `add: day 2 about page`).
   - **Description:** (Optional) Add more details if you want.
4. Click the blue **Commit to student/your-name** button.
5. Finally, click the **Push origin** button at the top of the screen. This uploads your changes to GitHub!

---

## Step 7: Create a Pull Request (PR)
When you've finished a milestone and want the instructor to review it, you open a Pull Request.

1. Go to your fork on GitHub.com (`https://github.com/YOUR-USERNAME/novice-dev-with-ai`).
2. You will see a yellow banner that says **"student/your-name had recent pushes"**.
3. Click the green **Compare & pull request** button.
4. Double-check the target is correct:
   - **base repository:** `mhiskall282/novice-dev-with-ai` | **base:** `main`
   - **head repository:** `YOUR-USERNAME/novice-dev-with-ai` | **compare:** `student/your-name`
5. Write your PR Title:
   - Format: `[Your Full Name] — Day [X] — [What You Built]`
   - Example: `Amara Mensah — Day 2 — About Page`
6. Fill in the PR description template (What I built, What I learned, Self-Check, etc.). **Do not leave it blank.**
7. Click the green **Create Pull Request** button.

✅ You're done! The instructor will review your code and leave comments. If you need to make changes, just go back to VS Code, edit the code, save, and use GitHub Desktop to **Commit** and **Push** again. The PR will update automatically!
