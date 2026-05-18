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
  let backgroundColor: string = "";
  if(props.variant == "primary") backgroundColor = "blue";
  if(props.variant == "other") backgroundColor = "red";

  let padding: string = "";
  if(props.size == "large") padding = "16px";
  if(props.size == "medium") padding = "8px";
  if(props.size == "small") padding = "4px";

  return <button
      onClick={props.onClick}
      disabled={props.disabled}
      style={{backgroundColor, padding}}
    >
    {props.children}
  </button>
}

// 2. Create a Card component (like a photo frame)
//    - title: What's at the top (like a picture title)
//    - children: What goes inside (like the photo)
//    - footer: What goes at the bottom (like a caption)
//    - onClick: What happens when clicked (like opening a frame)
export function Card(props: any): JSX.Element {
  return (
    <div onClick = {props.onClick}>
      <h2>{props.title}</h2>
      <div>{props.children}</div>
      <div>{props.footer}</div>
    </div>
  )
}

// 3. Create a UserProfile component (like a name tag)
//    - name: Who they are (like a name on a tag)
//    - avatar: Their picture (like a photo on a badge)
//    - role: What they do (like a job title)
//    - email: How to contact them (like a phone number)
//    - onEdit: Change their info (like updating a profile)
//    - onDelete: Remove them (like taking down a name tag)
export function UserProfile(props: any): JSX.Element {
  return(
    <div>
      <h2>{props.name}</h2>
      <img src={props.avatar}></img>
      <div>{props.role}</div>
      <div>{props.email}</div>
      <button onClick={props.onEdit}>Edit</button>
      <button onClick={props.onDelete}>Delete</button>
    </div>
  )
}

// 4. Create a TodoList component (like a shopping list)
//    - todos: List of things to do (like items to buy)
//    - onToggle: Mark as done (like checking off items)
//    - onDelete: Remove items (like crossing out items)
export function TodoList(props: any): JSX.Element {
  return (
    <div>
      {props.todos.map((todo: any) => (
        <div key={todo.id}>
          <div>{todo.text}</div>
          <button onClick={() => props.onToggle(todo.id)}>
            Toggle
          </button>
          <button onClick={() => props.onDelete(todo.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  )}

// 5. Create a SearchInput component (like a search bar)
//    - value: What's typed in (like words in a search)
//    - onChange: When typing (like updating results)
//    - placeholder: What to show when empty (like "Search...")
//    - debounceMs: How long to wait (like thinking time)
export function SearchInput(props: any): JSX.Element {

  const [value, setValue] = React.useState(props.value || '')
 React.useEffect(() => {
  if (!props.debounceMs) {
    props.onChange(value);
    return;
  }
  const timer = setTimeout(() => {
    props.onChange(value);
  }, props.debounceMs);
  
  return () => clearTimeout(timer);
}, [value]);

  return(
    <input
      value={props.value}
      placeholder={props.placeholder}
      onChange={(e) => setValue(e.target.value)}
    />

  )
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
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '16px',
            marginTop: '16px'
          }}>
            {/* Like a light switch that says "Click me" */}
            <div style={{ padding: '16px', border: '1px dashed #ccc', borderRadius: '8px' }}>
              <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>📝 Button</div>
              <div style={{ marginBottom: '8px', fontSize: '0.9rem', color: '#666' }}>
                
                <Button
                  variant="primary"
                  size="medium"
                  onClick={() => alert("hi")}
                >
                  Click me
                </Button>

              </div>
            </div>

            {/* Like a photo frame with a user's info */}
            <div style={{ padding: '16px', border: '1px dashed #ccc', borderRadius: '8px' }}>
              <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>📝 Card</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                <Card
                  title="Card!"
                  footer="Reached the bottom"
                  onClick={()=>alert("hey")}
                >
                  Middle of Card
                </Card>
              </div>
            </div>

            {/* Like a name tag with user info */}
            <div style={{ padding: '16px', border: '1px dashed #ccc', borderRadius: '8px' }}>
              <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>📝 UserProfile</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                <UserProfile
                  name="John Doe"
                  avatar="https://via.placeholder.com/100"
                  role="Developer"
                  email="john@example.com"
                  onEdit={() => alert("edit")}
                  onDelete={() => alert("delete")}
                />
              
              </div>
            </div>

            {/* Like a shopping list with two items */}
            <div style={{ padding: '16px', border: '1px dashed #ccc', borderRadius: '8px' }}>
              <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>📝 TodoList</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                <TodoList
                  todos={[
                    { id: "1", text: "Learn React", completed: false },
                    { id: "2", text: "Build a project", completed: true }
                  ]}
                  onToggle={(id: string) => alert(`toggle ${id}`)}
                  onDelete={(id: string) => alert(`delete ${id}`)}
                />
              </div>
            </div>

            {/* Like a search bar that waits 300ms */}
            <div style={{ padding: '16px', border: '1px dashed #ccc', borderRadius: '8px' }}>
              <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>📝 SearchInput</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                <SearchInput
                  value=""
                  placeholder="Search..."
                  debounceMs={300}
                  onChange={(value: string) => alert(value)}
                />
              </div>
            </div>
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