/**
 * Exercise 4: Layouts in Next.js
 * 
 * STEP-BY-STEP INSTRUCTIONS:
 * 
 * STEP 1: Create a ThemeContext (React Context API concept)
 * - Create: pages/exercises/04-layouts/context/ThemeContext.tsx
 * - Add theme state management:
 *   const ThemeContext = createContext<any>(null);
 *   export function ThemeProvider({ children }: { children: React.ReactNode }) {
 *     const [theme, setTheme] = useState('light');
 *     const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
 *     return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
 *   }
 * 
 * STEP 2: Create a basic Layout component
 * - Create: pages/exercises/04-layouts/components/Layout.tsx
 * - Use ThemeContext to apply theme styling
 * - Add a header with navigation and theme toggle button
 * - Add a footer with copyright text
 * 
 * STEP 2: Create the Layout component structure
 * - export default function Layout({ children }) {
 *     return (
 *       <div>
 *         <header>// TODO: Add navigation</header>
 *         <main>{children}</main>
 *         <footer>// TODO: Add footer</footer>
 *       </div>
 *     );
 *   }
 * 
 * STEP 3: Use Layout in _app.tsx
 * - Import your Layout component
 * - Wrap <Component {...pageProps} /> with <Layout>
 * - Now all pages will have the header/footer
 * 
 * STEP 4: Create a blog-specific layout
 * - Create: pages/exercises/04-layouts/components/BlogLayout.tsx
 * - Add a sidebar with blog categories
 * - This layout should wrap the main Layout
 * 
 * STEP 5: Create some test pages
 * - Create: pages/exercises/04-layouts/blog/index.tsx
 * - Create: pages/exercises/04-layouts/blog/post-1.tsx
 * - Use the BlogLayout for these pages
 * 
 * HINTS:
 * - Layouts are just React components that accept children
 * - You can nest layouts: BlogLayout wraps Layout
 * - Use getLayout pattern for page-specific layouts
 * - Add Tailwind classes for styling: "bg-gray-100 p-4"
 * - Navigation links: <Link href="/about">About</Link>
 * 
 * LAYOUT PATTERN:
 * - Layout wraps all pages (header/footer)
 * - BlogLayout wraps blog pages (adds sidebar)
 * - Page content goes in the middle
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