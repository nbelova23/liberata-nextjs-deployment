import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import {
  useLocalStorage,
  useDebounce,
  useWindowSize,
  usePrevious,
  useClickOutside,
  PersistentCounter,
  DebouncedSearch,
  ResponsiveComponent,
  PreviousValueComponent,
  Dropdown
} from '../../src/02-hooks';

describe('React Hooks', () => {
  describe('useLocalStorage', () => {
    beforeEach(() => {
      localStorage.clear();
    });

    it('initializes with default value', () => {
      const [value] = useLocalStorage('test', 'default');
      expect(value).toBe('default');
    });

    it('persists value in localStorage', () => {
      const [value, setValue] = useLocalStorage('test', 'default');
      act(() => setValue('new value'));
      expect(localStorage.getItem('test')).toBe('"new value"');
    });

    it('loads value from localStorage', () => {
      localStorage.setItem('test', '"saved value"');
      const [value] = useLocalStorage('test', 'default');
      expect(value).toBe('saved value');
    });
  });

  describe('useDebounce', () => {
    beforeEach(() => {
      vi.useFakeTimers();
    });

    afterEach(() => {
      vi.useRealTimers();
    });

    it('returns initial value immediately', () => {
      const value = useDebounce('test', 300);
      expect(value).toBe('test');
    });

    it('debounces value changes', () => {
      const { rerender } = render(<DebouncedSearch />);
      const input = screen.getByPlaceholderText('Search...');

      fireEvent.change(input, { target: { value: 't' } });
      fireEvent.change(input, { target: { value: 'te' } });
      fireEvent.change(input, { target: { value: 'tes' } });
      fireEvent.change(input, { target: { value: 'test' } });

      act(() => {
        vi.advanceTimersByTime(300);
      });

      expect(console.log).toHaveBeenCalledWith('Searching for:', 'test');
    });
  });

  describe('useWindowSize', () => {
    it('returns window dimensions', () => {
      const { width, height } = useWindowSize();
      expect(width).toBe(window.innerWidth);
      expect(height).toBe(window.innerHeight);
    });

    it('updates on window resize', () => {
      render(<ResponsiveComponent />);
      
      act(() => {
        window.innerWidth = 500;
        window.innerHeight = 500;
        window.dispatchEvent(new Event('resize'));
      });

      expect(screen.getByText('Window size: 500x500')).toBeInTheDocument();
    });
  });

  describe('usePrevious', () => {
    it('returns undefined on first render', () => {
      const previousValue = usePrevious(0);
      expect(previousValue).toBeUndefined();
    });

    it('returns previous value after update', () => {
      render(<PreviousValueComponent />);
      
      fireEvent.click(screen.getByText('Increment'));
      expect(screen.getByText('Previous: 0')).toBeInTheDocument();
      expect(screen.getByText('Current: 1')).toBeInTheDocument();
    });
  });

  describe('useClickOutside', () => {
    it('calls callback when clicking outside', () => {
      const callback = vi.fn();
      const ref = useClickOutside(callback);

      render(
        <div>
          <div ref={ref}>Content</div>
          <div>Outside</div>
        </div>
      );

      fireEvent.mouseDown(screen.getByText('Outside'));
      expect(callback).toHaveBeenCalled();
    });

    it('does not call callback when clicking inside', () => {
      const callback = vi.fn();
      const ref = useClickOutside(callback);

      render(
        <div>
          <div ref={ref}>Content</div>
          <div>Outside</div>
        </div>
      );

      fireEvent.mouseDown(screen.getByText('Content'));
      expect(callback).not.toHaveBeenCalled();
    });
  });

  describe('Example Components', () => {
    it('PersistentCounter persists count in localStorage', () => {
      render(<PersistentCounter />);
      
      fireEvent.click(screen.getByText('Increment'));
      expect(localStorage.getItem('counter')).toBe('1');
    });

    it('Dropdown closes when clicking outside', () => {
      render(<Dropdown />);
      
      fireEvent.click(screen.getByText('Toggle'));
      expect(screen.getByText('Dropdown content')).toBeInTheDocument();

      fireEvent.mouseDown(document.body);
      expect(screen.queryByText('Dropdown content')).not.toBeInTheDocument();
    });
  });
}); 