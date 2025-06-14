// Exercise 1: Components 🧩
// Think of components like building blocks:
// - Each block has a specific job (like a LEGO piece)
// - You can put blocks together to build bigger things
// - You can reuse blocks in different places
// - When you change a block, only that block updates
//
// In this exercise, you'll build:
// 1. A Button (like a light switch)
// 2. A Card (like a photo frame)
// 3. A UserProfile (like a name tag)
// 4. A TodoList (like a shopping list)
// 5. A SearchInput (like a search bar)
//
// Documentation:
// - React Components: https://reactjs.org/docs/components-and-props.html
// - JSX: https://reactjs.org/docs/introducing-jsx.html
// - State and Lifecycle: https://reactjs.org/docs/state-and-lifecycle.html

import React from 'react';

// TODO: Create these components:

// 1. Create a Button component (like a light switch)
//    - children: What text to show (like the label on a switch)
//    - variant: How it looks (like different colors of switches)
//    - size: How big it is (like different sizes of buttons)
//    - onClick: What happens when clicked (like turning on a light)
//    - disabled: Can it be clicked? (like a broken switch)
export function Button(props: any): JSX.Element {
  throw new Error('🚧 TODO: Implement the Button component! Make it look like a light switch that can be clicked.');
}

// 2. Create a Card component (like a photo frame)
//    - title: What's at the top (like a picture title)
//    - children: What goes inside (like the photo)
//    - footer: What goes at the bottom (like a caption)
//    - onClick: What happens when clicked (like opening a frame)
export function Card(props: any): JSX.Element {
  throw new Error('🚧 TODO: Implement the Card component! Make it look like a photo frame with a title and content.');
}

// 3. Create a UserProfile component (like a name tag)
//    - name: Who they are (like a name on a tag)
//    - avatar: Their picture (like a photo on a badge)
//    - role: What they do (like a job title)
//    - email: How to contact them (like a phone number)
//    - onEdit: Change their info (like updating a profile)
//    - onDelete: Remove them (like taking down a name tag)
export function UserProfile(props: any): JSX.Element {
  throw new Error('🚧 TODO: Implement the UserProfile component! Make it look like a name tag with photo and info.');
}

// 4. Create a TodoList component (like a shopping list)
//    - todos: List of things to do (like items to buy)
//    - onToggle: Mark as done (like checking off items)
//    - onDelete: Remove items (like crossing out items)
export function TodoList(props: any): JSX.Element {
  throw new Error('🚧 TODO: Implement the TodoList component! Make it look like a shopping list with checkboxes.');
}

// 5. Create a SearchInput component (like a search bar)
//    - value: What's typed in (like words in a search)
//    - onChange: When typing (like updating results)
//    - placeholder: What to show when empty (like "Search...")
//    - debounceMs: How long to wait (like thinking time)
export function SearchInput(props: any): JSX.Element {
  throw new Error('🚧 TODO: Implement the SearchInput component! Make it look like a search bar that waits before searching.');
}

// Example usage (like a preview):
export function Example() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Components Exercise</h2>
      <p style={{ color: '#666', marginBottom: '20px' }}>
        🎯 <strong>Your Goal:</strong> Implement the 5 components above to make this example work!
      </p>
      
      <div style={{ 
        border: '2px dashed #ffc107', 
        padding: '20px', 
        borderRadius: '8px',
        backgroundColor: '#fff3cd'
      }}>
        <p style={{ color: '#856404', marginBottom: '16px' }}>
          ⚠️ <strong>Not implemented yet!</strong> The components below will throw errors until you implement them.
        </p>
        
        <div style={{ opacity: 0.5 }}>
          <h3>What you'll build:</h3>
          
          {/* Like a light switch that says "Click me" */}
          <div style={{ margin: '8px 0', padding: '8px', border: '1px dashed #ccc' }}>
            📝 Button: A clickable button with different styles and sizes
          </div>

          {/* Like a photo frame with a user's info */}
          <div style={{ margin: '8px 0', padding: '8px', border: '1px dashed #ccc' }}>
            📝 Card: A container with title, content, and optional footer
          </div>

          {/* Like a name tag with user info */}
          <div style={{ margin: '8px 0', padding: '8px', border: '1px dashed #ccc' }}>
            📝 UserProfile: A profile display with avatar, name, role, and action buttons
          </div>

          {/* Like a shopping list with two items */}
          <div style={{ margin: '8px 0', padding: '8px', border: '1px dashed #ccc' }}>
            📝 TodoList: A list of tasks with checkboxes and delete buttons
          </div>

          {/* Like a search bar that waits 300ms */}
          <div style={{ margin: '8px 0', padding: '8px', border: '1px dashed #ccc' }}>
            📝 SearchInput: A search input with placeholder and debounce
          </div>
        </div>
      </div>
      
      <div style={{ marginTop: '20px', padding: '16px', backgroundColor: '#d1ecf1', borderRadius: '8px' }}>
        <h4 style={{ color: '#0c5460', margin: '0 0 8px 0' }}>💡 Getting Started:</h4>
        <ol style={{ color: '#0c5460', margin: 0, paddingLeft: '20px' }}>
          <li>Start with the Button component - it's the simplest!</li>
          <li>Return JSX that renders an HTML button element</li>
          <li>Use the props (children, variant, size, onClick, disabled)</li>
          <li>Add some basic styling to make it look nice</li>
          <li>Test it by clicking the button in the browser</li>
        </ol>
      </div>
    </div>
  );
}

export const App = () => <Example />; 