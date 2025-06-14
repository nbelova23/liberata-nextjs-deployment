/**
 * Exercise 6: State Management in Next.js
 * 
 * INSTRUCTIONS:
 * 1. Set up Zustand for global state management
 * 2. Create a shopping cart with state persistence
 * 3. Implement a product list with filtering
 * 4. Add a checkout flow with state
 * 
 * LEARNING GOALS:
 * - Understand state management in Next.js
 * - Learn when to use local vs global state
 * - Practice state persistence and hydration
 * 
 * DOCUMENTATION:
 * - Zustand: https://github.com/pmndrs/zustand
 * - React Context: https://reactjs.org/docs/context.html
 * - State Management: https://nextjs.org/docs/basic-features/data-fetching
 */

import Link from 'next/link';

export default function StateManagement() {
  return (
    <div className="max-w-xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Exercise 6: State Management</h1>
      <p className="mb-4">In this exercise, you'll learn about:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Global state management with Zustand</li>
        <li>State persistence and hydration</li>
        <li>Building a shopping cart</li>
      </ul>
      <p className="mb-2">Edit this file at <code>pages/exercises/06-state-management/index.tsx</code> to get started.</p>
      <p className="mb-2">Try building a shopping cart with state management!</p>
      <p className="text-gray-600">See the README for more details and documentation links.</p>
    </div>
  );
} 