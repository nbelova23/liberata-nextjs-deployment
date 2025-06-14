// Exercise 9: SSR & SSG 🏗️
// Think of SSR/SSG like a restaurant:
// - SSR is like cooking when you order (fresh but slow)
// - SSG is like pre-made meals (fast but fixed)
// - Both serve food faster than cooking from scratch
// - Both help search engines find your restaurant
//
// In this exercise, you'll build:
// 1. A Static Page (like a menu board)
// 2. A Server-Side Page (like fresh cooking)
// 3. A Hybrid Page (like some pre-made, some fresh)
// 4. A Data Fetcher (like getting ingredients)
//
// Documentation:
// - Next.js SSG: https://nextjs.org/docs/basic-features/data-fetching/get-static-props
// - Next.js SSR: https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props
// - Next.js ISR: https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration

import React from 'react';

// TODO: Create these components:

// 1. Create a StaticPage component (like a menu board)
//    - title: What to show at top (like restaurant name)
//    - content: What to display (like menu items)
//    - lastUpdated: When was it made? (like menu date)
//    - metadata: SEO info (like restaurant description)
export function StaticPage(props: any): JSX.Element {
  throw new Error('🚧 TODO: Implement the StaticPage component! This should be pre-built at build time (SSG).');
}

// 2. Create a ServerSidePage component (like fresh cooking)
//    - data: Fresh information (like today's special)
//    - user: Who is visiting? (like customer info)
//    - timestamp: When was it made? (like cooking time)
//    - personalized: Custom for user? (like special order)
export function ServerSidePage(props: any): JSX.Element {
  throw new Error('🚧 TODO: Implement the ServerSidePage component! This should be built on each request (SSR).');
}

// 3. Create a HybridPage component (like some pre-made, some fresh)
//    - staticContent: Pre-made parts (like bread)
//    - dynamicContent: Fresh parts (like toppings)
//    - revalidate: How often to refresh? (like restocking)
//    - fallback: What to show while loading? (like "preparing...")
export function HybridPage(props: any): JSX.Element {
  throw new Error('🚧 TODO: Implement the HybridPage component! This uses ISR (Incremental Static Regeneration).');
}

// 4. Create data fetching functions (like getting ingredients)

// Get static data (like reading a recipe book)
export async function getStaticData() {
  throw new Error('🚧 TODO: Implement getStaticData function! This fetches data at build time.');
}

// Get server data (like checking the fridge)
export async function getServerData() {
  throw new Error('🚧 TODO: Implement getServerData function! This fetches data on each request.');
}

// Get paths for static generation (like menu items to pre-make)
export async function getStaticPaths() {
  throw new Error('🚧 TODO: Implement getStaticPaths function! This tells Next.js which pages to pre-build.');
}

// Components that tests expect:
export function BlogPost(props: any): JSX.Element {
  throw new Error('🚧 TODO: Implement the BlogPost component! A static blog post with SSG.');
}

export function UserDashboard(props: any): JSX.Element {
  throw new Error('🚧 TODO: Implement the UserDashboard component! A personalized dashboard with SSR.');
}

export function ProductPage(props: any): JSX.Element {
  throw new Error('🚧 TODO: Implement the ProductPage component! A product page with ISR.');
}

// Example usage (like a preview):
export function Example() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>SSR & SSG Exercise</h2>
      <p style={{ color: '#666', marginBottom: '20px' }}>
        🎯 <strong>Your Goal:</strong> Implement components that use different rendering strategies!
      </p>
      
      <div style={{ 
        border: '2px dashed #dc3545', 
        padding: '20px', 
        borderRadius: '8px',
        backgroundColor: '#f8d7da'
      }}>
        <p style={{ color: '#721c24', marginBottom: '16px' }}>
          ⚠️ <strong>Advanced Topic!</strong> This exercise covers server-side rendering concepts that are quite complex for beginners.
        </p>
        
        <div style={{ opacity: 0.5 }}>
          <h3>What you'll learn:</h3>
          
          <div style={{ margin: '8px 0', padding: '8px', border: '1px dashed #ccc' }}>
            📝 SSG (Static Site Generation): Pre-build pages at build time
          </div>
          
          <div style={{ margin: '8px 0', padding: '8px', border: '1px dashed #ccc' }}>
            📝 SSR (Server-Side Rendering): Build pages on each request
          </div>
          
          <div style={{ margin: '8px 0', padding: '8px', border: '1px dashed #ccc' }}>
            📝 ISR (Incremental Static Regeneration): Update static pages over time
          </div>
          
          <div style={{ margin: '8px 0', padding: '8px', border: '1px dashed #ccc' }}>
            📝 Data Fetching: Get data for different rendering strategies
          </div>
        </div>
      </div>
      
      <div style={{ marginTop: '20px', padding: '16px', backgroundColor: '#fff3cd', borderRadius: '8px' }}>
        <h4 style={{ color: '#856404', margin: '0 0 8px 0' }}>💡 Recommendation:</h4>
        <p style={{ color: '#856404', margin: 0 }}>
          This is an advanced topic! Consider completing the other React exercises first. 
          SSR/SSG are Next.js concepts that require understanding of server-side JavaScript and build processes.
        </p>
      </div>
    </div>
  );
}

export const App = () => <Example />; 