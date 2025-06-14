import { describe, it, expect } from '@jest/globals';
import {
  paginate,
  getNestedValue,
  makeOptional,
  pick,
  omit,
  validateUser
} from '../../src/04-generics';

describe('Generics and Utility Types', () => {
  // Example data for testing
  const users = [
    { id: '1', name: 'John', email: 'john@example.com', role: 'admin', metadata: { lastLogin: '2024-03-20' } },
    { id: '2', name: 'Jane', email: 'jane@example.com', role: 'user', metadata: { lastLogin: '2024-03-19' } },
    { id: '3', name: 'Bob', email: 'bob@example.com', role: 'guest', metadata: { lastLogin: '2024-03-18' } },
    { id: '4', name: 'Alice', email: 'alice@example.com', role: 'user', metadata: { lastLogin: '2024-03-17' } },
    { id: '5', name: 'Charlie', email: 'charlie@example.com', role: 'user', metadata: { lastLogin: '2024-03-16' } }
  ];

  const nestedObject = {
    user: {
      profile: {
        name: 'John',
        address: {
          city: 'New York'
        }
      }
    }
  };

  describe('paginate', () => {
    it('returns correct pagination for first page', () => {
      const result = paginate(users, 1, 2);
      expect(result).toEqual({
        data: users.slice(0, 2),
        total: 5,
        page: 1,
        pageSize: 2,
        hasMore: true
      });
    });

    it('returns correct pagination for last page', () => {
      const result = paginate(users, 3, 2);
      expect(result).toEqual({
        data: users.slice(4),
        total: 5,
        page: 3,
        pageSize: 2,
        hasMore: false
      });
    });

    it('handles empty array', () => {
      const result = paginate([], 1, 2);
      expect(result).toEqual({
        data: [],
        total: 0,
        page: 1,
        pageSize: 2,
        hasMore: false
      });
    });
  });

  describe('getNestedValue', () => {
    it('returns value for valid path', () => {
      const value = getNestedValue(nestedObject, ['user', 'profile', 'name']);
      expect(value).toBe('John');
    });

    it('returns undefined for invalid path', () => {
      const value = getNestedValue(nestedObject, ['user', 'invalid', 'path']);
      expect(value).toBeUndefined();
    });

    it('handles empty path', () => {
      const value = getNestedValue(nestedObject, []);
      expect(value).toBe(nestedObject);
    });
  });

  describe('makeOptional', () => {
    it('makes all properties optional', () => {
      const result = makeOptional(users[0]);
      expect(result).toEqual(users[0]);
      // Type check: result should have all properties as optional
    });
  });

  describe('pick', () => {
    it('picks specified properties', () => {
      const result = pick(users[0], ['name', 'email']);
      expect(result).toEqual({
        name: 'John',
        email: 'john@example.com'
      });
    });

    it('handles empty keys array', () => {
      const result = pick(users[0], []);
      expect(result).toEqual({});
    });
  });

  describe('omit', () => {
    it('omits specified properties', () => {
      const result = omit(users[0], ['metadata', 'role']);
      expect(result).toEqual({
        id: '1',
        name: 'John',
        email: 'john@example.com'
      });
    });

    it('handles empty keys array', () => {
      const result = omit(users[0], []);
      expect(result).toEqual(users[0]);
    });
  });

  describe('validateUser', () => {
    it('returns success for valid user', () => {
      const result = validateUser(users[0]);
      expect(result).toEqual({
        data: users[0]
      });
    });

    it('returns error for invalid user', () => {
      const invalidUser = { id: '1', name: 'John' }; // Missing required fields
      const result = validateUser(invalidUser);
      expect(result).toEqual({
        message: expect.any(String)
      });
    });
  });
}); 