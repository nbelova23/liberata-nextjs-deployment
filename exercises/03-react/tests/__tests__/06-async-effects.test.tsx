import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { FetchUser, PollingTime } from '../../src/06-async-effects';

// Mock fetch for FetchUser
global.fetch = jest.fn();

describe('Async Effects Exercise', () => {
  describe('FetchUser', () => {
    it('shows loading state initially', () => {
      render(<FetchUser />);
      expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });

    it('displays user data on successful fetch', async () => {
      const mockUser = { name: 'John Doe', email: 'john@example.com' };
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockUser,
      });

      render(<FetchUser />);
      await waitFor(() => {
        expect(screen.getByText(mockUser.name)).toBeInTheDocument();
        expect(screen.getByText(mockUser.email)).toBeInTheDocument();
      });
    });

    it('shows error state on fetch failure', async () => {
      (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Failed to fetch'));

      render(<FetchUser />);
      await waitFor(() => {
        expect(screen.getByText(/error/i)).toBeInTheDocument();
      });
    });
  });

  describe('PollingTime', () => {
    it('displays the current time', () => {
      render(<PollingTime />);
      expect(screen.getByText(/current time/i)).toBeInTheDocument();
    });

    it('updates time every second', async () => {
      jest.useFakeTimers();
      render(<PollingTime />);
      const initialTime = screen.getByText(/current time/i).textContent;
      jest.advanceTimersByTime(1000);
      await waitFor(() => {
        expect(screen.getByText(/current time/i).textContent).not.toBe(initialTime);
      });
      jest.useRealTimers();
    });
  });
}); 