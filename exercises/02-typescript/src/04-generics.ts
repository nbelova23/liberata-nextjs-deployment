// Exercise 4: Generics and Utility Types
// In this exercise, you'll learn about generics, utility types, and how they're used in React

// TODO: Create the following types and interfaces:

// 1. Create a generic Result type that can be either:
//    - Success<T> with a data property of type T
//    - Error with a message property of type string

// 2. Create a generic PaginatedResponse type with:
//    - data: T[] (array of type T)
//    - total: number
//    - page: number
//    - pageSize: number
//    - hasMore: boolean

// 3. Create a generic User type with:
//    - id: string
//    - name: string
//    - email: string
//    - role: 'admin' | 'user' | 'guest'
//    - metadata: Record<string, unknown>

// TODO: Implement these functions:

// 1. Create a function that takes an array and returns a paginated response
//    Use generics to maintain type safety
export function paginate<T>(items: T[], page: number, pageSize: number): any {
  // Your implementation here
}

// 2. Create a function that safely accesses a nested property using a path
//    For example: getNestedValue({ user: { name: 'John' } }, ['user', 'name'])
export function getNestedValue<T>(obj: any, path: string[]): any {
  // Your implementation here
}

// 3. Create a function that makes all properties of a type optional
//    Use utility types to transform the input type
export function makeOptional<T>(obj: T): any {
  // Your implementation here
}

// 4. Create a function that picks specific properties from an object
//    Use utility types to ensure type safety
export function pick<T, K extends keyof T>(obj: T, keys: K[]): any {
  // Your implementation here
}

// 5. Create a function that omits specific properties from an object
//    Use utility types to ensure type safety
export function omit<T, K extends keyof T>(obj: T, keys: K[]): any {
  // Your implementation here
}

// 6. Create a function that validates a user object
//    Return a Result type with either the validated user or an error message
export function validateUser(user: any): any {
  // Your implementation here
} 