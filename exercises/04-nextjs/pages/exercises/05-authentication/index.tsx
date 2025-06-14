/**
 * Exercise 5: Authentication in Next.js
 * 
 * INSTRUCTIONS:
 * 1. Set up NextAuth.js in your project
 * 2. Create a sign-in page with email/password authentication
 * 3. Add protected routes that require authentication
 * 4. Implement a user profile page
 * 
 * LEARNING GOALS:
 * - Understand authentication in Next.js
 * - Learn how to protect routes
 * - Practice handling user sessions
 * 
 * DOCUMENTATION:
 * - NextAuth.js: https://next-auth.js.org/
 * - Authentication: https://nextjs.org/docs/authentication
 * - API Routes: https://nextjs.org/docs/api-routes/introduction
 */

import Link from 'next/link';

export default function Authentication() {
  return (
    <div className="max-w-xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Exercise 5: Authentication</h1>
      <p className="mb-4">In this exercise, you'll learn about:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Setting up NextAuth.js</li>
        <li>Creating protected routes</li>
        <li>Handling user sessions</li>
      </ul>
      <p className="mb-2">Edit this file at <code>pages/exercises/05-authentication/index.tsx</code> to get started.</p>
      <p className="mb-2">Try implementing a sign-in page with NextAuth.js!</p>
      <p className="text-gray-600">See the README for more details and documentation links.</p>
    </div>
  );
} 