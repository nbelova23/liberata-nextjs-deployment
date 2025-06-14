// src/index.ts
// This is the main entry point for all R2 exercises.
// To run a specific exercise, import it below and call its function.
// Example: import { example as basicExample } from './01-basic-operations';
//          basicExample(env);

// Import your exercises here:
// import { example as basicExample } from './01-basic-operations';
// import { example as advancedExample } from './02-advanced-operations';

export default {
  async fetch(request: Request, env: any, ctx: any) {
    // Uncomment the exercise you want to run:
    // await basicExample(env);
    // await advancedExample(env);

    // For now, just return a hello message:
    return new Response('Hello from R2 Storage Exercises! Edit src/index.ts to run your code.', {
      headers: { 'content-type': 'text/plain' },
    });
  },
}; 