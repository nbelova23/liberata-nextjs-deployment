# Debugging TypeScript Exercises

This guide will help you debug your TypeScript code and tests effectively. Debugging is a crucial skill in development, and these exercises are designed to help you practice it.

## Setting Up the Debugger

1. **Install VS Code**:
   - Download and install [Visual Studio Code](https://code.visualstudio.com/)
   - Install the "JavaScript Debugger" extension

2. **Configure Debug Settings**:
   Create a `.vscode/launch.json` file in your project root:
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

## Debugging Workflow

### 1. Understanding the Problem

Before debugging:
1. Read the test file to understand what's expected
2. Look at the error message or failing test
3. Identify where the problem might be

### 2. Setting Breakpoints

Add breakpoints in strategic locations:
```typescript
// In your test file
it('returns the name of a person', () => {
  const person = { name: 'John', age: 30 };
  // Add breakpoint here to inspect input
  const result = getName(person);
  // Add breakpoint here to inspect output
  expect(result).toBe('John');
});

// In your implementation file
export function getName(person: Person): string {
  // Add breakpoint here to inspect function parameters
  return person.name;
}
```

### 3. Starting a Debug Session

1. Open the test file you want to debug
2. Set your breakpoints
3. Press F5 or click the "Run and Debug" button
4. The debugger will stop at your breakpoints

### 4. Using Debug Controls

- **F5**: Continue execution
- **F10**: Step over (execute current line)
- **F11**: Step into (go into function)
- **Shift+F11**: Step out (exit current function)
- **Shift+F5**: Stop debugging

## Debugging Common Issues

### Type Errors

1. **Property Access Errors**:
   ```typescript
   // Error: Property 'name' does not exist on type 'Person'
   const name = person.name;
   ```
   - Set breakpoint before the error
   - Inspect the `person` object in the debugger
   - Check if the type definition matches the actual object

2. **Type Mismatch Errors**:
   ```typescript
   // Error: Type 'string' is not assignable to type 'number'
   const age: number = "30";
   ```
   - Set breakpoint at the assignment
   - Check the actual value and its type
   - Verify type definitions

### Test Failures

1. **Assertion Errors**:
   ```typescript
   // Error: Expected "John" but got "Jane"
   expect(getName(person)).toBe('John');
   ```
   - Set breakpoint at the assertion
   - Compare actual and expected values
   - Step through the function to find the issue

2. **Undefined Values**:
   ```typescript
   // Error: Cannot read property 'name' of undefined
   const name = person.name;
   ```
   - Set breakpoint before the error
   - Check if the object is properly initialized
   - Verify function parameters

## Debugging Tools

### 1. Watch Window

Add variables to watch:
1. Open the Debug sidebar
2. Go to the "Watch" section
3. Click the + button
4. Enter the variable name

Example watches:
```
person
person.name
typeof person
```

### 2. Debug Console

Use `console.log()` for quick debugging:
```typescript
function getName(person: Person): string {
  console.log('Input:', person);
  console.log('Type:', typeof person);
  const result = person.name;
  console.log('Result:', result);
  return result;
}
```

### 3. Conditional Breakpoints

Set conditions for breakpoints:
1. Right-click on a breakpoint
2. Select "Edit Breakpoint"
3. Enter a condition (e.g., `person.age > 30`)

## Debugging Best Practices

1. **Start Small**:
   - Debug one test at a time
   - Focus on the simplest case first
   - Add complexity gradually

2. **Use Type Information**:
   - Hover over variables to see types
   - Use the debugger to inspect object shapes
   - Verify type assertions

3. **Isolate Issues**:
   - Comment out parts of the code
   - Test small pieces independently
   - Add temporary console logs

4. **Document Your Findings**:
   - Note what you've tried
   - Record what worked and what didn't
   - Share your debugging process with others

## Common Debugging Patterns

### 1. Function Debugging

```typescript
function complexFunction(input: any): any {
  // Debug input
  console.log('Input:', input);
  
  // Debug intermediate steps
  const step1 = processStep1(input);
  console.log('Step 1:', step1);
  
  // Debug output
  const result = processStep2(step1);
  console.log('Result:', result);
  
  return result;
}
```

### 2. Array Debugging

```typescript
function processArray(items: any[]): any[] {
  // Debug array contents
  console.log('Array length:', items.length);
  console.log('First item:', items[0]);
  
  // Debug transformation
  const result = items.map(item => {
    console.log('Processing item:', item);
    return transformItem(item);
  });
  
  return result;
}
```

### 3. Object Debugging

```typescript
function processObject(obj: any): any {
  // Debug object structure
  console.log('Object keys:', Object.keys(obj));
  console.log('Object values:', Object.values(obj));
  
  // Debug nested properties
  console.log('Nested property:', obj.nested?.property);
  
  return transformedObject;
}
```

## Next Steps

1. Try debugging the first exercise
2. Practice using different debugging tools
3. Experiment with breakpoints and watch variables
4. Share your debugging experiences with others

Remember: Debugging is a skill that improves with practice. Don't be afraid to use the debugger - it's one of the most powerful tools in your development toolkit! 