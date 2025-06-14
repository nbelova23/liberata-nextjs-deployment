// Exercise 8: Tailwind CSS 🎨
// Think of Tailwind like a box of LEGO pieces:
// - Each piece has a specific job (like a color or size)
// - You can combine pieces to build anything (like a house)
// - You don't need to write custom CSS (like having instructions)
// - Everything is consistent (like using the same pieces)
//
// In this exercise, you'll build:
// 1. A Button (like a light switch)
// 2. A Card (like a photo frame)
// 3. A Navbar (like a menu board)
// 4. A Grid (like a photo wall)
//
// Documentation:
// - Tailwind CSS: https://tailwindcss.com/docs
// - Utility Classes: https://tailwindcss.com/docs/utility-first
// - Responsive Design: https://tailwindcss.com/docs/responsive-design

import React from 'react';

// TODO: Create these components:

// 1. Create a Button component (like a light switch)
//    - variant: How it looks (like different colors)
//    - size: How big it is (like different sizes)
//    - disabled: Can it be clicked? (like a broken switch)
//    - children: What text to show (like the label)
export function Button(props: any): JSX.Element {
  throw new Error('🚧 TODO: Implement the Button component! Use Tailwind classes like bg-blue-500, text-white, px-4, py-2.');
}

// 2. Create a Card component (like a photo frame)
//    - title: What's at the top (like a picture title)
//    - children: What goes inside (like the photo)
//    - footer: What goes at bottom (like a caption)
//    - shadow: How it floats (like a shadow)
export function Card(props: any): JSX.Element {
  throw new Error('🚧 TODO: Implement the Card component! Use Tailwind classes like bg-white, shadow-md, p-4, rounded-xl.');
}

// 3. Create a Navbar component (like a menu board)
//    - logo: What to show first (like a restaurant name)
//    - links: Where to go (like menu items)
//    - onMenuClick: What to do when clicked (like ordering)
//    - isMobile: Is it small? (like a mobile menu)
export function Navbar(props: any): JSX.Element {
  throw new Error('🚧 TODO: Implement the Navbar component! Use Tailwind classes like flex, justify-between, items-center, p-4.');
}

// 4. Create a Grid component (like a photo wall)
//    - columns: How many per row (like photos per row)
//    - gap: Space between items (like photo spacing)
//    - children: What to show (like photos)
//    - responsive: Change on small screens? (like mobile view)
export function Grid(props: any): JSX.Element {
  throw new Error('🚧 TODO: Implement the Grid component! Use Tailwind classes like grid, grid-cols-3, gap-4, md:grid-cols-4.');
}

// Components that tests expect:
export function ResponsiveCard(props: any): JSX.Element {
  throw new Error('🚧 TODO: Implement the ResponsiveCard component! Create a card that adapts to different screen sizes.');
}

export function CustomButton(props: any): JSX.Element {
  throw new Error('🚧 TODO: Implement the CustomButton component! Create a button with custom Tailwind styling.');
}

// Example usage (like a preview):
export function Example() {
  return (
    <div className="p-5">
      <h2>Tailwind CSS Exercise</h2>
      <p className="text-gray-600 mb-5">
        🎯 <strong>Your Goal:</strong> Implement styled components using Tailwind CSS utility classes!
      </p>
      
      <div className="border-2 border-dashed border-yellow-400 p-5 rounded-lg bg-yellow-100">
        <p className="text-yellow-800 mb-4">
          ⚠️ <strong>Not implemented yet!</strong> The Tailwind components below will throw errors until you implement them.
        </p>
        
        <div className="opacity-50">
          <h3>What you'll build:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <div className="p-4 border border-dashed border-gray-300 rounded-lg">
              <div className="mb-3 font-bold">📝 Button</div>
              <div className="text-sm text-gray-600">
                TODO: Styled button with Tailwind classes (bg-blue-500, px-4, py-2)
              </div>
            </div>
            
            <div className="p-4 border border-dashed border-gray-300 rounded-lg">
              <div className="mb-3 font-bold">📝 Card</div>
              <div className="text-sm text-gray-600">
                TODO: Container with Tailwind classes (shadow-md, rounded-xl, p-4)
              </div>
            </div>
            
            <div className="p-4 border border-dashed border-gray-300 rounded-lg">
              <div className="mb-3 font-bold">📝 Navbar</div>
              <div className="text-sm text-gray-600">
                TODO: Navigation bar with Tailwind classes (flex, justify-between)
              </div>
            </div>
            
            <div className="p-4 border border-dashed border-gray-300 rounded-lg">
              <div className="mb-3 font-bold">📝 Grid</div>
              <div className="text-sm text-gray-600">
                TODO: Responsive grid with Tailwind classes (grid, grid-cols-3, gap-4)
              </div>
            </div>
            
            <div className="p-4 border border-dashed border-gray-300 rounded-lg">
              <div className="mb-3 font-bold">📝 ResponsiveCard</div>
              <div className="text-sm text-gray-600">
                TODO: Card that adapts to different screen sizes with Tailwind
              </div>
            </div>
            
            <div className="p-4 border border-dashed border-gray-300 rounded-lg">
              <div className="mb-3 font-bold">📝 CustomButton</div>
              <div className="text-sm text-gray-600">
                TODO: Button with custom Tailwind styling and variants
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-5 p-4 bg-cyan-100 rounded-lg">
        <h4 className="text-cyan-800 m-0 mb-2">💡 Getting Started:</h4>
        <ol className="text-cyan-800 m-0 pl-5">
          <li>Start with Button - use className with Tailwind classes</li>
          <li>Try classes like: bg-blue-500, text-white, px-4, py-2, rounded</li>
          <li>Use conditional classes for variants (primary vs secondary)</li>
          <li>Add responsive classes like md:text-lg for larger screens</li>
          <li>Test your components to see the styling in action</li>
        </ol>
      </div>
    </div>
  );
}

export const App = () => <Example />; 