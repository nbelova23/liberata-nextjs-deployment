/**
 * Exercise 2: Data Fetching in Next.js
 * 
 * STEP-BY-STEP INSTRUCTIONS:
 * 
 * STEP 1: Create a custom useFetch hook (React concept)
 * - Add this hook at the top of the file:
 *   function useFetch(url: string) {
 *     const [data, setData] = useState(null);
 *     const [loading, setLoading] = useState(true);
 *     const [error, setError] = useState(null);
 *     
 *     useEffect(() => {
 *       // TODO: Implement fetch logic with try/catch
 *       // TODO: Set loading, data, and error states
 *     }, [url]);
 *     
 *     return { data, loading, error };
 *   }
 * 
 * STEP 2: Add getServerSideProps function (Next.js concept)
 * - Add this function at the bottom of this file:
 *   export async function getServerSideProps() {
 *     // TODO: Fetch data from https://jsonplaceholder.typicode.com/posts
 *     // TODO: Return { props: { posts: data } }
 *   }
 * 
 * STEP 3: Create a DataLoader component (React async patterns)
 * - Create a reusable component for loading states:
 *   function DataLoader({ data, loading, error, children }: any) {
 *     if (loading) return <div className="text-center py-4">Loading...</div>;
 *     if (error) return <div className="text-red-500 py-4">Error: {error}</div>;
 *     return children(data);
 *   }
 * 
 * STEP 4: Update your component to receive props
 * - Change: export default function DataFetching()
 * - To: export default function DataFetching({ posts })
 * - Use DataLoader component to handle loading states
 * 
 * STEP 5: Create a static version
 * - Create: pages/exercises/02-data-fetching/static.tsx
 * - Use getStaticProps instead of getServerSideProps
 * - Fetch the same data but at build time
 * 
 * STEP 4: Add error handling
 * - What if the API is down? Add a try/catch block
 * - What if posts is empty? Show a "No posts found" message
 * 
 * HINTS:
 * - Use fetch() to get data from APIs
 * - getServerSideProps runs on every request (slower but fresh data)
 * - getStaticProps runs at build time (faster but data might be stale)
 * - Always return { props: { yourData } } from these functions
 * - Check if data exists before trying to map over it
 * 
 * API TO USE:
 * - Posts: https://jsonplaceholder.typicode.com/posts
 * - Users: https://jsonplaceholder.typicode.com/users
 * - Comments: https://jsonplaceholder.typicode.com/comments
 * 
 * DOCUMENTATION:
 * - Data Fetching: https://nextjs.org/docs/basic-features/data-fetching
 * - getServerSideProps: https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
 * - getStaticProps: https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
 */

export default function DataFetching() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Exercise 2: Data Fetching</h1>
      <p className="mb-4">In this exercise, you'll learn about:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Server-side data fetching with <code>getServerSideProps</code></li>
        <li>Static data fetching with <code>getStaticProps</code></li>
        <li>Client-side data fetching with <code>useEffect</code> or SWR</li>
      </ul>
      
      {/* TODO: Display your posts data here */}
      <div className="mb-6 p-4 border-2 border-dashed border-gray-300 rounded">
        <p className="text-gray-600">Your fetched posts will appear here!</p>
        <p className="text-sm text-gray-500 mt-2">
          Hint: Use posts.map() to display each post
        </p>
      </div>
      
      <div className="mt-6 p-4 bg-blue-100 rounded">
        <p className="text-blue-800 text-sm">
          💡 <strong>Next Steps:</strong> Follow the step-by-step instructions in the comments above!
        </p>
        <p className="text-blue-700 text-xs mt-1">
          1. Add getServerSideProps function → 2. Update component props → 3. Display the data
        </p>
      </div>
    </div>
  );
}

// TODO: Add your getServerSideProps function here (see STEP 1 in comments above) 