// Exercise 5: State Management 🧠
// Think of state like a brain:
// - It remembers things (data)
// - It tells other parts what to do (updates)
// - It can get new information (fetching)
// - It handles errors (like a safety net)
//
// In this exercise, you'll build:
// 1. A TodoList with state (like a smart shopping list)
// 2. A DataFetcher with loading states (like a news reader)
// 3. A Counter with complex state (like a scoreboard)
// 4. A Form with validation state (like a smart form)
//
// Documentation:
// - State Management: https://reactjs.org/docs/thinking-in-react.html
// - useReducer: https://reactjs.org/docs/hooks-reference.html#usereducer
// - Context API: https://reactjs.org/docs/context.html

import React, { useState, useEffect, useReducer, createContext, useContext } from 'react';

// Custom hook for data fetching
function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (e) {
        setError(e instanceof Error ? e.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

// Example: Todo List with Local Storage
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const;
}

// 1. Create a TodoList component (like a smart shopping list)
//    Should manage:
//    - todos: List of tasks
//    - filter: Show all/completed/active
//    - addTodo: Add new task
//    - toggleTodo: Mark as done/undone
//    - deleteTodo: Remove task
//    - clearCompleted: Remove all done tasks
export function TodoList(): JSX.Element {
  const [todos, setTodos] = useState<Todo[]>([])
  const [filter, setFilter] = useState("all")
  const [text, setText] = useState("")
  const addTodo = () => {
    if (!text.trim()) return
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false
    }
    setTodos([...todos, newTodo])
    setText("")
  }
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    )
  }
  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }
  const filteredTodos = todos.filter(todo => {
    if (filter === "completed") return todo.completed
    if (filter === "active") return !todo.completed
    return true
  })
  return (
    <div>
      <h2>Todo List</h2>
      <input
        placeholder="Add new todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>
      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  )
}

// 2. Create a DataFetcher component (like a news reader)
//    Should manage:
//    - data: The fetched information
//    - loading: Is it getting data?
//    - error: Did something go wrong?
//    - refetch: Get data again
//    - pagination: Handle multiple pages
export function DataFetcher(): JSX.Element {
  const { data, loading, error } = useFetch<{
    id: number
    name: string
    email: string
  }>("https://jsonplaceholder.typicode.com/users/1")
  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>Error: {error}</p>
  }
  return (
    <div>
      <h2>Data Fetcher</h2>
      <p>{data?.name}</p>
      <p>{data?.email}</p>
    </div>
  )
}

// 3. Create a Counter component with useReducer (like a complex scoreboard)
//    Should handle:
//    - count: Current number
//    - increment: Add 1
//    - decrement: Subtract 1
//    - incrementBy: Add specific amount
//    - reset: Back to 0
//    - history: Track all changes
export function Counter(): JSX.Element {
  const initialState = {
    count: 0,
    history: [] as number[]
  }
  function reducer(state: typeof initialState, action: any) {
    switch (action.type) {
      case "increment": {
        const newCount = state.count + 1
        return {
          count: newCount,
          history: [...state.history, newCount]
        }
      }
      case "decrement": {
        const newCount = state.count - 1
        return {
          count: newCount,
          history: [...state.history, newCount]
        }
      }
      case "incrementBy": {
        const newCount = state.count + action.payload
        return {
          count: newCount,
          history: [...state.history, newCount]
        }
      }
      case "reset":
        return {
          count: 0,
          history: []
        }
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h2>Counter</h2>
        <p>{state.count}</p>
      <div>
        <button onClick={() => dispatch({ type: "increment" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "incrementBy", payload: 5 })}>
          +5
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>
          Reset
        </button>
      </div>
    </div>
  )
}

// 4. Create a FormWithValidation component (like a smart form)
//    Should manage:
//    - values: Form data
//    - errors: Validation errors
//    - touched: Which fields were visited
//    - isValid: Is form ready to submit?
//    - isSubmitting: Is form being sent?
export function FormWithValidation(): JSX.Element {
  const [values, setValues] = useState({
    name: "",
    email: ""
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const validate = (vals: typeof values) => {
    const newErrors: Record<string, string> = {}
    if (!vals.name) {
      newErrors.name = "Name is required"
    }
    if (!vals.email) {
      newErrors.email = "Email is required"
    } else if (!vals.email.includes("@")) {
      newErrors.email = "Invalid email"
    }
    return newErrors
  }
  const handleChange = (name: string, value: string) => {
    const newValues = { ...values, [name]: value }
    setValues(newValues)
    setErrors(validate(newValues))
  }
  const handleBlur = (name: string) => {
    setTouched({ ...touched, [name]: true })
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    const validationErrors = validate(values)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted!")
    }
    setIsSubmitting(false)
  }
  const isValid = Object.keys(errors).length === 0
  return (
    <form onSubmit={handleSubmit}>
      <h2>Form With Validation</h2>
      {/* Name */}
      <div>
        <label>Name:</label>
        <input
          value={values.name}
          onChange={(e) => handleChange("name", e.target.value)}
          onBlur={() => handleBlur("name")}
        />
        {touched.name && errors.name && (
          <p style={{ color: "red" }}>{errors.name}</p>
        )}
      </div>
      {/* Email */}
      <div>
        <label>Email:</label>
        <input
          value={values.email}
          onChange={(e) => handleChange("email", e.target.value)}
          onBlur={() => handleBlur("email")}
        />
        {touched.email && errors.email && (
          <p style={{ color: "red" }}>{errors.email}</p>
        )}
      </div>
      {/* Submit */}
      <button type="submit" disabled={!isValid || isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  )
}

// 5. Create a ShoppingCart with Context (like a store cart)
//    Should provide:
//    - items: Products in cart
//    - addItem: Add product
//    - removeItem: Remove product
//    - updateQuantity: Change amount
//    - total: Calculate price
//    - clearCart: Empty cart
export const CartContext = createContext<any>(null);

export function CartProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [items, setItems] = useState<any[]>([])
  const addItem = (product: any) => {
    const existing = items.find(item => item.id === product.id)
    if (existing) {
      setItems(
        items.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )
    } else {
      setItems([...items, { ...product, quantity: 1 }])
    }
  }
  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id))
  }
  const updateQuantity = (id: number, quantity: number) => {
    setItems(
      items.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    )
  }
  const clearCart = () => {
    setItems([])
  }
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )
  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, clearCart, total }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function ShoppingCart(): JSX.Element {
  const { items, removeItem, updateQuantity, clearCart, total } =
    useContext(CartContext)
  return (
    <div>
      <h2>Shopping Cart</h2>
      {items.length === 0 && <p>Cart is empty</p>}
      <ul>
        {items.map((item: any) => (
          <li key={item.id}>
            {item.name} - ${item.price} × {item.quantity}
            <button onClick={() => removeItem(item.id)}>
              Remove
            </button>
            <button onClick={() =>
              updateQuantity(item.id, item.quantity + 1)
            }>
              +
            </button>

            <button onClick={() =>
              updateQuantity(item.id, item.quantity - 1)
            }>
              -
            </button>
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  )
}

export function ProductCard({ product }: { product: any }): JSX.Element {
  const { addItem } = useContext(CartContext)
  return (
    <div>
      <h3>{product.name}</h3>
      <p>${product.price}</p>

      <button onClick={() => addItem(product)}>
        Add to Cart
      </button>
    </div>
  )
}

// Example usage (like a preview):
export function Example() {
  const fakeProducts = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Phone", price: 699 }
  ]
  return (
    <div style={{ padding: '20px' }}>
      <h2>State Management Exercise</h2>
      <p style={{ color: '#666', marginBottom: '20px' }}>
        🎯 <strong>Your Goal:</strong> Implement components with complex state management!
      </p>
      
      <div style={{ 
        border: '2px dashed #ffc107', 
        padding: '20px', 
        borderRadius: '8px',
        backgroundColor: '#fff3cd'
      }}>
        <p style={{ color: '#856404', marginBottom: '16px' }}>
          ⚠️ <strong>Not implemented yet!</strong> The state management components below will throw errors until you implement them.
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
              <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>📝 TodoList</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                <TodoList/>
              </div>
            </div>
            
            <div style={{ padding: '16px', border: '1px dashed #ccc', borderRadius: '8px' }}>
              <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>📝 DataFetcher</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                <DataFetcher/>
              </div>
            </div>
            
            <div style={{ padding: '16px', border: '1px dashed #ccc', borderRadius: '8px' }}>
              <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>📝 Counter</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                <Counter/>
              </div>
            </div>
            
            <div style={{ padding: '16px', border: '1px dashed #ccc', borderRadius: '8px' }}>
              <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>📝 FormWithValidation</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                <FormWithValidation/>
              </div>
            </div>
            
            <div style={{ padding: '16px', border: '1px dashed #ccc', borderRadius: '8px' }}>
              <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>📝 ShoppingCart</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                
                <CartProvider>
                  {fakeProducts.map(p => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                  <ShoppingCart />
                </CartProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div style={{ marginTop: '20px', padding: '16px', backgroundColor: '#d1ecf1', borderRadius: '8px' }}>
        <h4 style={{ color: '#0c5460', margin: '0 0 8px 0' }}>💡 Getting Started:</h4>
        <ol style={{ color: '#0c5460', margin: 0, paddingLeft: '20px' }}>
          <li>Start with TodoList using simple useState</li>
          <li>Try DataFetcher with useEffect for API calls</li>
          <li>Use useReducer for Counter's complex state logic</li>
          <li>Create Context for ShoppingCart to share state</li>
          <li>Test each component to see state changes in action</li>
        </ol>
      </div>
    </div>
  );
}

export const App = () => <Example />; 