// Exercise 2: Consumer Groups 👥
// Think of this like coordinated delivery teams:
// - Consumer groups are like delivery teams (coordinated workers)
// - Consumers are like individual mail carriers (workers in the team)
// - Message distribution is like work assignment (load balancing)
// - Acknowledgments are like delivery confirmations (reliability)

import { createClient } from 'redis';

// Define types for better TypeScript support
interface ConsumerInfo {
  name: string;
  pending: number;
  idle: number;
}

interface GroupInfo {
  name: string;
  consumers: number;
  pending: number;
  lastDeliveredId: string;
}

// Use a simpler type for Redis client to avoid complex generic conflicts
type RedisClient = ReturnType<typeof createClient>;

// TODO: Implement these consumer group operations:

// 1. Create multiple consumer groups (like forming different teams)
//    - streamKey: stream name (like mail route)
//    - groups: array of group names (like team names)
//    - Returns: array of creation results
export async function createMultipleGroups(
  client: RedisClient,
  streamKey: string,
  groups: string[]
): Promise<boolean[]> {
  // Your implementation here
  // Hints:
  // 1. Loop through groups and create each one
  // 2. Use try/catch for each group (some might already exist)
  // 3. Return array of success/failure for each group
  // 4. Log which groups were created vs already existed
  
  throw new Error('TODO: Implement createMultipleGroups function');
}

// 2. Simulate multiple consumers working together (like team coordination)
//    - streamKey: stream name (like mail route)
//    - groupName: group name (like team name)
//    - consumerNames: array of consumer names (like worker names)
//    - messageCount: how many messages each should try to read
//    - Returns: results from each consumer
export async function simulateMultipleConsumers(
  client: RedisClient,
  streamKey: string,
  groupName: string,
  consumerNames: string[],
  messageCount: number = 5
): Promise<any[]> {
  // Your implementation here
  // Hints:
  // 1. Create promises for each consumer reading messages
  // 2. Use Promise.all to run consumers concurrently
  // 3. Each consumer should read with xReadGroup
  // 4. Return array of results from each consumer
  // 5. Log which consumer got which messages
  
  throw new Error('TODO: Implement simulateMultipleConsumers function');
}

// 3. Get consumer group information (like team status report)
//    - streamKey: stream name (like mail route)
//    - Returns: information about all groups on this stream
export async function getGroupInfo(
  client: RedisClient,
  streamKey: string
): Promise<GroupInfo[]> {
  // Your implementation here
  // Hints:
  // 1. Use: const groups = await client.xInfoGroups(streamKey);
  // 2. Transform the data into a more readable format
  // 3. Include: name, consumers count, pending count, last delivered ID
  // 4. Handle case where stream has no groups
  
  throw new Error('TODO: Implement getGroupInfo function');
}

// 4. Get consumer information within a group (like individual worker status)
//    - streamKey: stream name (like mail route)
//    - groupName: group name (like team name)
//    - Returns: information about consumers in the group
export async function getConsumerInfo(
  client: RedisClient,
  streamKey: string,
  groupName: string
): Promise<ConsumerInfo[]> {
  // Your implementation here
  // Hints:
  // 1. Use: const consumers = await client.xInfoConsumers(streamKey, groupName);
  // 2. Transform data to include: name, pending count, idle time
  // 3. Handle case where group has no consumers
  // 4. Idle time shows how long since consumer last read
  
  throw new Error('TODO: Implement getConsumerInfo function');
}

// 5. Handle failed consumers (like reassigning work from absent workers)
//    - streamKey: stream name (like mail route)
//    - groupName: group name (like team name)
//    - failedConsumer: name of failed consumer (like absent worker)
//    - newConsumer: name of consumer to take over (like replacement worker)
//    - Returns: number of messages claimed
export async function claimAbandonedMessages(
  client: RedisClient,
  streamKey: string,
  groupName: string,
  failedConsumer: string,
  newConsumer: string,
  idleTime: number = 60000 // 1 minute
): Promise<number> {
  // Your implementation here
  // Hints:
  // 1. Use: const claimed = await client.xClaim(streamKey, groupName, newConsumer, idleTime, messageIds);
  // 2. First get pending messages for the failed consumer
  // 3. Claim messages that have been idle too long
  // 4. Return count of claimed messages
  // 5. Log the claiming process for debugging
  
  throw new Error('TODO: Implement claimAbandonedMessages function');
}

// 6. Auto-claim abandoned messages (like automatic work reassignment)
//    - streamKey: stream name (like mail route)
//    - groupName: group name (like team name)
//    - consumerName: consumer to claim messages (like available worker)
//    - idleTime: how long messages must be idle (like timeout)
//    - Returns: claimed messages
export async function autoClaimMessages(
  client: RedisClient,
  streamKey: string,
  groupName: string,
  consumerName: string,
  idleTime: number = 60000
): Promise<any[]> {
  // Your implementation here
  // Hints:
  // 1. Use: const result = await client.xAutoClaim(streamKey, groupName, consumerName, idleTime, '0-0');
  // 2. This automatically finds and claims idle messages
  // 3. Returns: { messages, nextId }
  // 4. More efficient than manual claiming
  // 5. Log what was claimed
  
  throw new Error('TODO: Implement autoClaimMessages function');
}

// 7. Monitor group performance (like team productivity metrics)
//    - streamKey: stream name (like mail route)
//    - groupName: group name (like team name)
//    - Returns: performance metrics
export async function monitorGroupPerformance(
  client: RedisClient,
  streamKey: string,
  groupName: string
): Promise<any> {
  // Your implementation here
  // Hints:
  // 1. Get pending messages count
  // 2. Get consumer count and their status
  // 3. Calculate metrics like: avg pending per consumer, idle consumers
  // 4. Return useful metrics for monitoring
  // 5. This helps identify bottlenecks
  
  throw new Error('TODO: Implement monitorGroupPerformance function');
}

// Example usage - Consumer group coordination demonstration
export async function example() {
  console.log('👥 Consumer Groups Exercise - Team Coordination!\n');

  const client = createClient({
    url: process.env.REDIS_URL || 'redis://localhost:6379'
  });

  try {
    await client.connect();
    console.log('✅ Connected to Redis');

    const streamKey = 'order-processing';
    const groups = ['urgent-orders', 'regular-orders', 'bulk-orders'];
    const consumers = ['worker-1', 'worker-2', 'worker-3'];

    // Add some test messages first
    console.log('\n--- Setting up test data ---');
    for (let i = 1; i <= 15; i++) {
      await client.xAdd(streamKey, '*', {
        orderId: `order-${i}`,
        priority: i <= 5 ? 'urgent' : i <= 10 ? 'regular' : 'bulk',
        amount: (Math.random() * 100).toFixed(2)
      });
    }
    console.log('✅ Added 15 test orders');

    console.log('\n--- Step 1: Testing Your createMultipleGroups Function ---');
    try {
      const results = await createMultipleGroups(client, streamKey, groups);
      console.log(`✅ Group creation results:`, results);
    } catch (error) {
      console.log('❌ createMultipleGroups not implemented yet');
    }

    console.log('\n--- Step 2: Testing Your getGroupInfo Function ---');
    try {
      const groupInfo = await getGroupInfo(client, streamKey);
      console.log(`✅ Found ${groupInfo.length} groups:`, groupInfo);
    } catch (error) {
      console.log('❌ getGroupInfo not implemented yet');
    }

    console.log('\n--- Step 3: Testing Your simulateMultipleConsumers Function ---');
    try {
      const results = await simulateMultipleConsumers(client, streamKey, groups[0], consumers, 3);
      console.log(`✅ Consumer simulation results:`, results.length);
    } catch (error) {
      console.log('❌ simulateMultipleConsumers not implemented yet');
    }

    console.log('\n--- Step 4: Testing Your getConsumerInfo Function ---');
    try {
      const consumerInfo = await getConsumerInfo(client, streamKey, groups[0]);
      console.log(`✅ Consumer info:`, consumerInfo);
    } catch (error) {
      console.log('❌ getConsumerInfo not implemented yet');
    }

    console.log('\n--- Step 5: Testing Your monitorGroupPerformance Function ---');
    try {
      const metrics = await monitorGroupPerformance(client, streamKey, groups[0]);
      console.log(`✅ Performance metrics:`, metrics);
    } catch (error) {
      console.log('❌ monitorGroupPerformance not implemented yet');
    }

    console.log('\n--- Step 6: Testing Your autoClaimMessages Function ---');
    try {
      const claimed = await autoClaimMessages(client, streamKey, groups[0], 'cleanup-worker', 1000);
      console.log(`✅ Auto-claimed ${claimed.length} messages`);
    } catch (error) {
      console.log('❌ autoClaimMessages not implemented yet');
    }

    console.log('\n🏆 Consumer groups exercise complete!');
    console.log('💡 Try implementing the functions to see team coordination in action!');
    console.log('🎯 Next: Check out message processing patterns!');

  } catch (error) {
    console.error('💡 Tip: Make sure Redis is running and implement the functions above!');
    console.error('Error details:', error);
    console.log('\n🛠️ How to fix this:');
    console.log('1. Start Redis: docker run -d --name redis-streams -p 6379:6379 redis:7-alpine');
    console.log('2. Look at the function that caused the error');
    console.log('3. Read the hints in the comments');
    console.log('4. Implement the function step by step');
    console.log('5. Test again!');
  } finally {
    await client.disconnect();
    console.log('\n✅ Disconnected from Redis');
  }
}

// 💡 IMPLEMENTATION TIPS:
// 1. Consumer groups enable horizontal scaling - multiple workers processing in parallel
// 2. Each message is delivered to only one consumer in the group (load balancing)
// 3. Messages stay "pending" until acknowledged (fault tolerance)
// 4. Use xClaim or xAutoClaim to handle failed consumers
// 5. Monitor pending counts to detect bottlenecks
// 6. Different groups can process the same stream differently

// 🎯 BONUS CHALLENGES (Once basic functions work):
// 1. Implement dynamic consumer scaling based on pending count
// 2. Add consumer health checks and automatic failover
// 3. Create priority-based message routing to different groups
// 4. Implement consumer load balancing algorithms
// 5. Add group-level metrics and alerting
// 6. Create a consumer group management dashboard
// 7. Implement message replay for specific time ranges
// 8. Add consumer group backup and restore

// 🔍 UNDERSTANDING CONSUMER GROUPS:
// - Groups provide "competing consumers" pattern
// - Each message delivered to exactly one consumer per group
// - Different groups can all receive the same messages
// - Pending list tracks unacknowledged messages
// - Consumer names must be unique within a group
// - Groups remember their position in the stream

// 🚀 TESTING CONSUMER COORDINATION:
// 1. Create multiple consumers in same group
// 2. Send messages and watch load distribution
// 3. Kill a consumer and see message claiming
// 4. Monitor pending counts and consumer status
// 5. Test with different message rates and consumer counts

// Run the example if this file is executed directly
if (require.main === module) {
  example().catch(console.error);
} 