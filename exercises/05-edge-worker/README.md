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