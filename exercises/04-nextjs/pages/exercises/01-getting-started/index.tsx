/**
 * Exercise 1: Getting Started with Next.js
 * 
 * INSTRUCTIONS:
 * 1. This is your first Next.js page! Try editing this file to see hot reloading in action.
 * 2. Create a new page at pages/exercises/01-getting-started/about.tsx
 * 3. Add a link to your new page using Next.js Link component
 * 4. Try adding some Tailwind CSS classes to style your components
 * 
 * LEARNING GOALS:
 * - Understand Next.js file-based routing
 * - Learn how to create and link between pages
 * - Practice using Tailwind CSS for styling
 * 
 * DOCUMENTATION:
 * - Pages: https://nextjs.org/docs/basic-features/pages
 * - Routing: https://nextjs.org/docs/routing/introduction
 * - Link Component: https://nextjs.org/docs/api-reference/next/link
 */

import Link from 'next/link';

export default function GettingStarted() {
  return (
    <div className="max-w-xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Exercise 1: Getting Started</h1>
      <p className="mb-4">Welcome to your first Next.js exercise! In this exercise, you'll learn about:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Next.js file-based routing</li>
        <li>Pages and layouts</li>
        <li>Basic navigation and linking</li>
      </ul>
      <p className="mb-2">Edit this file at <code>pages/exercises/01-getting-started/index.tsx</code> to get started.</p>
      <p className="mb-2">Try adding a new page or a link to another route!</p>
      <p className="text-gray-600">See the README for more details and documentation links.</p>
    </div>
  );
} 