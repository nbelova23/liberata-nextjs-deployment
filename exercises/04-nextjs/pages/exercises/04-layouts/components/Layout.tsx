import { useContext } from 'react';
import Link from 'next/link';
import ThemeContext from '../context/ThemeContext';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={theme === 'light' ? 'bg-white text-black min-h-screen' : 'bg-gray-900 text-white min-h-screen'}>
      
      {/* Header */}
      <header className="p-4 border-b flex justify-between items-center">
        <nav className="space-x-4">
          <Link href="/exercises">Home</Link> 
          <Link href="/exercises/02-data-fetching">Data Fetching</Link>
          <Link href="/exercises/03-dynamic-routes/posts">Posts</Link>
          <Link href="/exercises/05-authentication/signin">Sign In</Link>
          <Link href="/exercises/05-authentication/profile">Profile</Link>
        </nav>

        <button
          onClick={toggleTheme}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Toggle Theme
        </button>
      </header>

      {/* Main Content */}
      <main className="p-6">{children}</main>

      {/* Footer */}
      <footer className="p-4 border-t text-center text-sm">
        Next.js Exercise App
      </footer>
    </div>
  );
}
