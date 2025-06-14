// Exercise 5: Advanced TypeScript Types
// In this exercise, you'll learn about advanced TypeScript features and type manipulation

// TODO: Create the following types and interfaces:

// 1. Create a generic DeepPartial type that makes all properties optional, including nested objects
//    For example: DeepPartial<{ user: { name: string } }> should be { user?: { name?: string } }

// 2. Create a generic DeepReadonly type that makes all properties readonly, including nested objects
//    For example: DeepReadonly<{ user: { name: string } }> should be { readonly user: { readonly name: string } }

// 3. Create a generic NonNullableFields type that removes null and undefined from all properties
//    For example: NonNullableFields<{ name: string | null, age: number | undefined }> should be { name: string, age: number }

// 4. Create a generic FunctionType type that extracts the type of a function
//    For example: FunctionType<(x: number) => string> should be { params: [number], return: string }

// 5. Create a generic TupleToObject type that converts a tuple to an object with numeric keys
//    For example: TupleToObject<[string, number]> should be { 0: string, 1: number }

// TODO: Implement these functions:

// 1. Create a function that takes an object and returns a new object with all properties made optional
export function makeDeepPartial<T>(obj: T): any {
  // Your implementation here
}

// 2. Create a function that takes an object and returns a new object with all properties made readonly
export function makeDeepReadonly<T>(obj: T): any {
  // Your implementation here
}

// 3. Create a function that takes an object and removes all null/undefined values
export function removeNullables<T>(obj: T): any {
  // Your implementation here
}

// 4. Create a function that takes a function and returns a new function that logs its arguments and result
export function withLogging<T extends (...args: any[]) => any>(fn: T): any {
  // Your implementation here
}

// 5. Create a function that takes an object and returns a new object with only the specified keys
export function pickKeys<T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): any {
  // Your implementation here
}

// 6. Create a function that takes an object and returns a new object without the specified keys
export function omitKeys<T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): any {
  // Your implementation here
}

// 7. Create a function that takes an object and returns a new object with all values transformed by a function
export function mapValues<T extends object, R>(
  obj: T,
  transform: (value: T[keyof T]) => R
): any {
  // Your implementation here
}

// 8. Create a function that takes an object and returns a new object with all keys transformed by a function
export function mapKeys<T extends object>(
  obj: T,
  transform: (key: keyof T) => string
): any {
  // Your implementation here
}

// 9. Create a function that takes an object and returns a new object with all properties made required
export function makeRequired<T extends object>(obj: T): any {
  // Your implementation here
}

// 10. Create a function that takes a tuple and returns an object with numeric keys
export function tupleToObject<T extends any[]>(tuple: T): any {
  // Your implementation here
}

// 11. Create a function that adds default props to a component
export function withDefaultProps<P extends object, D extends Partial<P>>(
  Component: (props: P) => any,
  defaultProps: D
): (props: Omit<P, keyof D> & Partial<D>) => any {
  // Your implementation here
} 