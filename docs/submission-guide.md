# Submission Guide

This guide explains how to submit your completed exercises for review and tracking. We use a structured approach that keeps the original repository clean while making it easy for instructors to find and review your work.

## 🎯 Submission Overview

**The Goal:** Submit your work so instructors can easily find and review it without you modifying the original repository.

**The Method:** You'll create your own fork, work in organized branches, and submit links to your completed work.

## 📋 Submission Process

### Step 1: Fork the Repository (One Time Setup)

1. **Go to the original repository within your organization:**
   ```
   https://github.com/YOUR-ORG/liberata-onboarding
   ```

2. **Click "Fork" in the top right**
   - This creates your own copy of the repository within the organization
   - You can modify this copy without affecting the original
   - The fork will inherit the organization's privacy settings

3. **Clone YOUR fork to your computer:**
   ```bash
   git clone git@github.com:YOUR-ORG/YOUR-USERNAME-liberata-onboarding.git
   cd YOUR-USERNAME-liberata-onboarding
   ```

4. **Add the original repository as "upstream":**
   ```bash
   git remote add upstream git@github.com:YOUR-ORG/liberata-onboarding.git
   ```

### Step 2: Work on Each Exercise

For each exercise, follow this pattern:

1. **Create a new branch for the exercise:**
   ```bash
   git checkout main
   git pull upstream main  # Get latest changes
   git checkout -b exercise/YOUR-USERNAME-01-git-basics
   ```

2. **Complete the exercise following its README**

3. **Commit your work with clear messages:**
   ```bash
   git add .
   git commit -m "feat(git-basics): complete profile creation and branching exercise

   - Created personal profile in profiles/YOUR-USERNAME.md
   - Practiced git workflow: branch, commit, push
   - Completed all tasks in exercise checklist"
   ```

4. **Push your branch to YOUR fork:**
   ```bash
   git push origin exercise/YOUR-USERNAME-01-git-basics
   ```

### Step 3: Submit Your Work

**Create a Pull Request with a specific title format:**

1. **Go to your fork on GitHub**
2. **Click "New Pull Request"**
3. **Set the base repository to the original:** `YOUR-ORG/liberata-onboarding`
4. **Set the compare branch to your exercise branch:** `exercise/YOUR-USERNAME-01-git-basics`
5. **Use this exact title format:**

```
[SUBMISSION] YOUR-USERNAME: Exercise 01 - Git Basics
```

**Title Examples:**
- `[SUBMISSION] john-doe: Exercise 01 - Git Basics`
- `[SUBMISSION] jane-smith: Exercise 02 - TypeScript`
- `[SUBMISSION] alex-wilson: Exercise 03 - React`

6. **Fill out the PR description with this template:**

```markdown
## Student Information
- **Name:** [Your Full Name]
- **Duke Email:** [your.email@duke.edu]
- **Exercise:** [01-git-basics]

## Completion Checklist
- [ ] All exercise tasks completed
- [ ] Code follows exercise requirements  
- [ ] Tests passing (if applicable)
- [ ] README instructions followed

## What I Learned
[Brief summary of what you learned in this exercise]

## Questions/Issues
[Any questions or problems you encountered]

## Additional Notes
[Any other comments or observations]
```

## 📁 Branch Naming Convention

Use this consistent naming pattern for all exercises:

```
exercise/YOUR-USERNAME-[EXERCISE-NUMBER]-[EXERCISE-NAME]
```

**Examples:**
- `exercise/john-doe-01-git-basics`
- `exercise/jane-smith-02-typescript`
- `exercise/alex-wilson-03-react`
- `exercise/sam-brown-04-nextjs`
- `exercise/taylor-green-05-edge-worker`
- `exercise/jordan-white-06-r2-storage`
- `exercise/casey-blue-07-supabase-rls`
- `exercise/riley-red-08-redis-streams`

## 🔍 What Instructors Will Review

### For Code Exercises (TypeScript, React, Next.js, etc.):
- **Functionality:** Does your code work as expected?
- **Implementation:** Did you follow the exercise requirements?
- **Code Quality:** Is your code readable and well-organized?
- **Tests:** Do the provided tests pass?

### For Conceptual Exercises (Git Basics):
- **Understanding:** Do you demonstrate understanding of the concepts?
- **Process:** Did you follow the Git workflow correctly?
- **Documentation:** Are your commit messages clear and descriptive?

### For Cloud Exercises (Edge Worker, R2, Supabase, Redis):
- **Deployment:** Does your solution work in the cloud environment?
- **Configuration:** Are your config files set up correctly?
- **Documentation:** Did you document any setup steps or issues?

## 📅 Submission Timeline

**Recommended Schedule:**
- **Week 1:** Git Basics + TypeScript
- **Week 2:** React + Next.js  
- **Week 3:** Edge Worker + R2 Storage
- **Week 4:** Supabase RLS + Redis Streams

**Submission Deadlines:**
- Submit each exercise within 1 week of starting it
- Final deadline: [TO BE SET BY INSTRUCTORS]

## ❓ Common Questions

### Q: What if I get stuck on an exercise?
**A:** Create an issue in the original repository with the "help-wanted" label, or ask in your submission PR comments. Include:
- Which exercise you're working on
- What you've tried
- The specific error or problem you're facing
- Your current branch/fork links

### Q: Can I submit partial work?
**A:** Yes! Submit what you have and note in your submission what's incomplete. Partial credit is better than no submission.

### Q: What if I want to improve my submission later?
**A:** You can continue working on the same branch and push updates. The PR will automatically update with your new commits. Add a comment to let instructors know you've made improvements.

### Q: Do I need to keep my fork public?
**A:** Since this is within a private GitHub organization, your fork will automatically inherit the organization's privacy settings. Instructors will have access to review your work through the organization.

### Q: What if I accidentally modify the main branch?
**A:** No problem! Create a new branch from main and copy your work there. Always work in feature branches, never directly on main.

## 🚨 Important Notes

### DO:
- ✅ Work in your own fork within the organization
- ✅ Use the branch naming convention
- ✅ Create PRs with the correct title format: `[SUBMISSION] username: Exercise XX - Name`
- ✅ Fill out the PR description template completely
- ✅ Ask questions if you're stuck

### DON'T:
- ❌ Modify the main branch directly
- ❌ Submit PRs without the `[SUBMISSION]` tag in the title
- ❌ Submit work without following the naming convention
- ❌ Wait until the last minute to ask for help

## 🎓 Academic Integrity

- **Collaboration:** You may discuss concepts with classmates, but submit your own work
- **Resources:** You may use documentation, tutorials, and Stack Overflow
- **Attribution:** If you use code from external sources, add comments explaining where it came from
- **Honesty:** If you're struggling, ask for help rather than copying solutions

## 📞 Getting Help

**For Technical Issues:**
- Create an issue in the original repository with "help-wanted" label
- Or comment on your submission PR
- Include error messages, screenshots, and links to your work

**For Submission Questions:**
- Email your instructor
- Ask during office hours
- Check the #onboarding channel (if using Slack/Discord)

---

**Remember:** The goal is learning, not perfection. Submit your best effort and use the feedback to improve! 🚀 