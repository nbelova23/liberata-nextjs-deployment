# Git Basics & GitHub Workflow

> **Completion Time:** 45 minutes

Master the fundamentals of version control with Git and GitHub. This exercise will teach you how to create repositories, make commits, push code, and create pull requests - skills essential for every developer.

## 🎯 What You'll Learn

By the end of this exercise, you'll be able to:
- Clone repositories from GitHub
- Create and switch between branches
- Make commits with meaningful messages
- Push changes to remote repositories  
- Create and manage pull requests
- Understand basic Git workflow

## 📖 Background

**Git** is like a time machine for your code. It tracks every change you make, lets you go back to previous versions, and helps teams work together without conflicts.

**GitHub** is like a social media platform for code. It hosts your Git repositories online and provides tools for collaboration.

**Think of it like Google Docs for code:** multiple people can work on the same project, see each other's changes, and merge them together safely.

## 🚀 Quick Start (10 Minutes)

### Step 1: Set Up Git (One-time setup)

```bash
# Tell Git who you are
git config --global user.name "Your Name"
git config --global user.email "your-email@duke.edu"

# Verify your setup
git config --list
```

### Step 2: Clone the Repository

```bash
# Replace YOUR_USERNAME with your GitHub username
git clone https://github.com/YOUR_USERNAME/liberata-onboarding.git

# Navigate into the project
cd liberata-onboarding
```

### Step 3: Create Your Branch

```bash
# Create and switch to a new branch
git checkout -b feature/git-basics-YOUR_NAME

# Verify you're on your branch
git branch
```

### Step 4: Make Changes

Create a new file with your information:

```bash
# Create a new file
echo "# My Git Journey

Name: Your Name
Date: $(date)
Favorite programming language: JavaScript
Fun fact: Write something interesting about yourself!" > my-git-story.md
```

### Step 5: Commit Your Changes

```bash
# Add the file to staging
git add my-git-story.md

# Make a commit with a descriptive message
git commit -m "feat: add my personal Git story"

# Push to GitHub
git push origin feature/git-basics-YOUR_NAME
```

### Step 6: Create a Pull Request

1. Go to your repository on GitHub
2. Click "Compare & pull request" 
3. Write a description of your changes
4. Click "Create pull request"

Congratulations! You've completed the basic Git workflow! 🎉

## 📚 Key Concepts Explained

### Branches
**What:** A parallel version of your code  
**Why:** Work on features without breaking the main code  
**Analogy:** Like creating a draft copy of an essay before submitting the final version

### Commits  
**What:** A snapshot of your code at a specific point in time  
**Why:** Track changes and create a history  
**Analogy:** Like saving different versions of a document: "Essay_v1.doc", "Essay_v2.doc", etc.

### Pull Requests (PRs)
**What:** A request to merge your changes into the main codebase  
**Why:** Review code before it goes live  
**Analogy:** Like asking a friend to proofread your essay before submitting

### Repository (Repo)
**What:** A folder containing your project and its Git history  
**Why:** Organize and track all project files  
**Analogy:** Like a project folder that remembers every change you've ever made

## 🎬 YouTube Tutorials

Here are some excellent beginner-friendly videos to help you master Git and GitHub:

### Git Fundamentals
- **[Git Tutorial for Beginners: Learn Git in 1 Hour](https://www.youtube.com/watch?v=8JJ101D3knE)** by Programming with Mosh (1 hour)
  - Perfect introduction covering all basics
  - Clear explanations with practical examples

- **[Git & GitHub Crash Course For Beginners](https://www.youtube.com/watch?v=SWYqp7iY_Tc)** by Traversy Media (32 minutes)
  - Quick but comprehensive overview
  - Hands-on approach with real examples

### GitHub Workflow
- **[GitHub Tutorial - Beginner's Training Guide](https://www.youtube.com/watch?v=iv8rSLsi1xo)** by Kevin Stratvert (20 minutes)
  - Focuses specifically on GitHub interface
  - Great for understanding pull requests and collaboration

- **[Git and GitHub for Beginners - Crash Course](https://www.youtube.com/watch?v=RGOj5yH7evk)** by freeCodeCamp (1.25 hours)
  - Comprehensive course covering everything you need
  - Includes advanced topics like merge conflicts

### Quick Reference
- **[Learn Git In 15 Minutes](https://www.youtube.com/watch?v=USjZcfj8yxE)** by Colt Steele (15 minutes) ⭐ **RECOMMENDED**
  - Perfect for quick review or refresher
  - Covers essential commands only
  - Excellent starting point for beginners

**💡 Tip:** Watch the shorter videos first to get oriented, then dive into the longer comprehensive tutorials for deeper understanding.

## 🛠️ Essential Git Commands

```bash
# Check repository status
git status

# See your commit history
git log --oneline

# Switch to a different branch
git checkout branch-name

# Create a new branch and switch to it
git checkout -b new-branch-name

# Add all changed files to staging
git add .

# Make a commit
git commit -m "your commit message"

# Push changes to remote repository
git push origin branch-name

# Pull latest changes from remote
git pull origin main

# Merge a branch into current branch
git merge branch-name
```

## 🔍 Common Problems & Solutions

**Problem:** "Permission denied" when pushing  
**Solution:** Make sure you've set up SSH keys or use HTTPS with your GitHub credentials

**Problem:** "Your branch is behind origin/main"  
**Solution:** Run `git pull origin main` to get the latest changes

**Problem:** Forgot to create a branch  
**Solution:** Create a branch now: `git checkout -b your-branch-name`

**Problem:** Want to undo last commit  
**Solution:** `git reset --soft HEAD~1` (keeps your changes)

**Problem:** Accidentally committed to wrong branch  
**Solution:** Use `git cherry-pick` or `git reset` and recreate on correct branch

## ✅ Success Criteria

- [ ] Successfully cloned the repository
- [ ] Created a personal branch with your name
- [ ] Made at least 3 meaningful commits with proper commit messages
- [ ] Pushed your branch to GitHub
- [ ] Created a pull request with a good description
- [ ] Can explain what Git, GitHub, branches, and commits are
- [ ] Comfortable with basic Git commands

## 🚀 Bonus Challenges

1. **Explore History:** Use `git log` to explore the repository's commit history
2. **Branch Management:** Create multiple branches and practice switching between them  
3. **Collaboration Simulation:** Review someone else's pull request
4. **Merge Conflicts:** Intentionally create and resolve a merge conflict (advanced)
5. **Git Aliases:** Set up shortcuts for common Git commands

## 🎉 What's Next?

Once you've mastered Git basics, you'll move on to **TypeScript fundamentals** in the next exercise. Every future exercise will use Git for version control, so these skills are essential!

## 💡 Pro Tips

- **Write descriptive commit messages:** "Fix login bug" is better than "fixed stuff"
- **Commit often:** Small, frequent commits are easier to understand and review
- **Use branches:** Never work directly on the main branch
- **Pull before you push:** Always get latest changes before pushing your own
- **Review your changes:** Use `git status` and `git diff` before committing 