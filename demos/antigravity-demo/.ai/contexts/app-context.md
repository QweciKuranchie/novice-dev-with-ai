# Antigravity App Context: Profile Dashboard

This document details the theme, page structure, and mock details for the Profile Dashboard project.

---

## 1. Project Goal
Build a clean, modern user profile page displaying user statistics (followers, project counts, contributions) and a primary "Follow" button.

---

## 2. Design System Tokens
Define CSS variables in `:root` matching these values:
- Background Dark: `#0d0e15`
- Card Color: `#161722`
- Border Color: `#232537`
- Accent (Neon Cyan): `#00f5ff`
- Accent Hover: `#00c2cc`
- Text Highlight: `#ffffff`
- Text Muted: `#8c92b3`

---

## 3. Component Details
1. **Header Navigation:** Brand logo link on left, navigation links on right.
2. **Profile Card:**
   - Centered container with a modern box-shadow.
   - User profile image with descriptive alt tags.
   - User display name (`<h2>`) and bio description paragraph.
   - Stats display row containing three metrics: Projects, Followers, Following.
   - Primary Call-to-Action button ("Follow").
3. **Footer:** Single center paragraph with copyright text.
