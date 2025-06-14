# Accounts & Setup

This guide will walk you through creating the necessary accounts and setting up SSH keys for development. These steps are essential for contributing to the Liberata project.

## Required Accounts

### 1. GitHub Account
1. Go to [github.com](https://github.com)
2. Click "Sign up"
3. Use your Duke email address
4. Complete the verification process
5. Set up two-factor authentication (2FA)

### 2. Supabase Account
1. Visit [supabase.com](https://supabase.com)
2. Click "Start your project"
3. Sign in with GitHub
4. Complete your profile setup
5. Note down your API keys (you'll need them later)

### 3. Cloudflare Account
1. Go to [cloudflare.com](https://cloudflare.com)
2. Click "Sign Up"
3. Use your Duke email
4. Complete the verification process
5. Set up 2FA

## SSH Key Setup

### 1. Generate SSH Key
- **macOS**:
  ```bash
  ssh-keygen -t ed25519 -C "your.email@duke.edu"
  ```
- **Windows (WSL)**:
  ```bash
  ssh-keygen -t ed25519 -C "your.email@duke.edu"
  ```
- **Windows (Native)**:
  ```bash
  # Using Git Bash
  ssh-keygen -t ed25519 -C "your.email@duke.edu"
  ```

### 2. Add SSH Key to GitHub
1. Copy your public key:
   - **macOS**:
     ```bash
     pbcopy < ~/.ssh/id_ed25519.pub
     ```
   - **Windows**:
     ```bash
     cat ~/.ssh/id_ed25519.pub
     # Manually copy the output
     ```

2. Add to GitHub:
   - Go to GitHub Settings → SSH and GPG keys
   - Click "New SSH key"
   - Paste your key
   - Give it a descriptive title (e.g., "Duke Laptop")
   - Click "Add SSH key"

### 3. Test SSH Connection
```bash
ssh -T git@github.com
# You should see: "Hi username! You've successfully authenticated..."
```

## Clone the Onboarding Repository

1. **Clone the Repository**
   ```bash
   git clone git@github.com:liberata-project/liberata-onboarding.git
   cd liberata-onboarding
   ```

2. **Verify the Clone**
   ```bash
   ls -la
   # You should see directories like: docs/, exercises/, README.md
   ```

Note: For the actual Liberata project, you'll fork and clone the main repository later. This onboarding repository is for learning the tools and concepts first.

## Verify Setup

1. **Check Git Configuration**
   ```bash
   git config --list
   ```

2. **Test pnpm Installation**
   ```bash
   pnpm -v
   ```

3. **Verify SSH Connection**
   ```bash
   ssh -T git@github.com
   ```

## Common Issues

### 1. SSH Key Not Working
- Ensure the key is added to the SSH agent:
  ```bash
  eval "$(ssh-agent -s)"
  ssh-add ~/.ssh/id_ed25519
  ```
- Check permissions on your SSH directory:
  ```bash
  chmod 700 ~/.ssh
  chmod 600 ~/.ssh/id_ed25519
  ```

### 2. pnpm Install Fails
- Clear pnpm store:
  ```bash
  pnpm store prune
  ```
- Try installing with verbose logging:
  ```bash
  pnpm install --verbose
  ```

### 3. Git Configuration Issues
- Set your Git identity:
  ```bash
  git config --global user.name "Your Name"
  git config --global user.email "your.email@duke.edu"
  ```

## Next Steps

Now that you have all accounts set up and the repository cloned:
1. Start with the [Git Basics exercise](../exercises/01-git-basics/README.md)
2. Learn about branching and commits
3. Progress through the other exercises in order

Remember to keep your API keys and credentials secure and never commit them to the repository! 