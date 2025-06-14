// Exercise 1: Basic Redis Streams 📨
// Think of this like a smart post office:
// - Streams are like mail routes (organized message channels)
// - Messages are like letters (data you want to send)
// - Message IDs are like tracking numbers (unique identifiers)
// - Reading is like collecting mail (getting messages)

import { createClient } from 'redis';

// Define types for better TypeScript support
interface StreamMessage {
  id: string;
  message: Record<string, string>;
}

interface StreamEntry {
  name: string;
  messages: StreamMessage[];
}

// Use a simpler type for Redis client to avoid complex generic conflicts
type RedisClient = ReturnType<typeof createClient>;

// TODO: Implement these basic stream operations:

// 1. Add a message to a stream (like sending a letter)
//    - streamKey: stream name (like mail route name)
//    - data: message content (like letter content)
//    - Returns: message ID (like tracking number)
export async function addMessage(
  client: RedisClient,
  streamKey: string,
  data: Record<string, string | number>
): Promise<string> {
  // Your implementation here
  // Hints:
  // 1. Use: const messageId = await client.xAdd(streamKey, '*', data);
  // 2. The '*' means "auto-generate ID" (Redis creates timestamp-based ID)
  // 3. Data should be key-value pairs: { action: 'login', userId: '123' }
  // 4. Return the messageId for tracking
  // 5. Log the message for debugging: console.log('Added message:', messageId, data);
  
  throw new Error('TODO: Implement addMessage function');
}

// 2. Read messages from a stream (like collecting mail)
//    - streamKey: stream name (like mail route name)
//    - startId: where to start reading (like starting point)
//    - count: how many messages to read (optional)
//    - Returns: array of messages
export async function readMessages(
  client: RedisClient,
  streamKey: string,
  startId: string = '0-0',
  count?: number
): Promise<StreamMessage[]> {
  // Your implementation here
  // Hints:
  // 1. Use: const response = await client.xRead({ key: streamKey, id: startId }, { COUNT: count });
  // 2. startId '0-0' means "from beginning", '$' means "only new messages"
  // 3. Response format: [{ name: streamKey, messages: [...] }]
  // 4. Extract messages: response?.[0]?.messages || []
  // 5. Each message has: { id: '1234567890-0', message: { key: 'value' } }
  
  throw new Error('TODO: Implement readMessages function');
}

// 3. Get stream information (like checking mail route status)
//    - streamKey: stream name (like mail route name)
//    - Returns: stream info (length, first/last message IDs, etc.)
export async function getStreamInfo(
  client: RedisClient,
  streamKey: string
): Promise<any> {
  // Your implementation here
  // Hints:
  // 1. Use: const info = await client.xInfoStream(streamKey);
  // 2. Returns useful info: length, first-entry, last-entry, etc.
  // 3. Handle case where stream doesn't exist (try/catch)
  // 4. Log the info for debugging
  
  throw new Error('TODO: Implement getStreamInfo function');
}

// 4. Create a consumer group (like forming a delivery team)
//    - streamKey: stream name (like mail route name)
//    - groupName: group name (like team name)
//    - startId: where group should start reading (usually '0' for beginning)
//    - Returns: success status
export async function createConsumerGroup(
  client: RedisClient,
  streamKey: string,
  groupName: string,
  startId: string = '0'
): Promise<boolean> {
  // Your implementation here
  // Hints:
  // 1. Use: await client.xGroupCreate(streamKey, groupName, startId, { MKSTREAM: true });
  // 2. MKSTREAM: true creates the stream if it doesn't exist
  // 3. Handle "group already exists" error gracefully (try/catch)
  // 4. Return true if successful, false if group already exists
  // 5. Log the result for debugging
  
  throw new Error('TODO: Implement createConsumerGroup function');
}

// 5. Read messages as a consumer (like a mail carrier picking up mail)
//    - streamKey: stream name (like mail route name)
//    - groupName: group name (like team name)
//    - consumerName: consumer name (like carrier name)
//    - count: how many messages to read (optional)
//    - Returns: array of messages for this consumer
export async function readAsConsumer(
  client: RedisClient,
  streamKey: string,
  groupName: string,
  consumerName: string,
  count?: number
): Promise<StreamMessage[]> {
  // Your implementation here
  // Hints:
  // 1. Use: const response = await client.xReadGroup(groupName, consumerName, { key: streamKey, id: '>' }, { COUNT: count });
  // 2. id: '>' means "only new messages not yet delivered to this group"
  // 3. Response format is same as xRead: [{ name: streamKey, messages: [...] }]
  // 4. Extract messages: response?.[0]?.messages || []
  // 5. These messages are now "pending" until acknowledged
  
  throw new Error('TODO: Implement readAsConsumer function');
}

// 6. Acknowledge message processing (like confirming delivery)
//    - streamKey: stream name (like mail route name)
//    - groupName: group name (like team name)
//    - messageIds: array of message IDs to acknowledge
//    - Returns: number of messages acknowledged
export async function acknowledgeMessages(
  client: RedisClient,
  streamKey: string,
  groupName: string,
  messageIds: string[]
): Promise<number> {
  // Your implementation here
  // Hints:
  // 1. Use: const count = await client.xAck(streamKey, groupName, messageIds);
  // 2. This removes messages from the pending list
  // 3. Only acknowledge after successful processing
  // 4. Return the count of acknowledged messages
  // 5. Log the acknowledgment for debugging
  
  throw new Error('TODO: Implement acknowledgeMessages function');
}

// 7. Get pending messages (like checking undelivered mail)
//    - streamKey: stream name (like mail route name)
//    - groupName: group name (like team name)
//    - Returns: pending message info
export async function getPendingMessages(
  client: RedisClient,
  streamKey: string,
  groupName: string
): Promise<any> {
  // Your implementation here
  // Hints:
  // 1. Use: const pending = await client.xPending(streamKey, groupName);
  // 2. Returns: { count, start, end, consumers }
  // 3. Shows messages that were read but not acknowledged
  // 4. Useful for monitoring and debugging
  // 5. Handle case where group doesn't exist
  
  throw new Error('TODO: Implement getPendingMessages function');
}

// Example usage - Complete message flow demonstration
export async function example() {
  console.log('📨 Redis Streams Exercise - Build It Yourself!\n');

  // Connect to Redis
  const client = createClient({
    url: process.env.REDIS_URL || 'redis://localhost:6379'
  });

  try {
    await client.connect();
    console.log('✅ Connected to Redis');

    const streamKey = 'user-actions';
    const groupName = 'action-processors';
    const consumerName = 'worker-1';

    console.log('\n--- Step 1: Testing Your addMessage Function ---');
    try {
      const messageId1 = await addMessage(client, streamKey, {
        action: 'login',
        userId: '123',
        timestamp: Date.now().toString()
      });
      console.log(`✅ Message 1 added with ID: ${messageId1}`);

      const messageId2 = await addMessage(client, streamKey, {
        action: 'purchase',
        userId: '123',
        productId: 'abc',
        amount: '99.99'
      });
      console.log(`✅ Message 2 added with ID: ${messageId2}`);
    } catch (error) {
      console.log('❌ addMessage not implemented yet');
    }

    console.log('\n--- Step 2: Testing Your getStreamInfo Function ---');
    try {
      const info = await getStreamInfo(client, streamKey);
      console.log(`✅ Stream info: ${info.length} messages, first: ${info['first-entry']?.[0]}, last: ${info['last-entry']?.[0]}`);
    } catch (error) {
      console.log('❌ getStreamInfo not implemented yet');
    }

    console.log('\n--- Step 3: Testing Your readMessages Function ---');
    try {
      const messages = await readMessages(client, streamKey, '0-0');
      console.log(`✅ Read ${messages.length} messages from stream`);
      messages.forEach((msg, i) => {
        console.log(`   Message ${i + 1}: ID=${msg.id}, Data=${JSON.stringify(msg.message)}`);
      });
    } catch (error) {
      console.log('❌ readMessages not implemented yet');
    }

    console.log('\n--- Step 4: Testing Your createConsumerGroup Function ---');
    try {
      const created = await createConsumerGroup(client, streamKey, groupName, '0');
      console.log(`✅ Consumer group created: ${created}`);
    } catch (error) {
      console.log('❌ createConsumerGroup not implemented yet');
    }

    console.log('\n--- Step 5: Testing Your readAsConsumer Function ---');
    try {
      const consumerMessages = await readAsConsumer(client, streamKey, groupName, consumerName, 10);
      console.log(`✅ Consumer read ${consumerMessages.length} messages`);
      
      if (consumerMessages.length > 0) {
        console.log('\n--- Step 6: Testing Your acknowledgeMessages Function ---');
        const messageIds = consumerMessages.map(msg => msg.id);
        const ackCount = await acknowledgeMessages(client, streamKey, groupName, messageIds);
        console.log(`✅ Acknowledged ${ackCount} messages`);
      }
    } catch (error) {
      console.log('❌ readAsConsumer not implemented yet');
    }

    console.log('\n--- Step 7: Testing Your getPendingMessages Function ---');
    try {
      const pending = await getPendingMessages(client, streamKey, groupName);
      console.log(`✅ Pending messages: ${pending.count}`);
    } catch (error) {
      console.log('❌ getPendingMessages not implemented yet');
    }

    console.log('\n🏆 Basic streams exercise complete!');
    console.log('💡 Try implementing the functions to see everything work!');
    console.log('🎯 Next: Check out the other exercises for advanced patterns!');

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
// 1. Start with addMessage and readMessages - these are the foundation
// 2. Use console.log to debug what Redis returns
// 3. Handle errors gracefully with try/catch blocks
// 4. Test each function individually before running the full example
// 5. Use Redis CLI to inspect streams: docker exec -it redis-streams redis-cli
// 6. Check stream contents: XINFO STREAM streamname
// 7. Check consumer groups: XINFO GROUPS streamname

// 🎯 BONUS CHALLENGES (Once basic functions work):
// 1. Add message filtering by content
// 2. Implement message expiration/TTL
// 3. Add batch message processing
// 4. Create a message router for different stream types
// 5. Add stream statistics and monitoring
// 6. Implement message deduplication
// 7. Add message priority handling
// 8. Create a stream backup/restore system

// 🔍 UNDERSTANDING MESSAGE IDs:
// - Format: timestamp-sequence (e.g., "1640995200000-0")
// - Timestamp: milliseconds since Unix epoch
// - Sequence: incremental number for same millisecond
// - Always increasing order (newer messages have higher IDs)
// - Use '*' to auto-generate, or specify custom ID

// 🚀 TESTING YOUR IMPLEMENTATION:
// 1. Run: pnpm start
// 2. Check Redis: docker exec -it redis-streams redis-cli
// 3. List streams: SCAN 0 MATCH *
// 4. Check stream: XINFO STREAM user-actions
// 5. Read messages: XREAD STREAMS user-actions 0-0

// Run the example if this file is executed directly
if (require.main === module) {
  example().catch(console.error);
} 