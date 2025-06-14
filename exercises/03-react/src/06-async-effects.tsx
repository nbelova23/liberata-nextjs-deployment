// Exercise 6: Async Effects 🕒
// Think of async effects like a robot assistant:
// - It does tasks in the background (like a helper)
// - It tells you when it's done (like a notification)
// - It can handle errors (like a safety net)
// - It can clean up after itself (like tidying up)
//
// In this exercise, you'll build:
// 1. A Data Loader (like a book reader)
// 2. A Polling Component (like a weather update)
// 3. A Search Debouncer (like a smart search)
// 4. A Resource Cleaner (like a janitor)
//
// Documentation:
// - useEffect: https://reactjs.org/docs/hooks-effect.html
// - Async/Await: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
// - Error Handling: https://reactjs.org/docs/error-boundaries.html

import React, { useState, useEffect } from 'react';

// TODO: Create these components:

// 1. Create a DataLoader component (like a book reader)
//    - url: Where to get data (like a book title)
//    - onLoad: What to do with data (like reading)
//    - onError: What to do if wrong (like error message)
//    - loading: Are we getting data? (like "reading...")
export function DataLoader(props: any): JSX.Element {
  throw new Error('🚧 TODO: Implement the DataLoader component! Use useEffect to fetch data and handle loading/error states.');
}

// 2. Create a PollingComponent (like a weather update)
//    - interval: How often to check (like every hour)
//    - fetchData: What to get (like weather forecast)
//    - onUpdate: What to do with new data (like showing forecast)
//    - onError: What to do if wrong (like "can't get weather")
export function PollingComponent(props: any): JSX.Element {
  throw new Error('🚧 TODO: Implement the PollingComponent component! Use useEffect with setInterval to fetch data repeatedly.');
}

// 3. Create a SearchDebouncer (like a smart search)
//    - delay: How long to wait (like thinking time)
//    - onSearch: What to search for (like typing)
//    - onResults: What to do with results (like showing matches)
//    - placeholder: What to show when empty (like "Search...")
export function SearchDebouncer(props: any): JSX.Element {
  throw new Error('🚧 TODO: Implement the SearchDebouncer component! Use useEffect with setTimeout to debounce search input.');
}

// 4. Create a ResourceCleaner (like a janitor)
//    - resource: What to clean up (like a room)
//    - onCleanup: What to do when done (like "room clean")
//    - onError: What to do if wrong (like "can't clean")
//    - autoClean: Clean automatically? (like scheduled cleaning)
export function ResourceCleaner(props: any): JSX.Element {
  throw new Error('🚧 TODO: Implement the ResourceCleaner component! Use useEffect cleanup function to handle resource cleanup.');
}

// Components that tests expect:
export function FetchUser(props: any): JSX.Element {
  throw new Error('🚧 TODO: Implement the FetchUser component! Fetch user data and display it with loading/error states.');
}

export function PollingTime(props: any): JSX.Element {
  throw new Error('🚧 TODO: Implement the PollingTime component! Poll for current time at regular intervals.');
}

// Example usage (like a preview):
export function Example() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Async Effects Exercise</h2>
      <p style={{ color: '#666', marginBottom: '20px' }}>
        🎯 <strong>Your Goal:</strong> Implement components that handle async operations and side effects!
      </p>
      
      <div style={{ 
        border: '2px dashed #ffc107', 
        padding: '20px', 
        borderRadius: '8px',
        backgroundColor: '#fff3cd'
      }}>
        <p style={{ color: '#856404', marginBottom: '16px' }}>
          ⚠️ <strong>Not implemented yet!</strong> The async components below will throw errors until you implement them.
        </p>
        
        <div style={{ opacity: 0.5 }}>
          <h3>What you'll build:</h3>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '16px',
            marginTop: '16px'
          }}>
            <div style={{ padding: '16px', border: '1px dashed #ccc', borderRadius: '8px' }}>
              <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>📝 DataLoader</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                TODO: Component that fetches and displays data with loading/error states
              </div>
            </div>
            
            <div style={{ padding: '16px', border: '1px dashed #ccc', borderRadius: '8px' }}>
              <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>📝 PollingComponent</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                TODO: Component that fetches data at regular intervals using setInterval
              </div>
            </div>
            
            <div style={{ padding: '16px', border: '1px dashed #ccc', borderRadius: '8px' }}>
              <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>📝 SearchDebouncer</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                TODO: Search input component that waits before searching using setTimeout
              </div>
            </div>
            
            <div style={{ padding: '16px', border: '1px dashed #ccc', borderRadius: '8px' }}>
              <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>📝 ResourceCleaner</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                TODO: Component that cleans up resources using useEffect cleanup function
              </div>
            </div>
            
            <div style={{ padding: '16px', border: '1px dashed #ccc', borderRadius: '8px' }}>
              <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>📝 FetchUser</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                TODO: Component that fetches user data with loading and error handling
              </div>
            </div>
            
            <div style={{ padding: '16px', border: '1px dashed #ccc', borderRadius: '8px' }}>
              <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>📝 PollingTime</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                TODO: Component that polls for current time at regular intervals
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div style={{ marginTop: '20px', padding: '16px', backgroundColor: '#d1ecf1', borderRadius: '8px' }}>
        <h4 style={{ color: '#0c5460', margin: '0 0 8px 0' }}>💡 Getting Started:</h4>
        <ol style={{ color: '#0c5460', margin: 0, paddingLeft: '20px' }}>
          <li>Start with DataLoader - use useEffect to fetch data when component mounts</li>
          <li>Handle loading and error states with useState</li>
          <li>Use cleanup functions in useEffect to prevent memory leaks</li>
          <li>Try PollingComponent with setInterval for repeated fetching</li>
          <li>Implement debouncing with setTimeout in SearchDebouncer</li>
        </ol>
      </div>
    </div>
  );
}

export const App = () => <Example />; 