import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {
  useForm,
  FormField,
  Form,
  RegistrationForm,
  SurveyForm
} from '../../src/exercises/03-forms';

describe('React Forms', () => {
  describe('useForm', () => {
    it('initializes with default values', () => {
      const { values } = useForm({ name: 'John', age: 30 });
      expect(values).toEqual({ name: 'John', age: 30 });
    });

    it('validates fields according to rules', () => {
      const validationRules = {
        name: [
          {
            validate: (value: string) => value.length >= 3,
            message: 'Name must be at least 3 characters'
          }
        ]
      };

      const { values, errors, handleChange } = useForm(
        { name: '' },
        validationRules as any
      );

      handleChange('name', 'Jo');
      expect(errors.name).toBe('Name must be at least 3 characters');

      handleChange('name', 'John');
      expect(errors.name).toBeUndefined();
    });

    it('handles form submission', () => {
      const onSubmit = jest.fn();
      const { handleSubmit } = useForm({ name: 'John' });

      handleSubmit(onSubmit)();
      expect(onSubmit).toHaveBeenCalledWith({ name: 'John' });
    });
  });

  describe('FormField', () => {
    it('renders text input', () => {
      render(
        <FormField
          label="Name"
          name="name"
          value="John"
          onChange={() => {}}
        />
      );

      expect(screen.getByLabelText('Name')).toBeInTheDocument();
      expect(screen.getByLabelText('Name')).toHaveValue('John');
    });

    it('renders select input with options', () => {
      const options = [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' }
      ];

      render(
        <FormField
          label="Select"
          name="select"
          value="1"
          onChange={() => {}}
          options={options}
        />
      );

      expect(screen.getByLabelText('Select')).toBeInTheDocument();
      expect(screen.getByText('Option 1')).toBeInTheDocument();
      expect(screen.getByText('Option 2')).toBeInTheDocument();
    });

    it('displays error message', () => {
      render(
        <FormField
          label="Name"
          name="name"
          value=""
          onChange={() => {}}
          error="Name is required"
        />
      );

      expect(screen.getByText('Name is required')).toBeInTheDocument();
    });
  });

  describe('Form', () => {
    it('renders children', () => {
      render(
        <Form onSubmit={() => {}}>
          <div>Form content</div>
        </Form>
      );

      expect(screen.getByText('Form content')).toBeInTheDocument();
    });

    it('handles form submission', () => {
      const onSubmit = jest.fn();
      render(
        <Form onSubmit={onSubmit}>
          <button type="submit">Submit</button>
        </Form>
      );

      fireEvent.click(screen.getByText('Submit'));
      expect(onSubmit).toHaveBeenCalled();
    });
  });

  describe('RegistrationForm', () => {
    it('validates required fields', () => {
      render(<RegistrationForm />);
      
      fireEvent.click(screen.getByText('Register'));
      
      expect(screen.getByText('Username is required')).toBeInTheDocument();
      expect(screen.getByText('Email is required')).toBeInTheDocument();
      expect(screen.getByText('Password is required')).toBeInTheDocument();
    });

    it('validates email format', () => {
      render(<RegistrationForm />);
      
      const emailInput = screen.getByLabelText('Email');
      fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
      fireEvent.blur(emailInput);
      
      expect(screen.getByText('Invalid email address')).toBeInTheDocument();
    });

    it('validates password length', () => {
      render(<RegistrationForm />);
      
      const passwordInput = screen.getByLabelText('Password');
      fireEvent.change(passwordInput, { target: { value: 'short' } });
      fireEvent.blur(passwordInput);
      
      expect(screen.getByText('Password must be at least 8 characters')).toBeInTheDocument();
    });
  });

  describe('SurveyForm', () => {
    it('renders all fields', () => {
      render(<SurveyForm />);
      
      expect(screen.getByLabelText('Name')).toBeInTheDocument();
      expect(screen.getByLabelText('Age')).toBeInTheDocument();
      expect(screen.getByLabelText('Occupation')).toBeInTheDocument();
      expect(screen.getByLabelText('Feedback')).toBeInTheDocument();
    });

    it('handles number input', () => {
      render(<SurveyForm />);
      
      const ageInput = screen.getByLabelText('Age');
      fireEvent.change(ageInput, { target: { value: '25' } });
      
      expect(ageInput).toHaveValue(25);
    });

    it('handles select input', () => {
      render(<SurveyForm />);
      
      const occupationSelect = screen.getByLabelText('Occupation');
      fireEvent.change(occupationSelect, { target: { value: 'student' } });
      
      expect(occupationSelect).toHaveValue('student');
    });
  });
}); 