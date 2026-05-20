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

import React, { useState } from "react"

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
): {
  values: T;
  errors: Record<string, string>;
  handleChange: (name: string, value: any) => void;
  handleBlur: (name: string) => void;
  handleSubmit: (onSubmit: (values: T) => void) => () => void;
} {
  const [values, setValues] = useState<T>(initialValues)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const handleChange = (name: string, value: any) => {
    setValues({
      ...values,
      [name]: value
    })
    setErrors(prev => {
      const newErrors = { ...prev }
      delete newErrors[name]
      return newErrors
    })
  }
  const handleSubmit = (onSubmit: (values: T) => void) => {
    return () => {
      if (validate) {
        const validationErrors = validate(values)
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors)
          return
        }
      }
      onSubmit(values)
    }
  }
  const handleBlur = (name: string) => {
  if (validate) {
    const validationErrors = validate(values)
    if (validationErrors[name]) {
      setErrors(prev => ({ ...prev, [name]: validationErrors[name] }))
    }
  }
  } 
  return { values, errors, handleChange, handleBlur, handleSubmit }
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
  
  if (props.options) {
    return (
      <div>
        <label htmlFor={props.name}>{props.label}</label>
        <select id={props.name} name={props.name} value={props.value} onChange={(e) => props.onChange(props.name, e.target.value)} onBlur={() => props.onBlur && props.onBlur(props.name)}>
          {props.options.map((opt: any) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        {props.error && <p>{props.error}</p>}
      </div>
    )
  }
  return (
    <div>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        id={props.name}
        type={props.type || "text"}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        onChange={(e) => props.onChange(props.name, e.target.value)}
        onBlur={() => props.onBlur && props.onBlur(props.name)}
      />
      {props.error && <p>{props.error}</p>}
    </div>
  )
}

// 3. Create a Form component (like a questionnaire)
//    - onSubmit: What to do when submitted (like processing answers)
//    - children: The form fields (like the questions)
//    - title: Form title (like "Registration")
export function Form(props: any): JSX.Element {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        props.onSubmit()
      }}
    >
      <h2>{props.title}</h2>
      {props.children}
      <button type="submit">{props.buttonText}</button>
    </form>
  )
}

// 4. Create a RegistrationForm component (like a membership application)
//    Should include fields for:
//    - name: User's name (required)
//    - email: User's email (required, valid email)
//    - password: User's password (required, min 6 chars)
//    - confirmPassword: Confirm password (required, must match)
export function RegistrationForm(): JSX.Element {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  }
  const validate = (values: typeof initialValues) => {
    const errors: Record<string, string> = {}
    if (!values.name) {
      errors.name = "Username is required"
    }
    if (!values.email) {
      errors.email = "Email is required"
    } else if (!values.email.includes("@")) {
      errors.email = "Invalid email address"
    }
    if (!values.password) {
      errors.password = "Password is required"
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters"
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Please confirm password"
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Passwords do not match"
    }
    return errors
  }

  const { values, errors, handleChange, handleBlur, handleSubmit } = useForm(initialValues, validate)
  const onSubmit = (values: typeof initialValues) => {
    console.log(values)
  }

  return (
    <Form title="Registration" onSubmit={handleSubmit(onSubmit)} buttonText = "Register">
      <FormField
        label="Name"
        name="name"
        value={values.name}
        error={errors.name}
        onChange={handleChange}
        placeholder="Enter your name"
      />

      <FormField
        label="Email"
        name="email"
        type="email"
        value={values.email}
        error={errors.email}
        onChange={handleChange}
        placeholder="Enter your email"
        onBlur={handleBlur}
      />

      <FormField
        label="Password"
        name="password"
        type="password"
        value={values.password}
        error={errors.password}
        onChange={handleChange}
        placeholder="Enter your password"
        onBlur={handleBlur}
      />

      <FormField
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        value={values.confirmPassword}
        error={errors.confirmPassword}
        onChange={handleChange}
        placeholder="Confirm your password"
        onBlur={handleBlur}
      />
    </Form>
  )
}

// 5. Create a SurveyForm component (like a feedback form)
//    Should include fields for:
//    - rating: How satisfied (1-5 stars)
//    - feedback: Written feedback (optional)
//    - recommend: Would recommend (yes/no)
//    - email: Contact email (optional)
export function SurveyForm(): JSX.Element {
  const initialValues = {
    name: "",
    age: "",
    occupation: "",
    feedback: ""
  }

  const { values, errors, handleChange, handleSubmit } = useForm(initialValues)
  const onSubmit = (values: typeof initialValues) => {
    console.log(values)
  }
  return (
    <Form title="Survey" onSubmit={handleSubmit(onSubmit)} buttonText="Submit">
      <FormField label="Name" name="name" value={values.name} error={errors.name} onChange={handleChange} />
      <FormField label="Age" name="age" type="number" value={values.age} error={errors.age} onChange={handleChange} />
      <FormField label="Occupation" name="occupation" value={values.occupation} error={errors.occupation} onChange={handleChange} />
      <FormField label="Feedback" name="feedback" value={values.feedback} error={errors.feedback} onChange={handleChange} />
    </Form>
  )
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
                useForm hook implemented
              </div>
            </div>
            
            <div style={{ padding: '16px', border: '1px dashed #ccc', borderRadius: '8px' }}>
              <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>📝 FormField</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                Form field implemented
              </div>
            </div>
            
            <div style={{ padding: '16px', border: '1px dashed #ccc', borderRadius: '8px' }}>
              <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>📝 Form</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                Form implemented
              </div>
            </div>
            
            <div style={{ padding: '16px', border: '1px dashed #ccc', borderRadius: '8px' }}>
              <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>📝 RegistrationForm</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                <RegistrationForm/>
              </div>
            </div>
            
            <div style={{ padding: '16px', border: '1px dashed #ccc', borderRadius: '8px' }}>
              <div style={{ marginBottom: '12px', fontWeight: 'bold' }}>📝 SurveyForm</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                <SurveyForm/>
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