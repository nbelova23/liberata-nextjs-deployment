# Liberata Onboarding Repository

Welcome to the Liberata onboarding repository! This is designed specifically for Duke University undergraduate students to learn web development fundamentals and the technical stack used in the Liberata project.

## 🎯 Purpose

This repository provides step-by-step tutorials and exercises to help students with no industry experience learn:

1. **Git & GitHub** - Version control, branching, pull requests
2. **TypeScript** - Essential concepts for modern web development
3. **React** - Component-based UI development
4. **Next.js** - Full-stack React framework
5. **Technical Stack Tools** - All tools from the Liberata Technical Onboarding Checklist

## 📚 Learning Path

The exercises are designed to be completed in order, building upon previous concepts:

```
exercises/
├── 01-git-basics/     # Git fundamentals, branching, and pull requests
├── 02-typescript/     # TypeScript fundamentals and modern JavaScript
├── 03-react/          # React components, hooks, and state management
├── 04-nextjs/         # Next.js framework and server-side rendering
├── 05-edge-worker/    # Cloudflare Workers and serverless functions
├── 06-r2-storage/     # File storage and CDN with Cloudflare R2
├── 07-supabase-rls/   # Database and Row-Level Security
└── 08-redis-streams/  # Real-time data processing with Redis
```

## 🚀 Getting Started

### Prerequisites

Make sure you have these installed:
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **pnpm** (v8 or higher) - Install with: `npm install -g pnpm`
- **Git** - [Download here](https://git-scm.com/)

### Quick Start

1. **Clone this repository:**
   ```bash
   git clone https://github.com/your-username/liberata-onboarding.git
   cd liberata-onboarding
   ```

2. **Start with TypeScript exercises:**
   ```bash
   cd exercises/02-typescript
   pnpm install
   pnpm dev
   ```

3. **Follow the exercise README for detailed instructions**

## 📚 Essential Documentation

Before starting the exercises, please read through these important guides:

- **[Introduction](docs/introduction.md)** - Overview of Liberata and this onboarding program
- **[Prerequisites](docs/prerequisites.md)** - Required tools and setup instructions
- **[Accounts & Setup](docs/accounts.md)** - Creating accounts and SSH key configuration
- **[Submission Guide](docs/submission-guide.md)** - How to submit your completed work for review
- **[Glossary](docs/glossary.md)** - Web development terms and concepts explained

## 📖 Exercise Structure

Each exercise directory contains different components based on the technology being learned:

### **All Exercises Include:**
- **README.md** - Step-by-step instructions and learning objectives

### **Exercise-Specific Structure:**

**📁 Git Basics** - Conceptual learning (no code files)
- Just README with Git workflow instructions

**📁 TypeScript & React** - Full development setup
- **src/** - Source files with TODO comments to implement
- **tests/** - Automated tests to verify your implementations  
- **package.json** - Dependencies and scripts

**📁 Next.js** - Full-stack application
- **pages/** - Next.js page components
- **styles/** - CSS and styling files
- **tests/** - Component and integration tests

**📁 Cloud Services** (Edge Worker, R2, Supabase, Redis)
- **src/** - Implementation files
- **package.json** - Dependencies
- Configuration files (wrangler.toml, etc.)

### How to Work Through Exercises

1. **Read the README** - Understand what you'll be building
2. **Install dependencies** - Run `pnpm install` (where applicable)
3. **Follow the guided steps** - Each README has specific instructions
4. **Test your work** - Use provided tests or manual verification
5. **Submit your work** - Follow the [Submission Guide](docs/submission-guide.md)
6. **Move to next exercise** - Build upon what you've learned

## 📤 Submitting Your Work

**Important:** You'll work in your own fork and submit via Pull Requests with specific title tags.

### Quick Submission Overview:
1. **Fork this repository** to your GitHub account
2. **Create a branch** for each exercise: `exercise/YOUR-USERNAME-01-git-basics`
3. **Complete the exercise** in your branch
4. **Submit via Pull Request** with title: `[SUBMISSION] YOUR-USERNAME: Exercise 01 - Git Basics`

👉 **Full details:** See the [Submission Guide](docs/submission-guide.md) for complete instructions.

### Why This Method?
- ✅ **Easy for instructors** - All submissions tagged with `[SUBMISSION]` in PR list
- ✅ **Natural Git workflow** - Students practice creating PRs (real-world skill)
- ✅ **Built-in code review** - Instructors can comment directly on code
- ✅ **Automatic updates** - New commits automatically update the PR

## 🧑‍🎓 For Students

### Need Help with Terms?

If you encounter unfamiliar web development terms, check out our comprehensive [Glossary](docs/glossary.md) which explains everything from APIs to CORS to Environment Variables with beginner-friendly analogies.

### Getting Help

- **Read error messages carefully** - They often tell you exactly what's wrong
- **Use the browser developer tools** - Press F12 to inspect and debug
- **Check the console** - Look for red error messages
- **Ask questions** - Don't hesitate to reach out for help!

## 🛠 Available Exercises

### ✅ Ready to Use

- **[Git Basics](exercises/01-git-basics/README.md)** - Version control fundamentals, branching, and pull requests
- **[TypeScript Exercises](exercises/02-typescript/README.md)** - Learn TypeScript basics, types, and functions
- **[React Exercises](exercises/03-react/README.md)** - Master React components, hooks, and state management
- **[Next.js](exercises/04-nextjs/README.md)** - Full-stack React development with server-side rendering
- **[Edge Workers](exercises/05-edge-worker/README.md)** - Serverless functions with Cloudflare Workers
- **[R2 Storage](exercises/06-r2-storage/README.md)** - File storage and CDN with Cloudflare R2
- **[Supabase RLS](exercises/07-supabase-rls/README.md)** - Database and Row-Level Security
- **[Redis Streams](exercises/08-redis-streams/README.md)** - Real-time data processing with Redis

## 🎯 Learning Objectives

By completing these exercises, you'll be able to:

1. **Use Git effectively** - Create branches, make commits, open pull requests
2. **Write TypeScript** - Understand types, interfaces, and modern JavaScript features
3. **Build React applications** - Create components, manage state, handle user interactions
4. **Work with APIs** - Fetch data, handle responses, manage loading states
5. **Deploy applications** - Get your code running on the internet
6. **Use developer tools** - Debug issues and optimize performance

## 📁 Repository Structure

```
liberata-onboarding/
├── README.md              # This file - overview and getting started
├── docs/                  # Essential documentation and guides
│   ├── introduction.md    # Program overview and objectives
│   ├── prerequisites.md   # Required tools and setup
│   ├── accounts.md        # Account creation and SSH setup
│   └── glossary.md        # Web development terms explained
└── exercises/             # All learning exercises
    ├── 01-git-basics/     # Git fundamentals (README only)
    ├── 02-typescript/     # TypeScript fundamentals (src/, tests/, package.json)
    ├── 03-react/          # React development (src/, tests/, package.json)
    ├── 04-nextjs/         # Next.js framework (pages/, styles/, tests/)
    ├── 05-edge-worker/    # Cloudflare Workers (src/, wrangler.jsonc)
    ├── 06-r2-storage/     # File storage with R2 (src/, wrangler.toml)
    ├── 07-supabase-rls/   # Database and security (src/, package.json)
    └── 08-redis-streams/  # Real-time data processing (src/, package.json)
```

## 🤝 Contributing

Found a bug or have a suggestion? We'd love your feedback!

1. **Check existing issues** - See if someone already reported it
2. **Create a new issue** - Describe the problem or suggestion clearly
3. **Include details** - What exercise, what you expected vs. what happened

## 📞 Support

If you get stuck:

1. **Read the error message** - It usually tells you what's wrong
2. **Check the exercise README** - Look for troubleshooting sections
3. **Review the code comments** - They provide hints and guidance
4. **Ask for help** - Reach out to instructors or fellow students

---

**Happy coding! 🚀** Remember, everyone starts somewhere, and the best way to learn programming is by doing. Take your time, experiment, and don't be afraid to make mistakes - that's how you learn! 