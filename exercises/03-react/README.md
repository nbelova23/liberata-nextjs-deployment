# React Exercises 🎨

Think of React like building with LEGO blocks:
- Each piece (component) has a specific job
- You can combine pieces to build bigger things
- When you change one piece, only that piece updates
- You can reuse pieces in different places

## Quick Start 🚀

1. **Start the Development Server**
   ```bash
   pnpm dev
   ```
   This will open http://localhost:3000 in your browser.

2. **View Your Components**
   - You'll see a dropdown menu at the top (like a TV remote)
   - Select any exercise to view it (like changing channels)
   - Each exercise has its own detailed README.md with specific instructions
   - Make changes and see them update instantly (like magic!)
   - Use the browser's developer tools (F12) to peek behind the curtain

3. **Run Tests**
   ```bash
   pnpm test
   ```
   Keep this running in a separate terminal to see test results in real-time.

## Exercise Structure 🏗️

### Core Exercises (Start Here!) 🌟

### 1. Components (exercises/01-components/) 🧩
#### What are Components?
Think of components like building blocks:
- Each block has a specific job (like a LEGO piece)
- You can put blocks together to build bigger things
- You can reuse blocks in different places
- When you change a block, only that block updates

#### What You'll Build
- A simple button (like a light switch)
- A card component (like a photo frame)
- A user profile (like a name tag)
- A todo list (like a shopping list)
- A search input (like a search bar)

### 2. Hooks (exercises/02-hooks/) 🎣
#### What are Hooks?
Think of hooks like special tools:
- `useState` is like a memory box (remembers things)
- `useEffect` is like a robot that does tasks for you
- Custom hooks are like creating your own tools
- Hook rules are like safety instructions

#### What You'll Build
- A counter (like a scoreboard)
- A timer (like a stopwatch)
- A custom hook for data (like a personal assistant)
- A form with validation (like a bouncer checking IDs)

### 3. Forms (exercises/03-forms/) 📝
#### What are Forms?
Think of forms like a conversation:
- You ask questions (inputs)
- You get answers (values)
- You check if answers are correct (validation)
- You do something with the answers (submit)

#### What You'll Build
- A login form (like a security guard)
- A registration form (like a membership card)
- A search form (like a library catalog)
- A feedback form (like a suggestion box)

### 4. Routing (exercises/04-routing/) 🗺️
#### What is Routing?
Think of routing like a GPS:
- It tells you where you are (current page)
- It helps you get where you want to go (navigation)
- It remembers where you've been (history)
- It shows different things in different places (routes)

#### What You'll Build
- A navigation menu (like a map)
- Different pages (like rooms in a house)
- Links between pages (like doors between rooms)
- Dynamic routes (like addresses with house numbers)

### 5. State Management (exercises/05-state-management/) 🧠
#### What is State Management?
Think of state like a brain:
- It remembers things (data)
- It tells other parts what to do (updates)
- It can get new information (fetching)
- It handles errors (like a safety net)

#### What You'll Build
- A todo list (like a shopping list)
- A data fetching component (like a news reader)
- A paginated list (like a book with pages)
- A loading state (like a "please wait" sign)

### Advanced Exercises (Try After Core!) 🚀

### 6. Async Effects (exercises/06-async-effects/) 🕒
#### What are Async Effects?
Think of async effects like a robot assistant:
- It does tasks in the background (like a helper)
- It tells you when it's done (like a notification)
- It can handle errors (like a safety net)
- It can clean up after itself (like tidying up)

#### What You'll Build
- A data loader (like a book reader)
- A polling component (like a weather update)
- A search debouncer (like a smart search)
- A resource cleaner (like a janitor)

### 7. Context API (exercises/07-context-api/) 🎭
#### What is Context?
Think of Context like a family tree:
- Parents share things with children (like passing down traits)
- Children can access what parents share (like inheriting features)
- Everyone knows what's shared (like family rules)
- Changes affect everyone (like family decisions)

#### What You'll Build
- A theme provider (like a house decorator)
- A user context (like a family photo album)
- A settings context (like house rules)
- A language context (like family language)

### 8. Tailwind CSS (exercises/08-tailwindcss/) 🎨
#### What is Tailwind CSS?
Think of Tailwind like a box of LEGO pieces:
- Each piece has a specific job (like a color or size)
- You can combine pieces to build anything (like a house)
- You don't need to write custom CSS (like having instructions)
- Everything is consistent (like using the same pieces)

#### What You'll Build
- A styled button (like a fancy light switch)
- A styled card (like a decorated photo frame)
- A navigation bar (like a menu board)
- A responsive grid (like a photo wall)

### 9. SSR & SSG (exercises/09-ssr-ssg/) 🚀
#### What are SSR & SSG?
Think of SSR/SSG like a restaurant:
- SSR (Server-Side Rendering) is like cooking to order
- SSG (Static Site Generation) is like meal prep
- Both make food ready before serving (like pre-cooking)
- Both make things faster (like having food ready)

#### What You'll Build
- A server component (like a chef cooking)
- A static page (like a pre-made meal)
- A dynamic route (like a menu with options)
- A hybrid page (like a buffet)

## Development Workflow 🔄

### Viewing and Testing Components
1. **Start the Development Server**
   ```bash
   pnpm dev
   ```
   - The app will open automatically (like opening a book)
   - You'll see a dropdown menu (like a TV remote)
   - Each exercise is displayed in its own section (like chapters in a book)

2. **Making Changes**
   - Edit any file in the `src` directory
   - Changes appear instantly (like magic!)
   - No need to refresh (like a live TV show)
   - Use the browser's developer tools to:
     - Inspect components (like looking under the hood)
     - Check console logs (like reading a diary)
     - Debug state changes (like solving a mystery)
     - Monitor network requests (like watching mail delivery)

3. **Testing Your Changes**
   - Keep the test runner running (`pnpm test`)
   - Tests update automatically (like a spell checker)
   - Fix any failing tests (like solving puzzles)
   - Check the browser to see if your changes work (like taste-testing food)

### Working with Tests 🧪
Each exercise has its own test file in the `tests/__tests__` directory:
- `01-components.test.tsx` (testing building blocks)
- `02-hooks.test.tsx` (testing tools)
- `03-forms.test.tsx` (testing conversations)
- `04-routing.test.tsx` (testing navigation)
- `05-state-management.test.tsx` (testing memory)
- `06-async-effects.test.tsx` (testing robot assistants)
- `07-context-api.test.tsx` (testing family trees)
- `08-tailwindcss.test.tsx` (testing LEGO pieces)
- `09-ssr-ssg.test.tsx` (testing restaurants)

Run tests for a specific exercise:
```bash
# Run all tests
pnpm test

# Run tests for a specific exercise (by pattern matching)
pnpm test 01-components
pnpm test 02-hooks
pnpm test 03-forms
pnpm test 04-routing
pnpm test 05-state-management
pnpm test 06-async-effects
pnpm test 07-context-api
pnpm test 08-tailwindcss
pnpm test 09-ssr-ssg
```

### Testing Tips 💡
- Keep tests focused and simple (like checking one thing at a time)
- Test one thing at a time (like solving one puzzle at a time)
- Use meaningful test descriptions (like clear instructions)
- Follow the Arrange-Act-Assert pattern (like a recipe)
- Use the testing library queries in this order:
  1. `getByRole` (like finding someone by their job)
  2. `getByLabelText` (like finding someone by their name tag)
  3. `getByPlaceholderText` (like finding someone by their seat)
  4. `getByText` (like finding someone by what they're saying)
  5. `getByDisplayValue` (like finding someone by their answer)

## Learning Path 📚

### For Beginners (Start Here!)
1. **Components** - Learn the basics of building blocks
2. **Hooks** - Learn how to add memory and effects
3. **Forms** - Learn how to handle user input
4. **Routing** - Learn how to navigate between pages
5. **State Management** - Learn how to manage complex data

### For Intermediate Students
6. **Async Effects** - Learn how to handle background tasks
7. **Context API** - Learn how to share data across components
8. **Tailwind CSS** - Learn how to style components efficiently

### For Advanced Students
9. **SSR & SSG** - Learn about server-side rendering and static generation

**💡 Pro Tip:** Each exercise folder contains its own detailed README.md with specific instructions, examples, and explanations. Start with the main README (this file) for the big picture, then dive into individual exercise READMEs for detailed guidance!

## Project Structure 📁
```
exercises/03-react/
├── src/
│   ├── exercises/
│   │   ├── 01-components/
│   │   │   ├── index.tsx        # Building blocks
│   │   │   └── README.md        # Exercise guide
│   │   ├── 02-hooks/
│   │   │   ├── index.tsx        # Special tools
│   │   │   └── README.md        # Exercise guide
│   │   ├── 03-forms/
│   │   │   ├── index.tsx        # Conversations
│   │   │   └── README.md        # Exercise guide
│   │   ├── 04-routing/
│   │   │   ├── index.tsx        # Navigation
│   │   │   └── README.md        # Exercise guide
│   │   ├── 05-state-management/
│   │   │   ├── index.tsx        # Memory
│   │   │   └── README.md        # Exercise guide
│   │   ├── 06-async-effects/
│   │   │   ├── index.tsx        # Robot assistants
│   │   │   └── README.md        # Exercise guide
│   │   ├── 07-context-api/
│   │   │   ├── index.tsx        # Family trees
│   │   │   └── README.md        # Exercise guide
│   │   ├── 08-tailwindcss/
│   │   │   ├── index.tsx        # LEGO pieces
│   │   │   └── README.md        # Exercise guide
│   │   └── 09-ssr-ssg/
│   │       ├── index.tsx        # Restaurants
│   │       └── README.md        # Exercise guide
│   ├── main.tsx                 # Control center
│   └── index.css               # Global styles
├── tests/
│   └── __tests__/              # Quality control
├── package.json                # Toolbox
└── README.md                  # Instruction manual
```

## Troubleshooting 🔧

If you encounter any issues:
1. Make sure you're in the correct directory (like being in the right room)
2. Check that all dependencies are installed (like having all your tools)
3. Look for error messages in the terminal (like reading warning signs)
4. Check the browser's console for any errors (like checking a car's dashboard)
5. Make sure you're using the correct Node.js version (like using the right key)

## Learning Resources 📚
- [React Documentation](https://reactjs.org/docs/getting-started.html) (like a recipe book)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) (like a dictionary)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) (like a quality control manual)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) (like a LEGO instruction manual)

Happy coding! 🎉 

# React Fundamentals with TypeScript

> **Completion Time:** 2 hours  
> **Prerequisites:** JavaScript basics, TypeScript fundamentals

Learn React, the most popular library for building user interfaces. This exercise covers React fundamentals including components, props, state, and hooks using TypeScript.

## 🎯 What You'll Learn

By the end of this exercise, you'll understand:
- What React is and why it's popular
- How to create functional components with TypeScript
- Props and how to pass data between components
- State management with the useState hook
- Event handling in React
- Conditional rendering and lists
- Component lifecycle with useEffect
- How to build a small interactive application

## 📖 Background

**React** is a JavaScript library for building user interfaces, especially web applications. Think of it like building with LEGO blocks - you create small, reusable pieces (components) and combine them to build complex applications.

**Key Concepts:**
- **Components** = Reusable pieces of UI (like LEGO blocks)
- **Props** = Data passed down to components (like function parameters)
- **State** = Data that can change over time (like variables that trigger re-renders)
- **Hooks** = Special functions that let you "hook into" React features

**Why React?**
- **Reusable Components** - Write once, use everywhere
- **Virtual DOM** - Fast updates and rendering
- **Huge Ecosystem** - Tons of libraries and resources
- **Industry Standard** - Used by Facebook, Netflix, Airbnb, and thousands of companies

## 🚀 Quick Start (5 Minutes)

### Step 1: Set Up Your React Project

```bash
# Navigate to the React exercise directory
cd exercises/03-react

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

Your browser should open to `http://localhost:3000` showing the React exercises!

### Step 2: Complete the Exercises

The exercises are located in `src/exercises/` and are numbered 01-09:

1. **01-components** - Build reusable UI components (Button, Card, UserProfile, etc.)
2. **02-hooks** - Learn React hooks (useState, useEffect, custom hooks)
3. **03-forms** - Handle user input and form validation
4. **04-routing** - Navigate between pages with React Router
5. **05-state-management** - Manage complex application state
6. **06-async-effects** - Handle API calls and side effects
7. **07-context-api** - Share state across components
8. **08-tailwindcss** - Style components with Tailwind CSS
9. **09-ssr-ssg** - Server-side rendering and static generation

### Step 3: Start with Exercise 1

Open `src/exercises/01-components/index.tsx` and implement the TODO components:

- Replace `throw new Error(...)` with actual component implementations
- Each exercise has detailed comments explaining what to build
- Run tests with `pnpm test` to check your progress

Congratulations! You're ready to start learning React! 🎉

## 🎬 YouTube Tutorials

Here are excellent tutorials to help you master React fundamentals:

### React Fundamentals
- **[React Tutorial for Beginners](https://www.youtube.com/watch?v=wIyHSOugGGw)** by Dave Gray (9 hours) ⭐ **RECOMMENDED**
  - Comprehensive React course perfect for beginners
  - Covers everything from basics to advanced concepts
  - Hands-on projects and practical examples
  - Excellent step-by-step approach

- **[React Tutorial for Beginners](https://www.youtube.com/watch?v=SqcY0GlETPk)** by Programming with Mosh (1.5 hours)
  - Perfect comprehensive introduction to React
  - Covers components, props, state, and hooks
  - Excellent for complete beginners

- **[Full React Course 2024](https://www.youtube.com/watch?v=bMknfKXIFA8)** by freeCodeCamp (11 hours)
  - Comprehensive course covering everything
  - Includes multiple projects and practical examples
  - Great for deep learning

### React Quick Start
- **[React in 100 Seconds](https://www.youtube.com/watch?v=Tn6-PIqc4UM)** by Fireship (100 seconds)
  - Lightning-fast overview of React concepts
  - Perfect for getting the big picture quickly

- **[Learn React in 30 Minutes](https://www.youtube.com/watch?v=hQAHSlTtcmY)** by Web Dev Simplified (30 minutes)
  - Focused, practical introduction
  - Covers essential concepts quickly

### React Hooks Deep Dive
- **[React Hooks Tutorial](https://www.youtube.com/watch?v=O6P86uwfdR0)** by Net Ninja (playlist, ~3 hours total)
  - Comprehensive coverage of all React hooks
  - useState, useEffect, useContext, and more
  - Essential for modern React development

- **[React useState Hook Tutorial](https://www.youtube.com/watch?v=O6P86uwfdR0)** by Codevolution (15 minutes)
  - Focused explanation of the most important hook
  - Clear examples and use cases

### React with TypeScript
- **[React + TypeScript Tutorial for Beginners](https://www.youtube.com/watch?v=TiSGujM22OI)** by Codevolution (45 minutes)
  - Essential for TypeScript developers
  - Shows how to properly type React components

- **[React TypeScript Crash Course](https://www.youtube.com/watch?v=jrKcJxF0lAU)** by Traversy Media (1 hour)
  - Practical approach to React with TypeScript
  - Includes real-world examples

### React Practical Projects
- **[Build a Todo App with React](https://www.youtube.com/watch?v=pCA4qpQDZD8)** by Tyler Potts (45 minutes)
  - Hands-on project building
  - Covers state management and event handling

**💡 Tip:** Start with the React in 100 Seconds overview, then dive into the comprehensive Programming with Mosh tutorial. Practice with the Todo app project to reinforce your learning.

## 📚 Core React Concepts

### 1. Components and JSX

```typescript
import React from 'react';

// Functional Component with TypeScript
interface GreetingProps {
  name: string;
  age?: number; // Optional prop
}

const Greeting: React.FC<GreetingProps> = ({ name, age = 18 }) => {
  return (
    <div>
      <h2>Hello, {name}!</h2>
      {age && <p>You are {age} years old.</p>}
    </div>
  );
};

export default Greeting;
```

### 2. Props (Properties)

```typescript
import React from 'react';

interface StudentCardProps {
  student: {
    id: number;
    name: string;
    major: string;
    gpa: number;
  };
  showGPA?: boolean;
}

const StudentCard: React.FC<StudentCardProps> = ({ student, showGPA = true }) => {
  return (
    <div className="student-card">
      <h3>{student.name}</h3>
      <p>Major: {student.major}</p>
      {showGPA && <p>GPA: {student.gpa.toFixed(2)}</p>}
    </div>
  );
};
```

### 3. State with useState Hook

```typescript
import React, { useState } from 'react';

const Counter: React.FC = () => {
  // State variable and setter function
  const [count, setCount] = useState<number>(0);
  const [message, setMessage] = useState<string>('Click the button!');

  const handleIncrement = (): void => {
    setCount(count + 1);
    setMessage(`Count is now ${count + 1}`);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <p>{message}</p>
      <button onClick={handleIncrement}>
        Increment
      </button>
    </div>
  );
};
```

### 4. Event Handling

```typescript
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log('Submitted:', { name, email });
    // Handle form submission
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Your name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
      />
      <button type="submit">Submit</button>
    </form>
  );
};
```

### 5. Lists and Conditional Rendering

```typescript
import React from 'react';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  const completedTasks = tasks.filter(task => task.completed);
  const pendingTasks = tasks.filter(task => !task.completed);

  return (
    <div>
      <h3>Task List</h3>
      
      {tasks.length === 0 ? (
        <p>No tasks available!</p>
      ) : (
        <>
          <h4>Pending Tasks ({pendingTasks.length})</h4>
          <ul>
            {pendingTasks.map(task => (
              <li key={task.id} style={{ color: 'red' }}>
                {task.title}
              </li>
            ))}
          </ul>

          <h4>Completed Tasks ({completedTasks.length})</h4>
          <ul>
            {completedTasks.map(task => (
              <li key={task.id} style={{ color: 'green', textDecoration: 'line-through' }}>
                {task.title}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
```

### 6. useEffect Hook

```typescript
import React, { useState, useEffect } from 'react';

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Effect runs after component mounts
  useEffect(() => {
    // Simulate API call
    const fetchUser = async () => {
      try {
        setLoading(true);
        // Replace with real API call
        setTimeout(() => {
          setUser({
            name: 'John Doe',
            email: 'john@duke.edu',
            major: 'Computer Science'
          });
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching user:', error);
        setLoading(false);
      }
    };

    fetchUser();
  }, []); // Empty dependency array means run once on mount

  if (loading) {
    return <div>Loading user data...</div>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      {user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Major: {user.major}</p>
        </div>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
};
```

## 📚 Exercise Overview

Complete these 9 exercises to master React development:

### Exercise 1: Components 🧩
Build reusable UI components:
- **Button** - Interactive button with variants and sizes
- **Card** - Container component with title and content
- **UserProfile** - Display user information with avatar
- **TodoList** - List component with checkboxes
- **SearchInput** - Debounced search input field

### Exercise 2: Hooks 🎣
Learn React hooks and state management:
- **useCounter** - Custom hook for counting
- **useTimer** - Timer hook with start/pause/reset
- **useFetch** - Data fetching hook with loading states
- **useLocalStorage** - Persist state in localStorage
- **useDebounce** - Debounce values for performance

### Exercise 3: Forms 📝
Handle user input and validation:
- **useForm** - Custom form management hook
- **FormField** - Reusable form input component
- **RegistrationForm** - Complete form with validation
- **SurveyForm** - Multi-field form with different input types

### Exercise 4: Routing 🛣️
Navigate between pages:
- **Router setup** - Configure React Router
- **Navigation** - Link between pages
- **Dynamic routes** - Handle URL parameters
- **Protected routes** - Authentication-based routing

### Exercise 5: State Management 🧠
Manage complex application state:
- **TodoList** - Task management with filters
- **DataFetcher** - API data with loading states
- **Counter** - Complex state with useReducer
- **ShoppingCart** - Context-based state sharing

### Exercise 6: Async Effects ⚡
Handle side effects and API calls:
- **FetchUser** - Load user data from API
- **PollingTime** - Update time every second
- **DataSubscription** - Real-time data updates

### Exercise 7: Context API 🌐
Share state across components:
- **ThemeProvider** - Global theme management
- **AuthProvider** - User authentication context
- **NotificationProvider** - App-wide notifications

### Exercise 8: Tailwind CSS 🎨
Style components with utility classes:
- **Responsive design** - Mobile-first layouts
- **Component styling** - Beautiful UI components
- **Dark mode** - Theme switching

### Exercise 9: SSR/SSG 🚀
Server-side rendering and static generation:
- **Static pages** - Pre-rendered content
- **Dynamic routes** - Server-side data fetching
- **Performance optimization** - Fast loading pages

## 🔍 Common React Patterns

### 1. Lifting State Up

```typescript
// When multiple components need the same state, move it to their common parent
const ParentComponent: React.FC = () => {
  const [sharedData, setSharedData] = useState<string>('');

  return (
    <div>
      <ChildA data={sharedData} onUpdate={setSharedData} />
      <ChildB data={sharedData} />
    </div>
  );
};
```

### 2. Composition vs Inheritance

```typescript
// React favors composition over inheritance
interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="card-content">
        {children}
      </div>
    </div>
  );
};

// Usage
<Card title="Student Info">
  <p>Name: John Doe</p>
  <p>Major: CS</p>
</Card>
```

## ✅ Success Criteria

- [ ] **Exercise 1**: Built all 5 reusable components (Button, Card, UserProfile, TodoList, SearchInput)
- [ ] **Exercise 2**: Implemented all custom hooks (useCounter, useTimer, useFetch, useLocalStorage, useDebounce)
- [ ] **Exercise 3**: Created form components with validation (useForm, FormField, RegistrationForm, SurveyForm)
- [ ] **Exercise 4**: Set up routing with React Router (navigation, dynamic routes, protected routes)
- [ ] **Exercise 5**: Managed complex state (TodoList, DataFetcher, Counter with useReducer, Context API)
- [ ] **Exercise 6**: Handled async effects (API calls, timers, real-time updates)
- [ ] **Exercise 7**: Implemented Context API for global state (Theme, Auth, Notifications)
- [ ] **Exercise 8**: Styled components with Tailwind CSS (responsive design, dark mode)
- [ ] **Exercise 9**: Built SSR/SSG pages (static generation, server-side rendering)
- [ ] All tests pass when running `pnpm test`
- [ ] Can explain React concepts and patterns you implemented

## 🚀 Bonus Challenges

1. **Custom Hooks:** Create reusable hooks for common logic
2. **Context API:** Share state across multiple components without prop drilling
3. **Error Boundaries:** Handle JavaScript errors in component tree
4. **Performance:** Use React.memo and useMemo for optimization
5. **Testing:** Write unit tests for your components

## 🎉 What's Next?

You're now ready to learn **Next.js**, a React framework that adds server-side rendering, routing, and other powerful features. Next.js builds on everything you've learned here!

## 💡 Pro Tips

- **Think in Components:** Break your UI into small, reusable pieces
- **Keep Components Small:** If a component is too big, split it into smaller ones
- **Use TypeScript:** It helps catch errors and provides better development experience
- **State Location:** Keep state as close to where it's used as possible
- **React DevTools:** Install the browser extension for debugging React apps 