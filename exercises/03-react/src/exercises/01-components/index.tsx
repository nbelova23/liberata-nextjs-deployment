import React, { useState, useEffect } from 'react';


//button component
interface ButtonProps {
    children: React.ReactNode;
    variant: 'primary' | 'secondary'| 'danger';
    size: 'small' | 'medium' | 'large';
    disabled?: boolean;
    onClick: () => void;
}

export function Button({ 
    children, 
    variant = 'primary', 
    size = 'medium', 
    onClick, 
    disabled = false 
  }: ButtonProps): JSX.Element {
    const getButtonStyles = () => {
      const baseStyles = {
        padding: size === 'small' ? '8px 16px' : size === 'large' ? '16px 32px' : '12px 24px',
        fontSize: size === 'small' ? '14px' : size === 'large' ? '18px' : '16px',
        border: 'none',
        borderRadius: '4px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1,
        fontWeight: 'bold',
        transition: 'background-color 0.2s'
      };
  
      const variantStyles = {
        primary: { backgroundColor: '#007bff', color: 'white' },
        secondary: { backgroundColor: '#6c757d', color: 'white' },
        danger: { backgroundColor: '#dc3545', color: 'white' }
      };
  
      return { ...baseStyles, ...variantStyles[variant] };
    };
  
    return (
      <button 
        style={getButtonStyles()} 
        onClick={onClick} 
        disabled={disabled}
      >
        {children}
      </button>
    );
  }

//card component
interface CardProps {
    title?: string;
    children: React.ReactNode;
    footer?: React.ReactNode;
    onClick?: () => void;
}

export function Card({
    children,
    title,
    footer,
    onClick,
}: CardProps ): JSX.Element {
    return (
        <div className="card">
            <h2>{title}</h2>
            {children}
            {footer}
        </div>
    );
}

//user profile component
interface UserProfileProps {
    name: string;
    avatar: string;
    role: string;
    email: string;
    onEdit?: () => void;
    onDelete?: () => void;
}

export function UserProfile({
    name,
    avatar,
    role,
    email,
    onEdit,
    onDelete,
}: UserProfileProps): JSX.Element {
    const containerStyles = {
        display: 'flex',
        alignItems: 'center',
        padding: '16px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: 'white',
        maxWidth: '400px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    };

    const avatarStyles = {
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        marginRight: '16px',
        objectFit: 'cover' as const
    };

    const infoStyles = {
        flex: 1
    };

    const nameStyles = {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '4px',
        margin: '0 0 4px 0'
    };

    const roleStyles = {
        color: '#666',
        fontSize: '14px',
        marginBottom: '4px',
        margin: '0 0 4px 0'
    };

    const emailStyles = {
        color: '#007bff',
        fontSize: '14px',
        margin: '0 0 8px 0'
    };

    const buttonContainerStyles = {
        display: 'flex',
        gap: '8px'
    };

    const editButtonStyles = {
        padding: '4px 8px',
        fontSize: '12px',
        border: '1px solid #007bff',
        borderRadius: '4px',
        cursor: 'pointer',
        backgroundColor: '#007bff',
        color: 'white'
    };

    const deleteButtonStyles = {
        padding: '4px 8px',
        fontSize: '12px',
        border: '1px solid #dc3545',
        borderRadius: '4px',
        cursor: 'pointer',
        backgroundColor: '#dc3545',
        color: 'white'
    };

    return (
        <div style={containerStyles}>
            <img src={avatar} alt={name} style={avatarStyles} />
            <div style={infoStyles}>
                <h2 style={nameStyles}>{name}</h2>
                <p style={roleStyles}>{role}</p>
                <p style={emailStyles}>{email}</p>
                {(onEdit || onDelete) && (
                    <div style={buttonContainerStyles}>
                        {onEdit && (
                            <button style={editButtonStyles} onClick={onEdit}>
                                Edit
                            </button>
                        )}
                        {onDelete && (
                            <button style={deleteButtonStyles} onClick={onDelete}>
                                Delete
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

//todo list component
interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

interface TodoListProps {
    todos: Todo[];
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

export function TodoList({
    todos,
    onToggle,
    onDelete,
}: TodoListProps): JSX.Element {
    return (
        <div>
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
                    {todo.text}
                    <button onClick={() => onDelete(todo.id)}>Delete</button>
                </li>
            ))}
        </ul>
        </div>
    );
}

//input componment
interface SearchInputProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    debounceMs?: number;
}

export function SearchInput({ 
    value, 
    onChange, 
    placeholder = "Search...", 
    debounceMs 
}: SearchInputProps): JSX.Element {
    const [inputValue, setInputValue] = useState(value);

    // Only debounce if debounceMs is explicitly provided
    useEffect(() => {
        if (debounceMs !== undefined) {
            // Debouncing mode
            const timer = setTimeout(() => {
                onChange(inputValue);
            }, debounceMs);

            return () => clearTimeout(timer);
        } else {
            // Immediate mode
            onChange(inputValue);
        }
    }, [inputValue, debounceMs, onChange]);

    // Sync with external value changes
    useEffect(() => {
        setInputValue(value);
    }, [value]);

    const inputStyles = {
        width: '100%',
        padding: '12px 16px',
        fontSize: '16px',
        border: '2px solid #ddd',
        borderRadius: '8px',
        outline: 'none',
        transition: 'border-color 0.2s'
    };

    return (
        <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={placeholder}
            style={inputStyles}
            onFocus={(e) => e.target.style.borderColor = '#007bff'}
            onBlur={(e) => e.target.style.borderColor = '#ddd'}
        />
    );
}

// Add the Example component that shows your Button:
export function Example() {
  // State for interactive examples
  const [todos, setTodos] = useState([
    { id: '1', text: 'Learn React Components', completed: true },
    { id: '2', text: 'Build a Todo App', completed: false },
    { id: '3', text: 'Master React Hooks', completed: false }
  ]);

  const [searchValue, setSearchValue] = useState('');
  const [debouncedSearchValue, setDebouncedSearchValue] = useState('');
  const [lastSearchTime, setLastSearchTime] = useState<Date | null>(null);

  // Todo handlers
  const handleTodoToggle = (id: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleTodoDelete = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Search handlers
  const handleImmediateSearch = (value: string) => {
    setSearchValue(value);
    setLastSearchTime(new Date());
  };

  const handleDebouncedSearch = (value: string) => {
    setDebouncedSearchValue(value);
    setLastSearchTime(new Date());
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>🧩 React Components Exercise</h2>
      <p style={{ color: '#666', marginBottom: '20px' }}>
        🎉 <strong>All components implemented!</strong> Test them below to see how they work.
      </p>
      
      {/* Your existing Button section */}
      <div style={{ marginBottom: '30px' }}>
        <h3>1. Button Component</h3>
        <div style={{ display: 'flex', gap: '8px', marginTop: '16px', flexWrap: 'wrap' }}>
          <Button variant="primary" size="small" onClick={() => alert('Primary Small clicked!')}>
            Primary Small
          </Button>
          <Button variant="secondary" size="medium" onClick={() => alert('Secondary Medium clicked!')}>
            Secondary Medium
          </Button>
          <Button variant="danger" size="large" onClick={() => alert('Danger Large clicked!')}>
            Danger Large
          </Button>
          <Button variant="primary" size="medium" onClick={() => {}} disabled>
            Disabled Button
          </Button>
        </div>
      </div>

      {/* Card section */}
      <div style={{ marginBottom: '30px' }}>
        <h3>2. Card Component</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
          
          {/* Card with just title and children */}
          <Card title="Welcome Card">
            <p>This is a simple card with just a title and some content.</p>
            <p>Cards are great for organizing information!</p>
          </Card>

          {/* Card with title, children, and footer */}
          <Card 
            title="Interactive Card" 
            footer={<Button variant="primary" size="small" onClick={() => alert('Footer button clicked!')}>Action</Button>}
            onClick={() => alert('Card clicked!')}
          >
            <p>This card has a footer with a button.</p>
            <p>Try clicking anywhere on this card!</p>
          </Card>

          {/* Card with no title */}
          <Card footer={<span style={{ color: '#666', fontSize: '14px' }}>Card footer without title</span>}>
            <h4>No Title Card</h4>
            <p>This card doesn't have a title prop, but it has a footer.</p>
          </Card>

        </div>
      </div>
      
      {/* UserProfile section */}
      <div style={{ marginBottom: '30px' }}>
        <h3>3. UserProfile Component</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
          
          {/* Profile with edit and delete */}
          <UserProfile
            name="John Doe"
            avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=john"
            role="Frontend Developer"
            email="john@example.com"
            onEdit={() => alert('Edit profile clicked!')}
            onDelete={() => alert('Delete profile clicked!')}
          />

          {/* Profile without actions */}
          <UserProfile
            name="Jane Smith"
            avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=jane"
            role="UI Designer"
            email="jane@example.com"
          />

        </div>
      </div>

      {/* TodoList section */}
      <div style={{ marginBottom: '30px' }}>
        <h3>4. TodoList Component</h3>
        <div style={{ maxWidth: '500px' }}>
          <p style={{ color: '#666', marginBottom: '16px' }}>
            ✅ Try checking/unchecking items and deleting them!
          </p>
          <TodoList
            todos={todos}
            onToggle={handleTodoToggle}
            onDelete={handleTodoDelete}
          />
          <div style={{ marginTop: '16px', padding: '12px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
            <strong>Stats:</strong> {todos.filter(t => t.completed).length} completed, {todos.filter(t => !t.completed).length} remaining
          </div>
        </div>
      </div>

      {/* SearchInput section */}
      <div style={{ marginBottom: '30px' }}>
        <h3>5. SearchInput Component</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          
          {/* Immediate search */}
          <div>
            <h4 style={{ marginBottom: '8px' }}>Immediate Search (no debouncing)</h4>
            <SearchInput
              value={searchValue}
              onChange={handleImmediateSearch}
              placeholder="Type here - triggers immediately"
            />
            <div style={{ marginTop: '12px', padding: '12px', backgroundColor: '#e3f2fd', borderRadius: '4px' }}>
              <strong>Search Value:</strong> {searchValue || '<empty>'}
              <br />
              {lastSearchTime && <small>Last updated: {lastSearchTime.toLocaleTimeString()}</small>}
            </div>
          </div>

          {/* Debounced search */}
          <div>
            <h4 style={{ marginBottom: '8px' }}>Debounced Search (300ms delay)</h4>
            <SearchInput
              value={debouncedSearchValue}
              onChange={handleDebouncedSearch}
              placeholder="Type here - waits 300ms"
              debounceMs={300}
            />
            <div style={{ marginTop: '12px', padding: '12px', backgroundColor: '#fff3cd', borderRadius: '4px' }}>
              <strong>Search Value:</strong> {debouncedSearchValue || '<empty>'}
              <br />
              {lastSearchTime && <small>Last updated: {lastSearchTime.toLocaleTimeString()}</small>}
              <br />
              <small style={{ color: '#856404' }}>💡 Type quickly to see debouncing in action!</small>
            </div>
          </div>

        </div>
      </div>
      
      <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#d4edda', borderRadius: '8px' }}>
        <h4 style={{ color: '#155724', margin: '0 0 12px 0' }}>🎉 Congratulations!</h4>
        <p style={{ color: '#155724', margin: '0 0 8px 0' }}>
          You've successfully implemented all 5 React components! Here's what you've learned:
        </p>
        <ul style={{ color: '#155724', marginTop: '8px', paddingLeft: '20px' }}>
          <li><strong>Props & TypeScript</strong> - Type-safe component interfaces</li>
          <li><strong>Event Handling</strong> - User interactions and callbacks</li>
          <li><strong>State Management</strong> - Using useState for dynamic data</li>
          <li><strong>Effects & Hooks</strong> - useEffect for advanced functionality</li>
          <li><strong>Conditional Rendering</strong> - Showing/hiding elements</li>
          <li><strong>Component Composition</strong> - Building complex UIs from simple parts</li>
        </ul>
      </div>

      <div style={{ marginTop: '20px', padding: '16px', backgroundColor: '#fff3cd', borderRadius: '8px' }}>
        <h4 style={{ color: '#856404', margin: '0 0 8px 0' }}>🧪 Test Your Work</h4>
        <p style={{ color: '#856404', margin: '0' }}>
          Run <code>npm test -- tests/__tests__/01-components.test.tsx</code> to verify all tests pass!
        </p>
      </div>
    </div>
  );
}

// THIS IS THE CRITICAL PART - The main app looks for this export:
export const App = () => <Example />;
