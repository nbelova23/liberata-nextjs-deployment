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

## Fork and Clone Liberata

1. **Fork the Repository**
   - Go to [github.com/liberata-project/liberata](https://github.com/liberata-project/liberata)
   - Click "Fork" in the top right
   - Select your account as the destination

2. **Clone Your Fork**
   ```bash
   git clone git@github.com:<your-username>/liberata.git
   cd liberata
   ```

3. **Add Upstream Remote**
   ```bash
   git remote add upstream git@github.com:liberata-project/liberata.git
   ```

4. **Install Dependencies**
   ```bash
   pnpm install
   ```

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
1. Review the [Git & DRI Warm Up](../labs/git-dri.md) lab
2. Create your first branch
3. Make your first commit

Remember to keep your API keys and credentials secure and never commit them to the repository! 