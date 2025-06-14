import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {
  Button,
  Card,
  UserProfile,
  TodoList,
  SearchInput
} from '../../src/exercises/01-components';

describe('React Components', () => {
  describe('Button', () => {
    it('renders with correct variant and size', () => {
      render(
        <Button variant="primary" size="medium" onClick={() => {}}>
          Click me
        </Button>
      );
      const button = screen.getByText('Click me');
      expect(button).toBeInTheDocument();
      // Add more specific class/style checks based on your implementation
    });

    it('handles click events', () => {
      const handleClick = jest.fn();
      render(
        <Button variant="primary" size="medium" onClick={handleClick}>
          Click me
        </Button>
      );
      fireEvent.click(screen.getByText('Click me'));
      expect(handleClick).toHaveBeenCalled();
    });

    it('disables button when disabled prop is true', () => {
      render(
        <Button variant="primary" size="medium" onClick={() => {}} disabled>
          Click me
        </Button>
      );
      const button = screen.getByText('Click me');
      expect(button).toBeDisabled();
    });
  });

  describe('Card', () => {
    it('renders with title and children', () => {
      render(
        <Card title="Test Card">
          <div>Card content</div>
        </Card>
      );
      expect(screen.getByText('Test Card')).toBeInTheDocument();
      expect(screen.getByText('Card content')).toBeInTheDocument();
    });

    it('renders footer when provided', () => {
      render(
        <Card title="Test Card" footer={<button>Footer</button>}>
          <div>Card content</div>
        </Card>
      );
      expect(screen.getByText('Footer')).toBeInTheDocument();
    });
  });

  describe('UserProfile', () => {
    const defaultProps = {
      name: 'John Doe',
      avatar: 'https://example.com/avatar.jpg',
      role: 'Developer',
      email: 'john@example.com'
    };

    it('renders user information', () => {
      render(<UserProfile {...defaultProps} />);
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('Developer')).toBeInTheDocument();
      expect(screen.getByText('john@example.com')).toBeInTheDocument();
    });

    it('handles edit and delete actions', () => {
      const onEdit = jest.fn();
      const onDelete = jest.fn();
      render(
        <UserProfile {...defaultProps} onEdit={onEdit} onDelete={onDelete} />
      );
      // Add tests for edit and delete buttons based on your implementation
    });
  });

  describe('TodoList', () => {
    const todos = [
      { id: '1', text: 'Learn React', completed: false },
      { id: '2', text: 'Build something', completed: true }
    ];

    it('renders list of todos', () => {
      render(
        <TodoList
          todos={todos}
          onToggle={() => {}}
          onDelete={() => {}}
        />
      );
      expect(screen.getByText('Learn React')).toBeInTheDocument();
      expect(screen.getByText('Build something')).toBeInTheDocument();
    });

    it('handles todo toggle and delete', () => {
      const onToggle = jest.fn();
      const onDelete = jest.fn();
      render(
        <TodoList
          todos={todos}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      );
      // Add tests for toggle and delete actions based on your implementation
    });
  });

  describe('SearchInput', () => {
    it('renders with placeholder', () => {
      render(
        <SearchInput
          value=""
          onChange={() => {}}
          placeholder="Search..."
        />
      );
      expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
    });

    it('handles input changes', () => {
      const onChange = jest.fn();
      render(
        <SearchInput
          value=""
          onChange={onChange}
          placeholder="Search..."
        />
      );
      fireEvent.change(screen.getByPlaceholderText('Search...'), {
        target: { value: 'test' }
      });
      expect(onChange).toHaveBeenCalledWith('test');
    });

    it('debounces input changes', async () => {
      const onChange = jest.fn();
      render(
        <SearchInput
          value=""
          onChange={onChange}
          placeholder="Search..."
          debounceMs={300}
        />
      );
      const input = screen.getByPlaceholderText('Search...');
      fireEvent.change(input, { target: { value: 't' } });
      fireEvent.change(input, { target: { value: 'te' } });
      fireEvent.change(input, { target: { value: 'tes' } });
      fireEvent.change(input, { target: { value: 'test' } });
      
      // Wait for debounce
      await new Promise(resolve => setTimeout(resolve, 300));
      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith('test');
    });
  });
}); 