/**
 * Exercise 8: Testing in Next.js
 * 
 * INSTRUCTIONS:
 * 1. Set up Jest and React Testing Library
 * 2. Write unit tests for components
 * 3. Add integration tests for pages
 * 4. Set up end-to-end tests with Cypress
 * 
 * LEARNING GOALS:
 * - Understand testing strategies in Next.js
 * - Learn how to test components and pages
 * - Practice writing different types of tests
 * 
 * DOCUMENTATION:
 * - Testing: https://nextjs.org/docs/testing
 * - Jest: https://jestjs.io/
 * - React Testing Library: https://testing-library.com/docs/react-testing-library/intro/
 */

import Link from 'next/link';

export default function Testing() {
  return (
    <div className="max-w-xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Exercise 8: Testing</h1>
      <p className="mb-4">In this exercise, you'll learn about:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Unit testing with Jest</li>
        <li>Component testing with React Testing Library</li>
        <li>End-to-end testing with Cypress</li>
      </ul>
      <p className="mb-2">Edit this file at <code>pages/exercises/08-testing/index.tsx</code> to get started.</p>
      <p className="mb-2">Try writing tests for your components!</p>
      <p className="text-gray-600">See the README for more details and documentation links.</p>
    </div>
  );
} 