import React from 'react';
import { render, screen } from '@testing-library/react';
import { ResponsiveCard, CustomButton } from '../../src/08-tailwindcss';

describe('Tailwind CSS Exercise', () => {
  describe('ResponsiveCard', () => {
    it('renders the card with correct text', () => {
      render(<ResponsiveCard />);
      expect(screen.getByText('Responsive Card')).toBeInTheDocument();
      expect(screen.getByText('This card should adapt to different screen sizes.')).toBeInTheDocument();
    });
  });

  describe('CustomButton', () => {
    it('renders the button with correct text', () => {
      render(<CustomButton />);
      expect(screen.getByText('Click Me')).toBeInTheDocument();
    });
  });
}); 