import { describe, expect, test } from '@jest/globals';
import {
  getName,
  getNames,
  getMajor,
  getAverageGPA,
  getStudentsByGPA
} from '../../src/01-basic-types';

// These tests will help you verify your type definitions and implementations
// If you see type errors in your IDE, it means your types need to be fixed
describe('Basic Types Exercise', () => {
  // This is what a Person object should look like
  const person = {
    name: 'John Doe',
    age: 25,
    isStudent: true,
    hobbies: ['reading', 'coding']
  };

  // This is what a Student object should look like
  const student = {
    name: 'Jane Smith',
    age: 20,
    isStudent: true,
    hobbies: ['studying'],
    major: 'Computer Science',
    gpa: 3.8
  };

  // This is what a Course object should look like
  const course = {
    name: 'TypeScript 101',
    code: 'TS101',
    credits: 3,
    students: [
      student,
      {
        name: 'Bob Johnson',
        age: 21,
        isStudent: true,
        hobbies: ['gaming'],
        major: 'Computer Science',
        gpa: 3.5
      }
    ]
  };

  // These tests will help you verify your function implementations
  test('getName returns the person\'s name', () => {
    expect(getName(person)).toBe('John Doe');
  });

  test('getNames returns an array of names', () => {
    expect(getNames([person, student])).toEqual(['John Doe', 'Jane Smith']);
  });

  test('getMajor returns the student\'s major', () => {
    expect(getMajor(student)).toBe('Computer Science');
  });

  test('getAverageGPA calculates the average GPA of all students', () => {
    expect(getAverageGPA(course)).toBe(3.65);
  });

  test('getStudentsByGPA returns students with GPA >= minimumGPA', () => {
    const highGPAStudents = getStudentsByGPA(course, 3.7);
    expect(highGPAStudents).toHaveLength(1);
    expect(highGPAStudents[0].name).toBe('Jane Smith');
  });
}); 