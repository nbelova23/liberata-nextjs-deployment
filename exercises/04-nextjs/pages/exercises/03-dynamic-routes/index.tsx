/**
 * Exercise 3: Dynamic Routes in Next.js
 * 
 * STEP-BY-STEP INSTRUCTIONS:
 * 
 * STEP 1: Create reusable components for posts
 * - Create a PostCard component (like Card from React exercises):
 *   function PostCard({ post }: any) {
 *     return (
 *       <div className="bg-white shadow-md rounded-lg p-6 border hover:shadow-lg transition-shadow">
 *         <h3 className="text-lg font-bold mb-2">{post.title}</h3>
 *         <p className="text-gray-600 mb-4">{post.body.substring(0, 100)}...</p>
 *         <Link href={`/exercises/03-dynamic-routes/posts/${post.id}`}>
 *           <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
 *             Read More
 *           </button>
 *         </Link>
 *       </div>
 *     );
 *   }
 * 
 * STEP 2: Create a posts list page
 * - Create: pages/exercises/03-dynamic-routes/posts/index.tsx
 * - Fetch all posts from: https://jsonplaceholder.typicode.com/posts
 * - Use PostCard component to display each post
 * 
 * STEP 3: Create the dynamic route file
 * - Create: pages/exercises/03-dynamic-routes/posts/[id].tsx
 * - The filename [id].tsx creates a dynamic route
 * - This will match /posts/1, /posts/2, etc.
 * - Use your PostCard component or create a detailed PostView component
 * 
 * STEP 3: Add getStaticPaths function
 * - In [id].tsx, add:
 *   export async function getStaticPaths() {
 *     // TODO: Fetch all posts to get their IDs
 *     // TODO: Return { paths: [...], fallback: false }
 *   }
 * 
 * STEP 4: Add getStaticProps function
 * - In [id].tsx, add:
 *   export async function getStaticProps({ params }) {
 *     // TODO: Fetch single post using params.id
 *     // TODO: Return { props: { post } }
 *   }
 * 
 * STEP 5: Display the post data
 * - Update your component to receive { post } props
 * - Display post.title, post.body, etc.
 * 
 * HINTS:
 * - Use Link component: <Link href={`/exercises/03-dynamic-routes/posts/${post.id}`}>
 * - getStaticPaths tells Next.js which pages to pre-build
 * - params.id gives you the dynamic part of the URL
 * - fallback: false means show 404 for unknown routes
 * - Use router.query.id to access the ID in your component
 * 
 * API ENDPOINTS:
 * - All posts: https://jsonplaceholder.typicode.com/posts
 * - Single post: https://jsonplaceholder.typicode.com/posts/1
 * 
 * DOCUMENTATION:
 * - Dynamic Routes: https://nextjs.org/docs/routing/dynamic-routes
 * - getStaticPaths: https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
 * - getStaticProps: https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
 */

import Link from 'next/link';

function PostCard({ post }: any) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 border hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-bold mb-2">{post.title}</h3>
      <p className="text-gray-600 mb-4">
        {post.body.substring(0, 100)}...
      </p>

      <Link href={`/exercises/03-dynamic-routes/posts/${post.id}`}>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Read More
        </button>
      </Link>
    </div>
  );
}

export default function DynamicRoutes() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Exercise 3: Dynamic Routes</h1>
      <p className="mb-4">In this exercise, you'll learn about:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Dynamic routing with file-based routing</li>
        <li>Route parameters and query strings</li>
        <li>Nested dynamic routes</li>
      </ul>
      
      {/* TODO: Create your posts directory and files */}
      <div className="mb-6 p-4 border-2 border-dashed border-gray-300 rounded">
        <p className="text-gray-600 mb-2">Files you need to create:</p>
        <ul className="text-sm text-gray-500 space-y-1">
          <li>📁 pages/exercises/03-dynamic-routes/posts/index.tsx (posts list)</li>
          <li>📄 pages/exercises/03-dynamic-routes/posts/[id].tsx (single post)</li>
        </ul>
      </div>
      
      <div className="mt-6 p-4 bg-green-100 rounded">
        <p className="text-green-800 text-sm">
          💡 <strong>Start Here:</strong> Follow the step-by-step instructions in the comments above!
        </p>
        <p className="text-green-700 text-xs mt-1">
          1. Create posts/index.tsx → 2. Create posts/[id].tsx → 3. Add data fetching functions
        </p>
      </div>
    </div>
  );
} 