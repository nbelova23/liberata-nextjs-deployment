// Jest globals are available by default
import {
  getTitle,
  getType,
  isHighlyRated,
  getAverageRating,
  getDescription,
  getItemsByTag
} from '../../src/02-interfaces';

// These tests will help you verify your type definitions and implementations
describe('Interfaces Exercise', () => {
  // Example objects that match your interfaces
  const book = {
    id: '1',
    title: 'The Great Gatsby',
    type: 'book',
    rating: 4.5,
    tags: ['classic', 'fiction'],
    releaseYear: 1925,
    author: 'F. Scott Fitzgerald',
    pages: 180,
    isbn: '978-0743273565'
  };

  const movie = {
    id: '2',
    title: 'The Shawshank Redemption',
    type: 'movie',
    rating: 4.9,
    tags: ['drama', 'prison'],
    releaseYear: 1994,
    director: 'Frank Darabont',
    duration: 142,
    cast: ['Tim Robbins', 'Morgan Freeman']
  };

  const music = {
    id: '3',
    title: 'Bohemian Rhapsody',
    type: 'music',
    rating: 4.8,
    tags: ['rock', 'classic'],
    releaseYear: 1975,
    artist: 'Queen',
    duration: 354,
    album: 'A Night at the Opera'
  };

  const items = [book, movie, music];

  test('getTitle returns the item\'s title', () => {
    expect(getTitle(book)).toBe('The Great Gatsby');
    expect(getTitle(movie)).toBe('The Shawshank Redemption');
  });

  test('getType returns the item\'s type', () => {
    expect(getType(book)).toBe('book');
    expect(getType(movie)).toBe('movie');
    expect(getType(music)).toBe('music');
  });

  test('isHighlyRated returns true for items with rating >= 4', () => {
    expect(isHighlyRated(book)).toBe(true);
    expect(isHighlyRated(movie)).toBe(true);
    expect(isHighlyRated(music)).toBe(true);
  });

  test('getAverageRating calculates the average rating of all items', () => {
    expect(getAverageRating(items)).toBe(4.73);
  });

  test('getDescription returns a formatted string describing the item', () => {
    expect(getDescription(book)).toBe('The Great Gatsby (book) by F. Scott Fitzgerald');
    expect(getDescription(movie)).toBe('The Shawshank Redemption (movie) directed by Frank Darabont');
    expect(getDescription(music)).toBe('Bohemian Rhapsody (music) by Queen');
  });

  test('getItemsByTag returns items that have the specified tag', () => {
    const classicItems = getItemsByTag(items, 'classic');
    expect(classicItems).toHaveLength(2);
    expect(classicItems).toContainEqual(book);
    expect(classicItems).toContainEqual(music);
  });
}); 