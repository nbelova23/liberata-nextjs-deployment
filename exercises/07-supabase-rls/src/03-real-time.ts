// Exercise 3: Real-time Subscriptions 📡
// Think of this like security cameras:
// - Subscriptions are like camera feeds
// - Changes are like movement detection
// - Channels are like camera locations
// - Events are like security alerts

import { createClient } from '@supabase/supabase-js';

// TODO: Implement these real-time functions:

// 1. Subscribe to paper changes (like watching a room)
//    - callback: what to do when changed (like alerting security)
//    - filter: what to watch for (like motion detection)
export function subscribeToPapers(
  supabase: any,
  callback: (payload: any) => void,
  filter?: string
) {
  // Your implementation here
  // Use supabase.channel like:
  // const channel = supabase
  //   .channel('papers')
  //   .on('postgres_changes', {
  //     event: '*',
  //     schema: 'public',
  //     table: 'papers',
  //     filter: filter
  //   }, callback)
  //   .subscribe();
}

// 2. Subscribe to comments (like watching a message board)
//    - paperId: which paper to watch (like which board)
//    - callback: what to do when changed (like notifying users)
export function subscribeToComments(
  supabase: any,
  paperId: string,
  callback: (payload: any) => void
) {
  // Your implementation here
  // Use supabase.channel like:
  // const channel = supabase
  //   .channel(`comments:${paperId}`)
  //   .on('postgres_changes', {
  //     event: '*',
  //     schema: 'public',
  //     table: 'comments',
  //     filter: `paper_id=eq.${paperId}`
  //   }, callback)
  //   .subscribe();
}

// 3. Handle real-time errors (like camera malfunctions)
//    - channel: which subscription (like which camera)
//    - callback: what to do when error (like alerting IT)
export function handleRealtimeError(
  channel: any,
  callback: (error: any) => void
) {
  // Your implementation here
  // Use channel.on('error') like:
  // channel.on('error', callback);
}

// 4. Clean up subscriptions (like turning off cameras)
//    - channel: which subscription (like which camera)
export function cleanupSubscription(channel: any) {
  // Your implementation here
  // Use channel.unsubscribe like:
  // channel.unsubscribe();
}

// Example usage (like a preview):
export async function example() {
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_KEY!
  );

  // Watch for paper changes (like monitoring a room)
  const papersChannel = subscribeToPapers(
    supabase,
    (payload) => {
      console.log('Paper changed:', payload);
    },
    'owner_id=eq.current_user()'
  );

  // Watch for comments (like monitoring a board)
  const commentsChannel = subscribeToComments(
    supabase,
    'paper-123',
    (payload) => {
      console.log('Comment changed:', payload);
    }
  );

  // Handle errors (like camera issues)
  handleRealtimeError(papersChannel, (error) => {
    console.error('Subscription error:', error);
  });

  // Clean up when done (like turning off cameras)
  cleanupSubscription(papersChannel);
  cleanupSubscription(commentsChannel);
} 