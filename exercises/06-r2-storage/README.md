# R2 Storage Exercises 📁
*Learn Cloud File Storage by Building It Yourself*

## 🚀 Quick Start (5 Minutes!)

**Ready to build something awesome? Follow these 5 steps:**

1. **Open your terminal and navigate to this folder:**
   ```bash
   cd exercises/06-r2-storage
   ```

2. **Install the required packages:**
   ```bash
   pnpm install
   ```
   *This downloads all the code libraries we need*

3. **Login to Cloudflare:**
   ```bash
   pnpm wrangler login
   ```
   *This will open your web browser to connect your account*

4. **Create your storage bucket:**
   ```bash
   pnpm wrangler r2 bucket create liberata-[YOUR-NAME]-bucket
   ```
   *Replace [YOUR-NAME] with your actual name, like `liberata-john-bucket`*

5. **Update the config file:**
   - Open `wrangler.toml` in your editor
   - Change `bucket_name = "your-bucket-name"` to `bucket_name = "liberata-[YOUR-NAME]-bucket"`
   - Save the file

**Now you're ready to code! Choose your exercise level below.**

---

## 🎯 Choose Your Exercise Level

### Exercise 1: Basic Operations (Start Here!) 📚
**Perfect for:** Learning R2 fundamentals

**Your mission:** Implement these core functions:
- `createBucket()` - Log bucket creation
- `uploadObject()` - Store files in R2
- `downloadObject()` - Retrieve files from R2
- `listObjects()` - See what files are stored

**To run Exercise 1:**
```typescript
// In src/index.ts
import { example as basicExample } from './01-basic-operations';

export default {
  async fetch(request: Request, env: any, ctx: any) {
    await basicExample(env);
    return new Response('✅ Basic Operations Complete!', {
      headers: { 'content-type': 'text/plain' },
    });
  },
};
```

### Exercise 2: Advanced Operations (Level Up!) 🚀
**Perfect for:** Building professional-grade features

**Your mission:** Implement these advanced functions:
- `generatePresignedUrl()` - Create temporary access links
- `uploadFileWithMetadata()` - Rich file information
- `listFilesAdvanced()` - Powerful search and filtering
- `batchFileOperations()` - Handle multiple files at once
- `uploadFileVersion()` - Keep backup copies
- `getStorageAnalytics()` - File usage statistics
- `cleanupStorage()` - Automatic maintenance

**To run Exercise 2:**
```typescript
// In src/index.ts
import { example as advancedExample } from './02-advanced-operations';

export default {
  async fetch(request: Request, env: any, ctx: any) {
    await advancedExample(env);
    return new Response('🚀 Advanced Operations Complete!', {
      headers: { 'content-type': 'text/plain' },
    });
  },
};
```

**Recommended Learning Path:**
1. **Complete Exercise 1 first** - Build a solid foundation
2. **Then tackle Exercise 2** - Add professional features
3. **Mix and match** - Use advanced functions in your own projects

---

## 🎯 Your Mission: Build R2 Storage Functions

### Step 1: Run the Exercise (It Will Fail!)

1. **Choose your exercise** and update `src/index.ts` with the code above

2. **Run it (it will break - that's expected!):**
   ```bash
   pnpm dev
   ```

3. **Open the URL** (usually `http://localhost:8787`) - you'll see errors because the functions aren't implemented yet!

### Step 2: Implement the Functions

**Open the exercise file (`src/01-basic-operations.ts` or `src/02-advanced-operations.ts`) and look for the `TODO` comments.**

**Each function has helpful hints in the comments!**

### Step 3: Test and Debug

- **Run `pnpm dev` after each function** to test your progress
- **Check the browser URL and terminal** for results
- **Fix errors one by one** - the error messages will guide you
- **Celebrate when it works!** 🎉

---

## 🤔 What is R2 Storage?

Think of R2 as **Google Drive for developers**. But instead of clicking and dragging files, you write code to:
- Upload files (like photos, documents, videos)
- Download files 
- Organize files in folders
- Share files with others

**Why learn this?** Every website needs to store files somewhere. Instagram stores your photos, Netflix stores movies, and Spotify stores songs. R2 is one way to do this.

### Real-World Examples:
- **Social Media App**: Store user profile pictures
- **E-commerce Site**: Store product images  
- **School Portal**: Store student assignments
- **Blog Website**: Store article images

---

## 🎯 Key Concepts (Simple Explanations)

### 1. Buckets = Folders
- Think of buckets like main folders on your computer
- Each bucket has a unique name (like "user-photos" or "homework-files")
- You can have multiple buckets for different purposes

### 2. Objects = Files
- Objects are the actual files you store (photos, documents, etc.)
- Each file has a name (called a "key") like `photos/profile.jpg`
- Files can be anything: images, videos, text files, etc.

### 3. Keys = File Paths
- Keys are like file paths on your computer
- Examples:
  - `users/john/profile.jpg` (John's profile picture)
  - `homework/math/assignment1.pdf` (Math homework)
  - `products/shoes/nike-air.png` (Product image)

### 4. Metadata = File Information
- Extra info about your files (size, type, when created)
- Like right-clicking a file and seeing "Properties"

### 5. Pre-signed URLs = Temporary Links (Advanced)
- Like creating a temporary Google Drive sharing link
- Users can upload/download directly without going through your server
- Links expire after a set time for security

### 6. Batch Operations = Bulk Actions (Advanced)
- Like selecting multiple files and doing actions on all of them
- More efficient than handling files one by one
- Professional applications use this for better performance

---

## 📝 Detailed Setup Steps

### Before You Start (Prerequisites)

**You need these accounts:**

☐ **Cloudflare Account**
   - Go to [cloudflare.com](https://cloudflare.com)
   - Click "Sign Up" 
   - Use your `.edu` email address
   - *Note: R2 requires a paid plan, but it's very cheap (~$5/month)*

☐ **Node.js and pnpm installed**
   - If you don't have these, ask for help or check the main README

### Step-by-Step Setup

**Step 1: Install Dependencies**
```bash
cd exercises/06-r2-storage
pnpm install
```
*This downloads all the code libraries (like importing modules in Python)*

**Step 2: Connect to Cloudflare**
```bash
pnpm wrangler login
```
*This opens your browser to connect your Cloudflare account*

**Step 3: Create Your Storage Bucket**

Choose a unique name for your bucket. It must be unique across ALL of Cloudflare, so add your name:

```bash
pnpm wrangler r2 bucket create liberata-[YOUR-NAME]-bucket
```

Examples:
- `liberata-john-bucket`
- `liberata-sarah-bucket`
- `liberata-alex-duke-bucket`

**Step 4: Update Configuration**

Open `wrangler.toml` and change this line:
```toml
bucket_name = "your-bucket-name"
```

To this (using your actual bucket name):
```toml
bucket_name = "liberata-john-bucket"
```

**Step 5: Test Your Setup**
```bash
pnpm wrangler r2 bucket list
```
*You should see your bucket in the list*

---

## 💡 Implementation Hints

### Exercise 1: Basic Operations

#### For `uploadObject()` function:
```typescript
// 1. Convert string to ArrayBuffer if needed
const bodyBuffer = typeof body === 'string' 
  ? new TextEncoder().encode(body) 
  : body;

// 2. Upload to R2
const result = await env.MY_BUCKET.put(key, bodyBuffer, {
  httpMetadata: metadata
});

// 3. Add logging
console.log(`✅ Uploaded ${key}`);
```

#### For `downloadObject()` function:
```typescript
// 1. Get the object
const object = await env.MY_BUCKET.get(key);

// 2. Check if it exists
if (!object) {
  console.log(`❌ File ${key} not found`);
  return null;
}

// 3. Get the content
const content = await object.text();
return { content, size: object.size };
```

#### For `listObjects()` function:
```typescript
// 1. List objects
const listing = await env.MY_BUCKET.list({ prefix });

// 2. Log what you found
console.log(`Found ${listing.objects.length} files`);

// 3. Return the objects
return listing.objects;
```

### Exercise 2: Advanced Operations

#### For `generatePresignedUrl()` function:
```typescript
// For download URLs
if (operation === 'get') {
  const url = await env.MY_BUCKET.sign(key, { expiresIn });
  console.log(`🔗 Generated download URL: ${url}`);
  return url;
}
// Note: Upload pre-signed URLs require more complex setup
```

#### For `uploadFileWithMetadata()` function:
```typescript
// 1. Validate file size if specified
if (options?.maxSizeBytes && body.byteLength > options.maxSizeBytes) {
  throw new Error(`File too large: ${body.byteLength} > ${options.maxSizeBytes}`);
}

// 2. Upload with rich metadata
const result = await env.MY_BUCKET.put(key, body, {
  httpMetadata: {
    contentType: options?.contentType,
    cacheControl: options?.cacheControl
  },
  customMetadata: options?.customMetadata
});
```

---

## 🔧 Common Problems & Solutions

### "Functions not implemented" Error
**Problem:** The functions are empty stubs  
**Solution:** Look for the `TODO` comment and implement each function using the hints

### "Bucket name already taken"
**Problem:** Someone else is using that bucket name  
**Solution:** Add more unique text to your bucket name
```bash
# Instead of: my-bucket
# Try: liberata-john-duke-2024-bucket
```

### "Account not enabled for R2"
**Problem:** Your Cloudflare account needs to be upgraded  
**Solution:** 
1. Go to your Cloudflare dashboard
2. Navigate to R2 section
3. Add a payment method (charges are very small for learning)

### "Authentication failed"
**Problem:** Not logged in to Cloudflare  
**Solution:** 
```bash
pnpm wrangler login
```

### "Bucket not found in code"
**Problem:** The bucket name in `wrangler.toml` doesn't match what you created  
**Solution:** 
1. Check your actual bucket name: `pnpm wrangler r2 bucket list`
2. Update `wrangler.toml` with the exact name

### "TypeError: Cannot read properties"
**Problem:** You're trying to use a function that's not implemented yet  
**Solution:** 
1. Find the function that's causing the error
2. Implement it using the hints in the comments
3. Test again

### "Advanced features not working"
**Problem:** Exercise 2 functions are more complex  
**Solution:** 
1. Make sure Exercise 1 works first
2. Implement one advanced function at a time
3. Use the R2 documentation for API details
4. Ask for help with complex features

---

## 🏆 Success Criteria

### Exercise 1: Basic Operations
**You'll know you're successful when:**
✅ **All functions are implemented** (no more empty stubs)  
✅ **Files upload successfully** (you see success messages)  
✅ **Files download successfully** (you see the content)  
✅ **File listing works** (you see your uploaded files)  
✅ **Error handling works** (graceful handling of missing files)  

### Exercise 2: Advanced Operations
**You'll know you're successful when:**
✅ **Pre-signed URLs generate** (you see the temporary links)  
✅ **Rich metadata uploads** (files have detailed information)  
✅ **Advanced filtering works** (you can search files effectively)  
✅ **Batch operations succeed** (multiple files handled at once)  
✅ **File versioning works** (you can keep multiple versions)  
✅ **Analytics display correctly** (you see storage statistics)  
✅ **Cleanup functions work** (automatic file management)  

---

## 🎯 Bonus Challenges

### After Exercise 1:
1. **Better Error Messages** - Add specific error messages for different failure cases
2. **File Type Support** - Add functions to handle JSON files specifically
3. **File Validation** - Check file size before upload
4. **Progress Logging** - Show upload/download progress

### After Exercise 2:
1. **File Compression** - Compress files before upload
2. **Image Thumbnails** - Generate thumbnails for images
3. **File Sharing** - Create a system to share files with others
4. **File Encryption** - Encrypt sensitive files
5. **Audit Trail** - Track who accessed what files when
6. **Auto-Backup** - Automatically backup important files
7. **File Synchronization** - Keep files in sync between buckets

---

## 🛠️ Available Commands

```bash
# Start development server (most common)
pnpm dev

# Run tests
pnpm test

# List your buckets
pnpm wrangler r2 bucket list

# Create a new bucket
pnpm wrangler r2 bucket create bucket-name

# Delete a bucket (be careful!)
pnpm wrangler r2 bucket delete bucket-name
```

---

## 📂 Project Structure

```
r2-storage/
├── src/
│   ├── 01-basic-operations.ts    # Basic file operations
│   └── 02-advanced-operations.ts # Advanced features
├── package.json                  # Project dependencies
├── wrangler.toml                 # Cloudflare configuration
└── README.md                     # This file
```

## Understanding wrangler.toml 🔧

The `wrangler.toml` file is your project's configuration file for Cloudflare. Think of it like a settings menu for your application. Here's what each part means:

```toml
# The name of your project
name = "r2-storage-exercises"

# The date when your code was written (helps with compatibility)
compatibility_date = "2024-01-01"

# R2 bucket configuration
[[r2_buckets]]
# This is how you'll access your bucket in code
# Example: env.MY_BUCKET.put(...)
binding = "MY_BUCKET"

# The actual name of your bucket in Cloudflare
bucket_name = "liberata-[YOUR-NAME]-bucket"
```

## Prerequisites 🚀

1. **Cloudflare Account**
   - Sign up at [cloudflare.com](https://cloudflare.com)
   - You'll need this to create R2 buckets

2. **Wrangler CLI**
   - This is Cloudflare's command-line tool
   - Install it globally:
   ```bash
   pnpm add -g wrangler
   ```
   - Think of it like `git` but for Cloudflare

3. **R2 Bucket**
   - Create one in your Cloudflare dashboard
   - Or use Wrangler:
   ```bash
   pnpm wrangler r2 bucket create liberata-[YOUR-NAME]-bucket
   ```

## Creating Your First R2 Bucket 🪣

### Method 1: Using Cloudflare Dashboard (Recommended for Beginners)

1. **Log into Cloudflare**
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com)
   - Sign in with your account

2. **Navigate to R2**
   - Click on "R2" in the left sidebar
   - If you don't see R2, you might need to:
     - Enable R2 in your account
     - Upgrade to a paid plan (R2 requires a paid account)

3. **Create a New Bucket**
   - Click the "Create bucket" button
   - Enter a bucket name:
     - Must be globally unique across all Cloudflare
     - Use lowercase letters, numbers, and hyphens
     - Example: `my-first-r2-bucket-123`
   - Choose a location (pick the one closest to your users)
   - Click "Create bucket"

4. **Get Your Bucket Details**
   - Click on your new bucket
   - Note down the bucket name
   - You'll need this for your `wrangler.toml`

### Method 2: Using Wrangler CLI (For Developers)

1. **Open Terminal**
   - Make sure you're logged in:
   ```bash
   pnpm wrangler login
   ```

2. **Create the Bucket**
   ```bash
   pnpm wrangler r2 bucket create liberata-[YOUR-NAME]-bucket
   ```
   Replace `liberata-[YOUR-NAME]-bucket` with your desired name.

3. **Verify Creation**
   ```bash
   pnpm wrangler r2 bucket list
   ```
   You should see your new bucket in the list.

### After Creating Your Bucket

1. **Update wrangler.toml**
   ```toml
   [[r2_buckets]]
   binding = "MY_BUCKET"
   bucket_name = "liberata-[YOUR-NAME]-bucket"
   ```

2. **Test Your Setup**
   ```bash
   pnpm wrangler r2 bucket list
   ```
   This should show your bucket and confirm everything is working.

### Common Bucket Creation Issues

1. **"Bucket name already taken"**
   - R2 bucket names must be globally unique
   - Try adding numbers or a unique prefix
   - Example: `my-company-uploads-123`

2. **"Account not enabled for R2"**
   - Make sure you're on a paid plan
   - Contact Cloudflare support if needed

3. **"Invalid bucket name"**
   - Use only lowercase letters, numbers, and hyphens
   - No uppercase letters or special characters
   - Must be between 3 and 63 characters

## Exercises 📚

### 1. Basic Operations (`src/01-basic-operations.ts`)
Learn the fundamental operations:
- Creating buckets (like creating folders)
- Uploading files (like saving documents)
- Downloading files (like opening documents)
- Listing files (like viewing a folder)

### 2. Advanced Operations (`src/02-advanced-operations.ts`)
Master advanced features:
- Pre-signed URLs (like temporary access links)
- Bucket policies (like folder permissions)
- CORS configuration (like website access rules)
- Lifecycle rules (like automatic file cleanup)

## Running the Exercises 🏃‍♂️

1. **Start Development Server**
   ```bash
   pnpm dev
   ```
   This starts a local server for testing.

2. **Run Exercises**
   ```bash
   pnpm start
   ```
   This runs the exercise code.

## Testing Your Code ✅

```bash
pnpm test
```
This runs automated tests to check if your code works correctly.

## Common Issues & Solutions 🔧

1. **"Bucket not found"**
   - Check if the bucket name in `wrangler.toml` is correct
   - Make sure you've created the bucket in Cloudflare

2. **"Authentication failed"**
   - Run `pnpm wrangler login` again
   - Check if your Cloudflare account is active

3. **"Invalid binding"**
   - Make sure the `binding` in `wrangler.toml` matches your code
   - Example: If binding is `MY_BUCKET`, use `env.MY_BUCKET` in code

## Resources 📚

- [Cloudflare R2 Documentation](https://developers.cloudflare.com/r2/)
- [R2 API Reference](https://developers.cloudflare.com/r2/api/)
- [Wrangler Documentation](https://developers.cloudflare.com/workers/wrangler/)
- [R2 Best Practices](https://developers.cloudflare.com/r2/best-practices/)

## Need Help? 🆘

1. Check the [Cloudflare Community](https://community.cloudflare.com/)
2. Join the [Cloudflare Discord](https://discord.gg/cloudflare)
3. Ask in the [Stack Overflow Cloudflare tag](https://stackoverflow.com/questions/tagged/cloudflare)

## How to Run Exercises 🏁

All exercises are run through a single entry point: `src/index.ts`.

**How it works:**
- You do NOT need to change the `main` field in `wrangler.toml`.
- To run a specific exercise, just import it and call it in `src/index.ts`.
- Only edit `src/index.ts` to switch between exercises or test your code.

### Example: Running the Basic Operations Exercise

1. Open `src/index.ts` in your editor.
2. Uncomment or add the following lines:
   ```ts
   import { example as basicExample } from './01-basic-operations';

   export default {
     async fetch(request: Request, env: any, ctx: any) {
       await basicExample(env);
       return new Response('🎯 R2 Challenge Complete!', {
         headers: { 'content-type': 'text/plain' },
       });
     },
   };
   ```
3. Save the file.
4. Run the development server:
   ```bash
   pnpm dev
   ```
5. Visit the local URL shown in your terminal to see the result.

**To run a different exercise:**
- Import the function from the relevant file (e.g., `./02-advanced-operations`)
- Call it inside the `fetch` handler
- Save and refresh your browser 