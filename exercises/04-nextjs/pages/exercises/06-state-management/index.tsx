/**
 * Exercise 6: State Management in Next.js
 * 
 * STEP-BY-STEP INSTRUCTIONS:
 * 
 * STEP 1: Use React state management patterns (from React exercises)
 * - Copy the ShoppingCart components from React Exercise 5
 * - Use the same CartContext and CartProvider patterns
 * - Adapt them to work with Next.js pages
 * 
 * STEP 2: Install Zustand (alternative approach)
 * - Run: pnpm install zustand
 * - Zustand is simpler than Redux for learning
 * 
 * STEP 3: Create a cart store
 * - Create: pages/exercises/06-state-management/store/cartStore.ts
 * - Add functions: addItem, removeItem, clearCart
 * - Store items array and total count
 * 
 * STEP 4: Create product components (reuse React patterns)
 * - Create: pages/exercises/06-state-management/components/ProductList.tsx
 * - Create: pages/exercises/06-state-management/components/Cart.tsx
 * - Use the same ProductCard component pattern from React exercises
 * - Display products with "Add to Cart" buttons
 * 
 * STEP 4: Connect components to store
 * - Use useCartStore() hook in components
 * - Add items to cart when button clicked
 * - Show cart count in header
 * 
 * STEP 5: Add persistence
 * - Save cart to localStorage
 * - Load cart on page refresh
 * - Handle hydration issues
 * 
 * HINTS:
 * - Zustand store: create((set) => ({ items: [], addItem: (item) => set(...) }))
 * - Use useEffect to sync with localStorage
 * - Check if window exists before using localStorage
 * - Start simple - just count items first
 * - Add product details later
 * 
 * SIMPLE START:
 * - Create a counter store first
 * - Add increment/decrement functions
 * - Practice the Zustand pattern
 * 
 * DOCUMENTATION:
 * - Zustand: https://github.com/pmndrs/zustand
 * - React Context: https://reactjs.org/docs/context.html
 * - State Management: https://nextjs.org/docs/basic-features/data-fetching
 */

import Link from 'next/link';
import ProductList from './components/ProductList';
import Cart from './components/Cart';


export default function StateManagement() {
  return (

    <div className="max-w-xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">
        Exercise 6: State Management
      </h1>
      <ProductList />
      <Cart />
    </div>

  );
} 