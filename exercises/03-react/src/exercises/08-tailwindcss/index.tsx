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
  const { variant = "primary", size = "md", disabled, children } = props
  const base = "rounded font-semibold"
  const variantClass =
    variant === "secondary"
      ? "bg-gray-200 text-black"
      : "bg-blue-500 text-white"
  const sizeClass =
    size === "lg"
      ? "px-6 py-3"
      : size === "sm"
      ? "px-2 py-1"
      : "px-4 py-2"
  return (
    <button
      className={`${base} ${variantClass} ${sizeClass}`}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

// 2. Create a Card component (like a photo frame)
//    - title: What's at the top (like a picture title)
//    - children: What goes inside (like the photo)
//    - footer: What goes at bottom (like a caption)
//    - shadow: How it floats (like a shadow)
export function Card(props: any): JSX.Element {
  const { title, children, footer, shadow } = props
  const shadowClass =
    shadow === "lg"
      ? "shadow-lg"
      : shadow === "sm"
      ? "shadow-sm"
      : "shadow-md"
  return (
    <div className={`bg-white p-4 rounded-xl ${shadowClass}`}>
      {title && <h3 className="font-bold mb-2">{title}</h3>}
      <div>{children}</div>
      {footer && <div className="mt-2 text-sm text-gray-500">{footer}</div>}
    </div>
  )
}

// 3. Create a Navbar component (like a menu board)
//    - logo: What to show first (like a restaurant name)
//    - links: Where to go (like menu items)
//    - onMenuClick: What to do when clicked (like ordering)
//    - isMobile: Is it small? (like a mobile menu)
export function Navbar(props: any): JSX.Element {
  const { logo, links = [], onMenuClick } = props
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100">
      <div className="font-bold">{logo}</div>

      <div className="flex gap-4">
        {links.map((link: any, index: number) => (
          <button key={index} onClick={() => onMenuClick?.(link)}>
            {link}
          </button>
        ))}
      </div>
    </nav>
  )
}

// 4. Create a Grid component (like a photo wall)
//    - columns: How many per row (like photos per row)
//    - gap: Space between items (like photo spacing)
//    - children: What to show (like photos)
//    - responsive: Change on small screens? (like mobile view)
export function Grid(props: any): JSX.Element {
  const { columns = 3, gap = 4, children } = props
  const colsClass = `grid-cols-${columns}`
  const gapClass = `gap-${gap}`
  return <div className={`grid ${colsClass} ${gapClass}`}>{children}</div>
}

// Components that tests expect:
export function ResponsiveCard(props: any): JSX.Element {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md md:p-6">
      <h2 className="text-lg md:text-xl font-bold">Responsive Card</h2>
      <p className="text-sm md:text-base mt-2">
        This card should adapt to different screen sizes.
      </p>
    </div>
  )
}

export function CustomButton(props: any): JSX.Element {
  return (
    <button className="bg-blue-500 text-white px-4 py-2 rounded">
      Click Me
    </button>
  )
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
                <Button variant="primary" size="md">
                  Click Me
                </Button>
              </div>
            </div>
            
            <div className="p-4 border border-dashed border-gray-300 rounded-lg">
              <div className="mb-3 font-bold">📝 Card</div>
              <div className="text-sm text-gray-600">
                <Card
                  title="Title"
                  footer="footer"
                >
                  content
                </Card>
              </div>
            </div>
            
            <div className="p-4 border border-dashed border-gray-300 rounded-lg">
              <div className="mb-3 font-bold">📝 Navbar</div>
              <div className="text-sm text-gray-600">        
                <Navbar
                  logo="App"
                  links={["Home", "About", "Contact"]}
                  onMenuClick={(link: string) => console.log(link)}
                />
              </div>
            </div>
            
            <div className="p-4 border border-dashed border-gray-300 rounded-lg">
              <div className="mb-3 font-bold">📝 Grid</div>
              <div className="text-sm text-gray-600">
                <Grid columns={3} gap={4}>
                  <div className="bg-gray-200 p-2">Item 1</div>
                  <div className="bg-gray-200 p-2">Item 2</div>
                  <div className="bg-gray-200 p-2">Item 3</div>
                </Grid>
              </div>
            </div>
            
            <div className="p-4 border border-dashed border-gray-300 rounded-lg">
              <div className="mb-3 font-bold">📝 ResponsiveCard</div>
              <div className="text-sm text-gray-600">
                <ResponsiveCard/>
              </div>
            </div>
            
            <div className="p-4 border border-dashed border-gray-300 rounded-lg">
              <div className="mb-3 font-bold">📝 CustomButton</div>
              <div className="text-sm text-gray-600">
                <CustomButton/>
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