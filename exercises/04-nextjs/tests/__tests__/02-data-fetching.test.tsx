import React from 'react';
import { render, screen } from '@testing-library/react';
import { ServerSidePage, StaticPage } from '../../src/02-data-fetching';

describe('Data Fetching Exercise', () => {
  describe('ServerSidePage', () => {
    it('renders the server-side page with data', () => {
      const mockData = { message: 'Hello from SSR' };
      render(<ServerSidePage data={mockData} />);
      expect(screen.getByText('Server-Side Rendered Data')).toBeInTheDocument();
      expect(screen.getByText(`Data: ${JSON.stringify(mockData)}`)).toBeInTheDocument();
    });
  });

  describe('StaticPage', () => {
    it('renders the static page with data', () => {
      const mockData = { message: 'Hello from SSG' };
      render(<StaticPage data={mockData} />);
      expect(screen.getByText('Statically Generated Data')).toBeInTheDocument();
      expect(screen.getByText(`Data: ${JSON.stringify(mockData)}`)).toBeInTheDocument();
    });
  });
}); 