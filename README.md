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
├── 01-git-github/     # Git basics, branching, PRs (Coming Soon)
├── 02-typescript/     # TypeScript fundamentals
├── 03-react/          # React components, hooks, routing
├── 04-nextjs/         # Next.js framework (Coming Soon)
├── 05-supabase/       # Database and authentication (Coming Soon)
├── 06-r2-storage/     # File storage with Cloudflare R2 (Coming Soon)
├── 07-edge-workers/   # Serverless functions (Coming Soon)
└── 08-terraform/      # Infrastructure as code (Coming Soon)
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

## 📖 Exercise Structure

Each exercise directory is self-contained and includes:

- **README.md** - Step-by-step instructions and learning objectives
- **src/** - Source files with TODO comments for you to implement
- **tests/** - Automated tests to verify your implementations
- **package.json** - Dependencies specific to that exercise

### How to Work Through Exercises

1. **Read the README** - Understand what you'll be building
2. **Run the development server** - See your changes in real-time
3. **Implement the TODOs** - Follow the guided comments in source files
4. **Run tests** - Verify your implementation works correctly
5. **Move to next exercise** - Build upon what you've learned

## 🧑‍🎓 For Students

### Web Development Jargon Explained

As you work through these exercises, you'll encounter terms that might be new. Here are some key concepts:

- **Environment Variables** - Configuration values that change between development and production
- **CORS** - Cross-Origin Resource Sharing, a security feature that controls how web pages access resources
- **API** - Application Programming Interface, how different software components communicate
- **Component** - Reusable pieces of UI code (like LEGO blocks for websites)
- **Hook** - Special functions in React that let you use state and other features

### Getting Help

- **Read error messages carefully** - They often tell you exactly what's wrong
- **Use the browser developer tools** - Press F12 to inspect and debug
- **Check the console** - Look for red error messages
- **Ask questions** - Don't hesitate to reach out for help!

## 🛠 Available Exercises

### ✅ Ready to Use

- **[TypeScript Exercises](exercises/02-typescript/README.md)** - Learn TypeScript basics, types, and functions
- **[React Exercises](exercises/03-react/README.md)** - Master React components, hooks, and state management

### 🚧 Coming Soon

- **Git & GitHub** - Version control fundamentals
- **Next.js** - Full-stack React development
- **Supabase** - Database and authentication
- **Cloudflare R2** - File storage and CDN
- **Edge Workers** - Serverless functions
- **Terraform** - Infrastructure management

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
├── exercises/             # All learning exercises
│   ├── 02-typescript/     # TypeScript fundamentals
│   │   ├── README.md      # TypeScript exercise instructions
│   │   ├── src/           # Your code goes here
│   │   ├── tests/         # Automated tests
│   │   └── package.json   # Dependencies
│   └── 03-react/          # React development
│       ├── README.md      # React exercise instructions
│       ├── src/           # React components and hooks
│       ├── tests/         # Component tests
│       └── package.json   # React dependencies
└── docs/                  # Additional documentation (Coming Soon)
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