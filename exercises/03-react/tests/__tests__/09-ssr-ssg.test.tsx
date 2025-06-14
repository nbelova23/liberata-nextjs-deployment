import React from 'react';
import { render, screen } from '@testing-library/react';
import { SSRPage, SSGPage } from '../../src/09-ssr-ssg';

describe('SSR & SSG Exercise', () => {
  describe('SSRPage', () => {
    it('renders the SSR page with data', () => {
      const mockData = { message: 'Hello from SSR' };
      render(<SSRPage data={mockData} />);
      expect(screen.getByText('Server-Side Rendered Page')).toBeInTheDocument();
      expect(screen.getByText(`Data: ${JSON.stringify(mockData)}`)).toBeInTheDocument();
    });
  });

  describe('SSGPage', () => {
    it('renders the SSG page with data', () => {
      const mockData = { message: 'Hello from SSG' };
      render(<SSGPage data={mockData} />);
      expect(screen.getByText('Statically Generated Page')).toBeInTheDocument();
      expect(screen.getByText(`Data: ${JSON.stringify(mockData)}`)).toBeInTheDocument();
    });
  });
}); 