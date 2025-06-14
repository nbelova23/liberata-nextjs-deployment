// Jest globals are available by default
import {
  makeDeepPartial,
  makeDeepReadonly,
  removeNullables,
  withLogging,
  withDefaultProps,
  pickKeys,
  omitKeys,
  mapValues,
  mapKeys,
  makeRequired,
  tupleToObject
} from '../../src/05-advanced-types';

describe('Advanced TypeScript Types', () => {
  // Example data for testing
  const nestedObject = {
    user: {
      name: 'John',
      age: 30,
      address: {
        street: '123 Main St',
        city: 'New York'
      }
    },
    settings: {
      theme: 'dark',
      notifications: true
    }
  };

  const objectWithNullables = {
    name: 'John',
    age: null,
    email: undefined,
    address: {
      street: '123 Main St',
      city: null
    }
  };

  describe('makeDeepPartial', () => {
    it('makes all properties optional', () => {
      const result = makeDeepPartial(nestedObject);
      expect(result).toEqual(nestedObject);
      // Type check: all properties should be optional
    });

    it('handles empty object', () => {
      const result = makeDeepPartial({});
      expect(result).toEqual({});
    });
  });

  describe('makeDeepReadonly', () => {
    it('makes all properties readonly', () => {
      const result = makeDeepReadonly(nestedObject);
      expect(result).toEqual(nestedObject);
      // Type check: all properties should be readonly
    });

    it('handles empty object', () => {
      const result = makeDeepReadonly({});
      expect(result).toEqual({});
    });
  });

  describe('removeNullables', () => {
    it('removes null and undefined values', () => {
      const result = removeNullables(objectWithNullables);
      expect(result).toEqual({
        name: 'John',
        address: {
          street: '123 Main St'
        }
      });
    });

    it('handles empty object', () => {
      const result = removeNullables({});
      expect(result).toEqual({});
    });
  });

  describe('withLogging', () => {
    it('adds logging to function', () => {
      const add = (a: number, b: number) => a + b;
      const loggedAdd = withLogging(add);
      expect(typeof loggedAdd).toBe('function');
      expect(loggedAdd(2, 3)).toBe(5);
      // Type check: should be a function that takes the same parameters
    });

    it('preserves function behavior', () => {
      const multiply = (a: number, b: number) => a * b;
      const loggedMultiply = withLogging(multiply);
      expect(loggedMultiply(4, 5)).toBe(20);
    });
  });

  describe('withDefaultProps', () => {
    it('adds default props to component', () => {
      const Component = (props: { name: string; age?: number }) => null;
      const defaultProps = { age: 30 };
      const EnhancedComponent = withDefaultProps(Component, defaultProps);
      expect(typeof EnhancedComponent).toBe('function');
      // Type check: should be a component with default props
    });
  });

  describe('pickKeys', () => {
    it('picks specified keys', () => {
      const result = pickKeys(nestedObject, ['user']);
      expect(result).toEqual({
        user: nestedObject.user
      });
    });

    it('handles empty keys array', () => {
      const result = pickKeys(nestedObject, []);
      expect(result).toEqual({});
    });
  });

  describe('omitKeys', () => {
    it('omits specified keys', () => {
      const result = omitKeys(nestedObject, ['settings']);
      expect(result).toEqual({
        user: nestedObject.user
      });
    });

    it('handles empty keys array', () => {
      const result = omitKeys(nestedObject, []);
      expect(result).toEqual(nestedObject);
    });
  });

  describe('mapValues', () => {
    it('transforms all values', () => {
      const result = mapValues({ a: 1, b: 2 }, (value) => value * 2);
      expect(result).toEqual({ a: 2, b: 4 });
    });

    it('handles empty object', () => {
      const result = mapValues({}, (value) => value);
      expect(result).toEqual({});
    });
  });

  describe('mapKeys', () => {
    it('transforms all keys', () => {
      const result = mapKeys({ a: 1, b: 2 }, (key) => key.toUpperCase());
      expect(result).toEqual({ A: 1, B: 2 });
    });

    it('handles empty object', () => {
      const result = mapKeys({}, (key) => key);
      expect(result).toEqual({});
    });
  });

  describe('makeRequired', () => {
    it('makes all properties required', () => {
      const optionalObj = { name: 'John', age: 30 };
      const result = makeRequired(optionalObj);
      expect(result).toEqual(optionalObj);
      // Type check: all properties should be required
    });

    it('handles empty object', () => {
      const result = makeRequired({});
      expect(result).toEqual({});
    });
  });

  describe('tupleToObject', () => {
    it('converts tuple to object with numeric keys', () => {
      const tuple = ['hello', 42, true];
      const result = tupleToObject(tuple);
      expect(result).toEqual({
        0: 'hello',
        1: 42,
        2: true
      });
    });

    it('handles empty tuple', () => {
      const result = tupleToObject([]);
      expect(result).toEqual({});
    });
  });
}); 