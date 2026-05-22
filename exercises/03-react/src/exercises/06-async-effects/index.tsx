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
export function DataLoader(props: any): JSX.Element | null {
  const { url, onLoad, onError } = props
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error("Failed to fetch")
        }
        const data = await response.json()
        onLoad(data)
      } catch (e) {
        onError(e)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [url])

  if (loading) {
    return <p>Loading...</p>
  }
  return null
}

// 2. Create a PollingComponent (like a weather update)
//    - interval: How often to check (like every hour)
//    - fetchData: What to get (like weather forecast)
//    - onUpdate: What to do with new data (like showing forecast)
//    - onError: What to do if wrong (like "can't get weather")
export function PollingComponent(props: any): JSX.Element | null {
  const { interval, fetchData, onUpdate, onError } = props

  useEffect(() => {
    const fetchAndUpdate = async () => {
      try {
        const data = await fetchData()
        onUpdate(data)
      } catch (e) {
        onError(e)
      }
    }
    const id = setInterval(() => {
      fetchAndUpdate()
    }, interval)
    return () => clearInterval(id)
  }, [interval])
  return null
}

// 3. Create a SearchDebouncer (like a smart search)
//    - delay: How long to wait (like thinking time)
//    - onSearch: What to search for (like typing)
//    - onResults: What to do with results (like showing matches)
//    - placeholder: What to show when empty (like "Search...")
export function SearchDebouncer(props: any): JSX.Element {
  const { delay, onSearch, onResults, placeholder } = props
  const [value, setValue] = useState("")
  useEffect(() => {
    if (!value) return
    const timeout = setTimeout(async () => {
      try {
        const result = await onSearch(value)
        onResults(result)
      } catch (e) {
        //can handle if needed
      }
    }, delay)
    return () => clearTimeout(timeout)
  }, [value, delay])
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}

// 4. Create a ResourceCleaner (like a janitor)
//    - resource: What to clean up (like a room)
//    - onCleanup: What to do when done (like "room clean")
//    - onError: What to do if wrong (like "can't clean")
//    - autoClean: Clean automatically? (like scheduled cleaning)
export function ResourceCleaner(props: any): JSX.Element | null {

  const { resource, onCleanup, onError, autoClean } = props

  useEffect(() => {
    if (!autoClean) return

    return () => {
      try {
        onCleanup(resource)
      } catch (e) {
        onError(e)
      }
    }
  }, [resource, autoClean])
  return null
}

// Components that tests expect:
export function FetchUser(props: any): JSX.Element {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("https://example.com")
        if (!response.ok) {
          throw new Error("Request failed")
        }
        const data = await response.json()
        setUser(data)
      } catch (e: any) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    fetchUser()
  }, [])
  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>Error</p>
  }
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  )
}

export function PollingTime(props: any): JSX.Element {
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)
    return () => clearInterval(id)
  }, [])
  return <p>Current time: {time}</p>
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
                <DataLoader/>
              </div>
            </div>
            
            <div style={{ padding: '16px', border: '1px dashed #ccc', borderRadius: '8px' }}>
              <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>📝 PollingComponent</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                <PollingComponent/>
              </div>
            </div>
            
            <div style={{ padding: '16px', border: '1px dashed #ccc', borderRadius: '8px' }}>
              <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>📝 SearchDebouncer</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                <SearchDebouncer/>
              </div>
            </div>
            
            <div style={{ padding: '16px', border: '1px dashed #ccc', borderRadius: '8px' }}>
              <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>📝 ResourceCleaner</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                <ResourceCleaner/>
              </div>
            </div>
            
            <div style={{ padding: '16px', border: '1px dashed #ccc', borderRadius: '8px' }}>
              <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>📝 FetchUser</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                <FetchUser/>
              </div>
            </div>
            
            <div style={{ padding: '16px', border: '1px dashed #ccc', borderRadius: '8px' }}>
              <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>📝 PollingTime</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                <PollingTime/>
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