// Exercise 2: Advanced R2 Operations 🚀
// Now that you've mastered the basics, let's explore advanced features!
// Think of this like upgrading from basic file operations to professional-grade features

// Import Cloudflare types for better IntelliSense and error checking
import { R2Bucket } from '@cloudflare/workers-types';

// Define the environment interface - this tells TypeScript what's available
interface Env {
  MY_BUCKET: R2Bucket; // This matches the binding in wrangler.toml
}

// 🎯 ADVANCED CHALLENGE: Implement these professional features!
// These are the kinds of features you'll use in real applications

// TODO: Implement these advanced operations:

// 1. Generate a pre-signed URL (like creating a temporary access link)
//    - This allows users to upload/download files directly without going through your server
//    - Like sharing a Google Drive link that expires after some time
export async function generatePresignedUrl(
  env: Env,
  key: string,
  operation: 'get' | 'put',
  expiresIn: number = 3600 // 1 hour default
) {
  // Your implementation here
  // Hints:
  // 1. For downloads: const url = await env.MY_BUCKET.sign(key, { expiresIn });
  // 2. For uploads: You'll need to use the R2 API directly
  // 3. Add console.log to show the generated URL
  // 4. Return the URL string
  // 5. TypeScript will show you what methods are available on env.MY_BUCKET
}

// 2. Upload a file with advanced metadata (like adding detailed file info)
//    - This includes custom metadata, content type detection, and file validation
export async function uploadFileWithMetadata(
  env: Env,
  key: string,
  body: ArrayBuffer | string,
  options?: {
    contentType?: string;
    customMetadata?: Record<string, string>;
    cacheControl?: string;
    maxSizeBytes?: number;
  }
) {
  // Your implementation here
  // Hints:
  // 1. Convert string to ArrayBuffer: const bodyBuffer = typeof body === 'string' ? new TextEncoder().encode(body) : body;
  // 2. Validate file size: if (options?.maxSizeBytes && bodyBuffer.byteLength > options.maxSizeBytes) throw new Error(...)
  // 3. Auto-detect content type from file extension if not provided
  // 4. Use both httpMetadata and customMetadata:
  //    await env.MY_BUCKET.put(key, bodyBuffer, {
  //      httpMetadata: {
  //        contentType: options?.contentType || getMimeType(getFileExtension(key)),
  //        cacheControl: options?.cacheControl
  //      },
  //      customMetadata: options?.customMetadata
  //    });
}

// 3. List files with advanced filtering (like powerful search)
//    - Filter by file type, size, date, or custom metadata
export async function listFilesAdvanced(
  env: Env,
  options?: {
    prefix?: string;
    maxResults?: number;
    sortBy?: 'name' | 'size' | 'date';
    fileType?: string; // e.g., 'image', 'document', 'video'
    minSize?: number;
    maxSize?: number;
  }
) {
  // Your implementation here
  // Hints:
  // 1. Start with basic listing: const listing = await env.MY_BUCKET.list({ prefix: options?.prefix, limit: options?.maxResults });
  // 2. Filter the results based on options
  // 3. Sort the results if requested
  // 4. You might need to check file extensions for fileType filtering
  // 5. Return an array of objects with file info: { key, size, lastModified, contentType }
  // 6. TypeScript knows the structure of listing.objects - check it out!
}

// 4. Create a file manager with batch operations (like professional file handling)
//    - Upload multiple files, delete multiple files, move files
export async function batchFileOperations(
  env: Env,
  operations: Array<{
    type: 'upload' | 'delete' | 'copy';
    sourceKey?: string;
    targetKey?: string;
    body?: ArrayBuffer | string;
    metadata?: Record<string, string>;
  }>
) {
  // Your implementation here
  // Hints:
  // 1. Process each operation based on its type
  // 2. For upload: use uploadFileWithMetadata function
  // 3. For delete: await env.MY_BUCKET.delete(key)
  // 4. For copy: download from source, upload to target
  // 5. Track success/failure for each operation
  // 6. Return results array: { operation, success, error? }
}

// 5. Implement file versioning (like keeping backup copies)
//    - Keep multiple versions of the same file
export async function uploadFileVersion(
  env: Env,
  key: string,
  body: ArrayBuffer | string,
  versionComment?: string
) {
  // Your implementation here
  // Hints:
  // 1. Create a versioned key: `versions/${key}/${generateTimestamp()}`
  // 2. Upload the new version to the versioned key
  // 3. Also upload to the original key (latest version)
  // 4. Store version info in customMetadata
  // 5. Example: 
  //    const versionKey = `versions/${key}/${generateTimestamp()}`;
  //    await uploadFileWithMetadata(env, versionKey, body, { 
  //      customMetadata: { originalKey: key, versionComment, isVersion: 'true' }
  //    });
}

// 6. Get file analytics (like file usage statistics)
//    - Track file sizes, types, upload dates
export async function getStorageAnalytics(env: Env) {
  // Your implementation here
  // Hints:
  // 1. List all files in the bucket: const listing = await env.MY_BUCKET.list();
  // 2. Calculate total storage used: totalSize += object.size
  // 3. Count files by type (based on extensions)
  // 4. Find largest/smallest files
  // 5. Calculate average file size
  // 6. Return analytics object: { totalFiles, totalSize, fileTypes, largestFile, etc. }
}

// 7. Implement smart file cleanup (like automatic maintenance)
//    - Delete old files, remove duplicates, organize by date
export async function cleanupStorage(
  env: Env,
  options: {
    deleteOlderThanDays?: number;
    maxFiles?: number;
    removeDuplicates?: boolean;
    organizeByDate?: boolean;
  }
) {
  // Your implementation here
  // Hints:
  // 1. List all files with their metadata
  // 2. Identify files to delete based on age or count limits
  // 3. For duplicates: compare file sizes and content hashes
  // 4. For organization: move files to date-based folders like `2024/12/01/filename.txt`
  // 5. Return cleanup report: { deletedFiles, movedFiles, spaceSaved }
}

// Advanced Example - This demonstrates all the advanced features!
export async function example(env: Env) {
  console.log('🚀 Advanced R2 Operations - Professional Features\n');

  try {
    // 1. Upload files with rich metadata
    console.log('--- Step 1: Advanced File Upload ---');
    await uploadFileWithMetadata(
      env,
      'documents/report.pdf',
      new TextEncoder().encode('Fake PDF content for demo'),
      {
        contentType: 'application/pdf',
        customMetadata: {
          author: 'Student Name',
          department: 'Computer Science',
          classification: 'public'
        },
        cacheControl: 'max-age=3600',
        maxSizeBytes: 1024 * 1024 // 1MB limit
      }
    );

    await uploadFileWithMetadata(
      env,
      'images/profile.jpg',
      new TextEncoder().encode('Fake image content for demo'),
      {
        contentType: 'image/jpeg',
        customMetadata: {
          userId: '12345',
          uploadDate: new Date().toISOString()
        }
      }
    );
    console.log('');

    // 2. Advanced file listing with filters
    console.log('--- Step 2: Smart File Search ---');
    const documentFiles = await listFilesAdvanced(env, {
      prefix: 'documents/',
      maxResults: 10,
      sortBy: 'size',
      fileType: 'document'
    });
    console.log('');

    // 3. Generate pre-signed URLs for secure access
    console.log('--- Step 3: Pre-signed URLs ---');
    const downloadUrl = await generatePresignedUrl(env, 'documents/report.pdf', 'get', 1800);
    const uploadUrl = await generatePresignedUrl(env, 'uploads/new-file.txt', 'put', 3600);
    console.log('');

    // 4. Batch operations for efficiency
    console.log('--- Step 4: Batch Operations ---');
    const batchResults = await batchFileOperations(env, [
      {
        type: 'upload',
        targetKey: 'batch/file1.txt',
        body: 'First batch file',
        metadata: { source: 'batch-upload' }
      },
      {
        type: 'upload',
        targetKey: 'batch/file2.txt',
        body: 'Second batch file',
        metadata: { source: 'batch-upload' }
      },
      {
        type: 'copy',
        sourceKey: 'images/profile.jpg',
        targetKey: 'backups/profile-backup.jpg'
      }
    ]);
    console.log('');

    // 5. File versioning for important documents
    console.log('--- Step 5: File Versioning ---');
    await uploadFileVersion(
      env,
      'important-doc.txt',
      'Version 1.0 of important document',
      'Initial version'
    );
    await uploadFileVersion(
      env,
      'important-doc.txt',
      'Version 2.0 of important document with updates',
      'Added new features'
    );
    console.log('');

    // 6. Storage analytics
    console.log('--- Step 6: Storage Analytics ---');
    const analytics = await getStorageAnalytics(env);
    console.log('');

    // 7. Smart cleanup
    console.log('--- Step 7: Smart Storage Cleanup ---');
    const cleanupReport = await cleanupStorage(env, {
      deleteOlderThanDays: 30,
      maxFiles: 100,
      removeDuplicates: true,
      organizeByDate: false
    });
    console.log('');

    console.log('🎉 Advanced R2 Operations Complete!');
    console.log('💡 You now have professional-grade file storage skills!');

  } catch (error) {
    console.error('💡 Advanced Tip: Implement the functions above to make this work!');
    console.error('Error details:', error);
    console.log('\n🛠️ How to tackle advanced features:');
    console.log('1. Start with the simplest function (generatePresignedUrl)');
    console.log('2. Build on what you learned in Exercise 1');
    console.log('3. Use the R2 documentation for advanced APIs');
    console.log('4. Test each function individually');
    console.log('5. Ask for help when you get stuck!');
  }
}

// 💡 ADVANCED IMPLEMENTATION TIPS:
// 1. These functions build on Exercise 1 - make sure you understand the basics first
// 2. Real applications use these patterns for production file management
// 3. Pre-signed URLs are crucial for secure file uploads in web apps
// 4. Metadata is how you make files searchable and manageable
// 5. Batch operations improve performance and user experience
// 6. File versioning prevents data loss
// 7. Analytics help you understand storage usage and costs
// 8. TypeScript helps catch errors before you run the code!

// 🎯 BONUS ADVANCED CHALLENGES:
// 1. Add file compression before upload
// 2. Implement file encryption/decryption
// 3. Create a file sharing system with permissions
// 4. Add image thumbnail generation
// 5. Implement file synchronization between buckets
// 6. Add file integrity checks (checksums)
// 7. Create a file audit trail (who accessed what when)
// 8. Implement automatic file backup strategies

// 🔧 UTILITY FUNCTIONS (You might find these helpful):

// Helper: Get file extension from key
export function getFileExtension(key: string): string {
  return key.split('.').pop()?.toLowerCase() || '';
}

// Helper: Get MIME type from extension
export function getMimeType(extension: string): string {
  const mimeTypes: Record<string, string> = {
    'txt': 'text/plain',
    'json': 'application/json',
    'pdf': 'application/pdf',
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'png': 'image/png',
    'gif': 'image/gif',
    'mp4': 'video/mp4',
    'mp3': 'audio/mpeg',
    'doc': 'application/msword',
    'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  };
  return mimeTypes[extension] || 'application/octet-stream';
}

// Helper: Format file size for display
export function formatFileSize(bytes: number): string {
  const units = ['B', 'KB', 'MB', 'GB'];
  let size = bytes;
  let unitIndex = 0;
  
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }
  
  return `${size.toFixed(2)} ${units[unitIndex]}`;
}

// Helper: Generate timestamp for versioning
export function generateTimestamp(): string {
  return new Date().toISOString().replace(/[:.]/g, '-');
}

// 🔍 UNDERSTANDING THE IMPORTS & TYPES:
// - R2Bucket: This is the TypeScript type for R2 bucket objects
// - Env interface: This tells TypeScript what's available in your environment
// - MY_BUCKET binding: This connects to the bucket defined in wrangler.toml
// - Why this helps: You get autocomplete, error checking, and better hints as you code!
// - Try typing "env.MY_BUCKET." and see what methods appear! 