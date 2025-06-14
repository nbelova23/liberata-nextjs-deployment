# Prerequisites & Setup

This guide will help you set up your development environment with all the necessary tools. Follow these steps carefully to ensure everything is properly installed and configured.

## Required Tools

### 1. Terminal
- **macOS**: Use the default Terminal app with zsh
- **Windows**: Install either:
  - Windows Terminal + Git Bash (recommended)
  - PowerShell

### 2. Package Manager
- **macOS**: Install Homebrew
  ```bash
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  ```
- **Windows**: Choose one:
  - Install WSL 2 + Ubuntu 22.04 (recommended)
  - Use Chocolatey package manager

### 3. Node.js & pnpm
- **macOS**:
  ```bash
  # Install corepack
  brew install corepack
  corepack enable
  
  # Install pnpm
  corepack prepare pnpm@latest --activate
  
  # Install Node.js
  brew install node@latest
  ```
- **Windows (WSL)**:
  ```bash
  # Same commands as macOS
  ```
- **Windows (Native)**:
  ```bash
  choco install nodejs-lts pnpm
  ```

### 4. Docker Desktop
- **macOS**:
  1. Download Docker Desktop from [docker.com](https://www.docker.com/products/docker-desktop)
  2. Drag to Applications folder
  3. Launch and complete setup
- **Windows**:
  1. Download Docker Desktop for Windows
  2. Enable WSL integration during installation
  3. Launch and complete setup

### 5. Terraform
- **macOS**:
  ```bash
  brew tap hashicorp/tap
  brew install hashicorp/tap/terraform
  ```
- **Windows**:
  ```bash
  choco install terraform
  # Or in WSL:
  sudo apt install terraform
  ```

### 6. Wrangler (Cloudflare Workers)
- Install locally in your project:
  ```bash
  pnpm add -D wrangler@latest
  ```

### 7. Redis CLI
- **macOS**:
  ```bash
  brew install redis
  ```
- **Windows (WSL)**:
  ```bash
  sudo apt install redis-tools
  ```
- **Windows (Native)**:
  ```bash
  choco install redis-64
  ```

### 8. VS Code
- **macOS**:
  ```bash
  brew install --cask visual-studio-code
  ```
- **Windows**:
  1. Download VS Code from [code.visualstudio.com](https://code.visualstudio.com)
  2. Install with default settings
  3. Install "Remote - WSL" extension if using WSL

## Verification Steps

After installation, verify your setup by running these commands:

```bash
# Check Node.js version (should be 18.x or later)
node -v

# Check pnpm version (should be 8.x or later)
pnpm -v

# Check Wrangler version (should be 3.x)
wrangler -V

# Check Terraform version
terraform -version
```

## Common Issues & Solutions

### 1. Permission Denied Errors
- Ensure you have the necessary permissions to install software
- On macOS, you might need to use `sudo` for some commands
- On Windows, run PowerShell as Administrator

### 2. WSL Installation Issues
- Enable WSL in Windows Features
- Install Ubuntu from Microsoft Store
- Update WSL: `wsl --update`

### 3. Docker Issues
- Ensure virtualization is enabled in BIOS
- Check Docker Desktop is running
- Verify WSL integration if using Windows

## Next Steps

Once you've completed the setup and verified all tools are working:
1. Create necessary accounts (GitHub, Supabase, Cloudflare)
2. Set up SSH keys
3. Fork and clone the Liberata repository

Proceed to [Accounts & Setup](./accounts.md) for the next steps! 