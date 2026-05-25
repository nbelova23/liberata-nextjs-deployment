/**
 * Exercise 5: Authentication in Next.js
 * 
 * STEP-BY-STEP INSTRUCTIONS:
 * 
 * STEP 1: Create form components (React forms concepts)
 * - Create a useForm hook for form state management:
 *   function useForm(initialValues: any, validate?: (values: any) => any) {
 *     const [values, setValues] = useState(initialValues);
 *     const [errors, setErrors] = useState({});
 *     // TODO: Add handleChange, handleSubmit functions
 *     return { values, errors, handleChange, handleSubmit };
 *   }
 * 
 * - Create a FormField component:
 *   function FormField({ label, name, type, value, error, onChange }: any) {
 *     return (
 *       <div className="mb-4">
 *         <label className="block text-sm font-medium mb-2">{label}</label>
 *         <input className="w-full p-2 border rounded" type={type} name={name} value={value} onChange={onChange} />
 *         {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
 *       </div>
 *     );
 *   }
 * 
 * STEP 2: Install NextAuth.js (ADVANCED - optional)
 * - Run: pnpm install next-auth
 * - This is ADVANCED - start with simple form-based auth first
 * 
 * STEP 2: Create API route for auth
 * - Create: pages/api/auth/[...nextauth].ts
 * - Configure providers (Google, GitHub, etc.)
 * - Add your environment variables
 * 
 * STEP 3: Create sign-in page with forms
 * - Create: pages/exercises/05-authentication/signin.tsx
 * - Use your useForm hook and FormField components
 * - Create a login form with email/password validation
 * - Add UserContext for auth state management (like React Context exercise)
 * 
 * STEP 4: Protect routes
 * - Use useSession() hook to check if user is logged in
 * - Redirect to sign-in if not authenticated
 * - Show different content for logged-in users
 * 
 * STEP 5: Create profile page
 * - Create: pages/exercises/05-authentication/profile.tsx
 * - Display user information from session
 * - Add sign-out button
 * 
 * HINTS:
 * - This is COMPLEX - requires external OAuth setup
 * - Start with a simple mock authentication first
 * - Use session?.user to access user data
 * - signOut() function logs users out
 * - Consider using a simpler auth solution for learning
 * 
 * BEGINNER ALTERNATIVE:
 * - Create a simple login form with useState
 * - Store "logged in" state in localStorage
 * - Practice the UI patterns without real auth
 * 
 * DOCUMENTATION:
 * - NextAuth.js: https://next-auth.js.org/
 * - Authentication: https://nextjs.org/docs/authentication
 * - API Routes: https://nextjs.org/docs/api-routes/introduction
 */

import Link from 'next/link';
import { useState } from 'react';


function useForm(initialValues: any, validate?: (values: any) => any) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<any>({});
  const handleChange = (e: any) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (onSubmit: any) => (e: any) => {
    e.preventDefault();
    if (validate) {
      const validationErrors = validate(values);
      setErrors(validationErrors);
      if (Object.keys(validationErrors).length > 0) return;
    }
    onSubmit(values);
  };
  return { values, errors, handleChange, handleSubmit };
}


function FormField({ label, name, type, value, error, onChange }: any) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">{label}</label>
      <input
        className="w-full p-2 border rounded"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}


export default function Authentication() {
  return (
    <div className="max-w-xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Exercise 5: Authentication</h1>
      <p className="mb-4">In this exercise, you'll learn about:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Setting up NextAuth.js</li>
        <li>Creating protected routes</li>
        <li>Handling user sessions</li>
      </ul>
      <p className="mb-2">Edit this file at <code>pages/exercises/05-authentication/index.tsx</code> to get started.</p>
      <p className="mb-2">Try implementing a sign-in page with NextAuth.js!</p>
      <p className="text-gray-600">See the README for more details and documentation links.</p>
    </div>
  );
} 