/**
 * Exercise 2: Data Fetching in Next.js
 * 
 * INSTRUCTIONS:
 * 1. Implement getServerSideProps to fetch data from JSONPlaceholder API
 * 2. Create a new page that uses getStaticProps instead
 * 3. Add a loading state while data is being fetched
 * 4. Handle any potential errors during data fetching
 * 
 * LEARNING GOALS:
 * - Understand different data fetching methods in Next.js
 * - Learn when to use server-side vs static data fetching
 * - Practice error handling and loading states
 * 
 * DOCUMENTATION:
 * - Data Fetching: https://nextjs.org/docs/basic-features/data-fetching
 * - getServerSideProps: https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
 * - getStaticProps: https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
 */

export default function DataFetching() {
  return (
    <div className="max-w-xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Exercise 2: Data Fetching</h1>
      <p className="mb-4">In this exercise, you'll learn about:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Server-side data fetching with <code>getServerSideProps</code></li>
        <li>Static data fetching with <code>getStaticProps</code></li>
        <li>Client-side data fetching with <code>useEffect</code> or SWR</li>
      </ul>
      <p className="mb-2">Edit this file at <code>pages/exercises/02-data-fetching/index.tsx</code> to get started.</p>
      <p className="mb-2">Try fetching data from an API and displaying it on the page!</p>
      <p className="text-gray-600">See the README for more details and documentation links.</p>
    </div>
  );
} 