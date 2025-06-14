/**
 * Exercise 3: Dynamic Routes in Next.js
 * 
 * INSTRUCTIONS:
 * 1. Create a new file at pages/exercises/03-dynamic-routes/posts/[id].tsx
 * 2. Implement getStaticPaths to generate static pages for all posts
 * 3. Implement getStaticProps to fetch data for each post
 * 4. Create a posts index page that lists all posts
 * 
 * LEARNING GOALS:
 * - Understand dynamic routing in Next.js
 * - Learn how to generate static pages for dynamic routes
 * - Practice data fetching with dynamic parameters
 * 
 * DOCUMENTATION:
 * - Dynamic Routes: https://nextjs.org/docs/routing/dynamic-routes
 * - getStaticPaths: https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
 * - getStaticProps: https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
 */

export default function DynamicRoutes() {
  return (
    <div className="max-w-xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Exercise 3: Dynamic Routes</h1>
      <p className="mb-4">In this exercise, you'll learn about:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Dynamic routing with file-based routing</li>
        <li>Route parameters and query strings</li>
        <li>Nested dynamic routes</li>
      </ul>
      <p className="mb-2">Edit this file at <code>pages/exercises/03-dynamic-routes/index.tsx</code> to get started.</p>
      <p className="mb-2">Try creating a dynamic route and displaying route parameters!</p>
      <p className="text-gray-600">See the README for more details and documentation links.</p>
    </div>
  );
} 