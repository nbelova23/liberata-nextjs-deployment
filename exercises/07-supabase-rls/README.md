# Supabase & Row Level Security Exercises 🔐
*Learn Database Security the Easy Way*

## 🚀 Quick Start (10 Minutes!)

**Ready to build a secure database? Follow these 6 steps:**

1. **Open your terminal and navigate to this folder:**
   ```bash
   cd exercises/07-supabase-rls
   ```

2. **Install the required packages:**
   ```bash
   pnpm install
   ```
   *This downloads all the database libraries we need*

3. **Create a free Supabase account:**
   - Go to [supabase.com](https://supabase.com)
   - Click "Start your project" 
   - Sign up with GitHub (easiest option)
   - Create a new project (choose any name, like "liberata-learning")

4. **Get your database connection details:**
   - In your Supabase project dashboard
   - Click "Settings" (⚙️) in the left sidebar
   - Click "API" in the settings menu
   - Copy these 3 values (we'll use them next):
     - **Project URL** (looks like: `https://abcdefg.supabase.co`)
     - **anon public key** (long string starting with `eyJ...`)
     - **service_role key** (another long string starting with `eyJ...`)

5. **Set up your environment file:**
   - Copy and paste this into a new file called `.env`:
   ```bash
   # Your Supabase project details
   SUPABASE_URL=https://your-project-id.supabase.co
   SUPABASE_KEY=your-anon-public-key-here
   SUPABASE_SERVICE_KEY=your-service-role-key-here
   ```
   - Replace the values with what you copied in step 4

6. **Test your connection:**
   ```bash
   pnpm start
   ```
   *If this works without errors, you're ready to go!*

**Now you're ready to learn database security! Your mission: build a secure paper-sharing system.**

---

## 🤔 What is Supabase & Row Level Security?

Think of Supabase as **a smart, secure filing cabinet** for your website's data:

### **Supabase = Smart Filing Cabinet**
- **Tables** = Different drawers (users, papers, comments)
- **Rows** = Individual files in each drawer
- **Columns** = Information on each file (title, content, owner)
- **Database** = The entire filing cabinet

### **Row Level Security (RLS) = Security Guards**
- **RLS Policies** = Security rules ("Only the owner can see their files")
- **Authentication** = ID cards (who you are)
- **Authorization** = Access levels (what you can do)

### **Why Learn This?**
Every app with user data needs security:
- **Social Media**: Your posts are private until you share them
- **Email**: Only you can read your inbox
- **Banking**: Only you can see your account balance
- **School Portal**: Only you can see your grades

---

## 🎬 YouTube Tutorials

Here are excellent tutorials to help you master Supabase and database security:

### Supabase Fundamentals
- **[Supabase Tutorial for Beginners](https://www.youtube.com/watch?v=WdA6b0jPNv4)** by Net Ninja (2.5 hours) ⭐ **RECOMMENDED**
  - Comprehensive Supabase course perfect for beginners
  - Covers database setup, authentication, and RLS
  - Step-by-step approach with practical examples
  - Excellent for understanding all Supabase features

### Database Security & RLS
- **[Row Level Security Explained](https://www.youtube.com/watch?v=Ow_Uzedfohk)** by Supabase (15 minutes)
  - Official explanation of Row Level Security
  - Shows practical examples and use cases
  - Perfect for understanding RLS concepts

### Authentication & Security
- **[Supabase Auth Tutorial](https://www.youtube.com/watch?v=6ow_jW4epf8)** by Traversy Media (45 minutes)
  - Covers user authentication with Supabase
  - Shows how auth integrates with RLS
  - Practical implementation examples

### Database Fundamentals
- **[PostgreSQL Crash Course](https://www.youtube.com/watch?v=qw--VYLpxG4)** by Traversy Media (1.5 hours)
  - Essential PostgreSQL concepts
  - Helps understand the database behind Supabase
  - Great for SQL fundamentals

### Real-time Features
- **[Supabase Realtime Tutorial](https://www.youtube.com/watch?v=CGZr5tybW18)** by Supabase (20 minutes)
  - Learn about real-time subscriptions
  - Shows how to build live applications
  - Perfect for understanding Exercise 3

**💡 Tip:** Start with the recommended Net Ninja tutorial for comprehensive learning, then dive into specific topics with the shorter videos.

---

## 🎯 Key Concepts (Simple Explanations)

### 1. Tables = Organized Drawers
```sql
CREATE TABLE papers (
  id UUID PRIMARY KEY,           -- Like a unique file number
  title TEXT NOT NULL,           -- The paper's title
  content TEXT,                  -- The paper's content
  owner_id UUID NOT NULL,        -- Who owns this paper
  created_at TIMESTAMP DEFAULT NOW() -- When it was created
);
```

### 2. Row Level Security = Smart Guards
```sql
-- Enable the security guard for this table
ALTER TABLE papers ENABLE ROW LEVEL SECURITY;

-- Create a rule: "Users can only see their own papers"
CREATE POLICY "Users see own papers" ON papers
  FOR SELECT USING (auth.uid() = owner_id);
```

### 3. Authentication = ID Cards
```javascript
// Sign in (like showing your ID)
const { user, error } = await supabase.auth.signIn({
  email: 'student@duke.edu',
  password: 'securepassword'
});

// Now the database knows who you are!
```

### 4. Relationships = Connected Drawers
```sql
-- Comments belong to papers (like notes attached to files)
CREATE TABLE comments (
  id UUID PRIMARY KEY,
  paper_id UUID REFERENCES papers(id), -- Which paper this comment is on
  content TEXT NOT NULL,
  author_id UUID NOT NULL
);
```

---

## 📝 Exercise Overview

### Exercise 1: Basic Database Setup 🏢
**Your mission:** Create secure tables for a paper-sharing system

**What you'll build:**
- `papers` table (like a document library)
- `comments` table (like sticky notes on papers)
- Basic relationships (comments belong to papers)

**What you'll learn:**
- How to create database tables
- How to connect tables together
- Basic SQL commands

### Exercise 2: Row Level Security 🔒
**Your mission:** Add security rules to protect user data

**What you'll build:**
- RLS policies (security rules)
- User authentication
- Access control (who can see what)

**What you'll learn:**
- How to protect user data
- How to create security policies
- How authentication works

### Exercise 3: Real-time Features 📡
**Your mission:** Make your database update live (like Google Docs)

**What you'll build:**
- Real-time subscriptions
- Live updates when data changes
- WebSocket connections

**What you'll learn:**
- How real-time databases work
- How to handle live updates
- How modern apps stay in sync

---

## 🎯 Your Mission: Build a Secure Paper System

### Step 1: Run the Exercise (It Will Teach You!)

1. **Start with the basic database:**
   ```bash
   pnpm start
   ```

2. **Look at the terminal output** - it will show you what's happening

3. **Check your Supabase dashboard** - you'll see tables being created!

### Step 2: Understand the Code

**Open `src/01-basic-database.ts` and look for the `TODO` comments.**

You'll see functions like:
- `createPapersTable()` - Creates a table for storing papers
- `createCommentsTable()` - Creates a table for comments
- `enableRLS()` - Turns on security
- `createBasicPolicies()` - Sets up access rules

**Each function has helpful hints in the comments!**

### Step 3: Customize and Experiment

- **Try changing table names** or adding new columns
- **Experiment with different security policies**
- **Add new features** (like paper categories or user profiles)

---

## 💡 Implementation Hints

### Creating Tables (Like Building Rooms)
```sql
CREATE TABLE papers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,                    -- Paper title (required)
  content TEXT,                           -- Paper content (optional)
  owner_id UUID NOT NULL,                 -- Who owns it (required)
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Setting Up Security (Like Hiring Guards)
```sql
-- Step 1: Enable security for the table
ALTER TABLE papers ENABLE ROW LEVEL SECURITY;

-- Step 2: Create a policy (security rule)
CREATE POLICY "Users can view own papers" 
  ON papers FOR SELECT 
  USING (auth.uid() = owner_id);

-- Step 3: Create more policies for insert, update, delete
CREATE POLICY "Users can create papers" 
  ON papers FOR INSERT 
  WITH CHECK (auth.uid() = owner_id);
```

### Using the Database in Code
```javascript
// Connect to database
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

// Create a new paper (will follow RLS rules)
const { data, error } = await supabase
  .from('papers')
  .insert({
    title: 'My First Paper',
    content: 'This is a secure paper!',
    owner_id: user.id
  });
```

---

## 🔧 Common Problems & Solutions

### "Can't connect to Supabase"
**Problem:** Your environment variables aren't set correctly  
**Solution:** 
1. Check your `.env` file exists
2. Make sure the values match your Supabase dashboard
3. Restart your terminal after creating `.env`

### "Permission denied" errors
**Problem:** RLS is blocking your access  
**Solution:** 
1. Check if you're authenticated as a user
2. Verify your RLS policies allow the action
3. Make sure you're using the right key (anon vs service)

### "Table doesn't exist"
**Problem:** You haven't created the tables yet  
**Solution:** 
1. Run `pnpm start` to create the tables
2. Check your Supabase dashboard → Table Editor
3. Make sure your SQL commands ran successfully

### "Auth user is null"
**Problem:** No user is signed in  
**Solution:** 
1. Create a user account first
2. Sign in before trying to access data
3. Use service role key for admin operations

---

## 🏆 Success Criteria

**You'll know you're successful when:**

✅ **Tables are created** (visible in Supabase dashboard)  
✅ **RLS is enabled** (security is turned on)  
✅ **Policies work** (users can only see their own data)  
✅ **Data is secure** (unauthorized access is blocked)  
✅ **Real-time works** (changes appear instantly)  

---

## 🎯 Bonus Challenges

### After Basic Setup:
1. **Add More Tables** - Create a `users` table with profiles
2. **Advanced Policies** - Create policies for sharing papers with specific users
3. **User Roles** - Add admin, teacher, and student roles
4. **File Uploads** - Add support for file attachments

### After Security Setup:
1. **Multi-tenant System** - Add organization-level security
2. **Audit Logging** - Track who accessed what and when
3. **API Rate Limiting** - Prevent abuse
4. **Data Encryption** - Encrypt sensitive fields

### After Real-time Setup:
1. **Collaborative Editing** - Multiple users editing the same document
2. **Live Comments** - Real-time comment threads
3. **Presence Indicators** - Show who's online
4. **Push Notifications** - Alert users of important changes

---

## 🛠️ Available Commands

```bash
# Run the basic database setup
pnpm start

# Run all tests
pnpm test

# Check your code for errors
pnpm lint

# Format your code nicely
pnpm format
```

---

## 📂 Project Structure

```
07-supabase-rls/
├── src/
│   ├── 01-basic-database.ts     # Exercise 1: Create tables and basic setup
│   ├── 02-authentication.ts    # Exercise 2: User auth and RLS policies
│   └── 03-real-time.ts        # Exercise 3: Real-time subscriptions
├── .env                        # Your database connection details (create this!)
├── package.json               # Project dependencies
└── README.md                  # This guide
```

---

## 🎯 Understanding Your .env File

The `.env` file is like your **database keys**:

```bash
# Your Supabase project URL (like the address of your filing cabinet)
SUPABASE_URL=https://abcdefghijk.supabase.co

# Public key (like a visitor pass - limited access)
SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Service key (like a master key - full access, use carefully!)
SUPABASE_SERVICE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Security Note:** Never share your service key publicly! It has admin access to your database.

---

## 🆘 Need Help?

1. **Read the error messages carefully** - They usually tell you exactly what's wrong
2. **Check your Supabase dashboard** - See what tables and policies exist
3. **Use the hints** in the exercise files
4. **Start simple** - Get basic tables working before adding security
5. **Ask in class or office hours** - We're here to help!
6. **Check the [Supabase docs](https://supabase.com/docs)** - Excellent documentation with examples

---

## 📚 What You'll Learn

### Exercise 1: Database Fundamentals
- **SQL basics** - How to create and modify database tables
- **Data relationships** - How tables connect to each other
- **Database design** - How to structure data effectively
- **Supabase dashboard** - How to manage your database visually

### Exercise 2: Security & Authentication
- **User authentication** - How login systems work
- **Row Level Security** - How to protect user data
- **Access control** - Who can do what in your database
- **Security policies** - How to write rules that protect data

### Exercise 3: Real-time Systems
- **WebSocket connections** - How real-time communication works
- **Event-driven programming** - How to respond to data changes
- **Scalable architecture** - How modern apps handle many users
- **Performance optimization** - How to make real-time features fast

---

## 🌟 Real-World Applications

**What you're building is used in:**
- **Slack/Discord** - Real-time messaging with user permissions
- **Google Docs** - Collaborative editing with access control
- **Banking Apps** - Secure user data with strict access rules
- **Social Media** - User-specific feeds with privacy settings
- **Learning Management Systems** - Student/teacher role separation

---

*Made with ❤️ for Duke students learning web development*

*🔐 Remember: Security isn't just about keeping bad actors out - it's about making sure users can trust your application with their data!* 