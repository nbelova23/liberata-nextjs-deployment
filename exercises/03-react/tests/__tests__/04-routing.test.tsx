import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Routes, Route, useParams, useNavigate } from 'react-router-dom';
import {
  Navigation,
  Home,
  ProductList,
  ProductDetail,
  AdminPanel,
  Profile,
  Login,
  App
} from '../../src/exercises/04-routing';

// Mock react-router-dom hooks
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
  useParams: () => ({ id: '1' })
}));

describe('Navigation', () => {
  it('renders navigation links', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText('Admin')).toBeInTheDocument();
    expect(screen.getByText('Profile')).toBeInTheDocument();
  });
});

describe('Home', () => {
  it('renders welcome message', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByText('Welcome to Our Store')).toBeInTheDocument();
  });
});

describe('ProductList', () => {
  it('renders list of products', () => {
    render(
      <MemoryRouter>
        <ProductList />
      </MemoryRouter>
    );

    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText('Laptop - $999')).toBeInTheDocument();
    expect(screen.getByText('Smartphone - $699')).toBeInTheDocument();
  });
});

describe('ProductDetail', () => {
  it('renders product details', () => {
    render(
      <MemoryRouter>
        <ProductDetail />
      </MemoryRouter>
    );

    expect(screen.getByText('Laptop')).toBeInTheDocument();
    expect(screen.getByText('Price: $999')).toBeInTheDocument();
    expect(screen.getByText('Category: electronics')).toBeInTheDocument();
  });

  it('shows not found message for invalid product', () => {
    (useParams as jest.Mock).mockReturnValue({ id: '999' });
    
    render(
      <MemoryRouter>
        <ProductDetail />
      </MemoryRouter>
    );

    expect(screen.getByText('Product not found')).toBeInTheDocument();
  });
});

describe('AdminPanel', () => {
  it('redirects to login when not authenticated', () => {
    render(
      <MemoryRouter>
        <AdminPanel />
      </MemoryRouter>
    );

    expect(screen.getByText('Login')).toBeInTheDocument();
  });
});

describe('Profile', () => {
  it('shows loading state initially', () => {
    render(
      <MemoryRouter>
        <Profile />
      </MemoryRouter>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders user profile after loading', async () => {
    render(
      <MemoryRouter>
        <Profile />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Profile')).toBeInTheDocument();
      expect(screen.getByText('Name: John Doe')).toBeInTheDocument();
      expect(screen.getByText('Role: admin')).toBeInTheDocument();
    });
  });
});

describe('Login', () => {
  it('handles form submission', () => {
    const navigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigate);

    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText('Username:'), {
      target: { value: 'John Doe' }
    });

    fireEvent.change(screen.getByLabelText('Password:'), {
      target: { value: 'password' }
    });

    fireEvent.click(screen.getByText('Login'));

    expect(navigate).toHaveBeenCalledWith('/admin');
  });
});

describe('App', () => {
  it('renders all routes', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('Welcome to Our Store')).toBeInTheDocument();
  });

  it('shows 404 for invalid route', () => {
    render(
      <MemoryRouter initialEntries={['/invalid']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('Page not found')).toBeInTheDocument();
  });
}); 