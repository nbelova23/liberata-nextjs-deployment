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
  throw new Error('🚧 TODO: Implement the TodoList component! Use useState to manage todos and filters.');
}

// 2. Create a DataFetcher component (like a news reader)
//    Should manage:
//    - data: The fetched information
//    - loading: Is it getting data?
//    - error: Did something go wrong?
//    - refetch: Get data again
//    - pagination: Handle multiple pages
export function DataFetcher(): JSX.Element {
  throw new Error('🚧 TODO: Implement the DataFetcher component! Use useState and useEffect to fetch and manage data.');
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
  throw new Error('🚧 TODO: Implement the Counter component! Use useReducer for complex state management.');
}

// 4. Create a FormWithValidation component (like a smart form)
//    Should manage:
//    - values: Form data
//    - errors: Validation errors
//    - touched: Which fields were visited
//    - isValid: Is form ready to submit?
//    - isSubmitting: Is form being sent?
export function FormWithValidation(): JSX.Element {
  throw new Error('🚧 TODO: Implement the FormWithValidation component! Use useState for complex form state.');
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
  throw new Error('🚧 TODO: Implement the CartProvider component! Use useState and Context to manage cart state.');
}

export function ShoppingCart(): JSX.Element {
  throw new Error('🚧 TODO: Implement the ShoppingCart component! Use useContext to access cart state.');
}

export function ProductCard({ product }: { product: any }): JSX.Element {
  throw new Error('🚧 TODO: Implement the ProductCard component! Use useContext to add products to cart.');
}

// Example usage (like a preview):
export function Example() {
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
          
          <div style={{ margin: '8px 0', padding: '8px', border: '1px dashed #ccc' }}>
            📝 TodoList: A task manager with filtering and actions
          </div>
          
          <div style={{ margin: '8px 0', padding: '8px', border: '1px dashed #ccc' }}>
            📝 DataFetcher: A component that fetches and manages API data
          </div>
          
          <div style={{ margin: '8px 0', padding: '8px', border: '1px dashed #ccc' }}>
            📝 Counter: A complex counter using useReducer
          </div>
          
          <div style={{ margin: '8px 0', padding: '8px', border: '1px dashed #ccc' }}>
            📝 FormWithValidation: A form with complex validation state
          </div>
          
          <div style={{ margin: '8px 0', padding: '8px', border: '1px dashed #ccc' }}>
            📝 ShoppingCart: A cart system using Context API
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