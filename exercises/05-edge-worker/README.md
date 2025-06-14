# Edge Worker Exercise 🚀
*Build Your First Serverless API*

## 🚀 Quick Start (3 Minutes!)

**Ready to build an API that runs worldwide? Follow these 3 steps:**

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Start the development server:**
   ```bash
   pnpm run start
   ```
   *You should see: "Ready on http://127.0.0.1:8787"*

3. **Test it works:**
   ```bash
   curl http://127.0.0.1:8787
   ```
   *You should see: "Hello World!"*

**Now you're ready to build your API! Your mission: create endpoints that handle different types of requests.**

---

## 🤔 What are Cloudflare Workers?

Think of Cloudflare Workers like **having a tiny computer in 200+ cities around the world**:

### **Workers = Smart Assistants Everywhere**
- **Your Code** = Instructions for the assistant
- **Requests** = Questions people ask your assistant  
- **Responses** = Answers your assistant gives back
- **Global Network** = Having assistants in every major city

### **Why This is Amazing:**
- **Super Fast**: Your code runs close to users (like having local stores)
- **No Servers**: You don't manage any computers (like using Uber vs owning a taxi)
- **Pay Per Use**: Only pay when someone uses it (like paying per ride)
- **Always Available**: Works 24/7 worldwide (like having staff everywhere)

### **Real Examples:**
- **Netflix**: Serves videos from the closest location
- **Shopify**: Processes payments instantly worldwide  
- **Discord**: Handles millions of messages per second
- **Zoom**: Routes video calls efficiently

---

## 🎯 What You'll Build

You'll create a **REST API** (a way for apps to talk to each other) with these features:

### **Basic Features** (Everyone should complete these)
1. **Hello World** - Your first response
2. **Status Check** - Health monitoring  
3. **Personalized Greetings** - Using URL parameters
4. **Echo Service** - Handling different request types

### **Advanced Features** (For when you're feeling confident)
5. **File Upload** - Handling file uploads
6. **Error Handling** - Making your API robust
7. **Deploy Live** - Put it on the internet!

---

## 📁 Project Structure

```
exercises/05-edge-worker/
├── src/              
│   └── index.ts          # 👈 You'll edit this file
├── package.json          # Dependencies
├── wrangler.jsonc        # Configuration
└── README.md             # This guide
```

**You'll do everything in one file: `src/index.ts`**

---

## 🏗️ How Workers Work

```typescript
// This is the basic structure you'll work with
export default {
  async fetch(request: Request) {
    const url = new URL(request.url);
    
    // Route 1: Home page
    if (url.pathname === '/') {
      return new Response('Hello World!');
    }
    
    // Route 2: Status check  
    if (url.pathname === '/status') {
      return new Response(JSON.stringify({ ok: true }));
    }
    
    // Default: Not found
    return new Response('Not Found', { status: 404 });
  }
};
```

**How it works:**
1. Someone visits your URL (like `yoursite.com/status`)
2. Your `fetch` function runs
3. You check what they're asking for (`url.pathname`)
4. You send back a response

---

## 🎯 Exercise 1: Hello World 👋

**Goal:** Make your worker say hello!

### **What You're Building:**
A simple greeting - like a welcome sign at a store.

### **Your Task:**
1. Open `src/index.ts`
2. Find the home route (`if (url.pathname === '/')`)
3. Change the response to include your name:
   ```typescript
   return new Response('Hello, [Your Name]!');
   ```

### **Test It:**
```bash
curl http://127.0.0.1:8787
# Should return: Hello, [Your Name]!
```

---

## 🎯 Exercise 2: Status Endpoint 📊

**Goal:** Create a health check for your API!

### **What You're Building:**
A status check - like a heartbeat monitor that shows your API is alive.

### **Your Task:**
1. Add a `/status` route
2. Return JSON with current timestamp:
   ```typescript
   if (url.pathname === '/status') {
     return new Response(JSON.stringify({
       ok: true,
       timestamp: Date.now(),
       message: 'API is running!'
     }), {
       headers: { 'Content-Type': 'application/json' }
     });
   }
   ```

### **Test It:**
```bash
curl http://127.0.0.1:8787/status
# Should return: {"ok":true,"timestamp":1234567890,"message":"API is running!"}
```

---

## 🎯 Exercise 3: Personalized Greetings 🔍

**Goal:** Make your API respond to names!

### **What You're Building:**
A personalized greeting - like a receptionist saying "Welcome, John!" instead of just "Welcome!"

### **What are URL Parameters?**
URL parameters are like filling out a form in the web address:
- `yoursite.com/greet?name=John` 
- The `?name=John` part is a parameter
- It's like saying "Hey API, the name is John"

### **Your Task:**
1. Add a `/greet` route
2. Get the name from URL parameters:
   ```typescript
   if (url.pathname === '/greet') {
     const name = url.searchParams.get('name') || 'Friend';
     return new Response(JSON.stringify({
       message: `Hello, ${name}!`,
       timestamp: new Date().toISOString()
     }), {
       headers: { 'Content-Type': 'application/json' }
     });
   }
   ```

### **Test It:**
```bash
curl "http://127.0.0.1:8787/greet?name=John"
# Should return: {"message":"Hello, John!","timestamp":"2024-01-01T12:00:00.000Z"}

curl "http://127.0.0.1:8787/greet"
# Should return: {"message":"Hello, Friend!","timestamp":"2024-01-01T12:00:00.000Z"}
```

---

## 🎯 Exercise 4: Echo Service 📨

**Goal:** Handle different types of requests!

### **What You're Building:**
An echo service - like a mirror that shows you what you sent.

### **What are HTTP Methods?**
HTTP methods are like different ways to talk:
- **GET**: "Can I see something?" (like asking to see a menu)
- **POST**: "Here's some information" (like filling out a form)
- **PUT**: "Update this information" (like editing your profile)
- **DELETE**: "Remove this" (like canceling an order)

### **Your Task:**
1. Add an `/echo` route that handles different methods:
   ```typescript
   if (url.pathname === '/echo') {
     if (request.method === 'GET') {
       return new Response(JSON.stringify({
         method: 'GET',
         url: request.url,
         headers: Object.fromEntries(request.headers)
       }), {
         headers: { 'Content-Type': 'application/json' }
       });
     }
     
     if (request.method === 'POST') {
       const body = await request.text();
       return new Response(JSON.stringify({
         method: 'POST',
         body: body,
         received: new Date().toISOString()
       }), {
         headers: { 'Content-Type': 'application/json' }
       });
     }
     
     return new Response('Method not supported', { status: 405 });
   }
   ```

### **Test It:**
```bash
# Test GET request
curl http://127.0.0.1:8787/echo

# Test POST request
curl -X POST -H "Content-Type: application/json" -d '{"message":"hello"}' http://127.0.0.1:8787/echo
```

---

## 🎯 Exercise 5: Deploy to the Internet! 🚀

**Goal:** Put your API online for the world to use!

### **What is Deployment?**
Deployment is like opening a new store:
- You've built everything locally (like building in your garage)
- Now you're opening it to the public
- People worldwide can visit your store

### **Your Task:**
1. **Login to Cloudflare:**
   ```bash
   pnpm exec wrangler login
   ```
   *This opens your browser to log in*

2. **Deploy your worker:**
   ```bash
   pnpm run deploy
   ```
   *This uploads your code to Cloudflare's global network*

3. **Test your live API:**
   ```bash
   curl https://your-worker-name.your-subdomain.workers.dev/status
   ```

### **🎉 Congratulations!**
Your API is now running on a global network! Anyone in the world can use it.

---

## 🔧 Common Problems & Solutions

### **"Command not found: pnpm"**
**Problem:** pnpm isn't installed  
**Solution:** Install it:
```bash
npm install -g pnpm
```

### **"Port already in use"**
**Problem:** Something else is using port 8787  
**Solution:** Kill the process:
```bash
# Find what's using the port
lsof -i :8787

# Kill it (replace PID with the actual number)
kill -9 PID
```

### **"Worker not responding"**
**Problem:** Your code has an error  
**Solution:** 
1. Check the terminal for error messages
2. Look at your `src/index.ts` file
3. Make sure all brackets `{}` and parentheses `()` match
4. Save the file and try again

### **"Can't connect to deployed worker"**
**Problem:** Deployment failed or URL is wrong  
**Solution:**
1. Check the deployment output for the correct URL
2. Make sure you're logged into Cloudflare
3. Try deploying again: `pnpm run deploy`

---

## 🏆 Success Criteria

**You'll know you're successful when:**

✅ **Local development works** (`curl http://127.0.0.1:8787/status` returns JSON)  
✅ **All routes respond correctly** (/, /status, /greet, /echo)  
✅ **Parameters work** (`/greet?name=John` says hello to John)  
✅ **Different HTTP methods work** (GET and POST to /echo)  
✅ **Deployment succeeds** (your worker is live on the internet)  

---

## 🎯 Bonus Challenges

### **After Basic Exercises:**
1. **Add a `/time` endpoint** that returns the current time in different timezones
2. **Create a `/random` endpoint** that returns random numbers or quotes
3. **Build a `/calculator` endpoint** that does math operations
4. **Add a `/weather` endpoint** that returns fake weather data

### **For Advanced Students:**
1. **File Upload** - Handle image uploads
2. **Database Storage** - Use Cloudflare KV storage
3. **Authentication** - Add API keys
4. **Rate Limiting** - Prevent spam
5. **Error Monitoring** - Track and log errors

---

## 🛠️ Available Commands

```bash
# Start development server
pnpm run start

# Deploy to production
pnpm run deploy

# Run tests (if you add them)
pnpm test

# Check your code for errors
pnpm run lint
```

---

## 📚 What You've Learned

By completing these exercises, you've learned:

- **Serverless Computing** - Code that runs without managing servers
- **REST APIs** - How applications communicate over the internet
- **HTTP Methods** - Different ways to send requests (GET, POST, etc.)
- **URL Parameters** - How to pass data in web addresses
- **JSON** - The language of web APIs
- **Global Deployment** - How to put your code on a worldwide network

**These skills are used by every major tech company!** 🎉

---

## 🆘 Need Help?

1. **Read the error messages** - they usually tell you what's wrong
2. **Check your syntax** - make sure brackets and quotes match
3. **Test one thing at a time** - don't change everything at once
4. **Ask for help** - post in Slack or come to office hours

**Remember: Every developer started where you are now!** 💪 

# Cloudflare Workers & Edge Computing

> **Completion Time:** 1.5 hours  
> **Prerequisites:** JavaScript/TypeScript basics, basic understanding of HTTP

Learn Cloudflare Workers, a serverless platform that runs your code at the edge - closer to your users for faster response times. This exercise covers edge computing fundamentals and building serverless functions.

## 🎯 What You'll Learn

By the end of this exercise, you'll understand:
- What edge computing and serverless functions are
- How Cloudflare Workers differ from traditional servers
- Creating and deploying Workers with Wrangler CLI
- Handling HTTP requests and responses
- Working with environment variables and secrets
- Connecting to external APIs and databases
- Performance benefits of edge computing

## 📖 Background

**Edge Computing** means running code closer to your users instead of in a central data center. Imagine if instead of calling a restaurant across town, you could call one in your neighborhood - that's edge computing!

**Cloudflare Workers** are serverless functions that run on Cloudflare's global network of data centers. Your code runs in over 200+ cities worldwide, automatically.

**Key Benefits:**
- **Ultra-fast response times** - Code runs close to users
- **Global scale** - Automatically distributed worldwide  
- **No server management** - Just write code, Cloudflare handles the rest
- **Pay per request** - Only pay for what you use
- **Instant deployment** - Deploy globally in seconds

**Real-world analogy:** Traditional servers are like having one pizza shop in the center of a city. Edge computing is like having pizza shops in every neighborhood - much faster delivery!

## 🚀 Quick Start (15 Minutes)

### Step 1: Set Up Wrangler CLI

```bash
# Create a new branch for this exercise
git checkout -b feature/edge-worker-YOUR_NAME

# Navigate to the edge worker exercise directory
cd exercises/05-edge-worker

# Install Wrangler CLI globally
npm install -g wrangler

# Login to Cloudflare (you'll need a free account)
wrangler login

# Verify your setup
wrangler whoami
```

### Step 2: Create Your First Worker

```bash
# Create a new Worker project
wrangler init my-first-worker --type=typescript

# Navigate into your project
cd my-first-worker

# Start local development server
wrangler dev
```

### Step 3: Write Your First Worker

Edit `src/index.ts`:

```typescript
export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    
    // Handle different routes
    if (url.pathname === '/') {
      return new Response('Hello from the Edge! 🌍', {
        headers: { 'Content-Type': 'text/plain' }
      });
    }
    
    if (url.pathname === '/api/time') {
      const currentTime = new Date().toISOString();
      return new Response(JSON.stringify({ 
        time: currentTime,
        location: request.cf?.colo || 'unknown'
      }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    return new Response('Not Found', { status: 404 });
  }
};
```

### Step 4: Test and Deploy

```bash
# Test locally (visit http://localhost:8787)
wrangler dev

# Deploy to Cloudflare's edge network
wrangler deploy
```

Congratulations! Your code is now running on the edge worldwide! 🎉

## 🎬 YouTube Tutorials

Here are excellent tutorials to help you master Cloudflare Workers and edge computing:

### Cloudflare Workers Fundamentals
- **[Cloudflare Workers Tutorial](https://www.youtube.com/watch?v=pESO6SU1m6Q)** by Fireship (8 minutes) ⭐ **RECOMMENDED**
  - Perfect introduction to Cloudflare Workers
  - Quick but comprehensive overview
  - Shows practical examples and deployment
  - Great for understanding the core concepts

### Edge Computing Deep Dive
- **[What is Edge Computing?](https://www.youtube.com/watch?v=yOP5-3_WFus)** by IBM Technology (8 minutes)
  - Excellent explanation of edge computing concepts
  - Helps understand why edge computing matters
  - Clear analogies and real-world examples

### Cloudflare Workers Advanced
- **[Build a Full Stack App with Cloudflare Workers](https://www.youtube.com/watch?v=NlXfg5Pxxh8)** by Cloudflare (45 minutes)
  - Official Cloudflare tutorial
  - Covers advanced Workers features
  - Includes database integration

### Serverless Functions
- **[Serverless Functions Explained](https://www.youtube.com/watch?v=vxJobGtqKVM)** by Fireship (5 minutes)
  - Quick explanation of serverless computing
  - Compares different serverless platforms
  - Perfect for understanding the bigger picture

### Practical Projects
- **[Building APIs with Cloudflare Workers](https://www.youtube.com/watch?v=6vBz3Fcqfpk)** by Coding Garden (1 hour)
  - Hands-on API building tutorial
  - Covers routing, middleware, and best practices
  - Great for practical learning

**💡 Tip:** Start with the recommended Fireship tutorial to get the big picture, then dive into the practical projects for hands-on experience.

## 📚 Core Cloudflare Workers Concepts

### 1. Basic Worker Structure

```typescript
// src/index.ts
export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    // Your worker logic here
    return new Response('Hello World!');
  }
};

// Define your environment variables type
interface Env {
  MY_SECRET: string;
  MY_KV_NAMESPACE: KVNamespace;
}
```

### 2. Handling Different HTTP Methods

```typescript
export default {
  async fetch(request: Request): Promise<Response> {
    const { method, url } = request;
    const { pathname } = new URL(url);

    switch (method) {
      case 'GET':
        if (pathname === '/users') {
          return handleGetUsers();
        }
        break;
        
      case 'POST':
        if (pathname === '/users') {
          return handleCreateUser(request);
        }
        break;
        
      case 'PUT':
        if (pathname.startsWith('/users/')) {
          const userId = pathname.split('/')[2];
          return handleUpdateUser(request, userId);
        }
        break;
        
      case 'DELETE':
        if (pathname.startsWith('/users/')) {
          const userId = pathname.split('/')[2];
          return handleDeleteUser(userId);
        }
        break;
    }

    return new Response('Not Found', { status: 404 });
  }
};

async function handleGetUsers(): Promise<Response> {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ];
  
  return new Response(JSON.stringify(users), {
    headers: { 'Content-Type': 'application/json' }
  });
}

async function handleCreateUser(request: Request): Promise<Response> {
  const userData = await request.json();
  
  // In a real app, you'd save to a database
  const newUser = {
    id: Date.now(),
    ...userData
  };
  
  return new Response(JSON.stringify(newUser), {
    status: 201,
    headers: { 'Content-Type': 'application/json' }
  });
}
```

### 3. Working with Request Data

```typescript
export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    
    // Get query parameters
    const name = url.searchParams.get('name') || 'World';
    const age = url.searchParams.get('age');
    
    // Get headers
    const userAgent = request.headers.get('User-Agent');
    const authorization = request.headers.get('Authorization');
    
    // Get request body (for POST/PUT requests)
    let body = null;
    if (request.method === 'POST' || request.method === 'PUT') {
      const contentType = request.headers.get('Content-Type');
      
      if (contentType?.includes('application/json')) {
        body = await request.json();
      } else if (contentType?.includes('application/x-www-form-urlencoded')) {
        body = await request.formData();
      } else {
        body = await request.text();
      }
    }
    
    // Get Cloudflare-specific data
    const country = request.cf?.country;
    const city = request.cf?.city;
    const datacenter = request.cf?.colo;
    
    return new Response(JSON.stringify({
      greeting: `Hello, ${name}!`,
      age: age ? `You are ${age} years old` : 'Age not provided',
      userAgent,
      location: { country, city, datacenter },
      body
    }), {
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
```

### 4. Environment Variables and Secrets

```typescript
interface Env {
  API_KEY: string;
  DATABASE_URL: string;
  MY_KV: KVNamespace;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    // Use environment variables
    const apiKey = env.API_KEY;
    
    // Make authenticated API call
    const response = await fetch('https://api.example.com/data', {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });
    
    const data = await response.json();
    
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
```

### 5. CORS Handling

```typescript
function corsHeaders(origin?: string) {
  return {
    'Access-Control-Allow-Origin': origin || '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Max-Age': '86400',
  };
}

export default {
  async fetch(request: Request): Promise<Response> {
    const origin = request.headers.get('Origin');
    
    // Handle preflight requests
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: corsHeaders(origin)
      });
    }
    
    // Your API logic here
    const data = { message: 'Hello from the edge!' };
    
    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders(origin)
      }
    });
  }
};
```

### 6. Error Handling and Logging

```typescript
export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    try {
      const url = new URL(request.url);
      
      // Log request details
      console.log(`${request.method} ${url.pathname} from ${request.cf?.country}`);
      
      if (url.pathname === '/api/data') {
        const data = await fetchExternalData();
        return new Response(JSON.stringify(data), {
          headers: { 'Content-Type': 'application/json' }
        });
      }
      
      return new Response('Not Found', { status: 404 });
      
    } catch (error) {
      console.error('Worker error:', error);
      
      return new Response(JSON.stringify({
        error: 'Internal Server Error',
        message: error instanceof Error ? error.message : 'Unknown error'
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }
};

async function fetchExternalData() {
  const response = await fetch('https://api.example.com/data');
  
  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }
  
  return response.json();
}
```

## 🛠️ Hands-On Project: Student API

Build a complete API for managing students using Cloudflare Workers:

### Project Features

1. **GET /api/students** - List all students
2. **GET /api/students/:id** - Get specific student
3. **POST /api/students** - Create new student
4. **PUT /api/students/:id** - Update student
5. **DELETE /api/students/:id** - Delete student
6. **GET /api/health** - Health check endpoint

### Implementation

```typescript
interface Student {
  id: string;
  name: string;
  email: string;
  major: string;
  year: number;
}

interface Env {
  STUDENTS_KV: KVNamespace;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const { pathname, searchParams } = url;
    const { method } = request;

    // Add CORS headers to all responses
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    try {
      // Route handling
      if (pathname === '/api/health') {
        return new Response(JSON.stringify({ 
          status: 'healthy', 
          timestamp: new Date().toISOString() 
        }), {
          headers: { 'Content-Type': 'application/json', ...corsHeaders }
        });
      }

      if (pathname === '/api/students') {
        if (method === 'GET') {
          return handleGetStudents(env, searchParams);
        } else if (method === 'POST') {
          return handleCreateStudent(request, env);
        }
      }

      const studentIdMatch = pathname.match(/^\/api\/students\/(.+)$/);
      if (studentIdMatch) {
        const studentId = studentIdMatch[1];
        
        if (method === 'GET') {
          return handleGetStudent(studentId, env);
        } else if (method === 'PUT') {
          return handleUpdateStudent(studentId, request, env);
        } else if (method === 'DELETE') {
          return handleDeleteStudent(studentId, env);
        }
      }

      return new Response('Not Found', { 
        status: 404, 
        headers: corsHeaders 
      });

    } catch (error) {
      return new Response(JSON.stringify({
        error: 'Internal Server Error',
        message: error instanceof Error ? error.message : 'Unknown error'
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders }
      });
    }
  }
};

async function handleGetStudents(env: Env, searchParams: URLSearchParams): Promise<Response> {
  // Implementation for getting all students
  // You would typically fetch from KV storage or database
  const students: Student[] = [
    { id: '1', name: 'John Doe', email: 'john@duke.edu', major: 'CS', year: 3 },
    { id: '2', name: 'Jane Smith', email: 'jane@duke.edu', major: 'Math', year: 2 }
  ];

  return new Response(JSON.stringify(students), {
    headers: { 'Content-Type': 'application/json' }
  });
}

// Implement other handler functions...
```

## ✅ Success Criteria

- [ ] Understand what edge computing and serverless functions are
- [ ] Successfully set up Wrangler CLI and Cloudflare account
- [ ] Created and deployed your first Worker
- [ ] Handled different HTTP methods (GET, POST, PUT, DELETE)
- [ ] Worked with request data (headers, query params, body)
- [ ] Implemented proper error handling and CORS
- [ ] Built a complete API with multiple endpoints
- [ ] Can explain the benefits of edge computing

## 🚀 Bonus Challenges

1. **KV Storage:** Use Cloudflare KV to persist data
2. **Durable Objects:** Implement stateful edge computing
3. **Caching:** Add intelligent caching strategies
4. **Rate Limiting:** Implement API rate limiting
5. **Authentication:** Add JWT-based authentication

## 🎉 What's Next?

You're now ready to learn about **R2 Storage**, Cloudflare's object storage service that works perfectly with Workers for storing files, images, and data!

## 💡 Pro Tips

- **Keep Workers lightweight** - They have CPU time limits
- **Use KV for data storage** - Workers are stateless by default
- **Cache aggressively** - Leverage Cloudflare's global cache
- **Monitor performance** - Use Wrangler analytics
- **Test locally first** - Use `wrangler dev` for development 