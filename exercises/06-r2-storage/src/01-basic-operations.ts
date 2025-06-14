// Exercise 1: Basic R2 Operations - CHALLENGE VERSION 🎯
// Think of this like a digital filing cabinet:
// - Buckets are like drawers
// - Objects are like files
// - Keys are like file names
// - Metadata is like file labels

// Import Cloudflare types for better IntelliSense and error checking
import { R2Bucket } from '@cloudflare/workers-types';

// Define the environment interface - this tells TypeScript what's available
interface Env {
  MY_BUCKET: R2Bucket; // This matches the binding in wrangler.toml
}

// 🚀 CHALLENGE: Implement these functions yourself!
// Use the hints below to guide your implementation

// TODO: Implement these basic operations:

// 1. Create a bucket (like creating a new drawer)
//    - name: bucket name (like drawer label)
//    Hint: In R2, buckets are created via CLI/dashboard, but you can log the concept
export async function createBucket(env: Env, name: string) {
  // Your implementation here
  // Hint: 
  // console.log(`Creating bucket "${name}"`);
  // return { success: true, message: `Bucket "${name}" ready` };
}

// 2. Upload an object (like putting a file in the drawer)
//    - key: object name (like file name)
//    - body: file content (like file contents)
//    - metadata: extra info (like file labels)
export async function uploadObject(
  env: Env,
  key: string,
  body: ArrayBuffer | string,
  metadata?: Record<string, string>
) {
  // Your implementation here
  // Hints:
  // 1. Convert string to ArrayBuffer if needed:
  //    const bodyBuffer = typeof body === 'string' ? new TextEncoder().encode(body) : body;
  // 2. Use env.MY_BUCKET.put(key, bodyBuffer, { httpMetadata: metadata });
  // 3. Add console.log statements to track progress
  // 4. Now you'll get IntelliSense when typing env.MY_BUCKET. - try it!
}

// 3. Download an object (like taking a file out)
//    - key: object name (like file name)
export async function downloadObject(
  env: Env,
  key: string
) {
  // Your implementation here
  // Hints:
  // 1. Use: const object = await env.MY_BUCKET.get(key);
  // 2. Check if object exists: if (!object) return null;
  // 3. Get content: const content = await object.text();
  // 4. Return useful info: { content, size: object.size, etag: object.etag }
  // 5. Notice how TypeScript now knows what methods are available on env.MY_BUCKET!
}

// 4. List objects (like looking at drawer contents)
//    - prefix: filter by prefix (like file type)
export async function listObjects(
  env: Env,
  prefix?: string
) {
  // Your implementation here
  // Hints:
  // 1. Use: const listing = await env.MY_BUCKET.list({ prefix: prefix });
  // 2. Return: listing.objects
  // 3. Add console.log to show what you found
  // 4. TypeScript will help you see what options are available for .list()
}

// Example usage - This will call YOUR functions!
export async function example(env: Env) {
  console.log('🎯 R2 Storage Exercise - Build It Yourself!\n');

  try {
    // Test your implementations
    console.log('--- Step 1: Testing Your createBucket Function ---');
    await createBucket(env, 'my-learning-bucket');
    console.log('');

    console.log('--- Step 2: Testing Your uploadObject Function ---');
    await uploadObject(
      env,
      'my-first-file.txt',
      'Hello R2! I implemented this myself!',
      { 'content-type': 'text/plain' }
    );

    await uploadObject(
      env,
      'data/settings.json',
      JSON.stringify({ theme: 'dark', language: 'en' }),
      { 'content-type': 'application/json' }
    );
    console.log('');

    console.log('--- Step 3: Testing Your listObjects Function ---');
    const allObjects = await listObjects(env);
    console.log('');

    console.log('--- Step 4: Testing Your downloadObject Function ---');
    const content = await downloadObject(env, 'my-first-file.txt');
    console.log('');

    console.log('--- Step 5: Testing Error Handling ---');
    const missingFile = await downloadObject(env, 'does-not-exist.txt');
    console.log('');

    console.log('🏆 Congratulations! You implemented all R2 operations yourself!');
    console.log('💡 Try the bonus challenges below for extra learning!');

  } catch (error) {
    console.error('💡 Tip: Implement the functions above to make this work!');
    console.error('Error details:', error);
    console.log('\n🛠️ How to fix this:');
    console.log('1. Look at the function that caused the error');
    console.log('2. Read the hints in the comments');
    console.log('3. Implement the function step by step');
    console.log('4. Test again!');
  }
}

// 💡 IMPLEMENTATION TIPS:
// 1. Start with console.log statements to understand the flow
// 2. Implement one function at a time
// 3. Test each function before moving to the next
// 4. Use try/catch blocks for error handling
// 5. Read the Cloudflare R2 docs if you get stuck
// 6. Notice how TypeScript gives you hints when you type env.MY_BUCKET.

// 🎯 BONUS CHALLENGES (Once basic functions work):
// 1. Add better error messages and validation
// 2. Handle different file types (JSON, images, etc.)
// 3. Add file size validation before upload
// 4. Implement pagination for listing many objects
// 5. Add progress logging for uploads
// 6. Create a function to delete objects
// 7. Add metadata search functionality

// 🔍 UNDERSTANDING THE IMPORTS:
// - R2Bucket: This is the TypeScript type for R2 bucket objects
// - Env interface: This tells TypeScript what's available in your environment
// - MY_BUCKET binding: This connects to the bucket defined in wrangler.toml
// - Why this helps: You get autocomplete and error checking as you type! 