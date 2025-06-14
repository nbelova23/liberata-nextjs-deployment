# React Routing Exercise

This exercise introduces React Router and navigation patterns in React applications. You'll learn how to create a multi-page application with proper routing, navigation, and protected routes.

## What is React Router?

React Router is a standard library for routing in React applications. It enables the navigation between views of different components in a React application, allows changing the browser URL, and keeps the UI in sync with the URL.

## Official Documentation

- [React Router Documentation](https://reactrouter.com/docs/en/v6)
- [Getting Started](https://reactrouter.com/docs/en/v6/getting-started/overview)
- [Route Configuration](https://reactrouter.com/docs/en/v6/getting-started/concepts)

## Key Concepts in This Exercise

### 1. Basic Routing
```typescript
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<ProductList />} />
  </Routes>
</BrowserRouter>
```
- **Purpose**: Define application routes
- **Features**:
  - Route matching
  - Component rendering
  - URL management
- **Learn More**: [Route Configuration](https://reactrouter.com/docs/en/v6/getting-started/concepts)

### 2. Navigation
```typescript
<Link to="/products">Products</Link>
```
- **Purpose**: Client-side navigation
- **Features**:
  - Declarative navigation
  - URL updates
  - History management
- **Learn More**: [Navigation](https://reactrouter.com/docs/en/v6/getting-started/concepts#navigation)

### 3. Route Parameters
```typescript
<Route path="/products/:id" element={<ProductDetail />} />
```
- **Purpose**: Dynamic routing
- **Features**:
  - Parameter extraction
  - Dynamic content
  - URL patterns
- **Learn More**: [Route Parameters](https://reactrouter.com/docs/en/v6/getting-started/concepts#dynamic-segments)

### 4. Protected Routes
```typescript
if (!isAuthenticated) {
  return <Navigate to="/login" replace />;
}
```
- **Purpose**: Route protection
- **Features**:
  - Authentication checks
  - Redirect handling
  - Access control
- **Learn More**: [Protected Routes](https://reactrouter.com/docs/en/v6/getting-started/concepts#redirects)

## Components in This Exercise

### 1. Navigation Component
- Main navigation menu
- Link components
- Route structure

### 2. Product Components
- Product list view
- Product detail view
- Route parameters

### 3. Admin Components
- Protected admin panel
- Authentication check
- User management

### 4. Profile Component
- User profile view
- Loading states
- Data fetching

### 5. Login Component
- Authentication form
- Navigation after login
- Form handling

## Best Practices

1. **Route Organization**:
   - Group related routes
   - Use nested routes
   - Implement lazy loading

2. **Navigation**:
   - Use Link for internal navigation
   - Handle external links properly
   - Implement breadcrumbs

3. **Route Protection**:
   - Check authentication
   - Handle redirects
   - Manage access control

4. **Error Handling**:
   - Implement 404 pages
   - Handle loading states
   - Show error messages

## Testing Routes

1. **Component Tests**:
   - Test route rendering
   - Test navigation
   - Test route parameters

2. **Integration Tests**:
   - Test route flow
   - Test protected routes
   - Test redirects

3. **E2E Tests**:
   - Test complete navigation
   - Test authentication flow
   - Test error handling

## Common Pitfalls

1. **Route Configuration**:
   - Order of routes matters
   - Catch-all routes last
   - Handle nested routes

2. **Navigation**:
   - Use proper Link components
   - Handle browser history
   - Manage route state

3. **Authentication**:
   - Check auth state
   - Handle redirects
   - Manage tokens

## Additional Resources

- [React Router Examples](https://reactrouter.com/docs/en/v6/examples)
- [Route Guards](https://reactrouter.com/docs/en/v6/getting-started/concepts#redirects)
- [Route Hooks](https://reactrouter.com/docs/en/v6/getting-started/concepts#hooks)

## Getting Started

1. Install React Router:
   ```bash
   npm install react-router-dom
   ```

2. Set up basic routing:
   ```typescript
   import { BrowserRouter, Routes, Route } from 'react-router-dom';
   ```

3. Create route components:
   ```typescript
   const Home = () => <div>Home</div>;
   const About = () => <div>About</div>;
   ```

4. Configure routes:
   ```typescript
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
     </Routes>
   </BrowserRouter>
   ```

## Next Steps

After completing this exercise, you should:
1. Understand React Router basics
2. Be able to create multi-page applications
3. Know how to handle protected routes
4. Understand route parameters
5. Be able to test routes

## Exercise Structure

1. **Basic Routing**:
   - Set up routes
   - Create navigation
   - Handle basic navigation

2. **Dynamic Routing**:
   - Add route parameters
   - Create detail views
   - Handle dynamic content

3. **Protected Routes**:
   - Implement authentication
   - Create protected views
   - Handle redirects

4. **Advanced Features**:
   - Add loading states
   - Handle errors
   - Implement nested routes 