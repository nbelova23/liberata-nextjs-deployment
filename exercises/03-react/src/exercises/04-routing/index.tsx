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

import React, { useEffect, useState } from 'react';
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
  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/products">Products</Link> |{" "}
      <Link to="/admin">Admin</Link> |{" "}
      <Link to="/profile">Profile</Link>
    </nav>
  )

}

export function Home(): JSX.Element {
  return (
    <div>
      <Navigation />
      <h1>Welcome to Our Store</h1>
    </div>
  )
}

export function ProductList(): JSX.Element {
  return (
    <div>
      <Navigation />

      <h2>Product List</h2>

      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              {product.name} - ${product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function ProductDetail(): JSX.Element {
  const { id } = useParams()
  const product = products.find(
    (p) => p.id === parseInt(id || "")
  )
  if (!product) {
    return <p>Product not found</p>
  }

  return (
    <div>
      <Navigation />

      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
    </div>
  )
}

export function About(): JSX.Element {
  return (
    <div>
      <Navigation />
      <h2>About</h2>
      <p>This is our store. We sell great products!</p>
    </div>
  )
}

export function Contact(): JSX.Element {
  return (
    <div>
      <Navigation />
      <h2>Contact</h2>
      <p>Email: contact@store.com</p>
      <p>Phone: 123-456-7890</p>
    </div>
  )
}

export function AdminPanel(): JSX.Element {
  return <Login />}

export function Profile(): JSX.Element {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 0)
  }, [])

  if (loading) {
    return <p>Loading...</p>
  }
  const user = users[0]
  return (
    <div>

      <h2>Profile</h2>
      <p>Name: {user.name}</p>
      <p>Role: {user.role}</p>
    </div>
  )
}

export function Login(): JSX.Element {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const handleLogin = () => {
    navigate("/admin")
  }
  return (
    <div>
      <h2>Sign in</h2>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
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
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '16px',
            marginTop: '16px'
          }}>
            <div style={{ padding: '16px', border: '1px dashed #ccc', borderRadius: '8px' }}>
              <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>📝 Navigation</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                TODO: Menu component with Link components for page navigation
              </div>
            </div>
            
            <div style={{ padding: '16px', border: '1px dashed #ccc', borderRadius: '8px' }}>
              <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>📝 Home</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                TODO: Welcome page component (main landing page)
              </div>
            </div>
            
            <div style={{ padding: '16px', border: '1px dashed #ccc', borderRadius: '8px' }}>
              <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>📝 ProductList</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                TODO: Component showing all products with links to details
              </div>
            </div>
            
            <div style={{ padding: '16px', border: '1px dashed #ccc', borderRadius: '8px' }}>
              <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>📝 ProductDetail</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                TODO: Component using useParams to show specific product details
              </div>
            </div>
            
            <div style={{ padding: '16px', border: '1px dashed #ccc', borderRadius: '8px' }}>
              <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>📝 About</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                TODO: About page component with company information
              </div>
            </div>
            
            <div style={{ padding: '16px', border: '1px dashed #ccc', borderRadius: '8px' }}>
              <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>📝 Contact</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                TODO: Contact page component with form or contact info
              </div>
            </div>
            
            <div style={{ padding: '16px', border: '1px dashed #ccc', borderRadius: '8px' }}>
              <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>📝 AdminPanel</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                TODO: Admin-only area component with protected routes
              </div>
            </div>
            
            <div style={{ padding: '16px', border: '1px dashed #ccc', borderRadius: '8px' }}>
              <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>📝 Profile</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                TODO: User profile component showing user information
              </div>
            </div>
            
            <div style={{ padding: '16px', border: '1px dashed #ccc', borderRadius: '8px' }}>
              <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>📝 Login</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                <Login/>
              </div>
            </div>
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

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />

      {/* 404 */}
      <Route path="*" element={<p>Page not found</p>} />
    </Routes>
  )

}