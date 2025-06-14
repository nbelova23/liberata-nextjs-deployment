import { describe, it, expect } from '@jest/globals';
import {
  calculateArea,
  calculateTotalArea,
  findLargestShape,
  findShapesByColor,
  describeShape,
  countShapesByType
} from '../../src/03-functions';

describe('Shape Functions', () => {
  // Example objects that match the required interfaces
  const circle = {
    type: 'circle',
    color: 'red',
    radius: 5,
    area: 0 // This will be calculated
  };

  const rectangle = {
    type: 'rectangle',
    color: 'blue',
    width: 4,
    height: 6,
    area: 0 // This will be calculated
  };

  const triangle = {
    type: 'triangle',
    color: 'green',
    base: 3,
    height: 4,
    area: 0 // This will be calculated
  };

  const shapes = [circle, rectangle, triangle];

  describe('calculateArea', () => {
    it('calculates circle area correctly', () => {
      const area = calculateArea(circle);
      expect(area).toBeCloseTo(78.54, 1); // π * r²
    });

    it('calculates rectangle area correctly', () => {
      const area = calculateArea(rectangle);
      expect(area).toBe(24); // width * height
    });

    it('calculates triangle area correctly', () => {
      const area = calculateArea(triangle);
      expect(area).toBe(6); // (base * height) / 2
    });
  });

  describe('calculateTotalArea', () => {
    it('calculates total area of all shapes', () => {
      const totalArea = calculateTotalArea(shapes);
      expect(totalArea).toBeCloseTo(108.54, 1); // Sum of all areas
    });
  });

  describe('findLargestShape', () => {
    it('finds the shape with the largest area', () => {
      const largest = findLargestShape(shapes);
      expect(largest).toBe(circle); // Circle has the largest area
    });
  });

  describe('findShapesByColor', () => {
    it('finds all shapes of a specific color', () => {
      const redShapes = findShapesByColor(shapes, 'red');
      expect(redShapes).toHaveLength(1);
      expect(redShapes[0]).toBe(circle);
    });

    it('returns empty array when no shapes match color', () => {
      const yellowShapes = findShapesByColor(shapes, 'yellow');
      expect(yellowShapes).toHaveLength(0);
    });
  });

  describe('describeShape', () => {
    it('describes a circle correctly', () => {
      const description = describeShape(circle);
      expect(description).toBe('A red circle with radius 5');
    });

    it('describes a rectangle correctly', () => {
      const description = describeShape(rectangle);
      expect(description).toBe('A blue rectangle with width 4 and height 6');
    });

    it('describes a triangle correctly', () => {
      const description = describeShape(triangle);
      expect(description).toBe('A green triangle with base 3 and height 4');
    });
  });

  describe('countShapesByType', () => {
    it('counts shapes by type correctly', () => {
      const counts = countShapesByType(shapes);
      expect(counts).toEqual({
        circle: 1,
        rectangle: 1,
        triangle: 1
      });
    });

    it('handles empty array', () => {
      const counts = countShapesByType([]);
      expect(counts).toEqual({
        circle: 0,
        rectangle: 0,
        triangle: 0
      });
    });
  });
}); 