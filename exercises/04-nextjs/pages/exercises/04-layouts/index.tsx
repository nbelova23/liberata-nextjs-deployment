/**
 * Exercise 4: Layouts in Next.js
 * 
 * INSTRUCTIONS:
 * 1. Create a shared layout component at pages/exercises/04-layouts/components/Layout.tsx
 * 2. Add a header and footer to your layout
 * 3. Create a nested layout for the blog section
 * 4. Use the layout in multiple pages
 * 
 * LEARNING GOALS:
 * - Understand how to create and use layouts in Next.js
 * - Learn about nested layouts and layout composition
 * - Practice component composition and prop drilling
 * 
 * DOCUMENTATION:
 * - Layouts: https://nextjs.org/docs/basic-features/layouts
 * - Nested Layouts: https://nextjs.org/docs/basic-features/layouts#nesting-layouts
 * - Layout Props: https://nextjs.org/docs/basic-features/layouts#layout-props
 */

import Link from 'next/link';

export default function Layouts() {
  return (
    <div className="max-w-xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Exercise 4: Layouts</h1>
      <p className="mb-4">In this exercise, you'll learn about:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Creating shared layouts</li>
        <li>Nested layouts</li>
        <li>Layout composition</li>
      </ul>
      <p className="mb-2">Edit this file at <code>pages/exercises/04-layouts/index.tsx</code> to get started.</p>
      <p className="mb-2">Try creating a layout with a header and footer!</p>
      <p className="text-gray-600">See the README for more details and documentation links.</p>
    </div>
  );
} 