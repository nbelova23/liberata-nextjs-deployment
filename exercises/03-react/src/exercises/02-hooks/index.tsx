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

import React, { useState, useEffect, useRef } from 'react';

// TODO: Create these hooks:

// 1. Create a useCounter hook (like a scoreboard)
//    - initialValue: Starting number (like 0-0 in a game)
//    - step: How much to add/subtract (like points per goal)
//    Returns:
//    - count: Current number (like the score)
//    - increment: Add to number (like scoring a point)
//    - decrement: Subtract from number (like losing a point)
//    - reset: Back to start (like starting a new game)
export function useCounter(initialValue: number = 0, step: number = 1): {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
} {
    const [count, setCount] = useState(initialValue)

    const increment = () => setCount(prev => prev + step)
    const decrement = () => setCount(prev => prev - step)
    const reset = () => setCount(initialValue)

    return { count, increment, decrement, reset }
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
export function useTimer(initialSeconds: number, onComplete?: () => void): {
  seconds: number;
  isRunning: boolean;
  start: () => void;
  pause: () => void;
  reset: () => void;
} {
  const [seconds, setSeconds] = useState(initialSeconds)
  const [isRunning, setIsRunning] = useState(false)

  const start = () => setIsRunning(true)
  const pause = () => setIsRunning(false)
  const reset = () => {
    setSeconds(initialSeconds)
    setIsRunning(false)
  }

  useEffect(() => {
    if (!isRunning) return

    const interval = setInterval(() => {
      setSeconds(prev => {
      if (prev <= 1) {
        clearInterval(interval)
        setIsRunning(false)
        if (onComplete) onComplete()
          return 0
      }
      return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [isRunning])

  return {seconds, isRunning, start, pause, reset}

}

// 3. Create a useFetch hook (like a news reader)
//    - url: Where to get data (like a news website)
//    Returns:
//    - data: The information (like the news story)
//    - loading: Is it getting data? (like "loading...")
//    - error: Did something go wrong? (like "can't connect")
//    - refetch: Get data again (like refreshing the page)
export function useFetch<T>(url: string): {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
} {

  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchData = async() => {
    setLoading(true)
    setError(null)

    try{
      const response = await fetch(url)
      const result = await response.json()
      setData(result)
      setLoading(false)
    }catch(e){
      setError((e as Error).message)
      setLoading(false)
    }
  }

  useEffect( () => {
    fetchData()
  }, [url])

  const refetch = () => fetchData()

  return {data, loading, error, refetch}

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
): {
  values: T;
  errors: Record<string, string>;
  handleChange: (name: string, value: any) => void;
  handleSubmit: (onSubmit: (values: T) => void) => () => void;
} {

  const [values, setValues] = useState<T>(initialValues)
  const [errors, setErrors] = useState<Record<string, string>>({})
  
  const handleChange = (name: string, value: any) => {
    setValues({
      ...values,
      [name]: value
    })

  setErrors(prev => {
    const newErrors = { ...prev }
    delete newErrors[name]
    return newErrors
  })

  }

  const handleSubmit = (onSubmit: (values: T) => void) => {
    return () => {
      if(validate){
        const validationErrors = validate?.(values)

        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors)
          return
        }

      }
      onSubmit(values)
    }
  }

  return {values, errors, handleChange, handleSubmit}

}



// Additional hooks that tests expect:
export function useLocalStorage(key: string, initialValue: any): [any, (value: any) => void] {
  //throw new Error('🚧 TODO: Implement the useLocalStorage hook! Use useState and useEffect to sync with localStorage.');
  const [value, setValue] = useState( () => {
    const stored = localStorage.getItem(key)
    if(stored !==null){
      return JSON.parse(stored)
    }
    return initialValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

export function useDebounce<T>(value: T, delay: number): T {
  //throw new Error('🚧 TODO: Implement the useDebounce hook! Use useState and useEffect with setTimeout.');
  const [debouncedValue, setDebouncedValue] = useState<T>(value)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => clearTimeout(timer)
  }, [value, delay])

  return debouncedValue
}

export function useWindowSize(): { width: number; height: number } {
  //throw new Error('🚧 TODO: Implement the useWindowSize hook! Use useState and useEffect with window resize listener.');
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })
  const handleResize = () => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize)

    return () => {
     window.removeEventListener("resize", handleResize)
    }
  }, [])
  return size
}

export function usePrevious<T>(value: T): T | undefined {
  //throw new Error('🚧 TODO: Implement the usePrevious hook! Use useRef to store the previous value.');
  const ref = useRef<T | undefined>(undefined)
  useEffect(() => {
    ref.current = value
  }, [value])
  return ref.current
}

export function useClickOutside(callback: () => void): React.RefObject<HTMLDivElement> {
  //throw new Error('🚧 TODO: Implement the useClickOutside hook! Use useRef and useEffect with document click listener.');
  const ref = useRef<HTMLDivElement>(null)

  useEffect( () => {
    const handler = (event: MouseEvent) => {
      if(ref.current && !ref.current.contains(event.target as Node)){
        callback()
     }
    }

    document.addEventListener("mousedown", handler)


    return () => {
      document.removeEventListener("mousedown", handler)
    }

  }, [callback])

  return ref
}

// Components that use the hooks:
export function PersistentCounter(): JSX.Element {
  //throw new Error('🚧 TODO: Implement the PersistentCounter component! Use useLocalStorage and useCounter hooks.');
  const [storedCount, setStoredCount] = useLocalStorage("counter", 0)
  const { count, increment, decrement, reset } = useCounter(storedCount)

  useEffect(() => {
    setStoredCount(count)
  }, [count])

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export function DebouncedSearch(): JSX.Element {
  //throw new Error('🚧 TODO: Implement the DebouncedSearch component! Use useDebounce hook with an input.');
  const [text, setText] = useState("")
  const debouncedText = useDebounce(text, 300)

  return (
    <div>
      <input
        placeholder="Search..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>Current: {text}</p>
      <p>Debounced: {debouncedText}</p>
    </div>
  )
}

export function ResponsiveComponent(): JSX.Element {
  //throw new Error('🚧 TODO: Implement the ResponsiveComponent component! Use useWindowSize hook to show screen size.');
  const {width, height} = useWindowSize()

  return (
    <div>
      <p>Window size: {width}x{height}</p>
    </div>
  )

}

export function PreviousValueComponent(): JSX.Element {
  //throw new Error('🚧 TODO: Implement the PreviousValueComponent component! Use usePrevious hook to show old values.');
  
  const [value, setValue] = useState(0)
  const prev = usePrevious(value)

  return(
    <div>
      <button onClick={ () => setValue(prev => prev+1)}>
        Increment
      </button>
      <p>{"Current: " + value}</p>
      <p>{"Previous: " + prev}</p>
    </div>
  )
}

export function Dropdown(): JSX.Element {
  //throw new Error('🚧 TODO: Implement the Dropdown component! Use useClickOutside hook to close when clicking outside.');
  const [open, setOpen] = useState(false)
  const ref = useClickOutside(() => setOpen(false))

  return (
    <div>
      <button onClick={() => setOpen(prev => !prev)}>
        Toggle
      </button>

      {open && (
        <div ref={ref}>
          Dropdown content
        </div>
      )}
    </div>
  )
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
                <PersistentCounter/>
              </div>
            </div>
            
            <div style={{ padding: '16px', border: '1px dashed #ccc', borderRadius: '8px' }}>
              <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>📝 DebouncedSearch</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                <DebouncedSearch/>
              </div>
            </div>
            
            <div style={{ padding: '16px', border: '1px dashed #ccc', borderRadius: '8px' }}>
              <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>📝 ResponsiveComponent</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                <ResponsiveComponent/>
              </div>
            </div>
            
            <div style={{ padding: '16px', border: '1px dashed #ccc', borderRadius: '8px' }}>
              <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>📝 PreviousValueComponent</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                <PreviousValueComponent/>
              </div>
            </div>
            
            <div style={{ padding: '16px', border: '1px dashed #ccc', borderRadius: '8px' }}>
              <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>📝 Dropdown</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                <Dropdown/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const App = () => <Example />; 

function fetchData() {
  throw new Error('Function not implemented.');
}
