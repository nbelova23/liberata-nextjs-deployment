import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { TodoList, DataFetcher, Counter } from '../../src/exercises/05-state-management';

describe('TodoList', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add new todo');
    const addButton = screen.getByText('Add');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  it('toggles todo completion', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add new todo');
    const addButton = screen.getByText('Add');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });

  it('deletes a todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add new todo');
    const addButton = screen.getByText('Add');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    const deleteButton = screen.getByText('Delete');
    fireEvent.click(deleteButton);

    expect(screen.queryByText('New Todo')).not.toBeInTheDocument();
  });
});

describe('DataFetcher', () => {
  it('shows loading state initially', () => {
    render(<DataFetcher />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('shows user data after loading', async () => {
    const mockUser = {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
    };

    (window as any).fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockUser),
    });

    render(<DataFetcher />);

    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('john@example.com')).toBeInTheDocument();
    });
  });

  it('shows error state when fetch fails', async () => {
    (window as any).fetch = jest.fn().mockRejectedValue(new Error('Failed to fetch'));

    render(<DataFetcher />);

    await waitFor(() => {
      expect(screen.getByText(/Error:/)).toBeInTheDocument();
    });
  });
});

describe('Counter', () => {
  it('shows initial count', () => {
    render(<Counter />);
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('increments count', () => {
    render(<Counter />);
    const incrementButton = screen.getByText('Increment');
    
    fireEvent.click(incrementButton);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('decrements count', () => {
    render(<Counter />);
    const decrementButton = screen.getByText('Decrement');
    
    fireEvent.click(decrementButton);
    expect(screen.getByText('-1')).toBeInTheDocument();
  });

  it('resets count', () => {
    render(<Counter />);
    const incrementButton = screen.getByText('Increment');
    const resetButton = screen.getByText('Reset');
    
    fireEvent.click(incrementButton);
    fireEvent.click(resetButton);
    expect(screen.getByText('0')).toBeInTheDocument();
  });
}); 