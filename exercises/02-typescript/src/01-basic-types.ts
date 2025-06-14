// Exercise 1: Basic Types
// In this exercise, you'll learn about TypeScript's basic types and interfaces

// TODO: Create the following types and interfaces:

// 1. Create a Person interface with:
//    - name (string)
//    - age (number)
//    - isStudent (boolean)
//    - hobbies (array of strings)

// 2. Create a Student type that extends Person and adds:
//    - major (string)
//    - gpa (number)

// 3. Create a Course interface with:
//    - name (string)
//    - code (string)
//    - credits (number)
//    - students (array of Student objects)

// TODO: Implement these functions:

// 1. Create a function that takes a person and returns their name
export function getName(person: any): string {
  // Your implementation here
}

// 2. Create a function that takes an array of people and returns their names
export function getNames(people: any[]): string[] {
  // Your implementation here
}

// 3. Create a function that takes a student and returns their major
export function getMajor(student: any): string {
  // Your implementation here
}

// 4. Create a function that takes a course and returns the average GPA of its students
export function getAverageGPA(course: any): number {
  // Your implementation here
}

// 5. Create a function that takes a course and a minimum GPA
// and returns an array of students with GPA >= minimumGPA
export function getStudentsByGPA(course: any, minimumGPA: number): any[] {
  // Your implementation here
} 