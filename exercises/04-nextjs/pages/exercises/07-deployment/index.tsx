/**
 * Exercise 7: Deployment and Optimization
 * 
 * STEP-BY-STEP INSTRUCTIONS:
 * 
 * STEP 1: Create environment variables
 * - Create: .env.local file in your project root
 * - Add: NEXT_PUBLIC_API_URL=https://api.example.com
 * - Add: DATABASE_URL=your-database-url (keep private)
 * - Use process.env.NEXT_PUBLIC_API_URL in your code
 * 
 * STEP 2: Test your build locally
 * - Run: pnpm run build
 * - Run: pnpm run start
 * - Check for any build errors
 * - Test that your app works in production mode
 * 
 * STEP 3: Deploy to Vercel (easiest option)
 * - Push your code to GitHub
 * - Go to vercel.com and sign up
 * - Connect your GitHub repo
 * - Vercel will auto-deploy on every push
 * 
 * STEP 4: Configure environment variables on Vercel
 * - Go to your project settings on Vercel
 * - Add your environment variables
 * - Redeploy to apply changes
 * 
 * STEP 5: Set up custom domain (optional)
 * - Buy a domain name
 * - Add it in Vercel project settings
 * - Update DNS records
 * 
 * HINTS:
 * - NEXT_PUBLIC_ variables are visible to browsers
 * - Private variables (no NEXT_PUBLIC_) are server-only
 * - Vercel is free for personal projects
 * - Each git push triggers a new deployment
 * - Check deployment logs if something breaks
 * 
 * ALTERNATIVE PLATFORMS:
 * - Netlify (similar to Vercel)
 * - Railway (includes database)
 * - Heroku (more complex setup)
 * 
 * DOCUMENTATION:
 * - Deployment: https://nextjs.org/docs/deployment
 * - Environment Variables: https://nextjs.org/docs/basic-features/environment-variables
 * - Build Optimization: https://nextjs.org/docs/advanced-features/compiler
 */

import Link from 'next/link';

export default function Deployment() {
  return (
    <div className="max-w-xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Exercise 7: Deployment</h1>
      <p className="mb-4">In this exercise, you'll learn about:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Deploying to Vercel</li>
        <li>Environment configuration</li>
        <li>Build optimization</li>
      </ul>
      <p className="mb-2">Edit this file at <code>pages/exercises/07-deployment/index.tsx</code> to get started.</p>
      <p className="mb-2">Try deploying your app to Vercel!</p>
      <p className="text-gray-600">See the README for more details and documentation links.</p>
    </div>
  );
} 

