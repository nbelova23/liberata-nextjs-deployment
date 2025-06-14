# Web Development Glossary

This glossary explains common web development terms you'll encounter throughout the Liberata onboarding exercises. Don't worry if these seem overwhelming at first - you'll learn them gradually through hands-on practice!

## General Development Terms

### **API (Application Programming Interface)**
A set of rules and protocols that allows different software applications to communicate with each other. Think of it like a waiter in a restaurant - it takes your order (request) to the kitchen (server) and brings back your food (response).

### **Backend**
The server-side of a web application that users don't see directly. It handles data storage, user authentication, and business logic. Like the kitchen in a restaurant.

### **Frontend**
The client-side of a web application that users interact with directly. This includes the user interface, buttons, forms, and visual elements. Like the dining area of a restaurant.

### **Full-Stack**
A developer or application that works with both frontend and backend technologies.

### **Repository (Repo)**
A storage location for your code, typically hosted on platforms like GitHub. Contains all your project files and tracks changes over time.

### **Environment Variables**
Configuration values that can change between different environments (development, testing, production) without changing your code. Like settings that tell your app which database to connect to.

## Git & Version Control

### **Branch**
A parallel version of your code where you can make changes without affecting the main codebase. Like working on a draft of a document while keeping the original safe.

### **Commit**
A snapshot of your code at a specific point in time, with a message describing what changed. Like saving a version of your document with notes about what you edited.

### **Pull Request (PR)**
A request to merge your changes from one branch into another. It allows others to review your code before it becomes part of the main project.

### **Fork**
Your own copy of someone else's repository that you can modify without affecting the original.

### **Clone**
Downloading a copy of a repository to your local computer so you can work on it.

### **Merge**
Combining changes from one branch into another.

### **SSH Key**
A secure way to authenticate with services like GitHub without typing your password every time.

## Web Technologies

### **HTML (HyperText Markup Language)**
The structure and content of web pages. Like the skeleton and organs of a body.

### **CSS (Cascading Style Sheets)**
The styling and layout of web pages. Like the skin, clothes, and makeup that make the body look good.

### **JavaScript**
The programming language that makes web pages interactive and dynamic. Like the muscles and brain that make the body move and think.

### **TypeScript**
A programming language built on top of JavaScript that adds type safety. It helps catch errors before your code runs.

### **Node.js**
A runtime that allows you to run JavaScript on servers (backend) instead of just in web browsers.

### **npm/pnpm**
Package managers that help you install and manage external code libraries (packages) in your project. pnpm is a faster, more efficient version of npm.

## React & Frontend Frameworks

### **React**
A JavaScript library for building user interfaces using reusable components. Think of components like LEGO blocks that you can combine to build complex structures.

### **Component**
A reusable piece of UI code in React. Like a LEGO block that you can use multiple times in different places.

### **Props**
Data that you pass from a parent component to a child component. Like giving instructions or materials to a LEGO block.

### **State**
Data that can change over time in a React component. Like the current status or condition of a LEGO block.

### **Hook**
Special functions in React that let you use state and other React features in functional components. They "hook into" React's functionality.

### **JSX**
A syntax that lets you write HTML-like code inside JavaScript. It makes React components easier to read and write.

### **Virtual DOM**
React's internal representation of the actual web page. It helps React update the page efficiently by only changing what actually needs to change.

## Next.js & Full-Stack

### **Next.js**
A React framework that adds features like server-side rendering, routing, and API endpoints. It's like React with superpowers.

### **Server-Side Rendering (SSR)**
Generating the HTML for a web page on the server before sending it to the browser. This makes pages load faster and improves SEO.

### **Static Site Generation (SSG)**
Pre-building all your web pages at build time. Like preparing all the meals in advance instead of cooking them when customers order.

### **API Route**
An endpoint in your application that handles HTTP requests. Like a specific phone number you can call to get certain information.

### **Middleware**
Code that runs between receiving a request and sending a response. Like a security guard that checks everyone before they enter a building.

## Database & Backend

### **Database**
A structured way to store and organize data. Like a very organized filing cabinet.

### **SQL (Structured Query Language)**
A language for communicating with databases to store, retrieve, and manipulate data.

### **Supabase**
An open-source alternative to Firebase that provides database, authentication, and other backend services.

### **Row-Level Security (RLS)**
A database security feature that controls which rows a user can see or modify based on their permissions.

### **Authentication (Auth)**
The process of verifying who a user is (like checking their ID).

### **Authorization**
The process of determining what a user is allowed to do (like checking if they have permission to enter a room).

## Cloud & Infrastructure

### **Cloud Computing**
Using someone else's computers (servers) over the internet instead of your own. Like renting an apartment instead of buying a house.

### **Serverless**
A way of running code without managing servers yourself. The cloud provider handles all the server management.

### **CDN (Content Delivery Network)**
A network of servers around the world that deliver your website's content from the location closest to each user.

### **Edge Computing**
Running code closer to where users are located (at the "edge" of the network) for faster performance.

### **Cloudflare Workers**
Serverless functions that run on Cloudflare's edge network around the world.

### **Object Storage**
A way to store files (like images, videos, documents) in the cloud. Cloudflare R2 is an example.

## Development Tools & Workflow

### **IDE (Integrated Development Environment)**
A software application that provides tools for writing, testing, and debugging code. VS Code is a popular example.

### **Terminal/Command Line**
A text-based interface for interacting with your computer. Like typing commands instead of clicking buttons.

### **Package**
A collection of code that someone else wrote that you can use in your project. Like buying a pre-made component instead of building it yourself.

### **Dependency**
A package that your project needs to work properly. Like ingredients needed for a recipe.

### **Build Process**
Converting your source code into a format that can run in production. Like compiling all your ingredients into a finished meal.

### **Deployment**
Making your application available on the internet for users to access.

## HTTP & Networking

### **HTTP (HyperText Transfer Protocol)**
The protocol used for communication between web browsers and servers.

### **HTTPS**
The secure version of HTTP that encrypts data between the browser and server.

### **CORS (Cross-Origin Resource Sharing)**
A security feature that controls how web pages can access resources from other domains. Like border control for web requests.

### **REST API**
A style of API design that uses standard HTTP methods (GET, POST, PUT, DELETE) to perform operations.

### **JSON (JavaScript Object Notation)**
A format for storing and transmitting data that's easy for both humans and computers to read.

### **Endpoint**
A specific URL where an API can be accessed. Like a specific address where you can send a letter.

## Performance & Optimization

### **Caching**
Storing frequently used data in a fast-access location to improve performance. Like keeping snacks in your desk drawer instead of walking to the kitchen every time.

### **Redis**
An in-memory data store often used for caching and real-time applications.

### **Lazy Loading**
Loading content only when it's needed, rather than all at once. Like only opening books when you want to read them.

### **Bundle**
A single file that contains all your JavaScript code and dependencies, optimized for production.

## Security

### **Environment Variables**
Configuration values stored outside your code to keep sensitive information (like passwords) secure.

### **API Key**
A secret token that identifies and authenticates your application when making API requests.

### **Token**
A piece of data that proves you're authenticated, like a temporary pass to enter a building.

### **Encryption**
Converting data into a secret code to protect it from unauthorized access.

## Testing & Quality

### **Unit Test**
Testing individual pieces of code in isolation to make sure they work correctly.

### **Integration Test**
Testing how different parts of your application work together.

### **Linting**
Automatically checking your code for potential errors and style issues.

### **TypeScript Types**
Annotations that specify what kind of data a variable should contain, helping catch errors early.

## Common Acronyms

- **DRI**: Directly Responsible Individual
- **PR**: Pull Request
- **CI/CD**: Continuous Integration/Continuous Deployment
- **SPA**: Single Page Application
- **PWA**: Progressive Web App
- **SEO**: Search Engine Optimization
- **UI**: User Interface
- **UX**: User Experience
- **MVP**: Minimum Viable Product

## Don't Panic! 🚀

This might seem like a lot, but remember:
- You don't need to memorize everything at once
- You'll learn these terms naturally as you work through the exercises
- It's normal to look things up - even experienced developers do this constantly
- Focus on understanding concepts rather than memorizing definitions

When you encounter a term you don't know, come back to this glossary or ask for help! 