/**
 * IMPORTANT: This file MUST be named _app.tsx (or _app.js)
 * 
 * Next.js uses this specific filename to identify the custom App component.
 * This is a special file that:
 * 1. Allows us to override the default App component
 * 2. Persists layout between page changes
 * 3. Keeps state when navigating between pages
 * 4. Handles global styles
 * 
 * Documentation:
 * - Custom App: https://nextjs.org/docs/pages/building-your-application/routing/custom-app
 * - Global Styles: https://nextjs.org/docs/basic-features/built-in-css-support
 */

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from './exercises/04-layouts/components/Layout';
import { ThemeProvider } from './exercises/04-layouts/context/ThemeContext';
import { AuthProvider } from './exercises/05-authentication/context/AuthContext';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const getLayout =
    (Component as any).getLayout ||
    ((page: React.ReactNode) => <Layout>{page}</Layout>);

  return (
    <AuthProvider>
      <ThemeProvider>
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </AuthProvider>
  );
}


