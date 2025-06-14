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
   - Make changes and see them update instantly (like magic!)
   - Use the browser's developer tools (F12) to peek behind the curtain

3. **Run Tests**
   ```bash
   pnpm test
   ```
   Keep this running in a separate terminal to see test results in real-time.

## Exercise Structure 🏗️

### Core Exercises (Start Here!) 🌟

### 1. Components (01-components.tsx) 🧩
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

### 2. Hooks (02-hooks.tsx) 🎣
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

### 3. Forms (03-forms.tsx) 📝
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

### 4. Routing (04-routing.tsx) 🗺️
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

### 5. State Management (05-state-management.tsx) 🧠
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

### 6. Async Effects (06-async-effects.tsx) 🕒
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

### 7. Context API (07-context-api.tsx) 🎭
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

### 8. Tailwind CSS (08-tailwindcss.tsx) 🎨
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

### 9. SSR & SSG (09-ssr-ssg.tsx) 🚀
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

# Run tests for a specific exercise
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

## Project Structure 📁
```
exercises/03-react/
├── src/
│   ├── 01-components.tsx        # Building blocks
│   ├── 02-hooks.tsx             # Special tools
│   ├── 03-forms.tsx             # Conversations
│   ├── 04-routing.tsx           # Navigation
│   ├── 05-state-management.tsx # Memory
│   ├── 06-async-effects.tsx    # Robot assistants
│   ├── 07-context-api.tsx      # Family trees
│   ├── 08-tailwindcss.tsx      # LEGO pieces
│   ├── 09-ssr-ssg.tsx          # Restaurants
│   └── main.tsx                 # Control center
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

## 🚀 Quick Start (20 Minutes)

### Step 1: Set Up Your React Project

```bash
# Create a new branch for this exercise
git checkout -b feature/react-basics-YOUR_NAME

# Navigate to the React exercise directory
cd exercises/03-react

# Install dependencies
npm install

# Start the development server
npm start
```

Your browser should open to `http://localhost:3000` showing a React app!

### Step 2: Create Your First Component

Create `src/components/Welcome.tsx`:

```typescript
import React from 'react';

interface WelcomeProps {
  name: string;
  university: string;
}

const Welcome: React.FC<WelcomeProps> = ({ name, university }) => {
  return (
    <div className="welcome">
      <h1>Hello, {name}!</h1>
      <p>Welcome to React development at {university}</p>
    </div>
  );
};

export default Welcome;
```

### Step 3: Use Your Component

Edit `src/App.tsx`:

```typescript
import React from 'react';
import Welcome from './components/Welcome';
import './App.css';

function App() {
  return (
    <div className="App">
      <Welcome name="Your Name" university="Duke University" />
    </div>
  );
}

export default App;
```

Congratulations! You've created your first React component with TypeScript! 🎉

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

## 🛠️ Hands-On Project: Student Dashboard

Build a student dashboard that demonstrates all the concepts you've learned:

### Project Structure

```typescript
// src/types/Student.ts
export interface Student {
  id: number;
  name: string;
  email: string;
  major: string;
  courses: Course[];
  gpa: number;
}

export interface Course {
  id: number;
  code: string;
  name: string;
  credits: number;
  grade?: 'A' | 'B' | 'C' | 'D' | 'F';
}
```

### Components to Build

1. **StudentCard** - Display individual student information
2. **CourseList** - Show student's courses
3. **AddCourseForm** - Form to add new courses
4. **GPACalculator** - Calculate and display GPA
5. **Dashboard** - Main component that combines everything

### Features to Implement

- [ ] Display student information
- [ ] Show list of enrolled courses
- [ ] Add new courses through a form
- [ ] Calculate GPA automatically
- [ ] Filter courses by completion status
- [ ] Search functionality for courses

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

- [ ] Understand React component architecture
- [ ] Can create functional components with TypeScript
- [ ] Successfully use props to pass data between components
- [ ] Implemented state management with useState
- [ ] Used useEffect for side effects
- [ ] Built a complete interactive component (student dashboard)
- [ ] Handled user events (clicks, form submissions)
- [ ] Rendered lists and conditional content
- [ ] Can explain React concepts in your own words

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