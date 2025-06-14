/**
 * Exercise 7: Deployment and Optimization
 * 
 * INSTRUCTIONS:
 * 1. Set up environment variables for different environments
 * 2. Configure build optimization settings
 * 3. Deploy to Vercel
 * 4. Set up CI/CD with GitHub Actions
 * 
 * LEARNING GOALS:
 * - Understand deployment options in Next.js
 * - Learn about environment configuration
 * - Practice CI/CD setup
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