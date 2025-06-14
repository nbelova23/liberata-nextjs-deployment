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