/**
 * Exercise 1: Getting Started with Next.js
 * 
 * STEP-BY-STEP INSTRUCTIONS:
 * 
 * STEP 1: Edit this file to see hot reloading
 * - Change the text "Welcome to your first Next.js exercise!" below
 * - Save the file and watch your browser update automatically!
 * 
 * STEP 2: Create reusable components (React concepts in Next.js)
 * - First, create a Button component at the top of this file:
 *   function Button({ children, variant = 'primary', ...props }) {
 *     const styles = variant === 'primary' ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-gray-500 hover:bg-gray-600 text-white';
 *     return <button className={`px-4 py-2 rounded transition-colors ${styles}`} {...props}>{children}</button>;
 *   }
 * 
 * - Then create a Card component:
 *   function Card({ title, children }) {
 *     return (
 *       <div className="bg-white shadow-md rounded-lg p-6 border">
 *         {title && <h3 className="text-lg font-bold mb-3">{title}</h3>}
 *         {children}
 *       </div>
 *     );
 *   }
 * 
 * STEP 3: Create a new About page using your components
 * - Create: pages/exercises/01-getting-started/about.tsx
 * - Use your Button and Card components in the About page
 * 
 * STEP 4: Add navigation with your Button component
 * - Use your Button component as a Link wrapper:
 *   <Link href="/exercises/01-getting-started/about">
 *     <Button>Go to About Page</Button>
 *   </Link>
 * 
 * - Try different button variants:
 *   <Button variant="secondary">Secondary Button</Button>
 * 
 * STEP 5: Use Card components for content organization
 * - Wrap content sections in Card components:
 *   <Card title="Getting Started">
 *     <p>Your content here...</p>
 *   </Card>
 * 
 * STEP 6: Style with Tailwind CSS
 * - Try changing "text-2xl" to "text-4xl" to make the heading bigger
 * - Try changing "text-blue-500" to "text-red-500" to make links red
 * - Add "bg-gray-100 p-4 rounded" to any div to give it a gray background
 * 
 * HINTS:
 * - Next.js automatically creates routes based on file names
 * - The Link component is already imported at the top
 * - Tailwind classes like "text-xl", "mb-4", "p-4" control size, margin, padding
 * - Save your files to see changes instantly!
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
      <p className="mb-4">Try changing this text to see hot reloading in action!</p>
      
      {/* TODO: Add your Link to the About page here (see STEP 3 in comments above) */}
      <div className="mt-4">
        <p className="text-gray-600">Add your navigation link here!</p>
      </div>
      
      <div className="mt-6 p-4 bg-yellow-100 rounded">
        <p className="text-yellow-800 text-sm">
          💡 <strong>Hint:</strong> Follow the step-by-step instructions in the comments at the top of this file!
        </p>
      </div>
    </div>
  );
} 