# Next.js Exercise 🚀
*Build Your First React Website*

## 🚀 Quick Start (3 Minutes!)

**Ready to build a modern website? Follow these 4 steps:**

1. **Navigate to this exercise directory:**
   ```bash
   cd exercises/04-nextjs
   ```
   *⚠️ Important: Make sure you're in the 04-nextjs folder, not the root!*

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Start the development server:**
   ```bash
   pnpm dev
   ```
   *You should see: "Ready on http://localhost:3000"*

4. **Open your website:**
   ```bash
   open http://localhost:3000
   ```
   *Or just click the link in your terminal!*

**Now you're ready to build! Your mission: create a modern React website with multiple pages.**

---

## 🤔 What is Next.js?

Think of Next.js like **a smart website builder for React**:

### **Next.js = React + Superpowers**
- **React** = Building blocks for interactive websites (like LEGO pieces)
- **Next.js** = The instruction manual + extra pieces (like a LEGO set with instructions)
- **Pages** = Different screens of your website (like different rooms in a house)
- **Routing** = How people navigate between pages (like hallways connecting rooms)

### **Why This is Amazing:**
- **Super Fast**: Websites load instantly (like having everything pre-built)
- **SEO Friendly**: Google can find your website easily (like having good street signs)
- **Easy Deployment**: Put your website online with one click (like publishing a book)
- **Developer Experience**: Makes coding fun and productive (like having the best tools)

### **Real Examples:**
- **Netflix**: Uses Next.js for their homepage
- **TikTok**: Uses Next.js for their website
- **Twitch**: Uses Next.js for their dashboard
- **Hulu**: Uses Next.js for their streaming platform

---

## 🎯 What You'll Learn

You'll work through **8 progressive exercises** that teach you modern web development:

### **Basic Exercises** (Start here!)
1. **Getting Started** - Your first Next.js pages and routing
2. **Data Fetching** - How to get data from APIs and databases
3. **Dynamic Routes** - Pages that change based on URLs
4. **Layouts** - Shared components across pages

### **Advanced Exercises** (For when you're feeling confident)
5. **Authentication** - User login and protected pages
6. **State Management** - Managing data across your app
7. **Deployment** - Putting your website online
8. **Testing** - Making sure your code works correctly

---

## 📁 Project Structure

```
exercises/04-nextjs/
├── pages/                    # 👈 Your website pages go here
│   ├── index.tsx            # Main home page
│   ├── _app.tsx             # App configuration (don't touch this)
│   └── exercises/           # 👈 Your learning exercises are here!
│       ├── 01-getting-started/
│       ├── 02-data-fetching/
│       ├── 03-dynamic-routes/
│       ├── 04-layouts/
│       ├── 05-authentication/
│       ├── 06-state-management/
│       ├── 07-deployment/
│       └── 08-testing/
├── styles/                   # 👈 How your website looks
│   └── globals.css          # Colors, fonts, layout
├── public/                   # 👈 Images and files (add your photos here)
└── README.md                # This guide
```

**You'll work in the `pages/exercises/` folder - each exercise teaches you something new!**

---

## 🏗️ How Next.js Works

```typescript
// pages/index.tsx - This becomes your home page!
export default function HomePage() {
  return (
    <div>
      <h1>Welcome to My Website!</h1>
      <p>This is my awesome homepage.</p>
    </div>
  );
}
```

**How it works:**
1. Create a file in `pages/` folder (like `about.tsx`)
2. Export a React component (like a function that returns HTML)
3. Next.js automatically creates a webpage at `/about`
4. People can visit `yoursite.com/about`

**It's like magic! 🪄**

---

## 🎨 Styling with Tailwind CSS

This project uses **Tailwind CSS** - a modern way to style websites!

### **What is Tailwind CSS?**
Think of Tailwind like **having a huge box of LEGO pieces for styling**:

- **Traditional CSS**: Write custom styles from scratch (like building with clay)
- **Tailwind CSS**: Use pre-built utility classes (like using LEGO pieces)
- **Classes**: Small, single-purpose styles you combine together

### **How Tailwind Works:**
```typescript
// Instead of writing custom CSS:
<div className="my-custom-card">  // ❌ Old way

// You use utility classes:
<div className="bg-white p-6 rounded-lg shadow-lg">  // ✅ Tailwind way
```

### **Common Tailwind Classes You'll See:**

#### **Layout & Spacing**
```typescript
<div className="max-w-4xl mx-auto py-8 px-4">
//             │        │      │     │
//             │        │      │     └── padding left/right: 16px
//             │        │      └────────── padding top/bottom: 32px  
//             │        └───────────────────── margin left/right: auto (centers)
//             └────────────────────────────────── max width: 896px
```

#### **Colors & Backgrounds**
```typescript
<div className="bg-blue-600 text-white">
//             │           │
//             │           └── white text
//             └─────────────────── blue background
```

#### **Typography**
```typescript
<h1 className="text-4xl font-bold mb-4">
//            │         │        │
//            │         │        └── margin bottom: 16px
//            │         └─────────────── bold font weight
//            └───────────────────────────── very large text
```

#### **Flexbox & Grid**
```typescript
<div className="flex items-center justify-between">
//             │     │             │
//             │     │             └── space items apart
//             │     └─────────────────── center items vertically
//             └───────────────────────────── use flexbox layout

<div className="grid gap-6 md:grid-cols-2">
//             │     │     │
//             │     │     └── 2 columns on medium screens+
//             │     └─────────── 24px gap between items
//             └───────────────────── use grid layout
```

### **Responsive Design (Mobile-First)**
Tailwind makes it easy to design for different screen sizes:

```typescript
<div className="text-sm md:text-lg lg:text-xl">
//             │        │          │
//             │        │          └── extra large text on large screens
//             │        └────────────────── large text on medium screens+  
//             └─────────────────────────────── small text by default (mobile)
```

**Screen size prefixes:**
- No prefix = Mobile (default)
- `sm:` = Small tablets (640px+)
- `md:` = Tablets (768px+) 
- `lg:` = Laptops (1024px+)
- `xl:` = Desktops (1280px+)

### **Interactive States**
```typescript
<button className="bg-blue-600 hover:bg-blue-700 transition-colors">
//                │            │                │
//                │            │                └── smooth color transitions
//                │            └──────────────────── darker blue on hover
//                └─────────────────────────────────── blue background
```

### **Learning Tailwind Tips:**
1. **Start Simple**: Use basic classes like `p-4`, `text-lg`, `bg-white`
2. **Use the Docs**: [tailwindcss.com](https://tailwindcss.com/docs) has great examples
3. **Inspect Elements**: Right-click → Inspect to see what classes do
4. **Practice**: Try changing classes in the exercises to see what happens
5. **Don't Memorize**: Look up classes as you need them

### **Common Patterns You'll Use:**
```typescript
// Card component
<div className="bg-white rounded-lg shadow-lg p-6">

// Button
<button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">

// Centered container
<div className="max-w-4xl mx-auto px-4">

// Flex layout
<div className="flex items-center justify-between">

// Grid layout
<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
```

### **Why Tailwind is Great for Learning:**
- **Fast**: No need to write custom CSS
- **Consistent**: All spacing and colors follow a system
- **Responsive**: Easy to make mobile-friendly designs
- **Modern**: Used by companies like Netflix, GitHub, and Shopify
- **Readable**: You can see exactly what styles are applied

**Don't worry about memorizing everything - just experiment and have fun!** 🎨

---

## 🎯 How to Start Learning

**Follow this path to master Next.js step by step:**

### **Step 1: Explore the Exercise Hub**
1. Visit `http://localhost:3000/exercises` in your browser
2. You'll see a list of all 8 exercises
3. Each exercise has its own page with instructions and examples

### **Step 2: Start with Exercise 1**
1. Click on "01 - Getting Started" 
2. Follow the instructions on that page
3. Complete the tasks and see your results
4. Move to the next exercise when ready

### **Step 3: Work Through Each Exercise**
Each exercise builds on the previous one:
- **Exercise 1**: Basic pages and routing
- **Exercise 2**: Fetching data from APIs  
- **Exercise 3**: Dynamic URLs and parameters
- **Exercise 4**: Shared layouts and components
- **Exercise 5**: User authentication and login
- **Exercise 6**: Managing application state
- **Exercise 7**: Deploying to the internet
- **Exercise 8**: Testing your code

### **Step 4: Practice and Experiment**
- Try modifying the examples
- Add your own features
- Break things and fix them (that's how you learn!)
- Ask questions when you get stuck

---

## 🔧 Common Problems & Solutions

### **"Page not found" error**
**Problem:** You created a page but it's not showing up  
**Solution:** 
1. Make sure your file is in the `pages/` folder
2. Make sure it exports a default function
3. Save the file and refresh your browser

### **"Module not found" error**
**Problem:** Import statements aren't working  
**Solution:**
1. Check your file paths are correct
2. Make sure you're using the right import syntax
3. Restart the development server: `pnpm dev`

### **Styles not applying**
**Problem:** Your CSS isn't showing up  
**Solution:**
1. Make sure you're editing `styles/globals.css`
2. Check that your class names match
3. Refresh your browser (sometimes styles are cached)

### **Development server won't start**
**Problem:** `pnpm dev` gives an error  
**Solution:**
1. Make sure you ran `pnpm install` first
2. Check that port 3000 isn't already in use
3. Try restarting your terminal

---

## 🏆 Success Criteria

**You'll know you're successful when:**

✅ **Development server starts** (`pnpm dev` runs without errors)  
✅ **Exercise hub loads** (`http://localhost:3000/exercises` shows all exercises)  
✅ **You can navigate** (clicking exercise links takes you to each exercise)  
✅ **You complete exercises** (follow instructions and see results)  
✅ **You understand concepts** (can explain what you learned)  

---

## 🎯 Bonus Challenges

### **After Basic Exercises:**
1. **Add a Contact Page** - Let people reach out to you
2. **Add Images** - Put photos in your `public/` folder and display them
3. **Create a Projects Page** - Show off things you've built
4. **Add a Footer** - Put contact info at the bottom of every page

### **For Advanced Students:**
1. **Dynamic Routes** - Create pages that change based on URL parameters
2. **API Routes** - Build backend functionality
3. **Database Integration** - Store and retrieve data
4. **Authentication** - Add login/logout functionality
5. **Deploy Online** - Put your website on the internet!

---

## 🛠️ Available Commands

```bash
# Start development server (for coding)
pnpm dev

# Build for production (when you're ready to publish)
pnpm build

# Start production server (to test your final website)
pnpm start

# Run tests (to check your code works)
pnpm test
```

---

## 📚 What You've Learned

By completing these exercises, you've learned:

- **React Components** - Building blocks of modern websites
- **File-based Routing** - How Next.js creates pages automatically
- **CSS Styling** - Making websites look beautiful
- **Navigation** - Connecting pages together
- **Project Structure** - How to organize a web project

**These skills are the foundation of modern web development!** 🎉

---

## 🆘 Need Help?

1. **Read the error messages** - they usually tell you what's wrong
2. **Check the browser console** - press F12 to see errors
3. **Make sure your syntax is correct** - brackets, quotes, semicolons
4. **Ask for help** - post in Slack or come to office hours

**Remember: Every web developer started where you are now!** 💪

---

## 🔍 Understanding the Magic

### **How does `pages/about.tsx` become a webpage?**
1. Next.js watches your `pages/` folder
2. When you create `about.tsx`, it automatically creates a route
3. The route `/about` serves your React component
4. No configuration needed - it just works!

### **Why is this better than regular HTML?**
- **Components**: Reuse code instead of copying and pasting
- **Dynamic**: Content can change based on data
- **Interactive**: Buttons, forms, and animations work easily
- **Modern**: Uses the latest web development practices

**You're learning the same tools used by Netflix, Facebook, and thousands of other companies!** 🚀 

# Next.js Fundamentals

> **Completion Time:** 2.5 hours  
> **Prerequisites:** React basics, TypeScript fundamentals

Learn Next.js, the React framework that makes building production-ready web applications easier with built-in features like routing, server-side rendering, and API routes.

## 🎯 What You'll Learn

By the end of this exercise, you'll understand:
- What Next.js is and why it's popular
- File-based routing system
- Pages and layouts
- Server-side rendering (SSR) vs Static generation (SSG)
- API routes for backend functionality
- Image optimization with Next.js Image component
- Deployment with Vercel
- How to build a full-stack application

## 📖 Background

**Next.js** is a React framework that gives you building blocks to create web applications. Think of it as React with superpowers - it handles all the complex setup and gives you powerful features out of the box.

**Key Benefits:**
- **File-based Routing** - No need to configure routes manually
- **Server-Side Rendering** - Better SEO and performance
- **Static Site Generation** - Lightning-fast websites
- **API Routes** - Build backend functionality in the same project
- **Image Optimization** - Automatic image optimization
- **Built-in CSS Support** - CSS Modules, Sass, and more

**Real-world analogy:** If React is like having individual LEGO pieces, Next.js is like having pre-built LEGO sets with instructions - you can still customize everything, but you get a head start with proven patterns.

## 🚀 Quick Start (20 Minutes)

### Step 1: Create Your Next.js Project

```bash
# Create a new branch for this exercise
git checkout -b feature/nextjs-basics-YOUR_NAME

# Navigate to the Next.js exercise directory
cd exercises/04-nextjs

# Create a new Next.js app with TypeScript
npx create-next-app@latest my-nextjs-app --typescript --tailwind --eslint --app

# Navigate into your project
cd my-nextjs-app

# Start the development server
npm run dev
```

Your browser should open to `http://localhost:3000` showing your Next.js app!

### Step 2: Understand the Project Structure

```
my-nextjs-app/
├── app/                 # App Router (Next.js 13+)
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── favicon.ico     # Favicon
├── public/             # Static assets
├── next.config.js      # Next.js configuration
├── package.json        # Dependencies
└── tsconfig.json       # TypeScript configuration
```

### Step 3: Create Your First Page

Create `app/about/page.tsx`:

```typescript
export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="text-lg">
        Welcome to my Next.js learning journey! This page was created using 
        Next.js file-based routing.
      </p>
    </div>
  );
}
```

Visit `http://localhost:3000/about` to see your new page!

Congratulations! You've created your first Next.js application with routing! 🎉

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

## 📚 Core Next.js Concepts

### 1. File-Based Routing

```typescript
// app/page.tsx (Home page - /)
export default function Home() {
  return <h1>Welcome to Next.js!</h1>;
}

// app/about/page.tsx (About page - /about)
export default function About() {
  return <h1>About Us</h1>;
}

// app/blog/[slug]/page.tsx (Dynamic route - /blog/my-post)
interface BlogPostProps {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: BlogPostProps) {
  return <h1>Blog Post: {params.slug}</h1>;
}
```

### 2. Layouts

```typescript
// app/layout.tsx (Root layout)
import './globals.css';

export const metadata = {
  title: 'My Next.js App',
  description: 'Learning Next.js fundamentals',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-blue-600 text-white p-4">
          <h1>My App</h1>
        </nav>
        <main>{children}</main>
        <footer className="bg-gray-800 text-white p-4 text-center">
          © 2024 My Next.js App
        </footer>
      </body>
    </html>
  );
}
```

### 3. Server Components vs Client Components

```typescript
// app/server-component.tsx (Server Component - default)
async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

export default async function UserList() {
  const users = await getUsers();
  
  return (
    <div>
      <h2>Users (Server Component)</h2>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

// app/client-component.tsx (Client Component)
'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter (Client Component)</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

### 4. API Routes

```typescript
// app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server';

// GET /api/users
export async function GET() {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ];

  return NextResponse.json(users);
}

// POST /api/users
export async function POST(request: NextRequest) {
  const body = await request.json();
  
  // In a real app, you'd save to a database
  const newUser = {
    id: Date.now(),
    name: body.name,
    email: body.email,
  };

  return NextResponse.json(newUser, { status: 201 });
}
```

### 5. Image Optimization

```typescript
import Image from 'next/image';

export default function ProfilePage() {
  return (
    <div>
      <h1>My Profile</h1>
      
      {/* Optimized image with Next.js Image component */}
      <Image
        src="/profile-picture.jpg"
        alt="Profile Picture"
        width={300}
        height={300}
        className="rounded-full"
        priority // Load this image first
      />
      
      {/* External image */}
      <Image
        src="https://example.com/avatar.jpg"
        alt="Avatar"
        width={100}
        height={100}
        className="rounded"
      />
    </div>
  );
}
```

### 6. Data Fetching

```typescript
// Static Generation (SSG) - Generated at build time
export default async function StaticPage() {
  const data = await fetch('https://api.example.com/data', {
    cache: 'force-cache' // This is the default
  });
  const posts = await data.json();

  return (
    <div>
      <h1>Static Posts</h1>
      {posts.map((post: any) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </article>
      ))}
    </div>
  );
}

// Server-Side Rendering (SSR) - Generated on each request
export default async function DynamicPage() {
  const data = await fetch('https://api.example.com/live-data', {
    cache: 'no-store' // Always fetch fresh data
  });
  const liveData = await data.json();

  return (
    <div>
      <h1>Live Data</h1>
      <p>Last updated: {new Date().toLocaleString()}</p>
      <pre>{JSON.stringify(liveData, null, 2)}</pre>
    </div>
  );
}
```

## 🛠️ Hands-On Project: Student Portal

Build a student portal that demonstrates Next.js features:

### Project Features

1. **Home Page** (`/`) - Welcome page with navigation
2. **Students List** (`/students`) - Display all students
3. **Student Profile** (`/students/[id]`) - Individual student details
4. **Add Student** (`/students/new`) - Form to add new students
5. **API Routes** (`/api/students`) - Backend for student data
6. **About Page** (`/about`) - Static page with information

### Project Structure

```typescript
// types/Student.ts
export interface Student {
  id: number;
  name: string;
  email: string;
  major: string;
  year: number;
  gpa: number;
}

// app/students/page.tsx
import Link from 'next/link';

async function getStudents() {
  const res = await fetch('http://localhost:3000/api/students');
  return res.json();
}

export default async function StudentsPage() {
  const students = await getStudents();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Students</h1>
      
      <Link 
        href="/students/new"
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block"
      >
        Add New Student
      </Link>

      <div className="grid gap-4">
        {students.map((student: Student) => (
          <div key={student.id} className="border p-4 rounded">
            <h3 className="text-xl font-semibold">{student.name}</h3>
            <p>Major: {student.major}</p>
            <p>Year: {student.year}</p>
            <Link 
              href={`/students/${student.id}`}
              className="text-blue-500 hover:underline"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
```

### Implementation Tasks

- [ ] Set up the project structure
- [ ] Create the home page with navigation
- [ ] Implement the students list page
- [ ] Create dynamic student profile pages
- [ ] Build the add student form
- [ ] Implement API routes for CRUD operations
- [ ] Add proper TypeScript types
- [ ] Style with Tailwind CSS
- [ ] Deploy to Vercel

## 🔍 Next.js Best Practices

### 1. Use Server Components by Default

```typescript
// ✅ Good - Server Component (default)
export default async function ProductList() {
  const products = await fetchProducts();
  return <div>{/* render products */}</div>;
}

// ✅ Good - Client Component when needed
'use client';
export default function InteractiveButton() {
  const [clicked, setClicked] = useState(false);
  return <button onClick={() => setClicked(true)}>Click me</button>;
}
```

### 2. Optimize Images

```typescript
// ✅ Good - Use Next.js Image component
import Image from 'next/image';

<Image
  src="/hero.jpg"
  alt="Hero image"
  width={800}
  height={400}
  priority
/>

// ❌ Avoid - Regular img tag
<img src="/hero.jpg" alt="Hero image" />
```

### 3. Use Proper Metadata

```typescript
// app/blog/[slug]/page.tsx
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}
```

## ✅ Success Criteria

- [ ] Understand the difference between Next.js and React
- [ ] Can create pages using file-based routing
- [ ] Successfully implemented dynamic routes
- [ ] Created both server and client components
- [ ] Built API routes for backend functionality
- [ ] Used Next.js Image component for optimization
- [ ] Implemented proper layouts and metadata
- [ ] Completed the student portal project
- [ ] Successfully deployed to Vercel

## 🚀 Bonus Challenges

1. **Authentication:** Add user authentication with NextAuth.js
2. **Database Integration:** Connect to a database (PostgreSQL, MongoDB)
3. **Middleware:** Implement route protection and redirects
4. **Internationalization:** Add multi-language support
5. **Performance:** Implement caching strategies and optimization

## 🎉 What's Next?

You're now ready to learn about **Edge Workers** and **Cloudflare Workers**, which will teach you about serverless computing and edge computing concepts that complement Next.js applications!

## 💡 Pro Tips

- **Use Server Components** when possible for better performance
- **Client Components** only when you need interactivity
- **Optimize images** with the Next.js Image component
- **Use TypeScript** for better development experience
- **Deploy early and often** to catch issues quickly
- **Read the Next.js docs** - they're excellent and always up-to-date 