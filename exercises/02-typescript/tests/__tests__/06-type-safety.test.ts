import { describe, it, expect } from '@jest/globals';
import {
  safeParseJSON,
  validateObject,
  safeGet,
  safeSet,
  withRetry,
  debounce,
  memoize,
  createEventEmitter,
  createState,
  createPipeline
} from '../../src/06-type-safety';

describe('Type Safety and Error Handling', () => {
  describe('safeParseJSON', () => {
    it('parses valid JSON', () => {
      const result = safeParseJSON<{ name: string }>('{"name": "John"}');
      expect(result).toEqual({
        data: { name: 'John' }
      });
    });

    it('handles invalid JSON', () => {
      const result = safeParseJSON('{"name": "John"');
      expect(result).toEqual({
        message: expect.any(String)
      });
    });
  });

  describe('validateObject', () => {
    const schema = {
      name: (value: string) => typeof value === 'string' && value.length > 0,
      age: (value: number) => typeof value === 'number' && value >= 0
    };

    it('validates object against schema', () => {
      const result = validateObject(
        { name: 'John', age: 30 },
        schema
      );
      expect(result).toEqual({
        data: { name: 'John', age: 30 }
      });
    });

    it('returns validation errors for invalid object', () => {
      const result = validateObject(
        { name: '', age: -1 },
        schema
      );
      expect(result).toEqual({
        errors: expect.arrayContaining([
          expect.objectContaining({
            field: expect.any(String),
            message: expect.any(String)
          })
        ])
      });
    });
  });

  describe('safeGet', () => {
    const obj = {
      user: {
        profile: {
          name: 'John',
          address: {
            city: 'New York'
          }
        }
      }
    };

    it('gets nested property', () => {
      const result = safeGet(obj, ['user', 'profile', 'name']);
      expect(result).toBe('John');
    });

    it('returns undefined for invalid path', () => {
      const result = safeGet(obj, ['user', 'invalid', 'path']);
      expect(result).toBeUndefined();
    });
  });

  describe('safeSet', () => {
    it('sets nested property', () => {
      const obj = { user: { profile: { name: 'John' } } };
      const result = safeSet(obj, ['user', 'profile', 'name'], 'Jane');
      expect(result.user.profile.name).toBe('Jane');
    });

    it('creates missing properties', () => {
      const obj = {};
      const result = safeSet(obj, ['user', 'profile', 'name'], 'John');
      expect(result.user.profile.name).toBe('John');
    });
  });

  describe('withRetry', () => {
    it('retries failed operation', async () => {
      let attempts = 0;
      const operation = async () => {
        attempts++;
        if (attempts < 3) throw new Error('Failed');
        return 'success';
      };

      const result = await withRetry(operation, 3, 100);
      expect(result).toBe('success');
      expect(attempts).toBe(3);
    });

    it('fails after max retries', async () => {
      const operation = async () => {
        throw new Error('Failed');
      };

      await expect(withRetry(operation, 3, 100)).rejects.toThrow();
    });
  });

  describe('debounce', () => {
    it('debounces function calls', async () => {
      let count = 0;
      const fn = () => count++;
      const debouncedFn = debounce(fn, 100);

      debouncedFn();
      debouncedFn();
      debouncedFn();

      await new Promise(resolve => setTimeout(resolve, 150));
      expect(count).toBe(1);
    });
  });

  describe('memoize', () => {
    it('memoizes function results', () => {
      let calls = 0;
      const fn = (x: number) => {
        calls++;
        return x * 2;
      };

      const memoizedFn = memoize(fn);
      expect(memoizedFn(2)).toBe(4);
      expect(memoizedFn(2)).toBe(4);
      expect(calls).toBe(1);
    });
  });

  describe('createEventEmitter', () => {
    it('emits and listens to events', () => {
      const emitter = createEventEmitter<{
        'user:created': { id: string; name: string };
        'user:updated': { id: string; changes: object };
      }>();

      const listener = jest.fn();
      emitter.on('user:created', listener);
      emitter.emit('user:created', { id: '1', name: 'John' });

      expect(listener).toHaveBeenCalledWith({ id: '1', name: 'John' });
    });
  });

  describe('createState', () => {
    it('manages state with type safety', () => {
      const state = createState({ count: 0, name: 'John' });

      state.set({ count: 1 });
      expect(state.get()).toEqual({ count: 1, name: 'John' });

      state.update(s => ({ ...s, name: 'Jane' }));
      expect(state.get()).toEqual({ count: 1, name: 'Jane' });
    });
  });

  describe('createPipeline', () => {
    it('processes value through middleware pipeline', () => {
      const pipeline = createPipeline<number>([
        x => x * 2,
        x => x + 1,
        x => x * x
      ]);

      expect(pipeline(2)).toBe(25); // (2 * 2 + 1) ^ 2
    });
  });
}); 