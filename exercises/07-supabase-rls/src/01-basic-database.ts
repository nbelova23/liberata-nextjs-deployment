// Exercise 1: Basic Database 🏢
// Think of this like building a secure office:
// - Tables are like rooms
// - RLS is like security guards
// - Policies are like access rules
// - Users are like employees

import { createClient } from '@supabase/supabase-js';

// TODO: Create these tables and policies:

// 1. Create a papers table (like a document room)
//    - id: unique identifier (like room number)
//    - title: paper title (like document name)
//    - content: paper content (like document content)
//    - owner_id: who owns it (like room key holder)
//    - created_at: when created (like check-in time)
//    - updated_at: when updated (like last access)
export async function createPapersTable(supabase: any) {
  // Your implementation here
  // Use SQL like:
  // CREATE TABLE papers (
  //   id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  //   title TEXT NOT NULL,
  //   content TEXT,
  //   owner_id UUID NOT NULL,
  //   created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  //   updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
  // );
}

// 2. Create a comments table (like a message board)
//    - id: unique identifier (like message number)
//    - paper_id: which paper (like which board)
//    - content: comment content (like message)
//    - author_id: who wrote it (like who posted)
//    - created_at: when created (like post time)
export async function createCommentsTable(supabase: any) {
  // Your implementation here
  // Use SQL like:
  // CREATE TABLE comments (
  //   id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  //   paper_id UUID REFERENCES papers(id),
  //   content TEXT NOT NULL,
  //   author_id UUID NOT NULL,
  //   created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
  // );
}

// 3. Enable RLS (like turning on security)
//    - Enable on papers table
//    - Enable on comments table
//    - Set default policies
export async function enableRLS(supabase: any) {
  // Your implementation here
  // Use SQL like:
  // ALTER TABLE papers ENABLE ROW LEVEL SECURITY;
  // ALTER TABLE comments ENABLE ROW LEVEL SECURITY;
}

// 4. Create basic policies (like security rules)
//    - Papers: only owner can read/write
//    - Comments: anyone can read, only author can write
export async function createBasicPolicies(supabase: any) {
  // Your implementation here
  // Use SQL like:
  // CREATE POLICY "Papers are viewable by owner"
  //   ON papers FOR SELECT
  //   USING (auth.uid() = owner_id);
  // 
  // CREATE POLICY "Comments are viewable by everyone"
  //   ON comments FOR SELECT
  //   USING (true);
}

// Example usage (like a preview):
export async function example() {
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_KEY!
  );

  // Create tables (like building rooms)
  await createPapersTable(supabase);
  await createCommentsTable(supabase);

  // Enable security (like turning on alarms)
  await enableRLS(supabase);

  // Set up rules (like posting security guidelines)
  await createBasicPolicies(supabase);

  // Test the setup (like security drill)
  const { data: papers, error: papersError } = await supabase
    .from('papers')
    .select('*');

  if (papersError) {
    console.error('Error fetching papers:', papersError);
  } else {
    console.log('Papers:', papers);
  }
} 