// Exercise 3: Functions and Type Guards
// In this exercise, you'll learn about function types, type guards, and advanced TypeScript features

// TODO: Create the following types and interfaces:

// 1. Create a Shape interface with:
//    - type (union of 'circle', 'rectangle', 'triangle')
//    - color (string)
//    - area (number)

// 2. Create a Circle interface that extends Shape and adds:
//    - radius (number)
//    - type must be 'circle'

// 3. Create a Rectangle interface that extends Shape and adds:
//    - width (number)
//    - height (number)
//    - type must be 'rectangle'

// 4. Create a Triangle interface that extends Shape and adds:
//    - base (number)
//    - height (number)
//    - type must be 'triangle'

// 5. Create a type guard function for each shape:
//    - isCircle(shape: Shape): shape is Circle
//    - isRectangle(shape: Shape): shape is Rectangle
//    - isTriangle(shape: Shape): shape is Triangle

// TODO: Implement these functions:

// 1. Create a function that calculates the area of a shape
//    Use type guards to handle each shape type differently
export function calculateArea(shape: any): number {
  // Your implementation here
}

// 2. Create a function that takes an array of shapes and returns the total area
export function calculateTotalArea(shapes: any[]): number {
  // Your implementation here
}

// 3. Create a function that takes an array of shapes and returns the largest shape
export function findLargestShape(shapes: any[]): any {
  // Your implementation here
}

// 4. Create a function that takes an array of shapes and a color
//    and returns all shapes of that color
export function findShapesByColor(shapes: any[], color: string): any[] {
  // Your implementation here
}

// 5. Create a function that takes a shape and returns a string describing it
//    For example: "A red circle with radius 5"
export function describeShape(shape: any): string {
  // Your implementation here
}

// 6. Create a function that takes an array of shapes and returns an object
//    with the count of each shape type
//    For example: { circle: 2, rectangle: 1, triangle: 3 }
export function countShapesByType(shapes: any[]): any {
  // Your implementation here
} 