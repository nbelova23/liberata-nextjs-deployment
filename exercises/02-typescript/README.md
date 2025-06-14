# TypeScript Exercises

Welcome to the TypeScript exercises! Here you'll learn the fundamentals of TypeScript through practical exercises.

## Understanding the Setup

### TypeScript Configuration (tsconfig.json)
The `tsconfig.json` file configures how TypeScript compiles your code. Key settings:
- `target`: Specifies which JavaScript version to compile to (ES2020)
- `strict`: Enables strict type checking
- `module`: Specifies module system (commonjs)
- `outDir`: Where compiled JavaScript files go
- `rootDir`: Where your TypeScript source files are

### Package Configuration (package.json)
The `package.json` file manages dependencies and scripts:
- `dependencies`: Libraries your project needs
- `devDependencies`: Tools for development
- `scripts`: Commands you can run (e.g., `pnpm tsc` to compile)

## Exercise Overview

You'll work through a series of exercises that cover:
- Basic types and interfaces
- Functions and type annotations
- Working with arrays and objects
- Type guards and assertions
- Generics

## Getting Started

1. Navigate to the exercise directory:
   ```bash
   cd exercises/02-typescript
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the TypeScript compiler in watch mode:
   ```bash
   pnpm tsc:watch
   ```

## Exercises

### 1. Basic Types
- Location: `src/01-basic-types.ts`
- Topics: strings, numbers, booleans, arrays
- Task: Implement the functions according to the type definitions
- Tests: `tests/__tests__/01-basic-types.test.ts`

### 2. Interfaces
- Location: `src/02-interfaces.ts`
- Topics: interface definition, optional properties
- Task: Create interfaces and implement the required functions
- Tests: `tests/__tests__/02-interfaces.test.ts`

### 3. Functions
- Location: `src/03-functions.ts`
- Topics: function types, parameters, return types
- Task: Implement the utility functions with proper types
- Tests: `tests/__tests__/03-functions.test.ts`

### 4. Type Guards
- Location: `src/04-type-guards.ts`
- Topics: typeof, instanceof, custom type guards
- Task: Create type guards to handle different data types
- Tests: `tests/__tests__/04-type-guards.test.ts`

### 5. Generics
- Location: `src/05-generics.ts`
- Topics: generic types, constraints
- Task: Implement generic data structures and functions
- Tests: `tests/__tests__/05-generics.test.ts`

## How to Complete Exercises

1. Read the type definitions and requirements in each exercise file
2. Implement the required functions
3. Run the tests to verify your implementation:
   ```bash
   pnpm test
   ```
4. Fix any type errors or failed tests
5. Move on to the next exercise

## Project Structure

```
02-typescript/
├── src/                    # Your implementation goes here
│   ├── 01-basic-types.ts
│   ├── 02-interfaces.ts
│   ├── 03-functions.ts
│   ├── 04-type-guards.ts
│   └── 05-generics.ts
├── tests/                  # Test files
│   └── __tests__/
├── package.json           # Project configuration
└── tsconfig.json         # TypeScript configuration
```

## Success Criteria

For each exercise:
- [ ] All type errors are resolved
- [ ] All tests pass
- [ ] Code follows TypeScript best practices
- [ ] You understand why each type is necessary

## Tips

1. Use the TypeScript compiler to catch errors early
2. Read the error messages carefully
3. Use the TypeScript documentation as a reference
4. Try to understand why each type is necessary

## Next Steps

After completing these exercises, you'll:
1. Understand TypeScript's type system
2. Be comfortable with interfaces and generics
3. Know how to write type-safe code

Move on to the [React exercises](../03-react/README.md) when you're ready!

# TypeScript Fundamentals

> **Completion Time:** 1 hour  
> **Prerequisites:** Basic JavaScript knowledge

Learn TypeScript, the strongly-typed superset of JavaScript that helps you catch errors before they reach production. This exercise covers essential TypeScript concepts you'll need for modern web development.

## 🎯 What You'll Learn

By the end of this exercise, you'll understand:
- What TypeScript is and why it's valuable
- Basic type annotations (string, number, boolean, arrays)
- Object types and interfaces
- Function types and return types
- Union types and type guards
- Generic basics
- How to compile TypeScript to JavaScript

## 📖 Background

**TypeScript** is JavaScript with types. It's like having a smart assistant that checks your code for mistakes before you run it.

**Imagine you're writing an essay:**
- **JavaScript** = Writing without spellcheck (errors discovered later)
- **TypeScript** = Writing with spellcheck (errors caught as you type)

**Key Benefits:**
- **Catch errors early** - Find bugs during development, not in production
- **Better tooling** - Autocomplete and refactoring support
- **Self-documenting code** - Types serve as inline documentation
- **Easier refactoring** - Safely change code across large projects

## 🚀 Quick Start (15 Minutes)

### Step 1: Set Up Your Development Environment

```bash
# Create a new branch for this exercise
git checkout -b feature/typescript-basics-YOUR_NAME

# Navigate to the TypeScript exercise directory
cd exercises/02-typescript

# Install TypeScript globally (if not already installed)
npm install -g typescript

# Verify TypeScript installation
tsc --version
```

### Step 2: Create Your First TypeScript File

Create `hello-typescript.ts`:

```typescript
// Your first TypeScript file
let message: string = "Hello, TypeScript!";
let count: number = 42;
let isComplete: boolean = false;

console.log(message);
console.log(`Count: ${count}, Complete: ${isComplete}`);
```

### Step 3: Compile and Run

```bash
# Compile TypeScript to JavaScript
tsc hello-typescript.ts

# This creates hello-typescript.js
# Run the JavaScript file
node hello-typescript.js
```

Congratulations! You've written and compiled your first TypeScript code! 🎉

## 🎬 YouTube Tutorials

Here are excellent tutorials to help you master TypeScript fundamentals:

### TypeScript Basics
- **[TypeScript Tutorial for Beginners 2022](https://www.youtube.com/watch?v=ahCwqrYpIuM)** by Net Ninja (2.5 hours) ⭐ **RECOMMENDED**
  - Comprehensive tutorial series perfect for beginners
  - Step-by-step approach with practical examples
  - Covers all essential TypeScript concepts you'll need

- **[TypeScript Tutorial for Beginners](https://www.youtube.com/watch?v=BwuLxPH8IDs)** by Programming with Mosh (1.5 hours)
  - Perfect comprehensive introduction
  - Covers all essential concepts with practical examples
  - Great for developers coming from JavaScript

- **[TypeScript Course for Beginners - Learn TypeScript from Scratch!](https://www.youtube.com/watch?v=BwuLxPH8IDs)** by Academind (3 hours)
  - In-depth coverage of TypeScript features
  - Includes practical projects and exercises

### Quick TypeScript Overviews
- **[TypeScript in 100 Seconds](https://www.youtube.com/watch?v=zQnBQ4tB3ZA)** by Fireship (100 seconds)
  - Lightning-fast overview of TypeScript
  - Perfect for getting the big picture quickly

- **[Learn TypeScript in 50 Minutes](https://www.youtube.com/watch?v=Z5iWr6Srsj8)** by Web Dev Simplified (50 minutes)
  - Focused, practical introduction
  - Great balance of theory and hands-on coding

### TypeScript with React
- **[TypeScript + React in 2024](https://www.youtube.com/watch?v=FJDVKeh7RJI)** by Jack Herrington (45 minutes)
  - Essential for React developers
  - Shows how TypeScript integrates with React components

### Advanced TypeScript Concepts
- **[TypeScript Generics Tutorial](https://www.youtube.com/watch?v=nViEqpgwxHE)** by Net Ninja (20 minutes)
  - Explains generics with clear examples
  - Important for understanding reusable type definitions

**💡 Tip:** Start with the 100-second overview to get oriented, then watch the comprehensive Mosh tutorial for deep understanding.

## 📚 Core TypeScript Concepts

### 1. Basic Type Annotations

```typescript
// Primitive types
let username: string = "john_doe";
let age: number = 25;
let isStudent: boolean = true;
let score: number = 95.5;

// Arrays
let colors: string[] = ["red", "blue", "green"];
let numbers: number[] = [1, 2, 3, 4, 5];

// Alternative array syntax
let fruits: Array<string> = ["apple", "banana", "orange"];
```

### 2. Object Types and Interfaces

```typescript
// Object type annotation
let person: { name: string; age: number; email: string } = {
  name: "Alice Johnson",
  age: 22,
  email: "alice@duke.edu"
};

// Interface (reusable type definition)
interface Student {
  id: number;
  name: string;
  major: string;
  gpa?: number; // Optional property
}

let student: Student = {
  id: 12345,
  name: "Bob Smith",
  major: "Computer Science"
  // gpa is optional, so we can omit it
};
```

### 3. Function Types

```typescript
// Function with parameter and return types
function calculateGrade(points: number, totalPoints: number): string {
  const percentage = (points / totalPoints) * 100;
  
  if (percentage >= 90) return "A";
  if (percentage >= 80) return "B";
  if (percentage >= 70) return "C";
  if (percentage >= 60) return "D";
  return "F";
}

// Arrow function with types
const greetStudent = (name: string, year: number): string => {
  return `Hello ${name}, welcome to year ${year}!`;
};

// Function type as variable
let validator: (input: string) => boolean;
validator = (email: string) => email.includes("@");
```

### 4. Union Types

```typescript
// Union types (can be one of several types)
let id: string | number;
id = "user123";  // OK
id = 42;         // OK
// id = true;    // Error!

function printId(id: string | number): void {
  // Type guard to handle different types
  if (typeof id === "string") {
    console.log(`String ID: ${id.toUpperCase()}`);
  } else {
    console.log(`Number ID: ${id.toFixed(0)}`);
  }
}
```

### 5. Type Aliases

```typescript
// Create custom type aliases
type Status = "pending" | "approved" | "rejected";
type UserRole = "student" | "teacher" | "admin";

interface User {
  name: string;
  role: UserRole;
  status: Status;
}

let currentUser: User = {
  name: "Emma Wilson",
  role: "student",
  status: "approved"
};
```

## 🛠️ Hands-On Exercises

### Exercise 1: Student Management System

Create a `student-manager.ts` file with the following:

```typescript
interface Course {
  code: string;
  name: string;
  credits: number;
  grade?: "A" | "B" | "C" | "D" | "F";
}

interface Student {
  id: number;
  name: string;
  email: string;
  major: string;
  courses: Course[];
}

// TODO: Implement these functions
function addStudent(name: string, email: string, major: string): Student {
  // Your implementation here
}

function enrollInCourse(student: Student, courseCode: string, courseName: string, credits: number): void {
  // Your implementation here
}

function calculateGPA(student: Student): number {
  // Your implementation here
}

function getStudentSummary(student: Student): string {
  // Your implementation here
}
```

### Exercise 2: Type Guards and Validation

```typescript
type APIResponse = {
  success: true;
  data: any;
} | {
  success: false;
  error: string;
};

// TODO: Implement a type guard function
function isSuccessResponse(response: APIResponse): response is { success: true; data: any } {
  // Your implementation here
}

// TODO: Use the type guard
function handleResponse(response: APIResponse): void {
  // Your implementation here
}
```

## 🔍 Common TypeScript Errors & Solutions

**Error:** `Type 'string' is not assignable to type 'number'`  
**Solution:** Check your variable types - you're trying to assign a string to a number variable

**Error:** `Property 'xyz' does not exist on type`  
**Solution:** Make sure the property exists in your interface or add it as optional with `?`

**Error:** `Cannot find name 'tsc'`  
**Solution:** Install TypeScript globally: `npm install -g typescript`

**Error:** `Object is possibly undefined`  
**Solution:** Use optional chaining `?.` or check if the object exists before using it

## 🎯 Practice Projects

1. **Library Management System**
   - Create interfaces for Books, Authors, and Library Members
   - Implement functions for checking out and returning books
   - Use union types for book status ("available" | "checked-out" | "reserved")

2. **Grade Calculator**
   - Create types for different assignment categories
   - Implement weighted grade calculations
   - Handle optional assignments and extra credit

3. **API Response Handler**
   - Create types for different API response shapes
   - Implement type guards for response validation
   - Handle error cases with proper typing

## ✅ Success Criteria

- [ ] Understand the difference between TypeScript and JavaScript
- [ ] Can write basic type annotations for variables
- [ ] Created at least 3 interfaces with different property types
- [ ] Implemented functions with parameter and return type annotations
- [ ] Used union types appropriately
- [ ] Successfully compiled TypeScript files to JavaScript
- [ ] Completed the student management system exercise
- [ ] Can explain when and why to use TypeScript

## 🚀 Bonus Challenges

1. **Generic Functions:** Learn to write functions that work with multiple types
2. **Utility Types:** Explore TypeScript's built-in utility types (`Partial`, `Pick`, `Omit`)
3. **Module System:** Practice importing and exporting TypeScript modules
4. **Configuration:** Set up a `tsconfig.json` file with custom compiler options
5. **Type Assertions:** Learn when and how to use type assertions safely

## 🎉 What's Next?

Now that you understand TypeScript fundamentals, you're ready to learn **React with TypeScript** in the next exercise. TypeScript makes React development much more reliable and enjoyable!

## 💡 Pro Tips

- **Start simple:** Add types gradually to existing JavaScript code
- **Use strict mode:** Enable `"strict": true` in tsconfig.json for better type checking
- **Leverage IntelliSense:** TypeScript provides amazing autocomplete in VS Code
- **Read error messages:** TypeScript errors are usually very helpful
- **Practice regularly:** Type annotation becomes natural with practice 