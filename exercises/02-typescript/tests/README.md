# Understanding TypeScript Tests

This directory contains the test files for the TypeScript exercises. Let's understand how the testing structure works:

## Directory Structure

```
exercises/02-typescript/
├── src/                    # Source code directory
│   ├── 01-basic-types.ts
│   ├── 02-interfaces.ts
│   ├── 03-functions.ts
│   └── 04-generics.ts
└── tests/
    ├── __tests__/         # Test files directory
    │   ├── 01-basic-types.test.ts
    │   ├── 02-interfaces.test.ts
    │   ├── 03-functions.test.ts
    │   └── 04-generics.test.ts
    └── README.md          # This file
```

## How Tests Work

1. **File Naming Convention**:
   - Source files are in the `src` directory (e.g., `01-basic-types.ts`)
   - Test files are in the `__tests__` directory with `.test.ts` extension (e.g., `01-basic-types.test.ts`)
   - The `__tests__` directory is a special name that Jest (our testing framework) automatically recognizes

2. **Test Structure**:
   ```typescript
   // Example from 01-basic-types.test.ts
   import { getName, getNames } from '../../src/01-basic-types';

   describe('Basic Types', () => {
     it('returns the name of a person', () => {
       const person = { name: 'John', age: 30 };
       expect(getName(person)).toBe('John');
     });
   });
   ```

   - `describe`: Groups related tests together
   - `it`: Defines individual test cases
   - `expect`: Makes assertions about the code's behavior

3. **Running Tests**:
   ```bash
   # Run all tests
   npm test

   # Run tests for a specific file
   npm test 01-basic-types

   # Run tests in watch mode (tests run automatically when files change)
   npm test -- --watch
   ```

## Why We Use Tests

1. **Learning Tool**:
   - Tests serve as examples of how your code should work
   - They show the expected input and output for each function
   - They help you understand the requirements

2. **Verification**:
   - Tests verify that your implementation is correct
   - They catch errors and edge cases you might miss
   - They ensure your code meets the requirements

3. **Type Checking**:
   - Tests help verify that your types are correct
   - They show how TypeScript types work in practice
   - They demonstrate type safety in action

## Example: How Tests Guide Implementation

Let's look at how a test file guides the implementation:

```typescript
// In 01-basic-types.test.ts
describe('getName', () => {
  it('returns the name of a person', () => {
    const person = { name: 'John', age: 30 };
    expect(getName(person)).toBe('John');
  });
});

// In 01-basic-types.ts
export function getName(person: Person): string {
  return person.name;
}
```

The test:
1. Shows what the function should do
2. Provides example input data
3. Shows the expected output
4. Helps you understand the required types

## Tips for Using Tests

1. **Read the Tests First**:
   - Look at the test file before implementing the code
   - Understand what the function should do
   - Note the expected input and output types

2. **Use Tests as Documentation**:
   - Tests show how to use your functions
   - They demonstrate edge cases
   - They provide examples of valid input

3. **Let Tests Guide Your Implementation**:
   - Start with the simplest test case
   - Add more complex cases as you go
   - Make sure all tests pass before moving on

4. **Watch for Type Errors**:
   - TypeScript will show errors in your IDE
   - Fix type errors before running tests
   - Use the test file to understand the correct types

## Common Test Patterns

1. **Basic Assertions**:
   ```typescript
   expect(result).toBe(expected);        // Exact equality
   expect(result).toEqual(expected);     // Deep equality
   expect(result).toBeTruthy();          // Truthy value
   expect(result).toBeFalsy();           // Falsy value
   ```

2. **Array Testing**:
   ```typescript
   expect(array).toHaveLength(3);        // Check array length
   expect(array).toContain(item);        // Check if array contains item
   expect(array).toEqual([1, 2, 3]);     // Check array contents
   ```

3. **Error Testing**:
   ```typescript
   expect(() => {
     // Code that should throw
   }).toThrow();
   ```

## Debugging Tests and Code

Debugging is an essential skill in development. Here's how to debug your TypeScript code and tests:

### Using VS Code Debugger

1. **Setting Up Debug Configuration**:
   Add this to your `.vscode/launch.json`:
   ```json
   {
     "version": "0.2.0",
     "configurations": [
       {
         "type": "node",
         "request": "launch",
         "name": "Debug Current Test File",
         "program": "${workspaceFolder}/node_modules/jest/bin/jest",
         "args": [
           "${fileBasename}",
           "--config",
           "jest.config.js"
         ],
         "console": "integratedTerminal",
         "internalConsoleOptions": "neverOpen"
       }
     ]
   }
   ```

2. **Adding Breakpoints**:
   - Click the line number in VS Code to add a red dot (breakpoint)
   - Or press F9 on the line you want to debug
   - You can add breakpoints in both test files and source files

3. **Starting Debug Session**:
   - Open the test file you want to debug
   - Press F5 or click the "Run and Debug" button
   - The debugger will stop at your breakpoints

4. **Debug Controls**:
   - F5: Continue execution
   - F10: Step over (execute current line)
   - F11: Step into (go into function)
   - Shift+F11: Step out (exit current function)
   - Shift+F5: Stop debugging

### Debugging Tips

1. **Watch Variables**:
   - In the Debug sidebar, use the "Watch" section
   - Add variables you want to track
   - See their values update as you step through code

2. **Debug Console**:
   - Use `console.log()` in your code
   - View output in the Debug Console
   - Helpful for quick debugging without breakpoints

3. **Conditional Breakpoints**:
   - Right-click on a breakpoint
   - Add a condition (e.g., `i > 5`)
   - Breakpoint only triggers when condition is true

4. **Debugging Tests**:
   ```typescript
   describe('getName', () => {
     it('returns the name of a person', () => {
       const person = { name: 'John', age: 30 };
       // Add breakpoint here to inspect person object
       const result = getName(person);
       // Add breakpoint here to inspect result
       expect(result).toBe('John');
     });
   });
   ```

### Common Debugging Scenarios

1. **Type Errors**:
   - Set breakpoint before the error
   - Inspect variable types in the debugger
   - Check if types match what you expect

2. **Test Failures**:
   - Set breakpoint at the failing assertion
   - Compare actual vs expected values
   - Step through the code to find the issue

3. **Infinite Loops**:
   - Set breakpoint in the loop
   - Step through to see why it's not terminating
   - Check loop conditions and variables

4. **Undefined Values**:
   - Set breakpoint where value is used
   - Step backwards to find where it's set
   - Check if the value is properly initialized

### Debugging Best Practices

1. **Start Small**:
   - Debug one test at a time
   - Focus on the simplest case first
   - Add complexity gradually

2. **Use Console Logging**:
   ```typescript
   function getName(person: Person): string {
     console.log('Input person:', person);
     const result = person.name;
     console.log('Result:', result);
     return result;
   }
   ```

3. **Check Type Information**:
   - Hover over variables to see types
   - Use the debugger to inspect object shapes
   - Verify type assertions are correct

4. **Isolate Issues**:
   - Comment out parts of the code
   - Test small pieces independently
   - Add temporary console logs

Remember: Debugging is a skill that improves with practice. Don't be afraid to use the debugger - it's one of the most powerful tools in your development toolkit!

## Next Steps

1. Start with the first exercise (`