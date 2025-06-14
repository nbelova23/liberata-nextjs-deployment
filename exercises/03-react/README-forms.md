# React Forms Exercise

This exercise introduces form handling and validation in React, teaching you how to create reusable form components and custom hooks for form state management.

## What are React Forms?

Forms in React are interactive elements that allow users to input data. Unlike HTML forms, React forms are controlled components where form data is handled by the component's state.

## Official Documentation

- [React Forms](https://react.dev/learn/forms)
- [Form Validation](https://react.dev/learn/forms#validation)
- [Controlled Components](https://react.dev/learn/forms#controlled-components)

## Form Components in This Exercise

### 1. useForm Hook
```typescript
const { values, errors, handleChange, handleSubmit } = useForm(
  initialValues,
  validationRules
);
```
- **Purpose**: Manages form state and validation
- **Features**:
  - Form state management
  - Field validation
  - Error handling
  - Form submission
- **Learn More**: [Form State Management](https://react.dev/learn/forms#controlled-components)

### 2. FormField Component
```typescript
<FormField
  label="Username"
  name="username"
  value={values.username}
  onChange={handleChange}
  error={errors.username}
  required
/>
```
- **Purpose**: Reusable form field component
- **Features**:
  - Different input types
  - Error display
  - Label handling
  - Required field indication
- **Learn More**: [Form Components](https://react.dev/learn/forms#controlled-components)

### 3. Form Component
```typescript
<Form onSubmit={handleSubmit}>
  <FormField ... />
  <button type="submit">Submit</button>
</Form>
```
- **Purpose**: Form container with submission handling
- **Features**:
  - Form submission
  - Child component rendering
  - Form validation
- **Learn More**: [Form Submission](https://react.dev/learn/forms#handling-multiple-inputs)

## Example Forms

### 1. Registration Form
- Username validation
- Email format validation
- Password strength requirements
- Password confirmation
- [Learn More](https://react.dev/learn/forms#validation)

### 2. Survey Form
- Different input types
- Optional fields
- Select dropdowns
- Text area input
- [Learn More](https://react.dev/learn/forms#handling-multiple-inputs)

## Form Validation

### Types of Validation
1. **Required Fields**:
   ```typescript
   {
     validate: (value) => value.length > 0,
     message: 'This field is required'
   }
   ```

2. **Format Validation**:
   ```typescript
   {
     validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
     message: 'Invalid email format'
   }
   ```

3. **Length Validation**:
   ```typescript
   {
     validate: (value) => value.length >= 8,
     message: 'Must be at least 8 characters'
   }
   ```

### Validation Rules
```typescript
const validationRules = {
  username: [
    {
      validate: (value) => value.length >= 3,
      message: 'Username must be at least 3 characters'
    }
  ],
  email: [
    {
      validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      message: 'Invalid email address'
    }
  ]
};
```

## Best Practices

1. **Form State Management**:
   - Use controlled components
   - Keep form state in a single location
   - Use custom hooks for reusability

2. **Validation**:
   - Validate on blur and submit
   - Show clear error messages
   - Use consistent validation rules

3. **User Experience**:
   - Show loading states
   - Disable submit button when invalid
   - Provide clear feedback

4. **Accessibility**:
   - Use proper labels
   - Include error messages in aria-live regions
   - Support keyboard navigation

## Testing Forms

1. **Unit Tests**:
   - Test validation rules
   - Test form submission
   - Test error handling

2. **Integration Tests**:
   - Test form flow
   - Test user interactions
   - Test error display

3. **E2E Tests**:
   - Test complete form submission
   - Test form validation
   - Test error handling

## Common Pitfalls

1. **Form State**:
   - Avoid multiple state variables
   - Use proper state updates
   - Handle async validation

2. **Validation**:
   - Don't validate too early
   - Show appropriate error messages
   - Handle all edge cases

3. **Performance**:
   - Avoid unnecessary re-renders
   - Use proper memoization
   - Handle large forms efficiently

## Additional Resources

- [React Hook Form](https://react-hook-form.com/)
- [Formik](https://formik.org/)
- [Yup](https://github.com/jquense/yup)
- [React Final Form](https://final-form.org/react)

## Getting Started

1. Understand controlled components
2. Learn form validation patterns
3. Study the example forms
4. Implement the form components
5. Add validation rules
6. Test the forms

## Next Steps

After completing this exercise, you should:
1. Understand form state management
2. Be able to create reusable form components
3. Know how to implement form validation
4. Understand form testing
5. Be able to create accessible forms 