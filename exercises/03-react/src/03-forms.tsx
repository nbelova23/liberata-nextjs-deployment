// Exercise 3: Forms 📝
// Think of forms like a conversation:
// - You ask questions (inputs)
// - You get answers (values)
// - You check if answers are correct (validation)
// - You do something with the answers (submit)
//
// In this exercise, you'll build:
// 1. A useForm hook (like a conversation manager)
// 2. A FormField component (like a question)
// 3. A Form component (like a questionnaire)
// 4. A RegistrationForm (like a membership application)
// 5. A SurveyForm (like a feedback form)
//
// Documentation:
// - Forms: https://reactjs.org/docs/forms.html
// - Controlled Components: https://reactjs.org/docs/forms.html#controlled-components
// - Form Validation: https://formik.org/docs/guides/validation

import React from 'react';

// TODO: Create these components and hooks:

// 1. Create a useForm hook (like a conversation manager)
//    - initialValues: Starting data (like empty form)
//    - validate: Check if data is good (like checking answers)
//    Returns:
//    - values: Form data (like the answers)
//    - errors: What's wrong (like "answer missing")
//    - handleChange: Update data (like writing answers)
//    - handleSubmit: Send data (like submitting form)
export function useForm<T extends Record<string, any>>(
  initialValues: T,
  validate?: (values: T) => Record<string, string>
) {
  throw new Error('🚧 TODO: Implement the useForm hook! Use useState for values/errors and create handler functions.');
}

// 2. Create a FormField component (like a question)
//    - label: What to ask (like "What's your name?")
//    - name: Field identifier (like "name")
//    - type: Input type (like "text", "email", "password")
//    - value: Current answer (like what's typed)
//    - error: What's wrong (like "required")
//    - onChange: When answer changes (like typing)
//    - placeholder: Hint text (like "Enter your name")
export function FormField(props: any): JSX.Element {
  throw new Error('🚧 TODO: Implement the FormField component! Create a labeled input with error display.');
}

// 3. Create a Form component (like a questionnaire)
//    - onSubmit: What to do when submitted (like processing answers)
//    - children: The form fields (like the questions)
//    - title: Form title (like "Registration")
export function Form(props: any): JSX.Element {
  throw new Error('🚧 TODO: Implement the Form component! Create a form wrapper with title and submit handling.');
}

// 4. Create a RegistrationForm component (like a membership application)
//    Should include fields for:
//    - name: User's name (required)
//    - email: User's email (required, valid email)
//    - password: User's password (required, min 6 chars)
//    - confirmPassword: Confirm password (required, must match)
export function RegistrationForm(): JSX.Element {
  throw new Error('🚧 TODO: Implement the RegistrationForm component! Use useForm hook with validation.');
}

// 5. Create a SurveyForm component (like a feedback form)
//    Should include fields for:
//    - rating: How satisfied (1-5 stars)
//    - feedback: Written feedback (optional)
//    - recommend: Would recommend (yes/no)
//    - email: Contact email (optional)
export function SurveyForm(): JSX.Element {
  throw new Error('🚧 TODO: Implement the SurveyForm component! Use different input types and validation.');
}

// Example usage (like a preview):
export function Example() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Forms Exercise</h2>
      <p style={{ color: '#666', marginBottom: '20px' }}>
        🎯 <strong>Your Goal:</strong> Implement form components and hooks for user input!
      </p>
      
      <div style={{ 
        border: '2px dashed #ffc107', 
        padding: '20px', 
        borderRadius: '8px',
        backgroundColor: '#fff3cd'
      }}>
        <p style={{ color: '#856404', marginBottom: '16px' }}>
          ⚠️ <strong>Not implemented yet!</strong> The form components below will throw errors until you implement them.
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
              <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>📝 useForm</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                TODO: Hook to manage form state and validation
              </div>
            </div>
            
            <div style={{ padding: '16px', border: '1px dashed #ccc', borderRadius: '8px' }}>
              <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>📝 FormField</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                TODO: Reusable input component with label and error display
              </div>
            </div>
            
            <div style={{ padding: '16px', border: '1px dashed #ccc', borderRadius: '8px' }}>
              <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>📝 Form</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                TODO: Wrapper component for forms with submit handling
              </div>
            </div>
            
            <div style={{ padding: '16px', border: '1px dashed #ccc', borderRadius: '8px' }}>
              <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>📝 RegistrationForm</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                TODO: Complete registration form with validation using useForm hook
              </div>
            </div>
            
            <div style={{ padding: '16px', border: '1px dashed #ccc', borderRadius: '8px' }}>
              <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>📝 SurveyForm</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                TODO: Feedback form with different input types using form components
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div style={{ marginTop: '20px', padding: '16px', backgroundColor: '#d1ecf1', borderRadius: '8px' }}>
        <h4 style={{ color: '#0c5460', margin: '0 0 8px 0' }}>💡 Getting Started:</h4>
        <ol style={{ color: '#0c5460', margin: 0, paddingLeft: '20px' }}>
          <li>Start with the useForm hook - it manages all form state</li>
          <li>Create FormField component for reusable inputs</li>
          <li>Build the Form wrapper component</li>
          <li>Use them together in RegistrationForm</li>
          <li>Add validation rules to check user input</li>
        </ol>
      </div>
    </div>
  );
}

export const App = () => <Example />; 