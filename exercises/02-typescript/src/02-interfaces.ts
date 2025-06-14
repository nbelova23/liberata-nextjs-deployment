// Exercise 2: Interfaces and Type Unions
// In this exercise, you'll learn about interfaces, type unions, and optional properties

// TODO: Create the following types and interfaces:

// 1. Create a MediaItem interface with:
//    - id (string)
//    - title (string)
//    - type (union of 'book', 'movie', 'music')
//    - rating (number between 1-5)
//    - tags (array of strings)
//    - releaseYear (optional number)

// 2. Create a Book interface that extends MediaItem and adds:
//    - author (string)
//    - pages (number)
//    - isbn (optional string)

// 3. Create a Movie interface that extends MediaItem and adds:
//    - director (string)
//    - duration (number in minutes)
//    - cast (array of strings)

// 4. Create a Music interface that extends MediaItem and adds:
//    - artist (string)
//    - duration (number in seconds)
//    - album (optional string)

// TODO: Implement these functions:

// 1. Create a function that takes a MediaItem and returns its title
export function getTitle(item: any): string {
  // Your implementation here
}

// 2. Create a function that takes a MediaItem and returns its type
export function getType(item: any): string {
  // Your implementation here
}

// 3. Create a function that takes a MediaItem and returns true if it has a rating >= 4
export function isHighlyRated(item: any): boolean {
  // Your implementation here
}

// 4. Create a function that takes an array of MediaItems and returns the average rating
export function getAverageRating(items: any[]): number {
  // Your implementation here
}

// 5. Create a function that takes a MediaItem and returns a string describing it
// For example: "The Great Gatsby (Book) by F. Scott Fitzgerald"
export function getDescription(item: any): string {
  // Your implementation here
}

// 6. Create a function that takes an array of MediaItems and a tag
// and returns all items that have that tag
export function getItemsByTag(items: any[], tag: string): any[] {
  // Your implementation here
} 