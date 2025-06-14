# Next.js Exercise 🚀

## 🚀 Quick Start (5 Minutes)

### Step 1: Set Up Your Next.js Project

```bash
# Navigate to the Next.js exercise directory
cd exercises/04-nextjs

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

Your browser should open to `http://localhost:3000` showing the Next.js exercises!

### Step 2: Complete the Exercises

The exercises are located in `pages/exercises/` and are numbered 01-08:

1. **01-getting-started** - Basic Next.js pages and routing
2. **02-data-fetching** - Server-side rendering and static generation
3. **03-dynamic-routes** - URL parameters and dynamic pages
4. **04-layouts** - Shared layouts and components
5. **05-authentication** - User login and protected routes
6. **06-state-management** - Global state with Context API
7. **07-deployment** - Deploy your app to production
8. **08-testing** - Test your Next.js components

### Step 3: Start with Exercise 1

Open `pages/exercises/01-getting-started/index.tsx` and follow the instructions:

- Each exercise has detailed README files with step-by-step guidance
- Replace TODO comments with actual implementations
- Run tests with `pnpm test` to check your progress

Congratulations! You're ready to start learning Next.js! 🎉

## 🤔 What is Next.js?

Next.js is a React framework that makes building web applications easier with built-in features like:

- **File-based Routing** - Create pages by adding files to the `pages/` folder
- **Server-side Rendering** - Better SEO and performance
- **Static Site Generation** - Lightning-fast websites
- **API Routes** - Build backend functionality in the same project
- **Image Optimization** - Automatic image optimization

**Real-world usage:** Netflix, TikTok, Twitch, and Hulu all use Next.js for their websites.

## 📁 Exercise Structure

```
exercises/04-nextjs/
├── pages/
│   └── exercises/           # 👈 Complete these exercises!
│       ├── 01-getting-started/
│       ├── 02-data-fetching/
│       ├── 03-dynamic-routes/
│       ├── 04-layouts/
│       ├── 05-authentication/
│       ├── 06-state-management/
│       ├── 07-deployment/
│       └── 08-testing/
├── styles/
│   └── globals.css          # Global styles
├── tests/
│   └── __tests__/           # Test files
└── package.json             # Dependencies and scripts
```

## 🏗️ How Next.js Works

```typescript
// pages/about.tsx - This becomes /about page!
export default function About() {
  return <h1>About Page</h1>;
}
```

**File-based routing:** Create a file in `pages/` folder and Next.js automatically creates a route for it.

## 🛠️ Available Commands

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run tests
pnpm test
```

## 🎬 YouTube Tutorials

Here are excellent tutorials to help you master Next.js:

### Next.js Fundamentals
- **[Next.js Tutorial for Beginners](https://www.youtube.com/watch?v=xnOwOBYaA3w)** by Dave Gray (4.5 hours) ⭐ **RECOMMENDED**
  - Comprehensive Next.js course perfect for beginners
  - Covers App Router, routing, server components, and more
  - Hands-on project building approach
  - Up-to-date with latest Next.js features

### Next.js Quick Start
- **[Next.js in 100 Seconds](https://www.youtube.com/watch?v=Sklc_fQBmcs)** by Fireship (100 seconds)
  - Lightning-fast overview of Next.js concepts
  - Perfect for getting the big picture quickly

- **[Next.js Crash Course](https://www.youtube.com/watch?v=mTz0GXj8NN0)** by Traversy Media (1 hour)
  - Quick but comprehensive introduction
  - Covers essential Next.js features
  - Great for developers familiar with React

### Next.js Deep Dive
- **[Next.js 13 Full Course](https://www.youtube.com/watch?v=__mSgDEOyv8)** by JavaScript Mastery (5 hours)
  - In-depth coverage of Next.js 13+ features
  - Includes App Router and Server Components
  - Build real-world projects

### Next.js with TypeScript
- **[Next.js + TypeScript Tutorial](https://www.youtube.com/watch?v=1WmNXEVia8I)** by Codevolution (45 minutes)
  - Essential for TypeScript developers
  - Shows how to properly type Next.js applications

### Next.js Deployment
- **[Deploy Next.js to Vercel](https://www.youtube.com/watch?v=2HBIzEx6IZA)** by Vercel (15 minutes)
  - Official guide to deploying Next.js apps
  - Free hosting with automatic deployments

**💡 Tip:** Start with the recommended Dave Gray tutorial for comprehensive learning, then explore specific topics with the shorter videos.

## ✅ Success Criteria

- [ ] **Exercise 1**: Built basic Next.js pages with file-based routing
- [ ] **Exercise 2**: Implemented data fetching with SSG and SSR
- [ ] **Exercise 3**: Created dynamic routes with URL parameters
- [ ] **Exercise 4**: Set up shared layouts and components
- [ ] **Exercise 5**: Added user authentication and protected routes
- [ ] **Exercise 6**: Managed global state with Context API
- [ ] **Exercise 7**: Successfully deployed your app to production
- [ ] **Exercise 8**: Wrote tests for your Next.js components
- [ ] All tests pass when running `pnpm test`
- [ ] Can explain Next.js concepts and patterns you implemented

## 📚 Key Next.js Concepts You'll Learn

### Exercise 1: Getting Started
- **File-based routing** - How pages automatically become routes
- **Components** - Building reusable UI pieces
- **Navigation** - Linking between pages with Next.js Link

### Exercise 2: Data Fetching
- **Static Site Generation (SSG)** - Pre-built pages for speed
- **Server-Side Rendering (SSR)** - Dynamic pages rendered on server
- **API Routes** - Building backend endpoints in Next.js

### Exercise 3: Dynamic Routes
- **URL Parameters** - Creating pages like `/blog/[slug]`
- **Dynamic routing** - Pages that change based on URL
- **getStaticPaths** - Generating dynamic routes at build time

### Exercise 4: Layouts
- **Shared layouts** - Common UI across multiple pages
- **Nested layouts** - Different layouts for different sections
- **Layout components** - Reusable page structures

### Exercise 5: Authentication
- **User login/logout** - Managing user sessions
- **Protected routes** - Pages that require authentication
- **Middleware** - Running code before requests

### Exercise 6: State Management
- **Context API** - Sharing state across components
- **Global state** - Managing app-wide data
- **State persistence** - Keeping state between page loads

### Exercise 7: Deployment
- **Vercel deployment** - Hosting your Next.js app
- **Environment variables** - Managing secrets and config
- **Production optimization** - Making your app fast

### Exercise 8: Testing
- **Component testing** - Testing React components
- **Integration testing** - Testing page interactions
- **Test-driven development** - Writing tests first

## 🔧 Troubleshooting

### Common Issues and Solutions

**"Page not found" error**
- Make sure your file is in the correct `pages/` directory
- Check that your file exports a default React component
- Restart the dev server with `pnpm dev`

**"Module not found" error**
- Verify your import paths are correct
- Make sure you're using the right file extensions (.tsx, .ts)
- Check that the file you're importing actually exists

**Styles not applying**
- Ensure Tailwind classes are spelled correctly
- Check that your component is properly importing styles
- Try refreshing the browser to clear cache

**Development server won't start**
- Make sure you ran `pnpm install` first
- Check that port 3000 isn't already in use
- Try deleting `.next` folder and restarting

**TypeScript errors**
- Check that all props have proper types
- Make sure you're importing types correctly
- Restart your TypeScript server in VS Code

**Build errors**
- Fix any TypeScript errors first
- Check that all environment variables are set
- Make sure all imports are valid

## 🆘 Need Help?

### Getting Support

1. **Check the error message** - Most errors tell you exactly what's wrong
2. **Read the exercise README** - Each exercise has detailed instructions
3. **Ask in Slack** - Post your question in **#webdev** channel
4. **Office hours** - Attend scheduled help sessions
5. **Pair programming** - Work with a classmate

### When Asking for Help

Please include:
- What you were trying to do
- The exact error message
- Your code (use code blocks in Slack)
- What you've already tried

### Useful Resources

- **Next.js Documentation**: [nextjs.org/docs](https://nextjs.org/docs)
- **React Documentation**: [react.dev](https://react.dev)
- **Tailwind CSS**: [tailwindcss.com](https://tailwindcss.com)
- **TypeScript**: [typescriptlang.org](https://typescriptlang.org)

**Remember: Every developer gets stuck sometimes - asking for help is part of learning!** 💪

 