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
  const { data } = props

  return (
    <div>
      <h1>Statically Generated Page</h1>
      <p>Data: {JSON.stringify(data)}</p>
    </div>
  )
}

// 2. Create a ServerSidePage component (like fresh cooking)
//    - data: Fresh information (like today's special)
//    - user: Who is visiting? (like customer info)
//    - timestamp: When was it made? (like cooking time)
//    - personalized: Custom for user? (like special order)
export function ServerSidePage(props: any): JSX.Element {
  const { data } = props

  return (
    <div>
      <h1>Server-Side Rendered Page</h1>
      <p>Data: {JSON.stringify(data)}</p>
    </div>
  )
}

// 3. Create a HybridPage component (like some pre-made, some fresh)
//    - staticContent: Pre-made parts (like bread)
//    - dynamicContent: Fresh parts (like toppings)
//    - revalidate: How often to refresh? (like restocking)
//    - fallback: What to show while loading? (like "preparing...")
export function HybridPage(props: any): JSX.Element {
  const { staticContent, dynamicContent, revalidate, fallback } = props
  if (!dynamicContent) {
    return <p>{fallback || "Loading..."}</p>
  }
  return (
    <div>
      <h1>Hybrid Page</h1>
      <p>Static: {staticContent}</p>
      <p>Dynamic: {dynamicContent}</p>
      <p>Revalidate every: {revalidate} seconds</p>
    </div>
  )
}

// 4. Create data fetching functions (like getting ingredients)

// Get static data (like reading a recipe book)
export async function getStaticData() {
  return {
    title: "Static Page",
    content: "This content was generated at build time.",
    lastUpdated: "Build Time",
    metadata: {
      description: "This is static content."
    }
  }
}

// Get server data (like checking the fridge)
export async function getServerData() {
  return {
    data: "This data was generated on request.",
    user: { name: "John Doe" },
    timestamp: new Date().toISOString(),
    personalized: true
  }
}

// Get paths for static generation (like menu items to pre-make)
export async function getStaticPaths() {
  return ["1", "2", "3"]}

// Components that tests expect:
export function BlogPost(props: any): JSX.Element {
  return (
    <div>
      <h1>Blog Post</h1>
      <p>This is a static blog post.</p>
    </div>
  )
}

export function UserDashboard(props: any): JSX.Element {
  return (
    <div>
      <h1>User Dashboard</h1>
      <p>Welcome back, user!</p>
    </div>
  )
}

export function ProductPage(props: any): JSX.Element {
  return (
    <div>
      <h1>Product Page</h1>
      <p>This product page updates periodically.</p>
    </div>
  )
}

// Example usage (like a preview):
export function Example() {
  return (
    <div className="p-5">
      <h2>SSR & SSG Exercise</h2>
      <p className="text-gray-600 mb-5">
        🎯 <strong>Your Goal:</strong> Implement components that use different rendering strategies!
      </p>
      
      <div className="border-2 border-dashed border-red-500 p-5 rounded-lg bg-red-100">
        <p className="text-red-900 mb-4">
          ⚠️ <strong>Advanced Topic!</strong> This exercise covers server-side rendering concepts that are quite complex for beginners.
        </p>
        
        <div className="opacity-50">
          <h3>What you'll learn:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <div className="p-4 border border-dashed border-gray-300 rounded-lg">
              <div className="mb-3 font-bold">📝 StaticPage</div>
              <div className="text-sm text-gray-600"> 
                <StaticPage
                  title="Static Page"
                  content="This is static content."
                  lastUpdated="Build time"
                  metadata={{ description: "Static metadata" }}
                />
              </div>
            </div>
            
            <div className="p-4 border border-dashed border-gray-300 rounded-lg">
              <div className="mb-3 font-bold">📝 ServerSidePage</div>
              <div className="text-sm text-gray-600">
                <ServerSidePage
                  data="Fresh data"
                  user={{ name: "John" }}
                  timestamp={new Date().toISOString()}
                  personalized={true}
                />
              </div>
            </div>
            
            <div className="p-4 border border-dashed border-gray-300 rounded-lg">
              <div className="mb-3 font-bold">📝 HybridPage</div>
              <div className="text-sm text-gray-600">
                <HybridPage
                  staticContent="Static content"
                  dynamicContent="Dynamic content"
                  revalidate={10}
                  fallback="Loading..."
                />
              </div>
            </div>
            
            <div className="p-4 border border-dashed border-gray-300 rounded-lg">
              <div className="mb-3 font-bold">📝 BlogPost</div>
              <div className="text-sm text-gray-600">
                <BlogPost/>
              </div>
            </div>
            
            <div className="p-4 border border-dashed border-gray-300 rounded-lg">
              <div className="mb-3 font-bold">📝 UserDashboard</div>
              <div className="text-sm text-gray-600">
                <UserDashboard/>
              </div>
            </div>
            
            <div className="p-4 border border-dashed border-gray-300 rounded-lg">
              <div className="mb-3 font-bold">📝 ProductPage</div>
              <div className="text-sm text-gray-600">
                <ProductPage/>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-5 p-4 bg-yellow-100 rounded-lg">
        <h4 className="text-yellow-800 m-0 mb-2">💡 Recommendation:</h4>
        <p className="text-yellow-800 m-0">
          This is an advanced topic! Consider completing the other React exercises first. 
          SSR/SSG are Next.js concepts that require understanding of server-side JavaScript and build processes.
        </p>
      </div>
    </div>
  );
}

export const App = () => <Example />; 
export const SSGPage = StaticPage
export const SSRPage = ServerSidePage
