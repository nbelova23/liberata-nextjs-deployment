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