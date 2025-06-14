import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeToggle, LanguageSelector } from '../../src/07-context-api';

describe('Context API Exercise', () => {
  describe('ThemeToggle', () => {
    it('toggles theme on button click', () => {
      render(<ThemeToggle />);
      const button = screen.getByText(/toggle theme/i);
      fireEvent.click(button);
      // TODO: Assert theme state change
    });
  });

  describe('LanguageSelector', () => {
    it('changes language on select change', () => {
      render(<LanguageSelector />);
      const select = screen.getByRole('combobox');
      fireEvent.change(select, { target: { value: 'es' } });
      // TODO: Assert language state change
    });
  });
}); 