// Exercise 2: Hooks 🎣
// Think of hooks like special tools:
// - useState is like a memory box (remembers things)
// - useEffect is like a robot that does tasks for you
// - Custom hooks are like creating your own tools
// - Hook rules are like safety instructions
//
// In this exercise, you'll build:
// 1. A Counter (like a scoreboard)
// 2. A Timer (like a stopwatch)
// 3. A Data Fetcher (like a news reader)
// 4. A Form Validator (like a bouncer checking IDs)
//
// Documentation:
// - useState: https://reactjs.org/docs/hooks-state.html
// - useEffect: https://reactjs.org/docs/hooks-effect.html
// - Custom Hooks: https://reactjs.org/docs/hooks-custom.html

import React, { useState, useEffect } from 'react';

// TODO: Create these hooks:

// 1. Create a useCounter hook (like a scoreboard)
//    - initialValue: Starting number (like 0-0 in a game)
//    - step: How much to add/subtract (like points per goal)
//    Returns:
//    - count: Current number (like the score)
//    - increment: Add to number (like scoring a point)
//    - decrement: Subtract from number (like losing a point)
//    - reset: Back to start (like starting a new game)
export function useCounter(initialValue: number = 0, step: number = 1) {
  throw new Error('🚧 TODO: Implement the useCounter hook! Use useState to track a number and return functions to change it.');
}

// 2. Create a useTimer hook (like a stopwatch)
//    - initialSeconds: Starting time (like 60 seconds)
//    - onComplete: What to do when done (like a buzzer)
//    Returns:
//    - seconds: Time left (like the display)
//    - isRunning: Is it counting? (like the start/stop button)
//    - start: Start counting (like pressing start)
//    - pause: Stop counting (like pressing pause)
//    - reset: Back to start (like resetting the timer)
export function useTimer(initialSeconds: number, onComplete?: () => void) {
  throw new Error('🚧 TODO: Implement the useTimer hook! Use useState and useEffect with setInterval to count down.');
}

// 3. Create a useFetch hook (like a news reader)
//    - url: Where to get data (like a news website)
//    Returns:
//    - data: The information (like the news story)
//    - loading: Is it getting data? (like "loading...")
//    - error: Did something go wrong? (like "can't connect")
//    - refetch: Get data again (like refreshing the page)
export function useFetch<T>(url: string) {
  throw new Error('🚧 TODO: Implement the useFetch hook! Use useState for data/loading/error and useEffect to fetch.');
}

// 4. Create a useForm hook (like a bouncer checking IDs)
//    - initialValues: Starting data (like empty form)
//    - validate: Check if data is good (like checking IDs)
//    Returns:
//    - values: Form data (like the information)
//    - errors: What's wrong (like "ID expired")
//    - handleChange: Update data (like writing on form)
//    - handleSubmit: Send data (like giving form to bouncer)
export function useForm<T extends Record<string, any>>(
  initialValues: T,
  validate?: (values: T) => Record<string, string>
) {
  throw new Error('🚧 TODO: Implement the useForm hook! Use useState for values/errors and create handler functions.');
}

// Additional hooks that tests expect:
export function useLocalStorage(key: string, initialValue: any) {
  throw new Error('🚧 TODO: Implement the useLocalStorage hook! Use useState and useEffect to sync with localStorage.');
}

export function useDebounce<T>(value: T, delay: number) {
  throw new Error('🚧 TODO: Implement the useDebounce hook! Use useState and useEffect with setTimeout.');
}

export function useWindowSize() {
  throw new Error('🚧 TODO: Implement the useWindowSize hook! Use useState and useEffect with window resize listener.');
}

export function usePrevious<T>(value: T) {
  throw new Error('🚧 TODO: Implement the usePrevious hook! Use useRef to store the previous value.');
}

export function useClickOutside(callback: () => void) {
  throw new Error('🚧 TODO: Implement the useClickOutside hook! Use useRef and useEffect with document click listener.');
}

// Components that use the hooks:
export function PersistentCounter(): JSX.Element {
  throw new Error('🚧 TODO: Implement the PersistentCounter component! Use useLocalStorage and useCounter hooks.');
}

export function DebouncedSearch(): JSX.Element {
  throw new Error('🚧 TODO: Implement the DebouncedSearch component! Use useDebounce hook with an input.');
}

export function ResponsiveComponent(): JSX.Element {
  throw new Error('🚧 TODO: Implement the ResponsiveComponent component! Use useWindowSize hook to show screen size.');
}

export function PreviousValueComponent(): JSX.Element {
  throw new Error('🚧 TODO: Implement the PreviousValueComponent component! Use usePrevious hook to show old values.');
}

export function Dropdown(): JSX.Element {
  throw new Error('🚧 TODO: Implement the Dropdown component! Use useClickOutside hook to close when clicking outside.');
}

// Example usage (like a preview):
export function Example() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Hooks Exercise</h2>
      <p style={{ color: '#666', marginBottom: '20px' }}>
        🎯 <strong>Your Goal:</strong> Implement the custom hooks and components above!
      </p>
      
      <div style={{ 
        border: '2px dashed #ffc107', 
        padding: '20px', 
        borderRadius: '8px',
        backgroundColor: '#fff3cd'
      }}>
        <p style={{ color: '#856404', marginBottom: '16px' }}>
          ⚠️ <strong>Not implemented yet!</strong> The hooks below will throw errors until you implement them.
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
              <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>📝 PersistentCounter</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                TODO: Component that uses useCounter + useLocalStorage hooks
              </div>
            </div>
            
            <div style={{ padding: '16px', border: '1px dashed #ccc', borderRadius: '8px' }}>
              <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>📝 DebouncedSearch</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                TODO: Component that uses useDebounce hook with search input
              </div>
            </div>
            
            <div style={{ padding: '16px', border: '1px dashed #ccc', borderRadius: '8px' }}>
              <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>📝 ResponsiveComponent</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                TODO: Component that uses useWindowSize hook to show screen size
              </div>
            </div>
            
            <div style={{ padding: '16px', border: '1px dashed #ccc', borderRadius: '8px' }}>
              <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>📝 PreviousValueComponent</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                TODO: Component that uses usePrevious hook to show old values
              </div>
            </div>
            
            <div style={{ padding: '16px', border: '1px dashed #ccc', borderRadius: '8px' }}>
              <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>📝 Dropdown</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                TODO: Component that uses useClickOutside hook to close on outside click
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div style={{ marginTop: '20px', padding: '16px', backgroundColor: '#d1ecf1', borderRadius: '8px' }}>
        <h4 style={{ color: '#0c5460', margin: '0 0 8px 0' }}>💡 Getting Started:</h4>
        <ol style={{ color: '#0c5460', margin: 0, paddingLeft: '20px' }}>
          <li>Start with useCounter - it's the simplest!</li>
          <li>Use useState to track the count value</li>
          <li>Return an object with count and functions to modify it</li>
          <li>Test it by creating a component that uses the hook</li>
          <li>Remember: hooks must start with "use" and follow the rules of hooks!</li>
        </ol>
      </div>
    </div>
  );
}

export const App = () => <Example />; 