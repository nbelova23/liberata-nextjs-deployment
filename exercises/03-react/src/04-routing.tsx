/**
 * Exercise 4: Routing 🗺️
 * 
 * Think of routing like a GPS:
 * - It tells you where you are (current page)
 * - It helps you get where you want to go (navigation)
 * - It remembers where you've been (history)
 * - It shows different things in different places (routes)
 *
 * In this exercise, you'll build:
 * 1. A Navigation Menu (like a map)
 * 2. Different Pages (like rooms in a house)
 * 3. Links Between Pages (like doors between rooms)
 * 4. Dynamic Routes (like addresses with house numbers)
 *
 * Documentation:
 * - React Router: https://reactrouter.com/docs/en/v6/getting-started/overview
 * - Routes and Route: https://reactrouter.com/docs/en/v6/components/routes
 * - Link and NavLink: https://reactrouter.com/docs/en/v6/components/link
 */

import React from 'react';
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate, Navigate } from 'react-router-dom';

// Types
interface User {
  id: number;
  name: string;
  role: 'admin' | 'user';
}

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

// Mock Data
const users: User[] = [
  { id: 1, name: 'John Doe', role: 'admin' },
  { id: 2, name: 'Jane Smith', role: 'user' },
];

const products: Product[] = [
  { id: 1, name: 'Laptop', price: 999, category: 'electronics' },
  { id: 2, name: 'Smartphone', price: 699, category: 'electronics' },
  { id: 3, name: 'Headphones', price: 199, category: 'accessories' },
];

// Components
export function Navigation(): JSX.Element {
  throw new Error('🚧 TODO: Implement the Navigation component! Use Link components to create a navigation menu.');
}

export function Home(): JSX.Element {
  throw new Error('🚧 TODO: Implement the Home component! Create a welcome page with navigation.');
}

export function ProductList(): JSX.Element {
  throw new Error('🚧 TODO: Implement the ProductList component! Show a list of products with links to details.');
}

export function ProductDetail(): JSX.Element {
  throw new Error('🚧 TODO: Implement the ProductDetail component! Use useParams to get the product ID and show details.');
}

export function About(): JSX.Element {
  throw new Error('🚧 TODO: Implement the About component! Create an about page with company info.');
}

export function Contact(): JSX.Element {
  throw new Error('🚧 TODO: Implement the Contact component! Create a contact form or contact info.');
}

export function AdminPanel(): JSX.Element {
  throw new Error('🚧 TODO: Implement the AdminPanel component! Create an admin-only area.');
}

export function Profile(): JSX.Element {
  throw new Error('🚧 TODO: Implement the Profile component! Show user profile information.');
}

export function Login(): JSX.Element {
  throw new Error('🚧 TODO: Implement the Login component! Create a login form with navigation after login.');
}

export function App(): JSX.Element {
  throw new Error('🚧 TODO: Implement the App component! Set up BrowserRouter with Routes and Route components.');
}

// Example usage (like a preview):
export function Example() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Routing Exercise</h2>
      <p style={{ color: '#666', marginBottom: '20px' }}>
        🎯 <strong>Your Goal:</strong> Implement routing components for navigation between pages!
      </p>
      
      <div style={{ 
        border: '2px dashed #ffc107', 
        padding: '20px', 
        borderRadius: '8px',
        backgroundColor: '#fff3cd'
      }}>
        <p style={{ color: '#856404', marginBottom: '16px' }}>
          ⚠️ <strong>Not implemented yet!</strong> The routing components below will throw errors until you implement them.
        </p>
        
        <div style={{ opacity: 0.5 }}>
          <h3>What you'll build:</h3>
          
          <div style={{ margin: '8px 0', padding: '8px', border: '1px dashed #ccc' }}>
            📝 Navigation: A menu with links to different pages
          </div>
          
          <div style={{ margin: '8px 0', padding: '8px', border: '1px dashed #ccc' }}>
            📝 Home: A welcome page (like the front door)
          </div>
          
          <div style={{ margin: '8px 0', padding: '8px', border: '1px dashed #ccc' }}>
            📝 ProductList: A page showing all products
          </div>
          
          <div style={{ margin: '8px 0', padding: '8px', border: '1px dashed #ccc' }}>
            📝 ProductDetail: A page for specific product (uses URL parameters)
          </div>
          
          <div style={{ margin: '8px 0', padding: '8px', border: '1px dashed #ccc' }}>
            📝 App: Main component with router setup and all routes
          </div>
        </div>
      </div>
      
      <div style={{ marginTop: '20px', padding: '16px', backgroundColor: '#d1ecf1', borderRadius: '8px' }}>
        <h4 style={{ color: '#0c5460', margin: '0 0 8px 0' }}>💡 Getting Started:</h4>
        <ol style={{ color: '#0c5460', margin: 0, paddingLeft: '20px' }}>
          <li>Start with the Navigation component using Link components</li>
          <li>Create simple page components (Home, About, Contact)</li>
          <li>Set up the App component with BrowserRouter and Routes</li>
          <li>Add dynamic routes with useParams for ProductDetail</li>
          <li>Test navigation by clicking links in the browser</li>
        </ol>
      </div>
    </div>
  );
}

// Export the Example as default for now
export default Example; 