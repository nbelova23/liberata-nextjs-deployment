// Exercise 2: Authentication & RLS Policies 🔒
// Think of this like a secure building with ID cards:
// - Authentication = Checking ID cards at the door
// - RLS Policies = Security rules for each room
// - User sessions = Visitor badges
// - Access control = What each badge allows

import { createClient } from '@supabase/supabase-js';

// Define the environment interface for better TypeScript support
interface Env {
  SUPABASE_URL: string;
  SUPABASE_KEY: string;
  SUPABASE_SERVICE_KEY: string;
}

// TODO: Implement these authentication functions:

// 1. Sign up a new user (like registering for a building pass)
//    - email: user's email (like contact info)
//    - password: user's password (like PIN code)
//    - metadata: extra user info (like department, role)
export async function signUpUser(
  supabase: any,
  email: string,
  password: string,
  metadata?: Record<string, any>
) {
  // Your implementation here
  // Hints:
  // 1. Use: const { data, error } = await supabase.auth.signUp({
  //      email: email,
  //      password: password,
  //      options: { data: metadata }
  //    });
  // 2. Check for errors and return appropriate response
  // 3. Log success/failure for debugging
  // 4. Return user data or error message
}

// 2. Sign in an existing user (like showing ID at security desk)
//    - email: user's email (like ID number)
//    - password: user's password (like PIN)
export async function signInUser(
  supabase: any,
  email: string,
  password: string
) {
  // Your implementation here
  // Hints:
  // 1. Use: const { data, error } = await supabase.auth.signInWithPassword({
  //      email: email,
  //      password: password
  //    });
  // 2. Handle authentication errors gracefully
  // 3. Return session information if successful
  // 4. Log the user's ID for debugging
}

// 3. Get current user (like checking who's badge is active)
//    - Returns current authenticated user or null
export async function getCurrentUser(supabase: any) {
  // Your implementation here
  // Hints:
  // 1. Use: const { data: { user } } = await supabase.auth.getUser();
  // 2. Return user object or null if not authenticated
  // 3. This is useful for checking if someone is logged in
  // 4. You can access user.id, user.email, user.user_metadata
}

// 4. Sign out user (like returning visitor badge)
export async function signOutUser(supabase: any) {
  // Your implementation here
  // Hints:
  // 1. Use: const { error } = await supabase.auth.signOut();
  // 2. Handle any sign-out errors
  // 3. Clear any local user state
  // 4. Return success/failure status
}

// 5. Create advanced RLS policies (like sophisticated security rules)
//    - These policies use the authenticated user's ID
//    - They automatically enforce who can see what data
export async function createAdvancedPolicies(supabase: any) {
  // Your implementation here
  // Hints for Papers table policies:
  // 
  // 1. Policy for viewing own papers:
  // CREATE POLICY "Users can view own papers" ON papers
  //   FOR SELECT USING (auth.uid() = owner_id);
  //
  // 2. Policy for creating papers:
  // CREATE POLICY "Users can create papers" ON papers
  //   FOR INSERT WITH CHECK (auth.uid() = owner_id);
  //
  // 3. Policy for updating own papers:
  // CREATE POLICY "Users can update own papers" ON papers
  //   FOR UPDATE USING (auth.uid() = owner_id);
  //
  // 4. Policy for deleting own papers:
  // CREATE POLICY "Users can delete own papers" ON papers
  //   FOR DELETE USING (auth.uid() = owner_id);
  //
  // Hints for Comments table policies:
  //
  // 1. Policy for viewing comments on accessible papers:
  // CREATE POLICY "Users can view comments on accessible papers" ON comments
  //   FOR SELECT USING (
  //     EXISTS (
  //       SELECT 1 FROM papers 
  //       WHERE papers.id = comments.paper_id 
  //       AND papers.owner_id = auth.uid()
  //     )
  //   );
  //
  // 2. Policy for creating comments:
  // CREATE POLICY "Users can create comments" ON comments
  //   FOR INSERT WITH CHECK (auth.uid() = author_id);
}

// 6. Test RLS policies (like security drill)
//    - Create test data and verify access control works
//    - This helps debug policy issues
export async function testRLSPolicies(supabase: any) {
  // Your implementation here
  // Hints:
  // 1. Create a test paper with the current user as owner
  // 2. Try to read it back (should succeed)
  // 3. Try to read papers from other users (should fail/return empty)
  // 4. Create a test comment on the paper
  // 5. Verify the comment is accessible
  // 6. Log results to show what's working
  //
  // Example test flow:
  // const user = await getCurrentUser(supabase);
  // if (!user) {
  //   console.log('❌ No user signed in - sign in first!');
  //   return;
  // }
  //
  // // Test creating a paper
  // const { data: paper, error: paperError } = await supabase
  //   .from('papers')
  //   .insert({
  //     title: 'Test Paper',
  //     content: 'This is a test',
  //     owner_id: user.id
  //   })
  //   .select()
  //   .single();
  //
  // // Test reading papers (should only see own papers)
  // const { data: papers, error: readError } = await supabase
  //   .from('papers')
  //   .select('*');
  //
  // console.log('Papers visible to current user:', papers?.length || 0);
}

// 7. Handle authentication state changes (like monitoring badge status)
//    - Listen for sign-in/sign-out events
//    - Update UI or application state accordingly
export function onAuthStateChange(
  supabase: any,
  callback: (event: string, session: any) => void
) {
  // Your implementation here
  // Hints:
  // 1. Use: supabase.auth.onAuthStateChange((event, session) => {
  //      callback(event, session);
  //    });
  // 2. Events include: 'SIGNED_IN', 'SIGNED_OUT', 'TOKEN_REFRESHED'
  // 3. Session contains user info when signed in, null when signed out
  // 4. This is useful for updating your app when auth status changes
}

// Example usage - Complete authentication flow
export async function example() {
  console.log('🔒 Authentication & RLS Exercise - Secure Your Data!\n');

  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_KEY!
  );

  try {
    console.log('--- Step 1: Testing User Registration ---');
    const newUser = await signUpUser(
      supabase,
      'student@duke.edu',
      'securepassword123',
      { name: 'Test Student', role: 'student' }
    );
    console.log('');

    console.log('--- Step 2: Testing User Sign In ---');
    const signInResult = await signInUser(
      supabase,
      'student@duke.edu',
      'securepassword123'
    );
    console.log('');

    console.log('--- Step 3: Getting Current User ---');
    const currentUser = await getCurrentUser(supabase);
    console.log('Current user:', currentUser?.email || 'Not signed in');
    console.log('');

    console.log('--- Step 4: Creating Advanced RLS Policies ---');
    await createAdvancedPolicies(supabase);
    console.log('');

    console.log('--- Step 5: Testing RLS Policies ---');
    await testRLSPolicies(supabase);
    console.log('');

    console.log('--- Step 6: Setting Up Auth State Monitoring ---');
    onAuthStateChange(supabase, (event, session) => {
      console.log(`Auth event: ${event}`, session ? 'User signed in' : 'No user');
    });
    console.log('');

    console.log('🏆 Authentication exercise complete!');
    console.log('💡 Try the bonus challenges in the README for more learning!');

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
// 1. Always check for errors in Supabase responses
// 2. Use console.log to debug authentication flow
// 3. Test policies with different users to verify security
// 4. Remember: RLS policies run on the database, not in your code
// 5. Use the service role key only for admin operations (creating policies)
// 6. Regular operations should use the anon key + user authentication

// 🎯 BONUS CHALLENGES (Once basic functions work):
// 1. Add email verification for new users
// 2. Implement password reset functionality
// 3. Add user roles (admin, teacher, student) with different permissions
// 4. Create policies for sharing papers with specific users
// 5. Add user profiles with additional metadata
// 6. Implement session management and refresh tokens
// 7. Add multi-factor authentication
// 8. Create audit logs for security events

// 🔍 UNDERSTANDING AUTHENTICATION FLOW:
// 1. User signs up → Supabase creates account
// 2. User signs in → Supabase returns JWT token
// 3. Token is included in all database requests
// 4. RLS policies check auth.uid() against data ownership
// 5. Database automatically filters results based on policies
// 6. This happens on the server, so it's secure and fast! 