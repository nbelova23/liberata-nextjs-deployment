/**
 * Exercise 8: Testing in Next.js
 * 
 * STEP-BY-STEP INSTRUCTIONS:
 * 
 * STEP 1: Install testing dependencies (Jest config is already set up!)
 * - Run: pnpm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event
 * - Add test script to package.json: "test": "jest"
 * - jest.config.js and jest.setup.js are already configured ✅
 * 
 * STEP 2: Explore the existing test example
 * - Check: tests/__tests__/02-data-fetching.test.tsx (example test already exists!)
 * - Run: pnpm test to see it in action
 * 
 * STEP 3: Write your first component test
 * - Create: tests/__tests__/components/Button.test.tsx
 * - Test that button renders with correct text
 * - Test that onClick handler is called
 * 
 * STEP 4: Test a page component
 * - Create: tests/__tests__/pages/index.test.tsx
 * - Test that page renders without crashing
 * - Test that expected content is displayed
 * 
 * STEP 5: Add more advanced tests
 * - Test API routes with supertest
 * - Test forms and user interactions
 * - Mock external API calls
 * 
 * HINTS:
 * - Start with simple "does it render?" tests
 * - Use screen.getByText() to find elements
 * - fireEvent.click() to simulate clicks
 * - This is complex - focus on other exercises first
 * - Testing is important but hard for beginners
 * 
 * BEGINNER ALTERNATIVE:
 * - Skip this exercise initially
 * - Focus on building working features first
 * - Come back to testing later
 * - Manual testing is fine for learning
 * 
 * BASIC TEST EXAMPLE:
 * - test('renders hello world', () => {
 *     render(<HomePage />);
 *     expect(screen.getByText('Hello World')).toBeInTheDocument();
 *   });
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