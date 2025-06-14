// Exercise 1: Getting Started with Next.js
// In this exercise, you'll learn about:
// - Next.js file-based routing
// - Pages and layouts
// - Basic navigation and linking
//
// What is Next.js?
// Next.js is a React framework that provides features like server-side rendering, static site generation, and file-based routing out of the box.
// It simplifies building React applications with a focus on performance and developer experience.
//
// Documentation:
// - Next.js: https://nextjs.org/docs
// - File-Based Routing: https://nextjs.org/docs/routing/introduction
// - Pages and Layouts: https://nextjs.org/docs/basic-features/layouts

import { useEffect } from 'react';
import { useRouter } from 'next/router';

// Home Page
// TODO: Create a home page with a welcome message and navigation links
export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/exercises');
  }, [router]);
  return null;
} 