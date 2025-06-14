# Git Basics Exercise

Welcome to your first exercise! In this module, you'll learn the fundamentals of Git and GitHub through hands-on practice.

## Exercise Overview

You'll create a simple profile page for yourself, learning Git commands along the way. By the end, you'll know how to:
- Create and switch branches
- Make commits
- Push changes to GitHub
- Create pull requests

## Getting Started

1. Create a new branch:
   ```bash
   git checkout -b exercise/git-basics
   ```

2. Create your profile page:
   ```bash
   mkdir -p profiles
   touch profiles/your-username.md
   ```

3. Add your profile information to `profiles/your-username.md`:
   ```markdown
   # Your Name

   ## About Me
   - Major: [Your Major]
   - Year: [Your Year]
   - Interests: [Your Interests]

   ## Why I'm Here
   [Write a brief paragraph about why you're interested in web development]

   ## Goals
   - [Goal 1]
   - [Goal 2]
   - [Goal 3]
   ```

## Tasks

1. **Create Your Branch**
   - Use the command above to create a new branch
   - Verify you're on the new branch with `git branch`

2. **Make Your First Commit**
   - Add your profile file
   - Stage it with `git add`
   - Commit with a descriptive message
   - Push to GitHub

3. **Create a Pull Request**
   - Go to GitHub
   - Create a PR from your branch
   - Add a description
   - Request a review

## Git Commands You'll Use

```bash
# Create and switch to a new branch
git checkout -b branch-name

# Check which branch you're on
git branch

# Stage changes
git add file-name

# Commit changes
git commit -m "descriptive message"

# Push to GitHub
git push origin branch-name
```

## Success Criteria

- [ ] Created a new branch
- [ ] Added your profile file
- [ ] Made a commit with a descriptive message
- [ ] Pushed to GitHub
- [ ] Created a pull request
- [ ] PR includes a description

## Next Steps

After completing this exercise, you'll:
1. Have a basic understanding of Git workflow
2. Know how to create and manage branches
3. Be comfortable with the PR process

Move on to the [TypeScript exercises](../02-typescript/README.md) when you're ready! 