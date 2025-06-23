import React from 'react';
import { render, screen, fireEvent, act, renderHook } from '@testing-library/react';
import {
  useCounter,
  useTimer,
  useFetch,
  useForm,
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
} from '../../src/exercises/02-hooks';

// Mock console.log for testing
const mockConsoleLog = jest.spyOn(console, 'log').mockImplementation(() => {});

describe('React Hooks', () => {
  beforeEach(() => {
    mockConsoleLog.mockClear();
    localStorage.clear();
  });

  afterAll(() => {
    mockConsoleLog.mockRestore();
  });

  describe('useCounter', () => {
    it('initializes with default value', () => {
      const { result } = renderHook(() => useCounter());
      expect(result.current.count).toBe(0);
    });

    it('initializes with custom initial value and step', () => {
      const { result } = renderHook(() => useCounter(5, 2));
      expect(result.current.count).toBe(5);
    });

    it('increments by step value', () => {
      const { result } = renderHook(() => useCounter(0, 3));
      
      act(() => {
        result.current.increment();
      });
      
      expect(result.current.count).toBe(3);
    });

    it('decrements by step value', () => {
      const { result } = renderHook(() => useCounter(10, 2));
      
      act(() => {
        result.current.decrement();
      });
      
      expect(result.current.count).toBe(8);
    });

    it('resets to initial value', () => {
      const { result } = renderHook(() => useCounter(5));
      
      act(() => {
        result.current.increment();
        result.current.increment();
      });
      
      expect(result.current.count).toBe(7);
      
      act(() => {
        result.current.reset();
      });
      
      expect(result.current.count).toBe(5);
    });
  });

  describe('useTimer', () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it('initializes with correct seconds', () => {
      const { result } = renderHook(() => useTimer(10));
      expect(result.current.seconds).toBe(10);
      expect(result.current.isRunning).toBe(false);
    });

    it('starts and counts down', () => {
      const { result } = renderHook(() => useTimer(3));
      
      act(() => {
        result.current.start();
      });
      
      expect(result.current.isRunning).toBe(true);
      
      act(() => {
        jest.advanceTimersByTime(1000);
      });
      
      expect(result.current.seconds).toBe(2);
    });

    it('pauses timer', () => {
      const { result } = renderHook(() => useTimer(5));
      
      act(() => {
        result.current.start();
      });
      
      act(() => {
        jest.advanceTimersByTime(1000);
      });
      
      expect(result.current.seconds).toBe(4);
      
      act(() => {
        result.current.pause();
      });
      
      expect(result.current.isRunning).toBe(false);
      
      act(() => {
        jest.advanceTimersByTime(2000);
      });
      
      // Should not change when paused
      expect(result.current.seconds).toBe(4);
    });

    it('calls onComplete when timer reaches zero', () => {
      const onComplete = jest.fn();
      const { result } = renderHook(() => useTimer(2, onComplete));
      
      act(() => {
        result.current.start();
      });
      
      act(() => {
        jest.advanceTimersByTime(2000);
      });
      
      expect(onComplete).toHaveBeenCalled();
      expect(result.current.isRunning).toBe(false);
      expect(result.current.seconds).toBe(0);
    });

    it('resets timer', () => {
      const { result } = renderHook(() => useTimer(5));
      
      act(() => {
        result.current.start();
      });
      
      act(() => {
        jest.advanceTimersByTime(2000);
      });
      
      expect(result.current.seconds).toBe(3);
      
      act(() => {
        result.current.reset();
      });
      
      expect(result.current.seconds).toBe(5);
      expect(result.current.isRunning).toBe(false);
    });
  });

  describe('useFetch', () => {
    beforeEach(() => {
      (window as any).fetch = jest.fn();
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('handles successful fetch', async () => {
      const mockData = { id: 1, name: 'Test' };
      ((window as any).fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockData,
      });

      const { result } = renderHook(() => useFetch<typeof mockData>('https://api.test.com/data'));

      // Initially loading
      expect(result.current.loading).toBe(true);
      expect(result.current.data).toBe(null);
      expect(result.current.error).toBe(null);

      // Wait for fetch to complete
      await act(async () => {
        await new Promise(resolve => setTimeout(resolve, 0));
      });

      expect(result.current.loading).toBe(false);
      expect(result.current.data).toEqual(mockData);
      expect(result.current.error).toBe(null);
    });

    it('handles fetch error', async () => {
      ((window as any).fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

      const { result } = renderHook(() => useFetch('https://api.test.com/error'));

      await act(async () => {
        await new Promise(resolve => setTimeout(resolve, 0));
      });

      expect(result.current.loading).toBe(false);
      expect(result.current.data).toBe(null);
      expect(result.current.error).toBe('Network error');
    });

    it('refetch works correctly', async () => {
      const mockData = { id: 1, name: 'Test' };
      ((window as any).fetch as jest.Mock).mockResolvedValue({
        ok: true,
        json: async () => mockData,
      });

      const { result } = renderHook(() => useFetch<typeof mockData>('https://api.test.com/data'));

      await act(async () => {
        await new Promise(resolve => setTimeout(resolve, 0));
      });

      expect((window as any).fetch).toHaveBeenCalledTimes(1);

      act(() => {
        result.current.refetch();
      });

      await act(async () => {
        await new Promise(resolve => setTimeout(resolve, 0));
      });

      expect((window as any).fetch).toHaveBeenCalledTimes(2);
    });
  });

  describe('useForm', () => {
    it('initializes with default values', () => {
      const initialValues = { name: 'John', age: 30 };
      const { result } = renderHook(() => useForm(initialValues));
      
      expect(result.current.values).toEqual(initialValues);
      expect(result.current.errors).toEqual({});
    });

    it('handles field changes', () => {
      const { result } = renderHook(() => useForm({ name: '', email: '' }));
      
      act(() => {
        result.current.handleChange('name', 'John');
      });
      
      expect(result.current.values.name).toBe('John');
    });

    it('validates fields according to rules', () => {
      const validate = (values: { name: string }) => {
        const errors: Record<string, string> = {};
        if (values.name.length < 3) {
          errors.name = 'Name must be at least 3 characters';
        }
        return errors;
      };

      const { result } = renderHook(() => useForm({ name: '' }, validate));
      
      const mockSubmit = jest.fn();
      
      act(() => {
        result.current.handleSubmit(mockSubmit)();
      });
      
      expect(result.current.errors.name).toBe('Name must be at least 3 characters');
      expect(mockSubmit).not.toHaveBeenCalled();
    });

    it('handles form submission with valid data', () => {
      const validate = (values: { name: string }) => {
        const errors: Record<string, string> = {};
        if (values.name.length < 3) {
          errors.name = 'Name must be at least 3 characters';
        }
        return errors;
      };

      const { result } = renderHook(() => useForm({ name: 'John' }, validate));
      
      const mockSubmit = jest.fn();
      
      act(() => {
        result.current.handleSubmit(mockSubmit)();
      });
      
      expect(Object.keys(result.current.errors)).toHaveLength(0);
      expect(mockSubmit).toHaveBeenCalledWith({ name: 'John' });
    });

    it('clears errors when field changes', () => {
      const validate = (values: { name: string }) => {
        const errors: Record<string, string> = {};
        if (values.name.length < 3) {
          errors.name = 'Name must be at least 3 characters';
        }
        return errors;
      };

      const { result } = renderHook(() => useForm({ name: '' }, validate));
      
      // Trigger validation error
      act(() => {
        result.current.handleSubmit(jest.fn())();
      });
      
      expect(result.current.errors.name).toBe('Name must be at least 3 characters');
      
      // Change field - should clear error
      act(() => {
        result.current.handleChange('name', 'Johnny');
      });
      
      expect(result.current.errors.name).toBeUndefined();
    });
  });

  describe('useLocalStorage', () => {
    beforeEach(() => {
      localStorage.clear();
    });

    it('initializes with default value', () => {
      const { result } = renderHook(() => useLocalStorage('test', 'default'));
      expect(result.current[0]).toBe('default');
    });

    it('persists value in localStorage', () => {
      const { result } = renderHook(() => useLocalStorage('test', 'default'));
      
      act(() => {
        result.current[1]('new value');
      });
      
      expect(localStorage.getItem('test')).toBe('"new value"');
    });

    it('loads value from localStorage', () => {
      localStorage.setItem('test', '"saved value"');
      const { result } = renderHook(() => useLocalStorage('test', 'default'));
      expect(result.current[0]).toBe('saved value');
    });

    it('updates state when localStorage value changes', () => {
      const { result } = renderHook(() => useLocalStorage('test', 'initial'));
      
      expect(result.current[0]).toBe('initial');
      
      act(() => {
        result.current[1]('updated');
      });
      
      expect(result.current[0]).toBe('updated');
      expect(localStorage.getItem('test')).toBe('"updated"');
    });
  });

  describe('useDebounce', () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it('returns initial value immediately', () => {
      const { result } = renderHook(() => useDebounce('test', 300));
      expect(result.current).toBe('test');
    });

    it('debounces value changes', () => {
      const { result, rerender } = renderHook(
        ({ value, delay }) => useDebounce(value, delay),
        { initialProps: { value: 'initial', delay: 300 } }
      );

      expect(result.current).toBe('initial');

      // Change value multiple times quickly
      rerender({ value: 'first', delay: 300 });
      rerender({ value: 'second', delay: 300 });
      rerender({ value: 'final', delay: 300 });

      // Should still be initial value before delay
      expect(result.current).toBe('initial');

      // Advance time past delay
      act(() => {
        jest.advanceTimersByTime(300);
      });

      // Should now be the final value
      expect(result.current).toBe('final');
    });

    it('debounces value changes in component', () => {
      render(<DebouncedSearch />);
      const input = screen.getByPlaceholderText('Search...');

      expect(screen.getByText('Current:')).toBeInTheDocument();
      expect(screen.getByText('Debounced:')).toBeInTheDocument();

      fireEvent.change(input, { target: { value: 'test' } });

      // Should show current value immediately
      expect(screen.getByText('Current: test')).toBeInTheDocument();
      expect(screen.getByText('Debounced:')).toBeInTheDocument(); // Still empty

      act(() => {
        jest.advanceTimersByTime(300);
      });

      // Should now show debounced value
      expect(screen.getByText('Debounced: test')).toBeInTheDocument();
    });
  });

  describe('useWindowSize', () => {
    it('returns window dimensions', () => {
      const { result } = renderHook(() => useWindowSize());
      expect(result.current.width).toBe(window.innerWidth);
      expect(result.current.height).toBe(window.innerHeight);
    });

    it('updates on window resize', () => {
      const { result } = renderHook(() => useWindowSize());
      
      act(() => {
        window.innerWidth = 500;
        window.innerHeight = 400;
        window.dispatchEvent(new Event('resize'));
      });

      expect(result.current.width).toBe(500);
      expect(result.current.height).toBe(400);
    });

    it('updates on window resize in component', () => {
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
      const { result } = renderHook(() => usePrevious(0));
      expect(result.current).toBeUndefined();
    });

    it('returns previous value after update', () => {
      const { result, rerender } = renderHook(
        ({ value }) => usePrevious(value),
        { initialProps: { value: 0 } }
      );

      expect(result.current).toBeUndefined();

      rerender({ value: 1 });
      expect(result.current).toBe(0);

      rerender({ value: 2 });
      expect(result.current).toBe(1);
    });

    it('returns previous value after update in component', () => {
      render(<PreviousValueComponent />);
      
      fireEvent.click(screen.getByText('Increment'));
      expect(screen.getByText('Previous: 0')).toBeInTheDocument();
      expect(screen.getByText('Current: 1')).toBeInTheDocument();
    });
  });

  describe('useClickOutside', () => {
    it('calls callback when clicking outside', () => {
      const callback = jest.fn();
      const { result } = renderHook(() => useClickOutside(callback));

      render(
        <div>
          <div ref={result.current}>Content</div>
          <div>Outside</div>
        </div>
      );

      fireEvent.mouseDown(screen.getByText('Outside'));
      expect(callback).toHaveBeenCalled();
    });

    it('does not call callback when clicking inside', () => {
      const callback = jest.fn();
      const { result } = renderHook(() => useClickOutside(callback));

      render(
        <div>
          <div ref={result.current}>Content</div>
          <div>Outside</div>
        </div>
      );

      fireEvent.mouseDown(screen.getByText('Content'));
      expect(callback).not.toHaveBeenCalled();
    });

    it('works correctly in dropdown component', () => {
      render(<Dropdown />);
      
      fireEvent.click(screen.getByText('Toggle'));
      expect(screen.getByText('Dropdown content')).toBeInTheDocument();

      fireEvent.mouseDown(document.body);
      expect(screen.queryByText('Dropdown content')).not.toBeInTheDocument();
    });
  });

  describe('Example Components', () => {
    it('PersistentCounter persists count in localStorage', () => {
      render(<PersistentCounter />);
      
      fireEvent.click(screen.getByText('Increment'));
      expect(localStorage.getItem('counter')).toBe('1');
    });

    it('DebouncedSearch debounces input correctly', () => {
      jest.useFakeTimers();
      render(<DebouncedSearch />);
      const input = screen.getByPlaceholderText('Search...');

      // Check initial state
      expect(screen.getByText('Current:')).toBeInTheDocument();
      expect(screen.getByText('Debounced:')).toBeInTheDocument();

      fireEvent.change(input, { target: { value: 'hello' } });

      // Current should update immediately
      expect(screen.getByText('Current: hello')).toBeInTheDocument();

      act(() => {
        jest.advanceTimersByTime(300);
      });

      // Debounced should update after delay
      expect(screen.getByText('Debounced: hello')).toBeInTheDocument();
      jest.useRealTimers();
    });

    it('ResponsiveComponent shows window size', () => {
      render(<ResponsiveComponent />);
      
      expect(screen.getByText(/Window size:/)).toBeInTheDocument();
    });

    it('PreviousValueComponent tracks previous values', () => {
      render(<PreviousValueComponent />);
      
      expect(screen.getByText('Current: 0')).toBeInTheDocument();
      expect(screen.getByText('Previous: undefined')).toBeInTheDocument();
      
      fireEvent.click(screen.getByText('Increment'));
      
      expect(screen.getByText('Current: 1')).toBeInTheDocument();
      expect(screen.getByText('Previous: 0')).toBeInTheDocument();
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