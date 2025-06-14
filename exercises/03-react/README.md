# React Exercises 🎨

Think of React like building with LEGO blocks:
- Each piece (component) has a specific job
- You can combine pieces to build bigger things
- When you change one piece, only that piece updates
- You can reuse pieces in different places

## Quick Start 🚀

1. **Start the Development Server**
   ```bash
   pnpm dev
   ```
   This will open http://localhost:3000 in your browser.

2. **View Your Components**
   - You'll see a dropdown menu at the top (like a TV remote)
   - Select any exercise to view it (like changing channels)
   - Make changes and see them update instantly (like magic!)
   - Use the browser's developer tools (F12) to peek behind the curtain

3. **Run Tests**
   ```bash
   pnpm test
   ```
   Keep this running in a separate terminal to see test results in real-time.

## Exercise Structure 🏗️

### Core Exercises (Start Here!) 🌟

### 1. Components (01-components.tsx) 🧩
#### What are Components?
Think of components like building blocks:
- Each block has a specific job (like a LEGO piece)
- You can put blocks together to build bigger things
- You can reuse blocks in different places
- When you change a block, only that block updates

#### What You'll Build
- A simple button (like a light switch)
- A card component (like a photo frame)
- A user profile (like a name tag)
- A todo list (like a shopping list)
- A search input (like a search bar)

### 2. Hooks (02-hooks.tsx) 🎣
#### What are Hooks?
Think of hooks like special tools:
- `useState` is like a memory box (remembers things)
- `useEffect` is like a robot that does tasks for you
- Custom hooks are like creating your own tools
- Hook rules are like safety instructions

#### What You'll Build
- A counter (like a scoreboard)
- A timer (like a stopwatch)
- A custom hook for data (like a personal assistant)
- A form with validation (like a bouncer checking IDs)

### 3. Forms (03-forms.tsx) 📝
#### What are Forms?
Think of forms like a conversation:
- You ask questions (inputs)
- You get answers (values)
- You check if answers are correct (validation)
- You do something with the answers (submit)

#### What You'll Build
- A login form (like a security guard)
- A registration form (like a membership card)
- A search form (like a library catalog)
- A feedback form (like a suggestion box)

### 4. Routing (04-routing.tsx) 🗺️
#### What is Routing?
Think of routing like a GPS:
- It tells you where you are (current page)
- It helps you get where you want to go (navigation)
- It remembers where you've been (history)
- It shows different things in different places (routes)

#### What You'll Build
- A navigation menu (like a map)
- Different pages (like rooms in a house)
- Links between pages (like doors between rooms)
- Dynamic routes (like addresses with house numbers)

### 5. State Management (05-state-management.tsx) 🧠
#### What is State Management?
Think of state like a brain:
- It remembers things (data)
- It tells other parts what to do (updates)
- It can get new information (fetching)
- It handles errors (like a safety net)

#### What You'll Build
- A todo list (like a shopping list)
- A data fetching component (like a news reader)
- A paginated list (like a book with pages)
- A loading state (like a "please wait" sign)

### Advanced Exercises (Try After Core!) 🚀

### 6. Async Effects (06-async-effects.tsx) 🕒
#### What are Async Effects?
Think of async effects like a robot assistant:
- It does tasks in the background (like a helper)
- It tells you when it's done (like a notification)
- It can handle errors (like a safety net)
- It can clean up after itself (like tidying up)

#### What You'll Build
- A data loader (like a book reader)
- A polling component (like a weather update)
- A search debouncer (like a smart search)
- A resource cleaner (like a janitor)

### 7. Context API (07-context-api.tsx) 🎭
#### What is Context?
Think of Context like a family tree:
- Parents share things with children (like passing down traits)
- Children can access what parents share (like inheriting features)
- Everyone knows what's shared (like family rules)
- Changes affect everyone (like family decisions)

#### What You'll Build
- A theme provider (like a house decorator)
- A user context (like a family photo album)
- A settings context (like house rules)
- A language context (like family language)

### 8. Tailwind CSS (08-tailwindcss.tsx) 🎨
#### What is Tailwind CSS?
Think of Tailwind like a box of LEGO pieces:
- Each piece has a specific job (like a color or size)
- You can combine pieces to build anything (like a house)
- You don't need to write custom CSS (like having instructions)
- Everything is consistent (like using the same pieces)

#### What You'll Build
- A styled button (like a fancy light switch)
- A styled card (like a decorated photo frame)
- A navigation bar (like a menu board)
- A responsive grid (like a photo wall)

### 9. SSR & SSG (09-ssr-ssg.tsx) 🚀
#### What are SSR & SSG?
Think of SSR/SSG like a restaurant:
- SSR (Server-Side Rendering) is like cooking to order
- SSG (Static Site Generation) is like meal prep
- Both make food ready before serving (like pre-cooking)
- Both make things faster (like having food ready)

#### What You'll Build
- A server component (like a chef cooking)
- A static page (like a pre-made meal)
- A dynamic route (like a menu with options)
- A hybrid page (like a buffet)

## Development Workflow 🔄

### Viewing and Testing Components
1. **Start the Development Server**
   ```bash
   pnpm dev
   ```
   - The app will open automatically (like opening a book)
   - You'll see a dropdown menu (like a TV remote)
   - Each exercise is displayed in its own section (like chapters in a book)

2. **Making Changes**
   - Edit any file in the `src` directory
   - Changes appear instantly (like magic!)
   - No need to refresh (like a live TV show)
   - Use the browser's developer tools to:
     - Inspect components (like looking under the hood)
     - Check console logs (like reading a diary)
     - Debug state changes (like solving a mystery)
     - Monitor network requests (like watching mail delivery)

3. **Testing Your Changes**
   - Keep the test runner running (`pnpm test`)
   - Tests update automatically (like a spell checker)
   - Fix any failing tests (like solving puzzles)
   - Check the browser to see if your changes work (like taste-testing food)

### Working with Tests 🧪
Each exercise has its own test file in the `tests/__tests__` directory:
- `01-components.test.tsx` (testing building blocks)
- `02-hooks.test.tsx` (testing tools)
- `03-forms.test.tsx` (testing conversations)
- `04-routing.test.tsx` (testing navigation)
- `05-state-management.test.tsx` (testing memory)
- `06-async-effects.test.tsx` (testing robot assistants)
- `07-context-api.test.tsx` (testing family trees)
- `08-tailwindcss.test.tsx` (testing LEGO pieces)
- `09-ssr-ssg.test.tsx` (testing restaurants)

Run tests for a specific exercise:
```bash
# Run all tests
pnpm test

# Run tests for a specific exercise
pnpm test 01-components
pnpm test 02-hooks
pnpm test 03-forms
pnpm test 04-routing
pnpm test 05-state-management
pnpm test 06-async-effects
pnpm test 07-context-api
pnpm test 08-tailwindcss
pnpm test 09-ssr-ssg
```

### Testing Tips 💡
- Keep tests focused and simple (like checking one thing at a time)
- Test one thing at a time (like solving one puzzle at a time)
- Use meaningful test descriptions (like clear instructions)
- Follow the Arrange-Act-Assert pattern (like a recipe)
- Use the testing library queries in this order:
  1. `getByRole` (like finding someone by their job)
  2. `getByLabelText` (like finding someone by their name tag)
  3. `getByPlaceholderText` (like finding someone by their seat)
  4. `getByText` (like finding someone by what they're saying)
  5. `getByDisplayValue` (like finding someone by their answer)

## Learning Path 📚

### For Beginners (Start Here!)
1. **Components** - Learn the basics of building blocks
2. **Hooks** - Learn how to add memory and effects
3. **Forms** - Learn how to handle user input
4. **Routing** - Learn how to navigate between pages
5. **State Management** - Learn how to manage complex data

### For Intermediate Students
6. **Async Effects** - Learn how to handle background tasks
7. **Context API** - Learn how to share data across components
8. **Tailwind CSS** - Learn how to style components efficiently

### For Advanced Students
9. **SSR & SSG** - Learn about server-side rendering and static generation

## Project Structure 📁
```
exercises/03-react/
├── src/
│   ├── 01-components.tsx        # Building blocks
│   ├── 02-hooks.tsx             # Special tools
│   ├── 03-forms.tsx             # Conversations
│   ├── 04-routing.tsx           # Navigation
│   ├── 05-state-management.tsx # Memory
│   ├── 06-async-effects.tsx    # Robot assistants
│   ├── 07-context-api.tsx      # Family trees
│   ├── 08-tailwindcss.tsx      # LEGO pieces
│   ├── 09-ssr-ssg.tsx          # Restaurants
│   └── main.tsx                 # Control center
├── tests/
│   └── __tests__/              # Quality control
├── package.json                # Toolbox
└── README.md                  # Instruction manual
```

## Troubleshooting 🔧

If you encounter any issues:
1. Make sure you're in the correct directory (like being in the right room)
2. Check that all dependencies are installed (like having all your tools)
3. Look for error messages in the terminal (like reading warning signs)
4. Check the browser's console for any errors (like checking a car's dashboard)
5. Make sure you're using the correct Node.js version (like using the right key)

## Learning Resources 📚
- [React Documentation](https://reactjs.org/docs/getting-started.html) (like a recipe book)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) (like a dictionary)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) (like a quality control manual)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) (like a LEGO instruction manual)

Happy coding! 🎉 